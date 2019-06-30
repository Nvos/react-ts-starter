const { lstatSync, readdirSync } = require('fs');
const { join } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

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
    choices: [
      {
        message: 'Components directory',
        name: 'components',
      },
      {
        message: 'Module view',
        name: 'module/view',
      },
      {
        message: 'Module component',
        name: 'module/component',
      },
      {
        message: 'View',
        name: 'view',
      },
    ],
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt(prompts)
      .then(answers => {
        if (answers.location === 'components') {
          answers.location = 'src/components';
          return answers;
        }

        if (answers.location === 'view') {
          answers.location = 'src/routes/view';
          return answers;
        }

        var choices = [];
        var modules = getDirectories('src/routes');
        if (answers.location === 'module/view') {
          choices = modules.map(it => ({
            message: it.replace('src/routes/', ''),
            value: join(it, 'view'),
          }));
        } else if (answers.location === 'module/component') {
          choices = modules.map(it => ({
            message: it.replace('src/routes/', ''),
            value: join(it, 'components'),
          }));
        }

        return inquirer
          .prompt({
            type: 'select',
            name: 'location',
            message: 'Select module',
            choices,
          })
          .then(nextAnswers => Object.assign({}, answers, nextAnswers));
      })
      .then(answers => {
        if (!answers.location.includes(`src`)) {
          throw new Error(
            'Component generated outside of ./src at ' + answers.location,
          );
        }

        var isGlobal =
          answers.location.includes('src/components') ||
          answers.location.includes('src\\components');

        if (isGlobal && answers.configuration.indexOf('connected') !== -1) {
          throw new Error(`Global component should not use redux`);
        }

        return answers;
      });
  },
};
