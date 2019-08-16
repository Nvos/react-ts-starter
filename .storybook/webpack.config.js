const path = require('path');

// TODO: Verify if disabling eslint is neccessary
const disableEsLint = config => {
  let eslintRules = config.module.rules.filter(
    r =>
      r.use && r.use.some(u => u.options && u.options.useEslintrc !== void 0),
  );
  eslintRules.forEach(rule => {
    config.module.rules = config.module.rules.filter(r => r !== rule);
  });
  return config;
};

module.exports = ({ config, mode }) => {
  config.resolve.alias = {
    ['@']: path.resolve(__dirname, '../src'),
  };

  config.module.rules.push({
    test: /\.stories\.tsx?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: { parser: 'typescript' },
      },
    ],
    enforce: 'pre',
  });

  // Disable eslint in storybook as eslint configuration differs from root one
  return disableEsLint(config);
};
