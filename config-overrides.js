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
    //! Is it necessary to disable it in production?
    'react-dom': '@hot-loader/react-dom',
  }),
);
