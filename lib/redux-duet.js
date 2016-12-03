'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reduxActions = require('redux-actions');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var sep = '_';

function postfix(key) {
  var str = key.toString().toUpperCase();
  if (str === 'STARTED') {
    return '';
  }
  if (str.startsWith(sep)) {
    return str;
  }
  return '' + sep + str;
}

function duet(key, action, handler) {
  // if user supplied just two params, then
  // action param is actually the handler
  var fsa = handler ? (0, _reduxActions.createAction)(key, action) : (0, _reduxActions.createAction)(key);
  if (!handler) {
    handler = action;
  }

  if (typeof handler === 'function') {
    return {
      action: fsa,
      handler: _defineProperty({}, key, handler)
    };
  }

  return {
    action: fsa,
    handler: _lodash2.default.mapKeys(handler, function (v, k) {
      return '' + key + postfix(k);
    })
  };
}

exports.default = duet;