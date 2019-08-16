const { join, sep } = require('path');
const { getDirectories, isRootComponent, isRootView, uppercase } = require('../../utils');

const OPTIONS = {
  COMPONENT: 'COMPONENT',
  MODULE_COMPONENT: 'MODULE_COMPONENT',
  VIEW: 'VIEW',
  MODULE_VIEW: 'MODULE_VIEW'
}

var modules = getDirectories(join('src', 'routes'));

var choices = [ 
  {
  message: 'Component',
  name: OPTIONS.COMPONENT,
  },
  {
    message: 'View',
    name: OPTIONS.VIEW,
  },
];

if (modules.length > 0) {
  choices = [...choices, 
    {
      message: 'Module view',
      name: OPTIONS.MODULE_VIEW,
    },
    {
      message: 'Module component',
      name: OPTIONS.MODULE_COMPONENT,
    },
  ]
}

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Component name eg. Fancy',
  },
  {
    type: 'multiselect',
    name: 'configuration',
    message: 'Select component extensions',
    choices: [
      { name: 'styles', message: 'With Styles?' },
      { name: 'connected', message: 'With Redux Connected?' },
      { name: 'test', message: 'With Test?' },
      { name: 'stories', message: 'With Stories?' },
    ],
  },
  {
    type: 'select',
    name: 'location',
    message: 'Select component location',
    choices,
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt(prompts)
      .then(answers => {
        // Depending on location selected update path or provide further prompts
        switch(answers.location) {
          case OPTIONS.COMPONENT: {
            answers.location = join('src', 'component');
            return answers;
          }
          case OPTIONS.VIEW: {
            answers.location = join('src', 'routes', 'view');
            return answers;
          }
          case OPTIONS.MODULE_COMPONENT: {
            return inquirer
              .prompt({
                type: 'select',
                name: 'location',
                message: 'Select module',
                choices: modules.map(it => ({
                  message: it,
                  value: join(it, 'component'),
                })),
              })
              .then(nextAnswers => Object.assign({}, answers, nextAnswers));
          }
          case OPTIONS.MODULE_VIEW: {
            return inquirer
              .prompt({
                type: 'select',
                name: 'location',
                message: 'Select module',
                choices: modules.map(it => ({
                  message: it,
                  value: join(it, 'view'),
                })),
              })
              .then(nextAnswers => Object.assign({}, answers, nextAnswers));
          }
          default: 
            throw new Error('Unsupported option selected: ' + answers.location);
        }
      })
      .then(answers => {
        // Provide correct module name to be used in templates
        if (isRootComponent(answers.location) || isRootView(answers.location)) {
          // Root slice
          answers.module = 'Root';
        } else {
          // Module/directory slice
          var split = answers.location.split(sep);
          answers.module = uppercase(split[2]);
        }
        
        return answers;
      })
       // Additional validation step
      .then(answers => {
        var isView = answers.location.includes('view');
        if (answers.name[0] !== answers.name[0].toUpperCase()) {
          throw new Error(`Component name should use pascal case e.g. FancyThing`);
        }

        if (isView && !answers.name.endsWith('View')) {
          throw new Error(`View name should end with View e.g. StatisticView`);
        }

        if (answers.configuration.includes('connected') && !isView) {
          throw new Error(`Component should not use redux directly`);
        }

        return answers;
      });
  },
};
