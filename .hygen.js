var path = require('path');

const isSet = (toggles, value) => {
  if (toggles === undefined) return false;
  if (toggles.length === 0) return false;
  return toggles.indexOf(value) > -1;
};

const isView = location => {
  var split = location.split(path.sep);
  console.log(split, split.length);
  var result = split.includes('routes') && split.includes('view');

  return result;
};

const isModuleView = location => {
  var split = location.split(path.sep);

  return isView(location) && split.length > 3;
};

const removeViewSuffix = name => name.replace('View', '');

module.exports = {
  helpers: {
    isSet,
    joinPath: path.join,
    isView,
    isModuleView,
    removeViewSuffix,
  },
};
