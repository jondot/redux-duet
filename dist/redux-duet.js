(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("redux-actions"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "redux-actions"], factory);
	else if(typeof exports === 'object')
		exports["Redux"] = factory(require("lodash"), require("redux-actions"));
	else
		root["Redux"] = factory(root["lodash"], root["redux-actions"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.promised = undefined;

	var _reduxActions = __webpack_require__(2);

	var _lodash = __webpack_require__(1);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var sep = '_';

	function promised(key, map) {
	  return _lodash2.default.mapKeys(map, function (v, k) {
	    return '' + key + postfix(k);
	  });
	}
	exports.promised = promised;


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
	    handler: promised(key, handler)
	  };
	}

	exports.default = duet;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;