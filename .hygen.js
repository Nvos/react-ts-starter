var path = require('path');

function isSet(toggles, value) {
  if (toggles === undefined) return false;
  if (toggles.length === 0) return false;
  return toggles.indexOf(value) > -1;
}

function isView(location) {
  var split = location.split(path.sep);
  var result = split.includes('routes') && split.includes('view');

  return result;
}

module.exports = {
  helpers: {
    isSet,
    joinPath: path.join,
    isView,
  },
};
