define(["@grafana/data","@grafana/runtime","@grafana/ui","emotion","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_data__, __WEBPACK_EXTERNAL_MODULE__grafana_runtime__, __WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_emotion__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js ***!
  \******************************************************************************************/
/*! exports provided: arrayLikeToArray, arrayWithHoles, defineProperty, iterableToArrayLimit, nonIterableRest, objectSpread2, slicedToArray, unsupportedIterableToArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayLikeToArray", function() { return _arrayLikeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayWithHoles", function() { return _arrayWithHoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineProperty", function() { return _defineProperty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iterableToArrayLimit", function() { return _iterableToArrayLimit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonIterableRest", function() { return _nonIterableRest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectSpread2", function() { return _objectSpread2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slicedToArray", function() { return _slicedToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsupportedIterableToArray", function() { return _unsupportedIterableToArray; });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}




/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/config/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/config/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.25.2/min/vs'
  }
};

/* harmony default export */ __webpack_exports__["default"] = (config);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/index.js":
/*!*************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader/index.js */ "../node_modules/@monaco-editor/loader/lib/es/loader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _loader_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });





/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/loader/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/loader/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");
/* harmony import */ var state_local__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! state-local */ "../node_modules/state-local/lib/es/state-local.js");
/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ "../node_modules/@monaco-editor/loader/lib/es/config/index.js");
/* harmony import */ var _validators_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../validators/index.js */ "../node_modules/@monaco-editor/loader/lib/es/validators/index.js");
/* harmony import */ var _utils_compose_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/compose.js */ "../node_modules/@monaco-editor/loader/lib/es/utils/compose.js");
/* harmony import */ var _utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/deepMerge.js */ "../node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js");
/* harmony import */ var _utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/makeCancelable.js */ "../node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js");








/** the local state of the module */

var _state$create = state_local__WEBPACK_IMPORTED_MODULE_1__["default"].create({
  config: _config_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  isInitialized: false,
  resolve: null,
  reject: null,
  monaco: null
}),
    _state$create2 = Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["slicedToArray"])(_state$create, 2),
    getState = _state$create2[0],
    setState = _state$create2[1];
/**
 * set the loader configuration
 * @param {Object} config - the configuration object
 */


function config(config) {
  setState(function (state) {
    return {
      config: Object(_utils_deepMerge_js__WEBPACK_IMPORTED_MODULE_5__["default"])(state.config, _validators_index_js__WEBPACK_IMPORTED_MODULE_3__["default"].config(config))
    };
  });
}
/**
 * handles the initialization of the monaco-editor
 * @return {Promise} - returns an instance of monaco (with a cancelable promise)
 */


function init() {
  var state = getState(function (_ref) {
    var isInitialized = _ref.isInitialized;
    return {
      isInitialized: isInitialized
    };
  });

  if (!state.isInitialized) {
    if (window.monaco && window.monaco.editor) {
      storeMonacoInstance(window.monaco);
      return Object(_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(Promise.resolve(window.monaco));
    }

    Object(_utils_compose_js__WEBPACK_IMPORTED_MODULE_4__["default"])(injectScripts, getMonacoLoaderScript)(configureLoader);
    setState({
      isInitialized: true
    });
  }

  return Object(_utils_makeCancelable_js__WEBPACK_IMPORTED_MODULE_6__["default"])(wrapperPromise);
}
/**
 * injects provided scripts into the document.body
 * @param {Object} script - an HTML script element
 * @return {Object} - the injected HTML script element
 */


function injectScripts(script) {
  return document.body.appendChild(script);
}
/**
 * creates an HTML script element with/without provided src
 * @param {string} [src] - the source path of the script
 * @return {Object} - the created HTML script element
 */


function createScript(src) {
  var script = document.createElement('script');
  return src && (script.src = src), script;
}
/**
 * creates an HTML script element with the monaco loader src
 * @return {Object} - the created HTML script element
 */


function getMonacoLoaderScript(configureLoader) {
  var state = getState(function (_ref2) {
    var config = _ref2.config,
        reject = _ref2.reject;
    return {
      config: config,
      reject: reject
    };
  });
  var loaderScript = createScript("".concat(state.config.paths.vs, "/loader.js"));

  loaderScript.onload = function () {
    return configureLoader();
  };

  loaderScript.onerror = state.reject;
  return loaderScript;
}
/**
 * configures the monaco loader
 */


function configureLoader() {
  var state = getState(function (_ref3) {
    var config = _ref3.config,
        resolve = _ref3.resolve,
        reject = _ref3.reject;
    return {
      config: config,
      resolve: resolve,
      reject: reject
    };
  });
  var require = window.require;

  require.config(state.config);

  require(['vs/editor/editor.main'], function (monaco) {
    storeMonacoInstance(monaco);
    state.resolve(monaco);
  }, function (error) {
    state.reject(error);
  });
}
/**
 * store monaco instance in local state
 */


function storeMonacoInstance(monaco) {
  if (!getState().monaco) {
    setState({
      monaco: monaco
    });
  }
}
/**
 * internal helper function
 * extracts stored monaco instance
 * @return {Object|null} - the monaco instance
 */


function __getMonacoInstance() {
  return getState(function (_ref4) {
    var monaco = _ref4.monaco;
    return monaco;
  });
}

var wrapperPromise = new Promise(function (resolve, reject) {
  return setState({
    resolve: resolve,
    reject: reject
  });
});
var loader = {
  config: config,
  init: init,
  __getMonacoInstance: __getMonacoInstance
};

/* harmony default export */ __webpack_exports__["default"] = (loader);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/utils/compose.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/utils/compose.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (compose);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/utils/curry.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/utils/curry.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len2 = arguments.length, nextArgs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nextArgs[_key2] = arguments[_key2];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

/* harmony default export */ __webpack_exports__["default"] = (curry);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/utils/deepMerge.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_virtual/_rollupPluginBabelHelpers.js */ "../node_modules/@monaco-editor/loader/lib/es/_virtual/_rollupPluginBabelHelpers.js");


function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) {
      if (target[key]) {
        Object.assign(source[key], merge(target[key], source[key]));
      }
    }
  });
  return Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])(Object(_virtual_rollupPluginBabelHelpers_js__WEBPACK_IMPORTED_MODULE_0__["objectSpread2"])({}, target), source);
}

/* harmony default export */ __webpack_exports__["default"] = (merge);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/utils/isObject.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/utils/isObject.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

/* harmony default export */ __webpack_exports__["default"] = (isObject);


/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/utils/makeCancelable.js ***!
  \****************************************************************************/
/*! exports provided: default, CANCELATION_MESSAGE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CANCELATION_MESSAGE", function() { return CANCELATION_MESSAGE; });
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = {
  type: 'cancelation',
  msg: 'operation is manually canceled'
};

function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise["catch"](reject);
  });
  return wrappedPromise.cancel = function () {
    return hasCanceled_ = true;
  }, wrappedPromise;
}

/* harmony default export */ __webpack_exports__["default"] = (makeCancelable);



/***/ }),

/***/ "../node_modules/@monaco-editor/loader/lib/es/validators/index.js":
/*!************************************************************************!*\
  !*** ../node_modules/@monaco-editor/loader/lib/es/validators/index.js ***!
  \************************************************************************/
/*! exports provided: default, errorHandler, errorMessages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorHandler", function() { return errorHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessages", function() { return errorMessages; });
/* harmony import */ var _utils_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/curry.js */ "../node_modules/@monaco-editor/loader/lib/es/utils/curry.js");
/* harmony import */ var _utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/isObject.js */ "../node_modules/@monaco-editor/loader/lib/es/utils/isObject.js");



/**
 * validates the configuration object and informs about deprecation
 * @param {Object} config - the configuration object 
 * @return {Object} config - the validated configuration object
 */

function validateConfig(config) {
  if (!config) errorHandler('configIsRequired');
  if (!Object(_utils_isObject_js__WEBPACK_IMPORTED_MODULE_1__["default"])(config)) errorHandler('configType');

  if (config.urls) {
    informAboutDeprecation();
    return {
      paths: {
        vs: config.urls.monacoBase
      }
    };
  }

  return config;
}
/**
 * logs deprecation message
 */


function informAboutDeprecation() {
  console.warn(errorMessages.deprecation);
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  configIsRequired: 'the configuration object is required',
  configType: 'the configuration object should be an object',
  "default": 'an unknown error accured in `@monaco-editor/loader` package',
  deprecation: "Deprecation warning!\n    You are using deprecated way of configuration.\n\n    Instead of using\n      monaco.config({ urls: { monacoBase: '...' } })\n    use\n      monaco.config({ paths: { vs: '...' } })\n\n    For more please check the link https://github.com/suren-atoyan/monaco-loader#config\n  "
};
var errorHandler = Object(_utils_curry_js__WEBPACK_IMPORTED_MODULE_0__["default"])(throwError)(errorMessages);
var validators = {
  config: validateConfig
};

/* harmony default export */ __webpack_exports__["default"] = (validators);



/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "../node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonacoContainer/index.js */ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useMount/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUpdate/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/index.js */ "../node_modules/@monaco-editor/react/lib/es/utils/index.js");








function DiffEditor({
  original,
  modified,
  language,
  originalLanguage,
  modifiedLanguage,

  /* === */
  originalModelPath,
  modifiedModelPath,
  keepCurrentOriginalModel,
  keepCurrentModifiedModel,
  theme,
  loading,
  options,

  /* === */
  height,
  width,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount
}) {
  const [isEditorReady, setIsEditorReady] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isMonacoMounting, setIsMonacoMounting] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const monacoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const onMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(onMount);
  const beforeMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(beforeMount);
  Object(_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const modifiedEditor = editorRef.current.getModifiedEditor();

    if (modifiedEditor.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      modifiedEditor.setValue(modified);
    } else {
      if (modified !== modifiedEditor.getValue()) {
        modifiedEditor.executeEdits('', [{
          range: modifiedEditor.getModel().getFullModelRange(),
          text: modified,
          forceMoveMarkers: true
        }]);
        modifiedEditor.pushUndoStop();
      }
    }
  }, [modified], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const {
      original,
      modified
    } = editorRef.current.getModel();
    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  const setModels = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    beforeMountRef.current(monacoRef.current);
    const originalModel = monacoRef.current.editor.createModel(original, originalLanguage || language, originalModelPath && monacoRef.current.Uri.parse(originalModelPath));
    const modifiedModel = monacoRef.current.editor.createModel(modified, modifiedLanguage || language, modifiedModelPath && monacoRef.current.Uri.parse(modifiedModelPath));
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage, originalModelPath, modifiedModelPath]);
  const createEditor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, {
      automaticLayout: true,
      ...options
    });
    setModels();
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [options, theme, setModels]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  function disposeEditor() {
    const models = editorRef.current.getModel();

    if (!keepCurrentOriginalModel) {
      var _models$original;

      (_models$original = models.original) === null || _models$original === void 0 ? void 0 : _models$original.dispose();
    }

    if (!keepCurrentModifiedModel) {
      var _models$modified;

      (_models$modified = models.modified) === null || _models$modified === void 0 ? void 0 : _models$modified.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

DiffEditor.propTypes = {
  original: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  modified: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  language: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  originalLanguage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  modifiedLanguage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /* === */
  originalModelPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  modifiedModelPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  keepCurrentOriginalModel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  keepCurrentModifiedModel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /* === */
  beforeMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
DiffEditor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  keepCurrentOriginalModel: false,
  keepCurrentModifiedModel: false,

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["noop"],
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["noop"]
};

/* harmony default export */ __webpack_exports__["default"] = (DiffEditor);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffEditor.js */ "../node_modules/@monaco-editor/react/lib/es/DiffEditor/DiffEditor.js");



var index = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_DiffEditor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/Editor/Editor.js":
/*!********************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/Editor/Editor.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "../node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MonacoContainer/index.js */ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js");
/* harmony import */ var _hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useMount/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");
/* harmony import */ var _hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUpdate/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js");
/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/index.js */ "../node_modules/@monaco-editor/react/lib/es/utils/index.js");
/* harmony import */ var _hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks/usePrevious/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js");









const viewStates = new Map();

function Editor({
  defaultValue,
  defaultLanguage,
  defaultPath,
  value,
  language,
  path,

  /* === */
  theme,
  line,
  loading,
  options,
  overrideServices,
  saveViewState,
  keepCurrentModel,

  /* === */
  width,
  height,
  className,
  wrapperClassName,

  /* === */
  beforeMount,
  onMount,
  onChange,
  onValidate
}) {
  const [isEditorReady, setIsEditorReady] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const [isMonacoMounting, setIsMonacoMounting] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  const monacoRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const editorRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const onMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(onMount);
  const beforeMountRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(beforeMount);
  const subscriptionRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  const valueRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(value);
  const previousPath = Object(_hooks_usePrevious_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(path);
  Object(_hooks_useMount_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    const cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
    cancelable.then(monaco => (monacoRef.current = monaco) && setIsMonacoMounting(false)).catch(error => (error === null || error === void 0 ? void 0 : error.type) !== 'cancelation' && console.error('Monaco initialization: error:', error));
    return () => editorRef.current ? disposeEditor() : cancelable.cancel();
  });
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    const model = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_6__["getOrCreateModel"])(monacoRef.current, defaultValue || value, defaultLanguage || language, path);

    if (model !== editorRef.current.getModel()) {
      saveViewState && viewStates.set(previousPath, editorRef.current.saveViewState());
      editorRef.current.setModel(model);
      saveViewState && editorRef.current.restoreViewState(viewStates.get(path));
    }
  }, [path], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    if (editorRef.current.getOption(monacoRef.current.editor.EditorOption.readOnly)) {
      editorRef.current.setValue(value);
    } else {
      if (value !== editorRef.current.getValue()) {
        editorRef.current.executeEdits('', [{
          range: editorRef.current.getModel().getFullModelRange(),
          text: value,
          forceMoveMarkers: true
        }]);
        editorRef.current.pushUndoStop();
      }
    }
  }, [value], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    // reason for undefined check: https://github.com/suren-atoyan/monaco-react/pull/188
    if (!Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_6__["isUndefined"])(line)) {
      editorRef.current.revealLine(line);
    }
  }, [line], isEditorReady);
  Object(_hooks_useUpdate_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(() => {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  const createEditor = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(() => {
    beforeMountRef.current(monacoRef.current);
    const autoCreatedModelPath = path || defaultPath;
    const defaultModel = Object(_utils_index_js__WEBPACK_IMPORTED_MODULE_6__["getOrCreateModel"])(monacoRef.current, value || defaultValue, defaultLanguage || language, autoCreatedModelPath);
    editorRef.current = monacoRef.current.editor.create(containerRef.current, {
      model: defaultModel,
      automaticLayout: true,
      ...options
    }, overrideServices);
    saveViewState && editorRef.current.restoreViewState(viewStates.get(autoCreatedModelPath));
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [defaultValue, defaultLanguage, defaultPath, value, language, path, options, overrideServices, saveViewState, theme]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isEditorReady) {
      onMountRef.current(editorRef.current, monacoRef.current);
    }
  }, [isEditorReady]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]); // subscription
  // to avoid unnecessary updates (attach - dispose listener) in subscription

  valueRef.current = value;
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isEditorReady && onChange) {
      var _subscriptionRef$curr, _editorRef$current;

      (_subscriptionRef$curr = subscriptionRef.current) === null || _subscriptionRef$curr === void 0 ? void 0 : _subscriptionRef$curr.dispose();
      subscriptionRef.current = (_editorRef$current = editorRef.current) === null || _editorRef$current === void 0 ? void 0 : _editorRef$current.onDidChangeModelContent(event => {
        const editorValue = editorRef.current.getValue();

        if (valueRef.current !== editorValue) {
          onChange(editorValue, event);
        }
      });
    }
  }, [isEditorReady, onChange]); // onValidate

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (isEditorReady) {
      const changeMarkersListener = monacoRef.current.editor.onDidChangeMarkers(uris => {
        var _editorRef$current$ge;

        const editorUri = (_editorRef$current$ge = editorRef.current.getModel()) === null || _editorRef$current$ge === void 0 ? void 0 : _editorRef$current$ge.uri;

        if (editorUri) {
          const currentEditorHasMarkerChanges = uris.find(uri => uri.path === editorUri.path);

          if (currentEditorHasMarkerChanges) {
            const markers = monacoRef.current.editor.getModelMarkers({
              resource: editorUri
            });
            onValidate === null || onValidate === void 0 ? void 0 : onValidate(markers);
          }
        }
      });
      return () => {
        changeMarkersListener === null || changeMarkersListener === void 0 ? void 0 : changeMarkersListener.dispose();
      };
    }
  }, [isEditorReady, onValidate]);

  function disposeEditor() {
    var _subscriptionRef$curr2;

    (_subscriptionRef$curr2 = subscriptionRef.current) === null || _subscriptionRef$curr2 === void 0 ? void 0 : _subscriptionRef$curr2.dispose();

    if (keepCurrentModel) {
      saveViewState && viewStates.set(path, editorRef.current.saveViewState());
    } else {
      var _editorRef$current$ge2;

      (_editorRef$current$ge2 = editorRef.current.getModel()) === null || _editorRef$current$ge2 === void 0 ? void 0 : _editorRef$current$ge2.dispose();
    }

    editorRef.current.dispose();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MonacoContainer_index_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef,
    className: className,
    wrapperClassName: wrapperClassName
  });
}

Editor.propTypes = {
  defaultValue: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  defaultPath: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  defaultLanguage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  value: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  language: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  path: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /* === */
  theme: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  line: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  options: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  overrideServices: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  saveViewState: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  keepCurrentModel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /* === */
  width: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  height: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string]),
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,

  /* === */
  beforeMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMount: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onValidate: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func
};
Editor.defaultProps = {
  theme: 'light',
  loading: 'Loading...',
  options: {},
  overrideServices: {},
  saveViewState: true,
  keepCurrentModel: false,

  /* === */
  width: '100%',
  height: '100%',

  /* === */
  beforeMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["noop"],
  onMount: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["noop"],
  onValidate: _utils_index_js__WEBPACK_IMPORTED_MODULE_6__["noop"]
};

/* harmony default export */ __webpack_exports__["default"] = (Editor);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/Editor/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/Editor/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Editor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.js */ "../node_modules/@monaco-editor/react/lib/es/Editor/Editor.js");



var index = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_Editor_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/Loading/Loading.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/Loading/Loading.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading({
  content
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: loadingStyles
  }, content);
}

/* harmony default export */ __webpack_exports__["default"] = (Loading);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loading_Loading_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loading/Loading.js */ "../node_modules/@monaco-editor/react/lib/es/Loading/Loading.js");
/* harmony import */ var _styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.js */ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js");





// one of the reasons why we use a separate prop for passing ref instead of using forwardref

function MonacoContainer({
  width,
  height,
  isEditorReady,
  loading,
  _ref,
  className,
  wrapperClassName
}) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].wrapper,
      width,
      height
    },
    className: wrapperClassName
  }, !isEditorReady && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Loading_Loading_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
    content: loading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: _ref,
    style: { ..._styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].fullWidth,
      ...(!isEditorReady && _styles_js__WEBPACK_IMPORTED_MODULE_3__["default"].hide)
    },
    className: className
  }));
}

MonacoContainer.propTypes = {
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  height: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.element, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]).isRequired,
  isEditorReady: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  wrapperClassName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

/* harmony default export */ __webpack_exports__["default"] = (MonacoContainer);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/MonacoContainer/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MonacoContainer.js */ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/MonacoContainer.js");



var MonacoContainer = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(_MonacoContainer_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (MonacoContainer);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/MonacoContainer/styles.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const styles = {
  wrapper: {
    display: 'flex',
    position: 'relative',
    textAlign: 'initial'
  },
  fullWidth: {
    width: '100%'
  },
  hide: {
    display: 'none'
  }
};

/* harmony default export */ __webpack_exports__["default"] = (styles);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "../node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _useMount_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../useMount/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js");




function useMonaco() {
  const [monaco, setMonaco] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].__getMonacoInstance());
  Object(_useMount_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
    let cancelable;

    if (!monaco) {
      cancelable = _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init();
      cancelable.then(monaco => {
        setMonaco(monaco);
      });
    }

    return () => {
      var _cancelable;

      return (_cancelable = cancelable) === null || _cancelable === void 0 ? void 0 : _cancelable.cancel();
    };
  });
  return monaco;
}

/* harmony default export */ __webpack_exports__["default"] = (useMonaco);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/hooks/useMount/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useMount(effect) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(effect, []);
}

/* harmony default export */ __webpack_exports__["default"] = (useMount);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/hooks/usePrevious/index.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function usePrevious(value) {
  const ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
}

/* harmony default export */ __webpack_exports__["default"] = (usePrevious);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/hooks/useUpdate/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


function useUpdate(effect, deps, applyChanges = true) {
  const isInitialMount = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(isInitialMount.current || !applyChanges ? () => {
    isInitialMount.current = false;
  } : effect, deps);
}

/* harmony default export */ __webpack_exports__["default"] = (useUpdate);


/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/index.js":
/*!************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/index.js ***!
  \************************************************************/
/*! exports provided: loader, DiffEditor, useMonaco, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @monaco-editor/loader */ "../node_modules/@monaco-editor/loader/lib/es/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loader", function() { return _monaco_editor_loader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DiffEditor/index.js */ "../node_modules/@monaco-editor/react/lib/es/DiffEditor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DiffEditor", function() { return _DiffEditor_index_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/useMonaco/index.js */ "../node_modules/@monaco-editor/react/lib/es/hooks/useMonaco/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMonaco", function() { return _hooks_useMonaco_index_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Editor/index.js */ "../node_modules/@monaco-editor/react/lib/es/Editor/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Editor_index_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/es/utils/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/es/utils/index.js ***!
  \******************************************************************/
/*! exports provided: getOrCreateModel, isUndefined, noop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOrCreateModel", function() { return getOrCreateModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isUndefined", function() { return isUndefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
function noop() {}

function getOrCreateModel(monaco, value, language, path) {
  return getModel(monaco, path) || createModel(monaco, value, language, path);
}

function getModel(monaco, path) {
  return monaco.editor.getModel(crateModelUri(monaco, path));
}

function createModel(monaco, value, language, path) {
  return monaco.editor.createModel(value, language, path && crateModelUri(monaco, path));
}

function crateModelUri(monaco, path) {
  return monaco.Uri.parse(path);
}

function isUndefined(input) {
  return input === undefined;
}




/***/ }),

/***/ "../node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!********************************************************!*\
  !*** ../node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \********************************************************/
/*! exports provided: A, Animator, Array, Box, Circle, ClipPath, Color, Container, Controller, Defs, Dom, Ease, Element, Ellipse, EventTarget, ForeignObject, Fragment, G, Gradient, Image, Line, List, Marker, Mask, Matrix, Morphable, NonMorphable, Number, ObjectBag, PID, Path, PathArray, Pattern, Point, PointArray, Polygon, Polyline, Queue, Rect, Runner, SVG, Shape, Spring, Stop, Style, Svg, Symbol, Text, TextPath, Timeline, TransformBag, Tspan, Use, adopt, assignNewId, clearEvents, create, defaults, dispatch, easing, eid, extend, find, getClass, getEventTarget, getEvents, getWindow, makeInstance, makeMorphable, mockAdopt, namespaces, nodeOrNew, off, on, parser, regex, register, registerMorphableType, registerWindow, restoreWindow, root, saveWindow, utils, windowEvents, withWindow, wrapWithAttrCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return Animator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Array", function() { return SVGArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return Box; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Circle", function() { return Circle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClipPath", function() { return ClipPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Defs", function() { return Defs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dom", function() { return Dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Element", function() { return Element; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ellipse", function() { return Ellipse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventTarget", function() { return EventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForeignObject", function() { return ForeignObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fragment", function() { return Fragment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return G; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gradient", function() { return Gradient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return Image; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return Line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "List", function() { return List; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Marker", function() { return Marker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Mask", function() { return Mask; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return Matrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Morphable", function() { return Morphable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NonMorphable", function() { return NonMorphable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Number", function() { return SVGNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObjectBag", function() { return ObjectBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PID", function() { return PID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return Path; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PathArray", function() { return PathArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pattern", function() { return Pattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point", function() { return Point; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointArray", function() { return PointArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polygon", function() { return Polygon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Polyline", function() { return Polyline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Queue", function() { return Queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rect", function() { return Rect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Runner", function() { return Runner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return SVG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spring", function() { return Spring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Stop", function() { return Stop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Style", function() { return Style; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Svg", function() { return Svg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPath", function() { return TextPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformBag", function() { return TransformBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tspan", function() { return Tspan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Use", function() { return Use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return adopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNewId", function() { return assignNewId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearEvents", function() { return clearEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eid", function() { return eid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return baseFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEventTarget", function() { return getEventTarget; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvents", function() { return getEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWindow", function() { return getWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeInstance", function() { return makeInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeMorphable", function() { return makeMorphable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockAdopt", function() { return mockAdopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "namespaces", function() { return namespaces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeOrNew", function() { return nodeOrNew; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parser", function() { return parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regex", function() { return regex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerMorphableType", function() { return registerMorphableType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerWindow", function() { return registerWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "restoreWindow", function() { return restoreWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveWindow", function() { return saveWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowEvents", function() { return windowEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWindow", function() { return withWindow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithAttrCheck", function() { return wrapWithAttrCheck; });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.1.1
* https://svgjs.dev/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Fri Jun 25 2021 15:37:54 GMT+0200 (Mitteleuropäische Sommerzeit)
*/;
const methods$1 = {};
const names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    for (const _name of name) {
      registerMethods(_name, m);
    }

    return;
  }

  if (typeof name === 'object') {
    for (const _name in name) {
      registerMethods(_name, name[_name]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods$1[name] = Object.assign(methods$1[name] || {}, m);
}
function getMethodsFor(name) {
  return methods$1[name] || {};
}
function getMethodNames() {
  return [...new Set(names)];
}
function addMethodNames(_names) {
  names.push(..._names);
}

// Map function
function map(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  let i;
  const il = array.length;
  const result = [];

  for (i = 0; i < il; i++) {
    if (block(array[i])) {
      result.push(array[i]);
    }
  }

  return result;
} // Degrees to radians

function radians(d) {
  return d % 360 * Math.PI / 180;
} // Radians to degrees

function degrees(r) {
  return r * 180 / Math.PI % 360;
} // Convert dash-separated-string to camelCase

function camelCase(s) {
  return s.toLowerCase().replace(/-(.)/g, function (m, g) {
    return g.toUpperCase();
  });
} // Convert camel cased string to dash separated

function unCamelCase(s) {
  return s.replace(/([A-Z])/g, function (m, g) {
    return '-' + g.toLowerCase();
  });
} // Capitalize first letter of a string

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
} // Calculate proportional width and height values when necessary

function proportionalSize(element, width, height, box) {
  if (width == null || height == null) {
    box = box || element.bbox();

    if (width == null) {
      width = box.width / box.height * height;
    } else if (height == null) {
      height = box.height / box.width * width;
    }
  }

  return {
    width: width,
    height: height
  };
}
/**
 * This function adds support for string origins.
 * It searches for an origin in o.origin o.ox and o.originX.
 * This way, origin: {x: 'center', y: 50} can be passed as well as ox: 'center', oy: 50
**/

function getOrigin(o, element) {
  const origin = o.origin; // First check if origin is in ox or originX

  let ox = o.ox != null ? o.ox : o.originX != null ? o.originX : 'center';
  let oy = o.oy != null ? o.oy : o.originY != null ? o.originY : 'center'; // Then check if origin was used and overwrite in that case

  if (origin != null) {
    [ox, oy] = Array.isArray(origin) ? origin : typeof origin === 'object' ? [origin.x, origin.y] : [origin, origin];
  } // Make sure to only call bbox when actually needed


  const condX = typeof ox === 'string';
  const condY = typeof oy === 'string';

  if (condX || condY) {
    const {
      height,
      width,
      x,
      y
    } = element.bbox(); // And only overwrite if string was passed for this specific axis

    if (condX) {
      ox = ox.includes('left') ? x : ox.includes('right') ? x + width : x + width / 2;
    }

    if (condY) {
      oy = oy.includes('top') ? y : oy.includes('bottom') ? y + height : y + height / 2;
    }
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = {
  __proto__: null,
  map: map,
  filter: filter,
  radians: radians,
  degrees: degrees,
  camelCase: camelCase,
  unCamelCase: unCamelCase,
  capitalize: capitalize,
  proportionalSize: proportionalSize,
  getOrigin: getOrigin
};

// Default namespaces
const svg = 'http://www.w3.org/2000/svg';
const html = 'http://www.w3.org/1999/xhtml';
const xmlns = 'http://www.w3.org/2000/xmlns/';
const xlink = 'http://www.w3.org/1999/xlink';
const svgjs = 'http://svgjs.dev/svgjs';

var namespaces = {
  __proto__: null,
  svg: svg,
  html: html,
  xmlns: xmlns,
  xlink: xlink,
  svgjs: svgjs
};

const globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow(win = null, doc = null) {
  globals.window = win;
  globals.document = doc;
}
const save = {};
function saveWindow() {
  save.window = globals.window;
  save.document = globals.document;
}
function restoreWindow() {
  globals.window = save.window;
  globals.document = save.document;
}
function withWindow(win, fn) {
  saveWindow();
  registerWindow(win, win.document);
  fn(win, win.document);
  restoreWindow();
}
function getWindow() {
  return globals.window;
}

class Base {// constructor (node/*, {extensions = []} */) {
  //   // this.tags = []
  //   //
  //   // for (let extension of extensions) {
  //   //   extension.setup.call(this, node)
  //   //   this.tags.push(extension.name)
  //   // }
  // }
}

const elements = {};
const root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name, ns = svg) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element, isHTML = false) {
  if (element instanceof Base) return element;

  if (typeof element === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  } // Make sure, that HTML elements are created with the correct namespace


  const wrapper = isHTML ? globals.document.createElement('div') : create('svg');
  wrapper.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(wrapper.firstChild); // make sure, that element doesnt have its wrapper attached

  wrapper.removeChild(wrapper.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node instanceof globals.window.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance;

  if (node.nodeName === '#document-fragment') {
    return new elements.Fragment(node);
  } // initialize variables


  let className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
let adopter = adopt;
function mockAdopt(mock = adopt) {
  adopter = mock;
}
function register(element, name = element.name, asRoot = false) {
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

let did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (let i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    node.id = eid(node.nodeName);
    return node;
  }

  return node;
} // Method for extending objects

function extend(modules, methods) {
  let key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      modules[i].prototype[key] = methods[key];
    }
  }
}
function wrapWithAttrCheck(fn) {
  return function (...args) {
    const o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}

function siblings() {
  return this.parent().children();
} // Get the current position siblings

function position() {
  return this.parent().index(this);
} // Get the next element (will return null if there is none)

function next() {
  return this.siblings()[this.position() + 1];
} // Get the next element (will return null if there is none)

function prev() {
  return this.siblings()[this.position() - 1];
} // Send given element one step forward

function forward() {
  const i = this.position();
  const p = this.parent(); // move node one step forward

  p.add(this.remove(), i + 1);
  return this;
} // Send given element one step backward

function backward() {
  const i = this.position();
  const p = this.parent();
  p.add(this.remove(), i ? i - 1 : 0);
  return this;
} // Send given element all the way to the front

function front() {
  const p = this.parent(); // Move node forward

  p.add(this.remove());
  return this;
} // Send given element all the way to the back

function back() {
  const p = this.parent(); // Move node back

  p.add(this.remove(), 0);
  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  const i = this.position();
  this.parent().add(element, i + 1);
  return this;
}
function insertBefore(element) {
  element = makeInstance(element);
  element.before(this);
  return this;
}
function insertAfter(element) {
  element = makeInstance(element);
  element.after(this);
  return this;
}
registerMethods('Dom', {
  siblings,
  position,
  next,
  prev,
  forward,
  backward,
  front,
  back,
  before,
  after,
  insertBefore,
  insertAfter
});

// Parse unit value
const numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

const hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

const rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

const reference = /(#[a-z_][a-z0-9\-_]*)/i; // splits a transformation chain

const transforms = /\)\s*,?\s*/; // Whitespace

const whitespace = /\s/g; // Test hex value

const isHex = /^#[a-f0-9]{3}$|^#[a-f0-9]{6}$/i; // Test rgb value

const isRgb = /^rgb\(/; // Test for blank string

const isBlank = /^(\s+)?$/; // Test for numeric string

const isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for image url

const isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

const delimiter = /[\s,]+/; // Test for path letter

const isPathLetter = /[MLHVCSQTAZ]/i;

var regex = {
  __proto__: null,
  numberAndUnit: numberAndUnit,
  hex: hex,
  rgb: rgb,
  reference: reference,
  transforms: transforms,
  whitespace: whitespace,
  isHex: isHex,
  isRgb: isRgb,
  isBlank: isBlank,
  isNumber: isNumber,
  isImage: isImage,
  delimiter: delimiter,
  isPathLetter: isPathLetter
};

function classes() {
  const attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    const array = this.classes();
    array.push(name);
    this.attr('class', array.join(' '));
  }

  return this;
} // Remove class from the node

function removeClass(name) {
  if (this.hasClass(name)) {
    this.attr('class', this.classes().filter(function (c) {
      return c !== name;
    }).join(' '));
  }

  return this;
} // Toggle the presence of a class on the node

function toggleClass(name) {
  return this.hasClass(name) ? this.removeClass(name) : this.addClass(name);
}
registerMethods('Dom', {
  classes,
  hasClass,
  addClass,
  removeClass,
  toggleClass
});

function css(style, val) {
  const ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      const t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties as array
    if (Array.isArray(style)) {
      for (const name of style) {
        const cased = camelCase(name);
        ret[cased] = this.node.style[cased];
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (typeof style === 'object') {
      for (const name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(name)] = style[name] == null || isBlank.test(style[name]) ? '' : style[name];
      }
    }
  } // set style for property


  if (arguments.length === 2) {
    this.node.style[camelCase(style)] = val == null || isBlank.test(val) ? '' : val;
  }

  return this;
} // Show element

function show() {
  return this.css('display', '');
} // Hide element

function hide() {
  return this.css('display', 'none');
} // Is element visible?

function visible() {
  return this.css('display') !== 'none';
}
registerMethods('Dom', {
  css,
  show,
  hide,
  visible
});

function data(a, v, r) {
  if (a == null) {
    // get an object of attributes
    return this.data(map(filter(this.node.attributes, el => el.nodeName.indexOf('data-') === 0), el => el.nodeName.slice(5)));
  } else if (a instanceof Array) {
    const data = {};

    for (const key of a) {
      data[key] = this.data(key);
    }

    return data;
  } else if (typeof a === 'object') {
    for (v in a) {
      this.data(v, a[v]);
    }
  } else if (arguments.length < 2) {
    try {
      return JSON.parse(this.attr('data-' + a));
    } catch (e) {
      return this.attr('data-' + a);
    }
  } else {
    this.attr('data-' + a, v === null ? null : r === true || typeof v === 'string' || typeof v === 'number' ? v : JSON.stringify(v));
  }

  return this;
}
registerMethods('Dom', {
  data
});

function remember(k, v) {
  // remember every item in an object individually
  if (typeof arguments[0] === 'object') {
    for (const key in k) {
      this.remember(key, k[key]);
    }
  } else if (arguments.length === 1) {
    // retrieve memory
    return this.memory()[k];
  } else {
    // store memory
    this.memory()[k] = v;
  }

  return this;
} // Erase a given memory

function forget() {
  if (arguments.length === 0) {
    this._memory = {};
  } else {
    for (let i = arguments.length - 1; i >= 0; i--) {
      delete this.memory()[arguments[i]];
    }
  }

  return this;
} // This triggers creation of a new hidden class which is not performant
// However, this function is not rarely used so it will not happen frequently
// Return local memory object

function memory() {
  return this._memory = this._memory || {};
}
registerMethods('Dom', {
  remember,
  forget,
  memory
});

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  const integer = Math.round(component);
  const bounded = Math.max(0, Math.min(255, integer));
  const hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (let i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  const params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
    _d: 0,
    space: 'rgb'
  } : is(a, 'xyz') ? {
    _a: a.x,
    _b: a.y,
    _c: a.z,
    _d: 0,
    space: 'xyz'
  } : is(a, 'hsl') ? {
    _a: a.h,
    _b: a.s,
    _c: a.l,
    _d: 0,
    space: 'hsl'
  } : is(a, 'lab') ? {
    _a: a.l,
    _b: a.a,
    _c: a.b,
    _d: 0,
    space: 'lab'
  } : is(a, 'lch') ? {
    _a: a.l,
    _b: a.c,
    _c: a.h,
    _d: 0,
    space: 'lch'
  } : is(a, 'cmyk') ? {
    _a: a.c,
    _b: a.m,
    _c: a.y,
    _d: a.k,
    space: 'cmyk'
  } : {
    _a: 0,
    _b: 0,
    _c: 0,
    space: 'rgb'
  };
  params.space = b || params.space;
  return params;
}

function cieSpace(space) {
  if (space === 'lab' || space === 'xyz' || space === 'lch') {
    return true;
  } else {
    return false;
  }
}

function hueToRgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

class Color {
  constructor(...inputs) {
    this.init(...inputs);
  } // Test if given value is a color


  static isColor(color) {
    return color && (color instanceof Color || this.isRgb(color) || this.test(color));
  } // Test if given value is an rgb object


  static isRgb(color) {
    return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
  }
  /*
  Generating random colors
  */


  static random(mode = 'vibrant', t, u) {
    // Get the math modules
    const {
      random,
      round,
      sin,
      PI: pi
    } = Math; // Run the correct generator

    if (mode === 'vibrant') {
      const l = (81 - 57) * random() + 57;
      const c = (83 - 45) * random() + 45;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'sine') {
      t = t == null ? random() : t;
      const r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
      const g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
      const b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'pastel') {
      const l = (94 - 86) * random() + 86;
      const c = (26 - 9) * random() + 9;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'dark') {
      const l = 10 + 10 * random();
      const c = (125 - 75) * random() + 86;
      const h = 360 * random();
      const color = new Color(l, c, h, 'lch');
      return color;
    } else if (mode === 'rgb') {
      const r = 255 * random();
      const g = 255 * random();
      const b = 255 * random();
      const color = new Color(r, g, b);
      return color;
    } else if (mode === 'lab') {
      const l = 100 * random();
      const a = 256 * random() - 128;
      const b = 256 * random() - 128;
      const color = new Color(l, a, b, 'lab');
      return color;
    } else if (mode === 'grey') {
      const grey = 255 * random();
      const color = new Color(grey, grey, grey);
      return color;
    } else {
      throw new Error('Unsupported random color mode');
    }
  } // Test if given value is a color string


  static test(color) {
    return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
  }

  cmyk() {
    // Get the rgb values for the current color
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Get the cmyk values in an unbounded format

    const k = Math.min(1 - r, 1 - g, 1 - b);

    if (k === 1) {
      // Catch the black case
      return new Color(0, 0, 0, 1, 'cmyk');
    }

    const c = (1 - r - k) / (1 - k);
    const m = (1 - g - k) / (1 - k);
    const y = (1 - b - k) / (1 - k); // Construct the new color

    const color = new Color(c, m, y, k, 'cmyk');
    return color;
  }

  hsl() {
    // Get the rgb values
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const [r, g, b] = [_a, _b, _c].map(v => v / 255); // Find the maximum and minimum values to get the lightness

    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2; // If the r, g, v values are identical then we are grey

    const isGrey = max === min; // Calculate the hue and saturation

    const delta = max - min;
    const s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
    const h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

    const color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
    return color;
  }

  init(a = 0, b = 0, c = 0, d = 0, space = 'rgb') {
    // This catches the case when a falsy value is passed like ''
    a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

    if (this.space) {
      for (const component in this.space) {
        delete this[this.space[component]];
      }
    }

    if (typeof a === 'number') {
      // Allow for the case that we don't need d...
      space = typeof d === 'string' ? d : space;
      d = typeof d === 'string' ? 0 : d; // Assign the values straight to the color

      Object.assign(this, {
        _a: a,
        _b: b,
        _c: c,
        _d: d,
        space
      }); // If the user gave us an array, make the color from it
    } else if (a instanceof Array) {
      this.space = b || (typeof a[3] === 'string' ? a[3] : a[4]) || 'rgb';
      Object.assign(this, {
        _a: a[0],
        _b: a[1],
        _c: a[2],
        _d: a[3] || 0
      });
    } else if (a instanceof Object) {
      // Set the object up and assign its values directly
      const values = getParameters(a, b);
      Object.assign(this, values);
    } else if (typeof a === 'string') {
      if (isRgb.test(a)) {
        const noWhitespace = a.replace(whitespace, '');
        const [_a, _b, _c] = rgb.exec(noWhitespace).slice(1, 4).map(v => parseInt(v));
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else if (isHex.test(a)) {
        const hexParse = v => parseInt(v, 16);

        const [, _a, _b, _c] = hex.exec(sixDigitHex(a)).map(hexParse);
        Object.assign(this, {
          _a,
          _b,
          _c,
          _d: 0,
          space: 'rgb'
        });
      } else throw Error('Unsupported string format, can\'t construct Color');
    } // Now add the components as a convenience


    const {
      _a,
      _b,
      _c,
      _d
    } = this;
    const components = this.space === 'rgb' ? {
      r: _a,
      g: _b,
      b: _c
    } : this.space === 'xyz' ? {
      x: _a,
      y: _b,
      z: _c
    } : this.space === 'hsl' ? {
      h: _a,
      s: _b,
      l: _c
    } : this.space === 'lab' ? {
      l: _a,
      a: _b,
      b: _c
    } : this.space === 'lch' ? {
      l: _a,
      c: _b,
      h: _c
    } : this.space === 'cmyk' ? {
      c: _a,
      m: _b,
      y: _c,
      k: _d
    } : {};
    Object.assign(this, components);
  }

  lab() {
    // Get the xyz color
    const {
      x,
      y,
      z
    } = this.xyz(); // Get the lab components

    const l = 116 * y - 16;
    const a = 500 * (x - y);
    const b = 200 * (y - z); // Construct and return a new color

    const color = new Color(l, a, b, 'lab');
    return color;
  }

  lch() {
    // Get the lab color directly
    const {
      l,
      a,
      b
    } = this.lab(); // Get the chromaticity and the hue using polar coordinates

    const c = Math.sqrt(a ** 2 + b ** 2);
    let h = 180 * Math.atan2(b, a) / Math.PI;

    if (h < 0) {
      h *= -1;
      h = 360 - h;
    } // Make a new color and return it


    const color = new Color(l, c, h, 'lch');
    return color;
  }
  /*
  Conversion Methods
  */


  rgb() {
    if (this.space === 'rgb') {
      return this;
    } else if (cieSpace(this.space)) {
      // Convert to the xyz color space
      let {
        x,
        y,
        z
      } = this;

      if (this.space === 'lab' || this.space === 'lch') {
        // Get the values in the lab space
        let {
          l,
          a,
          b
        } = this;

        if (this.space === 'lch') {
          const {
            c,
            h
          } = this;
          const dToR = Math.PI / 180;
          a = c * Math.cos(dToR * h);
          b = c * Math.sin(dToR * h);
        } // Undo the nonlinear function


        const yL = (l + 16) / 116;
        const xL = a / 500 + yL;
        const zL = yL - b / 200; // Get the xyz values

        const ct = 16 / 116;
        const mx = 0.008856;
        const nm = 7.787;
        x = 0.95047 * (xL ** 3 > mx ? xL ** 3 : (xL - ct) / nm);
        y = 1.00000 * (yL ** 3 > mx ? yL ** 3 : (yL - ct) / nm);
        z = 1.08883 * (zL ** 3 > mx ? zL ** 3 : (zL - ct) / nm);
      } // Convert xyz to unbounded rgb values


      const rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
      const gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
      const bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

      const pow = Math.pow;
      const bd = 0.0031308;
      const r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
      const g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
      const b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

      const color = new Color(255 * r, 255 * g, 255 * b);
      return color;
    } else if (this.space === 'hsl') {
      // https://bgrins.github.io/TinyColor/docs/tinycolor.html
      // Get the current hsl values
      let {
        h,
        s,
        l
      } = this;
      h /= 360;
      s /= 100;
      l /= 100; // If we are grey, then just make the color directly

      if (s === 0) {
        l *= 255;
        const color = new Color(l, l, l);
        return color;
      } // TODO I have no idea what this does :D If you figure it out, tell me!


      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q; // Get the rgb values

      const r = 255 * hueToRgb(p, q, h + 1 / 3);
      const g = 255 * hueToRgb(p, q, h);
      const b = 255 * hueToRgb(p, q, h - 1 / 3); // Make a new color

      const color = new Color(r, g, b);
      return color;
    } else if (this.space === 'cmyk') {
      // https://gist.github.com/felipesabino/5066336
      // Get the normalised cmyk values
      const {
        c,
        m,
        y,
        k
      } = this; // Get the rgb values

      const r = 255 * (1 - Math.min(1, c * (1 - k) + k));
      const g = 255 * (1 - Math.min(1, m * (1 - k) + k));
      const b = 255 * (1 - Math.min(1, y * (1 - k) + k)); // Form the color and return it

      const color = new Color(r, g, b);
      return color;
    } else {
      return this;
    }
  }

  toArray() {
    const {
      _a,
      _b,
      _c,
      _d,
      space
    } = this;
    return [_a, _b, _c, _d, space];
  }

  toHex() {
    const [r, g, b] = this._clamped().map(componentHex);

    return `#${r}${g}${b}`;
  }

  toRgb() {
    const [rV, gV, bV] = this._clamped();

    const string = `rgb(${rV},${gV},${bV})`;
    return string;
  }

  toString() {
    return this.toHex();
  }

  xyz() {
    // Normalise the red, green and blue values
    const {
      _a: r255,
      _b: g255,
      _c: b255
    } = this.rgb();
    const [r, g, b] = [r255, g255, b255].map(v => v / 255); // Convert to the lab rgb space

    const rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
    const gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
    const bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

    const xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
    const yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
    const zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

    const x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
    const y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
    const z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

    const color = new Color(x, y, z, 'xyz');
    return color;
  }
  /*
  Input and Output methods
  */


  _clamped() {
    const {
      _a,
      _b,
      _c
    } = this.rgb();
    const {
      max,
      min,
      round
    } = Math;

    const format = v => max(0, min(round(v), 255));

    return [_a, _b, _c].map(format);
  }
  /*
  Constructing colors
  */


}

class Point {
  // Initialize
  constructor(...args) {
    this.init(...args);
  } // Clone point


  clone() {
    return new Point(this);
  }

  init(x, y) {
    const base = {
      x: 0,
      y: 0
    }; // ensure source as object

    const source = Array.isArray(x) ? {
      x: x[0],
      y: x[1]
    } : typeof x === 'object' ? {
      x: x.x,
      y: x.y
    } : {
      x: x,
      y: y
    }; // merge source

    this.x = source.x == null ? base.x : source.x;
    this.y = source.y == null ? base.y : source.y;
    return this;
  }

  toArray() {
    return [this.x, this.y];
  }

  transform(m) {
    return this.clone().transformO(m);
  } // Transform point with matrix


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    const {
      x,
      y
    } = this; // Perform the matrix multiplication

    this.x = m.a * x + m.c * y + m.e;
    this.y = m.b * x + m.d * y + m.f;
    return this;
  }

}
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

class Matrix {
  constructor(...args) {
    this.init(...args);
  }

  static formatTransforms(o) {
    // Get all of the parameters required to form the matrix
    const flipBoth = o.flip === 'both' || o.flip === true;
    const flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
    const flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
    const skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
    const skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
    const scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
    const scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
    const shear = o.shear || 0;
    const theta = o.rotate || o.theta || 0;
    const origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
    const ox = origin.x;
    const oy = origin.y; // We need Point to be invalid if nothing was passed because we cannot default to 0 here. Thats why NaN

    const position = new Point(o.position || o.px || o.positionX || NaN, o.py || o.positionY || NaN);
    const px = position.x;
    const py = position.y;
    const translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
    const tx = translate.x;
    const ty = translate.y;
    const relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
    const rx = relative.x;
    const ry = relative.y; // Populate all of the values

    return {
      scaleX,
      scaleY,
      skewX,
      skewY,
      shear,
      theta,
      rx,
      ry,
      tx,
      ty,
      ox,
      oy,
      px,
      py
    };
  }

  static fromArray(a) {
    return {
      a: a[0],
      b: a[1],
      c: a[2],
      d: a[3],
      e: a[4],
      f: a[5]
    };
  }

  static isMatrixLike(o) {
    return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
  } // left matrix, right matrix, target matrix which is overwritten


  static matrixMultiply(l, r, o) {
    // Work out the product directly
    const a = l.a * r.a + l.c * r.b;
    const b = l.b * r.a + l.d * r.b;
    const c = l.a * r.c + l.c * r.d;
    const d = l.b * r.c + l.d * r.d;
    const e = l.e + l.a * r.e + l.c * r.f;
    const f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

    o.a = a;
    o.b = b;
    o.c = c;
    o.d = d;
    o.e = e;
    o.f = f;
    return o;
  }

  around(cx, cy, matrix) {
    return this.clone().aroundO(cx, cy, matrix);
  } // Transform around a center point


  aroundO(cx, cy, matrix) {
    const dx = cx || 0;
    const dy = cy || 0;
    return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
  } // Clones this matrix


  clone() {
    return new Matrix(this);
  } // Decomposes this matrix into its affine parameters


  decompose(cx = 0, cy = 0) {
    // Get the parameters from the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

    const determinant = a * d - b * c;
    const ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
    // and the rotation of the resulting matrix

    const sx = ccw * Math.sqrt(a * a + b * b);
    const thetaRad = Math.atan2(ccw * b, ccw * a);
    const theta = 180 / Math.PI * thetaRad;
    const ct = Math.cos(thetaRad);
    const st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
    // two affine parameters directly from these parameters

    const lam = (a * c + b * d) / determinant;
    const sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

    const tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
    const ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

    return {
      // Return the affine parameters
      scaleX: sx,
      scaleY: sy,
      shear: lam,
      rotate: theta,
      translateX: tx,
      translateY: ty,
      originX: cx,
      originY: cy,
      // Return the matrix parameters
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  } // Check if two matrices are equal


  equals(other) {
    if (other === this) return true;
    const comp = new Matrix(other);
    return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
  } // Flip matrix on x or y, at a given offset


  flip(axis, around) {
    return this.clone().flipO(axis, around);
  }

  flipO(axis, around) {
    return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
  } // Initialize


  init(source) {
    const base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

    source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : typeof source === 'object' && Matrix.isMatrixLike(source) ? source : typeof source === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

    this.a = source.a != null ? source.a : base.a;
    this.b = source.b != null ? source.b : base.b;
    this.c = source.c != null ? source.c : base.c;
    this.d = source.d != null ? source.d : base.d;
    this.e = source.e != null ? source.e : base.e;
    this.f = source.f != null ? source.f : base.f;
    return this;
  }

  inverse() {
    return this.clone().inverseO();
  } // Inverses matrix


  inverseO() {
    // Get the current parameters out of the matrix
    const a = this.a;
    const b = this.b;
    const c = this.c;
    const d = this.d;
    const e = this.e;
    const f = this.f; // Invert the 2x2 matrix in the top left

    const det = a * d - b * c;
    if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

    const na = d / det;
    const nb = -b / det;
    const nc = -c / det;
    const nd = a / det; // Apply the inverted matrix to the top right

    const ne = -(na * e + nc * f);
    const nf = -(nb * e + nd * f); // Construct the inverted matrix

    this.a = na;
    this.b = nb;
    this.c = nc;
    this.d = nd;
    this.e = ne;
    this.f = nf;
    return this;
  }

  lmultiply(matrix) {
    return this.clone().lmultiplyO(matrix);
  }

  lmultiplyO(matrix) {
    const r = this;
    const l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Left multiplies by the given matrix


  multiply(matrix) {
    return this.clone().multiplyO(matrix);
  }

  multiplyO(matrix) {
    // Get the matrices
    const l = this;
    const r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
    return Matrix.matrixMultiply(l, r, this);
  } // Rotate matrix


  rotate(r, cx, cy) {
    return this.clone().rotateO(r, cx, cy);
  }

  rotateO(r, cx = 0, cy = 0) {
    // Convert degrees to radians
    r = radians(r);
    const cos = Math.cos(r);
    const sin = Math.sin(r);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * cos - b * sin;
    this.b = b * cos + a * sin;
    this.c = c * cos - d * sin;
    this.d = d * cos + c * sin;
    this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
    this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
    return this;
  } // Scale matrix


  scale(x, y, cx, cy) {
    return this.clone().scaleO(...arguments);
  }

  scaleO(x, y = x, cx = 0, cy = 0) {
    // Support uniform scaling
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    }

    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a * x;
    this.b = b * y;
    this.c = c * x;
    this.d = d * y;
    this.e = e * x - cx * x + cx;
    this.f = f * y - cy * y + cy;
    return this;
  } // Shear matrix


  shear(a, cx, cy) {
    return this.clone().shearO(a, cx, cy);
  }

  shearO(lx, cx = 0, cy = 0) {
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.c = c + d * lx;
    this.e = e + f * lx - cy * lx;
    return this;
  } // Skew Matrix


  skew(x, y, cx, cy) {
    return this.clone().skewO(...arguments);
  }

  skewO(x, y = x, cx = 0, cy = 0) {
    // support uniformal skew
    if (arguments.length === 3) {
      cy = cx;
      cx = y;
      y = x;
    } // Convert degrees to radians


    x = radians(x);
    y = radians(y);
    const lx = Math.tan(x);
    const ly = Math.tan(y);
    const {
      a,
      b,
      c,
      d,
      e,
      f
    } = this;
    this.a = a + b * lx;
    this.b = b + a * ly;
    this.c = c + d * lx;
    this.d = d + c * ly;
    this.e = e + f * lx - cy * lx;
    this.f = f + e * ly - cx * ly;
    return this;
  } // SkewX


  skewX(x, cx, cy) {
    return this.skew(x, 0, cx, cy);
  } // SkewY


  skewY(y, cx, cy) {
    return this.skew(0, y, cx, cy);
  }

  toArray() {
    return [this.a, this.b, this.c, this.d, this.e, this.f];
  } // Convert matrix to string


  toString() {
    return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
  } // Transform a matrix into another matrix by manipulating the space


  transform(o) {
    // Check if o is a matrix and then left multiply it directly
    if (Matrix.isMatrixLike(o)) {
      const matrix = new Matrix(o);
      return matrix.multiplyO(this);
    } // Get the proposed transformations and the current transformations


    const t = Matrix.formatTransforms(o);
    const current = this;
    const {
      x: ox,
      y: oy
    } = new Point(t.ox, t.oy).transform(current); // Construct the resulting matrix

    const transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

    if (isFinite(t.px) || isFinite(t.py)) {
      const origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)
      // Doesnt work because t.px is also 0 if it wasnt passed

      const dx = isFinite(t.px) ? t.px - origin.x : 0;
      const dy = isFinite(t.py) ? t.py - origin.y : 0;
      transformer.translateO(dx, dy);
    } // Translate now after positioning


    transformer.translateO(t.tx, t.ty);
    return transformer;
  } // Translate matrix


  translate(x, y) {
    return this.clone().translateO(x, y);
  }

  translateO(x, y) {
    this.e += x || 0;
    this.f += y || 0;
    return this;
  }

  valueOf() {
    return {
      a: this.a,
      b: this.b,
      c: this.c,
      d: this.d,
      e: this.e,
      f: this.f
    };
  }

}
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    const rect = this.rect(1, 1);
    const m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    const svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    const path = svg.path().node;
    parser.nodes = {
      svg,
      path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    const b = globals.document.body || globals.document.documentElement;
    parser.nodes.svg.addTo(b);
  }

  return parser.nodes;
}

function isNulledBox(box) {
  return !box.width && !box.height && !box.x && !box.y;
}
function domContains(node) {
  return node === globals.document || (globals.document.documentElement.contains || function (node) {
    // This is IE - it does not support contains() for top-level SVGs
    while (node.parentNode) {
      node = node.parentNode;
    }

    return node === globals.document;
  }).call(globals.document.documentElement, node);
}
class Box {
  constructor(...args) {
    this.init(...args);
  }

  addOffset() {
    // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
    this.x += globals.window.pageXOffset;
    this.y += globals.window.pageYOffset;
    return new Box(this);
  }

  init(source) {
    const base = [0, 0, 0, 0];
    source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : typeof source === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
    this.x = source[0] || 0;
    this.y = source[1] || 0;
    this.width = this.w = source[2] || 0;
    this.height = this.h = source[3] || 0; // Add more bounding box properties

    this.x2 = this.x + this.w;
    this.y2 = this.y + this.h;
    this.cx = this.x + this.w / 2;
    this.cy = this.y + this.h / 2;
    return this;
  }

  isNulled() {
    return isNulledBox(this);
  } // Merge rect box with another, return a new instance


  merge(box) {
    const x = Math.min(this.x, box.x);
    const y = Math.min(this.y, box.y);
    const width = Math.max(this.x + this.width, box.x + box.width) - x;
    const height = Math.max(this.y + this.height, box.y + box.height) - y;
    return new Box(x, y, width, height);
  }

  toArray() {
    return [this.x, this.y, this.width, this.height];
  }

  toString() {
    return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
  }

  transform(m) {
    if (!(m instanceof Matrix)) {
      m = new Matrix(m);
    }

    let xMin = Infinity;
    let xMax = -Infinity;
    let yMin = Infinity;
    let yMax = -Infinity;
    const pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
    pts.forEach(function (p) {
      p = p.transform(m);
      xMin = Math.min(xMin, p.x);
      xMax = Math.max(xMax, p.x);
      yMin = Math.min(yMin, p.y);
      yMax = Math.max(yMax, p.y);
    });
    return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
  }

}

function getBox(el, getBBoxFn, retry) {
  let box;

  try {
    // Try to get the box with the provided function
    box = getBBoxFn(el.node); // If the box is worthless and not even in the dom, retry
    // by throwing an error here...

    if (isNulledBox(box) && !domContains(el.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    // ... and calling the retry handler here
    box = retry(el);
  }

  return box;
}

function bbox() {
  // Function to get bbox is getBBox()
  const getBBox = node => node.getBBox(); // Take all measures so that a stupid browser renders the element
  // so we can get the bbox from it when we try again


  const retry = el => {
    try {
      const clone = el.clone().addTo(parser().svg).show();
      const box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      // We give up...
      throw new Error(`Getting bbox of element "${el.node.nodeName}" is not possible: ${e.toString()}`);
    }
  };

  const box = getBox(this, getBBox, retry);
  const bbox = new Box(box);
  return bbox;
}
function rbox(el) {
  const getRBox = node => node.getBoundingClientRect();

  const retry = el => {
    // There is no point in trying tricks here because if we insert the element into the dom ourselves
    // it obviously will be at the wrong position
    throw new Error(`Getting rbox of element "${el.node.nodeName}" is not possible`);
  };

  const box = getBox(this, getRBox, retry);
  const rbox = new Box(box); // If an element was passed, we want the bbox in the coordinate system of that element

  if (el) {
    return rbox.transform(el.screenCTM().inverseO());
  } // Else we want it in absolute screen coordinates
  // Therefore we need to add the scrollOffset


  return rbox.addOffset();
} // Checks whether the given point is inside the bounding box

function inside(x, y) {
  const box = this.bbox();
  return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
}
registerMethods({
  viewbox: {
    viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },

    zoom(level, point) {
      // Its best to rely on the attributes here and here is why:
      // clientXYZ: Doesn't work on non-root svgs because they dont have a CSSBox (silly!)
      // getBoundingClientRect: Doesn't work because Chrome just ignores width and height of nested svgs completely
      //                        that means, their clientRect is always as big as the content.
      //                        Furthermore this size is incorrect if the element is further transformed by its parents
      // computedStyle: Only returns meaningful values if css was used with px. We dont go this route here!
      // getBBox: returns the bounding box of its content - that doesnt help!
      let {
        width,
        height
      } = this.attr(['width', 'height']); // Width and height is a string when a number with a unit is present which we can't use
      // So we try clientXYZ

      if (!width && !height || typeof width === 'string' || typeof height === 'string') {
        width = this.node.clientWidth;
        height = this.node.clientHeight;
      } // Giving up...


      if (!width || !height) {
        throw new Error('Impossible to get absolute width and height. Please provide an absolute width and height attribute on the zooming element');
      }

      const v = this.viewbox();
      const zoomX = width / v.width;
      const zoomY = height / v.height;
      const zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      let zoomAmount = zoom / level; // Set the zoomAmount to the highest value which is safe to process and recover from
      // The * 100 is a bit of wiggle room for the matrix transformation

      if (zoomAmount === Infinity) zoomAmount = Number.MAX_SAFE_INTEGER / 100;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      const box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }

  }
});
register(Box, 'Box');

class List extends Array {
  constructor(arr = [], ...args) {
    super(arr, ...args);
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...arr);
  }

}
extend([List], {
  each(fnOrMethodName, ...args) {
    if (typeof fnOrMethodName === 'function') {
      return this.map((el, i, arr) => {
        return fnOrMethodName.call(el, el, i, arr);
      });
    } else {
      return this.map(el => {
        return el[fnOrMethodName](...args);
      });
    }
  },

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

});
const reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce((obj, name) => {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function (...attrs) {
      return this.each(name, ...attrs);
    };

    return obj;
  }, {});
  extend([List], methods);
};

function baseFind(query, parent) {
  return new List(map((parent || globals.document).querySelectorAll(query), function (node) {
    return adopt(node);
  }));
} // Scoped find method

function find(query) {
  return baseFind(query, this.node);
}
function findOne(query) {
  return adopt(this.node.querySelector(query));
}

let listenerId = 0;
const windowEvents = {};
function getEvents(instance) {
  let n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}
function getEventTarget(instance) {
  return instance.getEventTarget();
}
function clearEvents(instance) {
  let n = instance.getEventHolder();
  if (n === globals.window) n = windowEvents;
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace

function on(node, events, listener, binding, options) {
  const l = listener.bind(binding || node);
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    const ev = event.split('.')[0];
    const ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  const instance = makeInstance(node);
  const bag = getEvents(instance);
  const n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    const ev = event && event.split('.')[0];
    const ns = event && event.split('.')[1];
    let namespace, l;

    if (listener) {
      // remove listener reference
      if (bag[ev] && bag[ev][ns || '*']) {
        // removeListener
        n.removeEventListener(ev, bag[ev][ns || '*'][listener], options || false);
        delete bag[ev][ns || '*'][listener];
      }
    } else if (ev && ns) {
      // remove all listeners for a namespaced event
      if (bag[ev] && bag[ev][ns]) {
        for (l in bag[ev][ns]) {
          off(n, [ev, ns].join('.'), l);
        }

        delete bag[ev][ns];
      }
    } else if (ns) {
      // remove all listeners for a specific namespace
      for (event in bag) {
        for (namespace in bag[event]) {
          if (ns === namespace) {
            off(n, [event, ns].join('.'));
          }
        }
      }
    } else if (ev) {
      // remove all listeners for the event
      if (bag[ev]) {
        for (namespace in bag[ev]) {
          off(n, [ev, namespace].join('.'));
        }

        delete bag[ev];
      }
    } else {
      // remove all listeners on a given node
      for (event in bag) {
        off(n, event);
      }

      clearEvents(instance);
    }
  });
}
function dispatch(node, event, data, options) {
  const n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true,
      ...options
    });
    n.dispatchEvent(event);
  }

  return event;
}

class EventTarget extends Base {
  addEventListener() {}

  dispatch(event, data, options) {
    return dispatch(this, event, data, options);
  }

  dispatchEvent(event) {
    const bag = this.getEventHolder().events;
    if (!bag) return true;
    const events = bag[event.type];

    for (const i in events) {
      for (const j in events[i]) {
        events[i][j](event);
      }
    }

    return !event.defaultPrevented;
  } // Fire given event


  fire(event, data, options) {
    this.dispatch(event, data, options);
    return this;
  }

  getEventHolder() {
    return this;
  }

  getEventTarget() {
    return this;
  } // Unbind event from listener


  off(event, listener) {
    off(this, event, listener);
    return this;
  } // Bind given event to listener


  on(event, listener, binding, options) {
    on(this, event, listener, binding, options);
    return this;
  }

  removeEventListener() {}

}
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

const timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

const attrs = {
  // fill and stroke
  'fill-opacity': 1,
  'stroke-opacity': 1,
  'stroke-width': 0,
  'stroke-linejoin': 'miter',
  'stroke-linecap': 'butt',
  fill: '#000000',
  stroke: '#000000',
  opacity: 1,
  // position
  x: 0,
  y: 0,
  cx: 0,
  cy: 0,
  // size
  width: 0,
  height: 0,
  // radius
  r: 0,
  rx: 0,
  ry: 0,
  // gradient
  offset: 0,
  'stop-opacity': 1,
  'stop-color': '#000000',
  // text
  'text-anchor': 'start'
};

var defaults = {
  __proto__: null,
  noop: noop,
  timeline: timeline,
  attrs: attrs
};

class SVGArray extends Array {
  constructor(...args) {
    super(...args);
    this.init(...args);
  }

  clone() {
    return new this.constructor(this);
  }

  init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push(...this.parse(arr));
    return this;
  } // Parse whitespace separated string


  parse(array = []) {
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  }

  toArray() {
    return Array.prototype.concat.apply([], this);
  }

  toSet() {
    return new Set(this);
  }

  toString() {
    return this.join(' ');
  } // Flattens the array if needed


  valueOf() {
    const ret = [];
    ret.push(...this);
    return ret;
  }

}

class SVGNumber {
  // Initialize
  constructor(...args) {
    this.init(...args);
  }

  convert(unit) {
    return new SVGNumber(this.value, unit);
  } // Divide number


  divide(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this / number, this.unit || number.unit);
  }

  init(value, unit) {
    unit = Array.isArray(value) ? value[1] : unit;
    value = Array.isArray(value) ? value[0] : value; // initialize defaults

    this.value = 0;
    this.unit = unit || ''; // parse value

    if (typeof value === 'number') {
      // ensure a valid numeric value
      this.value = isNaN(value) ? 0 : !isFinite(value) ? value < 0 ? -3.4e+38 : +3.4e+38 : value;
    } else if (typeof value === 'string') {
      unit = value.match(numberAndUnit);

      if (unit) {
        // make value numeric
        this.value = parseFloat(unit[1]); // normalize

        if (unit[5] === '%') {
          this.value /= 100;
        } else if (unit[5] === 's') {
          this.value *= 1000;
        } // store unit


        this.unit = unit[5];
      }
    } else {
      if (value instanceof SVGNumber) {
        this.value = value.valueOf();
        this.unit = value.unit;
      }
    }

    return this;
  } // Subtract number


  minus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this - number, this.unit || number.unit);
  } // Add number


  plus(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this + number, this.unit || number.unit);
  } // Multiply number


  times(number) {
    number = new SVGNumber(number);
    return new SVGNumber(this * number, this.unit || number.unit);
  }

  toArray() {
    return [this.value, this.unit];
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
  }

  valueOf() {
    return this.value;
  }

}

const hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;

    for (const node of val) {
      attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce((last, curr) => {
      last[curr] = this.attr(curr);
      return last;
    }, {});
  } else if (typeof attr === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) this.attr(val, attr[val]);
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce((_val, hook) => {
      return hook(attr, _val, this);
    }, val); // ensure correct numeric values (also accepts NaN and Infinity)

    if (typeof val === 'number') {
      val = new SVGNumber(val);
    } else if (Color.isColor(val)) {
      // ensure full hex color
      val = new Color(val);
    } else if (val.constructor === Array) {
      // Check for plain arrays and parse array values
      val = new SVGArray(val);
    } // if the passed attribute is leading...


    if (attr === 'leading') {
      // ... call the leading method instead
      if (this.leading) {
        this.leading(val);
      }
    } else {
      // set given attribute on node
      typeof ns === 'string' ? this.node.setAttributeNS(ns, attr, val.toString()) : this.node.setAttribute(attr, val.toString());
    } // rebuild if required


    if (this.rebuild && (attr === 'font-size' || attr === 'x')) {
      this.rebuild();
    }
  }

  return this;
}

class Dom extends EventTarget {
  constructor(node, attrs) {
    super();
    this.node = node;
    this.type = node.nodeName;

    if (attrs && node !== attrs) {
      this.attr(attrs);
    }
  } // Add given element at a position


  add(element, i) {
    element = makeInstance(element); // If non-root svg nodes are added we have to remove their namespaces

    if (element.removeNamespace && this.node instanceof globals.window.SVGElement) {
      element.removeNamespace();
    }

    if (i == null) {
      this.node.appendChild(element.node);
    } else if (element.node !== this.node.childNodes[i]) {
      this.node.insertBefore(element.node, this.node.childNodes[i]);
    }

    return this;
  } // Add element to given container and return self


  addTo(parent, i) {
    return makeInstance(parent).put(this, i);
  } // Returns all child elements


  children() {
    return new List(map(this.node.children, function (node) {
      return adopt(node);
    }));
  } // Remove all elements in this container


  clear() {
    // remove children
    while (this.node.hasChildNodes()) {
      this.node.removeChild(this.node.lastChild);
    }

    return this;
  } // Clone element


  clone(deep = true) {
    // write dom data to the dom so the clone can pickup the data
    this.writeDataToDom(); // clone element and assign new id

    return new this.constructor(assignNewId(this.node.cloneNode(deep)));
  } // Iterates over all children and invokes a given block


  each(block, deep) {
    const children = this.children();
    let i, il;

    for (i = 0, il = children.length; i < il; i++) {
      block.apply(children[i], [i, children]);

      if (deep) {
        children[i].each(block, deep);
      }
    }

    return this;
  }

  element(nodeName, attrs) {
    return this.put(new Dom(create(nodeName), attrs));
  } // Get first child


  first() {
    return adopt(this.node.firstChild);
  } // Get a element at the given index


  get(i) {
    return adopt(this.node.childNodes[i]);
  }

  getEventHolder() {
    return this.node;
  }

  getEventTarget() {
    return this.node;
  } // Checks if the given element is a child


  has(element) {
    return this.index(element) >= 0;
  }

  html(htmlOrFn, outerHTML) {
    return this.xml(htmlOrFn, outerHTML, html);
  } // Get / set id


  id(id) {
    // generate new id if no id set
    if (typeof id === 'undefined' && !this.node.id) {
      this.node.id = eid(this.type);
    } // don't set directly with this.node.id to make `null` work correctly


    return this.attr('id', id);
  } // Gets index of given element


  index(element) {
    return [].slice.call(this.node.childNodes).indexOf(element.node);
  } // Get the last child


  last() {
    return adopt(this.node.lastChild);
  } // matches the element vs a css selector


  matches(selector) {
    const el = this.node;
    const matcher = el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector || null;
    return matcher && matcher.call(el, selector);
  } // Returns the parent element instance


  parent(type) {
    let parent = this; // check for parent

    if (!parent.node.parentNode) return null; // get parent element

    parent = adopt(parent.node.parentNode);
    if (!type) return parent; // loop trough ancestors if type is given

    do {
      if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
    } while (parent = adopt(parent.node.parentNode));

    return parent;
  } // Basically does the same as `add()` but returns the added element instead


  put(element, i) {
    element = makeInstance(element);
    this.add(element, i);
    return element;
  } // Add element to given container and return container


  putIn(parent, i) {
    return makeInstance(parent).add(this, i);
  } // Remove element


  remove() {
    if (this.parent()) {
      this.parent().removeElement(this);
    }

    return this;
  } // Remove a given child


  removeElement(element) {
    this.node.removeChild(element.node);
    return this;
  } // Replace this with element


  replace(element) {
    element = makeInstance(element);

    if (this.node.parentNode) {
      this.node.parentNode.replaceChild(element.node, this.node);
    }

    return element;
  }

  round(precision = 2, map = null) {
    const factor = 10 ** precision;
    const attrs = this.attr(map);

    for (const i in attrs) {
      if (typeof attrs[i] === 'number') {
        attrs[i] = Math.round(attrs[i] * factor) / factor;
      }
    }

    this.attr(attrs);
    return this;
  } // Import / Export raw svg


  svg(svgOrFn, outerSVG) {
    return this.xml(svgOrFn, outerSVG, svg);
  } // Return id on string conversion


  toString() {
    return this.id();
  }

  words(text) {
    // This is faster than removing all children and adding a new one
    this.node.textContent = text;
    return this;
  }

  wrap(node) {
    const parent = this.parent();

    if (!parent) {
      return this.addTo(node);
    }

    const position = parent.index(this);
    return parent.put(node, position).put(this);
  } // write svgjs data to the dom


  writeDataToDom() {
    // dump variables recursively
    this.each(function () {
      this.writeDataToDom();
    });
    return this;
  } // Import / Export raw svg


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // act as getter if no svg string is given


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      // The default for exports is, that the outerNode is included
      outerXML = outerXML == null ? true : outerXML; // write svgjs data to the dom

      this.writeDataToDom();
      let current = this; // An export modifier was passed

      if (xmlOrFn != null) {
        current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

        if (outerXML) {
          const result = xmlOrFn(current);
          current = result || current; // The user does not want this node? Well, then he gets nothing

          if (result === false) return '';
        } // Deep loop through all children and apply modifier


        current.each(function () {
          const result = xmlOrFn(this);

          const _this = result || this; // If modifier returns false, discard node


          if (result === false) {
            this.remove(); // If modifier returns new node, use it
          } else if (result && this !== _this) {
            this.replace(_this);
          }
        }, true);
      } // Return outer or inner content


      return outerXML ? current.node.outerHTML : current.node.innerHTML;
    } // Act as setter if we got a string
    // The default for import is, that the current node is not replaced


    outerXML = outerXML == null ? false : outerXML; // Create temporary holder

    const well = create('wrapper', ns);
    const fragment = globals.document.createDocumentFragment(); // Dump raw svg

    well.innerHTML = xmlOrFn; // Transplant nodes into the fragment

    for (let len = well.children.length; len--;) {
      fragment.appendChild(well.firstElementChild);
    }

    const parent = this.parent(); // Add the whole fragment at once

    return outerXML ? this.replace(fragment) && parent : this.add(fragment);
  }

}
extend(Dom, {
  attr,
  find,
  findOne
});
register(Dom, 'Dom');

class Element extends Dom {
  constructor(node, attrs) {
    super(node, attrs); // initialize data object

    this.dom = {}; // create circular reference

    this.node.instance = this;

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }
  } // Move element by its center


  center(x, y) {
    return this.cx(x).cy(y);
  } // Move by center over x-axis


  cx(x) {
    return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
  } // Move by center over y-axis


  cy(y) {
    return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
  } // Get defs


  defs() {
    const root = this.root();
    return root && root.defs();
  } // Relative move over x and y axes


  dmove(x, y) {
    return this.dx(x).dy(y);
  } // Relative move over x axis


  dx(x = 0) {
    return this.x(new SVGNumber(x).plus(this.x()));
  } // Relative move over y axis


  dy(y = 0) {
    return this.y(new SVGNumber(y).plus(this.y()));
  }

  getEventHolder() {
    return this;
  } // Set height of element


  height(height) {
    return this.attr('height', height);
  } // Move element to given x and y values


  move(x, y) {
    return this.x(x).y(y);
  } // return array of all ancestors of given type up to the root svg


  parents(until = this.root()) {
    until = makeInstance(until);
    const parents = new List();
    let parent = this;

    while ((parent = parent.parent()) && parent.node !== globals.document && parent.nodeName !== '#document-fragment') {
      parents.push(parent);

      if (parent.node === until.node) {
        break;
      }
    }

    return parents;
  } // Get referenced element form attribute value


  reference(attr) {
    attr = this.attr(attr);
    if (!attr) return null;
    const m = (attr + '').match(reference);
    return m ? makeInstance(m[1]) : null;
  } // Get parent document


  root() {
    const p = this.parent(getClass(root));
    return p && p.root();
  } // set given data to the elements data property


  setData(o) {
    this.dom = o;
    return this;
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
  } // Set width of element


  width(width) {
    return this.attr('width', width);
  } // write svgjs data to the dom


  writeDataToDom() {
    // remove previously set data
    this.node.removeAttribute('svgjs:data');

    if (Object.keys(this.dom).length) {
      this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
    }

    return super.writeDataToDom();
  } // Move over x-axis


  x(x) {
    return this.attr('x', x);
  } // Move over y-axis


  y(y) {
    return this.attr('y', y);
  }

}
extend(Element, {
  bbox,
  rbox,
  inside,
  point,
  ctm,
  screenCTM
});
register(Element, 'Element');

const sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function (t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  const extension = {};
  let i;

  extension[m] = function (o) {
    if (typeof o === 'undefined') {
      return this.attr(m);
    }

    if (typeof o === 'string' || o instanceof Color || Color.isRgb(o) || o instanceof Element) {
      this.attr(m, o);
    } else {
      // set all attributes from sugar.fill and sugar.stroke list
      for (i = sugar[m].length - 1; i >= 0; i--) {
        if (o[sugar[m][i]] != null) {
          this.attr(sugar.prefix(m, sugar[m][i]), o[sugar[m][i]]);
        }
      }
    }

    return this;
  };

  registerMethods(['Element', 'Runner'], extension);
});
registerMethods(['Element', 'Runner'], {
  // Let the user set the matrix directly
  matrix: function (mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function (angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      skew: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      skew: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  shear: function (lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function (x, y, cx, cy) {
    return arguments.length === 1 || arguments.length === 3 ? this.transform({
      scale: x,
      ox: y,
      oy: cx
    }, true) : this.transform({
      scale: [x, y],
      ox: cx,
      oy: cy
    }, true);
  },
  // Map translate to transform
  translate: function (x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function (x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function (direction = 'both', origin = 'center') {
    if ('xybothtrue'.indexOf(direction) === -1) {
      origin = direction;
      direction = 'both';
    }

    return this.transform({
      flip: direction,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function (value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function (x, y = x) {
    const type = (this._element || this).type;
    return type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function () {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function (length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function (a, v) {
    if (typeof a === 'object') {
      for (v in a) this.font(v, a[v]);

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
}); // Add events to elements

const methods = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  const fn = function (f) {
    if (f === null) {
      this.off(event);
    } else {
      this.on(event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods);

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  const matrix = (this.attr('transform') || ''). // split transformations
  split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    const kv = str.trim().split('(');
    return [kv[0], kv[1].split(delimiter).map(function (str) {
      return parseFloat(str);
    })];
  }).reverse() // merge every transformation into one matrix
  .reduce(function (matrix, transform) {
    if (transform[0] === 'matrix') {
      return matrix.lmultiply(Matrix.fromArray(transform[1]));
    }

    return matrix[transform[0]].apply(matrix, transform[1]);
  }, new Matrix());
  return matrix;
} // add an element to another parent without changing the visual representation on the screen

function toParent(parent, i) {
  if (this === parent) return this;
  const ctm = this.screenCTM();
  const pCtm = parent.screenCTM().inverse();
  this.addTo(parent, i).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot(i) {
  return this.toParent(this.root(), i);
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    const decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = { ...o,
      origin: getOrigin(o, this)
    };
  } // The user can pass a boolean, an Element or an Matrix or nothing


  const cleanRelative = relative === true ? this : relative || false;
  const result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform,
  matrixify,
  toParent,
  toRoot,
  transform
});

class Container extends Element {
  flatten(parent = this, index) {
    this.each(function () {
      if (this instanceof Container) {
        return this.flatten().ungroup();
      }
    });
    return this;
  }

  ungroup(parent = this.parent(), index = parent.index(this)) {
    // when parent != this, we want append all elements to the end
    index = index === -1 ? parent.children().length : index;
    this.each(function (i, children) {
      // reverse each
      return children[children.length - i - 1].toParent(parent, index);
    });
    return this.remove();
  }

}
register(Container, 'Container');

class Defs extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('defs', node), attrs);
  }

  flatten() {
    return this;
  }

  ungroup() {
    return this;
  }

}
register(Defs, 'Defs');

class Shape extends Element {}
register(Shape, 'Shape');

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x$3(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y$3(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx$1(x) {
  return this.attr('cx', x);
} // Move by center over y-axis

function cy$1(y) {
  return this.attr('cy', y);
} // Set width of element

function width$2(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height$2(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = {
  __proto__: null,
  rx: rx,
  ry: ry,
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
};

class Ellipse extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('ellipse', node), attrs);
  }

  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
  }

}
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function (width = 0, height = width) {
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

class Fragment extends Dom {
  constructor(node = globals.document.createDocumentFragment()) {
    super(node);
  } // Import / Export raw xml


  xml(xmlOrFn, outerXML, ns) {
    if (typeof xmlOrFn === 'boolean') {
      ns = outerXML;
      outerXML = xmlOrFn;
      xmlOrFn = null;
    } // because this is a fragment we have to put all elements into a wrapper first
    // before we can get the innerXML from it


    if (xmlOrFn == null || typeof xmlOrFn === 'function') {
      const wrapper = new Dom(create('wrapper', ns));
      wrapper.add(this.node.cloneNode(true));
      return wrapper.xml(false, ns);
    } // Act as setter if we got a string


    return super.xml(xmlOrFn, false, ns);
  }

}

register(Fragment, 'Fragment');

function from(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    fx: new SVGNumber(x),
    fy: new SVGNumber(y)
  }) : this.attr({
    x1: new SVGNumber(x),
    y1: new SVGNumber(y)
  });
}
function to(x, y) {
  return (this._element || this).type === 'radialGradient' ? this.attr({
    cx: new SVGNumber(x),
    cy: new SVGNumber(y)
  }) : this.attr({
    x2: new SVGNumber(x),
    y2: new SVGNumber(y)
  });
}

var gradiented = {
  __proto__: null,
  from: from,
  to: to
};

class Gradient extends Container {
  constructor(type, attrs) {
    super(nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'gradientTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update gradient


  update(block) {
    // remove all stops
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient(...args) {
      return this.defs().gradient(...args);
    }

  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

class Pattern extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('pattern', node), attrs);
  } // custom attr to handle transform


  attr(a, b, c) {
    if (a === 'transform') a = 'patternTransform';
    return super.attr(a, b, c);
  }

  bbox() {
    return new Box();
  }

  targets() {
    return baseFind('svg [fill*="' + this.id() + '"]');
  } // Alias string conversion to fill


  toString() {
    return this.url();
  } // Update pattern by rebuilding


  update(block) {
    // remove content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Return the fill id


  url() {
    return 'url("#' + this.id() + '")';
  }

}
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern(...args) {
      return this.defs().pattern(...args);
    }

  },
  Defs: {
    pattern: wrapWithAttrCheck(function (width, height, block) {
      return this.put(new Pattern()).update(block).attr({
        x: 0,
        y: 0,
        width: width,
        height: height,
        patternUnits: 'userSpaceOnUse'
      });
    })
  }
});
register(Pattern, 'Pattern');

class Image extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('image', node), attrs);
  } // (re)load image


  load(url, callback) {
    if (!url) return this;
    const img = new globals.window.Image();
    on(img, 'load', function (e) {
      const p = this.parent(Pattern); // ensure image size

      if (this.width() === 0 && this.height() === 0) {
        this.size(img.width, img.height);
      }

      if (p instanceof Pattern) {
        // ensure pattern size if not set
        if (p.width() === 0 && p.height() === 0) {
          p.size(this.width(), this.height());
        }
      }

      if (typeof callback === 'function') {
        callback.call(this, e);
      }
    }, this);
    on(img, 'load error', function () {
      // dont forget to unbind memory leaking events
      off(img);
    });
    return this.attr('href', img.src = url, xlink);
  }

}
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, pattern => {
      pattern.add(val);
    });
  }

  return val;
});
registerMethods({
  Container: {
    // create image element, load image and set its size
    image: wrapWithAttrCheck(function (source, callback) {
      return this.put(new Image()).size(0, 0).load(source, callback);
    })
  }
});
register(Image, 'Image');

class PointArray extends SVGArray {
  // Get bounding box of points
  bbox() {
    let maxX = -Infinity;
    let maxY = -Infinity;
    let minX = Infinity;
    let minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return new Box(minX, minY, maxX - minX, maxY - minY);
  } // Move point string


  move(x, y) {
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (let i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  } // Parse point string and flat array


  parse(array = [0, 0]) {
    const points = []; // if it is an array, we flatten it and therefore clone it to 1 depths

    if (array instanceof Array) {
      array = Array.prototype.concat.apply([], array);
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (let i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  } // Resize poly string


  size(width, height) {
    let i;
    const box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  } // Convert array to line object


  toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  } // Convert array to string


  toString() {
    const array = []; // convert to a poly point string

    for (let i = 0, il = this.length; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  }

  transform(m) {
    return this.clone().transformO(m);
  } // transform points with matrix (similar to Point.transform)


  transformO(m) {
    if (!Matrix.isMatrixLike(m)) {
      m = new Matrix(m);
    }

    for (let i = this.length; i--;) {
      // Perform the matrix multiplication
      const [x, y] = this[i];
      this[i][0] = m.a * x + m.c * y + m.e;
      this[i][1] = m.b * x + m.d * y + m.f;
    }

    return this;
  }

}

const MorphArray = PointArray; // Move by left top corner over x-axis

function x$2(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$2(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  const b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  const b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = {
  __proto__: null,
  MorphArray: MorphArray,
  x: x$2,
  y: y$2,
  width: width$1,
  height: height$1
};

class Line extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('line', node), attrs);
  } // Get array


  array() {
    return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
  } // Move by left top corner


  move(x, y) {
    return this.attr(this.array().move(x, y).toLine());
  } // Overwrite native plot() method


  plot(x1, y1, x2, y2) {
    if (x1 == null) {
      return this.array();
    } else if (typeof y1 !== 'undefined') {
      x1 = {
        x1,
        y1,
        x2,
        y2
      };
    } else {
      x1 = new PointArray(x1).toLine();
    }

    return this.attr(x1);
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr(this.array().size(p.width, p.height).toLine());
  }

}
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function (...args) {
      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

class Marker extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('marker', node), attrs);
  } // Set height of element


  height(height) {
    return this.attr('markerHeight', height);
  }

  orient(orient) {
    return this.attr('orient', orient);
  } // Set marker refX and refY


  ref(x, y) {
    return this.attr('refX', x).attr('refY', y);
  } // Return the fill id


  toString() {
    return 'url(#' + this.id() + ')';
  } // Update marker


  update(block) {
    // remove all content
    this.clear(); // invoke passed block

    if (typeof block === 'function') {
      block.call(this, this);
    }

    return this;
  } // Set width of element


  width(width) {
    return this.attr('markerWidth', width);
  }

}
registerMethods({
  Container: {
    marker(...args) {
      // Create marker element in defs
      return this.defs().marker(...args);
    }

  },
  Defs: {
    // Create marker
    marker: wrapWithAttrCheck(function (width, height, block) {
      // Set default viewbox to match the width and height, set ref to cx and cy and set orient to auto
      return this.put(new Marker()).size(width, height).ref(width / 2, height / 2).viewbox(0, 0, width, height).attr('orient', 'auto').update(block);
    })
  },
  marker: {
    // Create and attach markers
    marker(marker, width, height, block) {
      let attr = ['marker']; // Build attribute name

      if (marker !== 'all') attr.push(marker);
      attr = attr.join('-'); // Set marker attribute

      marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, marker);
    }

  }
});
register(Marker, 'Marker');

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[k];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

const easing = {
  '-': function (pos) {
    return pos;
  },
  '<>': function (pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function (pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function (pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function (x1, y1, x2, y2) {
    // see https://www.w3.org/TR/css-easing-1/#cubic-bezier-algo
    return function (t) {
      if (t < 0) {
        if (x1 > 0) {
          return y1 / x1 * t;
        } else if (x2 > 0) {
          return y2 / x2 * t;
        } else {
          return 0;
        }
      } else if (t > 1) {
        if (x2 < 1) {
          return (1 - y2) / (1 - x2) * t + (y2 - x2) / (1 - x2);
        } else if (x1 < 1) {
          return (1 - y1) / (1 - x1) * t + (y1 - x1) / (1 - x1);
        } else {
          return 1;
        }
      } else {
        return 3 * t * (1 - t) ** 2 * y1 + 3 * t ** 2 * (1 - t) * y2 + t ** 3;
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function (steps, stepPosition = 'end') {
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    let jumps = steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return (t, beforeFlag = false) => {
      // Step is called currentStep in referenced url
      let step = Math.floor(t * steps);
      const jumping = t * step % 1 === 0;

      if (stepPosition === 'start' || stepPosition === 'both') {
        ++step;
      }

      if (beforeFlag && jumping) {
        --step;
      }

      if (t >= 0 && step < 0) {
        step = 0;
      }

      if (t <= 1 && step > jumps) {
        step = jumps;
      }

      return step / jumps;
    };
  }
};
class Stepper {
  done() {
    return false;
  }

}
/***
Easing Functions
================
***/

class Ease extends Stepper {
  constructor(fn = timeline.ease) {
    super();
    this.ease = easing[fn] || fn;
  }

  step(from, to, pos) {
    if (typeof from !== 'number') {
      return pos < 1 ? from : to;
    }

    return from + (to - from) * this.ease(pos);
  }

}
/***
Controller Types
================
***/

class Controller extends Stepper {
  constructor(fn) {
    super();
    this.stepper = fn;
  }

  done(c) {
    return c.done;
  }

  step(current, target, dt, c) {
    return this.stepper(current, target, dt, c);
  }

}

function recalculate() {
  // Apply the default parameters
  const duration = (this._duration || 500) / 1000;
  const overshoot = this._overshoot || 0; // Calculate the PID natural response

  const eps = 1e-10;
  const pi = Math.PI;
  const os = Math.log(overshoot / 100 + eps);
  const zeta = -os / Math.sqrt(pi * pi + os * os);
  const wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

class Spring extends Controller {
  constructor(duration = 500, overshoot = 0) {
    super();
    this.duration(duration).overshoot(overshoot);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    if (dt > 100) dt = 16;
    dt /= 1000; // Get the previous velocity

    const velocity = c.velocity || 0; // Apply the control to get the new position and store it

    const acceleration = -this.d * velocity - this.k * (current - target);
    const newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

    c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

    c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
    return c.done ? target : newPosition;
  }

}
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
class PID extends Controller {
  constructor(p = 0.1, i = 0.01, d = 0, windup = 1000) {
    super();
    this.p(p).i(i).d(d).windup(windup);
  }

  step(current, target, dt, c) {
    if (typeof current === 'string') return current;
    c.done = dt === Infinity;
    if (dt === Infinity) return target;
    if (dt === 0) return current;
    const p = target - current;
    let i = (c.integral || 0) + p * dt;
    const d = (p - (c.error || 0)) / dt;
    const windup = this._windup; // antiwindup

    if (windup !== false) {
      i = Math.max(-windup, Math.min(i, windup));
    }

    c.error = p;
    c.integral = i;
    c.done = Math.abs(p) < 0.001;
    return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
  }

}
extend(PID, {
  windup: makeSetterGetter('_windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

const segmentParameters = {
  M: 2,
  L: 2,
  H: 1,
  V: 1,
  C: 6,
  S: 4,
  Q: 4,
  T: 2,
  A: 7,
  Z: 0
};
const pathHandlers = {
  M: function (c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function (c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function (c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function (c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function (c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function (c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function (c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function (c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
const mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (let i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (let j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

function makeAbsolut(parser) {
  const command = parser.segment[0];
  return pathHandlers[command](parser.segment.slice(1), parser.p, parser.p0);
}

function segmentComplete(parser) {
  return parser.segment.length && parser.segment.length - 1 === segmentParameters[parser.segment[0].toUpperCase()];
}

function startNewSegment(parser, token) {
  parser.inNumber && finalizeNumber(parser, false);
  const pathLetter = isPathLetter.test(token);

  if (pathLetter) {
    parser.segment = [token];
  } else {
    const lastCommand = parser.lastCommand;
    const small = lastCommand.toLowerCase();
    const isSmall = lastCommand === small;
    parser.segment = [small === 'm' ? isSmall ? 'l' : 'L' : lastCommand];
  }

  parser.inSegment = true;
  parser.lastCommand = parser.segment[0];
  return pathLetter;
}

function finalizeNumber(parser, inNumber) {
  if (!parser.inNumber) throw new Error('Parser Error');
  parser.number && parser.segment.push(parseFloat(parser.number));
  parser.inNumber = inNumber;
  parser.number = '';
  parser.pointSeen = false;
  parser.hasExponent = false;

  if (segmentComplete(parser)) {
    finalizeSegment(parser);
  }
}

function finalizeSegment(parser) {
  parser.inSegment = false;

  if (parser.absolute) {
    parser.segment = makeAbsolut(parser);
  }

  parser.segments.push(parser.segment);
}

function isArcFlag(parser) {
  if (!parser.segment.length) return false;
  const isArc = parser.segment[0].toUpperCase() === 'A';
  const length = parser.segment.length;
  return isArc && (length === 4 || length === 5);
}

function isExponential(parser) {
  return parser.lastToken.toUpperCase() === 'E';
}

function pathParser(d, toAbsolute = true) {
  let index = 0;
  let token = '';
  const parser = {
    segment: [],
    inNumber: false,
    number: '',
    lastToken: '',
    inSegment: false,
    segments: [],
    pointSeen: false,
    hasExponent: false,
    absolute: toAbsolute,
    p0: new Point(),
    p: new Point()
  };

  while (parser.lastToken = token, token = d.charAt(index++)) {
    if (!parser.inSegment) {
      if (startNewSegment(parser, token)) {
        continue;
      }
    }

    if (token === '.') {
      if (parser.pointSeen || parser.hasExponent) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.inNumber = true;
      parser.pointSeen = true;
      parser.number += token;
      continue;
    }

    if (!isNaN(parseInt(token))) {
      if (parser.number === '0' || isArcFlag(parser)) {
        parser.inNumber = true;
        parser.number = token;
        finalizeNumber(parser, true);
        continue;
      }

      parser.inNumber = true;
      parser.number += token;
      continue;
    }

    if (token === ' ' || token === ',') {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      }

      continue;
    }

    if (token === '-') {
      if (parser.inNumber && !isExponential(parser)) {
        finalizeNumber(parser, false);
        --index;
        continue;
      }

      parser.number += token;
      parser.inNumber = true;
      continue;
    }

    if (token.toUpperCase() === 'E') {
      parser.number += token;
      parser.hasExponent = true;
      continue;
    }

    if (isPathLetter.test(token)) {
      if (parser.inNumber) {
        finalizeNumber(parser, false);
      } else if (!segmentComplete(parser)) {
        throw new Error('parser Error');
      } else {
        finalizeSegment(parser);
      }

      --index;
    }
  }

  if (parser.inNumber) {
    finalizeNumber(parser, false);
  }

  if (parser.inSegment && segmentComplete(parser)) {
    finalizeSegment(parser);
  }

  return parser.segments;
}

function arrayToString(a) {
  let s = '';

  for (let i = 0, il = a.length; i < il; i++) {
    s += a[i][0];

    if (a[i][1] != null) {
      s += a[i][1];

      if (a[i][2] != null) {
        s += ' ';
        s += a[i][2];

        if (a[i][3] != null) {
          s += ' ';
          s += a[i][3];
          s += ' ';
          s += a[i][4];

          if (a[i][5] != null) {
            s += ' ';
            s += a[i][5];
            s += ' ';
            s += a[i][6];

            if (a[i][7] != null) {
              s += ' ';
              s += a[i][7];
            }
          }
        }
      }
    }
  }

  return s + ' ';
}

class PathArray extends SVGArray {
  // Get bounding box of path
  bbox() {
    parser().path.setAttribute('d', this.toString());
    return new Box(parser.nodes.path.getBBox());
  } // Move path string


  move(x, y) {
    // get bounding box of current situation
    const box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (let l, i = this.length - 1; i >= 0; i--) {
        l = this[i][0];

        if (l === 'M' || l === 'L' || l === 'T') {
          this[i][1] += x;
          this[i][2] += y;
        } else if (l === 'H') {
          this[i][1] += x;
        } else if (l === 'V') {
          this[i][1] += y;
        } else if (l === 'C' || l === 'S' || l === 'Q') {
          this[i][1] += x;
          this[i][2] += y;
          this[i][3] += x;
          this[i][4] += y;

          if (l === 'C') {
            this[i][5] += x;
            this[i][6] += y;
          }
        } else if (l === 'A') {
          this[i][6] += x;
          this[i][7] += y;
        }
      }
    }

    return this;
  } // Absolutize and parse path to array


  parse(d = 'M0 0') {
    if (Array.isArray(d)) {
      d = Array.prototype.concat.apply([], d).toString();
    }

    return pathParser(d);
  } // Resize path string


  size(width, height) {
    // get bounding box of current situation
    const box = this.bbox();
    let i, l; // If the box width or height is 0 then we ignore
    // transformations on the respective axis

    box.width = box.width === 0 ? 1 : box.width;
    box.height = box.height === 0 ? 1 : box.height; // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      l = this[i][0];

      if (l === 'M' || l === 'L' || l === 'T') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
      } else if (l === 'H') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
      } else if (l === 'V') {
        this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
      } else if (l === 'C' || l === 'S' || l === 'Q') {
        this[i][1] = (this[i][1] - box.x) * width / box.width + box.x;
        this[i][2] = (this[i][2] - box.y) * height / box.height + box.y;
        this[i][3] = (this[i][3] - box.x) * width / box.width + box.x;
        this[i][4] = (this[i][4] - box.y) * height / box.height + box.y;

        if (l === 'C') {
          this[i][5] = (this[i][5] - box.x) * width / box.width + box.x;
          this[i][6] = (this[i][6] - box.y) * height / box.height + box.y;
        }
      } else if (l === 'A') {
        // resize radii
        this[i][1] = this[i][1] * width / box.width;
        this[i][2] = this[i][2] * height / box.height; // move position values

        this[i][6] = (this[i][6] - box.x) * width / box.width + box.x;
        this[i][7] = (this[i][7] - box.y) * height / box.height + box.y;
      }
    }

    return this;
  } // Convert array to string


  toString() {
    return arrayToString(this);
  }

}

const getClassForType = value => {
  const type = typeof value;

  if (type === 'number') {
    return SVGNumber;
  } else if (type === 'string') {
    if (Color.isColor(value)) {
      return Color;
    } else if (delimiter.test(value)) {
      return isPathLetter.test(value) ? PathArray : SVGArray;
    } else if (numberAndUnit.test(value)) {
      return SVGNumber;
    } else {
      return NonMorphable;
    }
  } else if (morphableTypes.indexOf(value.constructor) > -1) {
    return value.constructor;
  } else if (Array.isArray(value)) {
    return SVGArray;
  } else if (type === 'object') {
    return ObjectBag;
  } else {
    return NonMorphable;
  }
};

class Morphable {
  constructor(stepper) {
    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  at(pos) {
    const _this = this;

    return this._morphObj.fromArray(this._from.map(function (i, index) {
      return _this._stepper.step(i, _this._to[index], pos, _this._context[index], _this._context);
    }));
  }

  done() {
    const complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
      return last && curr;
    }, true);

    return complete;
  }

  from(val) {
    if (val == null) {
      return this._from;
    }

    this._from = this._set(val);
    return this;
  }

  stepper(stepper) {
    if (stepper == null) return this._stepper;
    this._stepper = stepper;
    return this;
  }

  to(val) {
    if (val == null) {
      return this._to;
    }

    this._to = this._set(val);
    return this;
  }

  type(type) {
    // getter
    if (type == null) {
      return this._type;
    } // setter


    this._type = type;
    return this;
  }

  _set(value) {
    if (!this._type) {
      this.type(getClassForType(value));
    }

    let result = new this._type(value);

    if (this._type === Color) {
      result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
    }

    if (this._type === ObjectBag) {
      result = this._to ? result.align(this._to) : this._from ? result.align(this._from) : result;
    }

    result = result.toArray();
    this._morphObj = this._morphObj || new this._type();
    this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
      o.done = true;
      return o;
    });
    return result;
  }

}
class NonMorphable {
  constructor(...args) {
    this.init(...args);
  }

  init(val) {
    val = Array.isArray(val) ? val[0] : val;
    this.value = val;
    return this;
  }

  toArray() {
    return [this.value];
  }

  valueOf() {
    return this.value;
  }

}
class TransformBag {
  constructor(...args) {
    this.init(...args);
  }

  init(obj) {
    if (Array.isArray(obj)) {
      obj = {
        scaleX: obj[0],
        scaleY: obj[1],
        shear: obj[2],
        rotate: obj[3],
        translateX: obj[4],
        translateY: obj[5],
        originX: obj[6],
        originY: obj[7]
      };
    }

    Object.assign(this, TransformBag.defaults, obj);
    return this;
  }

  toArray() {
    const v = this;
    return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
  }

}
TransformBag.defaults = {
  scaleX: 1,
  scaleY: 1,
  shear: 0,
  rotate: 0,
  translateX: 0,
  translateY: 0,
  originX: 0,
  originY: 0
};

const sortByKey = (a, b) => {
  return a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0;
};

class ObjectBag {
  constructor(...args) {
    this.init(...args);
  }

  align(other) {
    for (let i = 0, il = this.values.length; i < il; ++i) {
      if (this.values[i] === Color) {
        const space = other[i + 6];
        const color = new Color(this.values.splice(i + 2, 5))[space]().toArray();
        this.values.splice(i + 2, 0, ...color);
      }
    }

    return this;
  }

  init(objOrArr) {
    this.values = [];

    if (Array.isArray(objOrArr)) {
      this.values = objOrArr.slice();
      return;
    }

    objOrArr = objOrArr || {};
    const entries = [];

    for (const i in objOrArr) {
      const Type = getClassForType(objOrArr[i]);
      const val = new Type(objOrArr[i]).toArray();
      entries.push([i, Type, val.length, ...val]);
    }

    entries.sort(sortByKey);
    this.values = entries.reduce((last, curr) => last.concat(curr), []);
    return this;
  }

  toArray() {
    return this.values;
  }

  valueOf() {
    const obj = {};
    const arr = this.values; // for (var i = 0, len = arr.length; i < len; i += 2) {

    while (arr.length) {
      const key = arr.shift();
      const Type = arr.shift();
      const num = arr.shift();
      const values = arr.splice(0, num);
      obj[key] = new Type(values).valueOf();
    }

    return obj;
  }

}
const morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType(type = []) {
  morphableTypes.push(...[].concat(type));
}
function makeMorphable() {
  extend(morphableTypes, {
    to(val) {
      return new Morphable().type(this.constructor).from(this.valueOf()).to(val);
    },

    fromArray(arr) {
      this.init(arr);
      return this;
    }

  });
}

class Path extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('path', node), attrs);
  } // Get array


  array() {
    return this._array || (this._array = new PathArray(this.attr('d')));
  } // Clear array cache


  clear() {
    delete this._array;
    return this;
  } // Set height of element


  height(height) {
    return height == null ? this.bbox().height : this.size(this.bbox().width, height);
  } // Move by left top corner


  move(x, y) {
    return this.attr('d', this.array().move(x, y));
  } // Plot new path


  plot(d) {
    return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
  } // Set element size to given width and height


  size(width, height) {
    const p = proportionalSize(this, width, height);
    return this.attr('d', this.array().size(p.width, p.height));
  } // Set width of element


  width(width) {
    return width == null ? this.bbox().width : this.size(width, this.bbox().height);
  } // Move by left top corner over x-axis


  x(x) {
    return x == null ? this.bbox().x : this.move(x, this.bbox().y);
  } // Move by left top corner over y-axis


  y(y) {
    return y == null ? this.bbox().y : this.move(this.bbox().x, y);
  }

} // Define morphable array

Path.prototype.MorphArray = PathArray; // Add parent method

registerMethods({
  Container: {
    // Create a wrapped path element
    path: wrapWithAttrCheck(function (d) {
      // make sure plot is called as a setter
      return this.put(new Path()).plot(d || new PathArray());
    })
  }
});
register(Path, 'Path');

function array() {
  return this._array || (this._array = new PointArray(this.attr('points')));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move$2(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Set element size to given width and height

function size$1(width, height) {
  const p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = {
  __proto__: null,
  array: array,
  clear: clear,
  move: move$2,
  plot: plot,
  size: size$1
};

class Polygon extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polygon', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polygon: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polygon()).plot(p || new PointArray());
    })
  }
});
extend(Polygon, pointed);
extend(Polygon, poly);
register(Polygon, 'Polygon');

class Polyline extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('polyline', node), attrs);
  }

}
registerMethods({
  Container: {
    // Create a wrapped polygon element
    polyline: wrapWithAttrCheck(function (p) {
      // make sure plot is called as a setter
      return this.put(new Polyline()).plot(p || new PointArray());
    })
  }
});
extend(Polyline, pointed);
extend(Polyline, poly);
register(Polyline, 'Polyline');

class Rect extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('rect', node), attrs);
  }

}
extend(Rect, {
  rx,
  ry
});
registerMethods({
  Container: {
    // Create a rect element
    rect: wrapWithAttrCheck(function (width, height) {
      return this.put(new Rect()).size(width, height);
    })
  }
});
register(Rect, 'Rect');

class Queue {
  constructor() {
    this._first = null;
    this._last = null;
  } // Shows us the first item in the list


  first() {
    return this._first && this._first.value;
  } // Shows us the last item in the list


  last() {
    return this._last && this._last.value;
  }

  push(value) {
    // An item stores an id and the provided value
    const item = typeof value.next !== 'undefined' ? value : {
      value: value,
      next: null,
      prev: null
    }; // Deal with the queue being empty or populated

    if (this._last) {
      item.prev = this._last;
      this._last.next = item;
      this._last = item;
    } else {
      this._last = item;
      this._first = item;
    } // Return the current item


    return item;
  } // Removes the item that was returned from the push


  remove(item) {
    // Relink the previous item
    if (item.prev) item.prev.next = item.next;
    if (item.next) item.next.prev = item.prev;
    if (item === this._last) this._last = item.prev;
    if (item === this._first) this._first = item.next; // Invalidate item

    item.prev = null;
    item.next = null;
  }

  shift() {
    // Check if we have a value
    const remove = this._first;
    if (!remove) return null; // If we do, remove it and relink things

    this._first = remove.next;
    if (this._first) this._first.prev = null;
    this._last = this._first ? this._last : null;
    return remove.value;
  }

}

const Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: () => globals.window.performance || globals.window.Date,
  transforms: [],

  frame(fn) {
    // Store the node
    const node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },

  timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    const time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    const node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  immediate(fn) {
    // Add the immediate fn to the end of the queue
    const node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },

  cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },

  clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },

  cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },

  _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    let nextTimeout = null;
    const lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    let nextFrame = null;
    const lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    let nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }

};

const makeSchedule = function (runnerInfo) {
  const start = runnerInfo.start;
  const duration = runnerInfo.runner.duration();
  const end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

const defaultSource = function () {
  const w = globals.window;
  return (w.performance || w.Date).now();
};

class Timeline extends EventTarget {
  // Construct a new timeline on the given element
  constructor(timeSource = defaultSource) {
    super();
    this._timeSource = timeSource; // Store the timing variables

    this._startTime = 0;
    this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    this._persist = 0; // Keep track of the running animations and their starting parameters

    this._nextFrame = null;
    this._paused = true;
    this._runners = [];
    this._runnerIds = [];
    this._lastRunnerId = -1;
    this._time = 0;
    this._lastSourceTime = 0;
    this._lastStepTime = 0; // Make sure that step is always called in class context

    this._step = this._stepFn.bind(this, false);
    this._stepImmediate = this._stepFn.bind(this, true);
  }

  active() {
    return !!this._nextFrame;
  }

  finish() {
    // Go to end and pause
    this.time(this.getEndTimeOfTimeline() + 1);
    return this.pause();
  } // Calculates the end of the timeline


  getEndTime() {
    const lastRunnerInfo = this.getLastRunnerInfo();
    const lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
    const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
    return lastStartTime + lastDuration;
  }

  getEndTimeOfTimeline() {
    const endTimes = this._runners.map(i => i.start + i.runner.duration());

    return Math.max(0, ...endTimes);
  }

  getLastRunnerInfo() {
    return this.getRunnerInfoById(this._lastRunnerId);
  }

  getRunnerInfoById(id) {
    return this._runners[this._runnerIds.indexOf(id)] || null;
  }

  pause() {
    this._paused = true;
    return this._continue();
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  play() {
    // Now make sure we are not paused and continue the animation
    this._paused = false;
    return this.updateTime()._continue();
  }

  reverse(yes) {
    const currentSpeed = this.speed();
    if (yes == null) return this.speed(-currentSpeed);
    const positive = Math.abs(currentSpeed);
    return this.speed(yes ? -positive : positive);
  } // schedules a runner on the timeline


  schedule(runner, delay, when) {
    if (runner == null) {
      return this._runners.map(makeSchedule);
    } // The start time for the next animation can either be given explicitly,
    // derived from the current timeline time or it can be relative to the
    // last start time to chain animations directly


    let absoluteStartTime = 0;
    const endTime = this.getEndTime();
    delay = delay || 0; // Work out when to start the animation

    if (when == null || when === 'last' || when === 'after') {
      // Take the last time and increment
      absoluteStartTime = endTime;
    } else if (when === 'absolute' || when === 'start') {
      absoluteStartTime = delay;
      delay = 0;
    } else if (when === 'now') {
      absoluteStartTime = this._time;
    } else if (when === 'relative') {
      const runnerInfo = this.getRunnerInfoById(runner.id);

      if (runnerInfo) {
        absoluteStartTime = runnerInfo.start + delay;
        delay = 0;
      }
    } else if (when === 'with-last') {
      const lastRunnerInfo = this.getLastRunnerInfo();
      const lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : this._time;
      absoluteStartTime = lastStartTime;
    } else {
      throw new Error('Invalid value for the "when" parameter');
    } // Manage runner


    runner.unschedule();
    runner.timeline(this);
    const persist = runner.persist();
    const runnerInfo = {
      persist: persist === null ? this._persist : persist,
      start: absoluteStartTime + delay,
      runner
    };
    this._lastRunnerId = runner.id;

    this._runners.push(runnerInfo);

    this._runners.sort((a, b) => a.start - b.start);

    this._runnerIds = this._runners.map(info => info.runner.id);

    this.updateTime()._continue();

    return this;
  }

  seek(dt) {
    return this.time(this._time + dt);
  }

  source(fn) {
    if (fn == null) return this._timeSource;
    this._timeSource = fn;
    return this;
  }

  speed(speed) {
    if (speed == null) return this._speed;
    this._speed = speed;
    return this;
  }

  stop() {
    // Go to start and pause
    this.time(0);
    return this.pause();
  }

  time(time) {
    if (time == null) return this._time;
    this._time = time;
    return this._continue(true);
  } // Remove the runner from this timeline


  unschedule(runner) {
    const index = this._runnerIds.indexOf(runner.id);

    if (index < 0) return this;

    this._runners.splice(index, 1);

    this._runnerIds.splice(index, 1);

    runner.timeline(null);
    return this;
  } // Makes sure, that after pausing the time doesn't jump


  updateTime() {
    if (!this.active()) {
      this._lastSourceTime = this._timeSource();
    }

    return this;
  } // Checks if we are running and continues the animation


  _continue(immediateStep = false) {
    Animator.cancelFrame(this._nextFrame);
    this._nextFrame = null;
    if (immediateStep) return this._stepImmediate();
    if (this._paused) return this;
    this._nextFrame = Animator.frame(this._step);
    return this;
  }

  _stepFn(immediateStep = false) {
    // Get the time delta from the last time and update the time
    const time = this._timeSource();

    let dtSource = time - this._lastSourceTime;
    if (immediateStep) dtSource = 0;
    const dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
    this._lastSourceTime = time; // Only update the time if we use the timeSource.
    // Otherwise use the current time

    if (!immediateStep) {
      // Update the time
      this._time += dtTime;
      this._time = this._time < 0 ? 0 : this._time;
    }

    this._lastStepTime = this._time;
    this.fire('time', this._time); // This is for the case that the timeline was seeked so that the time
    // is now before the startTime of the runner. Thats why we need to set
    // the runner to position 0
    // FIXME:
    // However, reseting in insertion order leads to bugs. Considering the case,
    // where 2 runners change the same attribute but in different times,
    // reseting both of them will lead to the case where the later defined
    // runner always wins the reset even if the other runner started earlier
    // and therefore should win the attribute battle
    // this can be solved by reseting them backwards

    for (let k = this._runners.length; k--;) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[k];
      const runner = runnerInfo.runner; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
      // and try to reset it

      if (dtToStart <= 0) {
        runner.reset();
      }
    } // Run all of the runners directly


    let runnersLeft = false;

    for (let i = 0, len = this._runners.length; i < len; i++) {
      // Get and run the current runner and ignore it if its inactive
      const runnerInfo = this._runners[i];
      const runner = runnerInfo.runner;
      let dt = dtTime; // Make sure that we give the actual difference
      // between runner start time and now

      const dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet

      if (dtToStart <= 0) {
        runnersLeft = true;
        continue;
      } else if (dtToStart < dt) {
        // Adjust dt to make sure that animation is on point
        dt = dtToStart;
      }

      if (!runner.active()) continue; // If this runner is still going, signal that we need another animation
      // frame, otherwise, remove the completed runner

      const finished = runner.step(dt).done;

      if (!finished) {
        runnersLeft = true; // continue
      } else if (runnerInfo.persist !== true) {
        // runner is finished. And runner might get removed
        const endTime = runner.duration() - runner.time() + this._time;

        if (endTime + runnerInfo.persist < this._time) {
          // Delete runner and correct index
          runner.unschedule();
          --i;
          --len;
        }
      }
    } // Basically: we continue when there are runners right from us in time
    // when -->, and when runners are left from us when <--


    if (runnersLeft && !(this._speed < 0 && this._time === 0) || this._runnerIds.length && this._speed < 0 && this._time > 0) {
      this._continue();
    } else {
      this.pause();
      this.fire('finished');
    }

    return this;
  }

}
registerMethods({
  Element: {
    timeline: function (timeline) {
      if (timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = timeline;
        return this;
      }
    }
  }
});

class Runner extends EventTarget {
  constructor(options) {
    super(); // Store a unique id on the runner, so that we can identify it later

    this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    this._element = null;
    this._timeline = null;
    this.done = false;
    this._queue = []; // Work out the stepper and the duration

    this._duration = typeof options === 'number' && options;
    this._isDeclarative = options instanceof Controller;
    this._stepper = this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    this._history = {}; // Store the state of the runner

    this.enabled = true;
    this._time = 0;
    this._lastTime = 0; // At creation, the runner is in reseted state

    this._reseted = true; // Save transforms applied to this runner

    this.transforms = new Matrix();
    this.transformId = 1; // Looping variables

    this._haveReversed = false;
    this._reverse = false;
    this._loopsDone = 0;
    this._swing = false;
    this._wait = 0;
    this._times = 1;
    this._frameId = null; // Stores how long a runner is stored after beeing done

    this._persist = this._isDeclarative ? true : null;
  }

  static sanitise(duration, delay, when) {
    // Initialise the default parameters
    let times = 1;
    let swing = false;
    let wait = 0;
    duration = duration || timeline.duration;
    delay = delay || timeline.delay;
    when = when || 'last'; // If we have an object, unpack the values

    if (typeof duration === 'object' && !(duration instanceof Stepper)) {
      delay = duration.delay || delay;
      when = duration.when || when;
      swing = duration.swing || swing;
      times = duration.times || times;
      wait = duration.wait || wait;
      duration = duration.duration || timeline.duration;
    }

    return {
      duration: duration,
      delay: delay,
      swing: swing,
      times: times,
      wait: wait,
      when: when
    };
  }

  active(enabled) {
    if (enabled == null) return this.enabled;
    this.enabled = enabled;
    return this;
  }
  /*
  Private Methods
  ===============
  Methods that shouldn't be used externally
  */


  addTransform(transform, index) {
    this.transforms.lmultiplyO(transform);
    return this;
  }

  after(fn) {
    return this.on('finished', fn);
  }

  animate(duration, delay, when) {
    const o = Runner.sanitise(duration, delay, when);
    const runner = new Runner(o.duration);
    if (this._timeline) runner.timeline(this._timeline);
    if (this._element) runner.element(this._element);
    return runner.loop(o).schedule(o.delay, o.when);
  }

  clearTransform() {
    this.transforms = new Matrix();
    return this;
  } // TODO: Keep track of all transformations so that deletion is faster


  clearTransformsFromQueue() {
    if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
      this._queue = this._queue.filter(item => {
        return !item.isTransform;
      });
    }
  }

  delay(delay) {
    return this.animate(0, delay);
  }

  duration() {
    return this._times * (this._wait + this._duration) - this._wait;
  }

  during(fn) {
    return this.queue(null, fn);
  }

  ease(fn) {
    this._stepper = new Ease(fn);
    return this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  element(element) {
    if (element == null) return this._element;
    this._element = element;

    element._prepareRunner();

    return this;
  }

  finish() {
    return this.step(Infinity);
  }

  loop(times, swing, wait) {
    // Deal with the user passing in an object
    if (typeof times === 'object') {
      swing = times.swing;
      wait = times.wait;
      times = times.times;
    } // Sanitise the values and store them


    this._times = times || Infinity;
    this._swing = swing || false;
    this._wait = wait || 0; // Allow true to be passed

    if (this._times === true) {
      this._times = Infinity;
    }

    return this;
  }

  loops(p) {
    const loopDuration = this._duration + this._wait;

    if (p == null) {
      const loopsDone = Math.floor(this._time / loopDuration);
      const relativeTime = this._time - loopsDone * loopDuration;
      const position = relativeTime / this._duration;
      return Math.min(loopsDone + position, this._times);
    }

    const whole = Math.floor(p);
    const partial = p % 1;
    const time = loopDuration * whole + this._duration * partial;
    return this.time(time);
  }

  persist(dtOrForever) {
    if (dtOrForever == null) return this._persist;
    this._persist = dtOrForever;
    return this;
  }

  position(p) {
    // Get all of the variables we need
    const x = this._time;
    const d = this._duration;
    const w = this._wait;
    const t = this._times;
    const s = this._swing;
    const r = this._reverse;
    let position;

    if (p == null) {
      /*
      This function converts a time to a position in the range [0, 1]
      The full explanation can be found in this desmos demonstration
        https://www.desmos.com/calculator/u4fbavgche
      The logic is slightly simplified here because we can use booleans
      */
      // Figure out the value without thinking about the start or end time
      const f = function (x) {
        const swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
        const backwards = swinging && !r || !swinging && r;
        const uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
        const clipped = Math.max(Math.min(uncliped, 1), 0);
        return clipped;
      }; // Figure out the value by incorporating the start time


      const endTime = t * (w + d) - w;
      position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
      return position;
    } // Work out the loops done and add the position to the loops done


    const loopsDone = Math.floor(this.loops());
    const swingForward = s && loopsDone % 2 === 0;
    const forwards = swingForward && !r || r && swingForward;
    position = loopsDone + (forwards ? p : 1 - p);
    return this.loops(position);
  }

  progress(p) {
    if (p == null) {
      return Math.min(1, this._time / this.duration());
    }

    return this.time(p * this.duration());
  }
  /*
  Basic Functionality
  ===================
  These methods allow us to attach basic functions to the runner directly
  */


  queue(initFn, runFn, retargetFn, isTransform) {
    this._queue.push({
      initialiser: initFn || noop,
      runner: runFn || noop,
      retarget: retargetFn,
      isTransform: isTransform,
      initialised: false,
      finished: false
    });

    const timeline = this.timeline();
    timeline && this.timeline()._continue();
    return this;
  }

  reset() {
    if (this._reseted) return this;
    this.time(0);
    this._reseted = true;
    return this;
  }

  reverse(reverse) {
    this._reverse = reverse == null ? !this._reverse : reverse;
    return this;
  }

  schedule(timeline, delay, when) {
    // The user doesn't need to pass a timeline if we already have one
    if (!(timeline instanceof Timeline)) {
      when = delay;
      delay = timeline;
      timeline = this.timeline();
    } // If there is no timeline, yell at the user...


    if (!timeline) {
      throw Error('Runner cannot be scheduled without timeline');
    } // Schedule the runner on the timeline provided


    timeline.schedule(this, delay, when);
    return this;
  }

  step(dt) {
    // If we are inactive, this stepper just gets skipped
    if (!this.enabled) return this; // Update the time and get the new position

    dt = dt == null ? 16 : dt;
    this._time += dt;
    const position = this.position(); // Figure out if we need to run the stepper in this frame

    const running = this._lastPosition !== position && this._time >= 0;
    this._lastPosition = position; // Figure out if we just started

    const duration = this.duration();
    const justStarted = this._lastTime <= 0 && this._time > 0;
    const justFinished = this._lastTime < duration && this._time >= duration;
    this._lastTime = this._time;

    if (justStarted) {
      this.fire('start', this);
    } // Work out if the runner is finished set the done flag here so animations
    // know, that they are running in the last step (this is good for
    // transformations which can be merged)


    const declarative = this._isDeclarative;
    this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

    this._reseted = false;
    let converged = false; // Call initialise and the run function

    if (running || declarative) {
      this._initialise(running); // clear the transforms on this runner so they dont get added again and again


      this.transforms = new Matrix();
      converged = this._run(declarative ? dt : position);
      this.fire('step', this);
    } // correct the done flag here
    // declaritive animations itself know when they converged


    this.done = this.done || converged && declarative;

    if (justFinished) {
      this.fire('finished', this);
    }

    return this;
  }
  /*
  Runner animation methods
  ========================
  Control how the animation plays
  */


  time(time) {
    if (time == null) {
      return this._time;
    }

    const dt = time - this._time;
    this.step(dt);
    return this;
  }

  timeline(timeline) {
    // check explicitly for undefined so we can set the timeline to null
    if (typeof timeline === 'undefined') return this._timeline;
    this._timeline = timeline;
    return this;
  }

  unschedule() {
    const timeline = this.timeline();
    timeline && timeline.unschedule(this);
    return this;
  } // Run each initialise function in the runner if required


  _initialise(running) {
    // If we aren't running, we shouldn't initialise when not declarative
    if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current initialiser
      const current = this._queue[i]; // Determine whether we need to initialise

      const needsIt = this._isDeclarative || !current.initialised && running;
      running = !current.finished; // Call the initialiser if we need to

      if (needsIt && running) {
        current.initialiser.call(this);
        current.initialised = true;
      }
    }
  } // Save a morpher to the morpher list so that we can retarget it later


  _rememberMorpher(method, morpher) {
    this._history[method] = {
      morpher: morpher,
      caller: this._queue[this._queue.length - 1]
    }; // We have to resume the timeline in case a controller
    // is already done without being ever run
    // This can happen when e.g. this is done:
    //    anim = el.animate(new SVG.Spring)
    // and later
    //    anim.move(...)

    if (this._isDeclarative) {
      const timeline = this.timeline();
      timeline && timeline.play();
    }
  } // Try to set the target for a morpher if the morpher exists, otherwise
  // Run each run function for the position or dt given


  _run(positionOrDt) {
    // Run all of the _queue directly
    let allfinished = true;

    for (let i = 0, len = this._queue.length; i < len; ++i) {
      // Get the current function to run
      const current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
      // flag for the sake of declarative _queue

      const converged = current.runner.call(this, positionOrDt);
      current.finished = current.finished || converged === true;
      allfinished = allfinished && current.finished;
    } // We report when all of the constructors are finished


    return allfinished;
  } // do nothing and return false


  _tryRetarget(method, target, extra) {
    if (this._history[method]) {
      // if the last method wasnt even initialised, throw it away
      if (!this._history[method].caller.initialised) {
        const index = this._queue.indexOf(this._history[method].caller);

        this._queue.splice(index, 1);

        return false;
      } // for the case of transformations, we use the special retarget function
      // which has access to the outer scope


      if (this._history[method].caller.retarget) {
        this._history[method].caller.retarget.call(this, target, extra); // for everything else a simple morpher change is sufficient

      } else {
        this._history[method].morpher.to(target);
      }

      this._history[method].caller.finished = false;
      const timeline = this.timeline();
      timeline && timeline.play();
      return true;
    }

    return false;
  }

}
Runner.id = 0;
class FakeRunner {
  constructor(transforms = new Matrix(), id = -1, done = true) {
    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  clearTransformsFromQueue() {}

}
extend([Runner, FakeRunner], {
  mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }

}); // FakeRunner.emptyRunner = new FakeRunner()

const lmultiply = (last, curr) => last.lmultiplyO(curr);

const getRunnerTransform = runner => runner.transforms;

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  const runners = this._transformationRunners.runners;
  const netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

class RunnerArray {
  constructor() {
    this.runners = [];
    this.ids = [];
  }

  add(runner) {
    if (this.runners.includes(runner)) return;
    const id = runner.id + 1;
    this.runners.push(runner);
    this.ids.push(id);
    return this;
  }

  clearBefore(id) {
    const deleteCnt = this.ids.indexOf(id + 1) || 1;
    this.ids.splice(0, deleteCnt, 0);
    this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(r => r.clearTransformsFromQueue());
    return this;
  }

  edit(id, newRunner) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1, id + 1);
    this.runners.splice(index, 1, newRunner);
    return this;
  }

  getByID(id) {
    return this.runners[this.ids.indexOf(id + 1)];
  }

  length() {
    return this.ids.length;
  }

  merge() {
    let lastRunner = null;

    for (let i = 0; i < this.runners.length; ++i) {
      const runner = this.runners[i];
      const condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
      && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

      if (condition) {
        // the +1 happens in the function
        this.remove(runner.id);
        const newRunner = runner.mergeWith(lastRunner);
        this.edit(lastRunner.id, newRunner);
        lastRunner = newRunner;
        --i;
      } else {
        lastRunner = runner;
      }
    }

    return this;
  }

  remove(id) {
    const index = this.ids.indexOf(id + 1);
    this.ids.splice(index, 1);
    this.runners.splice(index, 1);
    return this;
  }

}
registerMethods({
  Element: {
    animate(duration, delay, when) {
      const o = Runner.sanitise(duration, delay, when);
      const timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },

    delay(by, when) {
      return this.animate(0, by, when);
    },

    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },

    _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(runner => runner.id <= current.id).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },

    _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },

    _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }

  }
}); // Will output the elements from array A that are not in the array B

const difference = (a, b) => a.filter(x => !b.includes(x));

extend(Runner, {
  attr(a, v) {
    return this.styleAttr('attr', a, v);
  },

  // Add animatable styles
  css(s, v) {
    return this.styleAttr('css', s, v);
  },

  styleAttr(type, nameOrAttrs, val) {
    if (typeof nameOrAttrs === 'string') {
      return this.styleAttr(type, {
        [nameOrAttrs]: val
      });
    }

    let attrs = nameOrAttrs;
    if (this._tryRetarget(type, attrs)) return this;
    let morpher = new Morphable(this._stepper).to(attrs);
    let keys = Object.keys(attrs);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](keys));
    }, function (pos) {
      this.element()[type](morpher.at(pos).valueOf());
      return morpher.done();
    }, function (newToAttrs) {
      // Check if any new keys were added
      const newKeys = Object.keys(newToAttrs);
      const differences = difference(newKeys, keys); // If their are new keys, initialize them and add them to morpher

      if (differences.length) {
        // Get the values
        const addedFromAttrs = this.element()[type](differences); // Get the already initialized values

        const oldFromAttrs = new ObjectBag(morpher.from()).valueOf(); // Merge old and new

        Object.assign(oldFromAttrs, addedFromAttrs);
        morpher.from(oldFromAttrs);
      } // Get the object from the morpher


      const oldToAttrs = new ObjectBag(morpher.to()).valueOf(); // Merge in new attributes

      Object.assign(oldToAttrs, newToAttrs); // Change morpher target

      morpher.to(oldToAttrs); // Make sure that we save the work we did so we don't need it to do again

      keys = newKeys;
      attrs = newToAttrs;
    });

    this._rememberMorpher(type, morpher);

    return this;
  },

  zoom(level, point) {
    if (this._tryRetarget('zoom', level, point)) return this;
    let morpher = new Morphable(this._stepper).to(new SVGNumber(level));
    this.queue(function () {
      morpher = morpher.from(this.element().zoom());
    }, function (pos) {
      this.element().zoom(morpher.at(pos), point);
      return morpher.done();
    }, function (newLevel, newPoint) {
      point = newPoint;
      morpher.to(newLevel);
    });

    this._rememberMorpher('zoom', morpher);

    return this;
  },

  /**
   ** absolute transformations
   **/
  //
  // M v -----|-----(D M v = F v)------|----->  T v
  //
  // 1. define the final state (T) and decompose it (once)
  //    t = [tx, ty, the, lam, sy, sx]
  // 2. on every frame: pull the current state of all previous transforms
  //    (M - m can change)
  //   and then write this as m = [tx0, ty0, the0, lam0, sy0, sx0]
  // 3. Find the interpolated matrix F(pos) = m + pos * (t - m)
  //   - Note F(0) = M
  //   - Note F(1) = T
  // 4. Now you get the delta matrix as a result: D = F * inv(M)
  transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    const isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    const morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    let origin;
    let element;
    let current;
    let currentAngle;
    let startTransform;

    function setup() {
      // make sure element and origin is defined
      element = element || this.element();
      origin = origin || getOrigin(transforms, element);
      startTransform = new Matrix(relative ? undefined : element); // add the runner to the element so it can merge transformations

      element._addRunner(this); // Deactivate all transforms that have run so far if we are absolute


      if (!relative) {
        element._clearTransformRunnersBefore(this);
      }
    }

    function run(pos) {
      // clear all other transforms before this in case something is saved
      // on this runner. We are absolute. We dont need these!
      if (!relative) this.clearTransform();
      const {
        x,
        y
      } = new Point(origin).transform(element._currentTransform(this));
      let target = new Matrix({ ...transforms,
        origin: [x, y]
      });
      let start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        const rTarget = target.rotate;
        const rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        const possibilities = [rTarget - 360, rTarget, rTarget + 360];
        const distances = possibilities.map(a => Math.abs(a - rCurrent));
        const shortest = Math.min(...distances);
        const index = distances.indexOf(shortest);
        target.rotate = possibilities[index];
      }

      if (relative) {
        // we have to be careful here not to overwrite the rotation
        // with the rotate method of Matrix
        if (!isMatrix) {
          target.rotate = transforms.rotate || 0;
        }

        if (this._isDeclarative && currentAngle) {
          start.rotate = currentAngle;
        }
      }

      morpher.from(start);
      morpher.to(target);
      const affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(newTransforms, element);
      } // overwrite the old transformations with the new ones


      transforms = { ...newTransforms,
        origin
      };
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },

  // Animatable x-axis
  x(x, relative) {
    return this._queueNumber('x', x);
  },

  // Animatable y-axis
  y(y) {
    return this._queueNumber('y', y);
  },

  dx(x = 0) {
    return this._queueNumberDelta('x', x);
  },

  dy(y = 0) {
    return this._queueNumberDelta('y', y);
  },

  dmove(x, y) {
    return this.dx(x).dy(y);
  },

  _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    let from = null;
    this.queue(function () {
      from = this.element()[method]();
      morpher.from(from);
      morpher.to(from + to);
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }, function (newTo) {
      morpher.to(from + new SVGNumber(newTo));
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    const morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },

  _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },

  // Animatable center x-axis
  cx(x) {
    return this._queueNumber('cx', x);
  },

  // Animatable center y-axis
  cy(y) {
    return this._queueNumber('cy', y);
  },

  // Add animatable move
  move(x, y) {
    return this.x(x).y(y);
  },

  // Add animatable center
  center(x, y) {
    return this.cx(x).cy(y);
  },

  // Add animatable size
  size(width, height) {
    // animate bbox based size for all other elements
    let box;

    if (!width || !height) {
      box = this._element.bbox();
    }

    if (!width) {
      width = box.width / box.height * height;
    }

    if (!height) {
      height = box.height / box.width * width;
    }

    return this.width(width).height(height);
  },

  // Add animatable width
  width(width) {
    return this._queueNumber('width', width);
  },

  // Add animatable height
  height(height) {
    return this._queueNumber('height', height);
  },

  // Add animatable plot
  plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    const morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
    this.queue(function () {
      morpher.from(this._element.array());
    }, function (pos) {
      this._element.plot(morpher.at(pos));

      return morpher.done();
    });

    this._rememberMorpher('plot', morpher);

    return this;
  },

  // Add leading method
  leading(value) {
    return this._queueNumber('leading', value);
  },

  // Add animatable viewbox
  viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },

  update(o) {
    if (typeof o !== 'object') {
      return this.update({
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      });
    }

    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', o.offset);
    return this;
  }

});
extend(Runner, {
  rx,
  ry,
  from,
  to
});
register(Runner, 'Runner');

class Svg extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('svg', node), attrs);
    this.namespace();
  } // Creates and returns defs element


  defs() {
    if (!this.isRoot()) return this.root().defs();
    return adopt(this.node.querySelector('defs')) || this.put(new Defs());
  }

  isRoot() {
    return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) && this.node.parentNode.nodeName !== '#document-fragment';
  } // Add namespaces


  namespace() {
    if (!this.isRoot()) return this.root().namespace();
    return this.attr({
      xmlns: svg,
      version: '1.1'
    }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
  }

  removeNamespace() {
    return this.attr({
      xmlns: null,
      version: null
    }).attr('xmlns:xlink', null, xmlns).attr('xmlns:svgjs', null, xmlns);
  } // Check if this is a root svg
  // If not, call root() from this element


  root() {
    if (this.isRoot()) return this;
    return super.root();
  }

}
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

class Symbol extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('symbol', node), attrs);
  }

}
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new Symbol());
    })
  }
});
register(Symbol, 'Symbol');

function plain(text) {
  // clear if build mode is disabled
  if (this._build === false) {
    this.clear();
  } // create text node


  this.node.appendChild(globals.document.createTextNode(text));
  return this;
} // Get length of text element

function length() {
  return this.node.getComputedTextLength();
} // Move over x-axis
// Text is moved by its bounding box
// text-anchor does NOT matter

function x$1(x, box = this.bbox()) {
  if (x == null) {
    return box.x;
  }

  return this.attr('x', this.attr('x') + x - box.x);
} // Move over y-axis

function y$1(y, box = this.bbox()) {
  if (y == null) {
    return box.y;
  }

  return this.attr('y', this.attr('y') + y - box.y);
}
function move$1(x, y, box = this.bbox()) {
  return this.x(x, box).y(y, box);
} // Move center over x-axis

function cx(x, box = this.bbox()) {
  if (x == null) {
    return box.cx;
  }

  return this.attr('x', this.attr('x') + x - box.cx);
} // Move center over y-axis

function cy(y, box = this.bbox()) {
  if (y == null) {
    return box.cy;
  }

  return this.attr('y', this.attr('y') + y - box.cy);
}
function center(x, y, box = this.bbox()) {
  return this.cx(x, box).cy(y, box);
}
function ax(x) {
  return this.attr('x', x);
}
function ay(y) {
  return this.attr('y', y);
}
function amove(x, y) {
  return this.ax(x).ay(y);
} // Enable / disable build mode

function build(build) {
  this._build = !!build;
  return this;
}

var textable = {
  __proto__: null,
  plain: plain,
  length: length,
  x: x$1,
  y: y$1,
  move: move$1,
  cx: cx,
  cy: cy,
  center: center,
  ax: ax,
  ay: ay,
  amove: amove,
  build: build
};

class Text extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('text', node), attrs);
    this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    this._rebuild = true; // enable automatic updating of dy values

    this._build = false; // disable build mode for adding multiple lines
  } // Set / get leading


  leading(value) {
    // act as getter
    if (value == null) {
      return this.dom.leading;
    } // act as setter


    this.dom.leading = new SVGNumber(value);
    return this.rebuild();
  } // Rebuild appearance type


  rebuild(rebuild) {
    // store new rebuild flag if given
    if (typeof rebuild === 'boolean') {
      this._rebuild = rebuild;
    } // define position of all lines


    if (this._rebuild) {
      const self = this;
      let blankLineOffset = 0;
      const leading = this.dom.leading;
      this.each(function (i) {
        const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
        const dy = leading * new SVGNumber(fontSize);

        if (this.dom.newLined) {
          this.attr('x', self.attr('x'));

          if (this.text() === '\n') {
            blankLineOffset += dy;
          } else {
            this.attr('dy', i ? dy + blankLineOffset : 0);
            blankLineOffset = 0;
          }
        }
      });
      this.fire('rebuild');
    }

    return this;
  } // overwrite method from parent to set data properly


  setData(o) {
    this.dom = o;
    this.dom.leading = new SVGNumber(o.leading || 1.3);
    return this;
  } // Set the text content


  text(text) {
    // act as getter
    if (text === undefined) {
      const children = this.node.childNodes;
      let firstLine = 0;
      text = '';

      for (let i = 0, len = children.length; i < len; ++i) {
        // skip textPaths - they are no lines
        if (children[i].nodeName === 'textPath') {
          if (i === 0) firstLine = 1;
          continue;
        } // add newline if its not the first child and newLined is set to true


        if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
          text += '\n';
        } // add content of this node


        text += children[i].textContent;
      }

      return text;
    } // remove existing content


    this.clear().build(true);

    if (typeof text === 'function') {
      // call block
      text.call(this, this);
    } else {
      // store text and make sure text is not blank
      text = (text + '').split('\n'); // build new lines

      for (let j = 0, jl = text.length; j < jl; j++) {
        this.newLine(text[j]);
      }
    } // disable build mode and rebuild lines


    return this.build(false).rebuild();
  }

}
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text = '') {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

class Tspan extends Shape {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('tspan', node), attrs);
    this._build = false; // disable build mode for adding multiple lines
  } // Shortcut dx


  dx(dx) {
    return this.attr('dx', dx);
  } // Shortcut dy


  dy(dy) {
    return this.attr('dy', dy);
  } // Create new line


  newLine() {
    // mark new line
    this.dom.newLined = true; // fetch parent

    const text = this.parent(); // early return in case we are not in a text element

    if (!(text instanceof Text)) {
      return this;
    }

    const i = text.index(this);
    const fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
    const dy = text.dom.leading * new SVGNumber(fontSize); // apply new position

    return this.dy(i ? dy : 0).attr('x', text.x());
  } // Set text content


  text(text) {
    if (text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');

    if (typeof text === 'function') {
      this.clear().build(true);
      text.call(this, this);
      this.build(false);
    } else {
      this.plain(text);
    }

    return this;
  }

}
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text = '') {
      const tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      return this.put(tspan).text(text);
    })
  },
  Text: {
    newLine: function (text = '') {
      return this.tspan(text).newLine();
    }
  }
});
register(Tspan, 'Tspan');

class Circle extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('circle', node), attrs);
  }

  radius(r) {
    return this.attr('r', r);
  } // Radius x value


  rx(rx) {
    return this.attr('r', rx);
  } // Alias radius x value


  ry(ry) {
    return this.rx(ry);
  }

  size(size) {
    return this.radius(new SVGNumber(size).divide(2));
  }

}
extend(Circle, {
  x: x$3,
  y: y$3,
  cx: cx$1,
  cy: cy$1,
  width: width$2,
  height: height$2
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size = 0) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

class ClipPath extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('clipPath', node), attrs);
  } // Unclip all clipped elements and remove itself


  remove() {
    // unclip all targets
    this.targets().forEach(function (el) {
      el.unclip();
    }); // remove clipPath from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [clip-path*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipper() {
      return this.reference('clip-path');
    },

    clipWith(element) {
      // use given clip or create a new one
      const clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },

    // Unclip element
    unclip() {
      return this.attr('clip-path', null);
    }

  }
});
register(ClipPath, 'ClipPath');

class ForeignObject extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('foreignObject', node), attrs);
  }

}
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

function dmove(dx, dy) {
  this.children().forEach((child, i) => {
    let bbox; // We have to wrap this for elements that dont have a bbox
    // e.g. title and other descriptive elements

    try {
      // Get the childs bbox
      bbox = child.bbox();
    } catch (e) {
      return;
    } // Get childs matrix


    const m = new Matrix(child); // Translate childs matrix by amount and
    // transform it back into parents space

    const matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

    const p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

    child.move(p.x, p.y);
  });
  return this;
}
function dx(dx) {
  return this.dmove(dx, 0);
}
function dy(dy) {
  return this.dmove(0, dy);
}
function height(height, box = this.bbox()) {
  if (height == null) return box.height;
  return this.size(box.width, height, box);
}
function move(x = 0, y = 0, box = this.bbox()) {
  const dx = x - box.x;
  const dy = y - box.y;
  return this.dmove(dx, dy);
}
function size(width, height, box = this.bbox()) {
  const p = proportionalSize(this, width, height, box);
  const scaleX = p.width / box.width;
  const scaleY = p.height / box.height;
  this.children().forEach((child, i) => {
    const o = new Point(box).transform(new Matrix(child).inverse());
    child.scale(scaleX, scaleY, o.x, o.y);
  });
  return this;
}
function width(width, box = this.bbox()) {
  if (width == null) return box.width;
  return this.size(width, box.height, box);
}
function x(x, box = this.bbox()) {
  if (x == null) return box.x;
  return this.move(x, box.y, box);
}
function y(y, box = this.bbox()) {
  if (y == null) return box.y;
  return this.move(box.x, y, box);
}

var containerGeometry = {
  __proto__: null,
  dmove: dmove,
  dx: dx,
  dy: dy,
  height: height,
  move: move,
  size: size,
  width: width,
  x: x,
  y: y
};

class G extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('g', node), attrs);
  }

}
extend(G, containerGeometry);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

class A extends Container {
  constructor(node, attrs = node) {
    super(nodeOrNew('a', node), attrs);
  } // Link target attribute


  target(target) {
    return this.attr('target', target);
  } // Link url


  to(url) {
    return this.attr('href', url, xlink);
  }

}
extend(A, containerGeometry);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    unlink() {
      const link = this.linker();
      if (!link) return this;
      const parent = link.parent();

      if (!parent) {
        return this.remove();
      }

      const index = parent.index(link);
      parent.add(this, index);
      link.remove();
      return this;
    },

    linkTo(url) {
      // reuse old link if possible
      let link = this.linker();

      if (!link) {
        link = new A();
        this.wrap(link);
      }

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this;
    },

    linker() {
      const link = this.parent();

      if (link && link.node.nodeName.toLowerCase() === 'a') {
        return link;
      }

      return null;
    }

  }
});
register(A, 'A');

class Mask extends Container {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('mask', node), attrs);
  } // Unmask all masked elements and remove itself


  remove() {
    // unmask all targets
    this.targets().forEach(function (el) {
      el.unmask();
    }); // remove mask from parent

    return super.remove();
  }

  targets() {
    return baseFind('svg [mask*="' + this.id() + '"]');
  }

}
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    masker() {
      return this.reference('mask');
    },

    maskWith(element) {
      // use given mask or create a new one
      const masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },

    // Unmask element
    unmask() {
      return this.attr('mask', null);
    }

  }
});
register(Mask, 'Mask');

class Stop extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('stop', node), attrs);
  } // add color stops


  update(o) {
    if (typeof o === 'number' || o instanceof SVGNumber) {
      o = {
        offset: arguments[0],
        color: arguments[1],
        opacity: arguments[2]
      };
    } // set attributes


    if (o.opacity != null) this.attr('stop-opacity', o.opacity);
    if (o.color != null) this.attr('stop-color', o.color);
    if (o.offset != null) this.attr('offset', new SVGNumber(o.offset));
    return this;
  }

}
registerMethods({
  Gradient: {
    // Add a color stop
    stop: function (offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    }
  }
});
register(Stop, 'Stop');

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  let ret = selector + '{';

  for (const i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

class Style extends Element {
  constructor(node, attrs = node) {
    super(nodeOrNew('style', node), attrs);
  }

  addText(w = '') {
    this.node.textContent += w;
    return this;
  }

  font(name, src, params = {}) {
    return this.rule('@font-face', {
      fontFamily: name,
      src: src,
      ...params
    });
  }

  rule(selector, obj) {
    return this.addText(cssRule(selector, obj));
  }

}
registerMethods('Dom', {
  style(selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  },

  fontface(name, src, params) {
    return this.put(new Style()).font(name, src, params);
  }

});
register(Style, 'Style');

class TextPath extends Text {
  // Initialize node
  constructor(node, attrs = node) {
    super(nodeOrNew('textPath', node), attrs);
  } // return the array of the path track element


  array() {
    const track = this.track();
    return track ? track.array() : null;
  } // Plot path if any


  plot(d) {
    const track = this.track();
    let pathArray = null;

    if (track) {
      pathArray = track.plot(d);
    }

    return d == null ? pathArray : this;
  } // Get the path element


  track() {
    return this.reference('href');
  }

}
registerMethods({
  Container: {
    textPath: wrapWithAttrCheck(function (text, path) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = this.text(text);
      }

      return text.path(path);
    })
  },
  Text: {
    // Create path for text to run on
    path: wrapWithAttrCheck(function (track, importNodes = true) {
      const textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      let node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),

    // Get the textPath children
    textPath() {
      return this.findOne('textPath');
    }

  },
  Path: {
    // creates a textPath from this path
    text: wrapWithAttrCheck(function (text) {
      // Convert text to instance if needed
      if (!(text instanceof Text)) {
        text = new Text().addTo(this.parent()).text(text);
      } // Create textPath from text and path and return


      return text.path(this);
    }),

    targets() {
      return baseFind('svg textPath').filter(node => {
        return (node.attr('href') || '').includes(this.id());
      }); // Does not work in IE11. Use when IE support is dropped
      // return baseFind('svg textPath[*|href*="' + this.id() + '"]')
    }

  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

class Use extends Shape {
  constructor(node, attrs = node) {
    super(nodeOrNew('use', node), attrs);
  } // Use element as a reference


  use(element, file) {
    // Set lined element
    return this.attr('href', (file || '') + '#' + element, xlink);
  }

}
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).use(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
const SVG = makeInstance;
extend([Svg, Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Gradient, Runner], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape'));
extend([Container, Fragment], getMethodsFor('Container'));
extend(Gradient, getMethodsFor('Gradient'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map


/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/state-local/lib/es/state-local.js":
/*!*********************************************************!*\
  !*** ../node_modules/state-local/lib/es/state-local.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (y, f) {
      return f(y);
    }, x);
  };
}

function curry(fn) {
  return function curried() {
    var _this = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    return args.length >= fn.length ? fn.apply(this, args) : function () {
      for (var _len3 = arguments.length, nextArgs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        nextArgs[_key3] = arguments[_key3];
      }

      return curried.apply(_this, [].concat(args, nextArgs));
    };
  };
}

function isObject(value) {
  return {}.toString.call(value).includes('Object');
}

function isEmpty(obj) {
  return !Object.keys(obj).length;
}

function isFunction(value) {
  return typeof value === 'function';
}

function hasOwnProperty(object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
}

function validateChanges(initial, changes) {
  if (!isObject(changes)) errorHandler('changeType');
  if (Object.keys(changes).some(function (field) {
    return !hasOwnProperty(initial, field);
  })) errorHandler('changeField');
  return changes;
}

function validateSelector(selector) {
  if (!isFunction(selector)) errorHandler('selectorType');
}

function validateHandler(handler) {
  if (!(isFunction(handler) || isObject(handler))) errorHandler('handlerType');
  if (isObject(handler) && Object.values(handler).some(function (_handler) {
    return !isFunction(_handler);
  })) errorHandler('handlersType');
}

function validateInitial(initial) {
  if (!initial) errorHandler('initialIsRequired');
  if (!isObject(initial)) errorHandler('initialType');
  if (isEmpty(initial)) errorHandler('initialContent');
}

function throwError(errorMessages, type) {
  throw new Error(errorMessages[type] || errorMessages["default"]);
}

var errorMessages = {
  initialIsRequired: 'initial state is required',
  initialType: 'initial state should be an object',
  initialContent: 'initial state shouldn\'t be an empty object',
  handlerType: 'handler should be an object or a function',
  handlersType: 'all handlers should be a functions',
  selectorType: 'selector should be a function',
  changeType: 'provided value of changes should be an object',
  changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
  "default": 'an unknown error accured in `state-local` package'
};
var errorHandler = curry(throwError)(errorMessages);
var validators = {
  changes: validateChanges,
  selector: validateSelector,
  handler: validateHandler,
  initial: validateInitial
};

function create(initial) {
  var handler = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  validators.initial(initial);
  validators.handler(handler);
  var state = {
    current: initial
  };
  var didUpdate = curry(didStateUpdate)(state, handler);
  var update = curry(updateState)(state);
  var validate = curry(validators.changes)(initial);
  var getChanges = curry(extractChanges)(state);

  function getState() {
    var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (state) {
      return state;
    };
    validators.selector(selector);
    return selector(state.current);
  }

  function setState(causedChanges) {
    compose(didUpdate, update, validate, getChanges)(causedChanges);
  }

  return [getState, setState];
}

function extractChanges(state, causedChanges) {
  return isFunction(causedChanges) ? causedChanges(state.current) : causedChanges;
}

function updateState(state, changes) {
  state.current = _objectSpread2(_objectSpread2({}, state.current), changes);
  return changes;
}

function didStateUpdate(state, handler, changes) {
  isFunction(handler) ? handler(state.current) : Object.keys(changes).forEach(function (field) {
    var _handler$field;

    return (_handler$field = handler[field]) === null || _handler$field === void 0 ? void 0 : _handler$field.call(handler, state.current[field]);
  });
  return changes;
}

var index = {
  create: create
};

/* harmony default export */ __webpack_exports__["default"] = (index);


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __spreadArray, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),

/***/ "./ACESVGElement.tsx":
/*!***************************!*\
  !*** ./ACESVGElement.tsx ***!
  \***************************/
/*! exports provided: ACESVGElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACESVGElement", function() { return ACESVGElement; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @svgdotjs/svg.js */ "../node_modules/@svgdotjs/svg.js/dist/svg.esm.js");



Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["Element"], {
  openOnClick: function openOnClick(url) {
    return window.open(url);
  },
  animateContRotate: function animateContRotate(speed) {
    return this.animate(speed) //@ts-ignore
    .ease('-') //@ts-ignore
    .rotate(360).loop();
  },
  showOn: function showOn(on) {
    if (on) {
      this.show();
    } else {
      this.hide();
    }
  },
  animateOn: function animateOn(speed, on, animation) {
    if (on) {
      //@ts-ignore
      if (this.timeline()._runners.length === 0) {
        animation(this.animate(speed));
      } else {
        this.timeline().play();
      }
    } else {
      this.timeline().stop();
    }
  },
  stopAnimation: function stopAnimation() {
    this.timeline().stop();
  },
  getParentNode: function getParentNode() {
    return this.node.parentNode;
  },
  getTopNode: function getTopNode() {
    var currentNode = this.node;

    while (true) {
      if (currentNode.parentNode && !currentNode.className.includes('svg-object')) {
        currentNode = currentNode.parentNode;
      } else {
        return currentNode;
      }
    }
  }
});
Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["Dom"], {
  updateXHTMLFontText: function updateXHTMLFontText(newText) {
    var currentElement = this.node;
    var i = 0;

    while (currentElement.localName !== 'xhtml:font') {
      if (currentElement.firstElementChild && i < 10) {
        currentElement = currentElement.firstElementChild;
        i++;
      } else {
        return;
      }
    }

    currentElement.innerHTML = newText;
  }
});

var ACESVGElement = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ACESVGElement, _super);

  function ACESVGElement(props) {
    var _this = _super.call(this, props) || this;

    _this.state = {
      svgNode: null,
      svgMappings: [],
      mappedElements: {},
      initialized: false,
      initFunction: null,
      eventFunction: null,
      svgRef: null
    };
    return _this;
  }

  ACESVGElement.prototype.initializeMappings = function (svgNode) {
    var svgMappings = this.props.svgMappings;

    var currentElements = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.mappedElements);

    currentElements = {};

    for (var i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.svgMappings[i].mappedName] = svgNode.findOne("#" + this.props.svgMappings[i].svgId);
      }
    }

    this.setState({
      mappedElements: currentElements
    });
    return currentElements;
  };

  ACESVGElement.prototype.mapAllIDs = function (svgNode) {
    var svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.props.svgMappings));

    var nodeFilterID = {
      acceptNode: function acceptNode(node) {
        if (node.id) {
          if (node.id !== '') {
            return NodeFilter.FILTER_ACCEPT;
          }
        }

        return NodeFilter.FILTER_REJECT;
      }
    };
    var svgWalker = document.createTreeWalker(svgNode.node, NodeFilter.SHOW_ALL, nodeFilterID);
    var currentNode = svgWalker.currentNode;

    while (currentNode) {
      if (currentNode && currentNode.id) {
        if (svgMappings.filter(function (mapping) {
          return currentNode ? mapping.svgId === currentNode.id : false;
        }).length === 0) {
          svgMappings.push({
            svgId: currentNode.id,
            mappedName: ''
          });
        }
      }

      currentNode = svgWalker.nextNode();
    }

    this.setState({
      svgMappings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings)),
      initialized: false
    });
    this.props.options.svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings)); // this.props.onOptionsChange(this.props.options)

    this.forceUpdate();
  };

  ACESVGElement.prototype.renderSVG = function (element) {
    console.log(element);
    this.initializeInitFunction();

    if (element) {
      return this.state.svgNode ? this.state.svgNode.svg() : null;
    }

    return null;
  };

  ACESVGElement.prototype.initializeInitFunction = function () {
    if (this.state.svgRef && !this.state.initialized) {
      console.log('initializing svgNode');
      var svgNode = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["SVG"])(this.state.svgRef);
      svgNode.clear();
      svgNode.svg(this.props.options.svgSource);
      svgNode.size(this.props.width, this.props.height);

      if (this.props.options.addAllIDs) {
        this.mapAllIDs(svgNode);
      }

      this.setState({
        svgNode: svgNode
      });
      var currentElements = this.initializeMappings(svgNode);
      console.log('initializing initFunction');

      try {
        var initFunction = Function('data', 'options', 'svgnode', 'svgmap', 'context', this.props.replaceVariables(this.props.options.initSource));
        this.setState({
          initFunction: initFunction
        });

        if (currentElements && initFunction) {
          initFunction(this.props.data, this.props.options, this.state.svgNode, currentElements);
          this.setState({
            initialized: true,
            mappedElements: currentElements
          });
        }
      } catch (e) {
        this.setState({
          initialized: true
        });
        console.log("User init code failed: " + e);
      }
    }
  };

  ACESVGElement.prototype.initializeEventFunction = function () {
    try {
      var eventFunction = this.state.eventFunction;

      if (!eventFunction) {
        var eventFunctionSource = this.props.options.eventSource;
        eventFunction = Function('data', 'options', 'svgnode', 'svgmap', 'context', this.props.replaceVariables(eventFunctionSource));
        this.setState({
          eventFunction: eventFunction,
          initialized: false
        });
      }

      if (this.state.mappedElements && eventFunction) {
        eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements, this.context);
      }
    } catch (e) {
      console.log("User event code failed: " + e);
    }
  };

  ACESVGElement.prototype.componentDidMount = function () {
    console.log('componentDidMount');
    console.log(this.state.svgRef);
    this.initializeInitFunction();
    this.initializeEventFunction();
  };

  ACESVGElement.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
    console.log('componentDidUpdate');

    if (prevProps.options.addAllIDs !== this.props.options.addAllIDs) {
      prevProps.options.addAllIDs = this.props.options.addAllIDs; // console.log('element update', this.props.options.addAllIDs);
    }

    if (prevProps.options.initSource !== this.props.options.initSource) {
      this.initializeInitFunction();
    }

    if (prevProps.options.eventSource !== this.props.options.eventSource) {
      this.initializeEventFunction();
    }
  };

  ACESVGElement.prototype.render = function () {
    var _this = this;

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      style: {
        width: this.props.width + "px",
        height: this.props.height + "px"
      },
      className: 'svg-object',
      ref: function ref(_ref) {
        if (!_this.state.svgRef) {
          console.log('initialize svgRef');

          _this.setState({
            svgRef: _ref
          });
        }
      }
    }, this.renderSVG(this.state.svgRef));
  };

  return ACESVGElement;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./ACESVGjsPanel.tsx":
/*!***************************!*\
  !*** ./ACESVGjsPanel.tsx ***!
  \***************************/
/*! exports provided: ACESVGPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACESVGPanel", function() { return ACESVGPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @svgdotjs/svg.js */ "../node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ACESVGElement__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ACESVGElement */ "./ACESVGElement.tsx");





Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["Element"], {
  openOnClick: function openOnClick(url) {
    return window.open(url);
  },
  animateContRotate: function animateContRotate(speed) {
    return this.animate(speed) //@ts-ignore
    .ease('-') //@ts-ignore
    .rotate(360).loop();
  },
  showOn: function showOn(on) {
    if (on) {
      this.show();
    } else {
      this.hide();
    }
  },
  animateOn: function animateOn(speed, on, animation) {
    if (on) {
      //@ts-ignore
      if (this.timeline()._runners.length === 0) {
        animation(this.animate(speed));
      } else {
        this.timeline().play();
      }
    } else {
      this.timeline().stop();
    }
  },
  stopAnimation: function stopAnimation() {
    this.timeline().stop();
  },
  getParentNode: function getParentNode() {
    return this.node.parentNode;
  },
  getTopNode: function getTopNode() {
    var currentNode = this.node;

    while (true) {
      if (currentNode.parentNode && !currentNode.className.includes('svg-object')) {
        currentNode = currentNode.parentNode;
      } else {
        return currentNode;
      }
    }
  }
});
Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["Dom"], {
  updateXHTMLFontText: function updateXHTMLFontText(newText) {
    var currentElement = this.node;
    var i = 0;

    while (currentElement.localName !== 'xhtml:font') {
      if (currentElement.firstElementChild && i < 10) {
        currentElement = currentElement.firstElementChild;
        i++;
      } else {
        return;
      }
    }

    currentElement.innerHTML = newText;
  }
}); // export class SimplePanel extends PureComponent<Props, State> = ({ options, data, width, height }) => {

var ACESVGPanel = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ACESVGPanel, _super);

  function ACESVGPanel(props) {
    var _this = _super.call(this, props) || this;

    _this.generateComponentStyles = function () {
      return {
        wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: relative;\n      "], ["\n        position: relative;\n      "]))),
        svg: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: absolute;\n        top: 0;\n        left: 0;\n      "], ["\n        position: absolute;\n        top: 0;\n        left: 0;\n      "]))),
        textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 10px;\n      "], ["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 10px;\n      "])))
      };
    };

    _this.state = {
      addAllIDs: false,
      svgNode: null,
      svgSource: null,
      svgMappings: [],
      mappedElements: null,
      initFunctionSource: '',
      initFunction: null,
      eventFunctionSource: '',
      eventFunction: null,
      initialized: false,
      context: {}
    };
    return _this;
  }

  ACESVGPanel.prototype.initializeMappings = function (svgNode) {
    var svgMappings = this.props.options.svgMappings;

    var currentElements = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, this.state.mappedElements);

    currentElements = {};

    for (var i = 0; i < svgMappings.length; i++) {
      if (svgMappings[i].mappedName !== '') {
        currentElements[this.props.options.svgMappings[i].mappedName] = svgNode.findOne("#" + this.props.options.svgMappings[i].svgId);
      }
    }

    this.setState({
      mappedElements: currentElements
    });
  };

  ACESVGPanel.prototype.mapAllIDs = function (svgNode) {
    var svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.props.options.svgMappings));

    var nodeFilterID = {
      acceptNode: function acceptNode(node) {
        if (node.id) {
          if (node.id !== '') {
            return NodeFilter.FILTER_ACCEPT;
          }
        }

        return NodeFilter.FILTER_REJECT;
      }
    };
    var svgWalker = document.createTreeWalker(svgNode.node, NodeFilter.SHOW_ALL, nodeFilterID);
    var currentNode = svgWalker.currentNode;

    while (currentNode) {
      if (currentNode && currentNode.id) {
        if (svgMappings.filter(function (mapping) {
          return currentNode ? mapping.svgId === currentNode.id : false;
        }).length === 0) {
          svgMappings.push({
            svgId: currentNode.id,
            mappedName: ''
          });
        }
      }

      currentNode = svgWalker.nextNode();
    }

    this.setState({
      svgMappings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings)),
      initialized: false
    });
    this.props.options.svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings));
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  };

  ACESVGPanel.prototype.mappingClickHandler = function (event) {
    if (event.target) {
      var clicked = event.target;
      var loopCount = 0;

      var svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(this.props.options.svgMappings));

      if (clicked.id) {
        while (clicked.id === '') {
          loopCount++;

          if (loopCount > 20) {
            return;
          }

          clicked = clicked.parentNode;
        }

        for (var i = 0; i < svgMappings.length; i++) {
          if (svgMappings[i].svgId === clicked.id) {
            return;
          }
        }

        svgMappings.push({
          svgId: clicked.id,
          mappedName: ''
        });
        this.setState({
          svgMappings: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings)),
          initialized: false
        });
        this.props.options.svgMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(svgMappings));
        this.props.onOptionsChange(this.props.options);
        this.forceUpdate();
      }
    }
  };

  ACESVGPanel.prototype.renderSVG = function (element) {
    if (element) {
      if (this.props.options.initSource !== this.state.initFunctionSource || this.state.addAllIDs !== this.props.options.addAllIDs) {
        this.setState({
          initFunctionSource: this.props.options.initSource,
          addAllIDs: this.props.options.addAllIDs,
          initialized: false
        });
      }

      if (!this.state.initialized) {
        console.log('initializing');
        var svgNode = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_2__["SVG"])(element);
        svgNode.clear();
        svgNode.svg(this.props.options.svgSource);
        svgNode.size(this.props.width, this.props.height);

        if (this.props.options.addAllIDs) {
          this.mapAllIDs(svgNode);
        }

        this.initializeMappings(svgNode);
        this.setState({
          svgNode: svgNode
        });

        try {
          var initFunction = Function('data', 'options', 'svgnode', 'svgmap', 'context', this.props.replaceVariables(this.props.options.initSource));
          this.setState({
            initFunction: initFunction
          });

          if (this.state.mappedElements && initFunction) {
            initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
            this.setState({
              initialized: true
            });
          }
        } catch (e) {
          this.setState({
            initialized: true
          });
          console.log("User init code failed: " + e);
        }
      }

      try {
        var eventFunction = this.state.eventFunction;

        if (this.props.options.eventSource !== this.state.eventFunctionSource) {
          var eventFunctionSource = this.props.options.eventSource;
          eventFunction = Function('data', 'options', 'svgnode', 'svgmap', 'context', this.props.replaceVariables(eventFunctionSource));
          this.setState({
            eventFunctionSource: eventFunctionSource,
            eventFunction: eventFunction,
            initialized: false
          });
        }

        if (this.state.mappedElements && eventFunction) {
          eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements, this.context);
        }
      } catch (e) {
        console.log("User event code failed: " + e);
      }

      return this.state.svgNode ? this.state.svgNode.svg() : null;
    } else {
      return null;
    }
  }; // shouldComponentUpdate(nextProps: Props, nextState: ACESVGElementState) {
  //   let eventFunction = this.state.eventFunction;
  //   if (nextState.eventFunction !== this.state.eventFunction) {
  //     let eventFunctionSource = this.props.options.eventSource;
  //     eventFunction = Function(
  //       'data',
  //       'options',
  //       'svgnode',
  //       'svgmap',
  //       'context',
  //       nextProps.replaceVariables(eventFunctionSource)
  //     );
  //     this.setState({ eventFunction: eventFunction, initialized: false });
  //   }
  //   return true;
  // }


  ACESVGPanel.prototype.render = function () {
    var styles = this.generateComponentStyles();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.wrapper,
      onClick: this.props.options.captureMappings ? this.mappingClickHandler.bind(this) : undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ACESVGElement__WEBPACK_IMPORTED_MODULE_4__["ACESVGElement"], {
      data: this.props.data,
      options: this.props.options,
      replaceVariables: this.props.replaceVariables,
      width: this.props.width,
      height: this.props.height,
      svgSource: this.props.options.svgSource,
      initSource: this.props.options.initSource,
      eventSource: this.props.options.eventSource,
      svgMappings: this.props.options.svgMappings
    }));
  };

  return ACESVGPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);


var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "./examples.ts":
/*!*********************!*\
  !*** ./examples.ts ***!
  \*********************/
/*! exports provided: props_defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "props_defaults", function() { return props_defaults; });
var props_defaults = {
  svgNode: "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   viewBox=\"0 0 1259.5 440.78126\"\n   version=\"1.1\"\n   id=\"svg4564\"\n   sodipodi:docname=\"ace.svg.demo.svg\"\n   inkscape:version=\"0.92.4 (5da689c313, 2019-01-14)\"\n   >\n  <metadata\n     id=\"metadata4568\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"3840\"\n     inkscape:window-height=\"2066\"\n     id=\"namedview4566\"\n     showgrid=\"false\"\n     inkscape:zoom=\"0.90509668\"\n     inkscape:cx=\"556.45417\"\n     inkscape:cy=\"334.24713\"\n     inkscape:window-x=\"-11\"\n     inkscape:window-y=\"-11\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"svg4564\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\" />\n  <defs\n     id=\"defs4520\">\n    <style\n       id=\"style4518\">.cls-1{fill:#2a2e3c;}.cls-2{fill:#c1d301;}.cls-3{fill:#f6511d;}.cls-4{fill:#fff;}.cls-5{fill:#595e71;}</style>\n    <clipPath\n       id=\"clipPath1136\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M61.0 158.0C61.0 158.0 209.0 158.0 209.0 158.0C209.0 158.0 209.0 219.0 209.0 219.0C209.0 219.0 61.0 219.0 61.0 219.0C61.0 219.0 61.0 158.0 61.0 158.0\"\n         id=\"path1134\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1202\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1200\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1214\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1212\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1226\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1224\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1238\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1236\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1250\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1248\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1262\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1260\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1268\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 0.0 1366.0 0.0M640.0 254.0C640.0 254.0 398.0 254.0 398.0 254.0C398.0 254.0 398.0 511.0 398.0 511.0C398.0 511.0 640.0 511.0 640.0 511.0C640.0 511.0 640.0 254.0 640.0 254.0\"\n         id=\"path1266\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1272\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1274\"\n         xlink:href=\"data:image/png;base64,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\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1284\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1282\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1296\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1294\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1308\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1306\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1314\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 882.0 768.0 882.0 768.0C882.0 768.0 882.0 511.0 882.0 511.0C882.0 511.0 1124.0 511.0 1124.0 511.0C1124.0 511.0 1124.0 768.0 1124.0 768.0C1124.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 0.0 1366.0 0.0\"\n         id=\"path1312\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1318\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1320\"\n         xlink:href=\"data:image/png;base64,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\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1330\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1328\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1342\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1340\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1348\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 511.0 1366.0 511.0C1366.0 511.0 1124.0 511.0 1124.0 511.0C1124.0 511.0 1124.0 254.0 1124.0 254.0C1124.0 254.0 1366.0 254.0 1366.0 254.0C1366.0 254.0 1366.0 0.0 1366.0 0.0\"\n         id=\"path1346\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1352\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1354\"\n         xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAJeCAAAAAAPIijiAAAAAXNCSVQI5gpbmQAAFFRJREFUeJzt3e16ozgSBlCJ3vu/41HtDyEhsJO1nfQOoHO6OyEfngl+XC+FJEhKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd5H/7R8A/iXnf+3H3/9fnP9JgL/iCi/9v58Ay1//PwCndYUYhN93jVf+X28BrvE0wPvmeG3/MCLmeJKY0Cwv7Z8lgDEAmNgsMclsnr2yr/9qf3a4/1ELcP2nBPbyF9v3E19sv+HeTxAT+rb+r/16fyjynyfAfz79WeByrl3+KeXfnxa8+lMCe8cGIH/1xSuK4wc/bgGu/ozAKB/eDy/wKw8NPK/zOG58EAFXeybgG0/r/+GT6Wqv+2f1vzv+f54A13oi4FuHWs9PN58+4oy+mvOLp5tfPeJ7Z95/eM9Y/3m3ccMA6FtjL/B2Apx5/+FVD+193mr+EAVfP/Bsvg2AutE3P42AM+8/vOhJ/R8S4G4B0Ot/lwhfPepr1gFwL2ul55oB24dfZsBZIyAef7JIKR/qO3KKuj7g+JXXnHXv4Q15fJfHBBj/DsMBTx58Msdy7if+sR3+Y/fxcUTwJefceXhLP81vhd7Lv787dgDXeOXHw0db0W9/xmB4fNS3rvE0wLeOY3354c9jBFzhpf9s5V/08h+bgG3j4XHfMgbAjeTn5f8sAa5Q/7tKjlzP+PP6JsavrB+8Pw5wjacBvjNM/G31f3jzrAs4+6t/v+p3PPOvx//6vp8PfDIOcPanAP6X7ZC+q/7hfQ+By/UAu8W+45l/rfz27jEBXo2AKzwJ8I3hcJ739f/w7mo9wHHd/0P5R4qIcSzg7QQwBsCt9PrPKbc3WwhcKwG+rv+IHBEpxzgQ8NE6AAHAPbTZvlb/7e22OS4OusRcwJMAaPXf3q7fkCPlqH/eHAgUANxBWwOQt/o/SHkYB7jGcoDnAbDWflNSarMD67e/dd8gAcANjNMAu/pf9hGQ8qUD4Fj+JaW01ARIvQlIb80GCgDuoZd/2lX/0kOgDQRsSwO3R57Q4+F/G/sra/kvUVoCpNb7vzkUIAC4vl7VQ/n36l/Wj7ZxgKH+z1n8zTap3xf/RaQoOcqaBEuUlgCptgDGAJhTLe024rf08l8jIC/DMMDQAZw3AoYeYKv/FCVyjYAUZSlpKSmnuk7wk5kAAcAd9Pn/ul2rfslLXpZDEzDW/3mLv2nXANYEiEgROaLkEilSWcoSZSlLSf3c/90IEADcxnj+n/Na+z0Blj4QuDUAZ0+Afg6wLf+JHJEjl1xSihRl3J/3618AcHGPk/prw7/UCGgJ0OYD0oUSYF//6/j/UiKXnEtKKVLJyxoBbQSwjwO8lgUCgKvKjx8OC4Bq7Y8RkJe0NQEXGAbcjQGsh/9UInLU8q9vS851/m98SE2AV9YDCAAuajzujzcE2U0D9BDoPUDaBgIP/52T2dd/S4ClRI66gyWlaLsUObUeoK4FeHU9gADg4oZFPa3A1x5gUCNgdxJw8gQ41n9bAJQjl8M3lZzrnQFTT4GX1wMIAK5vPw4wVH9elmX5s4xjgfthwKF1OJfhRr/bEGCpAVBjLKUUS7R+p98UxEIgplRLeaeGwJ+hCXjSAZyx+qvhNqBrB7CUiFzW6k9tenDdq8jDo14mALiD8XZAwyzgsix/WgLkZVlXA42XBZ43AXoPMHQAS4mcy7rkOaWIJfLaBbgcmMnl7WLgZRknAraRgHU10FD/470BziR2/9YxwFyP/+vlPxHLmADbbryTBAKAW9hdD9wWAiw9Av6sAVCnAttFgeet/0MC1FWAJZfczwAiloi8rMMAdfi/P/j1bkAAcAP9Vj+7xYDLcB6wLH/GeYAn9wY6m4fLAOsdP9YVgCki8hLRdyi2ccB3CADuYLgd6NYA5GU3DvAn72cCz13/xzOAiIiSyzoBsH4m15OAPgjw/hXBAoC72GYC9zMB22xA3i0GulAA1Hov9QqAlFLUQ3/vAGoPkN6eBBQAXN1hDUC/5LePAQ6zgdsNgtLpzwHGM4C1ARjrf/3MtrDh9bU/OwKA6zvc3mcbB9z3AMty+Q5gXe5XPxpGNHI6DAO+SgBwdbsGIO2mAg49wOU7gLROAUZEWXoGrPtrHQDzym19XB6nAoYeYHdN8LVmAfp1AClFiqWu/VtK/bftTEqpblgHwJzythgopf7LQdqkwC4BLhMAketdgGoAlNyX/y9luP9x3dl2DvDGvQEFADezvzdgXpcFLm1l0OUCoI75164/pRRLLMMIQEoptV979sk5gADgNvr9/tYrgtudQbZzgGEt0HUCIHL7VWAl57b2b+3+U0uB2vO0WwO+Ph4oALid9WKZPNruDLodOs8cAZHqJf7t131FSmlJ/dq/B5/uhADgTobx/X6j4J4By65iTl3/fV5/dzqfcx8CaAsfh0dYB8CsjjW8FnjedwH9FwScv/53d/XJkdJ6F8Bx0C9vd0Lv3/Y2AcAdbDf36Pf6OR7/9xtnr/+eAO0Wf0tZA2CJvvrv4b4mfjEIk1pP6/t2vzdA6kfL48Hz5AFwEHm7Beh4fpOG/UnWATC18aR4mxNI+zBIlzgFSJHbr/3OdUww5ej3PG07Nuxw/ugkQABwJ/v67yuDhxuB5fb7w06eAGv9t82UUuQcaz8z7NuQAAYBmdrubDiNR8l8OP5fYBowt3+R22/+bFc6Dkf/w0yAy4GZ2bNKbsNkfUzwGmMAQ/3XBFjv97M1/k931iAgkxvbgKH8h25g/MJ5I2BdCdQSIK1jgOPg/7CTH1t+42eFc9kdIFu1HEbN+3rBf/Hn/MZhsG9sZOr7/o2H3X2PDoC72Rrk4f3WPF++A2gpsN/LD/dCB8Dt5MMHfYr82BicuP63Et9N8R9+/ucfvEMAcFfDQf60jf4ndvcz+ul+CQBuqh8wf3aSfDrbGMChJfiIAOC2fqtITucXJzEFAPf1RZs8XjdwXb8zfiEAmMjQD5x8DHA3CvgXxzBMAzKJ3cTgWP/njIA43BEgRxqv+vstOgBmkQ/jAaeu/22gPz80Lr9JADCPp+sATiw/e/e7BABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTABwb5FStK1tu35h+OiU4vFdHL/4QwKA+4qxauJZBcVpQyDaDxj70u+f/J2f/T8//i/AucVQK5FT5HWj/TtpAowtyroLEduO/NL/RAfAnfXD51A22+apzwL6QT5S//nrF2KXaT8jALidY2EcxwC2I+mJE2B//O/vvvhpP94JpwDcTbQDZ6+YNgaQU1rPANK6FencpwDfjAH0L/+oHdABcENPeoB42NidHJxOHKr+MAaw/97PWwAdAPfS6nt/6GxjAFsPUI//6ewdwFdjAG3P+vaHBAD3dTyHjtx7/rqVUnt3OsPARQytSjz7ph8QANxHPcDXzbUFGEb+UuSIlHvR1K0LdABRm/9Y37adi8cG4P1dEQDc2DYLWIslR46UakysW6fuAFqJj7W/htrjif9HQSYAuJPtXHk8Sq5fafVfj/zr1rk7gJoA0UYAhxToYwHRv/2THREA3E4dLW+zZVvvXA+dh/o/a/mnbcYvtr8xbPeab/v7CQHAbaxT/OP8eauaNQF+MmH2/7cLgHE31n3pCx7aN3+wcwKAezoUSKueywdA35HY9jFZBwAp7S7t2QpkHEO/QQCktZd53J0Pdk0AcAt1br9u9TJJh0NnWcqSylK/K/d/57SNAaaI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\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1364\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1362\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n  </defs>\n  <rect\n     class=\"cls-1\"\n     width=\"193.13\"\n     height=\"193.13\"\n     rx=\"16.92\"\n     id=\"rect4522\"\n     x=\"0\"\n     y=\"0\"\n     style=\"fill:#2a2e3c\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"27.82\"\n     y=\"103.96\"\n     width=\"28.16\"\n     height=\"61.34\"\n     rx=\"14.08\"\n     id=\"rect4524\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"64.260002\"\n     y=\"49.259998\"\n     width=\"28.16\"\n     height=\"81.010002\"\n     rx=\"14.08\"\n     id=\"rect4526\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"100.71\"\n     y=\"76.190002\"\n     width=\"28.16\"\n     height=\"65.349998\"\n     rx=\"14.08\"\n     id=\"rect4528\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"137.14999\"\n     y=\"27.82\"\n     width=\"28.16\"\n     height=\"83.019997\"\n     rx=\"14.08\"\n     id=\"rect4530\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4532\"\n     d=\"M27.82 51.8C26.664096071 51.8000131056 25.7255043043 50.8658908235 25.72 49.71C25.72 49.71 25.72 27.83 25.72 27.83C25.7255043043 26.6741091765 26.664096071 25.7399868944 27.82 25.74C27.82 25.74 49.69 25.74 49.69 25.74C50.4730192139 25.6858698318 51.2208673712 26.0729152703 51.6288445783 26.7434402609C52.0368217854 27.4139652515 52.0368217854 28.2560347485 51.6288445783 28.9265597391C51.2208673712 29.5970847297 50.4730192139 29.9841301682 49.69 29.93C49.69 29.93 29.91 29.93 29.91 29.93C29.91 29.93 29.91 49.71 29.91 49.71C29.9045272205 50.8620006127 28.9720006127 51.7945272205 27.82 51.8C27.82 51.8 27.82 51.8 27.82 51.8\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4534\"\n     d=\"M165.31 167.4C165.31 167.4 143.44 167.4 143.44 167.4C142.656980786 167.454130168 141.909132629 167.06708473 141.501155422 166.396559739C141.093178215 165.726034749 141.093178215 164.883965251 141.501155422 164.213440261C141.909132629 163.54291527 142.656980786 163.155869832 143.44 163.21C143.44 163.21 163.22 163.21 163.22 163.21C163.22 163.21 163.22 143.43 163.22 143.43C163.165869832 142.646980786 163.55291527 141.899132629 164.223440261 141.491155422C164.893965251 141.083178215 165.736034749 141.083178215 166.406559739 141.491155422C167.07708473 141.899132629 167.464130168 142.646980786 167.41 143.43C167.41 143.43 167.41 165.3 167.41 165.3C167.41 165.856954629 167.188750635 166.391097846 166.79492424 166.78492424C166.401097846 167.178750635 165.866954629 167.4 165.31 167.4C165.31 167.4 165.31 167.4 165.31 167.4\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4536\"\n     d=\"M155.15 64.0C155.15 64.0 147.31 64.0 147.31 64.0C146.93787972 63.9973131057 146.580220974 64.143949709 146.317085341 64.4070853413C146.053949709 64.6702209736 145.907313106 65.0278797203 145.91 65.4C145.91 65.4 145.91 73.24 145.91 73.24C145.907270784 73.6112212176 146.054219808 73.9678864677 146.317659111 74.2294440613C146.581098413 74.4910016548 146.938807884 74.6353901955 147.31 74.63C147.31 74.63 148.9 74.63 148.9 74.63C147.9 86.63 143.31 96.32 135.77 102.17C130.043903731 106.80871558 122.488918049 108.52659741 115.32 106.82C109.2 105.26 105.86 101.88 102.32 98.31C97.12 93.07 91.75 87.67 78.39 87.67C60.86 87.67 42.13 100.74 40.05 129.29C40.05 129.29 40.05 129.29 40.05 129.29C40.05 129.29 38.0 129.29 38.0 129.29C37.6287787824 129.287270784 37.2721135323 129.434219808 37.0105559387 129.697659111C36.7489983452 129.961098413 36.6046098045 130.318807884 36.61 130.69C36.61 130.69 36.61 138.52 36.61 138.52C36.5820279125 138.904739539 36.7163676113 139.283624516 36.9804540354 139.564810061C37.2445404596 139.845995606 37.6142637847 140.003810827 38.0 140.0C38.0 140.0 45.84 140.0 45.84 140.0C46.2121202797 140.002686894 46.5697790264 139.856050291 46.8329146587 139.592914659C47.096050291 139.329779026 47.2426868943 138.97212028 47.24 138.6C47.24 138.6 47.24 130.77 47.24 130.77C47.2426868943 130.39787972 47.096050291 130.040220974 46.8329146587 129.777085341C46.5697790264 129.513949709 46.2121202797 129.367313106 45.84 129.37C45.84 129.37 44.21 129.37 44.21 129.37C44.21 129.37 44.21 129.37 44.21 129.37C46.16 103.56 62.32 91.92 78.35 91.92C89.96 91.92 94.51 96.5 99.35 101.34C103.15 105.18 107.09 109.12 114.35 110.97C122.773397066 113.005672319 131.664472576 111.010169087 138.41 105.57C146.96 98.91 152.13 88.08 153.17 74.71C153.17 74.71 155.22 74.71 155.22 74.71C155.590293716 74.7154463837 155.947018936 74.570749973 156.208884455 74.3088844546C156.470749973 74.0470189363 156.615446384 73.6902937162 156.61 73.32C156.61 73.32 156.61 65.41 156.61 65.41C156.619036733 65.0245279784 156.46639341 64.6528545046 156.189040818 64.3850002882C155.911688225 64.1171460719 155.534923328 63.9775417453 155.15 64.0C155.15 64.0 155.15 64.0 155.15 64.0\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4538\"\n     d=\"M153.26 71.88C153.26 72.82 153.2 73.73 153.1 74.64C152.1 88.01 146.89 98.84 138.34 105.5C131.594472576 110.940169087 122.703397066 112.935672319 114.28 110.9C107.06 109.05 103.12 105.11 99.28 101.27C94.47 96.43 89.92 91.85 78.28 91.85C62.28 91.85 46.09 103.49 44.14 129.3C44.07 130.21 44.01 131.16 44.01 132.1C44.01 132.1 39.81 132.1 39.81 132.1C39.81 131.16 39.88 130.21 39.94 129.3C42.02 100.75 60.75 87.68 78.28 87.68C91.64 87.68 97.01 93.08 102.21 98.32C105.78 101.89 109.13 105.32 115.21 106.83C122.378918049 108.53659741 129.933903731 106.81871558 135.66 102.18C143.2 96.33 147.79 86.64 148.79 74.64C148.89 73.73 148.92 72.79 148.96 71.88C148.96 71.88 153.26 71.88 153.26 71.88\"\n     class=\"cls-4\" />\n  <rect\n     class=\"cls-4\"\n     x=\"145.91\"\n     y=\"64.010002\"\n     width=\"10.63\"\n     height=\"10.63\"\n     rx=\"1.4\"\n     id=\"rect4540\"\n     style=\"fill:#ffffff\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"148.67999\"\n     y=\"66.809998\"\n     width=\"5.0700002\"\n     height=\"5.0700002\"\n     id=\"rect4542\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-4\"\n     x=\"36.59\"\n     y=\"129.32001\"\n     width=\"10.63\"\n     height=\"10.63\"\n     rx=\"1.4\"\n     id=\"rect4544\"\n     style=\"fill:#ffffff\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"39.349998\"\n     y=\"132.11\"\n     width=\"5.0700002\"\n     height=\"5.0700002\"\n     id=\"rect4546\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4548\"\n     d=\"M338.53 130.92C338.53 130.92 267.39 130.92 267.39 130.92C267.39 130.92 254.78 155.81 254.78 155.81C254.78 155.81 226.0 155.81 226.0 155.81C226.0 155.81 288.41 38.1 288.41 38.1C288.41 38.1 317.84 38.1 317.84 38.1C317.84 38.1 380.23 155.81 380.23 155.81C380.23 155.81 351.14 155.81 351.14 155.81C351.14 155.81 338.53 130.92 338.53 130.92M327.26 109.06C327.26 109.06 302.87 61.13 302.87 61.13C302.87 61.13 278.49 109.06 278.49 109.06C278.49 109.06 327.26 109.06 327.26 109.06\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4550\"\n     d=\"M503.16 117.13C503.16 117.13 527.71 129.41 527.71 129.41C516.61 146.06 493.91 159.51 463.13 159.51C418.91 159.51 390.13 136.14 390.13 96.95C390.13 57.76 418.91 34.4 464.31 34.4C493.91 34.4 516.61 48.02 527.37 64.33C527.37 64.33 502.65 76.61 502.65 76.61C494.25 63.49 481.46 57.61 463.98 57.61C436.06 57.61 417.56 71.07 417.56 96.96C417.56 122.85 436.06 136.32 463.98 136.32C481.46 136.31 494.41 130.59 503.16 117.13C503.16 117.13 503.16 117.13 503.16 117.13\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4552\"\n     d=\"M677.54 133.28C677.54 133.28 677.54 155.81 677.54 155.81C677.54 155.81 556.29 155.81 556.29 155.81C556.29 155.81 556.29 38.1 556.29 38.1C556.29 38.1 675.86 38.1 675.86 38.1C675.86 38.1 675.86 60.63 675.86 60.63C675.86 60.63 583.0 60.63 583.0 60.63C583.0 60.63 583.0 84.85 583.0 84.85C583.0 84.85 660.53 84.85 660.53 84.85C660.53 84.85 660.53 107.38 660.53 107.38C660.53 107.38 583.0 107.38 583.0 107.38C583.0 107.38 583.0 133.28 583.0 133.28C583.0 133.28 677.54 133.28 677.54 133.28\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4554\"\n     d=\"M702.26 143.87C702.26 135.97 708.81 129.75 718.26 129.75C727.51 129.75 734.07 135.97 734.07 143.87C734.07 151.94 727.51 157.87 718.26 157.87C708.81 157.83 702.26 151.94 702.26 143.87C702.26 143.87 702.26 143.87 702.26 143.87\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4556\"\n     d=\"M892.28 120.16C892.28 143.37 870.28 159.51 828.54 159.51C798.78 159.51 774.54 151.1 756.54 135.8C756.54 135.8 772.0 117.47 772.0 117.47C786.5 130.76 805.17 137.0 829.22 137.0C853.1 137.0 865.22 132.46 865.22 122.7C865.22 112.94 853.1 110.24 826.0 107.88C792.39 105.0 761.11 97.63 761.11 72.4C761.11 47.85 787.34 34.4 823.67 34.4C849.4 34.4 871.6 40.79 886.56 52.4C886.56 52.4 871.76 71.07 871.76 71.07C858.82 61.14 842.84 57.07 823.67 56.94C807.67 56.77 788.18 59.63 788.18 70.39C788.18 80.48 805.0 81.49 828.38 83.39C865.88 86.36 892.28 94.26 892.28 120.16C892.28 120.16 892.28 120.16 892.28 120.16\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4558\"\n     d=\"M931.29 38.1C931.29 38.1 975.69 129.1 975.69 129.1C975.69 129.1 1019.91 38.1 1019.91 38.1C1019.91 38.1 1049.0 38.1 1049.0 38.1C1049.0 38.1 989.64 155.81 989.64 155.81C989.64 155.81 961.22 155.81 961.22 155.81C961.22 155.81 901.86 38.1 901.86 38.1C901.86 38.1 931.29 38.1 931.29 38.1\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4560\"\n     d=\"M1203.0 131.93C1191.23 147.93 1168.0 159.51 1136.07 159.51C1088.82 159.51 1060.07 136.31 1060.07 96.95C1060.07 57.59 1088.83 34.4 1136.07 34.4C1165.0 34.4 1185.51 45.33 1197.28 56.76C1197.28 56.76 1176.28 72.07 1176.28 72.07C1166.02 61.98 1154.08 57.27 1136.28 57.27C1105.5 57.27 1087.51 70.72 1087.51 96.95C1087.51 123.18 1106.01 136.64 1137.29 136.64C1154.95 136.64 1169.41 132.77 1177.82 122.64C1177.82 122.64 1177.82 111.25 1177.82 111.25C1177.82 111.25 1133.42 111.25 1133.42 111.25C1133.42 111.25 1133.42 89.39 1133.42 89.39C1133.42 89.39 1203.0 89.39 1203.0 89.39C1203.0 89.39 1203.0 131.93 1203.0 131.93\"\n     class=\"cls-5\" />\n  <g\n     style=\"fill:none;fill-rule:evenodd\"\n     id=\"g1841\">\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 161.90062,290.84743 c 0.0114,26.6997 -17.63141,50.19067 -43.27621,57.62158 -10.93469,3.20124 -22.557844,3.20124 -33.492541,0 -29.733898,-8.6388 -48.016988,-38.47785 -42.211881,-68.89223 5.805106,-30.41437 33.793122,-51.4218 64.618552,-48.50181 30.82543,2.92 54.37109,28.80904 54.36208,59.77246 0,0 0,0 0,0\"\n       id=\"Shape-7\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 101.87814,230.82495 c -1.51857,0 -3.001123,0.11704 -4.501685,0.22808 28.940535,2.15765 52.184675,24.7262 55.194765,53.59053 3.01008,28.86433 -15.07751,55.74311 -42.95018,63.82545 -3.99179,1.17113 -8.09606,1.91754 -12.244585,2.22683 1.500562,0.11105 3.001125,0.17407 4.501685,0.17407 5.66816,0.005 11.30766,-0.80416 16.74627,-2.4009 28.66452,-8.36043 46.82517,-36.5195 42.61727,-66.08036 -4.2079,-29.56086 -29.5047,-51.53389 -59.36354,-51.5637 0,0 0,0 0,0\"\n       id=\"path866\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 115.68331,371.87778 c 0,0 -27.61034,0 -27.61034,0 -1.782394,0.002 -3.473654,-0.78754 -4.615858,-2.15586 -1.1422,-1.36832 -1.617188,-3.17351 -1.296356,-4.9268 0,0 0.900337,-4.92184 0.900337,-4.92184 0,0 2.070776,-11.40427 2.070776,-11.40427 10.934697,3.20124 22.557851,3.20124 33.492541,0 0,0 2.07078,11.40427 2.07078,11.40427 0,0 0.90034,4.92184 0.90034,4.92184 0.32083,1.75329 -0.15417,3.55848 -1.29636,4.9268 -1.14221,1.36832 -2.83346,2.15823 -4.61586,2.15586 0,0 0,0 0,0\"\n       id=\"path880\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 149.89612,389.88452 c 0,0 -96.035963,0 -96.035963,0 0,0 11.674372,-23.37875 11.674372,-23.37875 2.046241,-4.05801 6.199317,-6.62177 10.744024,-6.63249 0,0 6.78254,0 6.78254,0 0,0 -0.900337,4.92184 -0.900337,4.92184 -0.320832,1.75329 0.154168,3.55848 1.296356,4.9268 1.142204,1.36832 2.833464,2.15823 4.615858,2.15586 0,0 27.61034,0 27.61034,0 1.7824,0.002 3.47365,-0.78754 4.61586,-2.15586 1.1422,-1.36832 1.61719,-3.17351 1.29636,-4.9268 0,0 -0.90034,-4.92184 -0.90034,-4.92184 0,0 6.78254,0 6.78254,0 4.54471,0.0108 8.69778,2.57448 10.74402,6.63249 0,0 11.67437,23.37875 11.67437,23.37875\"\n       id=\"path882\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 73.157384,364.79512 c -0.320832,1.75329 0.154168,3.55848 1.296356,4.9268 1.142204,1.36832 2.833464,2.15823 4.615858,2.15586 0,0 9.003372,0 9.003372,0 -1.782394,0.002 -3.473654,-0.78754 -4.615858,-2.15586 -1.1422,-1.36832 -1.617188,-3.17351 -1.296356,-4.9268 0,0 0.900337,-4.92184 0.900337,-4.92184 0,0 -6.78254,0 -6.78254,0 -0.76134,0.008 -1.52013,0.0894 -2.265849,0.24309 0,0 -0.85532,4.67875 -0.85532,4.67875\"\n       id=\"path884\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 138.22175,366.50577 c -2.04624,-4.05801 -6.19931,-6.62177 -10.74402,-6.63249 0,0 -6.78254,0 -6.78254,0 0,0 0.045,0.24309 0.045,0.24309 3.66162,0.70514 6.7914,3.06383 8.47818,6.3894 0,0 11.67437,23.37875 11.67437,23.37875 0,0 9.00337,0 9.00337,0 0,0 -11.67437,-23.37875 -11.67437,-23.37875\"\n       id=\"path886\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 149.89612,389.88452 c 0,0 0,9.00337 0,9.00337 -0.01,3.31085 -2.6914,5.99236 -6.00224,6.00225 0,0 -84.031475,0 -84.031475,0 -3.310846,-0.01 -5.99236,-2.6914 -6.002248,-6.00225 0,0 0,-9.00337 0,-9.00337 0,0 96.035963,0 96.035963,0\"\n       id=\"path888\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 116.88376,290.84743 c -0.0213,8.27848 -6.72714,14.98418 -15.00562,15.00562 -0.91705,9e-4 -1.83191,-0.0896 -2.731022,-0.2701 -7.578115,-1.45665 -12.815904,-8.42349 -12.110262,-16.108 0.705639,-7.68451 7.12462,-13.58096 14.841284,-13.63314 0.91705,-9e-4 1.83191,0.0896 2.73102,0.2701 5.3947,0.98382 9.81769,4.84242 11.52432,10.05377 0.49437,1.5115 0.74756,3.09145 0.75028,4.68175 0,0 0,0 0,0\"\n       id=\"path890\"\n       style=\"fill:#f5f5f5;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 116.13348,286.16568 c -1.70663,-5.21135 -6.12962,-9.06995 -11.52432,-10.05377 -0.89911,-0.18052 -1.81397,-0.271 -2.73102,-0.2701 -1.53816,0.003 -3.066722,0.24243 -4.531697,0.71127 4.623697,1.42845 8.269577,5.00723 9.783667,9.60359 0.4953,1.51438 0.74851,3.09744 0.75028,4.69076 -0.015,6.54439 -4.26327,12.32673 -10.503935,14.29735 0.578823,0.1816 1.168124,0.32792 1.76466,0.43817 0.901075,0.18091 1.817965,0.27139 2.737025,0.2701 8.27848,-0.0213 14.98418,-6.72714 15.00562,-15.00562 -0.003,-1.5903 -0.25591,-3.17025 -0.75028,-4.68175 0,0 0,0 0,0\"\n       id=\"path892\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#000000;fill-rule:nonzero\"\n       id=\"path894\"\n       d=\"m 81.710587,350.50377 c 0,0 -1.158434,6.36839 -1.158434,6.36839 0,0 -4.2736,0 -4.2736,0 -5.671077,0.0358 -10.847434,3.23544 -13.415024,8.2921 0,0 -11.677374,23.37876 -11.677374,23.37876 -0.01501,0.036 -0.02101,0.075 -0.03601,0.11104 -0.01501,0.036 -0.04502,0.13505 -0.07203,0.20108 -0.10687,0.28894 -0.168604,0.5926 -0.183069,0.90033 0,0.039 -0.02401,0.075 -0.02401,0.11705 0,0 0,9.00337 0,9.00337 0,4.97242 4.030948,9.00337 9.003372,9.00337 0,0 84.019472,0 84.019472,0 4.97242,0 9.00337,-4.03095 9.00337,-9.00337 0,0 0,-8.99137 0,-8.99137 0,-0.042 -0.021,-0.078 -0.024,-0.11704 -0.0144,-0.30773 -0.0762,-0.6114 -0.18307,-0.90034 -0.027,-0.066 -0.042,-0.13505 -0.072,-0.20108 -0.03,-0.066 -0.021,-0.075 -0.036,-0.11104 0,0 -11.68938,-23.39976 -11.68938,-23.39976 -2.57007,-5.05317 -7.74593,-8.24901 -13.41502,-8.2831 0,0 -4.2736,0 -4.2736,0 0,0 -1.15844,-6.36839 -1.15844,-6.36839 29.24001,-9.87611 47.02633,-39.47424 42.02205,-69.92867 -5.00428,-30.45444 -31.32675,-52.8046 -62.1896,-52.8046 -30.862848,0 -57.185324,22.35016 -62.189602,52.8046 -5.004278,30.45443 12.782046,60.05256 42.022048,69.92867 0,0 0,0 0,0 M 146.895,398.88789 c 0,1.65748 -1.34365,3.00113 -3.00112,3.00113 0,0 -84.031475,0 -84.031475,0 -1.657476,0 -3.001124,-1.34365 -3.001124,-3.00113 0,0 0,-6.00224 0,-6.00224 0,0 90.033719,0 90.033719,0 0,0 0,6.00224 0,6.00224 m -19.41727,-36.01348 c 3.40485,0.0195 6.51396,1.93818 8.05802,4.97286 0,0 9.50756,19.03613 9.50756,19.03613 0,0 -86.330336,0 -86.330336,0 0,0 9.501559,-19.02713 9.501559,-19.02713 1.543613,-3.03912 4.655412,-4.96156 8.06402,-4.98186 0,0 3.184192,0 3.184192,0 0,0 -0.252094,1.38351 -0.252094,1.38351 -0.480054,2.62844 0.232137,5.33432 1.943966,7.38585 1.711829,2.05153 4.246437,3.23675 6.918353,3.23513 0,0 27.61034,0 27.61034,0 2.67024,-3.2e-4 5.20257,-1.1859 6.91292,-3.23648 1.71036,-2.05057 2.42226,-4.75455 1.9434,-7.3815 0,0 -0.24609,-1.38651 -0.24609,-1.38651 0,0 3.18419,0 3.18419,0 m -8.83831,2.46392 c 0.15942,0.87618 -0.0785,1.77791 -0.64953,2.46135 -0.57098,0.68344 -1.41601,1.078 -2.30658,1.07697 0,0 -27.61034,0 -27.61034,0 -0.890148,-5.9e-4 -1.734103,-0.39631 -2.303846,-1.08023 -0.569745,-0.68393 -0.806486,-1.58549 -0.646259,-2.46109 0,0 2.400899,-13.18094 2.400899,-13.18094 9.44084,2.28885 19.291926,2.28885 28.732766,0 0,0 2.38289,13.18394 2.38289,13.18394 M 101.87814,233.82607 c 31.49203,0 57.02136,25.52933 57.02136,57.02136 0,31.49202 -25.52933,57.02136 -57.02136,57.02136 -31.492024,0 -57.021355,-25.52934 -57.021355,-57.02136 0.03473,-31.47763 25.543727,-56.98662 57.021355,-57.02136 0,0 0,0 0,0\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"Oval-9\"\n       cx=\"23.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"circle899\"\n       cx=\"27.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"circle901\"\n       cx=\"31.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n  </g>\n  <g\n     style=\"fill:none;fill-rule:nonzero\"\n     id=\"g1550\">\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 104.05674,276.66434 c -0.89911,-0.18052 -1.81397,-0.27101 -2.73103,-0.27011 -4.342458,-0.006 -8.472485,1.87842 -11.314234,5.16193 -9.093403,-8.73327 -19.597337,-21.00786 -15.035631,-27.85043 7.562835,-11.34424 34.032745,-15.12566 45.376995,-3.78141 9.3335,9.3335 -17.13642,8.43316 -16.2961,26.74001 0,0 0,10e-6 0,10e-6\"\n       id=\"path868-4\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 101.32571,276.39424 c 0.91706,-9e-4 1.83192,0.0896 2.73103,0.2701 -0.84032,-18.30686 25.6296,-17.40652 16.2961,-26.74002 -5.73215,-5.73214 -15.32374,-7.59284 -24.390135,-6.57546 5.721725,0.40203 11.141615,2.71819 15.386765,6.57546 9.3335,9.3335 -17.13642,8.43316 -16.296106,26.74002 0,0 6.272346,-0.2701 6.272346,-0.2701\"\n       id=\"path870-8\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 98.594691,306.13537 c -2.971113,12.2746 -8.403148,27.7604 -16.656239,27.28022 -13.625103,-0.87032 -30.10127,-21.93822 -25.98973,-37.42402 3.421281,-12.75477 15.905954,10.654 31.361742,0.75028 1.854173,4.89315 6.13596,8.45751 11.284227,9.39352 0,0 0,0 0,0\"\n       id=\"path872-3\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 90.800772,300.70334 c -2.166812,10.61197 -6.656493,27.13616 -13.805168,31.57182 1.581782,0.62368 3.247712,1.00805 4.942848,1.14043 8.253091,0.48018 13.685126,-15.00562 16.656239,-27.28022 0,0 -7.793919,-5.43203 -7.793919,-5.43203\"\n       id=\"path874-8\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 128.03572,328.70383 c -12.8148,3.4813 1.38052,-19.26722 -15.27572,-27.61035 2.30575,-2.70344 3.57201,-6.14044 3.57133,-9.69362 -0.003,-1.5903 -0.2559,-3.17025 -0.75028,-4.68176 12.12455,-3.54133 28.21057,-6.60247 31.84193,0.81031 6.06227,12.21457 -3.93147,37.03386 -19.38726,41.17542 0,0 0,0 0,0\"\n       id=\"path876-8\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 147.42298,287.52841 c -2.1308,-4.34863 -8.5502,-5.08091 -15.93597,-4.23759 2.86888,0.18097 5.46334,1.76686 6.9326,4.23759 5.56708,11.21519 -2.41891,33.01236 -15.72589,39.71687 0.76528,1.6116 2.27785,2.28986 5.342,1.45855 15.45579,-4.14156 25.44953,-28.96085 19.38726,-41.17542 0,0 0,0 0,0\"\n       id=\"path878-7\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\"\n       id=\"path896-1\"\n       d=\"m 73.082135,333.78773 c 2.680139,1.46969 5.637015,2.36503 8.682255,2.62899 0,0 0.564209,0 0.564209,0 7.622854,0 13.850187,-9.10842 18.534941,-27.04614 0.15606,0 0.30011,0.024 0.46217,0.024 4.37537,-1.9e-4 8.59943,-1.60143 11.87545,-4.50168 2.99931,2.19205 4.91133,5.56788 5.24897,9.26747 -2.99877,2.32552 -6.44632,4.00535 -10.1258,4.93385 -0.84031,0.21608 -1.67762,0.37814 -2.54195,0.51319 -1.54824,0.24204 -2.64965,1.63452 -2.52862,3.19689 0.12103,1.56238 1.42374,2.76863 2.9908,2.76934 0.15674,-1.6e-4 0.31325,-0.0123 0.46817,-0.036 1.0564,-0.16506 2.07978,-0.36614 3.07915,-0.62123 3.19634,-0.81655 6.2552,-2.09874 9.0784,-3.80543 -0.006,1.65837 0.11438,3.31479 0.36014,4.95486 -5.49388,2.97753 -11.65619,4.5052 -17.90471,4.43866 0,0 -0.36013,0 -0.36013,0 -1.657477,0 -3.001125,1.34365 -3.001125,3.00112 0,1.65748 1.343648,3.00113 3.001125,3.00113 0,0 0.36013,0 0.36013,0 7.37564,0.0685 14.64362,-1.77173 21.09791,-5.342 0.99007,0.59285 2.12322,0.90415 3.27723,0.90033 1.05326,-0.0156 2.09979,-0.17106 3.11216,-0.46217 7.86595,-2.10079 15.2037,-9.21945 19.63035,-19.02112 4.33663,-9.6036 4.97587,-19.72039 1.67463,-26.37388 -3.50231,-7.15468 -14.26434,-8.16006 -32.81729,-3.08516 -2.1363,-4.10086 -5.76177,-7.22806 -10.1318,-8.73927 0.50004,-3.69549 2.55104,-7.00284 5.63911,-9.0934 3.4383,1.47727 6.55099,3.61903 9.15943,6.30236 0.63714,0.66776 1.23822,1.36902 1.80068,2.10078 1.01769,1.30941 2.90417,1.54589 4.21358,0.5282 1.30941,-1.01769 1.54589,-2.90417 0.5282,-4.21358 -0.69564,-0.89774 -1.43689,-1.7592 -2.22083,-2.58096 -2.26843,-2.33468 -4.85608,-4.3363 -7.68589,-5.94523 1.42536,-0.81259 2.77877,-1.74532 4.04552,-2.78805 1.8968,1.21712 3.68419,2.59683 5.342,4.12355 3.01737,2.81651 5.57886,6.08469 7.59285,9.68763 0.53106,0.94987 1.53473,1.53783 2.62298,1.53657 0.51099,10e-4 1.01358,-0.12992 1.45855,-0.38114 1.44648,-0.80758 1.96499,-2.63448 1.15843,-4.08153 -2.31458,-4.14378 -5.25991,-7.90214 -8.73027,-11.14017 -2.09698,-1.93101 -4.37424,-3.65655 -6.80055,-5.15293 -0.20264,-2.11855 -1.2115,-4.07826 -2.81806,-5.47406 -5.75915,-5.75915 -15.58183,-8.56821 -26.259831,-7.50281 -10.503934,1.03839 -19.597339,5.54008 -23.735889,11.7464 -4.40565,6.60248 0.05702,16.38914 13.586088,29.84318 -2.505924,3.97198 -3.340833,8.77325 -2.32287,13.358 -3.483738,1.41055 -7.403485,1.26974 -10.777036,-0.38714 -0.172295,-1.15323 -0.252575,-2.31834 -0.24009,-3.48431 -0.006,-2.63742 0.351599,-5.26308 1.062398,-7.80292 0.239729,-0.89426 0.533383,-1.7732 0.879329,-2.63199 0.624039,-1.53564 -0.114973,-3.28642 -1.650618,-3.91046 -1.535651,-0.62404 -3.286426,0.11497 -3.910462,1.65062 -0.431778,1.07165 -0.799559,2.16799 -1.101415,3.28323 -0.856131,3.05959 -1.287332,6.22241 -1.28148,9.39952 0,0 0,0.2821 0,0.2821 -1.414331,-0.83049 -2.899737,-1.53353 -4.43866,-2.10078 0.0774,-2.24324 0.361714,-4.47453 0.849318,-6.6655 0.920289,-4.09696 2.486435,-8.02145 4.639738,-11.62635 0.569295,-0.92317 0.596203,-2.08167 0.07038,-3.03027 -0.525817,-0.9486 -1.522548,-1.53969 -2.607118,-1.54609 -1.08457,-0.006 -2.088209,0.57288 -2.625191,1.51521 -2.472815,4.14275 -4.26999,8.65291 -5.323997,13.361 -0.631125,2.80797 -0.976017,5.67268 -1.029386,8.55021 -1.662169,1.24663 -2.804805,3.06373 -3.208201,5.10191 -2.100787,7.89295 0.408153,17.82368 6.698509,26.56895 3.468104,4.96858 8.029747,9.0754 13.33399,12.00449 0,0 3e-6,1e-5 3e-6,1e-5 M 144.73397,288.8639 c 2.49094,5.01788 1.80068,13.35801 -1.76466,21.24796 -3.69138,8.17807 -9.56458,14.04826 -15.71988,15.69588 -0.53482,0.16221 -1.08895,0.25204 -1.64762,0.2671 0,0 -0.14706,0 -0.14706,0 -0.51353,-1.83403 -0.71641,-3.74109 -0.60022,-5.64211 -0.10204,-6.00225 -0.27311,-14.70551 -7.84194,-20.23658 1.96699,-3.43906 2.7077,-7.44418 2.10079,-11.35925 16.60222,-4.47468 24.13504,-3.00413 25.62059,0.027 0,0 0,-10e-6 0,-10e-6 m -31.40376,2.53596 c 0,6.6299 -5.3746,12.00449 -12.0045,12.00449 -6.629897,0 -12.004493,-5.37459 -12.004493,-12.00449 0,-6.6299 5.374596,-12.0045 12.004493,-12.0045 6.6299,0 12.0045,5.3746 12.0045,12.0045 0,0 0,0 0,0 M 77.47278,255.38637 c 3.118168,-4.67575 10.70801,-8.25009 19.333241,-9.10541 8.907339,-0.87633 16.923339,1.28148 21.425019,5.78016 0.44566,0.4131 0.82433,0.89302 1.12243,1.42253 -1.33263,1.36201 -2.88486,2.49017 -4.59172,3.33725 -5.0689,3.03714 -12.43966,7.4788 -13.56208,16.59322 -4.062763,0.0252 -7.996334,1.43043 -11.155182,3.98549 C 79.76864,267.09075 75.086886,258.9517 77.47278,255.37136 c 0,0 0,0.015 0,0.015 m -18.624973,41.3825 c 0.134241,-0.59258 0.360033,-1.16061 0.669251,-1.68364 1.85841,0.44913 3.619019,1.23434 5.194946,2.31688 5.194942,2.89007 12.778783,7.07964 21.283968,3.40927 2.088116,3.39207 5.238528,5.99913 8.961356,7.41578 -4.387643,16.57821 -9.537569,22.34637 -12.838808,22.18731 -5.588093,-0.35714 -12.460667,-5.11992 -17.508555,-12.13655 -5.242963,-7.29573 -7.400771,-15.34175 -5.762158,-21.50905 0,0 0,0 0,0\" />\n  </g>\n  <path\n     id=\"path938\"\n     d=\"M812.90258 267.19167C812.90258 267.19167 716.72349 267.19167 716.72349 267.19167C715.86215 267.19167 715.05315 266.78281 714.54208 266.08974C714.03101 265.39668 713.88142 264.50167 714.13696 263.67897C714.13696 263.67897 720.0729 243.85554 720.0729 243.85554C720.76347 241.54449 722.89003 239.96141 725.30081 239.96141C725.30081 239.96141 804.32527 239.96141 804.32527 239.96141C806.73604 239.96141 808.86261 241.54449 809.55318 243.85554C809.55318 243.85554 815.48911 263.67897 815.48911 263.67897C815.74465 264.50167 815.59507 265.39668 815.08399 266.08974C814.57292 266.78281 813.76393 267.19167 812.90258 267.19167C812.90258 267.19167 812.90258 267.19167 812.90258 267.19167M812.90258 267.19167\"\n     style=\"stroke-width:0.31910944;fill:#283593\" />\n  <path\n     id=\"path940\"\n     d=\"M804.73288 267.19167C804.73288 267.19167 716.72349 267.19167 716.72349 267.19167C715.86215 267.19167 715.05315 266.78281 714.54208 266.08974C714.03101 265.39668 713.88142 264.50167 714.13696 263.67897C714.13696 263.67897 720.0729 243.85554 720.0729 243.85554C720.76347 241.54449 722.89003 239.96141 725.30081 239.96141C725.30081 239.96141 796.15557 239.96141 796.15557 239.96141C798.56759 239.96141 800.69291 241.54449 801.38348 243.85554C801.38348 243.85554 807.32066 263.67897 807.32066 263.67897C807.5762 264.50167 807.42537 265.39668 806.9143 266.08974C806.40447 266.78281 805.59423 267.19167 804.73288 267.19167C804.73288 267.19167 804.73288 267.19167 804.73288 267.19167M804.73288 267.19167\"\n     style=\"stroke-width:0.31910944;fill:#3f51b5\" />\n  <g\n     id=\"g1942\">\n    <path\n       style=\"stroke-width:0.31910944;fill:#fec108\"\n       d=\"M802.93664 267.19167C802.93664 267.19167 796.61803 326.6632 796.61803 326.6632C796.16554 330.09861 793.19259 332.63653 789.72975 332.54553C789.72975 332.54553 739.89757 332.54553 739.89757 332.54553C736.43349 332.63653 733.46053 330.09861 733.00805 326.6632C733.00805 326.6632 726.69068 267.19167 726.69068 267.19167C726.69068 267.19167 802.93664 267.19167 802.93664 267.19167M802.93664 267.19167\"\n       id=\"path942\" />\n    <path\n       style=\"stroke-width:0.31910944;fill:#ffdc00\"\n       d=\"M794.76694 267.19167C794.76694 267.19167 788.44958 326.6632 788.44958 326.6632C787.99584 330.09861 785.02289 332.63653 781.56005 332.54553C781.56005 332.54553 739.89757 332.54553 739.89757 332.54553C736.43349 332.63653 733.46053 330.09861 733.00805 326.6632C733.00805 326.6632 726.69068 267.19167 726.69068 267.19167C726.69068 267.19167 794.76694 267.19167 794.76694 267.19167M794.76694 267.19167\"\n       id=\"path944\" />\n    <path\n       style=\"stroke-width:0.31910944;fill:#ffeb3a\"\n       d=\"M778.42879 332.54553C778.42879 332.54553 751.19728 332.54553 751.19728 332.54553C751.19728 332.54553 745.75123 267.19167 745.75123 267.19167C745.75123 267.19167 783.87484 267.19167 783.87484 267.19167C783.87484 267.19167 778.42879 332.54553 778.42879 332.54553M778.42879 332.54553\"\n       id=\"path946\" />\n  </g>\n  <path\n     id=\"path948\"\n     d=\"M778.42879 332.54553C778.42879 332.54553 778.42879 392.45334 778.42879 392.45334C778.41979 395.45746 775.98685 397.89067 772.98274 397.8994C772.98274 397.8994 756.64334 397.8994 756.64334 397.8994C753.63922 397.8904 751.20601 395.45746 751.19729 392.45334C751.19729 392.45334 751.19729 332.54553 751.19729 332.54553C751.19729 332.54553 778.42879 332.54553 778.42879 332.54553M778.42879 332.54553\"\n     style=\"stroke-width:0.31910944;fill:#283593\" />\n  <path\n     id=\"path950\"\n     d=\"M770.25909 332.54553C770.25909 332.54553 770.25909 392.45334 770.25909 392.45334C770.25009 395.45746 767.81716 397.89067 764.81304 397.8994C764.81304 397.8994 756.64334 397.8994 756.64334 397.8994C753.63922 397.8904 751.20601 395.45746 751.19728 392.45334C751.19728 392.45334 751.19728 332.54553 751.19728 332.54553C751.19728 332.54553 770.25909 332.54553 770.25909 332.54553M770.25909 332.54553\"\n     style=\"stroke-width:0.31910944;fill:#3f51b5\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path952\"\n     d=\"M816.55115 269.91531C816.55115 269.91531 713.07492 269.91531 713.07492 269.91531C712.21358 269.91531 711.40459 269.5077 710.88977 268.81713C710.37621 268.1278 710.21914 267.23405 710.46596 266.4101C710.46596 266.4101 717.47016 243.06151 717.47016 243.06151C718.49231 239.59493 721.68216 237.22156 725.29707 237.23776C725.29707 237.23776 804.32901 237.23776 804.32901 237.23776C807.94392 237.22156 811.13377 239.59493 812.15592 243.06151C812.15592 243.06151 819.16012 266.4101 819.16012 266.4101C819.40693 267.23405 819.24982 268.1278 818.7363 268.81713C818.22274 269.5077 817.41249 269.91531 816.55115 269.91531C816.55115 269.91531 816.55115 269.91531 816.55115 269.91531M716.73471 264.46926C716.73471 264.46926 812.89137 264.46926 812.89137 264.46926C812.89137 264.46926 806.93922 244.62589 806.93922 244.62589C806.59893 243.46912 805.5344 242.67758 804.32901 242.68381C804.32901 242.68381 725.29707 242.68381 725.29707 242.68381C724.09168 242.67781 723.0284 243.46912 722.6881 244.62589C722.6881 244.62589 716.73471 264.46926 716.73471 264.46926M716.73471 264.46926\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path954\"\n     d=\"M789.73225 335.26793C789.73225 335.26793 739.89508 335.26793 739.89508 335.26793C735.03364 335.36643 730.88522 331.77269 730.28938 326.9474C730.28938 326.9474 723.98199 267.47961 723.98199 267.47961C723.89969 266.71051 724.14902 265.94515 724.66508 265.3705C725.18239 264.79585 725.91784 264.46802 726.69068 264.46926C726.69068 264.46926 802.93664 264.46926 802.93664 264.46926C803.70824 264.46826 804.44494 264.79585 804.96099 265.3705C805.47705 265.94515 805.72636 266.71051 805.64409 267.47961C805.64409 267.47961 799.33669 326.9474 799.33669 326.9474C798.74086 331.77269 794.59243 335.36641 789.73225 335.26793C789.73225 335.26793 789.73225 335.26793 789.73225 335.26793M729.71723 269.91531C729.71723 269.91531 735.70677 326.37276 735.70677 326.37276C736.0159 328.42453 737.82211 329.91288 739.89508 329.82188C739.89508 329.82188 789.73225 329.82188 789.73225 329.82188C791.80396 329.91288 793.61142 328.42453 793.92056 326.37276C793.92056 326.37276 799.90884 269.91531 799.90884 269.91531C799.90884 269.91531 729.71723 269.91531 729.71723 269.91531M729.71723 269.91531\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path956\"\n     d=\"M778.42879 335.26793C778.42879 335.26793 751.19728 335.26793 751.19728 335.26793C749.78124 335.26893 748.60203 334.18346 748.48361 332.77115C748.48361 332.77115 743.03756 267.41729 743.03756 267.41729C742.97526 266.6594 743.23326 265.909 743.74807 265.34806C744.26413 264.78837 744.99086 264.46926 745.75123 264.46926C745.75123 264.46926 783.87484 264.46926 783.87484 264.46926C784.63647 264.46926 785.36194 264.78837 785.878 265.34806C786.39406 265.909 786.65084 266.6594 786.58852 267.41729C786.58852 267.41729 781.14247 332.77115 781.14247 332.77115C781.02529 334.18346 779.84484 335.26918 778.42879 335.26793C778.42879 335.26793 778.42879 335.26793 778.42879 335.26793M753.70279 329.82188C753.70279 329.82188 775.92328 329.82188 775.92328 329.82188C775.92328 329.82188 780.91435 269.91531 780.91435 269.91531C780.91435 269.91531 748.71172 269.91531 748.71172 269.91531C748.71172 269.91531 753.70279 329.82188 753.70279 329.82188M753.70279 329.82188\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path958\"\n     d=\"M772.98274 400.6218C772.98274 400.6218 756.64334 400.6218 756.64334 400.6218C752.13467 400.6168 748.47987 396.96201 748.47488 392.45334C748.47488 392.45334 748.47488 332.54553 748.47488 332.54553C748.47488 331.04098 749.69398 329.82188 751.19728 329.82188C751.19728 329.82188 778.42879 329.82188 778.42879 329.82188C779.93209 329.82188 781.15119 331.04098 781.15119 332.54553C781.15119 332.54553 781.15119 392.45334 781.15119 392.45334C781.14619 396.96201 777.4914 400.61681 772.98274 400.6218C772.98274 400.6218 772.98274 400.6218 772.98274 400.6218M753.92093 335.26793C753.92093 335.26793 753.92093 392.45334 753.92093 392.45334C753.92193 393.95665 755.14003 395.1745 756.64334 395.17575C756.64334 395.17575 772.98274 395.17575 772.98274 395.17575C774.48604 395.17475 775.70389 393.95665 775.70514 392.45334C775.70514 392.45334 775.70514 335.26793 775.70514 335.26793C775.70514 335.26793 753.92093 335.26793 753.92093 335.26793M753.92093 335.26793\" />\n  <g\n     id=\"g1926\">\n    <g\n       id=\"g1917\">\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path960\"\n         d=\"M707.62887 302.59162C707.62887 302.59162 691.29072 302.59162 691.29072 302.59162C689.78617 302.59162 688.56707 301.37253 688.56707 299.86922C688.56707 298.36467 689.78617 297.14557 691.29072 297.14557C691.29072 297.14557 707.62887 297.14557 707.62887 297.14557C709.13218 297.14557 710.35128 298.36467 710.35128 299.86922C710.35128 301.37253 709.13218 302.59162 707.62887 302.59162C707.62887 302.59162 707.62887 302.59162 707.62887 302.59162M707.62887 302.59162\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path962\"\n         d=\"M695.4354 325.59368C694.14899 325.59468 693.03834 324.69619 692.77034 323.43969C692.50234 322.18195 693.14928 320.90925 694.32351 320.38447C694.32351 320.38447 709.24187 313.72057 709.24187 313.72057C710.13064 313.31794 711.16775 313.4214 711.95929 313.99355C712.75083 314.56571 713.17589 315.5168 713.07368 316.48785C712.97022 317.45889 712.35568 318.30028 711.46193 318.69294C711.46193 318.69294 696.54356 325.35684 696.54356 325.35684C696.19453 325.5139 695.81684 325.59493 695.4354 325.59368C695.4354 325.59368 695.4354 325.59368 695.4354 325.59368M695.4354 325.59368\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path964\"\n         d=\"M710.35128 286.25347C709.96984 286.25347 709.59214 286.17367 709.24312 286.01663C709.24312 286.01663 694.32351 279.35273 694.32351 279.35273C693.41479 278.9688 692.78654 278.12366 692.6781 277.14389C692.56965 276.16413 692.99845 275.20181 693.80121 274.62966C694.60273 274.05626 695.6523 273.96152 696.54356 274.38035C696.54356 274.38035 711.46193 281.0455 711.46193 281.0455C712.63366 281.56904 713.2806 282.84174 713.0126 284.09824C712.7446 285.35348 711.63644 286.25222 710.35128 286.25347C710.35128 286.25347 710.35128 286.25347 710.35128 286.25347M710.35128 286.25347\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path966\"\n         d=\"M841.05901 302.59162C841.05901 302.59162 824.72085 302.59162 824.72085 302.59162C823.2163 302.59162 821.9972 301.37253 821.9972 299.86922C821.9972 298.36467 823.2163 297.14557 824.72085 297.14557C824.72085 297.14557 841.05901 297.14557 841.05901 297.14557C842.56231 297.14557 843.78265 298.36467 843.78265 299.86922C843.78265 301.37253 842.56231 302.59162 841.05901 302.59162C841.05901 302.59162 841.05901 302.59162 841.05901 302.59162M841.05901 302.59162\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path968\"\n         d=\"M836.91432 325.59368C836.53289 325.59468 836.15394 325.51388 835.80616 325.35809C835.80616 325.35809 820.8878 318.69294 820.8878 318.69294C819.99404 318.30028 819.37951 317.45889 819.27605 316.48785C819.17383 315.5168 819.5989 314.56571 820.39044 313.99355C821.18198 313.4214 822.21784 313.31794 823.10785 313.72057C823.10785 313.72057 838.02622 320.38447 838.02622 320.38447C839.19919 320.90925 839.84739 322.18195 839.57939 323.43969C839.31014 324.69619 838.19949 325.59493 836.91432 325.59368C836.91432 325.59368 836.91432 325.59368 836.91432 325.59368M836.91432 325.59368\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path970\"\n         d=\"M821.99845 286.25347C820.71328 286.25347 819.60264 285.35597 819.33463 284.09824C819.06663 282.84174 819.71357 281.5678 820.8878 281.04426C820.8878 281.04426 835.80616 274.38035 835.80616 274.38035C836.69494 273.97773 837.73204 274.08244 838.52358 274.65334C839.31512 275.2255 839.74018 276.17659 839.63673 277.14763C839.53451 278.11867 838.91997 278.96007 838.02622 279.35398C838.02622 279.35398 823.10785 286.01788 823.10785 286.01788C822.75883 286.17369 822.38113 286.25472 821.99845 286.25347C821.99845 286.25347 821.99845 286.25347 821.99845 286.25347M821.99845 286.25347\" />\n    </g>\n  </g>\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path972\"\n     d=\"M729.41433 269.91531C729.14882 269.91431 728.8858 269.87671 728.63151 269.80064C727.93969 269.59371 727.35881 269.12003 727.01602 268.48431C726.67323 267.84734 726.59719 267.10192 726.80411 266.4101C726.80411 266.4101 734.97381 239.17984 734.97381 239.17984C735.25303 238.24744 736.00842 237.53568 736.95453 237.3113C737.90189 237.08693 738.89661 237.3849 739.5635 238.09287C740.23164 238.8009 740.47097 239.81058 740.19175 240.74298C740.19175 240.74298 732.02205 267.97324 732.02205 267.97324C731.67676 269.12502 730.61722 269.91407 729.41433 269.91531C729.41433 269.91531 729.41433 269.91531 729.41433 269.91531M729.41433 269.91531\" />\n  <path\n     id=\"Shape\"\n     d=\"M1046.4837 246.55584C1046.4117 268.35866 1046.6288 290.17607 1046.3748 311.96977C1044.9255 319.29909 1033.792 315.96342 1035.7615 309.06969C1035.8355 287.87397 1035.6128 266.66292 1035.8731 245.4768C1037.0283 239.25579 1046.5875 240.21705 1046.4837 246.55584C1046.4837 246.55584 1046.4837 246.55584 1046.4837 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     id=\"path1071\"\n     d=\"M1035.7615 246.55584C1035.7615 268.00033 1035.7615 289.44482 1035.7615 310.88931C1030.0592 310.75269 1024.302 311.16524 1018.6347 310.67866C1015.7107 308.44853 1017.4866 304.15343 1016.9976 300.93025C1016.9976 283.69897 1016.9976 266.46768 1016.9976 249.2364C1017.9408 244.92011 1023.3086 247.07939 1026.5017 246.55584C1029.5883 246.55584 1032.6749 246.55584 1035.7615 246.55584C1035.7615 246.55584 1035.7615 246.55584 1035.7615 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     id=\"Rectangle-path\"\n     d=\"M1027.7198 246.55584C1030.2402 246.86764 1034.0031 245.93696 1035.7615 247.01074C1035.7615 268.3036 1035.7615 289.59646 1035.7615 310.88931C1033.2411 310.57751 1029.4782 311.50819 1027.7198 310.4344C1027.7198 289.14155 1027.7198 267.84869 1027.7198 246.55584C1027.7198 246.55584 1027.7198 246.55584 1027.7198 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#707070\" />\n  <path\n     id=\"path1074\"\n     d=\"M1167.109 326.97268C1167.109 346.63013 1167.109 366.28758 1167.109 385.94503C1145.6645 385.94503 1124.22 385.94503 1102.7755 385.94503C1102.7215 365.74012 1102.8851 345.52968 1102.6925 325.32825C1102.0249 315.89103 1092.4702 309.66965 1083.5078 310.88931C1071.1665 310.88931 1058.8251 310.88931 1046.4837 310.88931C1046.4837 289.44482 1046.4837 268.00033 1046.4837 246.55584C1062.6235 246.75591 1078.7932 246.10734 1094.91 246.98027C1126.9359 249.86033 1155.5858 273.96865 1164.0374 304.9696C1166.0751 312.11462 1167.1024 319.54364 1167.109 326.97268C1167.109 326.97268 1167.109 326.97268 1167.109 326.97268\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#f6511d\" />\n  <path\n     id=\"path1076\"\n     d=\"M1086.6922 246.55584C1084.8345 246.55984 1078.1612 246.54684 1079.6893 246.56384C1111.2812 246.57414 1141.4693 267.25765 1153.0981 296.59247C1158.8893 309.73435 1159.3841 324.22356 1159.0673 338.34548C1159.0673 354.21205 1159.0673 370.07862 1159.0673 385.94518C1161.5877 385.63338 1165.3506 386.56406 1167.109 385.49028C1166.9702 363.92464 1167.4005 342.34434 1166.8674 320.78876C1164.8069 288.67426 1141.3942 259.41573 1110.5926 250.1936C1102.8701 247.78201 1094.7813 246.56244 1086.6922 246.55599C1086.6922 246.55599 1086.6922 246.55584 1086.6922 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#af2f07\" />\n  <path\n     id=\"path1078\"\n     d=\"M1172.4701 391.30616C1172.4141 396.92393 1166.2173 396.9451 1162.105 396.66728C1141.9708 396.59298 1121.8212 396.81592 1101.6965 396.55566C1094.3696 395.10157 1097.7177 384.00079 1104.5952 385.94503C1125.7909 386.01933 1147.0019 385.79637 1168.188 386.05665C1170.6205 386.52132 1172.5071 388.82767 1172.4701 391.30616C1172.4701 391.30616 1172.4701 391.30616 1172.4701 391.30616\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     d=\"M1169.7896 383.7577C1169.6496 362.70067 1170.0855 341.62881 1169.5407 320.58211C1167.4279 287.74654 1143.7345 257.76681 1112.3634 247.94146C1095.5899 242.12075 1077.7003 244.3038 1060.3076 243.87527C1056.4288 243.87527 1052.5499 243.87527 1048.6711 243.87527C1045.7591 235.25294 1035.5127 239.09536 1032.2094 243.87527C1027.3471 244.09145 1022.3684 243.40372 1017.5913 244.29658C1012.5936 246.77765 1014.8116 252.97997 1014.317 257.42471C1014.389 274.71107 1014.1723 292.01196 1014.4259 309.2892C1015.8465 315.10721 1022.5542 313.27776 1026.9566 313.56987C1031.1118 313.272 1034.6191 313.11846 1036.4926 317.45607C1043.1632 323.16312 1046.4981 313.2284 1051.8554 313.56987C1064.3628 313.73636 1076.9132 313.22619 1089.3919 313.84486C1096.9238 315.14937 1101.0416 323.01712 1100.095 330.15702C1100.095 348.02391 1100.095 365.8908 1100.095 383.7577C1090.937 386.52796 1094.8665 401.18552 1104.1402 399.34784C1125.6068 399.26444 1147.088 399.51508 1168.5454 399.2218C1176.504 398.05155 1177.4729 386.20105 1169.7896 383.7577C1169.7896 383.7577 1169.7896 383.7577 1169.7896 383.7577M1033.0809 308.20875C1028.6133 308.20875 1024.1457 308.20875 1019.6781 308.20875C1019.6781 288.5513 1019.6781 268.89385 1019.6781 249.2364C1024.1457 249.2364 1028.6133 249.2364 1033.0809 249.2364C1033.0809 268.89385 1033.0809 288.5513 1033.0809 308.20875C1033.0809 308.20875 1033.0809 308.20875 1033.0809 308.20875M1043.8032 310.88931C1041.0335 317.46171 1036.9553 309.89812 1038.4421 305.88534C1038.4421 286.10884 1038.4421 266.33234 1038.4421 246.55584C1041.2117 239.98343 1045.2899 247.54703 1043.8032 251.5598C1043.8032 271.33631 1043.8032 291.11281 1043.8032 310.88931C1043.8032 310.88931 1043.8032 310.88931 1043.8032 310.88931M1099.7974 313.56987C1096.1808 307.43448 1087.3019 311.08377 1084.1083 305.66361C1081.3148 303.524 1082.0009 301.06952 1083.8262 298.51195C1085.1133 295.55092 1088.2388 292.07795 1085.2459 289.12901C1082.9997 286.57949 1082.0422 282.25427 1078.4906 281.41377C1073.1035 283.41567 1078.626 288.28981 1080.2187 291.25434C1081.6679 293.63785 1078.2943 296.32134 1077.6758 298.83345C1075.0306 301.98224 1076.6623 305.50657 1079.2355 308.09521C1072.8947 308.36026 1065.5692 308.13301 1058.8498 308.20875C1055.6213 308.20875 1052.3928 308.20875 1049.1643 308.20875C1049.1643 288.5513 1049.1643 268.89385 1049.1643 249.2364C1064.3195 249.42743 1079.5032 248.80661 1094.6363 249.64625C1125.925 252.44825 1153.8489 276.23561 1161.7172 306.62656C1165.9086 321.70953 1163.9876 337.46515 1164.4284 352.90233C1164.4284 363.02304 1164.4284 373.14376 1164.4284 383.26447C1144.771 383.26447 1125.1135 383.26447 1105.4561 383.26447C1105.4561 376.48623 1105.4561 369.70798 1105.4561 362.92973C1108.1868 365.14594 1110.1094 368.74662 1113.4978 369.86109C1116.6416 370.03342 1118.1123 363.17299 1120.9304 366.72322C1123.9739 368.55992 1126.4228 371.85871 1129.9602 372.51529C1135.4825 370.02825 1129.1405 366.0001 1126.4585 364.16895C1123.5797 362.60217 1121.2831 358.80154 1117.759 359.37544C1115.382 360.98379 1113.4417 365.32099 1111.2461 361.13912C1109.4479 359.00288 1106.7086 357.25645 1105.4561 354.8942C1105.3025 344.55535 1105.7778 334.18163 1105.191 323.86656C1101.9814 318.39309 1105.4488 318.6 1109.9886 318.931C1113.7944 319.81896 1116.9973 317.61612 1116.6647 313.54909C1117.2996 311.34798 1117.2369 306.96937 1118.2879 306.06698C1120.9577 310.26476 1124.7842 306.60425 1126.4148 303.49033C1128.3254 301.69946 1129.3191 298.0738 1131.8312 297.4865C1135.3316 297.08363 1139.383 298.45139 1142.4153 296.45588C1143.5521 292.67981 1141.1164 288.73318 1140.5866 284.88945C1138.8823 277.69699 1132.7333 284.12614 1136.015 288.70448C1138.2346 292.65819 1135.0042 292.35593 1131.8656 292.12538C1127.1187 291.17236 1125.4265 296.52091 1122.7973 299.38481C1120.6099 304.92509 1117.8504 293.99471 1114.1515 298.41549C1112.4775 303.24899 1112.287 308.54488 1111.2273 313.56987C1107.4174 313.56987 1103.6074 313.56987 1099.7974 313.56987C1099.7974 313.56987 1099.7974 313.56987 1099.7974 313.56987M1167.109 393.98672C1145.6645 393.98672 1124.22 393.98672 1102.7755 393.98672C1096.2031 391.21707 1103.7667 387.13885 1107.7795 388.6256C1127.556 388.6256 1147.3325 388.6256 1167.109 388.6256C1170.6142 388.5885 1170.6151 394.01527 1167.109 393.98672C1167.109 393.98672 1167.109 393.98672 1167.109 393.98672\"\n     id=\"path1084\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#000000\" />\n  <g\n     id=\"g1995\">\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#adfcf9\"\n       d=\"M1089.3727 359.13942C1089.8498 371.65302 1075.7606 381.53376 1064.1571 376.76476C1053.3603 373.18799 1049.0624 359.87783 1053.5765 349.95117C1057.1641 340.22022 1063.5511 331.78013 1070.6088 324.29212C1079.4495 334.00326 1088.6429 345.48931 1089.3727 359.13942C1089.3727 359.13942 1089.3727 359.13942 1089.3727 359.13942\"\n       id=\"path1080\" />\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#23baf7\"\n       d=\"M1070.6088 324.29212C1062.3677 329.4119 1073.5007 335.03764 1075.4566 341.15191C1080.7867 349.86596 1084.5034 362.13169 1077.1859 370.89641C1075.2827 375.6111 1061.0272 378.27897 1071.8173 377.8663C1083.1695 377.51103 1091.8206 365.47438 1088.9089 354.56296C1086.2761 342.87531 1078.6114 332.90101 1070.6088 324.29212C1070.6088 324.29212 1070.6088 324.29212 1070.6088 324.29212\"\n       id=\"path1082\" />\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#000000\"\n       id=\"path1086\"\n       d=\"M1068.7136 322.39696C1059.1215 332.86169 1049.2946 345.3966 1049.1922 360.24295C1049.4005 373.7335 1064.2516 384.08689 1076.9857 379.61981C1088.7336 376.30779 1095.0612 362.36541 1090.8191 351.1058C1087.169 339.9106 1080.103 329.84219 1071.6173 321.80834C1070.6467 321.40227 1069.4486 321.63981 1068.7136 322.39696C1068.7136 322.39696 1068.7136 322.39696 1068.7136 322.39696M1070.6088 375.22279C1059.66 375.62355 1051.698 363.53602 1055.2951 353.47137C1057.9862 343.8475 1064.116 335.63425 1070.6088 328.21646C1078.3869 337.41194 1086.9673 348.09625 1086.6076 360.78315C1085.9355 368.77866 1078.6363 375.37456 1070.6088 375.22279C1070.6088 375.22279 1070.6088 375.22279 1070.6088 375.22279\" />\n  </g>\n  <path\n     id=\"path1629\"\n     d=\"M498.4048 366.93052C498.4048 366.93052 498.4048 369.74485 498.4048 369.74485C498.4078 371.98575 497.51823 374.13516 495.93452 375.72015C494.34953 377.30515 492.20012 378.19301 489.95922 378.19043C489.95922 378.19043 394.24875 378.19043 394.24875 378.19043C392.00786 378.19343 389.85845 377.30515 388.27345 375.72015C386.68975 374.13516 385.80061 371.98575 385.80318 369.74485C385.80318 369.74485 385.80318 366.93052 385.80318 366.93052C385.79518 365.95891 385.96684 364.99502 386.30961 364.08655C387.14592 361.70262 389.02085 359.82769 391.40607 358.99138C392.31326 358.6486 393.27714 358.47722 394.24875 358.48495C397.34916 358.46305 399.85551 355.9554 399.87871 352.855C399.87871 352.855 399.87871 294.94987 399.87871 294.94987C399.86971 282.09853 405.47386 269.88376 415.22094 261.50777C422.14595 255.50026 430.89177 252.00038 440.04865 251.57128C451.58819 251.01202 462.85324 255.20516 471.22021 263.17266C479.58589 271.14016 484.32412 282.18615 484.32928 293.73986C484.32928 293.73986 484.32928 352.855 484.32928 352.855C484.33828 355.96056 486.85367 358.47593 489.95922 358.48495C494.62014 358.49295 498.39707 362.26961 498.4048 366.93052C498.4048 366.93052 498.4048 366.93052 498.4048 366.93052M498.4048 366.93052\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1631\"\n     d=\"M489.95922 372.56048C489.95922 372.56048 489.95922 375.37481 489.95922 375.37481C489.96522 376.3374 489.793 377.29097 489.4528 378.19043C489.4528 378.19043 394.24875 378.19043 394.24875 378.19043C392.00786 378.19343 389.85845 377.30515 388.27345 375.72015C386.68975 374.13516 385.80061 371.98575 385.80318 369.74485C385.80318 369.74485 385.80318 366.93052 385.80318 366.93052C385.79518 365.95891 385.96684 364.99502 386.30961 364.08655C389.00925 363.82754 391.14577 361.69102 391.40607 358.99138C392.31326 358.6486 393.27714 358.47722 394.24875 358.48495C397.34916 358.46305 399.85551 355.9554 399.87871 352.855C399.87871 352.855 399.87871 294.94987 399.87871 294.94987C399.86971 282.09853 405.47387 269.88376 415.22094 261.50777C420.3174 258.93441 425.90097 257.46668 431.60437 257.20123C443.1439 256.64326 454.40767 260.83512 462.77464 268.80262C471.14032 276.77011 475.87855 287.81739 475.8837 299.36981C475.8837 299.36981 475.8837 358.48495 475.8837 358.48495C475.8927 361.59051 478.4081 364.10588 481.51365 364.1149C486.17586 364.1229 489.95278 367.89956 489.95922 372.56048C489.95922 372.56048 489.95922 372.56048 489.95922 372.56048M489.95922 372.56048\"\n     style=\"stroke-width:0.32988504;fill:#fec108\" />\n  <path\n     id=\"path1633\"\n     d=\"M411.13861 297.75776C410.3925 297.75776 409.67604 297.46137 409.1477 296.93304C408.62066 296.40471 408.32299 295.68953 408.32428 294.94214C408.18769 276.66702 422.21553 261.40211 440.43781 260.0001C440.99321 259.973 441.55118 259.9602 442.10141 259.9602C443.65548 259.9602 444.91574 261.22046 444.91574 262.77453C444.91574 264.32989 443.65548 265.59015 442.10141 265.59015C441.6388 265.59015 441.1749 265.60175 440.70713 265.62365C425.47314 266.85298 413.78671 279.65922 413.95423 294.94218C413.95423 295.68957 413.65785 296.40475 413.12952 296.93308C412.60119 297.46141 411.886 297.7578 411.13861 297.7578C411.13861 297.7578 411.13861 297.75776 411.13861 297.75776M411.13861 297.75776\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1635\"\n     d=\"M450.54956 243.069C450.54956 243.069 450.54956 252.35862 450.54956 252.35862C450.54956 252.35862 433.65842 252.35862 433.65842 252.35862C433.65842 252.35862 433.65842 243.069 433.65842 243.069C433.65842 238.40551 437.4405 234.62472 442.10399 234.62472C446.76748 234.62472 450.54956 238.40551 450.54956 243.069C450.54956 243.069 450.54956 243.069 450.54956 243.069M450.54956 243.069\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1637\"\n     d=\"M442.10399 243.069C442.10399 243.069 442.10399 252.35862 442.10399 252.35862C442.10399 252.35862 433.65842 252.35862 433.65842 252.35862C433.65842 252.35862 433.65842 243.069 433.65842 243.069C433.65442 240.04978 435.26532 237.25865 437.88121 235.75097C438.5152 236.12982 439.10023 236.58341 439.62727 237.10144C441.21227 238.68256 442.10399 240.83068 442.10399 243.069C442.10399 243.069 442.10399 243.069 442.10399 243.069M442.10399 243.069\"\n     style=\"stroke-width:0.32988504;fill:#fec108\" />\n  <path\n     id=\"path1639\"\n     d=\"M461.80947 378.19043C461.81347 383.41833 459.73867 388.43233 456.04163 392.12807C452.34589 395.8251 447.33189 397.89977 442.10399 397.8959C440.68523 397.8909 439.27033 397.73998 437.88121 397.44489C428.839 395.45914 422.39851 387.44782 422.39851 378.19043C422.39851 378.19043 461.80947 378.19043 461.80947 378.19043M461.80947 378.19043\"\n     style=\"stroke-width:0.32988504;fill:#d84315\" />\n  <path\n     id=\"path1641\"\n     d=\"M453.36389 378.19043C453.36489 387.44782 446.9234 395.45914 437.88121 397.44489C428.839 395.45914 422.39851 387.44782 422.39851 378.19043C422.39851 378.19043 453.36389 378.19043 453.36389 378.19043M453.36389 378.19043\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1643\"\n     d=\"M411.13861 319.07529C410.3925 319.07529 409.67604 318.77891 409.1477 318.25058C408.62066 317.72224 408.32299 317.00706 408.32428 316.25967C408.32428 316.25967 408.32428 307.81538 408.32428 307.81538C408.32428 306.26003 409.58454 304.99976 411.13861 304.99976C412.69397 304.99976 413.95423 306.26003 413.95423 307.81538C413.95423 307.81538 413.95423 316.25967 413.95423 316.25967C413.95423 317.00706 413.65785 317.72224 413.12952 318.25058C412.60119 318.77891 411.886 319.07529 411.13861 319.07529C411.13861 319.07529 411.13861 319.07529 411.13861 319.07529M411.13861 319.07529\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1645\"\n     d=\"M419.58418 361.30057C419.58418 361.30057 411.13861 361.30057 411.13861 361.30057C409.58454 361.30057 408.32428 360.04031 408.32428 358.48495C408.32428 356.93088 409.58454 355.67062 411.13861 355.67062C411.13861 355.67062 419.58418 355.67062 419.58418 355.67062C421.13825 355.67062 422.39851 356.93088 422.39851 358.48495C422.39851 360.04031 421.13825 361.30057 419.58418 361.30057C419.58418 361.30057 419.58418 361.30057 419.58418 361.30057M419.58418 361.30057\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1647\"\n     d=\"M473.06937 361.30057C473.06937 361.30057 430.84408 361.30057 430.84408 361.30057C429.28873 361.30057 428.02847 360.04031 428.02847 358.48495C428.02847 356.93088 429.28873 355.67062 430.84408 355.67062C430.84408 355.67062 473.06937 355.67062 473.06937 355.67062C474.62344 355.67062 475.8837 356.93088 475.8837 358.48495C475.8837 360.04031 474.62344 361.30057 473.06937 361.30057C473.06937 361.30057 473.06937 361.30057 473.06937 361.30057M473.06937 361.30057\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <g\n     id=\"g1657\"\n     style=\"fill:#c03a2b\">\n    <path\n       id=\"path1649\"\n       d=\"M372.81653655 345.011209826C372.07042931 345.011209826 371.35396059 344.71482792 370.826917463 344.186497251C353.265694069 326.585326429 353.265694069 298.090217113 370.826917463 280.48904959C371.536943528 279.773868741 372.575565762 279.491661995 373.549757821 279.751961077C374.525238081 280.010973607 375.285519822 280.772542888 375.545819893 281.746736267C375.804831104 282.720926347 375.523912228 283.75954957 374.807444498 284.469574316C359.440729474 299.871081654 359.440729474 324.804461888 374.807444498 340.205969226C375.61282779 341.010063987 375.852509717 342.221362231 375.416958553 343.272870764C374.98140706 344.324379297 373.955670794 345.009919975 372.817825411 345.011209826C372.817825411 345.011209826 372.81653655 345.011209826 372.81653655 345.011209826M372.81653655 345.011209826\" />\n    <path\n       id=\"path1651\"\n       d=\"M382.768497909 335.057958287C382.022390669 335.059277827 381.305921619 334.761579679 380.778878822 334.233245712C368.704571443 322.133168375 368.704571443 302.542378466 380.778878822 290.44229783C381.878065968 289.345687416 383.657640989 289.348263818 384.755539934 290.446157485C385.85343822 291.544054451 385.85472708 293.323632441 384.759406187 294.422819257C374.88218457 304.324522961 374.88218457 320.351007385 384.759406187 330.252714388C385.563500947 331.058095701 385.804471735 332.268104094 385.368920242 333.319612627C384.933369078 334.37112116 383.907632813 335.057951689 382.768498569 335.057951689C382.768498569 335.057951689 382.768497909 335.057958287 382.768497909 335.057958287M382.768497909 335.057958287\" />\n    <path\n       id=\"path1653\"\n       d=\"M511.391443037 345.011209826C510.252310442 345.011209826 509.226572527 344.324379297 508.791022023 343.272870764C508.355471519 342.221362231 508.595152787 341.011353837 509.400537398 340.205969226C524.765961911 324.804461888 524.765961911 299.871081654 509.400537398 284.469574316C508.309079788 283.369100948 508.31294604 281.593389211 509.409543259 280.498068647C510.504863823 279.402748083 512.28057556 279.39888183 513.381048929 280.489062785C530.946140224 298.088943756 530.946140224 326.586629475 513.381048929 344.186510446C512.85400811 344.714841115 512.137537411 345.011223021 511.391429841 345.011223021C511.391429841 345.011223021 511.391443037 345.011209826 511.391443037 345.011209826M511.391443037 345.011209826\" />\n    <path\n       id=\"path1655\"\n       d=\"M501.439481348 335.057958287C500.300348753 335.057958287 499.274610839 334.372417608 498.839060335 333.319619225C498.403509831 332.268110692 498.644480949 331.058102298 499.448575709 330.252720986C509.342550207 320.358746488 509.342550207 304.318086904 499.448575709 294.422825855C498.353255145 293.323639038 498.354541697 291.544064347 499.452435364 290.446164082C500.55033233 289.348267116 502.329907021 289.346977266 503.429097137 290.442304428C515.521445268 302.534652559 515.521445268 322.140904179 503.429097137 334.23325231C502.90205302 334.761586277 502.185582321 335.059254735 501.439474751 335.057964885C501.439474751 335.057964885 501.439481348 335.057958287 501.439481348 335.057958287M501.439481348 335.057958287\" />\n  </g>\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1659\"\n     d=\"M440.43781 260.0001C422.21553 261.40211 408.18769 276.66702 408.32428 294.94214C408.32428 296.49749 409.58454 297.75776 411.13861 297.75776C412.69397 297.75776 413.95423 296.49749 413.95423 294.94214C413.78671 279.65918 425.47314 266.85294 440.70713 265.62361C441.1749 265.60041 441.6388 265.58881 442.10141 265.59011C443.65548 265.59011 444.91574 264.32985 444.91574 262.77449C444.91574 261.22042 443.65548 259.96016 442.10141 259.96016C441.55118 259.96016 440.99321 259.97306 440.43781 260.00006C440.43781 260.00006 440.43781 260.0001 440.43781 260.0001M440.43781 260.0001\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1661\"\n     d=\"M450.06247 235.11053C446.84351 231.88899 442.0009 230.92382 437.79229 232.66603C433.58497 234.40823 430.84151 238.51504 430.84408 243.069C430.84408 243.069 430.84408 250.14865 430.84408 250.14865C410.71466 255.67164 396.84016 274.07046 397.06309 294.94214C397.06309 294.94214 397.06309 352.855 397.06309 352.855C397.06209 354.40907 395.80282 355.66933 394.24875 355.67062C388.03248 355.67662 382.99529 360.71425 382.98885 366.93052C382.98885 366.93052 382.98885 369.74485 382.98885 369.74485C382.99485 375.96113 388.03248 380.99831 394.24875 381.00605C394.24875 381.00605 419.77876 381.00605 419.77876 381.00605C421.18851 392.26337 430.75904 400.71024 442.10399 400.71024C453.44894 400.71024 463.01947 392.26337 464.42922 381.00605C464.42922 381.00605 489.95922 381.00605 489.95922 381.00605C496.1755 380.99805 501.21269 375.96113 501.21913 369.74485C501.21913 369.74485 501.21913 366.93052 501.21913 366.93052C501.21313 360.71425 496.1755 355.67706 489.95922 355.67062C488.40516 355.66962 487.14618 354.40907 487.14489 352.855C487.14489 352.855 487.14489 293.73986 487.14489 293.73986C487.12429 273.20452 473.24076 255.27217 453.36389 250.10999C453.36389 250.10999 453.36389 243.069 453.36389 243.069C453.37189 240.082 452.18224 237.21612 450.06247 235.11053C450.06247 235.11053 450.06247 235.11053 450.06247 235.11053M436.47404 243.069C436.47404 239.95958 438.99457 237.43905 442.10399 237.43905C445.21341 237.43905 447.73394 239.95958 447.73394 243.069C447.73394 243.069 447.73394 249.08812 447.73394 249.08812C445.13739 248.75179 442.51506 248.63968 439.89917 248.75179C438.74071 248.80719 437.60673 248.94508 436.47404 249.08812C436.47404 249.08812 436.47404 243.069 436.47404 243.069M442.10399 395.08028C433.87104 395.06608 426.84552 389.12302 425.46799 381.00605C425.46799 381.00605 458.73999 381.00605 458.73999 381.00605C457.36246 389.12302 450.33694 395.06611 442.10399 395.08028C442.10399 395.08028 442.10399 395.08028 442.10399 395.08028M469.28987 265.21383C477.1285 272.62722 481.5536 282.95159 481.51365 293.73986C481.51365 293.73986 481.51365 352.855 481.51365 352.855C481.51865 357.5172 485.29702 361.29542 489.95922 361.30057C493.06736 361.30457 495.58531 363.82239 495.58918 366.93052C495.58918 366.93052 495.58918 369.74485 495.58918 369.74485C495.58518 372.85299 493.06736 375.37223 489.95922 375.37481C489.95922 375.37481 394.24875 375.37481 394.24875 375.37481C391.14062 375.37181 388.62267 372.85299 388.6188 369.74485C388.6188 369.74485 388.6188 366.93052 388.6188 366.93052C388.6228 363.82239 391.14062 361.30444 394.24875 361.30057C398.91096 361.29557 402.68917 357.5172 402.69433 352.855C402.69433 352.855 402.69433 294.94214 402.69433 294.94214C402.33996 273.5795 418.84452 255.71417 440.16849 254.37659C440.82311 254.34439 441.47128 254.33019 442.12074 254.33019C452.24538 254.30059 461.98472 258.20376 469.28987 265.21382C469.28987 265.21382 469.28987 265.21383 469.28987 265.21383M469.28987 265.21383\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1663\"\n     d=\"M411.13861 319.07529C411.886 319.07529 412.60119 318.77891 413.12952 318.25058C413.65785 317.72224 413.95423 317.00706 413.95423 316.25967C413.95423 316.25967 413.95423 307.81538 413.95423 307.81538C413.95423 306.26003 412.69397 304.99976 411.13861 304.99976C409.58454 304.99976 408.32428 306.26003 408.32428 307.81538C408.32428 307.81538 408.32428 316.25967 408.32428 316.25967C408.32328 317.00706 408.62066 317.72224 409.1477 318.25058C409.67604 318.77891 410.3925 319.07529 411.13861 319.07529C411.13861 319.07529 411.13861 319.07529 411.13861 319.07529M411.13861 319.07529\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1665\"\n     d=\"M419.58418 355.67062C419.58418 355.67062 411.13861 355.67062 411.13861 355.67062C409.58454 355.67062 408.32428 356.93088 408.32428 358.48495C408.32428 360.04031 409.58454 361.30057 411.13861 361.30057C411.13861 361.30057 419.58418 361.30057 419.58418 361.30057C421.13825 361.30057 422.39851 360.04031 422.39851 358.48495C422.39851 356.93088 421.13825 355.67062 419.58418 355.67062C419.58418 355.67062 419.58418 355.67062 419.58418 355.67062M419.58418 355.67062\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1667\"\n     d=\"M428.02847 358.48495C428.02847 359.23235 428.32485 359.94753 428.85318 360.47586C429.38151 361.00419 430.09669 361.30057 430.84408 361.30057C430.84408 361.30057 473.06937 361.30057 473.06937 361.30057C474.62344 361.30057 475.8837 360.04031 475.8837 358.48495C475.8837 356.93088 474.62344 355.67062 473.06937 355.67062C473.06937 355.67062 430.84408 355.67062 430.84408 355.67062C430.09669 355.67062 429.38151 355.967 428.85318 356.49404C428.32485 357.02238 428.02847 357.73884 428.02847 358.48495C428.02847 358.48495 428.02847 358.48495 428.02847 358.48495M428.02847 358.48495\" />\n  <g\n     id=\"g1891\">\n    <path\n       d=\"M370.82692 280.48905C353.26569 298.09022 353.26569 326.58533 370.82692 344.1865C371.53823 344.89781 372.57428 345.17486 373.54589 344.91456C374.51751 344.65426 375.27521 343.89527 375.53551 342.92494C375.79581 341.95333 375.51871 340.91728 374.80744 340.20597C359.44073 324.80446 359.44073 299.87108 374.80744 284.46957C375.90663 283.37039 375.90663 281.58824 374.80744 280.48905C373.70826 279.38986 371.9261 279.38986 370.82692 280.48905C370.82692 280.48905 370.82692 280.48905 370.82692 280.48905M370.82692 280.48905\"\n       id=\"path1669\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M384.75941 290.4423C384.23107 289.91397 383.51461 289.61759 382.7685 289.61759C382.02239 289.61759 381.30592 289.91397 380.77888 290.4423C368.70457 302.54238 368.70457 322.13317 380.77888 334.23325C381.87807 335.32986 383.65764 335.32728 384.75554 334.22925C385.85344 333.13135 385.85473 331.35177 384.75954 330.25258C374.88231 320.35088 374.88231 304.32439 384.75954 294.42269C385.28658 293.89565 385.58425 293.17918 385.58425 292.43307C385.58425 291.68567 385.28658 290.97049 384.75954 290.44216C384.75954 290.44216 384.75941 290.4423 384.75941 290.4423M384.75941 290.4423\"\n       id=\"path1671\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M509.40054 280.48905C508.8722 281.01738 508.57582 281.73385 508.57582 282.47996C508.57582 283.22606 508.8722 283.94253 509.40054 284.46957C524.76596 299.87108 524.76596 324.80446 509.40054 340.20597C508.30135 341.30516 508.30135 343.08731 509.40054 344.1865C510.49972 345.28568 512.28188 345.28568 513.38106 344.1865C530.94615 326.58662 530.94615 298.08893 513.38106 280.48905C512.85273 279.96201 512.13755 279.66434 511.39144 279.66434C510.64405 279.66434 509.92887 279.96201 509.40054 280.48905C509.40054 280.48905 509.40054 280.48905 509.40054 280.48905M509.40054 280.48905\"\n       id=\"path1673\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M499.44858 334.23325C499.97691 334.76158 500.69338 335.05796 501.43948 335.05796C502.18559 335.05796 502.90206 334.76158 503.4291 334.23325C515.52145 322.1409 515.52145 302.53465 503.4291 290.4423C502.32991 289.34698 500.55034 289.34826 499.45244 290.4463C498.35454 291.54419 498.35326 293.32377 499.44844 294.42296C509.34113 304.31822 509.34113 320.35759 499.44844 330.25285C498.9214 330.7799 498.62373 331.49637 498.62373 332.24247C498.62373 332.98987 498.9214 333.70505 499.44844 334.23338C499.44844 334.23338 499.44858 334.23325 499.44858 334.23325M499.44858 334.23325\"\n       id=\"path1675\"\n       style=\"stroke-width:0.32988504\" />\n  </g>\n  <g\n     id=\"g1721\">\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill-opacity:1;fill:#f6511d\"\n       id=\"path1021\"\n       d=\"M524.751956 271.0061238C524.755956 290.9354738 510.732396 308.1144038 491.205706 312.1002738C488.445966 312.6642038 485.635906 312.9452038 482.819146 312.9389338C465.858906 312.9389338 450.568676 302.7223338 444.078276 287.0531138C437.587876 271.3839038 441.175466 253.3478538 453.168166 241.3551538C465.160866 229.3624538 483.196916 225.7748538 498.866136 232.2652638C514.535346 238.7556638 524.751956 254.0458838 524.751956 271.0061238C524.751956 271.0061238 524.751956 271.0061238 524.751956 271.0061238\" />\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill-opacity:1;fill:#ad3014\"\n       id=\"path1023\"\n       d=\"M482.819146 229.0733138C481.455706 229.0773138 480.093396 229.1520138 478.737686 229.2969538C499.342946 231.4130938 515.315966 248.2574438 516.335726 268.9459638C517.355476 289.6344838 503.116416 307.9680138 482.819146 312.1002738C481.451846 312.3848138 480.070926 312.5994138 478.681776 312.7432438C480.023626 312.9389338 481.421386 312.9389338 482.819146 312.9389338C485.635906 312.9449338 488.445966 312.6641938 491.205706 312.1002738C512.317976 307.8133038 526.746856 288.2259638 524.581796 266.7919138C522.416746 245.3578538 504.362256 229.0516638 482.819146 229.0733138C482.819146 229.0733138 482.819146 229.0733138 482.819146 229.0733138\" />\n    <g\n       style=\"fill:#f5f5f5;fill-rule:nonzero\"\n       id=\"g1028\">\n      <path\n         id=\"path1025\"\n         d=\"M482.8191419 279.3926864C479.592666524 279.392194388 476.866197981 277.000556541 476.445354704 273.801645C476.445354704 273.801645 473.230505899 251.4374794 473.230505899 251.4374794C472.797982936 248.63890068 473.609953106 245.791050628 475.453308273 243.6413637C477.296666236 241.491676492 479.987338137 240.254813734 482.8191419 240.2553966C485.650945663 240.254813734 488.341617564 241.491676492 490.184975527 243.6413637C492.028330694 245.791050907 492.840300864 248.638900959 492.407777901 251.4374794C492.407777901 251.4374794 489.192929096 273.801645 489.192929096 273.801645C488.772085819 277.000556541 486.045617276 279.392194388 482.8191419 279.3926864C482.8191419 279.3926864 482.8191419 279.3926864 482.8191419 279.3926864\" />\n      <circle\n         transform=\"matrix(2.795521,0.000000,0.000000,2.795521,379.384876,229.073314)\"\n         id=\"Oval-6\"\n         cx=\"37\"\n         cy=\"24\"\n         r=\"2\" />\n    </g>\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill:#000000\"\n       id=\"path1033\"\n       d=\"M482.819146 237.4598738C479.197206 237.4548738 475.752096 239.0251338 473.379976 241.7621938C471.007856 244.4992638 469.943196 248.1325738 470.462946 251.7170338C470.462946 251.7170338 473.677786 274.2489338 473.677786 274.2489338C474.298706 278.8222838 478.203826 282.2330438 482.819146 282.2330438C487.434456 282.2330438 491.339586 278.8222838 491.960496 274.2489338C491.960496 274.2489338 495.175346 251.7170338 495.175346 251.7170338C495.695086 248.1325738 494.630426 244.4992638 492.258306 241.7621938C489.886186 239.0251338 486.441086 237.4548738 482.819146 237.4598738C482.819146 237.4598738 482.819146 237.4598738 482.819146 237.4598738M489.640216 250.9342838C489.640216 250.9342838 486.425366 273.4661838 486.425366 273.4661838C486.198426 275.2852138 484.652276 276.6504638 482.819146 276.6504638C480.986006 276.6504638 479.439856 275.2852138 479.212916 273.4661838C479.212916 273.4661838 475.998076 250.9342838 475.998076 250.9342838C475.574606 248.2420538 476.774316 245.5525838 479.060496 244.0690738C481.346686 242.5855638 484.291596 242.5855638 486.577786 244.0690738C488.863976 245.5525838 490.063686 248.2420538 489.640216 250.9342838C489.640216 250.9342838 489.640216 250.9342838 489.640216 250.9342838\" />\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill:#000000\"\n       id=\"path1035\"\n       d=\"M482.819146 287.7792538C478.187376 287.7792538 474.432576 291.5340438 474.432576 296.1658138C474.432576 300.7975838 478.187376 304.5523738 482.819146 304.5523738C487.450916 304.5523738 491.205706 300.7975838 491.205706 296.1658138C491.205706 291.5340438 487.450916 287.7792538 482.819146 287.7792538C482.819146 287.7792538 482.819146 287.7792538 482.819146 287.7792538M482.819146 298.9613338C481.275216 298.9613338 480.023626 297.7097338 480.023626 296.1658138C480.023626 294.6218838 481.275216 293.3702938 482.819146 293.3702938C484.363066 293.3702938 485.614666 294.6218838 485.614666 296.1658138C485.614666 297.7097338 484.363066 298.9613338 482.819146 298.9613338C482.819146 298.9613338 482.819146 298.9613338 482.819146 298.9613338\" />\n    <path\n       d=\"M524.751956 271.0061238C524.755956 290.9354738 510.732396 308.1144038 491.205706 312.1002738C488.445966 312.6642038 485.635906 312.9452038 482.819146 312.9389338C465.858906 312.9389338 450.568676 302.7223338 444.078276 287.0531138C437.587876 271.3839038 441.175466 253.3478538 453.168166 241.3551538C465.160866 229.3624538 483.196916 225.7748538 498.866136 232.2652638C514.535346 238.7556638 524.751956 254.0458838 524.751956 271.0061238C524.751956 271.0061238 524.751956 271.0061238 524.751956 271.0061238\"\n       id=\"path1711\"\n       style=\"stroke-opacity:1;fill-rule:nonzero;fill-opacity:1;stroke:#000000;stroke-miterlimit:4;stroke-dasharray:none;stroke-width:4.91338587;fill:none\" />\n  </g>\n</svg>\n>\n    ",
  initSource: "options.animateLogo = (svgmap, data) => {\n    let buffer = data.series[0].fields[1].values.buffer;\n    let valueCount = buffer.length\n    let chartData = [];\n    for (let i=0; i<valueCount; i+=(Math.floor(valueCount / 4)-1)) {\n        chartData.push(buffer[i])\n    }\n    let minData = chartData.reduce((acc, val) => {\n        return Math.min(acc, val);\n    });\n    let maxData = 1.05 * chartData.reduce((acc, val) => {\n        return Math.max(acc, val);\n    });\n    let spread = maxData - minData;\n    let iconHeight = svgmap.iconbg.height();\n    let iconY = svgmap.iconbg.y();\n    [svgmap.barOne, svgmap.barTwo, svgmap.barThree, svgmap.barFour].forEach((elem) => {\n        elem.animate(1000).ease('<>').move(elem.x(),  ((iconHeight * (chartData[0] / maxData)) - elem.height())).loop(0, true);\n    });\n    }\n    ",
  eventSource: "// example of calling a function defined in the init script\noptions.animateLogo(svgmap, data);\n// Here we're going to initialized some variables just to make things less verbose\n// This is the raw buffer from the values field of the DataFrame\nlet buffer = data.series[0].fields[1].values.buffer;\n// here we collect the most recent value from the Data Frame\nlet lastValue = buffer[buffer.length -1]\n// We need to collect the center of the fan as a static value here, otherwise it will cause a feedback loop in the animation.\n// The rotate animation will use the center of the bounding box by default, but of irregular shaped items, like these fan blades\n// the center is not the center axis of rotation\nconst fanX = svgmap.fanBlades.cx();\nconst fanY = svgmap.fanBlades.cy();\n// Here we're defining a state condition to use later in our pipe animation\nlet leakCond = lastValue > 10 && lastValue < 45;\n\n// Here we're simply making the visibility of the alert icon on top of tbe bell dependent on the last value being greater than 50\nsvgmap.alarmIcon.showOn(lastValue > 50);\n// Now we use the same logic to apply an animation to the sound waves around the bell\nsvgmap.alarmRings.animateOn(1500, (lastValue > 50), (elem) => {\n    // this callback is passed the resulting SVG.js runner object which you then chain your animation actions on.\n    // Here, we're simply scaling the dark sound wave lines by 10%, with bidirectional easing and looping with swing\n    elem.ease('<>').transform({scale: 1.1, relative: true}).loop(0, true);\n})\n// Here we animate the fan, using the static variables we create earlier to get closer to the center of the blades\n// if the item we were rotating was centered in the bounding box, we could just call rotate(360) with no axis specificied\nsvgmap.fanBlades.animateOn(1000, (lastValue > 40), (elem) => {\n    elem.ease('-').rotate(360, fanX - 1, fanY +3).loop();\n});\n// these simply hide the elements of the lamp when below the threshold\nsvgmap.lampLens.showOn(lastValue>10);\nsvgmap.lampRays.showOn(lastValue>10);\n// Here we hide the water drop when leakCond is false\nsvgmap.waterDrop.showOn(leakCond)\n// and here we animate the water drop when leakCond is true\nsvgmap.waterDrop.animateOn(2000 - lastValue *20, leakCond, (elem) => {\n    // we're using single direction easing to give a gravity affect, and scaling the drop down as it falls off the screen\n    elem.ease('<').transform({translateY: 1000, scale: 0.00001}).loop();\n})\n",
  svgMappings: [{
    mappedName: 'barTwo',
    svgId: 'rect4526'
  }, {
    mappedName: 'barThree',
    svgId: 'rect4528'
  }, {
    mappedName: 'barFour',
    svgId: 'rect4530'
  }, {
    mappedName: 'iconbg',
    svgId: 'rect4522'
  }, {
    mappedName: 'spline',
    svgId: 'path4538'
  }, {
    mappedName: 'barOne',
    svgId: 'rect4524'
  }, {
    mappedName: 'fanBlades',
    svgId: 'g1550'
  }, {
    mappedName: 'alarmIcon',
    svgId: 'g1721'
  }, {
    mappedName: 'lampLens',
    svgId: 'g1942'
  }, {
    mappedName: 'lampRays',
    svgId: 'g1917'
  }, {
    mappedName: 'waterDrop',
    svgId: 'g1995'
  }, {
    mappedName: 'alarmRings',
    svgId: 'g1891'
  }]
};

/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/data */ "@grafana/data");
/* harmony import */ var _grafana_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ACESVGjsPanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ACESVGjsPanel */ "./ACESVGjsPanel.tsx");
/* harmony import */ var _options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options */ "./options.tsx");



var plugin = new _grafana_data__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_ACESVGjsPanel__WEBPACK_IMPORTED_MODULE_1__["ACESVGPanel"]).useFieldConfig().setPanelOptions(_options__WEBPACK_IMPORTED_MODULE_2__["optionsBuilder"]);

/***/ }),

/***/ "./options.tsx":
/*!*********************!*\
  !*** ./options.tsx ***!
  \*********************/
/*! exports provided: optionsBuilder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsBuilder", function() { return optionsBuilder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ "../node_modules/@monaco-editor/react/lib/es/index.js");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! examples */ "./examples.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__);





 // import { Input, stylesFactory, Icon, HorizontalGroup, Label, VerticalGroup, useTheme } from '@grafana/ui';



var MonacoEditor = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MonacoEditor, _super);

  function MonacoEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onSourceChange = function () {
      if (typeof _this.editorInstance !== 'undefined') {
        _this.props.onChange(_this.editorInstance.getValue());
      }
    };

    _this.onEditorDidMount = function (editor) {
      _this.editorInstance = editor;
    };

    return _this;
  }

  MonacoEditor.prototype.updateDimensions = function () {
    if (typeof this.editorInstance !== 'undefined') {
      this.editorInstance.layout();
    }
  };

  MonacoEditor.prototype.render = function () {
    var source = this.props.value;

    if (this.editorInstance) {
      this.editorInstance.layout();
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onBlur: this.onSourceChange
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__["default"], {
      height: '33vh',
      language: this.props.language,
      theme: this.props.theme,
      value: source,
      onMount: this.onEditorDidMount
    }));
  };

  return MonacoEditor;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var SvgMapping = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SvgMapping, _super);

  function SvgMapping(props) {
    var _this = _super.call(this, props) || this;

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props.value);
    return _this;
  }

  SvgMapping.prototype.render = function () {
    var _this = this;

    var _a = this.props,
        value = _a.value,
        index = _a.index,
        onChangeItem = _a.onChangeItem,
        onAdd = _a.onAdd,
        onDelete = _a.onDelete;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Label"], null, "SVG ID"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "text",
      name: "svgId",
      defaultValue: value.svgId,
      css: _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme,
      onBlur: function onBlur(e) {
        var svgId = e.currentTarget.value;

        _this.setState({
          svgId: svgId
        });

        onChangeItem && index && onChangeItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), {
          svgId: svgId
        }), index);
      }
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Label"], null, "Mapped Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "text",
      name: "mappedName",
      defaultValue: value.mappedName,
      css: _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme,
      onBlur: function onBlur(e) {
        var mappedName = e.currentTarget.value;

        _this.setState({
          mappedName: mappedName
        });

        onChangeItem && index && onChangeItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), {
          mappedName: mappedName
        }), index);
      }
    }), value.svgId && onDelete && index !== undefined && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      content: "Delete this mapping",
      theme: 'info'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "destructive",
      icon: "trash-alt",
      size: "sm",
      onClick: function onClick() {
        onDelete(index);
      }
    }, "Remove")), !value.svgId && onAdd && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      content: "Add a new SVG Element ID to svgmap property mapping manually",
      theme: 'info'
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "secondary",
      size: "sm",
      icon: "plus-circle",
      onClick: function onClick() {
        onAdd(_this.state);
      }
    }, "Add")));
  };

  return SvgMapping;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var SvgMappings = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(SvgMappings, _super);

  function SvgMappings() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onChangeItem = function (updatedMapping, index) {
      var newMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.props.value));

      newMappings[index] = updatedMapping;

      _this.props.onChange(newMappings);
    };

    _this.onAdd = function (newMapping) {
      if (newMapping.svgId !== '') {
        var newMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.props.value)), [newMapping]);

        _this.props.onChange(newMappings);
      }
    };

    _this.onDelete = function (index) {
      var newMappings = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spreadArray"])([], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(_this.props.value));

      newMappings.splice(index, 1);

      _this.props.onChange(newMappings);
    };

    return _this;
  }

  SvgMappings.prototype.render = function () {
    var _this = this;

    var styles = generateComponentStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme);
    var svgMappings = this.props.value;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["VerticalGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["HorizontalGroup"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Tooltip"], {
      content: "Clear all SVG Element ID to svgmap property mappings",
      theme: "info"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Button"], {
      variant: "destructive",
      icon: "trash-alt",
      size: "sm",
      onClick: function onClick() {
        _this.props.onChange([]);
      }
    }, "Clear All")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgMapping, {
      value: {
        svgId: '',
        mappedName: ''
      },
      styles: styles,
      onAdd: this.onAdd
    })), svgMappings.map(function (currentMapping, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SvgMapping, {
        key: currentMapping.svgId,
        value: currentMapping,
        index: index,
        onChangeItem: _this.onChangeItem,
        onDelete: _this.onDelete,
        styles: styles
      });
    }));
  };

  return SvgMappings;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.PureComponent);

var optionsBuilder = function optionsBuilder(builder) {
  return builder.addBooleanSwitch({
    category: ['SVG Document'],
    path: 'svgAutoComplete',
    name: 'Enable SVG AutoComplete',
    description: 'Enable editor autocompletion, optional as it can be buggy on large documents'
  }).addCustomEditor({
    category: ['SVG Document'],
    path: 'svgSource',
    name: 'SVG Document',
    description: "Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated\n        Graphical SVG Editor and simply pasting the resulting XML here",
    id: 'svgSource',
    defaultValue: examples__WEBPACK_IMPORTED_MODULE_5__["props_defaults"].svgNode,
    editor: function editor(props) {
      var grafanaTheme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme.name;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MonacoEditor, {
        language: "xml",
        theme: grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark',
        value: props.value,
        onChange: props.onChange
      });
    }
  }).addBooleanSwitch({
    category: ['User JS Render'],
    path: 'eventAutoComplete',
    name: 'Enable Render JS AutoComplete',
    description: 'Enable editor autocompletion, optional as it can be buggy on large documents',
    defaultValue: true
  }).addCustomEditor({
    category: ['User JS Render'],
    path: 'eventSource',
    name: 'User JS Render Code',
    description: "The User JS Render code is executed whenever new data is available, the root svg document is available as 'svgnode',\n        and elements you've mapped using the SVG Mapping tools below are available as properties on the 'svgmap' object.\n        The Grafana DataFrame is provided as 'data' and the 'options' object can be used to pass values and references between\n        the Render context and the Init context",
    id: 'eventSource',
    defaultValue: examples__WEBPACK_IMPORTED_MODULE_5__["props_defaults"].eventSource,
    editor: function editor(props) {
      var grafanaTheme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme.name;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MonacoEditor, {
        language: "javascript",
        theme: grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark',
        value: props.value,
        onChange: props.onChange
      });
    }
  }).addBooleanSwitch({
    category: ['User JS Init'],
    path: 'initAutoComplete',
    name: 'Enable Init JS AutoComplete',
    description: 'Enable editor autocompletion, optional as it can be buggy on large documents',
    defaultValue: true
  }).addCustomEditor({
    category: ['User JS Init'],
    path: 'initSource',
    name: 'User JS Init Code',
    description: "The User JS Init code is executed once when the panel loads, you can use this to define helper functions that\n        you later reference in the User JS Render code section. The sections have identical execution contexts, and any\n        JS objects you want to reference between them will need to be attached to the options object as properties",
    id: 'initSource',
    defaultValue: examples__WEBPACK_IMPORTED_MODULE_5__["props_defaults"].initSource,
    editor: function editor(props) {
      var grafanaTheme = _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme.name;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MonacoEditor, {
        language: "javascript",
        theme: grafanaTheme === 'Grafana Light' ? 'vs-light' : 'vs-dark',
        value: props.value,
        onChange: props.onChange
      });
    }
  }).addBooleanSwitch({
    category: ['SVG Mapping'],
    path: 'addAllIDs',
    name: 'Add all SVG Element IDs',
    description: 'Parse the SVG Document for Elements with IDs assigned and automatically add them to the mapping list',
    defaultValue: false
  }).addBooleanSwitch({
    category: ['SVG Mapping'],
    path: 'captureMappings',
    name: 'Enable SVG Mapping on Click',
    description: 'When activated, clicking an element in the panel will attempt to map the clicked element or its nearest parent element with an ID assigned',
    defaultValue: false
  }).addCustomEditor({
    category: ['SVG Mapping'],
    id: 'svgMappings',
    path: 'svgMappings',
    name: 'SVG Mappings',
    description: 'The SVG ID should match an element in the SVG document with an existing ID tag, the element will be attached to the "svgmap" object in the user code execution contexts as a property using the Mapped Name provided below',
    defaultValue: examples__WEBPACK_IMPORTED_MODULE_5__["props_defaults"].svgMappings,
    editor: SvgMappings
  });
};

var generateComponentStyles = function generateComponentStyles(theme) {
  return {
    colorPicker: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      padding: 0 ", ";\n    "], ["\n      padding: 0 ", ";\n    "])), theme.spacing.sm),
    inputPrefix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      align-items: center;\n    "], ["\n      display: flex;\n      align-items: center;\n    "]))),
    trashIcon: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text),
    addIcon: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text)
  };
};

var templateObject_1, templateObject_2, templateObject_3, templateObject_4; //

/***/ }),

/***/ "@grafana/data":
/*!********************************!*\
  !*** external "@grafana/data" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_data__;

/***/ }),

/***/ "@grafana/runtime":
/*!***********************************!*\
  !*** external "@grafana/runtime" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_runtime__;

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "emotion":
/*!**************************!*\
  !*** external "emotion" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_emotion__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map