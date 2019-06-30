const { lstatSync, readdirSync } = require('fs');
const { join, sep } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory);

const prompts = [
  {
    type: 'input',
    name: 'name',
    message: 'Name of slice',
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt(prompts)
      .then(answers => {
        var modules = getDirectories('src/routes');
        var choices = modules.map(it => ({
          message: join(it, 'slice'),
          value: join(it, 'slice'),
        }));

        var choices = [{
          message: join('src', 'store', 'slice'),
          value: join('src', 'store', 'slice'),
        },...choices]

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
        var isRoot = answers.location === 'src/store/slice' || answers.location === 'src\\store\\slice'
        if (isRoot) {
          answers.module = 'Root';
        } else {
          var split = answers.location.split(sep);
          answers.module = split[2].charAt(0).toUpperCase() + split[2].slice(1);
        }
        
        console.log(answers.module, answers.location);
        throw new Error('!')
        return answers;
      });
  },
};
