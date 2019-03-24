const path = require('path');

function contains(toggles, value) {
  if (toggles === undefined) return false;
  if (toggles.length === 0) return false;
  return toggles.indexOf(value) > -1;
}

module.exports = function(plop) {
  plop.addHelper('contains', contains);

  plop.setGenerator('component', {
    description: 'Standard component generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'choose component name in pascal case (e.g. Fancy)',
        basePath: '.',
      },
      {
        type: 'checkbox',
        name: 'configuration',
        message: 'Component configuration',
        basePath: '.',
        choices: [
          { name: 'Connected', value: 'connected', checked: false },
          { name: 'Test', value: 'test', checked: false },
          { name: 'Stories', value: 'stories', checked: false },
        ],
      },
      {
        type: 'list',
        name: 'location',
        message: 'Generate at',
        basePath: '.',
        choices: [
          {
            name: 'Components',
            value: path.join(__dirname, `src/components`),
            checked: false,
          },
          {
            name: 'Current terminal path',
            value: path.join(__dirname, process.cwd()),
            checked: true,
          },
        ],
      },
    ],
    actions: function(data) {
      var actions = [];

      actions.push({
        type: 'add',
        path: path.join(__dirname, `src/components/${data.name}/index.tsx`),
        templateFile: '.blueprint/component/index.hbs',
      });

      actions.push({
        type: 'add',
        path: path.join(
          __dirname,
          `${data.location}/${data.name}/${data.name}.tsx`,
        ),
        templateFile: '.blueprint/component/component.hbs',
      });

      if (contains(data.configuration, 'test')) {
        actions.push({
          type: 'add',
          path: path.join(
            __dirname,
            `${data.location}/${data.name}/${data.name}.test.tsx`,
          ),
          templateFile: '.blueprint/component/component.test.hbs',
        });
      }

      if (contains(data.configuration, 'stories')) {
        actions.push({
          type: 'add',
          path: path.join(
            __dirname,
            `${data.location}/${data.name}/${data.name}.stories.tsx`,
          ),
          templateFile: '.blueprint/component/component.stories.hbs',
        });
      }

      if (data.location.endsWith('components')) {
        actions.push({
          type: 'append',
          path: path.join(__dirname, 'src/components/index.tsx'),
          template: "export * from './{{name}}';",
        });
      } else {
        if (!data.location.includes('/src/')) {
          throw new Error('Component generated outside of ./src');
        }
      }

      return [];
    },
  });
};
