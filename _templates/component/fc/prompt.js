const path = require('path');
const hygen = require('../../../.hygen.js');
const { helpers } = hygen;
const { isSet } = helpers;

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
        value: `src/components`,
      },
      {
        message: 'Current directory',
        value: path.join(__dirname, process.cwd()),
      },
    ],
  },
];

module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer.prompt(prompts).then(answers => {
      if (!answers.location.includes(`src`)) {
        throw new Error(
          'Component generated outside of ./src at ' +
            data.location.replace('\\', '/'),
        );
      }

      if (
        isSet(answers.configuration, 'stories') &&
        !answers.location.includes(`components`)
      ) {
        throw new Error('Storybook can only be used in root components');
      }

      if (
        isSet(answers.configuration, 'stories') &&
        isSet(answers.configuration, 'connected')
      ) {
        throw new Error(
          'Storybook can only be used on not connected components',
        );
      }

      return answers;
    });
  },
};
