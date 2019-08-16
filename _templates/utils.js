const { lstatSync, readdirSync } = require('fs');
const { join, sep } = require('path');

const isDirectory = source => lstatSync(source).isDirectory();
const isView = it => it.includes('view');
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .filter(it => !isView(it));

const pathContainsToken = (path, value) => {
  const split = path.split(sep);
  return split.indexOf(value) !== -1;
}

const isRootSlice = (path) => path.includes(join('src', 'store', 'slice'));
const isRootComponent = (path) => path.includes(join('src', 'component'));
const isRootView = (path) => path.includes(join('src', 'routes', 'view'));
// Assumption is made that anything with path longer than 2 is module view as src/routes/*/view
const isModuleView = (path) => path.split(sep).length > 2;

const uppercase = (word) => word.charAt(0).toUpperCase() + word.slice(1);

module.exports = {
  getDirectories,
  isRootSlice,
  uppercase,
  pathContainsToken,
  isRootView,
  isRootComponent,
  isModuleView
};