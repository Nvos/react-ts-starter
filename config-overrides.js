const {
  override,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');

module.exports = override(
  disableEsLint(),
  addBundleVisualizer({}, true),
  addWebpackAlias({
    ['@']: path.resolve(__dirname, 'src'),
  }),
);
