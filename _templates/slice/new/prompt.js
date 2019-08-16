const { join, sep } = require('path');
const { getDirectories, isRootSlice, uppercase } = require('../../utils');

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of slice',
  },
];

var modules = getDirectories(join('src', 'routes'));

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt(prompts)
      .then(answers => {
        // List of modules/directories where codegen is possible
        var choices = modules.map(it => ({
          message: join(it, 'slice'),
          value: join(it, 'slice'),
        }));

        // Add possibility to use root slice for codegen
        var choices = [{
          message: join('src', 'store', 'slice'),
          value: join('src', 'store', 'slice'),
        },...choices]

        // Return prompt with choice of directory/module
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
        // Provide correct module name to be used in templates
        if (isRootSlice(answers.location)) {
          // Root slice
          answers.module = 'Root';
        } else {
          // Module/directory slice
          var split = answers.location.split(sep);
          answers.module = uppercase(split[2]);
        }
        
        console.warn(`If you'r not using epics, remove epic imports from generated slice otherwise there will be linting and type errors!`)
        return answers;
      });
  },
};
