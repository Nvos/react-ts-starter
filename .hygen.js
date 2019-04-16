var path = require('path');

function isSet(toggles, value) {
  if (toggles === undefined) return false;
  if (toggles.length === 0) return false;
  return toggles.indexOf(value) > -1;
}

module.exports = {
  helpers: {
    isSet,
    joinPath: path.join,
  },
};
