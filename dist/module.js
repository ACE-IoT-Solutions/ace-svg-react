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

/***/ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _defineProperty;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/extends.js":
/*!*********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/extends.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!***************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "../node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/ControlledEditor/ControlledEditor.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/ControlledEditor/ControlledEditor.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../node_modules/@babel/runtime/helpers/objectWithoutProperties.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _ = _interopRequireDefault(__webpack_require__(/*! .. */ "../node_modules/@monaco-editor/react/lib/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/@monaco-editor/react/lib/utils/index.js");

var ControlledEditor = function ControlledEditor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      editorDidMount = _ref.editorDidMount,
      props = (0, _objectWithoutProperties2.default)(_ref, ["value", "onChange", "editorDidMount"]);
  var previousValue = (0, _react.useRef)(value);

  var handleEditorDidMount = function handleEditorDidMount(getValue, editor) {
    editor.onDidChangeModelContent(function (ev) {
      var currentValue = editor.getValue();

      if (currentValue !== previousValue.current && !(ev.isUndoing || ev.isRedoing)) {
        previousValue.current = currentValue;

        var _value = onChange(ev, currentValue);

        if (typeof _value === 'string') {
          if (currentValue !== _value) {
            editor.setValue(_value);
          }
        }
      }
    });
    editorDidMount(getValue, editor);
  };

  return _react.default.createElement(_.default, (0, _extends2.default)({
    value: value,
    editorDidMount: handleEditorDidMount,
    _isControlledMode: true
  }, props));
};

ControlledEditor.propTypes = {
  value: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  onChange: _propTypes.default.func
};
ControlledEditor.defaultProps = {
  editorDidMount: _utils.noop,
  onChange: _utils.noop
};
var _default = ControlledEditor;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/ControlledEditor/index.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/ControlledEditor/index.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _ControlledEditor = _interopRequireDefault(__webpack_require__(/*! ./ControlledEditor */ "../node_modules/@monaco-editor/react/lib/ControlledEditor/ControlledEditor.js"));

var _default = (0, _react.memo)(_ControlledEditor.default);

exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/DiffEditor/DiffEditor.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/DiffEditor/DiffEditor.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _MonacoContainer = _interopRequireDefault(__webpack_require__(/*! ../MonacoContainer */ "../node_modules/@monaco-editor/react/lib/MonacoContainer/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/@monaco-editor/react/lib/utils/index.js");

var _hooks = __webpack_require__(/*! ../utils/hooks */ "../node_modules/@monaco-editor/react/lib/utils/hooks/index.js");

var _themes = _interopRequireDefault(__webpack_require__(/*! ../config/themes */ "../node_modules/@monaco-editor/react/lib/config/themes.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DiffEditor = function DiffEditor(_ref) {
  var original = _ref.original,
      modified = _ref.modified,
      language = _ref.language,
      originalLanguage = _ref.originalLanguage,
      modifiedLanguage = _ref.modifiedLanguage,
      editorDidMount = _ref.editorDidMount,
      theme = _ref.theme,
      width = _ref.width,
      height = _ref.height,
      loading = _ref.loading,
      options = _ref.options;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditorReady = _useState2[0],
      setIsEditorReady = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMonacoMounting = _useState4[0],
      setIsMonacoMounting = _useState4[1];

  var editorRef = (0, _react.useRef)();
  var monacoRef = (0, _react.useRef)();
  var containerRef = (0, _react.useRef)();
  (0, _hooks.useMount)(function (_) {
    var cancelable = _utils.monaco.init();

    cancelable.then(function (monaco) {
      return (monacoRef.current = monaco) && setIsMonacoMounting(false);
    }).catch(function (error) {
      return console.error('An error occurred during initialization of Monaco:', error);
    });
    return function (_) {
      return editorRef.current ? disposeEditor() : cancelable.cancel();
    };
  });
  (0, _hooks.useUpdate)(function (_) {
    editorRef.current.getModel().modified.setValue(modified);
  }, [modified], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    editorRef.current.getModel().original.setValue(original);
  }, [original], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    var _editorRef$current$ge = editorRef.current.getModel(),
        original = _editorRef$current$ge.original,
        modified = _editorRef$current$ge.modified;

    monacoRef.current.editor.setModelLanguage(original, originalLanguage || language);
    monacoRef.current.editor.setModelLanguage(modified, modifiedLanguage || language);
  }, [language, originalLanguage, modifiedLanguage], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  var setModels = (0, _react.useCallback)(function (_) {
    var originalModel = monacoRef.current.editor.createModel(original, originalLanguage || language);
    var modifiedModel = monacoRef.current.editor.createModel(modified, modifiedLanguage || language);
    editorRef.current.setModel({
      original: originalModel,
      modified: modifiedModel
    });
  }, [language, modified, modifiedLanguage, original, originalLanguage]);
  var createEditor = (0, _react.useCallback)(function (_) {
    editorRef.current = monacoRef.current.editor.createDiffEditor(containerRef.current, _objectSpread({
      automaticLayout: true
    }, options));
    setModels();

    var _editorRef$current$ge2 = editorRef.current.getModel(),
        original = _editorRef$current$ge2.original,
        modified = _editorRef$current$ge2.modified;

    editorDidMount(modified.getValue.bind(modified), original.getValue.bind(original), editorRef.current);
    monacoRef.current.editor.defineTheme('dark', _themes.default['night-dark']);
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [editorDidMount, options, theme, setModels]);
  (0, _react.useEffect)(function (_) {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  var disposeEditor = function disposeEditor(_) {
    return editorRef.current.dispose();
  };

  return _react.default.createElement(_MonacoContainer.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef
  });
};

DiffEditor.propTypes = {
  original: _propTypes.default.string,
  modified: _propTypes.default.string,
  language: _propTypes.default.string,
  originalLanguage: _propTypes.default.string,
  modifiedLanguage: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  theme: _propTypes.default.string,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  options: _propTypes.default.object
};
DiffEditor.defaultProps = {
  editorDidMount: _utils.noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {}
};
var _default = DiffEditor;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/DiffEditor/index.js":
/*!********************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/DiffEditor/index.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _DiffEditor = _interopRequireDefault(__webpack_require__(/*! ./DiffEditor */ "../node_modules/@monaco-editor/react/lib/DiffEditor/DiffEditor.js"));

var _default = (0, _react.memo)(_DiffEditor.default);

exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/Editor/Editor.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/Editor/Editor.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../node_modules/@babel/runtime/helpers/slicedToArray.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _MonacoContainer = _interopRequireDefault(__webpack_require__(/*! ../MonacoContainer */ "../node_modules/@monaco-editor/react/lib/MonacoContainer/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/@monaco-editor/react/lib/utils/index.js");

var _hooks = __webpack_require__(/*! ../utils/hooks */ "../node_modules/@monaco-editor/react/lib/utils/hooks/index.js");

var _themes = _interopRequireDefault(__webpack_require__(/*! ../config/themes */ "../node_modules/@monaco-editor/react/lib/config/themes.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Editor = function Editor(_ref) {
  var value = _ref.value,
      language = _ref.language,
      editorDidMount = _ref.editorDidMount,
      theme = _ref.theme,
      line = _ref.line,
      width = _ref.width,
      height = _ref.height,
      loading = _ref.loading,
      options = _ref.options,
      _isControlledMode = _ref._isControlledMode;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      isEditorReady = _useState2[0],
      setIsEditorReady = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      isMonacoMounting = _useState4[0],
      setIsMonacoMounting = _useState4[1];

  var editorRef = (0, _react.useRef)();
  var monacoRef = (0, _react.useRef)();
  var containerRef = (0, _react.useRef)();
  (0, _hooks.useMount)(function (_) {
    var cancelable = _utils.monaco.init();

    cancelable.then(function (monaco) {
      return (monacoRef.current = monaco) && setIsMonacoMounting(false);
    }).catch(function (error) {
      return console.error('An error occurred during initialization of Monaco:', error);
    });
    return function (_) {
      return editorRef.current ? disposeEditor() : cancelable.cancel();
    };
  });
  (0, _hooks.useUpdate)(function (_) {
    if (options.readOnly) {
      editorRef.current.setValue(value);
    } else {
      editorRef.current.executeEdits('', [{
        range: editorRef.current.getModel().getFullModelRange(),
        text: value
      }]);

      if (_isControlledMode) {
        var model = editorRef.current.getModel();
        model.forceTokenization(model.getLineCount());
      }

      editorRef.current.pushUndoStop();
    }
  }, [value], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    // set last value by .setValue method before changing the language
    editorRef.current.setValue(value);
    monacoRef.current.editor.setModelLanguage(editorRef.current.getModel(), language);
  }, [language], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    editorRef.current.setScrollPosition({
      scrollTop: line
    });
  }, [line], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    monacoRef.current.editor.setTheme(theme);
  }, [theme], isEditorReady);
  (0, _hooks.useUpdate)(function (_) {
    editorRef.current.updateOptions(options);
  }, [options], isEditorReady);
  var createEditor = (0, _react.useCallback)(function (_) {
    editorRef.current = monacoRef.current.editor.create(containerRef.current, _objectSpread({
      value: value,
      language: language,
      automaticLayout: true
    }, options));
    editorDidMount(editorRef.current.getValue.bind(editorRef.current), editorRef.current);
    monacoRef.current.editor.defineTheme('dark', _themes.default['night-dark']);
    monacoRef.current.editor.setTheme(theme);
    setIsEditorReady(true);
  }, [editorDidMount, language, options, theme, value]);
  (0, _react.useEffect)(function (_) {
    !isMonacoMounting && !isEditorReady && createEditor();
  }, [isMonacoMounting, isEditorReady, createEditor]);

  var disposeEditor = function disposeEditor(_) {
    return editorRef.current.dispose();
  };

  return _react.default.createElement(_MonacoContainer.default, {
    width: width,
    height: height,
    isEditorReady: isEditorReady,
    loading: loading,
    _ref: containerRef
  });
};

Editor.propTypes = {
  value: _propTypes.default.string,
  language: _propTypes.default.string,
  editorDidMount: _propTypes.default.func,
  theme: _propTypes.default.string,
  line: _propTypes.default.number,
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]),
  options: _propTypes.default.object,
  _isControlledMode: _propTypes.default.bool
};
Editor.defaultProps = {
  editorDidMount: _utils.noop,
  theme: 'light',
  width: '100%',
  height: '100%',
  loading: 'Loading...',
  options: {},
  _isControlledMode: false
};
var _default = Editor;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/Editor/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/Editor/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _Editor = _interopRequireDefault(__webpack_require__(/*! ./Editor */ "../node_modules/@monaco-editor/react/lib/Editor/Editor.js"));

var _default = (0, _react.memo)(_Editor.default);

exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/Loading/Loading.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/Loading/Loading.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var loadingStyles = {
  display: 'flex',
  height: '100%',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center'
};

function Loading(_ref) {
  var content = _ref.content;
  return _react.default.createElement("div", {
    style: loadingStyles
  }, content);
}

var _default = Loading;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/Loading/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/Loading/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Loading = _interopRequireDefault(__webpack_require__(/*! ./Loading */ "../node_modules/@monaco-editor/react/lib/Loading/Loading.js"));

var _default = _Loading.default;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/MonacoContainer/MonacoContainer.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/MonacoContainer/MonacoContainer.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _Loading = _interopRequireDefault(__webpack_require__(/*! ../Loading */ "../node_modules/@monaco-editor/react/lib/Loading/index.js"));

var _styles = _interopRequireDefault(__webpack_require__(/*! ./styles */ "../node_modules/@monaco-editor/react/lib/MonacoContainer/styles.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

// ** forwardref render functions do not support proptypes or defaultprops **
// one of the reasons why we use a separate prop for passing ref instead of using forwardref
var MonacoContainer = function MonacoContainer(_ref2) {
  var width = _ref2.width,
      height = _ref2.height,
      isEditorReady = _ref2.isEditorReady,
      loading = _ref2.loading,
      _ref = _ref2._ref;
  return _react.default.createElement("section", {
    style: _objectSpread({}, _styles.default.wrapper, {
      width: width,
      height: height
    })
  }, !isEditorReady && _react.default.createElement(_Loading.default, {
    content: loading
  }), _react.default.createElement("div", {
    ref: _ref,
    style: _objectSpread({}, _styles.default.fullWidth, {}, !isEditorReady && _styles.default.hide)
  }));
};

MonacoContainer.propTypes = {
  width: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  height: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]).isRequired,
  loading: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.string]).isRequired,
  isEditorReady: _propTypes.default.bool.isRequired
};
var _default = MonacoContainer;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/MonacoContainer/index.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/MonacoContainer/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _MonacoContainer = _interopRequireDefault(__webpack_require__(/*! ./MonacoContainer */ "../node_modules/@monaco-editor/react/lib/MonacoContainer/MonacoContainer.js"));

var _default = (0, _react.memo)(_MonacoContainer.default);

exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/MonacoContainer/styles.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/MonacoContainer/styles.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var styles = {
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
var _default = styles;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/config/index.js":
/*!****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/config/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var config = {
  paths: {
    vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.20.0/min/vs'
  }
};
var _default = config;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/config/themes.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/config/themes.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var themes = {
  'night-dark': {
    base: 'vs-dark',
    inherit: true,
    rules: [],
    colors: {
      'editor.background': '#202124'
    }
  }
};
var _default = themes;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/index.js":
/*!*********************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DiffEditor", {
  enumerable: true,
  get: function get() {
    return _DiffEditor.default;
  }
});
Object.defineProperty(exports, "ControlledEditor", {
  enumerable: true,
  get: function get() {
    return _ControlledEditor.default;
  }
});
Object.defineProperty(exports, "monaco", {
  enumerable: true,
  get: function get() {
    return _utils.monaco;
  }
});
exports.default = void 0;

var _Editor = _interopRequireDefault(__webpack_require__(/*! ./Editor */ "../node_modules/@monaco-editor/react/lib/Editor/index.js"));

var _DiffEditor = _interopRequireDefault(__webpack_require__(/*! ./DiffEditor */ "../node_modules/@monaco-editor/react/lib/DiffEditor/index.js"));

var _ControlledEditor = _interopRequireDefault(__webpack_require__(/*! ./ControlledEditor */ "../node_modules/@monaco-editor/react/lib/ControlledEditor/index.js"));

var _utils = __webpack_require__(/*! ./utils */ "../node_modules/@monaco-editor/react/lib/utils/index.js");

var _default = _Editor.default;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/deepMerge.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/deepMerge.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var merge = function merge(target, source) {
  Object.keys(source).forEach(function (key) {
    if (source[key] instanceof Object) target[key] && Object.assign(source[key], merge(target[key], source[key]));
  });
  return _objectSpread({}, target, {}, source);
};

var _default = merge;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/hooks/index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/hooks/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "useMount", {
  enumerable: true,
  get: function get() {
    return _useMount.default;
  }
});
Object.defineProperty(exports, "useUpdate", {
  enumerable: true,
  get: function get() {
    return _useUpdate.default;
  }
});

var _useMount = _interopRequireDefault(__webpack_require__(/*! ./useMount */ "../node_modules/@monaco-editor/react/lib/utils/hooks/useMount/index.js"));

var _useUpdate = _interopRequireDefault(__webpack_require__(/*! ./useUpdate */ "../node_modules/@monaco-editor/react/lib/utils/hooks/useUpdate/index.js"));

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/hooks/useMount/index.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/hooks/useMount/index.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var useMount = function useMount(effect) {
  return (0, _react.useEffect)(effect, []);
};

var _default = useMount;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/hooks/useUpdate/index.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/hooks/useUpdate/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "react");

var useUpdate = function useUpdate(effect, deps) {
  var applyChanges = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var isInitialMount = (0, _react.useRef)(true);
  (0, _react.useEffect)(isInitialMount.current || !applyChanges ? function (_) {
    isInitialMount.current = false;
  } : effect, deps);
};

var _default = useUpdate;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/index.js":
/*!***************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "monaco", {
  enumerable: true,
  get: function get() {
    return _monaco.default;
  }
});
Object.defineProperty(exports, "noop", {
  enumerable: true,
  get: function get() {
    return _noop.default;
  }
});
Object.defineProperty(exports, "deepMerge", {
  enumerable: true,
  get: function get() {
    return _deepMerge.default;
  }
});
Object.defineProperty(exports, "makeCancelable", {
  enumerable: true,
  get: function get() {
    return _makeCancelable.default;
  }
});

var _monaco = _interopRequireDefault(__webpack_require__(/*! ./monaco */ "../node_modules/@monaco-editor/react/lib/utils/monaco.js"));

var _noop = _interopRequireDefault(__webpack_require__(/*! ./noop */ "../node_modules/@monaco-editor/react/lib/utils/noop.js"));

var _deepMerge = _interopRequireDefault(__webpack_require__(/*! ./deepMerge */ "../node_modules/@monaco-editor/react/lib/utils/deepMerge.js"));

var _makeCancelable = _interopRequireDefault(__webpack_require__(/*! ./makeCancelable */ "../node_modules/@monaco-editor/react/lib/utils/makeCancelable.js"));

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/makeCancelable.js":
/*!************************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/makeCancelable.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// The source (has been changed) is https://github.com/facebook/react/issues/5465#issuecomment-157888325
var CANCELATION_MESSAGE = 'operation is manually canceled';

var makeCancelable = function makeCancelable(promise) {
  var hasCanceled_ = false;
  var wrappedPromise = new Promise(function (resolve, reject) {
    promise.then(function (val) {
      return hasCanceled_ ? reject(CANCELATION_MESSAGE) : resolve(val);
    });
    promise.catch(function (error) {
      return reject(error);
    });
  });
  return wrappedPromise.cancel = function (_) {
    return hasCanceled_ = true;
  }, wrappedPromise;
};

var _default = makeCancelable;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/monaco.js":
/*!****************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/monaco.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js"));

var _config2 = _interopRequireDefault(__webpack_require__(/*! ../config */ "../node_modules/@monaco-editor/react/lib/config/index.js"));

var _utils = __webpack_require__(/*! ../utils */ "../node_modules/@monaco-editor/react/lib/utils/index.js");

var Monaco =
/*#__PURE__*/
function () {
  function Monaco() {
    var _this = this;

    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Monaco);
    (0, _defineProperty2.default)(this, "handleMainScriptLoad", function (_) {
      document.removeEventListener('monaco_init', _this.handleMainScriptLoad);

      _this.resolve(window.monaco);
    });
    (0, _defineProperty2.default)(this, "isInitialized", false);
    (0, _defineProperty2.default)(this, "wrapperPromise", new Promise(function (res, rej) {
      _this.resolve = res;
      _this.reject = rej;
    }));
    this.__config = config;
  }

  (0, _createClass2.default)(Monaco, [{
    key: "config",
    value: function config(_config) {
      if (_config) {
        this.__config = (0, _utils.deepMerge)(this.__config, this.validateConfig(_config));
      }

      return this;
    }
  }, {
    key: "validateConfig",
    value: function validateConfig(config) {
      if (config.urls) {
        this.informAboutDepreciation();
        return {
          paths: {
            vs: config.urls.monacoBase
          }
        };
      }

      return config;
    }
  }, {
    key: "informAboutDepreciation",
    value: function informAboutDepreciation() {
      console.warn("Deprecation warning!\n      You are using deprecated way of configuration.\n\n      Instead of using\n        monaco.config({ urls: { monacoBase: '...' } })\n      use\n        monaco.config({ paths: { vs: '...' } })\n\n      For more please check the link https://github.com/suren-atoyan/monaco-react#config\n    ");
    }
  }, {
    key: "injectScripts",
    value: function injectScripts(script) {
      document.body.appendChild(script);
    }
  }, {
    key: "createScript",
    value: function createScript(src) {
      var script = document.createElement('script');
      return src && (script.src = src), script;
    }
  }, {
    key: "createMonacoLoaderScript",
    value: function createMonacoLoaderScript(mainScript) {
      var _this2 = this;

      var loaderScript = this.createScript("".concat(this.__config.paths.vs, "/loader.js"));

      loaderScript.onload = function (_) {
        return _this2.injectScripts(mainScript);
      };

      loaderScript.onerror = this.reject;
      return loaderScript;
    }
  }, {
    key: "createMainScript",
    value: function createMainScript() {
      var mainScript = this.createScript();
      mainScript.innerHTML = "\n      require.config(".concat(JSON.stringify(this.__config), ");\n      require(['vs/editor/editor.main'], function() {\n        document.dispatchEvent(new Event('monaco_init'));\n      });\n    ");
      mainScript.onerror = this.reject;
      return mainScript;
    }
  }, {
    key: "init",
    value: function init() {
      if (!this.isInitialized) {
        if (window.monaco && window.monaco.editor) {
          return new Promise(function (res, rej) {
            return res(window.monaco);
          });
        }

        document.addEventListener('monaco_init', this.handleMainScriptLoad);
        var mainScript = this.createMainScript();
        var loaderScript = this.createMonacoLoaderScript(mainScript);
        this.injectScripts(loaderScript);
      }

      this.isInitialized = true;
      return (0, _utils.makeCancelable)(this.wrapperPromise);
    }
  }]);
  return Monaco;
}();

var _default = new Monaco(_config2.default);

exports.default = _default;

/***/ }),

/***/ "../node_modules/@monaco-editor/react/lib/utils/noop.js":
/*!**************************************************************!*\
  !*** ../node_modules/@monaco-editor/react/lib/utils/noop.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var noop = function noop(_) {};

var _default = noop;
exports.default = _default;

/***/ }),

/***/ "../node_modules/@svgdotjs/svg.js/dist/svg.esm.js":
/*!********************************************************!*\
  !*** ../node_modules/@svgdotjs/svg.js/dist/svg.esm.js ***!
  \********************************************************/
/*! exports provided: A, Animator, Array, Box, Circle, ClipPath, Color, Container, Controller, Defs, Dom, Ease, Element, Ellipse, EventTarget, ForeignObject, G, Gradient, Image, Line, List, Marker, Mask, Matrix, Morphable, NonMorphable, Number, ObjectBag, PID, Path, PathArray, Pattern, Point, PointArray, Polygon, Polyline, Queue, Rect, Runner, SVG, Shape, Spring, Stop, Style, Svg, Symbol, Text, TextPath, Timeline, TransformBag, Tspan, Use, adopt, assignNewId, create, defaults, dispatch, easing, eid, extend, find, getClass, invent, makeInstance, makeMorphable, mockAdopt, namespaces, nodeOrNew, off, on, parser, regex, register, registerMorphableType, registerWindow, root, utils, wrapWithAttrCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return A; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Symbol", function() { return _Symbol; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Text", function() { return Text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextPath", function() { return TextPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return Timeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformBag", function() { return TransformBag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tspan", function() { return Tspan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Use", function() { return Use; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adopt", function() { return adopt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assignNewId", function() { return assignNewId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dispatch", function() { return dispatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "easing", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eid", function() { return eid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return baseFind; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClass", function() { return getClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invent", function() { return invent; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "root", function() { return root; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return utils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapWithAttrCheck", function() { return wrapWithAttrCheck; });
/*!
* @svgdotjs/svg.js - A lightweight library for manipulating and animating SVG.
* @version 3.0.16
* https://svgdotjs.github.io/
*
* @copyright Wout Fierens <wout@mick-wout.com>
* @license MIT
*
* BUILT: Tue Nov 12 2019 21:57:16 GMT+0100 (GMT+01:00)
*/;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global_1 =
  // eslint-disable-next-line no-undef
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  check(typeof self == 'object' && self) ||
  check(typeof commonjsGlobal == 'object' && commonjsGlobal) ||
  // eslint-disable-next-line no-new-func
  Function('return this')();

var fails = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};

// Thank's IE8 for his funny defineProperty
var descriptors = !fails(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});

var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.propertyisenumerable
var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : nativePropertyIsEnumerable;

var objectPropertyIsEnumerable = {
	f: f
};

var createPropertyDescriptor = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

var toString = {}.toString;

var classofRaw = function (it) {
  return toString.call(it).slice(8, -1);
};

var split = ''.split;

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var indexedObject = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins
  return !Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classofRaw(it) == 'String' ? split.call(it, '') : Object(it);
} : Object;

// `RequireObjectCoercible` abstract operation
// https://tc39.github.io/ecma262/#sec-requireobjectcoercible
var requireObjectCoercible = function (it) {
  if (it == undefined) throw TypeError("Can't call method on " + it);
  return it;
};

// toObject with fallback for non-array-like ES3 strings



var toIndexedObject = function (it) {
  return indexedObject(requireObjectCoercible(it));
};

var isObject = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

// `ToPrimitive` abstract operation
// https://tc39.github.io/ecma262/#sec-toprimitive
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
var toPrimitive = function (input, PREFERRED_STRING) {
  if (!isObject(input)) return input;
  var fn, val;
  if (PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  if (typeof (fn = input.valueOf) == 'function' && !isObject(val = fn.call(input))) return val;
  if (!PREFERRED_STRING && typeof (fn = input.toString) == 'function' && !isObject(val = fn.call(input))) return val;
  throw TypeError("Can't convert object to primitive value");
};

var hasOwnProperty = {}.hasOwnProperty;

var has = function (it, key) {
  return hasOwnProperty.call(it, key);
};

var document$1 = global_1.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document$1) && isObject(document$1.createElement);

var documentCreateElement = function (it) {
  return EXISTS ? document$1.createElement(it) : {};
};

// Thank's IE8 for his funny defineProperty
var ie8DomDefine = !descriptors && !fails(function () {
  return Object.defineProperty(documentCreateElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});

var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPrimitive(P, true);
  if (ie8DomDefine) try {
    return nativeGetOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (has(O, P)) return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
};

var objectGetOwnPropertyDescriptor = {
	f: f$1
};

var anObject = function (it) {
  if (!isObject(it)) {
    throw TypeError(String(it) + ' is not an object');
  } return it;
};

var nativeDefineProperty = Object.defineProperty;

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (ie8DomDefine) try {
    return nativeDefineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

var objectDefineProperty = {
	f: f$2
};

var createNonEnumerableProperty = descriptors ? function (object, key, value) {
  return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

var setGlobal = function (key, value) {
  try {
    createNonEnumerableProperty(global_1, key, value);
  } catch (error) {
    global_1[key] = value;
  } return value;
};

var SHARED = '__core-js_shared__';
var store = global_1[SHARED] || setGlobal(SHARED, {});

var sharedStore = store;

var shared = createCommonjsModule(function (module) {
(module.exports = function (key, value) {
  return sharedStore[key] || (sharedStore[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.3.6',
  mode:  'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});
});

var functionToString = shared('native-function-to-string', Function.toString);

var WeakMap = global_1.WeakMap;

var nativeWeakMap = typeof WeakMap === 'function' && /native code/.test(functionToString.call(WeakMap));

var id = 0;
var postfix = Math.random();

var uid = function (key) {
  return 'Symbol(' + String(key === undefined ? '' : key) + ')_' + (++id + postfix).toString(36);
};

var keys = shared('keys');

var sharedKey = function (key) {
  return keys[key] || (keys[key] = uid(key));
};

var hiddenKeys = {};

var WeakMap$1 = global_1.WeakMap;
var set, get, has$1;

var enforce = function (it) {
  return has$1(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (nativeWeakMap) {
  var store$1 = new WeakMap$1();
  var wmget = store$1.get;
  var wmhas = store$1.has;
  var wmset = store$1.set;
  set = function (it, metadata) {
    wmset.call(store$1, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget.call(store$1, it) || {};
  };
  has$1 = function (it) {
    return wmhas.call(store$1, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return has(it, STATE) ? it[STATE] : {};
  };
  has$1 = function (it) {
    return has(it, STATE);
  };
}

var internalState = {
  set: set,
  get: get,
  has: has$1,
  enforce: enforce,
  getterFor: getterFor
};

var redefine = createCommonjsModule(function (module) {
var getInternalState = internalState.get;
var enforceInternalState = internalState.enforce;
var TEMPLATE = String(functionToString).split('toString');

shared('inspectSource', function (it) {
  return functionToString.call(it);
});

(module.exports = function (O, key, value, options) {
  var unsafe = options ? !!options.unsafe : false;
  var simple = options ? !!options.enumerable : false;
  var noTargetGet = options ? !!options.noTargetGet : false;
  if (typeof value == 'function') {
    if (typeof key == 'string' && !has(value, 'name')) createNonEnumerableProperty(value, 'name', key);
    enforceInternalState(value).source = TEMPLATE.join(typeof key == 'string' ? key : '');
  }
  if (O === global_1) {
    if (simple) O[key] = value;
    else setGlobal(key, value);
    return;
  } else if (!unsafe) {
    delete O[key];
  } else if (!noTargetGet && O[key]) {
    simple = true;
  }
  if (simple) O[key] = value;
  else createNonEnumerableProperty(O, key, value);
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, 'toString', function toString() {
  return typeof this == 'function' && getInternalState(this).source || functionToString.call(this);
});
});

var path = global_1;

var aFunction = function (variable) {
  return typeof variable == 'function' ? variable : undefined;
};

var getBuiltIn = function (namespace, method) {
  return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace])
    : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
};

var ceil = Math.ceil;
var floor = Math.floor;

// `ToInteger` abstract operation
// https://tc39.github.io/ecma262/#sec-tointeger
var toInteger = function (argument) {
  return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
};

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.github.io/ecma262/#sec-tolength
var toLength = function (argument) {
  return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};

var max = Math.max;
var min$1 = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(length, length).
var toAbsoluteIndex = function (index, length) {
  var integer = toInteger(index);
  return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
};

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

var arrayIncludes = {
  // `Array.prototype.includes` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};

var indexOf = arrayIncludes.indexOf;


var objectKeysInternal = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !has(hiddenKeys, key) && has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~indexOf(result, key) || result.push(key);
  }
  return result;
};

// IE8- don't enum bug keys
var enumBugKeys = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];

var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return objectKeysInternal(O, hiddenKeys$1);
};

var objectGetOwnPropertyNames = {
	f: f$3
};

var f$4 = Object.getOwnPropertySymbols;

var objectGetOwnPropertySymbols = {
	f: f$4
};

// all object keys, includes non-enumerable and symbols
var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = objectGetOwnPropertyNames.f(anObject(it));
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
};

var copyConstructorProperties = function (target, source) {
  var keys = ownKeys(source);
  var defineProperty = objectDefineProperty.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!has(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
  }
};

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : typeof detection == 'function' ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

var isForced_1 = isForced;

var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;






/*
  options.target      - name of the target object
  options.global      - target is the global object
  options.stat        - export as static methods of target
  options.proto       - export as prototype methods of target
  options.real        - real prototype method for the `pure` version
  options.forced      - export even if the native feature is available
  options.bind        - bind methods to the target, required for the `pure` version
  options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe      - use the simple assignment of property instead of delete + defineProperty
  options.sham        - add a flag to not completely full polyfills
  options.enumerable  - export as enumerable property
  options.noTargetGet - prevent calling a getter on target
*/
var _export = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global_1;
  } else if (STATIC) {
    target = global_1[TARGET] || setGlobal(TARGET, {});
  } else {
    target = (global_1[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.noTargetGet) {
      descriptor = getOwnPropertyDescriptor$1(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty === typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    // extend global
    redefine(target, key, sourceProperty, options);
  }
};

// `IsArray` abstract operation
// https://tc39.github.io/ecma262/#sec-isarray
var isArray = Array.isArray || function isArray(arg) {
  return classofRaw(arg) == 'Array';
};

var createProperty = function (object, key, value) {
  var propertyKey = toPrimitive(key);
  if (propertyKey in object) objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value));
  else object[propertyKey] = value;
};

var nativeSymbol = !!Object.getOwnPropertySymbols && !fails(function () {
  // Chrome 38 Symbol has incorrect toString conversion
  // eslint-disable-next-line no-undef
  return !String(Symbol());
});

var Symbol$1 = global_1.Symbol;
var store$2 = shared('wks');

var wellKnownSymbol = function (name) {
  return store$2[name] || (store$2[name] = nativeSymbol && Symbol$1[name]
    || (nativeSymbol ? Symbol$1 : uid)('Symbol.' + name));
};

var userAgent = getBuiltIn('navigator', 'userAgent') || '';

var process = global_1.process;
var versions = process && process.versions;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  version = match[0] + match[1];
} else if (userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = match[1];
  }
}

var v8Version = version && +version;

var SPECIES = wellKnownSymbol('species');

var arrayMethodHasSpeciesSupport = function (METHOD_NAME) {
  // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/677
  return v8Version >= 51 || !fails(function () {
    var array = [];
    var constructor = array.constructor = {};
    constructor[SPECIES] = function () {
      return { foo: 1 };
    };
    return array[METHOD_NAME](Boolean).foo !== 1;
  });
};

var SPECIES$1 = wellKnownSymbol('species');
var nativeSlice = [].slice;
var max$1 = Math.max;

// `Array.prototype.slice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.slice
// fallback for not array-like ES3 strings and DOM objects
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('slice') }, {
  slice: function slice(start, end) {
    var O = toIndexedObject(this);
    var length = toLength(O.length);
    var k = toAbsoluteIndex(start, length);
    var fin = toAbsoluteIndex(end === undefined ? length : end, length);
    // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
    var Constructor, result, n;
    if (isArray(O)) {
      Constructor = O.constructor;
      // cross-realm fallback
      if (typeof Constructor == 'function' && (Constructor === Array || isArray(Constructor.prototype))) {
        Constructor = undefined;
      } else if (isObject(Constructor)) {
        Constructor = Constructor[SPECIES$1];
        if (Constructor === null) Constructor = undefined;
      }
      if (Constructor === Array || Constructor === undefined) {
        return nativeSlice.call(O, k, fin);
      }
    }
    result = new (Constructor === undefined ? Array : Constructor)(max$1(fin - k, 0));
    for (n = 0; k < fin; k++, n++) if (k in O) createProperty(result, n, O[k]);
    result.length = n;
    return result;
  }
});

var defineProperty = objectDefineProperty.f;

var FunctionPrototype = Function.prototype;
var FunctionPrototypeToString = FunctionPrototype.toString;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// Function instances `.name` property
// https://tc39.github.io/ecma262/#sec-function-instances-name
if (descriptors && !(NAME in FunctionPrototype)) {
  defineProperty(FunctionPrototype, NAME, {
    configurable: true,
    get: function () {
      try {
        return FunctionPrototypeToString.call(this).match(nameRE)[1];
      } catch (error) {
        return '';
      }
    }
  });
}

var nativeGetOwnPropertyNames = objectGetOwnPropertyNames.f;

var toString$1 = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return nativeGetOwnPropertyNames(it);
  } catch (error) {
    return windowNames.slice();
  }
};

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var f$5 = function getOwnPropertyNames(it) {
  return windowNames && toString$1.call(it) == '[object Window]'
    ? getWindowNames(it)
    : nativeGetOwnPropertyNames(toIndexedObject(it));
};

var objectGetOwnPropertyNamesExternal = {
	f: f$5
};

var nativeGetOwnPropertyNames$1 = objectGetOwnPropertyNamesExternal.f;

var FAILS_ON_PRIMITIVES = fails(function () { return !Object.getOwnPropertyNames(1); });

// `Object.getOwnPropertyNames` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertynames
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  getOwnPropertyNames: nativeGetOwnPropertyNames$1
});

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

// `ToObject` abstract operation
// https://tc39.github.io/ecma262/#sec-toobject
var toObject = function (argument) {
  return Object(requireObjectCoercible(argument));
};

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
var objectKeys = Object.keys || function keys(O) {
  return objectKeysInternal(O, enumBugKeys);
};

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) objectDefineProperty.f(O, key = keys[index++], Properties[key]);
  return O;
};

var html = getBuiltIn('document', 'documentElement');

var IE_PROTO = sharedKey('IE_PROTO');

var PROTOTYPE = 'prototype';
var Empty = function () { /* empty */ };

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var length = enumBugKeys.length;
  var lt = '<';
  var script = 'script';
  var gt = '>';
  var js = 'java' + script + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = String(js);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + script + gt + 'document.F=Object' + lt + '/' + script + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (length--) delete createDict[PROTOTYPE][enumBugKeys[length]];
  return createDict();
};

// `Object.create` method
// https://tc39.github.io/ecma262/#sec-object.create
var objectCreate = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : objectDefineProperties(result, Properties);
};

hiddenKeys[IE_PROTO] = true;

var f$6 = wellKnownSymbol;

var wrappedWellKnownSymbol = {
	f: f$6
};

var defineProperty$1 = objectDefineProperty.f;

var defineWellKnownSymbol = function (NAME) {
  var Symbol = path.Symbol || (path.Symbol = {});
  if (!has(Symbol, NAME)) defineProperty$1(Symbol, NAME, {
    value: wrappedWellKnownSymbol.f(NAME)
  });
};

var defineProperty$2 = objectDefineProperty.f;



var TO_STRING_TAG = wellKnownSymbol('toStringTag');

var setToStringTag = function (it, TAG, STATIC) {
  if (it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG)) {
    defineProperty$2(it, TO_STRING_TAG, { configurable: true, value: TAG });
  }
};

var aFunction$1 = function (it) {
  if (typeof it != 'function') {
    throw TypeError(String(it) + ' is not a function');
  } return it;
};

// optional / simple context binding
var bindContext = function (fn, that, length) {
  aFunction$1(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 0: return function () {
      return fn.call(that);
    };
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};

var SPECIES$2 = wellKnownSymbol('species');

// `ArraySpeciesCreate` abstract operation
// https://tc39.github.io/ecma262/#sec-arrayspeciescreate
var arraySpeciesCreate = function (originalArray, length) {
  var C;
  if (isArray(originalArray)) {
    C = originalArray.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    else if (isObject(C)) {
      C = C[SPECIES$2];
      if (C === null) C = undefined;
    }
  } return new (C === undefined ? Array : C)(length === 0 ? 0 : length);
};

var push = [].push;

// `Array.prototype.{ forEach, map, filter, some, every, find, findIndex }` methods implementation
var createMethod$1 = function (TYPE) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  return function ($this, callbackfn, that, specificCreate) {
    var O = toObject($this);
    var self = indexedObject(O);
    var boundFunction = bindContext(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var create = specificCreate || arraySpeciesCreate;
    var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var value, result;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      value = self[index];
      result = boundFunction(value, index, O);
      if (TYPE) {
        if (IS_MAP) target[index] = result; // map
        else if (result) switch (TYPE) {
          case 3: return true;              // some
          case 5: return value;             // find
          case 6: return index;             // findIndex
          case 2: push.call(target, value); // filter
        } else if (IS_EVERY) return false;  // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
  };
};

var arrayIteration = {
  // `Array.prototype.forEach` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.foreach
  forEach: createMethod$1(0),
  // `Array.prototype.map` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.map
  map: createMethod$1(1),
  // `Array.prototype.filter` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.filter
  filter: createMethod$1(2),
  // `Array.prototype.some` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.some
  some: createMethod$1(3),
  // `Array.prototype.every` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.every
  every: createMethod$1(4),
  // `Array.prototype.find` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.find
  find: createMethod$1(5),
  // `Array.prototype.findIndex` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.findIndex
  findIndex: createMethod$1(6)
};

var $forEach = arrayIteration.forEach;

var HIDDEN = sharedKey('hidden');
var SYMBOL = 'Symbol';
var PROTOTYPE$1 = 'prototype';
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var setInternalState = internalState.set;
var getInternalState = internalState.getterFor(SYMBOL);
var ObjectPrototype = Object[PROTOTYPE$1];
var $Symbol = global_1.Symbol;
var JSON$1 = global_1.JSON;
var nativeJSONStringify = JSON$1 && JSON$1.stringify;
var nativeGetOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
var nativeDefineProperty$1 = objectDefineProperty.f;
var nativeGetOwnPropertyNames$2 = objectGetOwnPropertyNamesExternal.f;
var nativePropertyIsEnumerable$1 = objectPropertyIsEnumerable.f;
var AllSymbols = shared('symbols');
var ObjectPrototypeSymbols = shared('op-symbols');
var StringToSymbolRegistry = shared('string-to-symbol-registry');
var SymbolToStringRegistry = shared('symbol-to-string-registry');
var WellKnownSymbolsStore = shared('wks');
var QObject = global_1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var USE_SETTER = !QObject || !QObject[PROTOTYPE$1] || !QObject[PROTOTYPE$1].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDescriptor = descriptors && fails(function () {
  return objectCreate(nativeDefineProperty$1({}, 'a', {
    get: function () { return nativeDefineProperty$1(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (O, P, Attributes) {
  var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
  if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
  nativeDefineProperty$1(O, P, Attributes);
  if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
    nativeDefineProperty$1(ObjectPrototype, P, ObjectPrototypeDescriptor);
  }
} : nativeDefineProperty$1;

var wrap = function (tag, description) {
  var symbol = AllSymbols[tag] = objectCreate($Symbol[PROTOTYPE$1]);
  setInternalState(symbol, {
    type: SYMBOL,
    tag: tag,
    description: description
  });
  if (!descriptors) symbol.description = description;
  return symbol;
};

var isSymbol = nativeSymbol && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return Object(it) instanceof $Symbol;
};

var $defineProperty = function defineProperty(O, P, Attributes) {
  if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
  anObject(O);
  var key = toPrimitive(P, true);
  anObject(Attributes);
  if (has(AllSymbols, key)) {
    if (!Attributes.enumerable) {
      if (!has(O, HIDDEN)) nativeDefineProperty$1(O, HIDDEN, createPropertyDescriptor(1, {}));
      O[HIDDEN][key] = true;
    } else {
      if (has(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
      Attributes = objectCreate(Attributes, { enumerable: createPropertyDescriptor(0, false) });
    } return setSymbolDescriptor(O, key, Attributes);
  } return nativeDefineProperty$1(O, key, Attributes);
};

var $defineProperties = function defineProperties(O, Properties) {
  anObject(O);
  var properties = toIndexedObject(Properties);
  var keys = objectKeys(properties).concat($getOwnPropertySymbols(properties));
  $forEach(keys, function (key) {
    if (!descriptors || $propertyIsEnumerable.call(properties, key)) $defineProperty(O, key, properties[key]);
  });
  return O;
};

var $create = function create(O, Properties) {
  return Properties === undefined ? objectCreate(O) : $defineProperties(objectCreate(O), Properties);
};

var $propertyIsEnumerable = function propertyIsEnumerable(V) {
  var P = toPrimitive(V, true);
  var enumerable = nativePropertyIsEnumerable$1.call(this, P);
  if (this === ObjectPrototype && has(AllSymbols, P) && !has(ObjectPrototypeSymbols, P)) return false;
  return enumerable || !has(this, P) || !has(AllSymbols, P) || has(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
  var it = toIndexedObject(O);
  var key = toPrimitive(P, true);
  if (it === ObjectPrototype && has(AllSymbols, key) && !has(ObjectPrototypeSymbols, key)) return;
  var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
  if (descriptor && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) {
    descriptor.enumerable = true;
  }
  return descriptor;
};

var $getOwnPropertyNames = function getOwnPropertyNames(O) {
  var names = nativeGetOwnPropertyNames$2(toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (!has(AllSymbols, key) && !has(hiddenKeys, key)) result.push(key);
  });
  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
  var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
  var names = nativeGetOwnPropertyNames$2(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject(O));
  var result = [];
  $forEach(names, function (key) {
    if (has(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || has(ObjectPrototype, key))) {
      result.push(AllSymbols[key]);
    }
  });
  return result;
};

// `Symbol` constructor
// https://tc39.github.io/ecma262/#sec-symbol-constructor
if (!nativeSymbol) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor');
    var description = !arguments.length || arguments[0] === undefined ? undefined : String(arguments[0]);
    var tag = uid(description);
    var setter = function (value) {
      if (this === ObjectPrototype) setter.call(ObjectPrototypeSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
    };
    if (descriptors && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, { configurable: true, set: setter });
    return wrap(tag, description);
  };

  redefine($Symbol[PROTOTYPE$1], 'toString', function toString() {
    return getInternalState(this).tag;
  });

  objectPropertyIsEnumerable.f = $propertyIsEnumerable;
  objectDefineProperty.f = $defineProperty;
  objectGetOwnPropertyDescriptor.f = $getOwnPropertyDescriptor;
  objectGetOwnPropertyNames.f = objectGetOwnPropertyNamesExternal.f = $getOwnPropertyNames;
  objectGetOwnPropertySymbols.f = $getOwnPropertySymbols;

  if (descriptors) {
    // https://github.com/tc39/proposal-Symbol-description
    nativeDefineProperty$1($Symbol[PROTOTYPE$1], 'description', {
      configurable: true,
      get: function description() {
        return getInternalState(this).description;
      }
    });
    {
      redefine(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, { unsafe: true });
    }
  }

  wrappedWellKnownSymbol.f = function (name) {
    return wrap(wellKnownSymbol(name), name);
  };
}

_export({ global: true, wrap: true, forced: !nativeSymbol, sham: !nativeSymbol }, {
  Symbol: $Symbol
});

$forEach(objectKeys(WellKnownSymbolsStore), function (name) {
  defineWellKnownSymbol(name);
});

_export({ target: SYMBOL, stat: true, forced: !nativeSymbol }, {
  // `Symbol.for` method
  // https://tc39.github.io/ecma262/#sec-symbol.for
  'for': function (key) {
    var string = String(key);
    if (has(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
    var symbol = $Symbol(string);
    StringToSymbolRegistry[string] = symbol;
    SymbolToStringRegistry[symbol] = string;
    return symbol;
  },
  // `Symbol.keyFor` method
  // https://tc39.github.io/ecma262/#sec-symbol.keyfor
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol');
    if (has(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
  },
  useSetter: function () { USE_SETTER = true; },
  useSimple: function () { USE_SETTER = false; }
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol, sham: !descriptors }, {
  // `Object.create` method
  // https://tc39.github.io/ecma262/#sec-object.create
  create: $create,
  // `Object.defineProperty` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperty
  defineProperty: $defineProperty,
  // `Object.defineProperties` method
  // https://tc39.github.io/ecma262/#sec-object.defineproperties
  defineProperties: $defineProperties,
  // `Object.getOwnPropertyDescriptor` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor
});

_export({ target: 'Object', stat: true, forced: !nativeSymbol }, {
  // `Object.getOwnPropertyNames` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertynames
  getOwnPropertyNames: $getOwnPropertyNames,
  // `Object.getOwnPropertySymbols` method
  // https://tc39.github.io/ecma262/#sec-object.getownpropertysymbols
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
_export({ target: 'Object', stat: true, forced: fails(function () { objectGetOwnPropertySymbols.f(1); }) }, {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return objectGetOwnPropertySymbols.f(toObject(it));
  }
});

// `JSON.stringify` method behavior with symbols
// https://tc39.github.io/ecma262/#sec-json.stringify
JSON$1 && _export({ target: 'JSON', stat: true, forced: !nativeSymbol || fails(function () {
  var symbol = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  return nativeJSONStringify([symbol]) != '[null]'
    // WebKit converts symbol values to JSON as null
    || nativeJSONStringify({ a: symbol }) != '{}'
    // V8 throws on boxed symbols
    || nativeJSONStringify(Object(symbol)) != '{}';
}) }, {
  stringify: function stringify(it) {
    var args = [it];
    var index = 1;
    var replacer, $replacer;
    while (arguments.length > index) args.push(arguments[index++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return nativeJSONStringify.apply(JSON$1, args);
  }
});

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@toprimitive
if (!$Symbol[PROTOTYPE$1][TO_PRIMITIVE]) {
  createNonEnumerableProperty($Symbol[PROTOTYPE$1], TO_PRIMITIVE, $Symbol[PROTOTYPE$1].valueOf);
}
// `Symbol.prototype[@@toStringTag]` property
// https://tc39.github.io/ecma262/#sec-symbol.prototype-@@tostringtag
setToStringTag($Symbol, SYMBOL);

hiddenKeys[HIDDEN] = true;

var defineProperty$3 = objectDefineProperty.f;


var NativeSymbol = global_1.Symbol;

if (descriptors && typeof NativeSymbol == 'function' && (!('description' in NativeSymbol.prototype) ||
  // Safari 12 bug
  NativeSymbol().description !== undefined
)) {
  var EmptyStringDescriptionStore = {};
  // wrap Symbol constructor for correct work with undefined description
  var SymbolWrapper = function Symbol() {
    var description = arguments.length < 1 || arguments[0] === undefined ? undefined : String(arguments[0]);
    var result = this instanceof SymbolWrapper
      ? new NativeSymbol(description)
      // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
    if (description === '') EmptyStringDescriptionStore[result] = true;
    return result;
  };
  copyConstructorProperties(SymbolWrapper, NativeSymbol);
  var symbolPrototype = SymbolWrapper.prototype = NativeSymbol.prototype;
  symbolPrototype.constructor = SymbolWrapper;

  var symbolToString = symbolPrototype.toString;
  var native = String(NativeSymbol('test')) == 'Symbol(test)';
  var regexp = /^Symbol\((.*)\)[^)]+$/;
  defineProperty$3(symbolPrototype, 'description', {
    configurable: true,
    get: function description() {
      var symbol = isObject(this) ? this.valueOf() : this;
      var string = symbolToString.call(symbol);
      if (has(EmptyStringDescriptionStore, symbol)) return '';
      var desc = native ? string.slice(7, -1) : string.replace(regexp, '$1');
      return desc === '' ? undefined : desc;
    }
  });

  _export({ global: true, forced: true }, {
    Symbol: SymbolWrapper
  });
}

// `Symbol.iterator` well-known symbol
// https://tc39.github.io/ecma262/#sec-symbol.iterator
defineWellKnownSymbol('iterator');

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  createNonEnumerableProperty(ArrayPrototype, UNSCOPABLES, objectCreate(null));
}

// add a key to Array.prototype[@@unscopables]
var addToUnscopables = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};

var iterators = {};

var correctPrototypeGetter = !fails(function () {
  function F() { /* empty */ }
  F.prototype.constructor = null;
  return Object.getPrototypeOf(new F()) !== F.prototype;
});

var IE_PROTO$1 = sharedKey('IE_PROTO');
var ObjectPrototype$1 = Object.prototype;

// `Object.getPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.getprototypeof
var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO$1)) return O[IE_PROTO$1];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectPrototype$1 : null;
};

var ITERATOR = wellKnownSymbol('iterator');
var BUGGY_SAFARI_ITERATORS = false;

var returnThis = function () { return this; };

// `%IteratorPrototype%` object
// https://tc39.github.io/ecma262/#sec-%iteratorprototype%-object
var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;

if ([].keys) {
  arrayIterator = [].keys();
  // Safari 8 has buggy iterators w/o `next`
  if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS = true;
  else {
    PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
    if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype = PrototypeOfArrayIteratorPrototype;
  }
}

if (IteratorPrototype == undefined) IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
if ( !has(IteratorPrototype, ITERATOR)) {
  createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
}

var iteratorsCore = {
  IteratorPrototype: IteratorPrototype,
  BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
};

var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;





var returnThis$1 = function () { return this; };

var createIteratorConstructor = function (IteratorConstructor, NAME, next) {
  var TO_STRING_TAG = NAME + ' Iterator';
  IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, { next: createPropertyDescriptor(1, next) });
  setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
  iterators[TO_STRING_TAG] = returnThis$1;
  return IteratorConstructor;
};

var aPossiblePrototype = function (it) {
  if (!isObject(it) && it !== null) {
    throw TypeError("Can't set " + String(it) + ' as a prototype');
  } return it;
};

// `Object.setPrototypeOf` method
// https://tc39.github.io/ecma262/#sec-object.setprototypeof
// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
  var CORRECT_SETTER = false;
  var test = {};
  var setter;
  try {
    setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
    setter.call(test, []);
    CORRECT_SETTER = test instanceof Array;
  } catch (error) { /* empty */ }
  return function setPrototypeOf(O, proto) {
    anObject(O);
    aPossiblePrototype(proto);
    if (CORRECT_SETTER) setter.call(O, proto);
    else O.__proto__ = proto;
    return O;
  };
}() : undefined);

var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
var ITERATOR$1 = wellKnownSymbol('iterator');
var KEYS = 'keys';
var VALUES = 'values';
var ENTRIES = 'entries';

var returnThis$2 = function () { return this; };

var defineIterator = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
  createIteratorConstructor(IteratorConstructor, NAME, next);

  var getIterationMethod = function (KIND) {
    if (KIND === DEFAULT && defaultIterator) return defaultIterator;
    if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) return IterablePrototype[KIND];
    switch (KIND) {
      case KEYS: return function keys() { return new IteratorConstructor(this, KIND); };
      case VALUES: return function values() { return new IteratorConstructor(this, KIND); };
      case ENTRIES: return function entries() { return new IteratorConstructor(this, KIND); };
    } return function () { return new IteratorConstructor(this); };
  };

  var TO_STRING_TAG = NAME + ' Iterator';
  var INCORRECT_VALUES_NAME = false;
  var IterablePrototype = Iterable.prototype;
  var nativeIterator = IterablePrototype[ITERATOR$1]
    || IterablePrototype['@@iterator']
    || DEFAULT && IterablePrototype[DEFAULT];
  var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
  var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
  var CurrentIteratorPrototype, methods, KEY;

  // fix native
  if (anyNativeIterator) {
    CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable()));
    if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
      if ( objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2) {
        if (objectSetPrototypeOf) {
          objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2);
        } else if (typeof CurrentIteratorPrototype[ITERATOR$1] != 'function') {
          createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2);
        }
      }
      // Set @@toStringTag to native iterators
      setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
    }
  }

  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
    INCORRECT_VALUES_NAME = true;
    defaultIterator = function values() { return nativeIterator.call(this); };
  }

  // define iterator
  if ( IterablePrototype[ITERATOR$1] !== defaultIterator) {
    createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
  }
  iterators[NAME] = defaultIterator;

  // export additional methods
  if (DEFAULT) {
    methods = {
      values: getIterationMethod(VALUES),
      keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
      entries: getIterationMethod(ENTRIES)
    };
    if (FORCED) for (KEY in methods) {
      if (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
        redefine(IterablePrototype, KEY, methods[KEY]);
      }
    } else _export({ target: NAME, proto: true, forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME }, methods);
  }

  return methods;
};

var ARRAY_ITERATOR = 'Array Iterator';
var setInternalState$1 = internalState.set;
var getInternalState$1 = internalState.getterFor(ARRAY_ITERATOR);

// `Array.prototype.entries` method
// https://tc39.github.io/ecma262/#sec-array.prototype.entries
// `Array.prototype.keys` method
// https://tc39.github.io/ecma262/#sec-array.prototype.keys
// `Array.prototype.values` method
// https://tc39.github.io/ecma262/#sec-array.prototype.values
// `Array.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-array.prototype-@@iterator
// `CreateArrayIterator` internal method
// https://tc39.github.io/ecma262/#sec-createarrayiterator
var es_array_iterator = defineIterator(Array, 'Array', function (iterated, kind) {
  setInternalState$1(this, {
    type: ARRAY_ITERATOR,
    target: toIndexedObject(iterated), // target
    index: 0,                          // next index
    kind: kind                         // kind
  });
// `%ArrayIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%arrayiteratorprototype%.next
}, function () {
  var state = getInternalState$1(this);
  var target = state.target;
  var kind = state.kind;
  var index = state.index++;
  if (!target || index >= target.length) {
    state.target = undefined;
    return { value: undefined, done: true };
  }
  if (kind == 'keys') return { value: index, done: false };
  if (kind == 'values') return { value: target[index], done: false };
  return { value: [index, target[index]], done: false };
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values%
// https://tc39.github.io/ecma262/#sec-createunmappedargumentsobject
// https://tc39.github.io/ecma262/#sec-createmappedargumentsobject
iterators.Arguments = iterators.Array;

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

var nativeAssign = Object.assign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
// should work with symbols and should have deterministic property order (V8 bug)
var objectAssign = !nativeAssign || fails(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var symbol = Symbol();
  var alphabet = 'abcdefghijklmnopqrst';
  A[symbol] = 7;
  alphabet.split('').forEach(function (chr) { B[chr] = chr; });
  return nativeAssign({}, A)[symbol] != 7 || objectKeys(nativeAssign({}, B)).join('') != alphabet;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var argumentsLength = arguments.length;
  var index = 1;
  var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
  var propertyIsEnumerable = objectPropertyIsEnumerable.f;
  while (argumentsLength > index) {
    var S = indexedObject(arguments[index++]);
    var keys = getOwnPropertySymbols ? objectKeys(S).concat(getOwnPropertySymbols(S)) : objectKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!descriptors || propertyIsEnumerable.call(S, key)) T[key] = S[key];
    }
  } return T;
} : nativeAssign;

// `Object.assign` method
// https://tc39.github.io/ecma262/#sec-object.assign
_export({ target: 'Object', stat: true, forced: Object.assign !== objectAssign }, {
  assign: objectAssign
});

var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
// ES3 wrong here
var CORRECT_ARGUMENTS = classofRaw(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (error) { /* empty */ }
};

// getting tag from ES6+ `Object.prototype.toString`
var classof = function (it) {
  var O, tag, result;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$1)) == 'string' ? tag
    // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O)
    // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : result;
};

var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
var test = {};

test[TO_STRING_TAG$2] = 'z';

// `Object.prototype.toString` method implementation
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
var objectToString = String(test) !== '[object z]' ? function toString() {
  return '[object ' + classof(this) + ']';
} : test.toString;

var ObjectPrototype$2 = Object.prototype;

// `Object.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-object.prototype.tostring
if (objectToString !== ObjectPrototype$2.toString) {
  redefine(ObjectPrototype$2, 'toString', objectToString, { unsafe: true });
}

var freezing = !fails(function () {
  return Object.isExtensible(Object.preventExtensions({}));
});

var internalMetadata = createCommonjsModule(function (module) {
var defineProperty = objectDefineProperty.f;



var METADATA = uid('meta');
var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + ++id, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!has(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA)) setMetadata(it);
  return it;
};

var meta = module.exports = {
  REQUIRED: false,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;
});

var ITERATOR$2 = wellKnownSymbol('iterator');
var ArrayPrototype$1 = Array.prototype;

// check on default Array iterator
var isArrayIteratorMethod = function (it) {
  return it !== undefined && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
};

var ITERATOR$3 = wellKnownSymbol('iterator');

var getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR$3]
    || it['@@iterator']
    || iterators[classof(it)];
};

// call something on iterator step with safe closing on error
var callWithSafeIterationClosing = function (iterator, fn, value, ENTRIES) {
  try {
    return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (error) {
    var returnMethod = iterator['return'];
    if (returnMethod !== undefined) anObject(returnMethod.call(iterator));
    throw error;
  }
};

var iterate_1 = createCommonjsModule(function (module) {
var Result = function (stopped, result) {
  this.stopped = stopped;
  this.result = result;
};

var iterate = module.exports = function (iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
  var boundFunction = bindContext(fn, that, AS_ENTRIES ? 2 : 1);
  var iterator, iterFn, index, length, result, next, step;

  if (IS_ITERATOR) {
    iterator = iterable;
  } else {
    iterFn = getIteratorMethod(iterable);
    if (typeof iterFn != 'function') throw TypeError('Target is not iterable');
    // optimisation for array iterators
    if (isArrayIteratorMethod(iterFn)) {
      for (index = 0, length = toLength(iterable.length); length > index; index++) {
        result = AS_ENTRIES
          ? boundFunction(anObject(step = iterable[index])[0], step[1])
          : boundFunction(iterable[index]);
        if (result && result instanceof Result) return result;
      } return new Result(false);
    }
    iterator = iterFn.call(iterable);
  }

  next = iterator.next;
  while (!(step = next.call(iterator)).done) {
    result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
    if (typeof result == 'object' && result && result instanceof Result) return result;
  } return new Result(false);
};

iterate.stop = function (result) {
  return new Result(true, result);
};
});

var anInstance = function (it, Constructor, name) {
  if (!(it instanceof Constructor)) {
    throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
  } return it;
};

var ITERATOR$4 = wellKnownSymbol('iterator');
var SAFE_CLOSING = false;

try {
  var called = 0;
  var iteratorWithReturn = {
    next: function () {
      return { done: !!called++ };
    },
    'return': function () {
      SAFE_CLOSING = true;
    }
  };
  iteratorWithReturn[ITERATOR$4] = function () {
    return this;
  };
  // eslint-disable-next-line no-throw-literal
  Array.from(iteratorWithReturn, function () { throw 2; });
} catch (error) { /* empty */ }

var checkCorrectnessOfIteration = function (exec, SKIP_CLOSING) {
  if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
  var ITERATION_SUPPORT = false;
  try {
    var object = {};
    object[ITERATOR$4] = function () {
      return {
        next: function () {
          return { done: ITERATION_SUPPORT = true };
        }
      };
    };
    exec(object);
  } catch (error) { /* empty */ }
  return ITERATION_SUPPORT;
};

// makes subclassing work correct for wrapped built-ins
var inheritIfRequired = function ($this, dummy, Wrapper) {
  var NewTarget, NewTargetPrototype;
  if (
    // it can work only with native `setPrototypeOf`
    objectSetPrototypeOf &&
    // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    typeof (NewTarget = dummy.constructor) == 'function' &&
    NewTarget !== Wrapper &&
    isObject(NewTargetPrototype = NewTarget.prototype) &&
    NewTargetPrototype !== Wrapper.prototype
  ) objectSetPrototypeOf($this, NewTargetPrototype);
  return $this;
};

var collection = function (CONSTRUCTOR_NAME, wrapper, common, IS_MAP, IS_WEAK) {
  var NativeConstructor = global_1[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var ADDER = IS_MAP ? 'set' : 'add';
  var exported = {};

  var fixMethod = function (KEY) {
    var nativeMethod = NativePrototype[KEY];
    redefine(NativePrototype, KEY,
      KEY == 'add' ? function add(value) {
        nativeMethod.call(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : nativeMethod.call(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : nativeMethod.call(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        nativeMethod.call(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  // eslint-disable-next-line max-len
  if (isForced_1(CONSTRUCTOR_NAME, typeof NativeConstructor != 'function' || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
    new NativeConstructor().entries().next();
  })))) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    internalMetadata.REQUIRED = true;
  } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  _export({ global: true, forced: Constructor != NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};

var redefineAll = function (target, src, options) {
  for (var key in src) redefine(target, key, src[key], options);
  return target;
};

var SPECIES$3 = wellKnownSymbol('species');

var setSpecies = function (CONSTRUCTOR_NAME) {
  var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
  var defineProperty = objectDefineProperty.f;

  if (descriptors && Constructor && !Constructor[SPECIES$3]) {
    defineProperty(Constructor, SPECIES$3, {
      configurable: true,
      get: function () { return this; }
    });
  }
};

var defineProperty$4 = objectDefineProperty.f;








var fastKey = internalMetadata.fastKey;


var setInternalState$2 = internalState.set;
var internalStateGetterFor = internalState.getterFor;

var collectionStrong = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, CONSTRUCTOR_NAME);
      setInternalState$2(that, {
        type: CONSTRUCTOR_NAME,
        index: objectCreate(null),
        first: undefined,
        last: undefined,
        size: 0
      });
      if (!descriptors) that.size = 0;
      if (iterable != undefined) iterate_1(iterable, that[ADDER], that, IS_MAP);
    });

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: undefined,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (descriptors) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key == key) return entry;
      }
    };

    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var data = state.index;
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = undefined;
          delete data[entry.index];
          entry = entry.next;
        }
        state.first = state.last = undefined;
        if (descriptors) state.size = 0;
        else that.size = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first == entry) state.first = next;
          if (state.last == entry) state.last = prev;
          if (descriptors) state.size--;
          else that.size--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bindContext(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    redefineAll(C.prototype, IS_MAP ? {
      // 23.1.3.6 Map.prototype.get(key)
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // 23.1.3.9 Map.prototype.set(key, value)
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // 23.2.3.1 Set.prototype.add(value)
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (descriptors) defineProperty$4(C.prototype, 'size', {
      get: function () {
        return getInternalState(this).size;
      }
    });
    return C;
  },
  setStrong: function (C, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    defineIterator(C, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState$2(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: undefined
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = undefined;
        return { value: undefined, done: true };
      }
      // return step by kind
      if (kind == 'keys') return { value: entry.key, done: false };
      if (kind == 'values') return { value: entry.value, done: false };
      return { value: [entry.key, entry.value], done: false };
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(CONSTRUCTOR_NAME);
  }
};

// `Set` constructor
// https://tc39.github.io/ecma262/#sec-set-objects
var es_set = collection('Set', function (get) {
  return function Set() { return get(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);

// `String.prototype.{ codePointAt, at }` methods implementation
var createMethod$2 = function (CONVERT_TO_STRING) {
  return function ($this, pos) {
    var S = String(requireObjectCoercible($this));
    var position = toInteger(pos);
    var size = S.length;
    var first, second;
    if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
    first = S.charCodeAt(position);
    return first < 0xD800 || first > 0xDBFF || position + 1 === size
      || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF
        ? CONVERT_TO_STRING ? S.charAt(position) : first
        : CONVERT_TO_STRING ? S.slice(position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
  };
};

var stringMultibyte = {
  // `String.prototype.codePointAt` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.codepointat
  codeAt: createMethod$2(false),
  // `String.prototype.at` method
  // https://github.com/mathiasbynens/String.prototype.at
  charAt: createMethod$2(true)
};

var charAt = stringMultibyte.charAt;



var STRING_ITERATOR = 'String Iterator';
var setInternalState$3 = internalState.set;
var getInternalState$2 = internalState.getterFor(STRING_ITERATOR);

// `String.prototype[@@iterator]` method
// https://tc39.github.io/ecma262/#sec-string.prototype-@@iterator
defineIterator(String, 'String', function (iterated) {
  setInternalState$3(this, {
    type: STRING_ITERATOR,
    string: String(iterated),
    index: 0
  });
// `%StringIteratorPrototype%.next` method
// https://tc39.github.io/ecma262/#sec-%stringiteratorprototype%.next
}, function next() {
  var state = getInternalState$2(this);
  var string = state.string;
  var index = state.index;
  var point;
  if (index >= string.length) return { value: undefined, done: true };
  point = charAt(string, index);
  state.index += point.length;
  return { value: point, done: false };
});

// iterable DOM collections
// flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
var domIterables = {
  CSSRuleList: 0,
  CSSStyleDeclaration: 0,
  CSSValueList: 0,
  ClientRectList: 0,
  DOMRectList: 0,
  DOMStringList: 0,
  DOMTokenList: 1,
  DataTransferItemList: 0,
  FileList: 0,
  HTMLAllCollection: 0,
  HTMLCollection: 0,
  HTMLFormElement: 0,
  HTMLSelectElement: 0,
  MediaList: 0,
  MimeTypeArray: 0,
  NamedNodeMap: 0,
  NodeList: 1,
  PaintRequestList: 0,
  Plugin: 0,
  PluginArray: 0,
  SVGLengthList: 0,
  SVGNumberList: 0,
  SVGPathSegList: 0,
  SVGPointList: 0,
  SVGStringList: 0,
  SVGTransformList: 0,
  SourceBufferList: 0,
  StyleSheetList: 0,
  TextTrackCueList: 0,
  TextTrackList: 0,
  TouchList: 0
};

var ITERATOR$5 = wellKnownSymbol('iterator');
var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
var ArrayValues = es_array_iterator.values;

for (var COLLECTION_NAME in domIterables) {
  var Collection = global_1[COLLECTION_NAME];
  var CollectionPrototype = Collection && Collection.prototype;
  if (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype[ITERATOR$5] !== ArrayValues) try {
      createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
    } catch (error) {
      CollectionPrototype[ITERATOR$5] = ArrayValues;
    }
    if (!CollectionPrototype[TO_STRING_TAG$3]) {
      createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
    }
    if (domIterables[COLLECTION_NAME]) for (var METHOD_NAME in es_array_iterator) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) try {
        createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
      } catch (error) {
        CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
      }
    }
  }
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

var methods = {};
var names = [];
function registerMethods(name, m) {
  if (Array.isArray(name)) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = name[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _name = _step.value;
        registerMethods(_name, m);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return;
  }

  if (_typeof(name) === 'object') {
    for (var _name2 in name) {
      registerMethods(_name2, name[_name2]);
    }

    return;
  }

  addMethodNames(Object.getOwnPropertyNames(m));
  methods[name] = Object.assign(methods[name] || {}, m);
}
function getMethodsFor(name) {
  return methods[name] || {};
}
function getMethodNames() {
  return _toConsumableArray(new Set(names));
}
function addMethodNames(_names) {
  names.push.apply(names, _toConsumableArray(_names));
}

var $includes = arrayIncludes.includes;


// `Array.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-array.prototype.includes
_export({ target: 'Array', proto: true }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.github.io/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');

// `RegExp.prototype.flags` getter implementation
// https://tc39.github.io/ecma262/#sec-get-regexp.prototype.flags
var regexpFlags = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.dotAll) result += 's';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/;
  var re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1.lastIndex !== 0 || re2.lastIndex !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

var regexpExec = patchedExec;

_export({ target: 'RegExp', proto: true, forced: /./.exec !== regexpExec }, {
  exec: regexpExec
});

var MATCH = wellKnownSymbol('match');

// `IsRegExp` abstract operation
// https://tc39.github.io/ecma262/#sec-isregexp
var isRegexp = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : classofRaw(it) == 'RegExp');
};

var notARegexp = function (it) {
  if (isRegexp(it)) {
    throw TypeError("The method doesn't accept regular expressions");
  } return it;
};

var MATCH$1 = wellKnownSymbol('match');

var correctIsRegexpLogic = function (METHOD_NAME) {
  var regexp = /./;
  try {
    '/./'[METHOD_NAME](regexp);
  } catch (e) {
    try {
      regexp[MATCH$1] = false;
      return '/./'[METHOD_NAME](regexp);
    } catch (f) { /* empty */ }
  } return false;
};

// `String.prototype.includes` method
// https://tc39.github.io/ecma262/#sec-string.prototype.includes
_export({ target: 'String', proto: true, forced: !correctIsRegexpLogic('includes') }, {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~String(requireObjectCoercible(this))
      .indexOf(notARegexp(searchString), arguments.length > 1 ? arguments[1] : undefined);
  }
});

var SPECIES$4 = wellKnownSymbol('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var fixRegexpWellKnownSymbolLogic = function (KEY, length, exec, sham) {
  var SYMBOL = wellKnownSymbol(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    if (KEY === 'split') {
      // We can't use real regex here since it causes deoptimization
      // and serious performance degradation in V8
      // https://github.com/zloirock/core-js/issues/306
      re = {};
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES$4] = function () { return re; };
      re.flags = '';
      re[SYMBOL] = /./[SYMBOL];
    }

    re.exec = function () { execCalled = true; return null; };

    re[SYMBOL]('');
    return !execCalled;
  });

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
        }
        return { done: true, value: nativeMethod.call(str, regexp, arg2) };
      }
      return { done: false };
    });
    var stringMethod = methods[0];
    var regexMethod = methods[1];

    redefine(String.prototype, KEY, stringMethod);
    redefine(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return regexMethod.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return regexMethod.call(string, this); }
    );
    if (sham) createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
  }
};

var charAt$1 = stringMultibyte.charAt;

// `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
var advanceStringIndex = function (S, index, unicode) {
  return index + (unicode ? charAt$1(S, index).length : 1);
};

// `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
var regexpExecAbstract = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }

  if (classofRaw(R) !== 'RegExp') {
    throw TypeError('RegExp#exec called on incompatible receiver');
  }

  return regexpExec.call(R, S);
};

var max$2 = Math.max;
var min$2 = Math.min;
var floor$1 = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&'`]|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&'`]|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
fixRegexpWellKnownSymbolLogic('replace', 2, function (REPLACE, nativeReplace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = requireObjectCoercible(this);
      var replacer = searchValue == undefined ? undefined : searchValue[REPLACE];
      return replacer !== undefined
        ? replacer.call(searchValue, O, replaceValue)
        : nativeReplace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative(nativeReplace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);

      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regexpExecAbstract(rx, S);
        if (result === null) break;

        results.push(result);
        if (!global) break;

        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }

      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];

        var matched = String(result[0]);
        var position = max$2(min$2(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

  // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return nativeReplace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor$1(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});

// a string of all valid unicode whitespaces
// eslint-disable-next-line max-len
var whitespaces = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';

var whitespace = '[' + whitespaces + ']';
var ltrim = RegExp('^' + whitespace + whitespace + '*');
var rtrim = RegExp(whitespace + whitespace + '*$');

// `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
var createMethod$3 = function (TYPE) {
  return function ($this) {
    var string = String(requireObjectCoercible($this));
    if (TYPE & 1) string = string.replace(ltrim, '');
    if (TYPE & 2) string = string.replace(rtrim, '');
    return string;
  };
};

var stringTrim = {
  // `String.prototype.{ trimLeft, trimStart }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimstart
  start: createMethod$3(1),
  // `String.prototype.{ trimRight, trimEnd }` methods
  // https://tc39.github.io/ecma262/#sec-string.prototype.trimend
  end: createMethod$3(2),
  // `String.prototype.trim` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.trim
  trim: createMethod$3(3)
};

var non = '\u200B\u0085\u180E';

// check that a method works with the correct list
// of whitespaces and has a correct name
var forcedStringTrimMethod = function (METHOD_NAME) {
  return fails(function () {
    return !!whitespaces[METHOD_NAME]() || non[METHOD_NAME]() != non || whitespaces[METHOD_NAME].name !== METHOD_NAME;
  });
};

var $trim = stringTrim.trim;


// `String.prototype.trim` method
// https://tc39.github.io/ecma262/#sec-string.prototype.trim
_export({ target: 'String', proto: true, forced: forcedStringTrimMethod('trim') }, {
  trim: function trim() {
    return $trim(this);
  }
});

// Map function
function map(array, block) {
  var i;
  var il = array.length;
  var result = [];

  for (i = 0; i < il; i++) {
    result.push(block(array[i]));
  }

  return result;
} // Filter function

function filter(array, block) {
  var i;
  var il = array.length;
  var result = [];

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
} // Convert camel cased string to string seperated

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
function getOrigin(o, element) {
  // Allow origin or around as the names
  var origin = o.origin; // o.around == null ? o.origin : o.around

  var ox, oy; // Allow the user to pass a string to rotate around a given point

  if (typeof origin === 'string' || origin == null) {
    // Get the bounding box of the element with no transformations applied
    var string = (origin || 'center').toLowerCase().trim();

    var _element$bbox = element.bbox(),
        height = _element$bbox.height,
        width = _element$bbox.width,
        x = _element$bbox.x,
        y = _element$bbox.y; // Calculate the transformed x and y coordinates


    var bx = string.includes('left') ? x : string.includes('right') ? x + width : x + width / 2;
    var by = string.includes('top') ? y : string.includes('bottom') ? y + height : y + height / 2; // Set the bounds eg : "bottom-left", "Top right", "middle" etc...

    ox = o.ox != null ? o.ox : bx;
    oy = o.oy != null ? o.oy : by;
  } else {
    ox = origin[0];
    oy = origin[1];
  } // Return the origin as it is if it wasn't a string


  return [ox, oy];
}

var utils = ({
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
});

// Default namespaces
var ns = 'http://www.w3.org/2000/svg';
var xmlns = 'http://www.w3.org/2000/xmlns/';
var xlink = 'http://www.w3.org/1999/xlink';
var svgjs = 'http://svgjs.com/svgjs';

var namespaces = ({
	__proto__: null,
	ns: ns,
	xmlns: xmlns,
	xlink: xlink,
	svgjs: svgjs
});

var globals = {
  window: typeof window === 'undefined' ? null : window,
  document: typeof document === 'undefined' ? null : document
};
function registerWindow() {
  var win = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var doc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  globals.window = win;
  globals.document = doc;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Base = function Base() {
  _classCallCheck(this, Base);
};

var elements = {};
var root = '___SYMBOL___ROOT___'; // Method for element creation

function create(name) {
  // create element
  return globals.document.createElementNS(ns, name);
}
function makeInstance(element) {
  if (element instanceof Base) return element;

  if (_typeof(element) === 'object') {
    return adopter(element);
  }

  if (element == null) {
    return new elements[root]();
  }

  if (typeof element === 'string' && element.charAt(0) !== '<') {
    return adopter(globals.document.querySelector(element));
  }

  var node = create('svg');
  node.innerHTML = element; // We can use firstChild here because we know,
  // that the first char is < and thus an element

  element = adopter(node.firstChild);
  return element;
}
function nodeOrNew(name, node) {
  return node instanceof globals.window.Node ? node : create(name);
} // Adopt existing svg elements

function adopt(node) {
  // check for presence of node
  if (!node) return null; // make sure a node isn't already adopted

  if (node.instance instanceof Base) return node.instance; // initialize variables

  var className = capitalize(node.nodeName || 'Dom'); // Make sure that gradients are adopted correctly

  if (className === 'LinearGradient' || className === 'RadialGradient') {
    className = 'Gradient'; // Fallback to Dom if element is not known
  } else if (!elements[className]) {
    className = 'Dom';
  }

  return new elements[className](node);
}
var adopter = adopt;
function mockAdopt() {
  var mock = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : adopt;
  adopter = mock;
}
function register(element) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : element.name;
  var asRoot = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  elements[name] = element;
  if (asRoot) elements[root] = element;
  addMethodNames(Object.getOwnPropertyNames(element.prototype));
  return element;
}
function getClass(name) {
  return elements[name];
} // Element id sequence

var did = 1000; // Get next named element id

function eid(name) {
  return 'Svgjs' + capitalize(name) + did++;
} // Deep new id assignment

function assignNewId(node) {
  // do the same for SVG child nodes as well
  for (var i = node.children.length - 1; i >= 0; i--) {
    assignNewId(node.children[i]);
  }

  if (node.id) {
    return adopt(node).id(eid(node.nodeName));
  }

  return adopt(node);
} // Method for extending objects

function extend(modules, methods, attrCheck) {
  var key, i;
  modules = Array.isArray(modules) ? modules : [modules];

  for (i = modules.length - 1; i >= 0; i--) {
    for (key in methods) {
      var method = methods[key];

      if (attrCheck) {
        method = wrapWithAttrCheck(methods[key]);
      }

      modules[i].prototype[key] = method;
    }
  }
} // export function extendWithAttrCheck (...args) {
//   extend(...args, true)
// }

function wrapWithAttrCheck(fn) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var o = args[args.length - 1];

    if (o && o.constructor === Object && !(o instanceof Array)) {
      return fn.apply(this, args.slice(0, -1)).attr(o);
    } else {
      return fn.apply(this, args);
    }
  };
}
function invent(config) {
  // Create element initializer
  var initializer = typeof config.create === 'function' ? config.create : function (node) {
    this.constructor(node || create(config.create));
  }; // Inherit prototype

  if (config.inherit) {
    /* eslint new-cap: off */
    initializer.prototype = new config.inherit();
    initializer.prototype.constructor = initializer;
  } // Extend with methods


  if (config.extend) {
    extend(initializer, config.extend);
  } // Attach construct method to parent


  if (config.construct) {
    extend(config.parent || elements.Container, config.construct);
  }

  return initializer;
}

function siblings() {
  return this.parent().children();
} // Get the curent position siblings

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
  var i = this.position() + 1;
  var p = this.parent(); // move node one step forward

  p.removeElement(this).add(this, i); // make sure defs node is always at the top

  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node);
  }

  return this;
} // Send given element one step backward

function backward() {
  var i = this.position();

  if (i > 0) {
    this.parent().removeElement(this).add(this, i - 1);
  }

  return this;
} // Send given element all the way to the front

function front() {
  var p = this.parent(); // Move node forward

  p.node.appendChild(this.node); // Make sure defs node is always at the top

  if (typeof p.isRoot === 'function' && p.isRoot()) {
    p.node.appendChild(p.defs().node);
  }

  return this;
} // Send given element all the way to the back

function back() {
  if (this.position() > 0) {
    this.parent().removeElement(this).add(this, 0);
  }

  return this;
} // Inserts a given element before the targeted element

function before(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
  this.parent().add(element, i);
  return this;
} // Inserts a given element after the targeted element

function after(element) {
  element = makeInstance(element);
  element.remove();
  var i = this.position();
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
  siblings: siblings,
  position: position,
  next: next,
  prev: prev,
  forward: forward,
  backward: backward,
  front: front,
  back: back,
  before: before,
  after: after,
  insertBefore: insertBefore,
  insertAfter: insertAfter
});

var $filter = arrayIteration.filter;


// `Array.prototype.filter` method
// https://tc39.github.io/ecma262/#sec-array.prototype.filter
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('filter') }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var sloppyArrayMethod = function (METHOD_NAME, argument) {
  var method = [][METHOD_NAME];
  return !method || !fails(function () {
    // eslint-disable-next-line no-useless-call,no-throw-literal
    method.call(null, argument || function () { throw 1; }, 1);
  });
};

var $indexOf = arrayIncludes.indexOf;


var nativeIndexOf = [].indexOf;

var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [1].indexOf(1, -0) < 0;
var SLOPPY_METHOD = sloppyArrayMethod('indexOf');

// `Array.prototype.indexOf` method
// https://tc39.github.io/ecma262/#sec-array.prototype.indexof
_export({ target: 'Array', proto: true, forced: NEGATIVE_ZERO || SLOPPY_METHOD }, {
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? nativeIndexOf.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var nativeJoin = [].join;

var ES3_STRINGS = indexedObject != Object;
var SLOPPY_METHOD$1 = sloppyArrayMethod('join', ',');

// `Array.prototype.join` method
// https://tc39.github.io/ecma262/#sec-array.prototype.join
_export({ target: 'Array', proto: true, forced: ES3_STRINGS || SLOPPY_METHOD$1 }, {
  join: function join(separator) {
    return nativeJoin.call(toIndexedObject(this), separator === undefined ? ',' : separator);
  }
});

var SPECIES$5 = wellKnownSymbol('species');

// `SpeciesConstructor` abstract operation
// https://tc39.github.io/ecma262/#sec-speciesconstructor
var speciesConstructor = function (O, defaultConstructor) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES$5]) == undefined ? defaultConstructor : aFunction$1(S);
};

var arrayPush = [].push;
var min$3 = Math.min;
var MAX_UINT32 = 0xFFFFFFFF;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { return !RegExp(MAX_UINT32, 'y'); });

// @@split logic
fixRegexpWellKnownSymbolLogic('split', 2, function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'.split(/(b)*/)[1] == 'c' ||
    'test'.split(/(?:)/, -1).length != 4 ||
    'ab'.split(/(?:ab)*/).length != 2 ||
    '.'.split(/(.?)(.?)/).length != 4 ||
    '.'.split(/()()/).length > 1 ||
    ''.split(/.?/).length
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(requireObjectCoercible(this));
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (separator === undefined) return [string];
      // If `separator` is not a regex, use native split
      if (!isRegexp(separator)) {
        return nativeSplit.call(string, separator, lim);
      }
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy.lastIndex;
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match.length > 1 && match.index < string.length) arrayPush.apply(output, match.slice(1));
          lastLength = match[0].length;
          lastLastIndex = lastIndex;
          if (output.length >= lim) break;
        }
        if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
      }
      if (lastLastIndex === string.length) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output.length > lim ? output.slice(0, lim) : output;
    };
  // Chakra, V8
  } else if ('0'.split(undefined, 0).length) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : nativeSplit.call(this, separator, limit);
    };
  } else internalSplit = nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regexpExecAbstract(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = min$3(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
}, !SUPPORTS_Y);

// Parse unit value
var numberAndUnit = /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i; // Parse hex value

var hex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i; // Parse rgb value

var rgb = /rgb\((\d+),(\d+),(\d+)\)/; // Parse reference id

var reference = /(#[a-z0-9\-_]+)/i; // splits a transformation chain

var transforms = /\)\s*,?\s*/; // Whitespace

var whitespace$1 = /\s/g; // Test hex value

var isHex = /^#[a-f0-9]{3,6}$/i; // Test rgb value

var isRgb = /^rgb\(/; // Test css declaration

var isCss = /[^:]+:[^;]+;?/; // Test for blank string

var isBlank = /^(\s+)?$/; // Test for numeric string

var isNumber = /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i; // Test for percent value

var isPercent = /^-?[\d.]+%$/; // Test for image url

var isImage = /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i; // split at whitespace and comma

var delimiter = /[\s,]+/; // The following regex are used to parse the d attribute of a path
// Matches all hyphens which are not after an exponent

var hyphen = /([^e])-/gi; // Replaces and tests for all path letters

var pathLetters = /[MLHVCSQTAZ]/gi; // yes we need this one, too

var isPathLetter = /[MLHVCSQTAZ]/i; // matches 0.154.23.45

var numbersWithDots = /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi; // matches .

var dots = /\./g;

var regex = ({
	__proto__: null,
	numberAndUnit: numberAndUnit,
	hex: hex,
	rgb: rgb,
	reference: reference,
	transforms: transforms,
	whitespace: whitespace$1,
	isHex: isHex,
	isRgb: isRgb,
	isCss: isCss,
	isBlank: isBlank,
	isNumber: isNumber,
	isPercent: isPercent,
	isImage: isImage,
	delimiter: delimiter,
	hyphen: hyphen,
	pathLetters: pathLetters,
	isPathLetter: isPathLetter,
	numbersWithDots: numbersWithDots,
	dots: dots
});

function classes() {
  var attr = this.attr('class');
  return attr == null ? [] : attr.trim().split(delimiter);
} // Return true if class exists on the node, false otherwise

function hasClass(name) {
  return this.classes().indexOf(name) !== -1;
} // Add class to the node

function addClass(name) {
  if (!this.hasClass(name)) {
    var array = this.classes();
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
  classes: classes,
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass
});

var $forEach$1 = arrayIteration.forEach;


// `Array.prototype.forEach` method implementation
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
var arrayForEach = sloppyArrayMethod('forEach') ? function forEach(callbackfn /* , thisArg */) {
  return $forEach$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
} : [].forEach;

// `Array.prototype.forEach` method
// https://tc39.github.io/ecma262/#sec-array.prototype.foreach
_export({ target: 'Array', proto: true, forced: [].forEach != arrayForEach }, {
  forEach: arrayForEach
});

for (var COLLECTION_NAME$1 in domIterables) {
  var Collection$1 = global_1[COLLECTION_NAME$1];
  var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach) try {
    createNonEnumerableProperty(CollectionPrototype$1, 'forEach', arrayForEach);
  } catch (error) {
    CollectionPrototype$1.forEach = arrayForEach;
  }
}

function css(style, val) {
  var ret = {};

  if (arguments.length === 0) {
    // get full style as object
    this.node.style.cssText.split(/\s*;\s*/).filter(function (el) {
      return !!el.length;
    }).forEach(function (el) {
      var t = el.split(/\s*:\s*/);
      ret[t[0]] = t[1];
    });
    return ret;
  }

  if (arguments.length < 2) {
    // get style properties in the array
    if (Array.isArray(style)) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = style[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var name = _step.value;
          var cased = camelCase(name);
          ret[cased] = this.node.style[cased];
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return ret;
    } // get style for property


    if (typeof style === 'string') {
      return this.node.style[camelCase(style)];
    } // set styles in object


    if (_typeof(style) === 'object') {
      for (var _name in style) {
        // set empty string if null/undefined/'' was given
        this.node.style[camelCase(_name)] = style[_name] == null || isBlank.test(style[_name]) ? '' : style[_name];
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
  css: css,
  show: show,
  hide: hide,
  visible: visible
});

function data$1(a, v, r) {
  if (_typeof(a) === 'object') {
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
  data: data$1
});

function remember(k, v) {
  // remember every item in an object individually
  if (_typeof(arguments[0]) === 'object') {
    for (var key in k) {
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
    for (var i = arguments.length - 1; i >= 0; i--) {
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
  remember: remember,
  forget: forget,
  memory: memory
});

// `Array.prototype.{ reduce, reduceRight }` methods implementation
var createMethod$4 = function (IS_RIGHT) {
  return function (that, callbackfn, argumentsLength, memo) {
    aFunction$1(callbackfn);
    var O = toObject(that);
    var self = indexedObject(O);
    var length = toLength(O.length);
    var index = IS_RIGHT ? length - 1 : 0;
    var i = IS_RIGHT ? -1 : 1;
    if (argumentsLength < 2) while (true) {
      if (index in self) {
        memo = self[index];
        index += i;
        break;
      }
      index += i;
      if (IS_RIGHT ? index < 0 : length <= index) {
        throw TypeError('Reduce of empty array with no initial value');
      }
    }
    for (;IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
      memo = callbackfn(memo, self[index], index, O);
    }
    return memo;
  };
};

var arrayReduce = {
  // `Array.prototype.reduce` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduce
  left: createMethod$4(false),
  // `Array.prototype.reduceRight` method
  // https://tc39.github.io/ecma262/#sec-array.prototype.reduceright
  right: createMethod$4(true)
};

var $reduce = arrayReduce.left;


// `Array.prototype.reduce` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reduce
_export({ target: 'Array', proto: true, forced: sloppyArrayMethod('reduce') }, {
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var listenerId = 0;
var windowEvents = {};

function getEvents(instance) {
  var n = instance.getEventHolder(); // We dont want to save events in global space

  if (n === globals.window) n = windowEvents;
  if (!n.events) n.events = {};
  return n.events;
}

function getEventTarget(instance) {
  return instance.getEventTarget();
}

function clearEvents(instance) {
  var n = instance.getEventHolder();
  if (n.events) n.events = {};
} // Add event binder in the SVG namespace


function on(node, events, listener, binding, options) {
  var l = listener.bind(binding || node);
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance); // events can be an array of events or a string of events

  events = Array.isArray(events) ? events : events.split(delimiter); // add id to listener

  if (!listener._svgjsListenerId) {
    listener._svgjsListenerId = ++listenerId;
  }

  events.forEach(function (event) {
    var ev = event.split('.')[0];
    var ns = event.split('.')[1] || '*'; // ensure valid object

    bag[ev] = bag[ev] || {};
    bag[ev][ns] = bag[ev][ns] || {}; // reference listener

    bag[ev][ns][listener._svgjsListenerId] = l; // add listener

    n.addEventListener(ev, l, options || false);
  });
} // Add event unbinder in the SVG namespace

function off(node, events, listener, options) {
  var instance = makeInstance(node);
  var bag = getEvents(instance);
  var n = getEventTarget(instance); // listener can be a function or a number

  if (typeof listener === 'function') {
    listener = listener._svgjsListenerId;
    if (!listener) return;
  } // events can be an array of events or a string or undefined


  events = Array.isArray(events) ? events : (events || '').split(delimiter);
  events.forEach(function (event) {
    var ev = event && event.split('.')[0];
    var ns = event && event.split('.')[1];
    var namespace, l;

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
function dispatch(node, event, data) {
  var n = getEventTarget(node); // Dispatch event

  if (event instanceof globals.window.Event) {
    n.dispatchEvent(event);
  } else {
    event = new globals.window.CustomEvent(event, {
      detail: data,
      cancelable: true
    });
    n.dispatchEvent(event);
  }

  return event;
}

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = v8Version >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;

// `Array.prototype.concat` method
// https://tc39.github.io/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
_export({ target: 'Array', proto: true, forced: FORCED }, {
  concat: function concat(arg) { // eslint-disable-line no-unused-vars
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = toLength(E.length);
        if (n + len > MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        if (n >= MAX_SAFE_INTEGER) throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});

var $map = arrayIteration.map;


// `Array.prototype.map` method
// https://tc39.github.io/ecma262/#sec-array.prototype.map
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('map') }, {
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = DatePrototype[TO_STRING];
var getTime = DatePrototype.getTime;

// `Date.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-date.prototype.tostring
if (new Date(NaN) + '' != INVALID_DATE) {
  redefine(DatePrototype, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? nativeDateToString.call(this) : INVALID_DATE;
  });
}

var trim = stringTrim.trim;


var nativeParseInt = global_1.parseInt;
var hex$1 = /^[+-]?0[Xx]/;
var FORCED$1 = nativeParseInt(whitespaces + '08') !== 8 || nativeParseInt(whitespaces + '0x16') !== 22;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
var _parseInt = FORCED$1 ? function parseInt(string, radix) {
  var S = trim(String(string));
  return nativeParseInt(S, (radix >>> 0) || (hex$1.test(S) ? 16 : 10));
} : nativeParseInt;

// `parseInt` method
// https://tc39.github.io/ecma262/#sec-parseint-string-radix
_export({ global: true, forced: parseInt != _parseInt }, {
  parseInt: _parseInt
});

var TO_STRING$1 = 'toString';
var RegExpPrototype = RegExp.prototype;
var nativeToString = RegExpPrototype[TO_STRING$1];

var NOT_GENERIC = fails(function () { return nativeToString.call({ source: 'a', flags: 'b' }) != '/a/b'; });
// FF44- RegExp#toString has a wrong name
var INCORRECT_NAME = nativeToString.name != TO_STRING$1;

// `RegExp.prototype.toString` method
// https://tc39.github.io/ecma262/#sec-regexp.prototype.tostring
if (NOT_GENERIC || INCORRECT_NAME) {
  redefine(RegExp.prototype, TO_STRING$1, function toString() {
    var R = anObject(this);
    var p = String(R.source);
    var rf = R.flags;
    var f = String(rf === undefined && R instanceof RegExp && !('flags' in RegExpPrototype) ? regexpFlags.call(R) : rf);
    return '/' + p + '/' + f;
  }, { unsafe: true });
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

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

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function sixDigitHex(hex) {
  return hex.length === 4 ? ['#', hex.substring(1, 2), hex.substring(1, 2), hex.substring(2, 3), hex.substring(2, 3), hex.substring(3, 4), hex.substring(3, 4)].join('') : hex;
}

function componentHex(component) {
  var integer = Math.round(component);
  var bounded = Math.max(0, Math.min(255, integer));
  var hex = bounded.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function is(object, space) {
  for (var i = space.length; i--;) {
    if (object[space[i]] == null) {
      return false;
    }
  }

  return true;
}

function getParameters(a, b) {
  var params = is(a, 'rgb') ? {
    _a: a.r,
    _b: a.g,
    _c: a.b,
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

var Color =
/*#__PURE__*/
function () {
  function Color() {
    _classCallCheck(this, Color);

    this.init.apply(this, arguments);
  }

  _createClass(Color, [{
    key: "init",
    value: function init() {
      var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      var space = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'rgb';
      // This catches the case when a falsy value is passed like ''
      a = !a ? 0 : a; // Reset all values in case the init function is rerun with new color space

      if (this.space) {
        for (var component in this.space) {
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
          space: space
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
        var values = getParameters(a, b);
        Object.assign(this, values);
      } else if (typeof a === 'string') {
        if (isRgb.test(a)) {
          var noWhitespace = a.replace(whitespace$1, '');

          var _rgb$exec$slice$map = rgb.exec(noWhitespace).slice(1, 4).map(function (v) {
            return parseInt(v);
          }),
              _rgb$exec$slice$map2 = _slicedToArray(_rgb$exec$slice$map, 3),
              _a2 = _rgb$exec$slice$map2[0],
              _b2 = _rgb$exec$slice$map2[1],
              _c2 = _rgb$exec$slice$map2[2];

          Object.assign(this, {
            _a: _a2,
            _b: _b2,
            _c: _c2,
            _d: 0,
            space: 'rgb'
          });
        } else if (isHex.test(a)) {
          var hexParse = function hexParse(v) {
            return parseInt(v, 16);
          };

          var _hex$exec$map = hex.exec(sixDigitHex(a)).map(hexParse),
              _hex$exec$map2 = _slicedToArray(_hex$exec$map, 4),
              _a3 = _hex$exec$map2[1],
              _b3 = _hex$exec$map2[2],
              _c3 = _hex$exec$map2[3];

          Object.assign(this, {
            _a: _a3,
            _b: _b3,
            _c: _c3,
            _d: 0,
            space: 'rgb'
          });
        } else throw Error('Unsupported string format, can\'t construct Color');
      } // Now add the components as a convenience


      var _a = this._a,
          _b = this._b,
          _c = this._c,
          _d = this._d;
      var components = this.space === 'rgb' ? {
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
    /*
    Conversion Methods
    */

  }, {
    key: "rgb",
    value: function rgb() {
      if (this.space === 'rgb') {
        return this;
      } else if (cieSpace(this.space)) {
        // Convert to the xyz color space
        var x = this.x,
            y = this.y,
            z = this.z;

        if (this.space === 'lab' || this.space === 'lch') {
          // Get the values in the lab space
          var l = this.l,
              a = this.a,
              _b4 = this.b;

          if (this.space === 'lch') {
            var c = this.c,
                h = this.h;
            var dToR = Math.PI / 180;
            a = c * Math.cos(dToR * h);
            _b4 = c * Math.sin(dToR * h);
          } // Undo the nonlinear function


          var yL = (l + 16) / 116;
          var xL = a / 500 + yL;
          var zL = yL - _b4 / 200; // Get the xyz values

          var ct = 16 / 116;
          var mx = 0.008856;
          var nm = 7.787;
          x = 0.95047 * (Math.pow(xL, 3) > mx ? Math.pow(xL, 3) : (xL - ct) / nm);
          y = 1.00000 * (Math.pow(yL, 3) > mx ? Math.pow(yL, 3) : (yL - ct) / nm);
          z = 1.08883 * (Math.pow(zL, 3) > mx ? Math.pow(zL, 3) : (zL - ct) / nm);
        } // Convert xyz to unbounded rgb values


        var rU = x * 3.2406 + y * -1.5372 + z * -0.4986;
        var gU = x * -0.9689 + y * 1.8758 + z * 0.0415;
        var bU = x * 0.0557 + y * -0.2040 + z * 1.0570; // Convert the values to true rgb values

        var pow = Math.pow;
        var bd = 0.0031308;
        var r = rU > bd ? 1.055 * pow(rU, 1 / 2.4) - 0.055 : 12.92 * rU;
        var g = gU > bd ? 1.055 * pow(gU, 1 / 2.4) - 0.055 : 12.92 * gU;
        var b = bU > bd ? 1.055 * pow(bU, 1 / 2.4) - 0.055 : 12.92 * bU; // Make and return the color

        var color = new Color(255 * r, 255 * g, 255 * b);
        return color;
      } else if (this.space === 'hsl') {
        // https://bgrins.github.io/TinyColor/docs/tinycolor.html
        // Get the current hsl values
        var _h = this.h,
            s = this.s,
            _l = this.l;
        _h /= 360;
        s /= 100;
        _l /= 100; // If we are grey, then just make the color directly

        if (s === 0) {
          _l *= 255;

          var _color2 = new Color(_l, _l, _l);

          return _color2;
        } // TODO I have no idea what this does :D If you figure it out, tell me!


        var q = _l < 0.5 ? _l * (1 + s) : _l + s - _l * s;
        var p = 2 * _l - q; // Get the rgb values

        var _r = 255 * hueToRgb(p, q, _h + 1 / 3);

        var _g = 255 * hueToRgb(p, q, _h);

        var _b5 = 255 * hueToRgb(p, q, _h - 1 / 3); // Make a new color


        var _color = new Color(_r, _g, _b5);

        return _color;
      } else if (this.space === 'cmyk') {
        // https://gist.github.com/felipesabino/5066336
        // Get the normalised cmyk values
        var _c4 = this.c,
            m = this.m,
            _y = this.y,
            k = this.k; // Get the rgb values

        var _r2 = 255 * (1 - Math.min(1, _c4 * (1 - k) + k));

        var _g2 = 255 * (1 - Math.min(1, m * (1 - k) + k));

        var _b6 = 255 * (1 - Math.min(1, _y * (1 - k) + k)); // Form the color and return it


        var _color3 = new Color(_r2, _g2, _b6);

        return _color3;
      } else {
        return this;
      }
    }
  }, {
    key: "lab",
    value: function lab() {
      // Get the xyz color
      var _this$xyz = this.xyz(),
          x = _this$xyz.x,
          y = _this$xyz.y,
          z = _this$xyz.z; // Get the lab components


      var l = 116 * y - 16;
      var a = 500 * (x - y);
      var b = 200 * (y - z); // Construct and return a new color

      var color = new Color(l, a, b, 'lab');
      return color;
    }
  }, {
    key: "xyz",
    value: function xyz() {
      // Normalise the red, green and blue values
      var _this$rgb = this.rgb(),
          r255 = _this$rgb._a,
          g255 = _this$rgb._b,
          b255 = _this$rgb._c;

      var _map = [r255, g255, b255].map(function (v) {
        return v / 255;
      }),
          _map2 = _slicedToArray(_map, 3),
          r = _map2[0],
          g = _map2[1],
          b = _map2[2]; // Convert to the lab rgb space


      var rL = r > 0.04045 ? Math.pow((r + 0.055) / 1.055, 2.4) : r / 12.92;
      var gL = g > 0.04045 ? Math.pow((g + 0.055) / 1.055, 2.4) : g / 12.92;
      var bL = b > 0.04045 ? Math.pow((b + 0.055) / 1.055, 2.4) : b / 12.92; // Convert to the xyz color space without bounding the values

      var xU = (rL * 0.4124 + gL * 0.3576 + bL * 0.1805) / 0.95047;
      var yU = (rL * 0.2126 + gL * 0.7152 + bL * 0.0722) / 1.00000;
      var zU = (rL * 0.0193 + gL * 0.1192 + bL * 0.9505) / 1.08883; // Get the proper xyz values by applying the bounding

      var x = xU > 0.008856 ? Math.pow(xU, 1 / 3) : 7.787 * xU + 16 / 116;
      var y = yU > 0.008856 ? Math.pow(yU, 1 / 3) : 7.787 * yU + 16 / 116;
      var z = zU > 0.008856 ? Math.pow(zU, 1 / 3) : 7.787 * zU + 16 / 116; // Make and return the color

      var color = new Color(x, y, z, 'xyz');
      return color;
    }
  }, {
    key: "lch",
    value: function lch() {
      // Get the lab color directly
      var _this$lab = this.lab(),
          l = _this$lab.l,
          a = _this$lab.a,
          b = _this$lab.b; // Get the chromaticity and the hue using polar coordinates


      var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
      var h = 180 * Math.atan2(b, a) / Math.PI;

      if (h < 0) {
        h *= -1;
        h = 360 - h;
      } // Make a new color and return it


      var color = new Color(l, c, h, 'lch');
      return color;
    }
  }, {
    key: "hsl",
    value: function hsl() {
      // Get the rgb values
      var _this$rgb2 = this.rgb(),
          _a = _this$rgb2._a,
          _b = _this$rgb2._b,
          _c = _this$rgb2._c;

      var _map3 = [_a, _b, _c].map(function (v) {
        return v / 255;
      }),
          _map4 = _slicedToArray(_map3, 3),
          r = _map4[0],
          g = _map4[1],
          b = _map4[2]; // Find the maximum and minimum values to get the lightness


      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var l = (max + min) / 2; // If the r, g, v values are identical then we are grey

      var isGrey = max === min; // Calculate the hue and saturation

      var delta = max - min;
      var s = isGrey ? 0 : l > 0.5 ? delta / (2 - max - min) : delta / (max + min);
      var h = isGrey ? 0 : max === r ? ((g - b) / delta + (g < b ? 6 : 0)) / 6 : max === g ? ((b - r) / delta + 2) / 6 : max === b ? ((r - g) / delta + 4) / 6 : 0; // Construct and return the new color

      var color = new Color(360 * h, 100 * s, 100 * l, 'hsl');
      return color;
    }
  }, {
    key: "cmyk",
    value: function cmyk() {
      // Get the rgb values for the current color
      var _this$rgb3 = this.rgb(),
          _a = _this$rgb3._a,
          _b = _this$rgb3._b,
          _c = _this$rgb3._c;

      var _map5 = [_a, _b, _c].map(function (v) {
        return v / 255;
      }),
          _map6 = _slicedToArray(_map5, 3),
          r = _map6[0],
          g = _map6[1],
          b = _map6[2]; // Get the cmyk values in an unbounded format


      var k = Math.min(1 - r, 1 - g, 1 - b);

      if (k === 1) {
        // Catch the black case
        return new Color(0, 0, 0, 1, 'cmyk');
      }

      var c = (1 - r - k) / (1 - k);
      var m = (1 - g - k) / (1 - k);
      var y = (1 - b - k) / (1 - k); // Construct the new color

      var color = new Color(c, m, y, k, 'cmyk');
      return color;
    }
    /*
    Input and Output methods
    */

  }, {
    key: "_clamped",
    value: function _clamped() {
      var _this$rgb4 = this.rgb(),
          _a = _this$rgb4._a,
          _b = _this$rgb4._b,
          _c = _this$rgb4._c;

      var max = Math.max,
          min = Math.min,
          round = Math.round;

      var format = function format(v) {
        return max(0, min(round(v), 255));
      };

      return [_a, _b, _c].map(format);
    }
  }, {
    key: "toHex",
    value: function toHex() {
      var _this$_clamped$map = this._clamped().map(componentHex),
          _this$_clamped$map2 = _slicedToArray(_this$_clamped$map, 3),
          r = _this$_clamped$map2[0],
          g = _this$_clamped$map2[1],
          b = _this$_clamped$map2[2];

      return "#".concat(r).concat(g).concat(b);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.toHex();
    }
  }, {
    key: "toRgb",
    value: function toRgb() {
      var _this$_clamped = this._clamped(),
          _this$_clamped2 = _slicedToArray(_this$_clamped, 3),
          rV = _this$_clamped2[0],
          gV = _this$_clamped2[1],
          bV = _this$_clamped2[2];

      var string = "rgb(".concat(rV, ",").concat(gV, ",").concat(bV, ")");
      return string;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      var _a = this._a,
          _b = this._b,
          _c = this._c,
          _d = this._d,
          space = this.space;
      return [_a, _b, _c, _d, space];
    }
    /*
    Generating random colors
    */

  }], [{
    key: "random",
    value: function random() {
      var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'vibrant';
      var t = arguments.length > 1 ? arguments[1] : undefined;
      // Get the math modules
      var random = Math.random,
          round = Math.round,
          sin = Math.sin,
          pi = Math.PI; // Run the correct generator

      if (mode === 'vibrant') {
        var l = (81 - 57) * random() + 57;
        var c = (83 - 45) * random() + 45;
        var h = 360 * random();
        var color = new Color(l, c, h, 'lch');
        return color;
      } else if (mode === 'sine') {
        t = t == null ? random() : t;
        var r = round(80 * sin(2 * pi * t / 0.5 + 0.01) + 150);
        var g = round(50 * sin(2 * pi * t / 0.5 + 4.6) + 200);
        var b = round(100 * sin(2 * pi * t / 0.5 + 2.3) + 150);

        var _color4 = new Color(r, g, b);

        return _color4;
      } else if (mode === 'pastel') {
        var _l2 = (94 - 86) * random() + 86;

        var _c5 = (26 - 9) * random() + 9;

        var _h2 = 360 * random();

        var _color5 = new Color(_l2, _c5, _h2, 'lch');

        return _color5;
      } else if (mode === 'dark') {
        var _l3 = 10 + 10 * random();

        var _c6 = (125 - 75) * random() + 86;

        var _h3 = 360 * random();

        var _color6 = new Color(_l3, _c6, _h3, 'lch');

        return _color6;
      } else if (mode === 'rgb') {
        var _r3 = 255 * random();

        var _g3 = 255 * random();

        var _b7 = 255 * random();

        var _color7 = new Color(_r3, _g3, _b7);

        return _color7;
      } else if (mode === 'lab') {
        var _l4 = 100 * random();

        var a = 256 * random() - 128;

        var _b8 = 256 * random() - 128;

        var _color8 = new Color(_l4, a, _b8, 'lab');

        return _color8;
      } else if (mode === 'grey') {
        var grey = 255 * random();

        var _color9 = new Color(grey, grey, grey);

        return _color9;
      }
    }
    /*
    Constructing colors
    */
    // Test if given value is a color string

  }, {
    key: "test",
    value: function test(color) {
      return typeof color === 'string' && (isHex.test(color) || isRgb.test(color));
    } // Test if given value is an rgb object

  }, {
    key: "isRgb",
    value: function isRgb(color) {
      return color && typeof color.r === 'number' && typeof color.g === 'number' && typeof color.b === 'number';
    } // Test if given value is a color

  }, {
    key: "isColor",
    value: function isColor(color) {
      return color && (color instanceof Color || this.isRgb(color) || this.test(color));
    }
  }]);

  return Color;
}();

var FAILS_ON_PRIMITIVES$1 = fails(function () { objectKeys(1); });

// `Object.keys` method
// https://tc39.github.io/ecma262/#sec-object.keys
_export({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES$1 }, {
  keys: function keys(it) {
    return objectKeys(toObject(it));
  }
});

// @@match logic
fixRegexpWellKnownSymbolLogic('match', 1, function (MATCH, nativeMatch, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible(this);
      var matcher = regexp == undefined ? undefined : regexp[MATCH];
      return matcher !== undefined ? matcher.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative(nativeMatch, regexp, this);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);

      if (!rx.global) return regexpExecAbstract(rx, S);

      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regexpExecAbstract(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

var getOwnPropertyNames = objectGetOwnPropertyNames.f;
var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
var defineProperty$5 = objectDefineProperty.f;
var trim$1 = stringTrim.trim;

var NUMBER = 'Number';
var NativeNumber = global_1[NUMBER];
var NumberPrototype = NativeNumber.prototype;

// Opera ~12 has broken Object#toString
var BROKEN_CLASSOF = classofRaw(objectCreate(NumberPrototype)) == NUMBER;

// `ToNumber` abstract operation
// https://tc39.github.io/ecma262/#sec-tonumber
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  var first, third, radix, maxCode, digits, length, index, code;
  if (typeof it == 'string' && it.length > 2) {
    it = trim$1(it);
    first = it.charCodeAt(0);
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal of /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal of /^0o[0-7]+$/i
        default: return +it;
      }
      digits = it.slice(2);
      length = digits.length;
      for (index = 0; index < length; index++) {
        code = digits.charCodeAt(index);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

// `Number` constructor
// https://tc39.github.io/ecma262/#sec-number-constructor
if (isForced_1(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
  var NumberWrapper = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var dummy = this;
    return dummy instanceof NumberWrapper
      // check on 1..constructor(foo) case
      && (BROKEN_CLASSOF ? fails(function () { NumberPrototype.valueOf.call(dummy); }) : classofRaw(dummy) != NUMBER)
        ? inheritIfRequired(new NativeNumber(toNumber(it)), dummy, NumberWrapper) : toNumber(it);
  };
  for (var keys$1 = descriptors ? getOwnPropertyNames(NativeNumber) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys$1.length > j; j++) {
    if (has(NativeNumber, key = keys$1[j]) && !has(NumberWrapper, key)) {
      defineProperty$5(NumberWrapper, key, getOwnPropertyDescriptor$2(NativeNumber, key));
    }
  }
  NumberWrapper.prototype = NumberPrototype;
  NumberPrototype.constructor = NumberWrapper;
  redefine(global_1, NUMBER, NumberWrapper);
}

var trim$2 = stringTrim.trim;


var nativeParseFloat = global_1.parseFloat;
var FORCED$2 = 1 / nativeParseFloat(whitespaces + '-0') !== -Infinity;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
var _parseFloat = FORCED$2 ? function parseFloat(string) {
  var trimmedString = trim$2(String(string));
  var result = nativeParseFloat(trimmedString);
  return result === 0 && trimmedString.charAt(0) == '-' ? -0 : result;
} : nativeParseFloat;

// `parseFloat` method
// https://tc39.github.io/ecma262/#sec-parsefloat-string
_export({ global: true, forced: parseFloat != _parseFloat }, {
  parseFloat: _parseFloat
});

var Point =
/*#__PURE__*/
function () {
  // Initialize
  function Point() {
    _classCallCheck(this, Point);

    this.init.apply(this, arguments);
  }

  _createClass(Point, [{
    key: "init",
    value: function init(x, y) {
      var base = {
        x: 0,
        y: 0
      }; // ensure source as object

      var source = Array.isArray(x) ? {
        x: x[0],
        y: x[1]
      } : _typeof(x) === 'object' ? {
        x: x.x,
        y: x.y
      } : {
        x: x,
        y: y
      }; // merge source

      this.x = source.x == null ? base.x : source.x;
      this.y = source.y == null ? base.y : source.y;
      return this;
    } // Clone point

  }, {
    key: "clone",
    value: function clone() {
      return new Point(this);
    }
  }, {
    key: "transform",
    value: function transform(m) {
      return this.clone().transformO(m);
    } // Transform point with matrix

  }, {
    key: "transformO",
    value: function transformO(m) {
      if (!Matrix.isMatrixLike(m)) {
        m = new Matrix(m);
      }

      var x = this.x,
          y = this.y; // Perform the matrix multiplication

      this.x = m.a * x + m.c * y + m.e;
      this.y = m.b * x + m.d * y + m.f;
      return this;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y];
    }
  }]);

  return Point;
}();
function point(x, y) {
  return new Point(x, y).transform(this.screenCTM().inverse());
}

function closeEnough(a, b, threshold) {
  return Math.abs(b - a) < (threshold || 1e-6);
}

var Matrix =
/*#__PURE__*/
function () {
  function Matrix() {
    _classCallCheck(this, Matrix);

    this.init.apply(this, arguments);
  } // Initialize


  _createClass(Matrix, [{
    key: "init",
    value: function init(source) {
      var base = Matrix.fromArray([1, 0, 0, 1, 0, 0]); // ensure source as object

      source = source instanceof Element ? source.matrixify() : typeof source === 'string' ? Matrix.fromArray(source.split(delimiter).map(parseFloat)) : Array.isArray(source) ? Matrix.fromArray(source) : _typeof(source) === 'object' && Matrix.isMatrixLike(source) ? source : _typeof(source) === 'object' ? new Matrix().transform(source) : arguments.length === 6 ? Matrix.fromArray([].slice.call(arguments)) : base; // Merge the source matrix with the base matrix

      this.a = source.a != null ? source.a : base.a;
      this.b = source.b != null ? source.b : base.b;
      this.c = source.c != null ? source.c : base.c;
      this.d = source.d != null ? source.d : base.d;
      this.e = source.e != null ? source.e : base.e;
      this.f = source.f != null ? source.f : base.f;
      return this;
    } // Clones this matrix

  }, {
    key: "clone",
    value: function clone() {
      return new Matrix(this);
    } // Transform a matrix into another matrix by manipulating the space

  }, {
    key: "transform",
    value: function transform(o) {
      // Check if o is a matrix and then left multiply it directly
      if (Matrix.isMatrixLike(o)) {
        var matrix = new Matrix(o);
        return matrix.multiplyO(this);
      } // Get the proposed transformations and the current transformations


      var t = Matrix.formatTransforms(o);
      var current = this;

      var _transform = new Point(t.ox, t.oy).transform(current),
          ox = _transform.x,
          oy = _transform.y; // Construct the resulting matrix


      var transformer = new Matrix().translateO(t.rx, t.ry).lmultiplyO(current).translateO(-ox, -oy).scaleO(t.scaleX, t.scaleY).skewO(t.skewX, t.skewY).shearO(t.shear).rotateO(t.theta).translateO(ox, oy); // If we want the origin at a particular place, we force it there

      if (isFinite(t.px) || isFinite(t.py)) {
        var origin = new Point(ox, oy).transform(transformer); // TODO: Replace t.px with isFinite(t.px)

        var dx = t.px ? t.px - origin.x : 0;
        var dy = t.py ? t.py - origin.y : 0;
        transformer.translateO(dx, dy);
      } // Translate now after positioning


      transformer.translateO(t.tx, t.ty);
      return transformer;
    } // Applies a matrix defined by its affine parameters

  }, {
    key: "compose",
    value: function compose(o) {
      if (o.origin) {
        o.originX = o.origin[0];
        o.originY = o.origin[1];
      } // Get the parameters


      var ox = o.originX || 0;
      var oy = o.originY || 0;
      var sx = o.scaleX || 1;
      var sy = o.scaleY || 1;
      var lam = o.shear || 0;
      var theta = o.rotate || 0;
      var tx = o.translateX || 0;
      var ty = o.translateY || 0; // Apply the standard matrix

      var result = new Matrix().translateO(-ox, -oy).scaleO(sx, sy).shearO(lam).rotateO(theta).translateO(tx, ty).lmultiplyO(this).translateO(ox, oy);
      return result;
    } // Decomposes this matrix into its affine parameters

  }, {
    key: "decompose",
    value: function decompose() {
      var cx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var cy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      // Get the parameters from the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f; // Figure out if the winding direction is clockwise or counterclockwise

      var determinant = a * d - b * c;
      var ccw = determinant > 0 ? 1 : -1; // Since we only shear in x, we can use the x basis to get the x scale
      // and the rotation of the resulting matrix

      var sx = ccw * Math.sqrt(a * a + b * b);
      var thetaRad = Math.atan2(ccw * b, ccw * a);
      var theta = 180 / Math.PI * thetaRad;
      var ct = Math.cos(thetaRad);
      var st = Math.sin(thetaRad); // We can then solve the y basis vector simultaneously to get the other
      // two affine parameters directly from these parameters

      var lam = (a * c + b * d) / determinant;
      var sy = c * sx / (lam * a - b) || d * sx / (lam * b + a); // Use the translations

      var tx = e - cx + cx * ct * sx + cy * (lam * ct * sx - st * sy);
      var ty = f - cy + cx * st * sx + cy * (lam * st * sx + ct * sy); // Construct the decomposition and return it

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
    } // Left multiplies by the given matrix

  }, {
    key: "multiply",
    value: function multiply(matrix) {
      return this.clone().multiplyO(matrix);
    }
  }, {
    key: "multiplyO",
    value: function multiplyO(matrix) {
      // Get the matrices
      var l = this;
      var r = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    }
  }, {
    key: "lmultiply",
    value: function lmultiply(matrix) {
      return this.clone().lmultiplyO(matrix);
    }
  }, {
    key: "lmultiplyO",
    value: function lmultiplyO(matrix) {
      var r = this;
      var l = matrix instanceof Matrix ? matrix : new Matrix(matrix);
      return Matrix.matrixMultiply(l, r, this);
    } // Inverses matrix

  }, {
    key: "inverseO",
    value: function inverseO() {
      // Get the current parameters out of the matrix
      var a = this.a;
      var b = this.b;
      var c = this.c;
      var d = this.d;
      var e = this.e;
      var f = this.f; // Invert the 2x2 matrix in the top left

      var det = a * d - b * c;
      if (!det) throw new Error('Cannot invert ' + this); // Calculate the top 2x2 matrix

      var na = d / det;
      var nb = -b / det;
      var nc = -c / det;
      var nd = a / det; // Apply the inverted matrix to the top right

      var ne = -(na * e + nc * f);
      var nf = -(nb * e + nd * f); // Construct the inverted matrix

      this.a = na;
      this.b = nb;
      this.c = nc;
      this.d = nd;
      this.e = ne;
      this.f = nf;
      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      return this.clone().inverseO();
    } // Translate matrix

  }, {
    key: "translate",
    value: function translate(x, y) {
      return this.clone().translateO(x, y);
    }
  }, {
    key: "translateO",
    value: function translateO(x, y) {
      this.e += x || 0;
      this.f += y || 0;
      return this;
    } // Scale matrix

  }, {
    key: "scale",
    value: function scale(x, y, cx, cy) {
      var _this$clone;

      return (_this$clone = this.clone()).scaleO.apply(_this$clone, arguments);
    }
  }, {
    key: "scaleO",
    value: function scaleO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      // Support uniform scaling
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      }

      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a * x;
      this.b = b * y;
      this.c = c * x;
      this.d = d * y;
      this.e = e * x - cx * x + cx;
      this.f = f * y - cy * y + cy;
      return this;
    } // Rotate matrix

  }, {
    key: "rotate",
    value: function rotate(r, cx, cy) {
      return this.clone().rotateO(r, cx, cy);
    }
  }, {
    key: "rotateO",
    value: function rotateO(r) {
      var cx = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      // Convert degrees to radians
      r = radians(r);
      var cos = Math.cos(r);
      var sin = Math.sin(r);
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a * cos - b * sin;
      this.b = b * cos + a * sin;
      this.c = c * cos - d * sin;
      this.d = d * cos + c * sin;
      this.e = e * cos - f * sin + cy * sin - cx * cos + cx;
      this.f = f * cos + e * sin - cx * sin - cy * cos + cy;
      return this;
    } // Flip matrix on x or y, at a given offset

  }, {
    key: "flip",
    value: function flip(axis, around) {
      return this.clone().flipO(axis, around);
    }
  }, {
    key: "flipO",
    value: function flipO(axis, around) {
      return axis === 'x' ? this.scaleO(-1, 1, around, 0) : axis === 'y' ? this.scaleO(1, -1, 0, around) : this.scaleO(-1, -1, axis, around || axis); // Define an x, y flip point
    } // Shear matrix

  }, {
    key: "shear",
    value: function shear(a, cx, cy) {
      return this.clone().shearO(a, cx, cy);
    }
  }, {
    key: "shearO",
    value: function shearO(lx) {
      var cy = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a + b * lx;
      this.c = c + d * lx;
      this.e = e + f * lx - cy * lx;
      return this;
    } // Skew Matrix

  }, {
    key: "skew",
    value: function skew(x, y, cx, cy) {
      var _this$clone2;

      return (_this$clone2 = this.clone()).skewO.apply(_this$clone2, arguments);
    }
  }, {
    key: "skewO",
    value: function skewO(x) {
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : x;
      var cx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var cy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      // support uniformal skew
      if (arguments.length === 3) {
        cy = cx;
        cx = y;
        y = x;
      } // Convert degrees to radians


      x = radians(x);
      y = radians(y);
      var lx = Math.tan(x);
      var ly = Math.tan(y);
      var a = this.a,
          b = this.b,
          c = this.c,
          d = this.d,
          e = this.e,
          f = this.f;
      this.a = a + b * lx;
      this.b = b + a * ly;
      this.c = c + d * lx;
      this.d = d + c * ly;
      this.e = e + f * lx - cy * lx;
      this.f = f + e * ly - cx * ly;
      return this;
    } // SkewX

  }, {
    key: "skewX",
    value: function skewX(x, cx, cy) {
      return this.skew(x, 0, cx, cy);
    }
  }, {
    key: "skewXO",
    value: function skewXO(x, cx, cy) {
      return this.skewO(x, 0, cx, cy);
    } // SkewY

  }, {
    key: "skewY",
    value: function skewY(y, cx, cy) {
      return this.skew(0, y, cx, cy);
    }
  }, {
    key: "skewYO",
    value: function skewYO(y, cx, cy) {
      return this.skewO(0, y, cx, cy);
    } // Transform around a center point

  }, {
    key: "aroundO",
    value: function aroundO(cx, cy, matrix) {
      var dx = cx || 0;
      var dy = cy || 0;
      return this.translateO(-dx, -dy).lmultiplyO(matrix).translateO(dx, dy);
    }
  }, {
    key: "around",
    value: function around(cx, cy, matrix) {
      return this.clone().aroundO(cx, cy, matrix);
    } // Check if two matrices are equal

  }, {
    key: "equals",
    value: function equals(other) {
      var comp = new Matrix(other);
      return closeEnough(this.a, comp.a) && closeEnough(this.b, comp.b) && closeEnough(this.c, comp.c) && closeEnough(this.d, comp.d) && closeEnough(this.e, comp.e) && closeEnough(this.f, comp.f);
    } // Convert matrix to string

  }, {
    key: "toString",
    value: function toString() {
      return 'matrix(' + this.a + ',' + this.b + ',' + this.c + ',' + this.d + ',' + this.e + ',' + this.f + ')';
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.a, this.b, this.c, this.d, this.e, this.f];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return {
        a: this.a,
        b: this.b,
        c: this.c,
        d: this.d,
        e: this.e,
        f: this.f
      };
    }
  }], [{
    key: "fromArray",
    value: function fromArray(a) {
      return {
        a: a[0],
        b: a[1],
        c: a[2],
        d: a[3],
        e: a[4],
        f: a[5]
      };
    }
  }, {
    key: "isMatrixLike",
    value: function isMatrixLike(o) {
      return o.a != null || o.b != null || o.c != null || o.d != null || o.e != null || o.f != null;
    }
  }, {
    key: "formatTransforms",
    value: function formatTransforms(o) {
      // Get all of the parameters required to form the matrix
      var flipBoth = o.flip === 'both' || o.flip === true;
      var flipX = o.flip && (flipBoth || o.flip === 'x') ? -1 : 1;
      var flipY = o.flip && (flipBoth || o.flip === 'y') ? -1 : 1;
      var skewX = o.skew && o.skew.length ? o.skew[0] : isFinite(o.skew) ? o.skew : isFinite(o.skewX) ? o.skewX : 0;
      var skewY = o.skew && o.skew.length ? o.skew[1] : isFinite(o.skew) ? o.skew : isFinite(o.skewY) ? o.skewY : 0;
      var scaleX = o.scale && o.scale.length ? o.scale[0] * flipX : isFinite(o.scale) ? o.scale * flipX : isFinite(o.scaleX) ? o.scaleX * flipX : flipX;
      var scaleY = o.scale && o.scale.length ? o.scale[1] * flipY : isFinite(o.scale) ? o.scale * flipY : isFinite(o.scaleY) ? o.scaleY * flipY : flipY;
      var shear = o.shear || 0;
      var theta = o.rotate || o.theta || 0;
      var origin = new Point(o.origin || o.around || o.ox || o.originX, o.oy || o.originY);
      var ox = origin.x;
      var oy = origin.y;
      var position = new Point(o.position || o.px || o.positionX, o.py || o.positionY);
      var px = position.x;
      var py = position.y;
      var translate = new Point(o.translate || o.tx || o.translateX, o.ty || o.translateY);
      var tx = translate.x;
      var ty = translate.y;
      var relative = new Point(o.relative || o.rx || o.relativeX, o.ry || o.relativeY);
      var rx = relative.x;
      var ry = relative.y; // Populate all of the values

      return {
        scaleX: scaleX,
        scaleY: scaleY,
        skewX: skewX,
        skewY: skewY,
        shear: shear,
        theta: theta,
        rx: rx,
        ry: ry,
        tx: tx,
        ty: ty,
        ox: ox,
        oy: oy,
        px: px,
        py: py
      };
    } // left matrix, right matrix, target matrix which is overwritten

  }, {
    key: "matrixMultiply",
    value: function matrixMultiply(l, r, o) {
      // Work out the product directly
      var a = l.a * r.a + l.c * r.b;
      var b = l.b * r.a + l.d * r.b;
      var c = l.a * r.c + l.c * r.d;
      var d = l.b * r.c + l.d * r.d;
      var e = l.e + l.a * r.e + l.c * r.f;
      var f = l.f + l.b * r.e + l.d * r.f; // make sure to use local variables because l/r and o could be the same

      o.a = a;
      o.b = b;
      o.c = c;
      o.d = d;
      o.e = e;
      o.f = f;
      return o;
    }
  }]);

  return Matrix;
}();
function ctm() {
  return new Matrix(this.node.getCTM());
}
function screenCTM() {
  /* https://bugzilla.mozilla.org/show_bug.cgi?id=1344537
     This is needed because FF does not return the transformation matrix
     for the inner coordinate system when getScreenCTM() is called on nested svgs.
     However all other Browsers do that */
  if (typeof this.isRoot === 'function' && !this.isRoot()) {
    var rect = this.rect(1, 1);
    var m = rect.node.getScreenCTM();
    rect.remove();
    return new Matrix(m);
  }

  return new Matrix(this.node.getScreenCTM());
}
register(Matrix, 'Matrix');

function parser() {
  // Reuse cached element if possible
  if (!parser.nodes) {
    var svg = makeInstance().size(2, 0);
    svg.node.style.cssText = ['opacity: 0', 'position: absolute', 'left: -100%', 'top: -100%', 'overflow: hidden'].join(';');
    svg.attr('focusable', 'false');
    svg.attr('aria-hidden', 'true');
    var path = svg.path().node;
    parser.nodes = {
      svg: svg,
      path: path
    };
  }

  if (!parser.nodes.svg.node.parentNode) {
    var b = globals.document.body || globals.document.documentElement;
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

var Box =
/*#__PURE__*/
function () {
  function Box() {
    _classCallCheck(this, Box);

    this.init.apply(this, arguments);
  }

  _createClass(Box, [{
    key: "init",
    value: function init(source) {
      var base = [0, 0, 0, 0];
      source = typeof source === 'string' ? source.split(delimiter).map(parseFloat) : Array.isArray(source) ? source : _typeof(source) === 'object' ? [source.left != null ? source.left : source.x, source.top != null ? source.top : source.y, source.width, source.height] : arguments.length === 4 ? [].slice.call(arguments) : base;
      this.x = source[0] || 0;
      this.y = source[1] || 0;
      this.width = this.w = source[2] || 0;
      this.height = this.h = source[3] || 0; // Add more bounding box properties

      this.x2 = this.x + this.w;
      this.y2 = this.y + this.h;
      this.cx = this.x + this.w / 2;
      this.cy = this.y + this.h / 2;
      return this;
    } // Merge rect box with another, return a new instance

  }, {
    key: "merge",
    value: function merge(box) {
      var x = Math.min(this.x, box.x);
      var y = Math.min(this.y, box.y);
      var width = Math.max(this.x + this.width, box.x + box.width) - x;
      var height = Math.max(this.y + this.height, box.y + box.height) - y;
      return new Box(x, y, width, height);
    }
  }, {
    key: "transform",
    value: function transform(m) {
      if (!(m instanceof Matrix)) {
        m = new Matrix(m);
      }

      var xMin = Infinity;
      var xMax = -Infinity;
      var yMin = Infinity;
      var yMax = -Infinity;
      var pts = [new Point(this.x, this.y), new Point(this.x2, this.y), new Point(this.x, this.y2), new Point(this.x2, this.y2)];
      pts.forEach(function (p) {
        p = p.transform(m);
        xMin = Math.min(xMin, p.x);
        xMax = Math.max(xMax, p.x);
        yMin = Math.min(yMin, p.y);
        yMax = Math.max(yMax, p.y);
      });
      return new Box(xMin, yMin, xMax - xMin, yMax - yMin);
    }
  }, {
    key: "addOffset",
    value: function addOffset() {
      // offset by window scroll position, because getBoundingClientRect changes when window is scrolled
      this.x += globals.window.pageXOffset;
      this.y += globals.window.pageYOffset;
      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.x + ' ' + this.y + ' ' + this.width + ' ' + this.height;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.x, this.y, this.width, this.height];
    }
  }, {
    key: "isNulled",
    value: function isNulled() {
      return isNulledBox(this);
    }
  }]);

  return Box;
}();

function getBox(cb, retry) {
  var box;

  try {
    box = cb(this.node);

    if (isNulledBox(box) && !domContains(this.node)) {
      throw new Error('Element not in the dom');
    }
  } catch (e) {
    box = retry(this);
  }

  return box;
}

function bbox() {
  return new Box(getBox.call(this, function (node) {
    return node.getBBox();
  }, function (el) {
    try {
      var clone = el.clone().addTo(parser().svg).show();
      var box = clone.node.getBBox();
      clone.remove();
      return box;
    } catch (e) {
      throw new Error('Getting bbox of element "' + el.node.nodeName + '" is not possible. ' + e.toString());
    }
  }));
}
function rbox(el) {
  var box = new Box(getBox.call(this, function (node) {
    return node.getBoundingClientRect();
  }, function (el) {
    throw new Error('Getting rbox of element "' + el.node.nodeName + '" is not possible');
  }));
  if (el) return box.transform(el.screenCTM().inverse());
  return box.addOffset();
}
registerMethods({
  viewbox: {
    viewbox: function viewbox(x, y, width, height) {
      // act as getter
      if (x == null) return new Box(this.attr('viewBox')); // act as setter

      return this.attr('viewBox', new Box(x, y, width, height));
    },
    zoom: function zoom(level, point) {
      var width = this.node.clientWidth;
      var height = this.node.clientHeight;
      var v = this.viewbox(); // Firefox does not support clientHeight and returns 0
      // https://bugzilla.mozilla.org/show_bug.cgi?id=874811

      if (!width && !height) {
        var style = window.getComputedStyle(this.node);
        width = parseFloat(style.getPropertyValue('width'));
        height = parseFloat(style.getPropertyValue('height'));
      }

      var zoomX = width / v.width;
      var zoomY = height / v.height;
      var zoom = Math.min(zoomX, zoomY);

      if (level == null) {
        return zoom;
      }

      var zoomAmount = zoom / level;
      if (zoomAmount === Infinity) zoomAmount = Number.MIN_VALUE;
      point = point || new Point(width / 2 / zoomX + v.x, height / 2 / zoomY + v.y);
      var box = new Box(v).transform(new Matrix({
        scale: zoomAmount,
        origin: point
      }));
      return this.viewbox(box);
    }
  }
});
register(Box, 'Box');

/* eslint no-new-func: "off" */
var subClassArray = function () {
  try {
    // try es6 subclassing
    return Function('name', 'baseClass', '_constructor', ['baseClass = baseClass || Array', 'return {', '  [name]: class extends baseClass {', '    constructor (...args) {', '      super(...args)', '      _constructor && _constructor.apply(this, args)', '    }', '  }', '}[name]'].join('\n'));
  } catch (e) {
    // Use es5 approach
    return function (name) {
      var baseClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Array;

      var _constructor = arguments.length > 2 ? arguments[2] : undefined;

      var Arr = function Arr() {
        baseClass.apply(this, arguments);
        _constructor && _constructor.apply(this, arguments);
      };

      Arr.prototype = Object.create(baseClass.prototype);
      Arr.prototype.constructor = Arr;

      Arr.prototype.map = function (fn) {
        var arr = new Arr();
        arr.push.apply(arr, Array.prototype.map.call(this, fn));
        return arr;
      };

      return Arr;
    };
  }
}();

var List = subClassArray('List', Array, function () {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  // This catches the case, that native map tries to create an array with new Array(1)
  if (typeof arr === 'number') return this;
  this.length = 0;
  this.push.apply(this, _toConsumableArray(arr));
});
extend(List, {
  each: function each(fnOrMethodName) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (typeof fnOrMethodName === 'function') {
      return this.map(function (el) {
        return fnOrMethodName.call(el, el);
      });
    } else {
      return this.map(function (el) {
        return el[fnOrMethodName].apply(el, args);
      });
    }
  },
  toArray: function toArray() {
    return Array.prototype.concat.apply([], this);
  }
});
var reserved = ['toArray', 'constructor', 'each'];

List.extend = function (methods) {
  methods = methods.reduce(function (obj, name) {
    // Don't overwrite own methods
    if (reserved.includes(name)) return obj; // Don't add private methods

    if (name[0] === '_') return obj; // Relay every call to each()

    obj[name] = function () {
      for (var _len2 = arguments.length, attrs = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        attrs[_key2] = arguments[_key2];
      }

      return this.each.apply(this, [name].concat(attrs));
    };

    return obj;
  }, {});
  extend(List, methods);
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

var EventTarget =
/*#__PURE__*/
function (_Base) {
  _inherits(EventTarget, _Base);

  function EventTarget() {
    var _this;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$events = _ref.events,
        events = _ref$events === void 0 ? {} : _ref$events;

    _classCallCheck(this, EventTarget);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventTarget).call(this));
    _this.events = events;
    return _this;
  }

  _createClass(EventTarget, [{
    key: "addEventListener",
    value: function addEventListener() {}
  }, {
    key: "dispatch",
    value: function dispatch$1(event, data) {
      return dispatch(this, event, data);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var bag = this.getEventHolder().events;
      if (!bag) return true;
      var events = bag[event.type];

      for (var i in events) {
        for (var j in events[i]) {
          events[i][j](event);
        }
      }

      return !event.defaultPrevented;
    } // Fire given event

  }, {
    key: "fire",
    value: function fire(event, data) {
      this.dispatch(event, data);
      return this;
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this;
    } // Unbind event from listener

  }, {
    key: "off",
    value: function off$1(event, listener) {
      off(this, event, listener);

      return this;
    } // Bind given event to listener

  }, {
    key: "on",
    value: function on$1(event, listener, binding, options) {
      on(this, event, listener, binding, options);

      return this;
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener() {}
  }]);

  return EventTarget;
}(Base);
register(EventTarget, 'EventTarget');

function noop() {} // Default animation values

var timeline = {
  duration: 400,
  ease: '>',
  delay: 0
}; // Default attribute values

var attrs = {
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

var defaults = ({
	__proto__: null,
	noop: noop,
	timeline: timeline,
	attrs: attrs
});

var SVGArray = subClassArray('SVGArray', Array, function (arr) {
  this.init(arr);
});
extend(SVGArray, {
  init: function init(arr) {
    // This catches the case, that native map tries to create an array with new Array(1)
    if (typeof arr === 'number') return this;
    this.length = 0;
    this.push.apply(this, _toConsumableArray(this.parse(arr)));
    return this;
  },
  toArray: function toArray() {
    return Array.prototype.concat.apply([], this);
  },
  toString: function toString() {
    return this.join(' ');
  },
  // Flattens the array if needed
  valueOf: function valueOf() {
    var ret = [];
    ret.push.apply(ret, _toConsumableArray(this));
    return ret;
  },
  // Parse whitespace separated string
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    // If already is an array, no need to parse it
    if (array instanceof Array) return array;
    return array.trim().split(delimiter).map(parseFloat);
  },
  clone: function clone() {
    return new this.constructor(this);
  },
  toSet: function toSet() {
    return new Set(this);
  }
});

var SVGNumber =
/*#__PURE__*/
function () {
  // Initialize
  function SVGNumber() {
    _classCallCheck(this, SVGNumber);

    this.init.apply(this, arguments);
  }

  _createClass(SVGNumber, [{
    key: "init",
    value: function init(value, unit) {
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
    }
  }, {
    key: "toString",
    value: function toString() {
      return (this.unit === '%' ? ~~(this.value * 1e8) / 1e6 : this.unit === 's' ? this.value / 1e3 : this.value) + this.unit;
    }
  }, {
    key: "toJSON",
    value: function toJSON() {
      return this.toString();
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value, this.unit];
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    } // Add number

  }, {
    key: "plus",
    value: function plus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this + number, this.unit || number.unit);
    } // Subtract number

  }, {
    key: "minus",
    value: function minus(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this - number, this.unit || number.unit);
    } // Multiply number

  }, {
    key: "times",
    value: function times(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this * number, this.unit || number.unit);
    } // Divide number

  }, {
    key: "divide",
    value: function divide(number) {
      number = new SVGNumber(number);
      return new SVGNumber(this / number, this.unit || number.unit);
    }
  }, {
    key: "convert",
    value: function convert(unit) {
      return new SVGNumber(this.value, unit);
    }
  }]);

  return SVGNumber;
}();

var hooks = [];
function registerAttrHook(fn) {
  hooks.push(fn);
} // Set svg element attribute

function attr(attr, val, ns) {
  var _this = this;

  // act as full getter
  if (attr == null) {
    // get an object of attributes
    attr = {};
    val = this.node.attributes;
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = val[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var node = _step.value;
        attr[node.nodeName] = isNumber.test(node.nodeValue) ? parseFloat(node.nodeValue) : node.nodeValue;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return attr;
  } else if (attr instanceof Array) {
    // loop through array and get all values
    return attr.reduce(function (last, curr) {
      last[curr] = _this.attr(curr);
      return last;
    }, {});
  } else if (_typeof(attr) === 'object' && attr.constructor === Object) {
    // apply every attribute individually if an object is passed
    for (val in attr) {
      this.attr(val, attr[val]);
    }
  } else if (val === null) {
    // remove value
    this.node.removeAttribute(attr);
  } else if (val == null) {
    // act as a getter if the first and only argument is not an object
    val = this.node.getAttribute(attr);
    return val == null ? attrs[attr] : isNumber.test(val) ? parseFloat(val) : val;
  } else {
    // Loop through hooks and execute them to convert value
    val = hooks.reduce(function (_val, hook) {
      return hook(attr, _val, _this);
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

var Dom =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Dom, _EventTarget);

  function Dom(node, attrs) {
    var _this2;

    _classCallCheck(this, Dom);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Dom).call(this, node));
    _this2.node = node;
    _this2.type = node.nodeName;

    if (attrs && node !== attrs) {
      _this2.attr(attrs);
    }

    return _this2;
  } // Add given element at a position


  _createClass(Dom, [{
    key: "add",
    value: function add(element, i) {
      element = makeInstance(element);

      if (i == null) {
        this.node.appendChild(element.node);
      } else if (element.node !== this.node.childNodes[i]) {
        this.node.insertBefore(element.node, this.node.childNodes[i]);
      }

      return this;
    } // Add element to given container and return self

  }, {
    key: "addTo",
    value: function addTo(parent) {
      return makeInstance(parent).put(this);
    } // Returns all child elements

  }, {
    key: "children",
    value: function children() {
      return new List(map(this.node.children, function (node) {
        return adopt(node);
      }));
    } // Remove all elements in this container

  }, {
    key: "clear",
    value: function clear() {
      // remove children
      while (this.node.hasChildNodes()) {
        this.node.removeChild(this.node.lastChild);
      }

      return this;
    } // Clone element

  }, {
    key: "clone",
    value: function clone() {
      // write dom data to the dom so the clone can pickup the data
      this.writeDataToDom(); // clone element and assign new id

      return assignNewId(this.node.cloneNode(true));
    } // Iterates over all children and invokes a given block

  }, {
    key: "each",
    value: function each(block, deep) {
      var children = this.children();
      var i, il;

      for (i = 0, il = children.length; i < il; i++) {
        block.apply(children[i], [i, children]);

        if (deep) {
          children[i].each(block, deep);
        }
      }

      return this;
    }
  }, {
    key: "element",
    value: function element(nodeName) {
      return this.put(new Dom(create(nodeName)));
    } // Get first child

  }, {
    key: "first",
    value: function first() {
      return adopt(this.node.firstChild);
    } // Get a element at the given index

  }, {
    key: "get",
    value: function get(i) {
      return adopt(this.node.childNodes[i]);
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this.node;
    }
  }, {
    key: "getEventTarget",
    value: function getEventTarget() {
      return this.node;
    } // Checks if the given element is a child

  }, {
    key: "has",
    value: function has(element) {
      return this.index(element) >= 0;
    } // Get / set id

  }, {
    key: "id",
    value: function id(_id) {
      // generate new id if no id set
      if (typeof _id === 'undefined' && !this.node.id) {
        this.node.id = eid(this.type);
      } // dont't set directly width this.node.id to make `null` work correctly


      return this.attr('id', _id);
    } // Gets index of given element

  }, {
    key: "index",
    value: function index(element) {
      return [].slice.call(this.node.childNodes).indexOf(element.node);
    } // Get the last child

  }, {
    key: "last",
    value: function last() {
      return adopt(this.node.lastChild);
    } // matches the element vs a css selector

  }, {
    key: "matches",
    value: function matches(selector) {
      var el = this.node;
      return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
    } // Returns the parent element instance

  }, {
    key: "parent",
    value: function parent(type) {
      var parent = this; // check for parent

      if (!parent.node.parentNode) return null; // get parent element

      parent = adopt(parent.node.parentNode);
      if (!type) return parent; // loop trough ancestors if type is given

      while (parent) {
        if (typeof type === 'string' ? parent.matches(type) : parent instanceof type) return parent;
        if (!parent.node.parentNode || parent.node.parentNode.nodeName === '#document' || parent.node.parentNode.nodeName === '#document-fragment') return null; // #759, #720

        parent = adopt(parent.node.parentNode);
      }
    } // Basically does the same as `add()` but returns the added element instead

  }, {
    key: "put",
    value: function put(element, i) {
      this.add(element, i);
      return element;
    } // Add element to given container and return container

  }, {
    key: "putIn",
    value: function putIn(parent) {
      return makeInstance(parent).add(this);
    } // Remove element

  }, {
    key: "remove",
    value: function remove() {
      if (this.parent()) {
        this.parent().removeElement(this);
      }

      return this;
    } // Remove a given child

  }, {
    key: "removeElement",
    value: function removeElement(element) {
      this.node.removeChild(element.node);
      return this;
    } // Replace this with element

  }, {
    key: "replace",
    value: function replace(element) {
      element = makeInstance(element);
      this.node.parentNode.replaceChild(element.node, this.node);
      return element;
    }
  }, {
    key: "round",
    value: function round() {
      var precision = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
      var map = arguments.length > 1 ? arguments[1] : undefined;
      var factor = Math.pow(10, precision);
      var attrs = this.attr(); // If we have no map, build one from attrs

      if (!map) {
        map = Object.keys(attrs);
      } // Holds rounded attributes


      var newAttrs = {};
      map.forEach(function (key) {
        newAttrs[key] = Math.round(attrs[key] * factor) / factor;
      });
      this.attr(newAttrs);
      return this;
    } // Return id on string conversion

  }, {
    key: "toString",
    value: function toString() {
      return this.id();
    } // Import raw svg

  }, {
    key: "svg",
    value: function svg(svgOrFn, outerHTML) {
      var well, len, fragment;

      if (svgOrFn === false) {
        outerHTML = false;
        svgOrFn = null;
      } // act as getter if no svg string is given


      if (svgOrFn == null || typeof svgOrFn === 'function') {
        // The default for exports is, that the outerNode is included
        outerHTML = outerHTML == null ? true : outerHTML; // write svgjs data to the dom

        this.writeDataToDom();
        var current = this; // An export modifier was passed

        if (svgOrFn != null) {
          current = adopt(current.node.cloneNode(true)); // If the user wants outerHTML we need to process this node, too

          if (outerHTML) {
            var result = svgOrFn(current);
            current = result || current; // The user does not want this node? Well, then he gets nothing

            if (result === false) return '';
          } // Deep loop through all children and apply modifier


          current.each(function () {
            var result = svgOrFn(this);

            var _this = result || this; // If modifier returns false, discard node


            if (result === false) {
              this.remove(); // If modifier returns new node, use it
            } else if (result && this !== _this) {
              this.replace(_this);
            }
          }, true);
        } // Return outer or inner content


        return outerHTML ? current.node.outerHTML : current.node.innerHTML;
      } // Act as setter if we got a string
      // The default for import is, that the current node is not replaced


      outerHTML = outerHTML == null ? false : outerHTML; // Create temporary holder

      well = globals.document.createElementNS(ns, 'svg');
      fragment = globals.document.createDocumentFragment(); // Dump raw svg

      well.innerHTML = svgOrFn; // Transplant nodes into the fragment

      for (len = well.children.length; len--;) {
        fragment.appendChild(well.firstElementChild);
      }

      var parent = this.parent(); // Add the whole fragment at once

      return outerHTML ? this.replace(fragment) && parent : this.add(fragment);
    }
  }, {
    key: "words",
    value: function words(text) {
      // This is faster than removing all children and adding a new one
      this.node.textContent = text;
      return this;
    } // write svgjs data to the dom

  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // dump variables recursively
      this.each(function () {
        this.writeDataToDom();
      });
      return this;
    }
  }]);

  return Dom;
}(EventTarget);
extend(Dom, {
  attr: attr,
  find: find,
  findOne: findOne
});
register(Dom, 'Dom');

var Element =
/*#__PURE__*/
function (_Dom) {
  _inherits(Element, _Dom);

  function Element(node, attrs) {
    var _this;

    _classCallCheck(this, Element);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Element).call(this, node, attrs)); // initialize data object

    _this.dom = {}; // create circular reference

    _this.node.instance = _assertThisInitialized(_this);

    if (node.hasAttribute('svgjs:data')) {
      // pull svgjs data from the dom (getAttributeNS doesn't work in html5)
      _this.setData(JSON.parse(node.getAttribute('svgjs:data')) || {});
    }

    return _this;
  } // Move element by its center


  _createClass(Element, [{
    key: "center",
    value: function center(x, y) {
      return this.cx(x).cy(y);
    } // Move by center over x-axis

  }, {
    key: "cx",
    value: function cx(x) {
      return x == null ? this.x() + this.width() / 2 : this.x(x - this.width() / 2);
    } // Move by center over y-axis

  }, {
    key: "cy",
    value: function cy(y) {
      return y == null ? this.y() + this.height() / 2 : this.y(y - this.height() / 2);
    } // Get defs

  }, {
    key: "defs",
    value: function defs() {
      return this.root().defs();
    } // Relative move over x and y axes

  }, {
    key: "dmove",
    value: function dmove(x, y) {
      return this.dx(x).dy(y);
    } // Relative move over x axis

  }, {
    key: "dx",
    value: function dx() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.x(new SVGNumber(x).plus(this.x()));
    } // Relative move over y axis

  }, {
    key: "dy",
    value: function dy() {
      var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      return this.y(new SVGNumber(y).plus(this.y()));
    } // Get parent document

  }, {
    key: "root",
    value: function root$1() {
      var p = this.parent(getClass(root));
      return p && p.root();
    }
  }, {
    key: "getEventHolder",
    value: function getEventHolder() {
      return this;
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return this.attr('height', _height);
    } // Checks whether the given point inside the bounding box of the element

  }, {
    key: "inside",
    value: function inside(x, y) {
      var box = this.bbox();
      return x > box.x && y > box.y && x < box.x + box.width && y < box.y + box.height;
    } // Move element to given x and y values

  }, {
    key: "move",
    value: function move(x, y) {
      return this.x(x).y(y);
    } // return array of all ancestors of given type up to the root svg

  }, {
    key: "parents",
    value: function parents() {
      var until = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : globals.document;
      until = makeInstance(until);
      var parents = new List();
      var parent = this;

      while ((parent = parent.parent()) && parent.node !== until.node && parent.node !== globals.document) {
        parents.push(parent);
      }

      return parents;
    } // Get referenced element form attribute value

  }, {
    key: "reference",
    value: function reference$1(attr) {
      attr = this.attr(attr);
      if (!attr) return null;
      var m = attr.match(reference);
      return m ? makeInstance(m[1]) : null;
    } // set given data to the elements data property

  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      return this;
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.width(new SVGNumber(p.width)).height(new SVGNumber(p.height));
    } // Set width of element

  }, {
    key: "width",
    value: function width(_width) {
      return this.attr('width', _width);
    } // write svgjs data to the dom

  }, {
    key: "writeDataToDom",
    value: function writeDataToDom() {
      // remove previously set data
      this.node.removeAttribute('svgjs:data');

      if (Object.keys(this.dom).length) {
        this.node.setAttribute('svgjs:data', JSON.stringify(this.dom)); // see #428
      }

      return _get(_getPrototypeOf(Element.prototype), "writeDataToDom", this).call(this);
    } // Move over x-axis

  }, {
    key: "x",
    value: function x(_x) {
      return this.attr('x', _x);
    } // Move over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      return this.attr('y', _y);
    }
  }]);

  return Element;
}(Dom);
extend(Element, {
  bbox: bbox,
  rbox: rbox,
  point: point,
  ctm: ctm,
  screenCTM: screenCTM
});
register(Element, 'Element');

var sugar = {
  stroke: ['color', 'width', 'opacity', 'linecap', 'linejoin', 'miterlimit', 'dasharray', 'dashoffset'],
  fill: ['color', 'opacity', 'rule'],
  prefix: function prefix(t, a) {
    return a === 'color' ? t : t + '-' + a;
  }
} // Add sugar for fill and stroke
;
['fill', 'stroke'].forEach(function (m) {
  var extension = {};
  var i;

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
  matrix: function matrix(mat, b, c, d, e, f) {
    // Act as a getter
    if (mat == null) {
      return new Matrix(this);
    } // Act as a setter, the user can pass a matrix or a set of numbers


    return this.attr('transform', new Matrix(mat, b, c, d, e, f));
  },
  // Map rotation to transform
  rotate: function rotate(angle, cx, cy) {
    return this.transform({
      rotate: angle,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map skew to transform
  skew: function skew(x, y, cx, cy) {
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
  shear: function shear(lam, cx, cy) {
    return this.transform({
      shear: lam,
      ox: cx,
      oy: cy
    }, true);
  },
  // Map scale to transform
  scale: function scale(x, y, cx, cy) {
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
  translate: function translate(x, y) {
    return this.transform({
      translate: [x, y]
    }, true);
  },
  // Map relative translations to transform
  relative: function relative(x, y) {
    return this.transform({
      relative: [x, y]
    }, true);
  },
  // Map flip to transform
  flip: function flip(direction, around) {
    var directionString = typeof direction === 'string' ? direction : isFinite(direction) ? 'both' : 'both';
    var origin = direction === 'both' && isFinite(around) ? [around, around] : direction === 'x' ? [around, 0] : direction === 'y' ? [0, around] : isFinite(direction) ? [direction, direction] : [0, 0];
    return this.transform({
      flip: directionString,
      origin: origin
    }, true);
  },
  // Opacity
  opacity: function opacity(value) {
    return this.attr('opacity', value);
  }
});
registerMethods('radius', {
  // Add x and y radius
  radius: function radius(x, y) {
    var type = (this._element || this).type;
    return type === 'radialGradient' || type === 'radialGradient' ? this.attr('r', new SVGNumber(x)) : this.rx(x).ry(y == null ? x : y);
  }
});
registerMethods('Path', {
  // Get path length
  length: function length() {
    return this.node.getTotalLength();
  },
  // Get point at length
  pointAt: function pointAt(length) {
    return new Point(this.node.getPointAtLength(length));
  }
});
registerMethods(['Element', 'Runner'], {
  // Set font
  font: function font(a, v) {
    if (_typeof(a) === 'object') {
      for (v in a) {
        this.font(v, a[v]);
      }

      return this;
    }

    return a === 'leading' ? this.leading(v) : a === 'anchor' ? this.attr('text-anchor', v) : a === 'size' || a === 'family' || a === 'weight' || a === 'stretch' || a === 'variant' || a === 'style' ? this.attr('font-' + a, v) : this.attr(a, v);
  }
});
registerMethods('Text', {
  ax: function ax(x) {
    return this.attr('x', x);
  },
  ay: function ay(y) {
    return this.attr('y', y);
  },
  amove: function amove(x, y) {
    return this.ax(x).ay(y);
  }
}); // Add events to elements

var methods$1 = ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseover', 'mouseout', 'mousemove', 'mouseenter', 'mouseleave', 'touchstart', 'touchmove', 'touchleave', 'touchend', 'touchcancel'].reduce(function (last, event) {
  // add event to Element
  var fn = function fn(f) {
    if (f === null) {
      off(this, event);
    } else {
      on(this, event, f);
    }

    return this;
  };

  last[event] = fn;
  return last;
}, {});
registerMethods('Element', methods$1);

var nativeReverse = [].reverse;
var test$1 = [1, 2];

// `Array.prototype.reverse` method
// https://tc39.github.io/ecma262/#sec-array.prototype.reverse
// fix for Safari 12.0 bug
// https://bugs.webkit.org/show_bug.cgi?id=188794
_export({ target: 'Array', proto: true, forced: String(test$1) === String(test$1.reverse()) }, {
  reverse: function reverse() {
    // eslint-disable-next-line no-self-assign
    if (isArray(this)) this.length = this.length;
    return nativeReverse.call(this);
  }
});

// `Object.defineProperties` method
// https://tc39.github.io/ecma262/#sec-object.defineproperties
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperties: objectDefineProperties
});

// `Object.defineProperty` method
// https://tc39.github.io/ecma262/#sec-object.defineproperty
_export({ target: 'Object', stat: true, forced: !descriptors, sham: !descriptors }, {
  defineProperty: objectDefineProperty.f
});

var nativeGetOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;


var FAILS_ON_PRIMITIVES$2 = fails(function () { nativeGetOwnPropertyDescriptor$2(1); });
var FORCED$3 = !descriptors || FAILS_ON_PRIMITIVES$2;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptor
_export({ target: 'Object', stat: true, forced: FORCED$3, sham: !descriptors }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor$2(toIndexedObject(it), key);
  }
});

// `Object.getOwnPropertyDescriptors` method
// https://tc39.github.io/ecma262/#sec-object.getownpropertydescriptors
_export({ target: 'Object', stat: true, sham: !descriptors }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});

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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function untransform() {
  return this.attr('transform', null);
} // merge the whole transformation chain into one matrix and returns it

function matrixify() {
  var matrix = (this.attr('transform') || ''). // split transformations
  split(transforms).slice(0, -1).map(function (str) {
    // generate key => value pairs
    var kv = str.trim().split('(');
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

function toParent(parent) {
  if (this === parent) return this;
  var ctm = this.screenCTM();
  var pCtm = parent.screenCTM().inverse();
  this.addTo(parent).untransform().transform(pCtm.multiply(ctm));
  return this;
} // same as above with parent equals root-svg

function toRoot() {
  return this.toParent(this.root());
} // Add transformations

function transform(o, relative) {
  // Act as a getter if no object was passed
  if (o == null || typeof o === 'string') {
    var decomposed = new Matrix(this).decompose();
    return o == null ? decomposed : decomposed[o];
  }

  if (!Matrix.isMatrixLike(o)) {
    // Set the origin according to the defined transform
    o = _objectSpread({}, o, {
      origin: getOrigin(o, this)
    });
  } // The user can pass a boolean, an Element or an Matrix or nothing


  var cleanRelative = relative === true ? this : relative || false;
  var result = new Matrix(cleanRelative).transform(o);
  return this.attr('transform', result);
}
registerMethods('Element', {
  untransform: untransform,
  matrixify: matrixify,
  toParent: toParent,
  toRoot: toRoot,
  transform: transform
});

function rx(rx) {
  return this.attr('rx', rx);
} // Radius y value

function ry(ry) {
  return this.attr('ry', ry);
} // Move over x-axis

function x(x) {
  return x == null ? this.cx() - this.rx() : this.cx(x + this.rx());
} // Move over y-axis

function y(y) {
  return y == null ? this.cy() - this.ry() : this.cy(y + this.ry());
} // Move by center over x-axis

function cx(x) {
  return x == null ? this.attr('cx') : this.attr('cx', x);
} // Move by center over y-axis

function cy(y) {
  return y == null ? this.attr('cy') : this.attr('cy', y);
} // Set width of element

function width(width) {
  return width == null ? this.rx() * 2 : this.rx(new SVGNumber(width).divide(2));
} // Set height of element

function height(height) {
  return height == null ? this.ry() * 2 : this.ry(new SVGNumber(height).divide(2));
}

var circled = ({
	__proto__: null,
	rx: rx,
	ry: ry,
	x: x,
	y: y,
	cx: cx,
	cy: cy,
	width: width,
	height: height
});

var Shape =
/*#__PURE__*/
function (_Element) {
  _inherits(Shape, _Element);

  function Shape() {
    _classCallCheck(this, Shape);

    return _possibleConstructorReturn(this, _getPrototypeOf(Shape).apply(this, arguments));
  }

  return Shape;
}(Element);
register(Shape, 'Shape');

var Circle =
/*#__PURE__*/
function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(node) {
    _classCallCheck(this, Circle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, nodeOrNew('circle', node), node));
  }

  _createClass(Circle, [{
    key: "radius",
    value: function radius(r) {
      return this.attr('r', r);
    } // Radius x value

  }, {
    key: "rx",
    value: function rx(_rx) {
      return this.attr('r', _rx);
    } // Alias radius x value

  }, {
    key: "ry",
    value: function ry(_ry) {
      return this.rx(_ry);
    }
  }, {
    key: "size",
    value: function size(_size) {
      return this.radius(new SVGNumber(_size).divide(2));
    }
  }]);

  return Circle;
}(Shape);
extend(Circle, {
  x: x,
  y: y,
  cx: cx,
  cy: cy,
  width: width,
  height: height
});
registerMethods({
  Container: {
    // Create circle element
    circle: wrapWithAttrCheck(function (size) {
      return this.put(new Circle()).size(size).move(0, 0);
    })
  }
});
register(Circle, 'Circle');

var Container =
/*#__PURE__*/
function (_Element) {
  _inherits(Container, _Element);

  function Container() {
    _classCallCheck(this, Container);

    return _possibleConstructorReturn(this, _getPrototypeOf(Container).apply(this, arguments));
  }

  _createClass(Container, [{
    key: "flatten",
    value: function flatten(parent) {
      this.each(function () {
        if (this instanceof Container) return this.flatten(parent).ungroup(parent);
        return this.toParent(parent);
      }); // we need this so that the root does not get removed

      this.node.firstElementChild || this.remove();
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup(parent) {
      parent = parent || this.parent();
      this.each(function () {
        return this.toParent(parent);
      });
      this.remove();
      return this;
    }
  }]);

  return Container;
}(Element);
register(Container, 'Container');

var Defs =
/*#__PURE__*/
function (_Container) {
  _inherits(Defs, _Container);

  function Defs(node) {
    _classCallCheck(this, Defs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Defs).call(this, nodeOrNew('defs', node), node));
  }

  _createClass(Defs, [{
    key: "flatten",
    value: function flatten() {
      return this;
    }
  }, {
    key: "ungroup",
    value: function ungroup() {
      return this;
    }
  }]);

  return Defs;
}(Container);
register(Defs, 'Defs');

var Ellipse =
/*#__PURE__*/
function (_Shape) {
  _inherits(Ellipse, _Shape);

  function Ellipse(node) {
    _classCallCheck(this, Ellipse);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).call(this, nodeOrNew('ellipse', node), node));
  }

  _createClass(Ellipse, [{
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.rx(new SVGNumber(p.width).divide(2)).ry(new SVGNumber(p.height).divide(2));
    }
  }]);

  return Ellipse;
}(Shape);
extend(Ellipse, circled);
registerMethods('Container', {
  // Create an ellipse
  ellipse: wrapWithAttrCheck(function () {
    var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : width;
    return this.put(new Ellipse()).size(width, height).move(0, 0);
  })
});
register(Ellipse, 'Ellipse');

var Stop =
/*#__PURE__*/
function (_Element) {
  _inherits(Stop, _Element);

  function Stop(node) {
    _classCallCheck(this, Stop);

    return _possibleConstructorReturn(this, _getPrototypeOf(Stop).call(this, nodeOrNew('stop', node), node));
  } // add color stops


  _createClass(Stop, [{
    key: "update",
    value: function update(o) {
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
  }]);

  return Stop;
}(Element);
register(Stop, 'Stop');

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

var gradiented = ({
	__proto__: null,
	from: from,
	to: to
});

var Gradient =
/*#__PURE__*/
function (_Container) {
  _inherits(Gradient, _Container);

  function Gradient(type, attrs) {
    _classCallCheck(this, Gradient);

    return _possibleConstructorReturn(this, _getPrototypeOf(Gradient).call(this, nodeOrNew(type + 'Gradient', typeof type === 'string' ? null : type), attrs));
  } // Add a color stop


  _createClass(Gradient, [{
    key: "stop",
    value: function stop(offset, color, opacity) {
      return this.put(new Stop()).update(offset, color, opacity);
    } // Update gradient

  }, {
    key: "update",
    value: function update(block) {
      // remove all stops
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Return the fill id

  }, {
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    } // Alias string convertion to fill

  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    } // custom attr to handle transform

  }, {
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'gradientTransform';
      return _get(_getPrototypeOf(Gradient.prototype), "attr", this).call(this, a, b, c);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*="' + this.id() + '"]');
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }]);

  return Gradient;
}(Container);
extend(Gradient, gradiented);
registerMethods({
  Container: {
    // Create gradient element in defs
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.defs().gradient(type, block);
    })
  },
  // define gradient
  Defs: {
    gradient: wrapWithAttrCheck(function (type, block) {
      return this.put(new Gradient(type)).update(block);
    })
  }
});
register(Gradient, 'Gradient');

var Pattern =
/*#__PURE__*/
function (_Container) {
  _inherits(Pattern, _Container);

  // Initialize node
  function Pattern(node) {
    _classCallCheck(this, Pattern);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pattern).call(this, nodeOrNew('pattern', node), node));
  } // Return the fill id


  _createClass(Pattern, [{
    key: "url",
    value: function url() {
      return 'url(#' + this.id() + ')';
    } // Update pattern by rebuilding

  }, {
    key: "update",
    value: function update(block) {
      // remove content
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Alias string convertion to fill

  }, {
    key: "toString",
    value: function toString() {
      return this.url();
    } // custom attr to handle transform

  }, {
    key: "attr",
    value: function attr(a, b, c) {
      if (a === 'transform') a = 'patternTransform';
      return _get(_getPrototypeOf(Pattern.prototype), "attr", this).call(this, a, b, c);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [fill*="' + this.id() + '"]');
    }
  }, {
    key: "bbox",
    value: function bbox() {
      return new Box();
    }
  }]);

  return Pattern;
}(Container);
registerMethods({
  Container: {
    // Create pattern element in defs
    pattern: function pattern() {
      var _this$defs;

      return (_this$defs = this.defs()).pattern.apply(_this$defs, arguments);
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

var Image =
/*#__PURE__*/
function (_Shape) {
  _inherits(Image, _Shape);

  function Image(node) {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).call(this, nodeOrNew('image', node), node));
  } // (re)load image


  _createClass(Image, [{
    key: "load",
    value: function load(url, callback) {
      if (!url) return this;
      var img = new globals.window.Image();
      on(img, 'load', function (e) {
        var p = this.parent(Pattern); // ensure image size

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
  }]);

  return Image;
}(Shape);
registerAttrHook(function (attr, val, _this) {
  // convert image fill and stroke to patterns
  if (attr === 'fill' || attr === 'stroke') {
    if (isImage.test(val)) {
      val = _this.root().defs().image(val);
    }
  }

  if (val instanceof Image) {
    val = _this.root().defs().pattern(0, 0, function (pattern) {
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

var PointArray = subClassArray('PointArray', SVGArray);
extend(PointArray, {
  // Convert array to string
  toString: function toString() {
    // convert to a poly point string
    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push(this[i].join(','));
    }

    return array.join(' ');
  },
  // Convert array to line object
  toLine: function toLine() {
    return {
      x1: this[0][0],
      y1: this[0][1],
      x2: this[1][0],
      y2: this[1][1]
    };
  },
  // Get morphed array at given position
  at: function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this; // generate morphed point string

    for (var i = 0, il = this.length, array = []; i < il; i++) {
      array.push([this[i][0] + (this.destination[i][0] - this[i][0]) * pos, this[i][1] + (this.destination[i][1] - this[i][1]) * pos]);
    }

    return new PointArray(array);
  },
  // Parse point string and flat array
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [[0, 0]];
    var points = []; // if it is an array

    if (array instanceof Array) {
      // and it is not flat, there is no need to parse it
      if (array[0] instanceof Array) {
        return array;
      }
    } else {
      // Else, it is considered as a string
      // parse points
      array = array.trim().split(delimiter).map(parseFloat);
    } // validate points - https://svgwg.org/svg2-draft/shapes.html#DataTypePoints
    // Odd number of coordinates is an error. In such cases, drop the last odd coordinate.


    if (array.length % 2 !== 0) array.pop(); // wrap points in two-tuples

    for (var i = 0, len = array.length; i < len; i = i + 2) {
      points.push([array[i], array[i + 1]]);
    }

    return points;
  },
  // transform points with matrix (similar to Point.transform)
  transform: function transform(m) {
    var points = [];

    for (var i = 0; i < this.length; i++) {
      var point = this[i]; // Perform the matrix multiplication

      points.push([m.a * point[0] + m.c * point[1] + m.e, m.b * point[0] + m.d * point[1] + m.f]);
    } // Return the required point


    return new PointArray(points);
  },
  // Move point string
  move: function move(x, y) {
    var box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y; // move every point

    if (!isNaN(x) && !isNaN(y)) {
      for (var i = this.length - 1; i >= 0; i--) {
        this[i] = [this[i][0] + x, this[i][1] + y];
      }
    }

    return this;
  },
  // Resize poly string
  size: function size(width, height) {
    var i;
    var box = this.bbox(); // recalculate position of all points according to new size

    for (i = this.length - 1; i >= 0; i--) {
      if (box.width) this[i][0] = (this[i][0] - box.x) * width / box.width + box.x;
      if (box.height) this[i][1] = (this[i][1] - box.y) * height / box.height + box.y;
    }

    return this;
  },
  // Get bounding box of points
  bbox: function bbox() {
    var maxX = -Infinity;
    var maxY = -Infinity;
    var minX = Infinity;
    var minY = Infinity;
    this.forEach(function (el) {
      maxX = Math.max(el[0], maxX);
      maxY = Math.max(el[1], maxY);
      minX = Math.min(el[0], minX);
      minY = Math.min(el[1], minY);
    });
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
});

var MorphArray = PointArray; // Move by left top corner over x-axis

function x$1(x) {
  return x == null ? this.bbox().x : this.move(x, this.bbox().y);
} // Move by left top corner over y-axis

function y$1(y) {
  return y == null ? this.bbox().y : this.move(this.bbox().x, y);
} // Set width of element

function width$1(width) {
  var b = this.bbox();
  return width == null ? b.width : this.size(width, b.height);
} // Set height of element

function height$1(height) {
  var b = this.bbox();
  return height == null ? b.height : this.size(b.width, height);
}

var pointed = ({
	__proto__: null,
	MorphArray: MorphArray,
	x: x$1,
	y: y$1,
	width: width$1,
	height: height$1
});

var Line =
/*#__PURE__*/
function (_Shape) {
  _inherits(Line, _Shape);

  // Initialize node
  function Line(node) {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _getPrototypeOf(Line).call(this, nodeOrNew('line', node), node));
  } // Get array


  _createClass(Line, [{
    key: "array",
    value: function array() {
      return new PointArray([[this.attr('x1'), this.attr('y1')], [this.attr('x2'), this.attr('y2')]]);
    } // Overwrite native plot() method

  }, {
    key: "plot",
    value: function plot(x1, y1, x2, y2) {
      if (x1 == null) {
        return this.array();
      } else if (typeof y1 !== 'undefined') {
        x1 = {
          x1: x1,
          y1: y1,
          x2: x2,
          y2: y2
        };
      } else {
        x1 = new PointArray(x1).toLine();
      }

      return this.attr(x1);
    } // Move by left top corner

  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr(this.array().move(x, y).toLine());
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr(this.array().size(p.width, p.height).toLine());
    }
  }]);

  return Line;
}(Shape);
extend(Line, pointed);
registerMethods({
  Container: {
    // Create a line element
    line: wrapWithAttrCheck(function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // make sure plot is called as a setter
      // x1 is not necessarily a number, it can also be an array, a string and a PointArray
      return Line.prototype.plot.apply(this.put(new Line()), args[0] != null ? args : [0, 0, 0, 0]);
    })
  }
});
register(Line, 'Line');

var Marker =
/*#__PURE__*/
function (_Container) {
  _inherits(Marker, _Container);

  // Initialize node
  function Marker(node) {
    _classCallCheck(this, Marker);

    return _possibleConstructorReturn(this, _getPrototypeOf(Marker).call(this, nodeOrNew('marker', node), node));
  } // Set width of element


  _createClass(Marker, [{
    key: "width",
    value: function width(_width) {
      return this.attr('markerWidth', _width);
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return this.attr('markerHeight', _height);
    } // Set marker refX and refY

  }, {
    key: "ref",
    value: function ref(x, y) {
      return this.attr('refX', x).attr('refY', y);
    } // Update marker

  }, {
    key: "update",
    value: function update(block) {
      // remove all content
      this.clear(); // invoke passed block

      if (typeof block === 'function') {
        block.call(this, this);
      }

      return this;
    } // Return the fill id

  }, {
    key: "toString",
    value: function toString() {
      return 'url(#' + this.id() + ')';
    }
  }]);

  return Marker;
}(Container);
registerMethods({
  Container: {
    marker: function marker() {
      var _this$defs;

      // Create marker element in defs
      return (_this$defs = this.defs()).marker.apply(_this$defs, arguments);
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
    marker: function marker(_marker, width, height, block) {
      var attr = ['marker']; // Build attribute name

      if (_marker !== 'all') attr.push(_marker);
      attr = attr.join('-'); // Set marker attribute

      _marker = arguments[1] instanceof Marker ? arguments[1] : this.defs().marker(width, height, block);
      return this.attr(attr, _marker);
    }
  }
});
register(Marker, 'Marker');

var nativeSort = [].sort;
var test$2 = [1, 2, 3];

// IE8-
var FAILS_ON_UNDEFINED = fails(function () {
  test$2.sort(undefined);
});
// V8 bug
var FAILS_ON_NULL = fails(function () {
  test$2.sort(null);
});
// Old WebKit
var SLOPPY_METHOD$2 = sloppyArrayMethod('sort');

var FORCED$4 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || SLOPPY_METHOD$2;

// `Array.prototype.sort` method
// https://tc39.github.io/ecma262/#sec-array.prototype.sort
_export({ target: 'Array', proto: true, forced: FORCED$4 }, {
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? nativeSort.call(toObject(this))
      : nativeSort.call(toObject(this), aFunction$1(comparefn));
  }
});

/***
Base Class
==========
The base stepper class that will be
***/

function makeSetterGetter(k, f) {
  return function (v) {
    if (v == null) return this[v];
    this[k] = v;
    if (f) f.call(this);
    return this;
  };
}

var easing = {
  '-': function _(pos) {
    return pos;
  },
  '<>': function _(pos) {
    return -Math.cos(pos * Math.PI) / 2 + 0.5;
  },
  '>': function _(pos) {
    return Math.sin(pos * Math.PI / 2);
  },
  '<': function _(pos) {
    return -Math.cos(pos * Math.PI / 2) + 1;
  },
  bezier: function bezier(x1, y1, x2, y2) {
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
        return 3 * t * Math.pow(1 - t, 2) * y1 + 3 * Math.pow(t, 2) * (1 - t) * y2 + Math.pow(t, 3);
      }
    };
  },
  // see https://www.w3.org/TR/css-easing-1/#step-timing-function-algo
  steps: function steps(_steps) {
    var stepPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
    // deal with "jump-" prefix
    stepPosition = stepPosition.split('-').reverse()[0];
    var jumps = _steps;

    if (stepPosition === 'none') {
      --jumps;
    } else if (stepPosition === 'both') {
      ++jumps;
    } // The beforeFlag is essentially useless


    return function (t) {
      var beforeFlag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      // Step is called currentStep in referenced url
      var step = Math.floor(t * _steps);
      var jumping = t * step % 1 === 0;

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
var Stepper =
/*#__PURE__*/
function () {
  function Stepper() {
    _classCallCheck(this, Stepper);
  }

  _createClass(Stepper, [{
    key: "done",
    value: function done() {
      return false;
    }
  }]);

  return Stepper;
}();
/***
Easing Functions
================
***/

var Ease =
/*#__PURE__*/
function (_Stepper) {
  _inherits(Ease, _Stepper);

  function Ease(fn) {
    var _this;

    _classCallCheck(this, Ease);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Ease).call(this));
    _this.ease = easing[fn || timeline.ease] || fn;
    return _this;
  }

  _createClass(Ease, [{
    key: "step",
    value: function step(from, to, pos) {
      if (typeof from !== 'number') {
        return pos < 1 ? from : to;
      }

      return from + (to - from) * this.ease(pos);
    }
  }]);

  return Ease;
}(Stepper);
/***
Controller Types
================
***/

var Controller =
/*#__PURE__*/
function (_Stepper2) {
  _inherits(Controller, _Stepper2);

  function Controller(fn) {
    var _this2;

    _classCallCheck(this, Controller);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Controller).call(this));
    _this2.stepper = fn;
    return _this2;
  }

  _createClass(Controller, [{
    key: "step",
    value: function step(current, target, dt, c) {
      return this.stepper(current, target, dt, c);
    }
  }, {
    key: "done",
    value: function done(c) {
      return c.done;
    }
  }]);

  return Controller;
}(Stepper);

function recalculate() {
  // Apply the default parameters
  var duration = (this._duration || 500) / 1000;
  var overshoot = this._overshoot || 0; // Calculate the PID natural response

  var eps = 1e-10;
  var pi = Math.PI;
  var os = Math.log(overshoot / 100 + eps);
  var zeta = -os / Math.sqrt(pi * pi + os * os);
  var wn = 3.9 / (zeta * duration); // Calculate the Spring values

  this.d = 2 * zeta * wn;
  this.k = wn * wn;
}

var Spring =
/*#__PURE__*/
function (_Controller) {
  _inherits(Spring, _Controller);

  function Spring(duration, overshoot) {
    var _this3;

    _classCallCheck(this, Spring);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Spring).call(this));

    _this3.duration(duration || 500).overshoot(overshoot || 0);

    return _this3;
  }

  _createClass(Spring, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      if (dt > 100) dt = 16;
      dt /= 1000; // Get the previous velocity

      var velocity = c.velocity || 0; // Apply the control to get the new position and store it

      var acceleration = -this.d * velocity - this.k * (current - target);
      var newPosition = current + velocity * dt + acceleration * dt * dt / 2; // Store the velocity

      c.velocity = velocity + acceleration * dt; // Figure out if we have converged, and if so, pass the value

      c.done = Math.abs(target - newPosition) + Math.abs(velocity) < 0.002;
      return c.done ? target : newPosition;
    }
  }]);

  return Spring;
}(Controller);
extend(Spring, {
  duration: makeSetterGetter('_duration', recalculate),
  overshoot: makeSetterGetter('_overshoot', recalculate)
});
var PID =
/*#__PURE__*/
function (_Controller2) {
  _inherits(PID, _Controller2);

  function PID(p, i, d, windup) {
    var _this4;

    _classCallCheck(this, PID);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(PID).call(this));
    p = p == null ? 0.1 : p;
    i = i == null ? 0.01 : i;
    d = d == null ? 0 : d;
    windup = windup == null ? 1000 : windup;

    _this4.p(p).i(i).d(d).windup(windup);

    return _this4;
  }

  _createClass(PID, [{
    key: "step",
    value: function step(current, target, dt, c) {
      if (typeof current === 'string') return current;
      c.done = dt === Infinity;
      if (dt === Infinity) return target;
      if (dt === 0) return current;
      var p = target - current;
      var i = (c.integral || 0) + p * dt;
      var d = (p - (c.error || 0)) / dt;
      var windup = this.windup; // antiwindup

      if (windup !== false) {
        i = Math.max(-windup, Math.min(i, windup));
      }

      c.error = p;
      c.integral = i;
      c.done = Math.abs(p) < 0.001;
      return c.done ? target : current + (this.P * p + this.I * i + this.D * d);
    }
  }]);

  return PID;
}(Controller);
extend(PID, {
  windup: makeSetterGetter('windup'),
  p: makeSetterGetter('P'),
  i: makeSetterGetter('I'),
  d: makeSetterGetter('D')
});

var PathArray = subClassArray('PathArray', SVGArray);
function pathRegReplace(a, b, c, d) {
  return c + d.replace(dots, ' .');
}

function arrayToString(a) {
  for (var i = 0, il = a.length, s = ''; i < il; i++) {
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

var pathHandlers = {
  M: function M(c, p, p0) {
    p.x = p0.x = c[0];
    p.y = p0.y = c[1];
    return ['M', p.x, p.y];
  },
  L: function L(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['L', c[0], c[1]];
  },
  H: function H(c, p) {
    p.x = c[0];
    return ['H', c[0]];
  },
  V: function V(c, p) {
    p.y = c[0];
    return ['V', c[0]];
  },
  C: function C(c, p) {
    p.x = c[4];
    p.y = c[5];
    return ['C', c[0], c[1], c[2], c[3], c[4], c[5]];
  },
  S: function S(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['S', c[0], c[1], c[2], c[3]];
  },
  Q: function Q(c, p) {
    p.x = c[2];
    p.y = c[3];
    return ['Q', c[0], c[1], c[2], c[3]];
  },
  T: function T(c, p) {
    p.x = c[0];
    p.y = c[1];
    return ['T', c[0], c[1]];
  },
  Z: function Z(c, p, p0) {
    p.x = p0.x;
    p.y = p0.y;
    return ['Z'];
  },
  A: function A(c, p) {
    p.x = c[5];
    p.y = c[6];
    return ['A', c[0], c[1], c[2], c[3], c[4], c[5], c[6]];
  }
};
var mlhvqtcsaz = 'mlhvqtcsaz'.split('');

for (var i = 0, il = mlhvqtcsaz.length; i < il; ++i) {
  pathHandlers[mlhvqtcsaz[i]] = function (i) {
    return function (c, p, p0) {
      if (i === 'H') c[0] = c[0] + p.x;else if (i === 'V') c[0] = c[0] + p.y;else if (i === 'A') {
        c[5] = c[5] + p.x;
        c[6] = c[6] + p.y;
      } else {
        for (var j = 0, jl = c.length; j < jl; ++j) {
          c[j] = c[j] + (j % 2 ? p.y : p.x);
        }
      }
      return pathHandlers[i](c, p, p0);
    };
  }(mlhvqtcsaz[i].toUpperCase());
}

extend(PathArray, {
  // Convert array to string
  toString: function toString() {
    return arrayToString(this);
  },
  // Move path string
  move: function move(x, y) {
    // get bounding box of current situation
    var box = this.bbox(); // get relative offset

    x -= box.x;
    y -= box.y;

    if (!isNaN(x) && !isNaN(y)) {
      // move every point
      for (var l, i = this.length - 1; i >= 0; i--) {
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
  },
  // Resize path string
  size: function size(width, height) {
    // get bounding box of current situation
    var box = this.bbox();
    var i, l; // If the box width or height is 0 then we ignore
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
  },
  // Test if the passed path array use the same path data commands as this path array
  equalCommands: function equalCommands(pathArray) {
    var i, il, equalCommands;
    pathArray = new PathArray(pathArray);
    equalCommands = this.length === pathArray.length;

    for (i = 0, il = this.length; equalCommands && i < il; i++) {
      equalCommands = this[i][0] === pathArray[i][0];
    }

    return equalCommands;
  },
  // Make path array morphable
  morph: function morph(pathArray) {
    pathArray = new PathArray(pathArray);

    if (this.equalCommands(pathArray)) {
      this.destination = pathArray;
    } else {
      this.destination = null;
    }

    return this;
  },
  // Get morphed path array at given position
  at: function at(pos) {
    // make sure a destination is defined
    if (!this.destination) return this;
    var sourceArray = this;
    var destinationArray = this.destination.value;
    var array = [];
    var pathArray = new PathArray();
    var i, il, j, jl; // Animate has specified in the SVG spec
    // See: https://www.w3.org/TR/SVG11/paths.html#PathElement

    for (i = 0, il = sourceArray.length; i < il; i++) {
      array[i] = [sourceArray[i][0]];

      for (j = 1, jl = sourceArray[i].length; j < jl; j++) {
        array[i][j] = sourceArray[i][j] + (destinationArray[i][j] - sourceArray[i][j]) * pos;
      } // For the two flags of the elliptical arc command, the SVG spec say:
      // Flags and booleans are interpolated as fractions between zero and one, with any non-zero value considered to be a value of one/true
      // Elliptical arc command as an array followed by corresponding indexes:
      // ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
      //   0    1   2        3                 4             5      6  7


      if (array[i][0] === 'A') {
        array[i][4] = +(array[i][4] !== 0);
        array[i][5] = +(array[i][5] !== 0);
      }
    } // Directly modify the value of a path array, this is done this way for performance


    pathArray.value = array;
    return pathArray;
  },
  // Absolutize and parse path to array
  parse: function parse() {
    var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [['M', 0, 0]];
    // if it's already a patharray, no need to parse it
    if (array instanceof PathArray) return array; // prepare for parsing

    var s;
    var paramCnt = {
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

    if (typeof array === 'string') {
      array = array.replace(numbersWithDots, pathRegReplace) // convert 45.123.123 to 45.123 .123
      .replace(pathLetters, ' $& ') // put some room between letters and numbers
      .replace(hyphen, '$1 -') // add space before hyphen
      .trim() // trim
      .split(delimiter); // split into array
    } else {
      array = array.reduce(function (prev, curr) {
        return [].concat.call(prev, curr);
      }, []);
    } // array now is an array containing all parts of a path e.g. ['M', '0', '0', 'L', '30', '30' ...]


    var result = [];
    var p = new Point();
    var p0 = new Point();
    var index = 0;
    var len = array.length;

    do {
      // Test if we have a path letter
      if (isPathLetter.test(array[index])) {
        s = array[index];
        ++index; // If last letter was a move command and we got no new, it defaults to [L]ine
      } else if (s === 'M') {
        s = 'L';
      } else if (s === 'm') {
        s = 'l';
      }

      result.push(pathHandlers[s].call(null, array.slice(index, index = index + paramCnt[s.toUpperCase()]).map(parseFloat), p, p0));
    } while (len > index);

    return result;
  },
  // Get bounding box of path
  bbox: function bbox() {
    parser().path.setAttribute('d', this.toString());
    return parser.nodes.path.getBBox();
  }
});

var Morphable =
/*#__PURE__*/
function () {
  function Morphable(stepper) {
    _classCallCheck(this, Morphable);

    this._stepper = stepper || new Ease('-');
    this._from = null;
    this._to = null;
    this._type = null;
    this._context = null;
    this._morphObj = null;
  }

  _createClass(Morphable, [{
    key: "from",
    value: function from(val) {
      if (val == null) {
        return this._from;
      }

      this._from = this._set(val);
      return this;
    }
  }, {
    key: "to",
    value: function to(val) {
      if (val == null) {
        return this._to;
      }

      this._to = this._set(val);
      return this;
    }
  }, {
    key: "type",
    value: function type(_type) {
      // getter
      if (_type == null) {
        return this._type;
      } // setter


      this._type = _type;
      return this;
    }
  }, {
    key: "_set",
    value: function _set(value) {
      if (!this._type) {
        var type = _typeof(value);

        if (type === 'number') {
          this.type(SVGNumber);
        } else if (type === 'string') {
          if (Color.isColor(value)) {
            this.type(Color);
          } else if (delimiter.test(value)) {
            this.type(pathLetters.test(value) ? PathArray : SVGArray);
          } else if (numberAndUnit.test(value)) {
            this.type(SVGNumber);
          } else {
            this.type(NonMorphable);
          }
        } else if (morphableTypes.indexOf(value.constructor) > -1) {
          this.type(value.constructor);
        } else if (Array.isArray(value)) {
          this.type(SVGArray);
        } else if (type === 'object') {
          this.type(ObjectBag);
        } else {
          this.type(NonMorphable);
        }
      }

      var result = new this._type(value);

      if (this._type === Color) {
        result = this._to ? result[this._to[4]]() : this._from ? result[this._from[4]]() : result;
      }

      result = result.toArray();
      this._morphObj = this._morphObj || new this._type();
      this._context = this._context || Array.apply(null, Array(result.length)).map(Object).map(function (o) {
        o.done = true;
        return o;
      });
      return result;
    }
  }, {
    key: "stepper",
    value: function stepper(_stepper) {
      if (_stepper == null) return this._stepper;
      this._stepper = _stepper;
      return this;
    }
  }, {
    key: "done",
    value: function done() {
      var complete = this._context.map(this._stepper.done).reduce(function (last, curr) {
        return last && curr;
      }, true);

      return complete;
    }
  }, {
    key: "at",
    value: function at(pos) {
      var _this = this;

      return this._morphObj.fromArray(this._from.map(function (i, index) {
        return _this._stepper.step(i, _this._to[index], pos, _this._context[index], _this._context);
      }));
    }
  }]);

  return Morphable;
}();
var NonMorphable =
/*#__PURE__*/
function () {
  function NonMorphable() {
    _classCallCheck(this, NonMorphable);

    this.init.apply(this, arguments);
  }

  _createClass(NonMorphable, [{
    key: "init",
    value: function init(val) {
      val = Array.isArray(val) ? val[0] : val;
      this.value = val;
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return [this.value];
    }
  }]);

  return NonMorphable;
}();
var TransformBag =
/*#__PURE__*/
function () {
  function TransformBag() {
    _classCallCheck(this, TransformBag);

    this.init.apply(this, arguments);
  }

  _createClass(TransformBag, [{
    key: "init",
    value: function init(obj) {
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
  }, {
    key: "toArray",
    value: function toArray() {
      var v = this;
      return [v.scaleX, v.scaleY, v.shear, v.rotate, v.translateX, v.translateY, v.originX, v.originY];
    }
  }]);

  return TransformBag;
}();
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
var ObjectBag =
/*#__PURE__*/
function () {
  function ObjectBag() {
    _classCallCheck(this, ObjectBag);

    this.init.apply(this, arguments);
  }

  _createClass(ObjectBag, [{
    key: "init",
    value: function init(objOrArr) {
      this.values = [];

      if (Array.isArray(objOrArr)) {
        this.values = objOrArr;
        return;
      }

      objOrArr = objOrArr || {};
      var entries = [];

      for (var i in objOrArr) {
        entries.push([i, objOrArr[i]]);
      }

      entries.sort(function (a, b) {
        return a[0] - b[0];
      });
      this.values = entries.reduce(function (last, curr) {
        return last.concat(curr);
      }, []);
      return this;
    }
  }, {
    key: "valueOf",
    value: function valueOf() {
      var obj = {};
      var arr = this.values;

      for (var i = 0, len = arr.length; i < len; i += 2) {
        obj[arr[i]] = arr[i + 1];
      }

      return obj;
    }
  }, {
    key: "toArray",
    value: function toArray() {
      return this.values;
    }
  }]);

  return ObjectBag;
}();
var morphableTypes = [NonMorphable, TransformBag, ObjectBag];
function registerMorphableType() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  morphableTypes.push.apply(morphableTypes, _toConsumableArray([].concat(type)));
}
function makeMorphable() {
  extend(morphableTypes, {
    to: function to(val) {
      return new Morphable().type(this.constructor).from(this.valueOf()).to(val);
    },
    fromArray: function fromArray(arr) {
      this.init(arr);
      return this;
    }
  });
}

var Path =
/*#__PURE__*/
function (_Shape) {
  _inherits(Path, _Shape);

  // Initialize node
  function Path(node) {
    _classCallCheck(this, Path);

    return _possibleConstructorReturn(this, _getPrototypeOf(Path).call(this, nodeOrNew('path', node), node));
  } // Get array


  _createClass(Path, [{
    key: "array",
    value: function array() {
      return this._array || (this._array = new PathArray(this.attr('d')));
    } // Plot new path

  }, {
    key: "plot",
    value: function plot(d) {
      return d == null ? this.array() : this.clear().attr('d', typeof d === 'string' ? d : this._array = new PathArray(d));
    } // Clear array cache

  }, {
    key: "clear",
    value: function clear() {
      delete this._array;
      return this;
    } // Move by left top corner

  }, {
    key: "move",
    value: function move(x, y) {
      return this.attr('d', this.array().move(x, y));
    } // Move by left top corner over x-axis

  }, {
    key: "x",
    value: function x(_x) {
      return _x == null ? this.bbox().x : this.move(_x, this.bbox().y);
    } // Move by left top corner over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      return _y == null ? this.bbox().y : this.move(this.bbox().x, _y);
    } // Set element size to given width and height

  }, {
    key: "size",
    value: function size(width, height) {
      var p = proportionalSize(this, width, height);
      return this.attr('d', this.array().size(p.width, p.height));
    } // Set width of element

  }, {
    key: "width",
    value: function width(_width) {
      return _width == null ? this.bbox().width : this.size(_width, this.bbox().height);
    } // Set height of element

  }, {
    key: "height",
    value: function height(_height) {
      return _height == null ? this.bbox().height : this.size(this.bbox().width, _height);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg textpath [href*="' + this.id() + '"]');
    }
  }]);

  return Path;
}(Shape); // Define morphable array
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
} // Plot new path

function plot(p) {
  return p == null ? this.array() : this.clear().attr('points', typeof p === 'string' ? p : this._array = new PointArray(p));
} // Clear array cache

function clear() {
  delete this._array;
  return this;
} // Move by left top corner

function move(x, y) {
  return this.attr('points', this.array().move(x, y));
} // Set element size to given width and height

function size(width, height) {
  var p = proportionalSize(this, width, height);
  return this.attr('points', this.array().size(p.width, p.height));
}

var poly = ({
	__proto__: null,
	array: array,
	plot: plot,
	clear: clear,
	move: move,
	size: size
});

var Polygon =
/*#__PURE__*/
function (_Shape) {
  _inherits(Polygon, _Shape);

  // Initialize node
  function Polygon(node) {
    _classCallCheck(this, Polygon);

    return _possibleConstructorReturn(this, _getPrototypeOf(Polygon).call(this, nodeOrNew('polygon', node), node));
  }

  return Polygon;
}(Shape);
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

var Polyline =
/*#__PURE__*/
function (_Shape) {
  _inherits(Polyline, _Shape);

  // Initialize node
  function Polyline(node) {
    _classCallCheck(this, Polyline);

    return _possibleConstructorReturn(this, _getPrototypeOf(Polyline).call(this, nodeOrNew('polyline', node), node));
  }

  return Polyline;
}(Shape);
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

var Rect =
/*#__PURE__*/
function (_Shape) {
  _inherits(Rect, _Shape);

  // Initialize node
  function Rect(node) {
    _classCallCheck(this, Rect);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rect).call(this, nodeOrNew('rect', node), node));
  }

  return Rect;
}(Shape);
extend(Rect, {
  rx: rx,
  ry: ry
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

var max$3 = Math.max;
var min$4 = Math.min;
var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';

// `Array.prototype.splice` method
// https://tc39.github.io/ecma262/#sec-array.prototype.splice
// with adding support of @@species
_export({ target: 'Array', proto: true, forced: !arrayMethodHasSpeciesSupport('splice') }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = toLength(O.length);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min$4(max$3(toInteger(deleteCount), 0), len - actualStart);
    }
    if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
      throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
    }
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else delete O[to];
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    O.length = len - actualDeleteCount + insertCount;
    return A;
  }
});

var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this._first = null;
    this._last = null;
  }

  _createClass(Queue, [{
    key: "push",
    value: function push(value) {
      // An item stores an id and the provided value
      var item = value.next ? value : {
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
    }
  }, {
    key: "shift",
    value: function shift() {
      // Check if we have a value
      var remove = this._first;
      if (!remove) return null; // If we do, remove it and relink things

      this._first = remove.next;
      if (this._first) this._first.prev = null;
      this._last = this._first ? this._last : null;
      return remove.value;
    } // Shows us the first item in the list

  }, {
    key: "first",
    value: function first() {
      return this._first && this._first.value;
    } // Shows us the last item in the list

  }, {
    key: "last",
    value: function last() {
      return this._last && this._last.value;
    } // Removes the item that was returned from the push

  }, {
    key: "remove",
    value: function remove(item) {
      // Relink the previous item
      if (item.prev) item.prev.next = item.next;
      if (item.next) item.next.prev = item.prev;
      if (item === this._last) this._last = item.prev;
      if (item === this._first) this._first = item.next; // Invalidate item

      item.prev = null;
      item.next = null;
    }
  }]);

  return Queue;
}();

var Animator = {
  nextDraw: null,
  frames: new Queue(),
  timeouts: new Queue(),
  immediates: new Queue(),
  timer: function timer() {
    return globals.window.performance || globals.window.Date;
  },
  transforms: [],
  frame: function frame(fn) {
    // Store the node
    var node = Animator.frames.push({
      run: fn
    }); // Request an animation frame if we don't have one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    } // Return the node so we can remove it easily


    return node;
  },
  timeout: function timeout(fn, delay) {
    delay = delay || 0; // Work out when the event should fire

    var time = Animator.timer().now() + delay; // Add the timeout to the end of the queue

    var node = Animator.timeouts.push({
      run: fn,
      time: time
    }); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },
  immediate: function immediate(fn) {
    // Add the immediate fn to the end of the queue
    var node = Animator.immediates.push(fn); // Request another animation frame if we need one

    if (Animator.nextDraw === null) {
      Animator.nextDraw = globals.window.requestAnimationFrame(Animator._draw);
    }

    return node;
  },
  cancelFrame: function cancelFrame(node) {
    node != null && Animator.frames.remove(node);
  },
  clearTimeout: function clearTimeout(node) {
    node != null && Animator.timeouts.remove(node);
  },
  cancelImmediate: function cancelImmediate(node) {
    node != null && Animator.immediates.remove(node);
  },
  _draw: function _draw(now) {
    // Run all the timeouts we can run, if they are not ready yet, add them
    // to the end of the queue immediately! (bad timeouts!!! [sarcasm])
    var nextTimeout = null;
    var lastTimeout = Animator.timeouts.last();

    while (nextTimeout = Animator.timeouts.shift()) {
      // Run the timeout if its time, or push it to the end
      if (now >= nextTimeout.time) {
        nextTimeout.run();
      } else {
        Animator.timeouts.push(nextTimeout);
      } // If we hit the last item, we should stop shifting out more items


      if (nextTimeout === lastTimeout) break;
    } // Run all of the animation frames


    var nextFrame = null;
    var lastFrame = Animator.frames.last();

    while (nextFrame !== lastFrame && (nextFrame = Animator.frames.shift())) {
      nextFrame.run(now);
    }

    var nextImmediate = null;

    while (nextImmediate = Animator.immediates.shift()) {
      nextImmediate();
    } // If we have remaining timeouts or frames, draw until we don't anymore


    Animator.nextDraw = Animator.timeouts.first() || Animator.frames.first() ? globals.window.requestAnimationFrame(Animator._draw) : null;
  }
};

var makeSchedule = function makeSchedule(runnerInfo) {
  var start = runnerInfo.start;
  var duration = runnerInfo.runner.duration();
  var end = start + duration;
  return {
    start: start,
    duration: duration,
    end: end,
    runner: runnerInfo.runner
  };
};

var defaultSource = function defaultSource() {
  var w = globals.window;
  return (w.performance || w.Date).now();
};

var Timeline =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Timeline, _EventTarget);

  // Construct a new timeline on the given element
  function Timeline() {
    var _this;

    var timeSource = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultSource;

    _classCallCheck(this, Timeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Timeline).call(this));
    _this._timeSource = timeSource; // Store the timing variables

    _this._startTime = 0;
    _this._speed = 1.0; // Determines how long a runner is hold in memory. Can be a dt or true/false

    _this._persist = 0; // Keep track of the running animations and their starting parameters

    _this._nextFrame = null;
    _this._paused = true;
    _this._runners = [];
    _this._runnerIds = [];
    _this._lastRunnerId = -1;
    _this._time = 0;
    _this._lastSourceTime = 0;
    _this._lastStepTime = 0; // Make sure that step is always called in class context

    _this._step = _this._stepFn.bind(_assertThisInitialized(_this), false);
    _this._stepImmediate = _this._stepFn.bind(_assertThisInitialized(_this), true);
    return _this;
  } // schedules a runner on the timeline


  _createClass(Timeline, [{
    key: "schedule",
    value: function schedule(runner, delay, when) {
      if (runner == null) {
        return this._runners.map(makeSchedule);
      } // The start time for the next animation can either be given explicitly,
      // derived from the current timeline time or it can be relative to the
      // last start time to chain animations direclty


      var absoluteStartTime = 0;
      var endTime = this.getEndTime();
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
        var _runnerInfo = this._runners[runner.id];

        if (_runnerInfo) {
          absoluteStartTime = _runnerInfo.start + delay;
          delay = 0;
        }
      } else {
        throw new Error('Invalid value for the "when" parameter');
      } // Manage runner


      runner.unschedule();
      runner.timeline(this);
      var persist = runner.persist();
      var runnerInfo = {
        persist: persist === null ? this._persist : persist,
        start: absoluteStartTime + delay,
        runner: runner
      };
      this._lastRunnerId = runner.id;

      this._runners.push(runnerInfo);

      this._runners.sort(function (a, b) {
        return a.start - b.start;
      });

      this._runnerIds = this._runners.map(function (info) {
        return info.runner.id;
      });

      this.updateTime()._continue();

      return this;
    } // Remove the runner from this timeline

  }, {
    key: "unschedule",
    value: function unschedule(runner) {
      var index = this._runnerIds.indexOf(runner.id);

      if (index < 0) return this;

      this._runners.splice(index, 1);

      this._runnerIds.splice(index, 1);

      runner.timeline(null);
      return this;
    } // Calculates the end of the timeline

  }, {
    key: "getEndTime",
    value: function getEndTime() {
      var lastRunnerInfo = this._runners[this._runnerIds.indexOf(this._lastRunnerId)];

      var lastDuration = lastRunnerInfo ? lastRunnerInfo.runner.duration() : 0;
      var lastStartTime = lastRunnerInfo ? lastRunnerInfo.start : 0;
      return lastStartTime + lastDuration;
    }
  }, {
    key: "getEndTimeOfTimeline",
    value: function getEndTimeOfTimeline() {
      var lastEndTime = 0;

      for (var i = 0; i < this._runners.length; i++) {
        var runnerInfo = this._runners[i];
        var duration = runnerInfo ? runnerInfo.runner.duration() : 0;
        var startTime = runnerInfo ? runnerInfo.start : 0;
        var endTime = startTime + duration;

        if (endTime > lastEndTime) {
          lastEndTime = endTime;
        }
      }

      return lastEndTime;
    } // Makes sure, that after pausing the time doesn't jump

  }, {
    key: "updateTime",
    value: function updateTime() {
      if (!this.active()) {
        this._lastSourceTime = this._timeSource();
      }

      return this;
    }
  }, {
    key: "play",
    value: function play() {
      // Now make sure we are not paused and continue the animation
      this._paused = false;
      return this.updateTime()._continue();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._paused = true;
      return this._continue();
    }
  }, {
    key: "stop",
    value: function stop() {
      // Go to start and pause
      this.time(0);
      return this.pause();
    }
  }, {
    key: "finish",
    value: function finish() {
      // Go to end and pause
      this.time(this.getEndTimeOfTimeline() + 1);
      return this.pause();
    }
  }, {
    key: "speed",
    value: function speed(_speed) {
      if (_speed == null) return this._speed;
      this._speed = _speed;
      return this;
    }
  }, {
    key: "reverse",
    value: function reverse(yes) {
      var currentSpeed = this.speed();
      if (yes == null) return this.speed(-currentSpeed);
      var positive = Math.abs(currentSpeed);
      return this.speed(yes ? positive : -positive);
    }
  }, {
    key: "seek",
    value: function seek(dt) {
      return this.time(this._time + dt);
    }
  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) return this._time;
      this._time = _time;
      return this._continue(true);
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "source",
    value: function source(fn) {
      if (fn == null) return this._timeSource;
      this._timeSource = fn;
      return this;
    }
  }, {
    key: "_stepFn",
    value: function _stepFn() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      // Get the time delta from the last time and update the time
      var time = this._timeSource();

      var dtSource = time - this._lastSourceTime;
      if (immediateStep) dtSource = 0;
      var dtTime = this._speed * dtSource + (this._time - this._lastStepTime);
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
      // where 2 runners change the same attriute but in different times,
      // reseting both of them will lead to the case where the later defined
      // runner always wins the reset even if the other runner started earlier
      // and therefore should win the attribute battle
      // this can be solved by reseting them backwards

      for (var k = this._runners.length; k--;) {
        // Get and run the current runner and ignore it if its inactive
        var runnerInfo = this._runners[k];
        var runner = runnerInfo.runner; // Make sure that we give the actual difference
        // between runner start time and now

        var dtToStart = this._time - runnerInfo.start; // Dont run runner if not started yet
        // and try to reset it

        if (dtToStart <= 0) {
          runner.reset();
        }
      } // Run all of the runners directly


      var runnersLeft = false;

      for (var i = 0, len = this._runners.length; i < len; i++) {
        // Get and run the current runner and ignore it if its inactive
        var _runnerInfo2 = this._runners[i];
        var _runner = _runnerInfo2.runner;
        var dt = dtTime; // Make sure that we give the actual difference
        // between runner start time and now

        var _dtToStart = this._time - _runnerInfo2.start; // Dont run runner if not started yet


        if (_dtToStart <= 0) {
          runnersLeft = true;
          continue;
        } else if (_dtToStart < dt) {
          // Adjust dt to make sure that animation is on point
          dt = _dtToStart;
        }

        if (!_runner.active()) continue; // If this runner is still going, signal that we need another animation
        // frame, otherwise, remove the completed runner

        var finished = _runner.step(dt).done;

        if (!finished) {
          runnersLeft = true; // continue
        } else if (_runnerInfo2.persist !== true) {
          // runner is finished. And runner might get removed
          var endTime = _runner.duration() - _runner.time() + this._time;

          if (endTime + _runnerInfo2.persist < this._time) {
            // Delete runner and correct index
            _runner.unschedule();

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
    } // Checks if we are running and continues the animation

  }, {
    key: "_continue",
    value: function _continue() {
      var immediateStep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      Animator.cancelFrame(this._nextFrame);
      this._nextFrame = null;
      if (immediateStep) return this._stepImmediate();
      if (this._paused) return this;
      this._nextFrame = Animator.frame(this._step);
      return this;
    }
  }, {
    key: "active",
    value: function active() {
      return !!this._nextFrame;
    }
  }]);

  return Timeline;
}(EventTarget);
registerMethods({
  Element: {
    timeline: function timeline(_timeline) {
      if (_timeline == null) {
        this._timeline = this._timeline || new Timeline();
        return this._timeline;
      } else {
        this._timeline = _timeline;
        return this;
      }
    }
  }
});

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Runner =
/*#__PURE__*/
function (_EventTarget) {
  _inherits(Runner, _EventTarget);

  function Runner(options) {
    var _this;

    _classCallCheck(this, Runner);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Runner).call(this)); // Store a unique id on the runner, so that we can identify it later

    _this.id = Runner.id++; // Ensure a default value

    options = options == null ? timeline.duration : options; // Ensure that we get a controller

    options = typeof options === 'function' ? new Controller(options) : options; // Declare all of the variables

    _this._element = null;
    _this._timeline = null;
    _this.done = false;
    _this._queue = []; // Work out the stepper and the duration

    _this._duration = typeof options === 'number' && options;
    _this._isDeclarative = options instanceof Controller;
    _this._stepper = _this._isDeclarative ? options : new Ease(); // We copy the current values from the timeline because they can change

    _this._history = {}; // Store the state of the runner

    _this.enabled = true;
    _this._time = 0;
    _this._lastTime = 0; // At creation, the runner is in reseted state

    _this._reseted = true; // Save transforms applied to this runner

    _this.transforms = new Matrix();
    _this.transformId = 1; // Looping variables

    _this._haveReversed = false;
    _this._reverse = false;
    _this._loopsDone = 0;
    _this._swing = false;
    _this._wait = 0;
    _this._times = 1;
    _this._frameId = null; // Stores how long a runner is stored after beeing done

    _this._persist = _this._isDeclarative ? true : null;
    return _this;
  }
  /*
  Runner Definitions
  ==================
  These methods help us define the runtime behaviour of the Runner or they
  help us make new runners from the current runner
  */


  _createClass(Runner, [{
    key: "element",
    value: function element(_element) {
      if (_element == null) return this._element;
      this._element = _element;

      _element._prepareRunner();

      return this;
    }
  }, {
    key: "timeline",
    value: function timeline(_timeline) {
      // check explicitly for undefined so we can set the timeline to null
      if (typeof _timeline === 'undefined') return this._timeline;
      this._timeline = _timeline;
      return this;
    }
  }, {
    key: "animate",
    value: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var runner = new Runner(o.duration);
      if (this._timeline) runner.timeline(this._timeline);
      if (this._element) runner.element(this._element);
      return runner.loop(o).schedule(o.delay, o.when);
    }
  }, {
    key: "schedule",
    value: function schedule(timeline, delay, when) {
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
  }, {
    key: "unschedule",
    value: function unschedule() {
      var timeline = this.timeline();
      timeline && timeline.unschedule(this);
      return this;
    }
  }, {
    key: "loop",
    value: function loop(times, swing, wait) {
      // Deal with the user passing in an object
      if (_typeof(times) === 'object') {
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
  }, {
    key: "delay",
    value: function delay(_delay) {
      return this.animate(0, _delay);
    }
    /*
    Basic Functionality
    ===================
    These methods allow us to attach basic functions to the runner directly
    */

  }, {
    key: "queue",
    value: function queue(initFn, runFn, retargetFn, isTransform) {
      this._queue.push({
        initialiser: initFn || noop,
        runner: runFn || noop,
        retarget: retargetFn,
        isTransform: isTransform,
        initialised: false,
        finished: false
      });

      var timeline = this.timeline();
      timeline && this.timeline()._continue();
      return this;
    }
  }, {
    key: "during",
    value: function during(fn) {
      return this.queue(null, fn);
    }
  }, {
    key: "after",
    value: function after(fn) {
      return this.on('finished', fn);
    }
    /*
    Runner animation methods
    ========================
    Control how the animation plays
    */

  }, {
    key: "time",
    value: function time(_time) {
      if (_time == null) {
        return this._time;
      }

      var dt = _time - this._time;
      this.step(dt);
      return this;
    }
  }, {
    key: "duration",
    value: function duration() {
      return this._times * (this._wait + this._duration) - this._wait;
    }
  }, {
    key: "loops",
    value: function loops(p) {
      var loopDuration = this._duration + this._wait;

      if (p == null) {
        var loopsDone = Math.floor(this._time / loopDuration);
        var relativeTime = this._time - loopsDone * loopDuration;
        var position = relativeTime / this._duration;
        return Math.min(loopsDone + position, this._times);
      }

      var whole = Math.floor(p);
      var partial = p % 1;
      var time = loopDuration * whole + this._duration * partial;
      return this.time(time);
    }
  }, {
    key: "persist",
    value: function persist(dtOrForever) {
      if (dtOrForever == null) return this._persist;
      this._persist = dtOrForever;
      return this;
    }
  }, {
    key: "position",
    value: function position(p) {
      // Get all of the variables we need
      var x = this._time;
      var d = this._duration;
      var w = this._wait;
      var t = this._times;
      var s = this._swing;
      var r = this._reverse;
      var position;

      if (p == null) {
        /*
        This function converts a time to a position in the range [0, 1]
        The full explanation can be found in this desmos demonstration
          https://www.desmos.com/calculator/u4fbavgche
        The logic is slightly simplified here because we can use booleans
        */
        // Figure out the value without thinking about the start or end time
        var f = function f(x) {
          var swinging = s * Math.floor(x % (2 * (w + d)) / (w + d));
          var backwards = swinging && !r || !swinging && r;
          var uncliped = Math.pow(-1, backwards) * (x % (w + d)) / d + backwards;
          var clipped = Math.max(Math.min(uncliped, 1), 0);
          return clipped;
        }; // Figure out the value by incorporating the start time


        var endTime = t * (w + d) - w;
        position = x <= 0 ? Math.round(f(1e-5)) : x < endTime ? f(x) : Math.round(f(endTime - 1e-5));
        return position;
      } // Work out the loops done and add the position to the loops done


      var loopsDone = Math.floor(this.loops());
      var swingForward = s && loopsDone % 2 === 0;
      var forwards = swingForward && !r || r && swingForward;
      position = loopsDone + (forwards ? p : 1 - p);
      return this.loops(position);
    }
  }, {
    key: "progress",
    value: function progress(p) {
      if (p == null) {
        return Math.min(1, this._time / this.duration());
      }

      return this.time(p * this.duration());
    }
  }, {
    key: "step",
    value: function step(dt) {
      // If we are inactive, this stepper just gets skipped
      if (!this.enabled) return this; // Update the time and get the new position

      dt = dt == null ? 16 : dt;
      this._time += dt;
      var position = this.position(); // Figure out if we need to run the stepper in this frame

      var running = this._lastPosition !== position && this._time >= 0;
      this._lastPosition = position; // Figure out if we just started

      var duration = this.duration();
      var justStarted = this._lastTime <= 0 && this._time > 0;
      var justFinished = this._lastTime < duration && this._time >= duration;
      this._lastTime = this._time;

      if (justStarted) {
        this.fire('start', this);
      } // Work out if the runner is finished set the done flag here so animations
      // know, that they are running in the last step (this is good for
      // transformations which can be merged)


      var declarative = this._isDeclarative;
      this.done = !declarative && !justFinished && this._time >= duration; // Runner is running. So its not in reseted state anymore

      this._reseted = false; // Call initialise and the run function

      if (running || declarative) {
        this._initialise(running); // clear the transforms on this runner so they dont get added again and again


        this.transforms = new Matrix();

        var converged = this._run(declarative ? dt : position);

        this.fire('step', this);
      } // correct the done flag here
      // declaritive animations itself know when they converged


      this.done = this.done || converged && declarative;

      if (justFinished) {
        this.fire('finished', this);
      }

      return this;
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this._reseted) return this;
      this.time(0);
      this._reseted = true;
      return this;
    }
  }, {
    key: "finish",
    value: function finish() {
      return this.step(Infinity);
    }
  }, {
    key: "reverse",
    value: function reverse(_reverse) {
      this._reverse = _reverse == null ? !this._reverse : _reverse;
      return this;
    }
  }, {
    key: "ease",
    value: function ease(fn) {
      this._stepper = new Ease(fn);
      return this;
    }
  }, {
    key: "active",
    value: function active(enabled) {
      if (enabled == null) return this.enabled;
      this.enabled = enabled;
      return this;
    }
    /*
    Private Methods
    ===============
    Methods that shouldn't be used externally
    */
    // Save a morpher to the morpher list so that we can retarget it later

  }, {
    key: "_rememberMorpher",
    value: function _rememberMorpher(method, morpher) {
      this._history[method] = {
        morpher: morpher,
        caller: this._queue[this._queue.length - 1]
      }; // We have to resume the timeline in case a controller
      // is already done without beeing ever run
      // This can happen when e.g. this is done:
      //    anim = el.animate(new SVG.Spring)
      // and later
      //    anim.move(...)

      if (this._isDeclarative) {
        var timeline = this.timeline();
        timeline && timeline.play();
      }
    } // Try to set the target for a morpher if the morpher exists, otherwise
    // do nothing and return false

  }, {
    key: "_tryRetarget",
    value: function _tryRetarget(method, target, extra) {
      if (this._history[method]) {
        // if the last method wasnt even initialised, throw it away
        if (!this._history[method].caller.initialised) {
          var index = this._queue.indexOf(this._history[method].caller);

          this._queue.splice(index, 1);

          return false;
        } // for the case of transformations, we use the special retarget function
        // which has access to the outer scope


        if (this._history[method].caller.retarget) {
          this._history[method].caller.retarget(target, extra); // for everything else a simple morpher change is sufficient

        } else {
          this._history[method].morpher.to(target);
        }

        this._history[method].caller.finished = false;
        var timeline = this.timeline();
        timeline && timeline.play();
        return true;
      }

      return false;
    } // Run each initialise function in the runner if required

  }, {
    key: "_initialise",
    value: function _initialise(running) {
      // If we aren't running, we shouldn't initialise when not declarative
      if (!running && !this._isDeclarative) return; // Loop through all of the initialisers

      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current initialiser
        var current = this._queue[i]; // Determine whether we need to initialise

        var needsIt = this._isDeclarative || !current.initialised && running;
        running = !current.finished; // Call the initialiser if we need to

        if (needsIt && running) {
          current.initialiser.call(this);
          current.initialised = true;
        }
      }
    } // Run each run function for the position or dt given

  }, {
    key: "_run",
    value: function _run(positionOrDt) {
      // Run all of the _queue directly
      var allfinished = true;

      for (var i = 0, len = this._queue.length; i < len; ++i) {
        // Get the current function to run
        var current = this._queue[i]; // Run the function if its not finished, we keep track of the finished
        // flag for the sake of declarative _queue

        var converged = current.runner.call(this, positionOrDt);
        current.finished = current.finished || converged === true;
        allfinished = allfinished && current.finished;
      } // We report when all of the constructors are finished


      return allfinished;
    }
  }, {
    key: "addTransform",
    value: function addTransform(transform, index) {
      this.transforms.lmultiplyO(transform);
      return this;
    }
  }, {
    key: "clearTransform",
    value: function clearTransform() {
      this.transforms = new Matrix();
      return this;
    } // TODO: Keep track of all transformations so that deletion is faster

  }, {
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {
      if (!this.done || !this._timeline || !this._timeline._runnerIds.includes(this.id)) {
        this._queue = this._queue.filter(function (item) {
          return !item.isTransform;
        });
      }
    }
  }], [{
    key: "sanitise",
    value: function sanitise(duration, delay, when) {
      // Initialise the default parameters
      var times = 1;
      var swing = false;
      var wait = 0;
      duration = duration || timeline.duration;
      delay = delay || timeline.delay;
      when = when || 'last'; // If we have an object, unpack the values

      if (_typeof(duration) === 'object' && !(duration instanceof Stepper)) {
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
  }]);

  return Runner;
}(EventTarget);
Runner.id = 0;

var FakeRunner =
/*#__PURE__*/
function () {
  function FakeRunner() {
    var transforms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new Matrix();
    var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    var done = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    _classCallCheck(this, FakeRunner);

    this.transforms = transforms;
    this.id = id;
    this.done = done;
  }

  _createClass(FakeRunner, [{
    key: "clearTransformsFromQueue",
    value: function clearTransformsFromQueue() {}
  }]);

  return FakeRunner;
}();

extend([Runner, FakeRunner], {
  mergeWith: function mergeWith(runner) {
    return new FakeRunner(runner.transforms.lmultiply(this.transforms), runner.id);
  }
}); // FakeRunner.emptyRunner = new FakeRunner()

var lmultiply = function lmultiply(last, curr) {
  return last.lmultiplyO(curr);
};

var getRunnerTransform = function getRunnerTransform(runner) {
  return runner.transforms;
};

function mergeTransforms() {
  // Find the matrix to apply to the element and apply it
  var runners = this._transformationRunners.runners;
  var netTransform = runners.map(getRunnerTransform).reduce(lmultiply, new Matrix());
  this.transform(netTransform);

  this._transformationRunners.merge();

  if (this._transformationRunners.length() === 1) {
    this._frameId = null;
  }
}

var RunnerArray =
/*#__PURE__*/
function () {
  function RunnerArray() {
    _classCallCheck(this, RunnerArray);

    this.runners = [];
    this.ids = [];
  }

  _createClass(RunnerArray, [{
    key: "add",
    value: function add(runner) {
      if (this.runners.includes(runner)) return;
      var id = runner.id + 1;
      this.runners.push(runner);
      this.ids.push(id);
      return this;
    }
  }, {
    key: "getByID",
    value: function getByID(id) {
      return this.runners[this.ids.indexOf(id + 1)];
    }
  }, {
    key: "remove",
    value: function remove(id) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1);
      this.runners.splice(index, 1);
      return this;
    }
  }, {
    key: "merge",
    value: function merge() {
      var _this2 = this;

      var lastRunner = null;
      this.runners.forEach(function (runner, i) {
        var condition = lastRunner && runner.done && lastRunner.done // don't merge runner when persisted on timeline
        && (!runner._timeline || !runner._timeline._runnerIds.includes(runner.id)) && (!lastRunner._timeline || !lastRunner._timeline._runnerIds.includes(lastRunner.id));

        if (condition) {
          // the +1 happens in the function
          _this2.remove(runner.id);

          _this2.edit(lastRunner.id, runner.mergeWith(lastRunner));
        }

        lastRunner = runner;
      });
      return this;
    }
  }, {
    key: "edit",
    value: function edit(id, newRunner) {
      var index = this.ids.indexOf(id + 1);
      this.ids.splice(index, 1, id + 1);
      this.runners.splice(index, 1, newRunner);
      return this;
    }
  }, {
    key: "length",
    value: function length() {
      return this.ids.length;
    }
  }, {
    key: "clearBefore",
    value: function clearBefore(id) {
      var deleteCnt = this.ids.indexOf(id + 1) || 1;
      this.ids.splice(0, deleteCnt, 0);
      this.runners.splice(0, deleteCnt, new FakeRunner()).forEach(function (r) {
        return r.clearTransformsFromQueue();
      });
      return this;
    }
  }]);

  return RunnerArray;
}();

registerMethods({
  Element: {
    animate: function animate(duration, delay, when) {
      var o = Runner.sanitise(duration, delay, when);
      var timeline = this.timeline();
      return new Runner(o.duration).loop(o).element(this).timeline(timeline.play()).schedule(o.delay, o.when);
    },
    delay: function delay(by, when) {
      return this.animate(0, by, when);
    },
    // this function searches for all runners on the element and deletes the ones
    // which run before the current one. This is because absolute transformations
    // overwfrite anything anyway so there is no need to waste time computing
    // other runners
    _clearTransformRunnersBefore: function _clearTransformRunnersBefore(currentRunner) {
      this._transformationRunners.clearBefore(currentRunner.id);
    },
    _currentTransform: function _currentTransform(current) {
      return this._transformationRunners.runners // we need the equal sign here to make sure, that also transformations
      // on the same runner which execute before the current transformation are
      // taken into account
      .filter(function (runner) {
        return runner.id <= current.id;
      }).map(getRunnerTransform).reduce(lmultiply, new Matrix());
    },
    _addRunner: function _addRunner(runner) {
      this._transformationRunners.add(runner); // Make sure that the runner merge is executed at the very end of
      // all Animator functions. Thats why we use immediate here to execute
      // the merge right after all frames are run


      Animator.cancelImmediate(this._frameId);
      this._frameId = Animator.immediate(mergeTransforms.bind(this));
    },
    _prepareRunner: function _prepareRunner() {
      if (this._frameId == null) {
        this._transformationRunners = new RunnerArray().add(new FakeRunner(new Matrix(this)));
      }
    }
  }
});
extend(Runner, {
  attr: function attr(a, v) {
    return this.styleAttr('attr', a, v);
  },
  // Add animatable styles
  css: function css(s, v) {
    return this.styleAttr('css', s, v);
  },
  styleAttr: function styleAttr(type, name, val) {
    // apply attributes individually
    if (_typeof(name) === 'object') {
      for (var key in name) {
        this.styleAttr(type, key, name[key]);
      }

      return this;
    }

    var morpher = new Morphable(this._stepper).to(val);
    this.queue(function () {
      morpher = morpher.from(this.element()[type](name));
    }, function (pos) {
      this.element()[type](name, morpher.at(pos));
      return morpher.done();
    });
    return this;
  },
  zoom: function zoom(level, point) {
    if (this._tryRetarget('zoom', to, point)) return this;
    var morpher = new Morphable(this._stepper).to(new SVGNumber(level));
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
  transform: function transform(transforms, relative, affine) {
    // If we have a declarative function, we should retarget it if possible
    relative = transforms.relative || relative;

    if (this._isDeclarative && !relative && this._tryRetarget('transform', transforms)) {
      return this;
    } // Parse the parameters


    var isMatrix = Matrix.isMatrixLike(transforms);
    affine = transforms.affine != null ? transforms.affine : affine != null ? affine : !isMatrix; // Create a morepher and set its type

    var morpher = new Morphable(this._stepper).type(affine ? TransformBag : Matrix);
    var origin;
    var element;
    var current;
    var currentAngle;
    var startTransform;

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

      var _transform = new Point(origin).transform(element._currentTransform(this)),
          x = _transform.x,
          y = _transform.y;

      var target = new Matrix(_objectSpread$1({}, transforms, {
        origin: [x, y]
      }));
      var start = this._isDeclarative && current ? current : startTransform;

      if (affine) {
        target = target.decompose(x, y);
        start = start.decompose(x, y); // Get the current and target angle as it was set

        var rTarget = target.rotate;
        var rCurrent = start.rotate; // Figure out the shortest path to rotate directly

        var possibilities = [rTarget - 360, rTarget, rTarget + 360];
        var distances = possibilities.map(function (a) {
          return Math.abs(a - rCurrent);
        });
        var shortest = Math.min.apply(Math, _toConsumableArray(distances));
        var index = distances.indexOf(shortest);
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
      var affineParameters = morpher.at(pos);
      currentAngle = affineParameters.rotate;
      current = new Matrix(affineParameters);
      this.addTransform(current);

      element._addRunner(this);

      return morpher.done();
    }

    function retarget(newTransforms) {
      // only get a new origin if it changed since the last call
      if ((newTransforms.origin || 'center').toString() !== (transforms.origin || 'center').toString()) {
        origin = getOrigin(transforms, element);
      } // overwrite the old transformations with the new ones


      transforms = _objectSpread$1({}, newTransforms, {
        origin: origin
      });
    }

    this.queue(setup, run, retarget, true);
    this._isDeclarative && this._rememberMorpher('transform', morpher);
    return this;
  },
  // Animatable x-axis
  x: function x(_x, relative) {
    return this._queueNumber('x', _x);
  },
  // Animatable y-axis
  y: function y(_y) {
    return this._queueNumber('y', _y);
  },
  dx: function dx() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('x', x);
  },
  dy: function dy() {
    var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    return this._queueNumberDelta('y', y);
  },
  dmove: function dmove(x, y) {
    return this.dx(x).dy(y);
  },
  _queueNumberDelta: function _queueNumberDelta(method, to) {
    to = new SVGNumber(to); // Try to change the target if we have this method already registerd

    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    var morpher = new Morphable(this._stepper).to(to);
    var from = null;
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
  _queueObject: function _queueObject(method, to) {
    // Try to change the target if we have this method already registerd
    if (this._tryRetarget(method, to)) return this; // Make a morpher and queue the animation

    var morpher = new Morphable(this._stepper).to(to);
    this.queue(function () {
      morpher.from(this.element()[method]());
    }, function (pos) {
      this.element()[method](morpher.at(pos));
      return morpher.done();
    }); // Register the morpher so that if it is changed again, we can retarget it

    this._rememberMorpher(method, morpher);

    return this;
  },
  _queueNumber: function _queueNumber(method, value) {
    return this._queueObject(method, new SVGNumber(value));
  },
  // Animatable center x-axis
  cx: function cx(x) {
    return this._queueNumber('cx', x);
  },
  // Animatable center y-axis
  cy: function cy(y) {
    return this._queueNumber('cy', y);
  },
  // Add animatable move
  move: function move(x, y) {
    return this.x(x).y(y);
  },
  // Add animatable center
  center: function center(x, y) {
    return this.cx(x).cy(y);
  },
  // Add animatable size
  size: function size(width, height) {
    // animate bbox based size for all other elements
    var box;

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
  width: function width(_width) {
    return this._queueNumber('width', _width);
  },
  // Add animatable height
  height: function height(_height) {
    return this._queueNumber('height', _height);
  },
  // Add animatable plot
  plot: function plot(a, b, c, d) {
    // Lines can be plotted with 4 arguments
    if (arguments.length === 4) {
      return this.plot([a, b, c, d]);
    }

    if (this._tryRetarget('plot', a)) return this;
    var morpher = new Morphable(this._stepper).type(this._element.MorphArray).to(a);
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
  leading: function leading(value) {
    return this._queueNumber('leading', value);
  },
  // Add animatable viewbox
  viewbox: function viewbox(x, y, width, height) {
    return this._queueObject('viewbox', new Box(x, y, width, height));
  },
  update: function update(o) {
    if (_typeof(o) !== 'object') {
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
  rx: rx,
  ry: ry,
  from: from,
  to: to
});
register(Runner, 'Runner');

var Svg =
/*#__PURE__*/
function (_Container) {
  _inherits(Svg, _Container);

  function Svg(node) {
    var _this;

    _classCallCheck(this, Svg);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Svg).call(this, nodeOrNew('svg', node), node));

    _this.namespace();

    return _this;
  }

  _createClass(Svg, [{
    key: "isRoot",
    value: function isRoot() {
      return !this.node.parentNode || !(this.node.parentNode instanceof globals.window.SVGElement) || this.node.parentNode.nodeName === '#document';
    } // Check if this is a root svg
    // If not, call docs from this element

  }, {
    key: "root",
    value: function root() {
      if (this.isRoot()) return this;
      return _get(_getPrototypeOf(Svg.prototype), "root", this).call(this);
    } // Add namespaces

  }, {
    key: "namespace",
    value: function namespace() {
      if (!this.isRoot()) return this.root().namespace();
      return this.attr({
        xmlns: ns,
        version: '1.1'
      }).attr('xmlns:xlink', xlink, xmlns).attr('xmlns:svgjs', svgjs, xmlns);
    } // Creates and returns defs element

  }, {
    key: "defs",
    value: function defs() {
      if (!this.isRoot()) return this.root().defs();
      return adopt(this.node.querySelector('defs')) || this.put(new Defs());
    } // custom parent method

  }, {
    key: "parent",
    value: function parent(type) {
      if (this.isRoot()) {
        return this.node.parentNode.nodeName === '#document' ? null : adopt(this.node.parentNode);
      }

      return _get(_getPrototypeOf(Svg.prototype), "parent", this).call(this, type);
    }
  }, {
    key: "clear",
    value: function clear() {
      // remove children
      while (this.node.hasChildNodes()) {
        this.node.removeChild(this.node.lastChild);
      } // remove defs reference


      delete this._defs;
      return this;
    }
  }]);

  return Svg;
}(Container);
registerMethods({
  Container: {
    // Create nested svg document
    nested: wrapWithAttrCheck(function () {
      return this.put(new Svg());
    })
  }
});
register(Svg, 'Svg', true);

var _Symbol =
/*#__PURE__*/
function (_Container) {
  _inherits(_Symbol, _Container);

  // Initialize node
  function _Symbol(node) {
    _classCallCheck(this, _Symbol);

    return _possibleConstructorReturn(this, _getPrototypeOf(_Symbol).call(this, nodeOrNew('symbol', node), node));
  }

  return _Symbol;
}(Container);
registerMethods({
  Container: {
    symbol: wrapWithAttrCheck(function () {
      return this.put(new _Symbol());
    })
  }
});
register(_Symbol, 'Symbol');

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
}

var textable = ({
	__proto__: null,
	plain: plain,
	length: length
});

var Text =
/*#__PURE__*/
function (_Shape) {
  _inherits(Text, _Shape);

  // Initialize node
  function Text(node) {
    var _this;

    _classCallCheck(this, Text);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Text).call(this, nodeOrNew('text', node), node));
    _this.dom.leading = new SVGNumber(1.3); // store leading value for rebuilding

    _this._rebuild = true; // enable automatic updating of dy values

    _this._build = false; // disable build mode for adding multiple lines

    return _this;
  } // Move over x-axis
  // Text is moved its bounding box
  // text-anchor does NOT matter


  _createClass(Text, [{
    key: "x",
    value: function x(_x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (_x == null) {
        return box.x;
      }

      return this.attr('x', this.attr('x') + _x - box.x);
    } // Move over y-axis

  }, {
    key: "y",
    value: function y(_y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (_y == null) {
        return box.y;
      }

      return this.attr('y', this.attr('y') + _y - box.y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      return this.x(x, box).y(y, box);
    } // Move center over x-axis

  }, {
    key: "cx",
    value: function cx(x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (x == null) {
        return box.cx;
      }

      return this.attr('x', this.attr('x') + x - box.cx);
    } // Move center over y-axis

  }, {
    key: "cy",
    value: function cy(y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();

      if (y == null) {
        return box.cy;
      }

      return this.attr('y', this.attr('y') + y - box.cy);
    }
  }, {
    key: "center",
    value: function center(x, y) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      return this.cx(x, box).cy(y, box);
    } // Set the text content

  }, {
    key: "text",
    value: function text(_text) {
      // act as getter
      if (_text === undefined) {
        var children = this.node.childNodes;
        var firstLine = 0;
        _text = '';

        for (var i = 0, len = children.length; i < len; ++i) {
          // skip textPaths - they are no lines
          if (children[i].nodeName === 'textPath') {
            if (i === 0) firstLine = 1;
            continue;
          } // add newline if its not the first child and newLined is set to true


          if (i !== firstLine && children[i].nodeType !== 3 && adopt(children[i]).dom.newLined === true) {
            _text += '\n';
          } // add content of this node


          _text += children[i].textContent;
        }

        return _text;
      } // remove existing content


      this.clear().build(true);

      if (typeof _text === 'function') {
        // call block
        _text.call(this, this);
      } else {
        // store text and make sure text is not blank
        _text = _text.split('\n'); // build new lines

        for (var j = 0, jl = _text.length; j < jl; j++) {
          this.tspan(_text[j]).newLine();
        }
      } // disable build mode and rebuild lines


      return this.build(false).rebuild();
    } // Set / get leading

  }, {
    key: "leading",
    value: function leading(value) {
      // act as getter
      if (value == null) {
        return this.dom.leading;
      } // act as setter


      this.dom.leading = new SVGNumber(value);
      return this.rebuild();
    } // Rebuild appearance type

  }, {
    key: "rebuild",
    value: function rebuild(_rebuild) {
      // store new rebuild flag if given
      if (typeof _rebuild === 'boolean') {
        this._rebuild = _rebuild;
      } // define position of all lines


      if (this._rebuild) {
        var self = this;
        var blankLineOffset = 0;
        var leading = this.dom.leading;
        this.each(function () {
          var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
          var dy = leading * new SVGNumber(fontSize);

          if (this.dom.newLined) {
            this.attr('x', self.attr('x'));

            if (this.text() === '\n') {
              blankLineOffset += dy;
            } else {
              this.attr('dy', dy + blankLineOffset);
              blankLineOffset = 0;
            }
          }
        });
        this.fire('rebuild');
      }

      return this;
    } // Enable / disable build mode

  }, {
    key: "build",
    value: function build(_build) {
      this._build = !!_build;
      return this;
    } // overwrite method from parent to set data properly

  }, {
    key: "setData",
    value: function setData(o) {
      this.dom = o;
      this.dom.leading = new SVGNumber(o.leading || 1.3);
      return this;
    }
  }]);

  return Text;
}(Shape);
extend(Text, textable);
registerMethods({
  Container: {
    // Create text element
    text: wrapWithAttrCheck(function (text) {
      return this.put(new Text()).text(text);
    }),
    // Create plain text element
    plain: wrapWithAttrCheck(function (text) {
      return this.put(new Text()).plain(text);
    })
  }
});
register(Text, 'Text');

var Tspan =
/*#__PURE__*/
function (_Text) {
  _inherits(Tspan, _Text);

  // Initialize node
  function Tspan(node) {
    _classCallCheck(this, Tspan);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tspan).call(this, nodeOrNew('tspan', node), node));
  } // Set text content


  _createClass(Tspan, [{
    key: "text",
    value: function text(_text) {
      if (_text == null) return this.node.textContent + (this.dom.newLined ? '\n' : '');
      typeof _text === 'function' ? _text.call(this, this) : this.plain(_text);
      return this;
    } // Shortcut dx

  }, {
    key: "dx",
    value: function dx(_dx) {
      return this.attr('dx', _dx);
    } // Shortcut dy

  }, {
    key: "dy",
    value: function dy(_dy) {
      return this.attr('dy', _dy);
    }
  }, {
    key: "x",
    value: function x(_x) {
      return this.attr('x', _x);
    }
  }, {
    key: "y",
    value: function y(_y) {
      return this.attr('x', _y);
    }
  }, {
    key: "move",
    value: function move(x, y) {
      return this.x(x).y(y);
    } // Create new line

  }, {
    key: "newLine",
    value: function newLine() {
      // fetch text parent
      var t = this.parent(Text); // mark new line

      this.dom.newLined = true;
      var fontSize = globals.window.getComputedStyle(this.node).getPropertyValue('font-size');
      var dy = t.dom.leading * new SVGNumber(fontSize); // apply new position

      return this.dy(dy).attr('x', t.x());
    }
  }]);

  return Tspan;
}(Text);
extend(Tspan, textable);
registerMethods({
  Tspan: {
    tspan: wrapWithAttrCheck(function (text) {
      var tspan = new Tspan(); // clear if build mode is disabled

      if (!this._build) {
        this.clear();
      } // add new tspan


      this.node.appendChild(tspan.node);
      return tspan.text(text);
    })
  }
});
register(Tspan, 'Tspan');

var ClipPath =
/*#__PURE__*/
function (_Container) {
  _inherits(ClipPath, _Container);

  function ClipPath(node) {
    _classCallCheck(this, ClipPath);

    return _possibleConstructorReturn(this, _getPrototypeOf(ClipPath).call(this, nodeOrNew('clipPath', node), node));
  } // Unclip all clipped elements and remove itself


  _createClass(ClipPath, [{
    key: "remove",
    value: function remove() {
      // unclip all targets
      this.targets().forEach(function (el) {
        el.unclip();
      }); // remove clipPath from parent

      return _get(_getPrototypeOf(ClipPath.prototype), "remove", this).call(this);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [clip-path*="' + this.id() + '"]');
    }
  }]);

  return ClipPath;
}(Container);
registerMethods({
  Container: {
    // Create clipping element
    clip: wrapWithAttrCheck(function () {
      return this.defs().put(new ClipPath());
    })
  },
  Element: {
    // Distribute clipPath to svg element
    clipWith: function clipWith(element) {
      // use given clip or create a new one
      var clipper = element instanceof ClipPath ? element : this.parent().clip().add(element); // apply mask

      return this.attr('clip-path', 'url("#' + clipper.id() + '")');
    },
    // Unclip element
    unclip: function unclip() {
      return this.attr('clip-path', null);
    },
    clipper: function clipper() {
      return this.reference('clip-path');
    }
  }
});
register(ClipPath, 'ClipPath');

var ForeignObject =
/*#__PURE__*/
function (_Element) {
  _inherits(ForeignObject, _Element);

  function ForeignObject(node) {
    _classCallCheck(this, ForeignObject);

    return _possibleConstructorReturn(this, _getPrototypeOf(ForeignObject).call(this, nodeOrNew('foreignObject', node), node));
  }

  return ForeignObject;
}(Element);
registerMethods({
  Container: {
    foreignObject: wrapWithAttrCheck(function (width, height) {
      return this.put(new ForeignObject()).size(width, height);
    })
  }
});
register(ForeignObject, 'ForeignObject');

var G =
/*#__PURE__*/
function (_Container) {
  _inherits(G, _Container);

  function G(node) {
    _classCallCheck(this, G);

    return _possibleConstructorReturn(this, _getPrototypeOf(G).call(this, nodeOrNew('g', node), node));
  }

  _createClass(G, [{
    key: "x",
    value: function x(_x) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_x == null) return box.x;
      return this.move(_x, box.y, box);
    }
  }, {
    key: "y",
    value: function y(_y) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_y == null) return box.y;
      return this.move(box.x, _y, box);
    }
  }, {
    key: "move",
    value: function move() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      var dx = x - box.x;
      var dy = y - box.y;
      return this.dmove(dx, dy);
    }
  }, {
    key: "dx",
    value: function dx(_dx) {
      return this.dmove(_dx, 0);
    }
  }, {
    key: "dy",
    value: function dy(_dy) {
      return this.dmove(0, _dy);
    }
  }, {
    key: "dmove",
    value: function dmove(dx, dy) {
      this.children().forEach(function (child, i) {
        // Get the childs bbox
        var bbox = child.bbox(); // Get childs matrix

        var m = new Matrix(child); // Translate childs matrix by amount and
        // transform it back into parents space

        var matrix = m.translate(dx, dy).transform(m.inverse()); // Calculate new x and y from old box

        var p = new Point(bbox.x, bbox.y).transform(matrix); // Move element

        child.move(p.x, p.y);
      });
      return this;
    }
  }, {
    key: "width",
    value: function width(_width) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_width == null) return box.width;
      return this.size(_width, box.height, box);
    }
  }, {
    key: "height",
    value: function height(_height) {
      var box = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.bbox();
      if (_height == null) return box.height;
      return this.size(box.width, _height, box);
    }
  }, {
    key: "size",
    value: function size(width, height) {
      var box = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.bbox();
      var p = proportionalSize(this, width, height, box);
      var scaleX = p.width / box.width;
      var scaleY = p.height / box.height;
      this.children().forEach(function (child, i) {
        var o = new Point(box).transform(new Matrix(child).inverse());
        child.scale(scaleX, scaleY, o.x, o.y);
      });
      return this;
    }
  }]);

  return G;
}(Container);
registerMethods({
  Container: {
    // Create a group element
    group: wrapWithAttrCheck(function () {
      return this.put(new G());
    })
  }
});
register(G, 'G');

var A =
/*#__PURE__*/
function (_Container) {
  _inherits(A, _Container);

  function A(node) {
    _classCallCheck(this, A);

    return _possibleConstructorReturn(this, _getPrototypeOf(A).call(this, nodeOrNew('a', node), node));
  } // Link url


  _createClass(A, [{
    key: "to",
    value: function to(url) {
      return this.attr('href', url, xlink);
    } // Link target attribute

  }, {
    key: "target",
    value: function target(_target) {
      return this.attr('target', _target);
    }
  }]);

  return A;
}(Container);
registerMethods({
  Container: {
    // Create a hyperlink element
    link: wrapWithAttrCheck(function (url) {
      return this.put(new A()).to(url);
    })
  },
  Element: {
    // Create a hyperlink element
    linkTo: function linkTo(url) {
      var link = new A();

      if (typeof url === 'function') {
        url.call(link, link);
      } else {
        link.to(url);
      }

      return this.parent().put(link).put(this);
    }
  }
});
register(A, 'A');

var Mask =
/*#__PURE__*/
function (_Container) {
  _inherits(Mask, _Container);

  // Initialize node
  function Mask(node) {
    _classCallCheck(this, Mask);

    return _possibleConstructorReturn(this, _getPrototypeOf(Mask).call(this, nodeOrNew('mask', node), node));
  } // Unmask all masked elements and remove itself


  _createClass(Mask, [{
    key: "remove",
    value: function remove() {
      // unmask all targets
      this.targets().forEach(function (el) {
        el.unmask();
      }); // remove mask from parent

      return _get(_getPrototypeOf(Mask.prototype), "remove", this).call(this);
    }
  }, {
    key: "targets",
    value: function targets() {
      return baseFind('svg [mask*="' + this.id() + '"]');
    }
  }]);

  return Mask;
}(Container);
registerMethods({
  Container: {
    mask: wrapWithAttrCheck(function () {
      return this.defs().put(new Mask());
    })
  },
  Element: {
    // Distribute mask to svg element
    maskWith: function maskWith(element) {
      // use given mask or create a new one
      var masker = element instanceof Mask ? element : this.parent().mask().add(element); // apply mask

      return this.attr('mask', 'url("#' + masker.id() + '")');
    },
    // Unmask element
    unmask: function unmask() {
      return this.attr('mask', null);
    },
    masker: function masker() {
      return this.reference('mask');
    }
  }
});
register(Mask, 'Mask');

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function cssRule(selector, rule) {
  if (!selector) return '';
  if (!rule) return selector;
  var ret = selector + '{';

  for (var i in rule) {
    ret += unCamelCase(i) + ':' + rule[i] + ';';
  }

  ret += '}';
  return ret;
}

var Style =
/*#__PURE__*/
function (_Element) {
  _inherits(Style, _Element);

  function Style(node) {
    _classCallCheck(this, Style);

    return _possibleConstructorReturn(this, _getPrototypeOf(Style).call(this, nodeOrNew('style', node), node));
  }

  _createClass(Style, [{
    key: "addText",
    value: function addText() {
      var w = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      this.node.textContent += w;
      return this;
    }
  }, {
    key: "font",
    value: function font(name, src) {
      var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.rule('@font-face', _objectSpread$2({
        fontFamily: name,
        src: src
      }, params));
    }
  }, {
    key: "rule",
    value: function rule(selector, obj) {
      return this.addText(cssRule(selector, obj));
    }
  }]);

  return Style;
}(Element);
registerMethods('Dom', {
  style: wrapWithAttrCheck(function (selector, obj) {
    return this.put(new Style()).rule(selector, obj);
  }),
  fontface: wrapWithAttrCheck(function (name, src, params) {
    return this.put(new Style()).font(name, src, params);
  })
});
register(Style, 'Style');

var TextPath =
/*#__PURE__*/
function (_Text) {
  _inherits(TextPath, _Text);

  // Initialize node
  function TextPath(node) {
    _classCallCheck(this, TextPath);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextPath).call(this, nodeOrNew('textPath', node), node));
  } // return the array of the path track element


  _createClass(TextPath, [{
    key: "array",
    value: function array() {
      var track = this.track();
      return track ? track.array() : null;
    } // Plot path if any

  }, {
    key: "plot",
    value: function plot(d) {
      var track = this.track();
      var pathArray = null;

      if (track) {
        pathArray = track.plot(d);
      }

      return d == null ? pathArray : this;
    } // Get the path element

  }, {
    key: "track",
    value: function track() {
      return this.reference('href');
    }
  }]);

  return TextPath;
}(Text);
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
    path: wrapWithAttrCheck(function (track) {
      var importNodes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var textPath = new TextPath(); // if track is a path, reuse it

      if (!(track instanceof Path)) {
        // create path element
        track = this.defs().path(track);
      } // link textPath to path and add content


      textPath.attr('href', '#' + track, xlink); // Transplant all nodes from text to textPath

      var node;

      if (importNodes) {
        while (node = this.node.firstChild) {
          textPath.node.appendChild(node);
        }
      } // add textPath element as child node and return textPath


      return this.put(textPath);
    }),
    // Get the textPath children
    textPath: function textPath() {
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
    targets: function targets() {
      return baseFind('svg [href*="' + this.id() + '"]');
    }
  }
});
TextPath.prototype.MorphArray = PathArray;
register(TextPath, 'TextPath');

var Use =
/*#__PURE__*/
function (_Shape) {
  _inherits(Use, _Shape);

  function Use(node) {
    _classCallCheck(this, Use);

    return _possibleConstructorReturn(this, _getPrototypeOf(Use).call(this, nodeOrNew('use', node), node));
  } // Use element as a reference


  _createClass(Use, [{
    key: "element",
    value: function element(_element, file) {
      // Set lined element
      return this.attr('href', (file || '') + '#' + _element, xlink);
    }
  }]);

  return Use;
}(Shape);
registerMethods({
  Container: {
    // Create a use element
    use: wrapWithAttrCheck(function (element, file) {
      return this.put(new Use()).element(element, file);
    })
  }
});
register(Use, 'Use');

/* Optional Modules */
var SVG = makeInstance;
extend([Svg, _Symbol, Image, Pattern, Marker], getMethodsFor('viewbox'));
extend([Line, Polyline, Polygon, Path], getMethodsFor('marker'));
extend(Text, getMethodsFor('Text'));
extend(Path, getMethodsFor('Path'));
extend(Defs, getMethodsFor('Defs'));
extend([Text, Tspan], getMethodsFor('Tspan'));
extend([Rect, Ellipse, Circle, Gradient], getMethodsFor('radius'));
extend(EventTarget, getMethodsFor('EventTarget'));
extend(Dom, getMethodsFor('Dom'));
extend(Element, getMethodsFor('Element'));
extend(Shape, getMethodsFor('Shape')); // extend(Element, getConstructor('Memory'))

extend(Container, getMethodsFor('Container'));
extend(Runner, getMethodsFor('Runner'));
List.extend(getMethodNames());
registerMorphableType([SVGNumber, Color, Box, Matrix, SVGArray, PointArray, PathArray]);
makeMorphable();


//# sourceMappingURL=svg.esm.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

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

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
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
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
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

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
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

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

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

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @svgdotjs/svg.js */ "../node_modules/@svgdotjs/svg.js/dist/svg.esm.js");
/* harmony import */ var cloneArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cloneArray */ "./cloneArray.ts");






Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__["Element"], {
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
Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__["extend"])(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__["Dom"], {
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

    _this.getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_3__["stylesFactory"])(function () {
      return {
        wrapper: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: relative;\n      "], ["\n        position: relative;\n      "]))),
        svg: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: absolute;\n        top: 0;\n        left: 0;\n      "], ["\n        position: absolute;\n        top: 0;\n        left: 0;\n      "]))),
        textBox: Object(emotion__WEBPACK_IMPORTED_MODULE_2__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 10px;\n      "], ["\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        padding: 10px;\n      "])))
      };
    });
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
      initialized: false
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
    var svgMappings = [];
    this.props.options.svgMappings.forEach(function (mapping) {
      svgMappings.push(mapping);
    });
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
      svgMappings: Object(cloneArray__WEBPACK_IMPORTED_MODULE_5__["default"])(svgMappings),
      initialized: false
    });
    this.props.options.svgMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_5__["default"])(svgMappings);
    this.props.onOptionsChange(this.props.options);
    this.forceUpdate();
  };

  ACESVGPanel.prototype.mappingClickHandler = function (event) {
    if (event.target) {
      var clicked = event.target;
      var loopCount = 0;
      var svgMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_5__["default"])(this.props.options.svgMappings);

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
          svgMappings: Object(cloneArray__WEBPACK_IMPORTED_MODULE_5__["default"])(svgMappings),
          initialized: false
        });
        this.props.options.svgMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_5__["default"])(svgMappings);
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
        var svgNode = Object(_svgdotjs_svg_js__WEBPACK_IMPORTED_MODULE_4__["SVG"])(element);
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
          this.setState({
            initFunction: Function('data', 'options', 'svgnode', 'svgmap', this.props.replaceVariables(this.props.options.initSource))
          });

          if (this.state.mappedElements && this.state.initFunction) {
            this.state.initFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
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
          eventFunction = Function('data', 'options', 'svgnode', 'svgmap', this.props.replaceVariables(eventFunctionSource));
          this.setState({
            eventFunctionSource: eventFunctionSource,
            eventFunction: eventFunction,
            initialized: false
          });
        }

        if (this.state.mappedElements && eventFunction) {
          eventFunction(this.props.data, this.props.options, this.state.svgNode, this.state.mappedElements);
        }
      } catch (e) {
        console.log("User event code failed: " + e);
      }

      return this.state.svgNode ? this.state.svgNode.svg() : null;
    } else {
      return null;
    }
  };

  ACESVGPanel.prototype.render = function () {
    var _this = this;

    var styles = this.getStyles();
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: styles.wrapper,
      onClick: this.props.options.captureMappings ? this.mappingClickHandler.bind(this) : undefined
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
      style: {
        width: this.props.width + "px",
        height: this.props.height + "px"
      },
      className: 'svg-object',
      ref: function ref(_ref) {
        return _this.renderSVG(_ref);
      }
    }));
  };

  return ACESVGPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);


var templateObject_1, templateObject_2, templateObject_3;

/***/ }),

/***/ "./cloneArray.ts":
/*!***********************!*\
  !*** ./cloneArray.ts ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var cloneArray = function cloneArray(array) {
  var cloned = [];
  array.forEach(function (item) {
    cloned.push(item);
  });
  return cloned;
};

/* harmony default export */ __webpack_exports__["default"] = (cloneArray);

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
  svgNode: "<?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?>\n<svg\n   xmlns:dc=\"http://purl.org/dc/elements/1.1/\"\n   xmlns:cc=\"http://creativecommons.org/ns#\"\n   xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"\n   xmlns:svg=\"http://www.w3.org/2000/svg\"\n   xmlns=\"http://www.w3.org/2000/svg\"\n   xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n   xmlns:sodipodi=\"http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd\"\n   xmlns:inkscape=\"http://www.inkscape.org/namespaces/inkscape\"\n   viewBox=\"0 0 1259.5 440.78126\"\n   version=\"1.1\"\n   id=\"svg4564\"\n   sodipodi:docname=\"ace.svg.demo.svg\"\n   inkscape:version=\"0.92.4 (5da689c313, 2019-01-14)\"\n   >\n  <metadata\n     id=\"metadata4568\">\n    <rdf:RDF>\n      <cc:Work\n         rdf:about=\"\">\n        <dc:format>image/svg+xml</dc:format>\n        <dc:type\n           rdf:resource=\"http://purl.org/dc/dcmitype/StillImage\" />\n        <dc:title></dc:title>\n      </cc:Work>\n    </rdf:RDF>\n  </metadata>\n  <sodipodi:namedview\n     pagecolor=\"#ffffff\"\n     bordercolor=\"#666666\"\n     borderopacity=\"1\"\n     objecttolerance=\"10\"\n     gridtolerance=\"10\"\n     guidetolerance=\"10\"\n     inkscape:pageopacity=\"0\"\n     inkscape:pageshadow=\"2\"\n     inkscape:window-width=\"3840\"\n     inkscape:window-height=\"2066\"\n     id=\"namedview4566\"\n     showgrid=\"false\"\n     inkscape:zoom=\"0.90509668\"\n     inkscape:cx=\"556.45417\"\n     inkscape:cy=\"334.24713\"\n     inkscape:window-x=\"-11\"\n     inkscape:window-y=\"-11\"\n     inkscape:window-maximized=\"1\"\n     inkscape:current-layer=\"svg4564\"\n     fit-margin-top=\"0\"\n     fit-margin-left=\"0\"\n     fit-margin-right=\"0\"\n     fit-margin-bottom=\"0\" />\n  <defs\n     id=\"defs4520\">\n    <style\n       id=\"style4518\">.cls-1{fill:#2a2e3c;}.cls-2{fill:#c1d301;}.cls-3{fill:#f6511d;}.cls-4{fill:#fff;}.cls-5{fill:#595e71;}</style>\n    <clipPath\n       id=\"clipPath1136\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M61.0 158.0C61.0 158.0 209.0 158.0 209.0 158.0C209.0 158.0 209.0 219.0 209.0 219.0C209.0 219.0 61.0 219.0 61.0 219.0C61.0 219.0 61.0 158.0 61.0 158.0\"\n         id=\"path1134\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1202\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1200\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1214\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1212\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1226\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1224\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1238\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1236\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1250\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1248\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1262\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1260\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1268\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 0.0 1366.0 0.0M640.0 254.0C640.0 254.0 398.0 254.0 398.0 254.0C398.0 254.0 398.0 511.0 398.0 511.0C398.0 511.0 640.0 511.0 640.0 511.0C640.0 511.0 640.0 254.0 640.0 254.0\"\n         id=\"path1266\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1272\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1274\"\n         xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYMAAAKTCAAAAADeMTvIAAAAAXNCSVQI5gpbmQAAEqRJREFUeJztneti4yqvQCXv7/3f+KDzg5vATie+pBoya7VN4zZpYxZCCNwZEQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPgT+hf+pBWwB3/WYy33byl4VML23I+CizzVff+1MHgyEO613dGzv9vGUcvftXGrxf49BR+R8HQ++HYFnzjBOz9yfq7+8L3vwKbP89evcb2tXrX4d7Z+5afWv2ricosdNvt3uziMggck/O/a0wZ0+jzf/xa0NLI+WiVfb6u53XX+ad8oYRcIJk8EwrWm+sHA4bj0Bcztb8PRy2z9Dpdaamh6f6DyrRKOFAxRcEPCbQc63FXZB8k3MDe97Cz8soPDnt8lfKODueFFbDq4IeF8Q+0GIh1s6A8OVrHyej2iNbaNcWD+aWctnG6WAwWDhB8crKLgBwm94W0cje5IuOPA9fzJwQsNq0g4aEPX1tXBcHhnODrbLKMC9RJ0VDDOVK/9thiO1yN6W1tzML3P+flNzrXKNBC1VvfN34ej9ZOzDffcIGTdQr05SAxvcqp9dgpco49v+9JhRXb18ND+g4dBwkkHV9eLWlkwvE0SdHjsgtSxRduHqanpuGqnpqZioifbvnIlDnwiUH8zWvAazv+uUOY1ID8S2dHNlBPOyTgfB16Eb3itH18TCfuC2MRMzXTq8y006lfPrayejoMpF1QLKqpNw+KR8HMU5K4/fXI54fzc6FI+qNOe2v5OgncwGVhDQOZAgzkHJmo9Fuq9q/sKZxzMKxJNgXoFLyUs7GBWYGZqludBKtlCzsotYZ9I0O87GNekey444FjCug4OFJibt6qIuBxRP70dFW87GJqyTIuagu0dCSs72Csws+QerG7e2jLzmxIu5oNsQAYDW737OjGvocHGu92AmJlJqgK2ZmF61klOOuizomZAt9L0m4uHVjMsqGAvYYwCTVbups3FgprOgfAm5xz4Ackl4q287yJh3FpYCrcG2h2UdJyyg7Ql2VJ+0J1rLU458BOjlpm33Pjtk5snvagS1qBLaBVxHoSyBLG0pc3SlvIahvhAOMe19SI3EtVI2CYLtXxb1MIUBs1BMrVkmnJopL4icCMhvOtg2rrJrdoNZAHbXsK0aLEQrQBrpbCZpW4gbUm3pKJ5OU9yIOQnnasR3nOg+6OhLNu2/L7pdiRhQQvjSFQdJLVUY0DSJtVCqdQu1ghvOdDpoC9cjxaOJSxoQMTHwaRAkyZJm0hS3ZL2SKgK1ORUjXAhH+xywbZtW/mUh6OamGXd0WgeiUysLJlq0tQekGqs55nRtR2Ek+tFLgXVFWsn4oWEBRUMYVAVlDDQMh0VqydZVotaFHy0Pii0kWYW8F8ekXKhMJXLso4HPynyxZnVIFDV/1PdsgVRU5+YT/+6szWatijoYbBVDf/VQMg5wUkoz16FUUJdJVJLqklVNZU42Cx3xmG59DfqgxwF/dOm6vNBDYRt3tpcDb95WRy0kUhsE9tMN8k5wdSuFwknHMwT1CEQ2uzUSdgPRksxbp2ZywVVwWZtOD5fHXdO7x/0eemQkuec0Oen3+CgLBPlXJC/1xWISF67vlopn9o/aBXyqKAtVPSc0OZGX+TAWi7IAraSD3ocXIyFi/mg3BH1GqaMsHkF60lwWwd1y6bmArFJgVQJ9YmnuH6NVw4MPxipywm6zXGwlgW/kV83L1s6ts26Aimz054Rzu4h3Pi7zLFK2Iak0BwMcbCKBnfRol8wdQp0VKBqMqflD+wnj9RGdRzMjLyEhYrl+erSunGTv7mJ2WbjQKSqPR+0auFD+8m1wctBu76iWajB0OJgxSWj6cq6MhTl6NjENjN16bg2h/h8cCY9n72+qN/XcmWFj4aaivP09KscpM2klWZdgct1lyuEy/lAexzoJGEbKoTFHZhWBUlVi4LNrA5D0rrh5TLtzp7+qziYBqPFHZhmBTUd2GbmgsBPvH+vPsi/rtzUMWkajLTv5SyYk1XcnxuYSb6UaBMZFyhE63555fP7BwPq9hPaHKks4ZUYGGensoqCvA+Wd2XURMsFXWm+rlNqPq5n9+v5wF3d0tu/RUPd2+/rdqsIEBHResWQmuYwSCJb2isoZ65jPjgr496/naMuM0xXn/abJdcqfBzkKJADBXoU3r90fVF7odJy83ihRQuGImE5B56tDUUyKyijUUPl19aLtN72O22WNE9X1xuKRKQnZsnbM6b9r75E6ry8cu/krl933X97r9fa9uUYtAvNiSptXlRMuFKoZb8+J6198ffmpr1Fte4kuHpNRgm976wkwUVB/oKKuf7Vzrd8T25JuHZ90e6w9osuZQyMxSQMFUL+gvVh1Z3NnA8ucaM+0OGuC4kWEDVTrybBKchXMErZtC+VcRuC3XM0pD6Yjuqw7zvLnA/WkDBFQf4wtZ+702+tF82/ttyOU58hDmTMBytImKIgf6nHgbQzearqufnvXfvhUOuxf6V9LNJaWv/tqI4fctTNnuxOdxwcxGO+0f3xKkEgIjJGrfax3x/3R8rdM3vy3/l1L6VM4IaHrKKhbEqWj2F7vs493Gwwf751XvfGojbmTF/t8+Z+vIqCKQrKzbA25DvdAzH+8P9/cJgf+tGzv+xTOAnDWDMfl/u3z+oZB9re5F/JBw8uBT/i4CA5v8gHizBGwnAa7vipE3poLBo2CV7ng2X4Yz54ckfkg/8/mv5w9Nfzfj64D/9HXTxP1Afvs0YwXP9rjmv8ahysoeDXXyZjUTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuLBQTw4iAcH8eAgHhzEg4N4cBAPDuL5oAP74eivx/KH9SN//CyfcGD9NbvjT53B81hT0G9MrB8/zP8+8DNFxMxMxbQdq4jpKhKaApu6zmf60QfiwPrrtHbcOtYKOAWS+79NkfEoH87JZuaG1EUkjFGw/3Y7p4d4wIG5t5cPWEjCGAUvH/TDCZ/kQ/lgpuSDNST8MRIe5omx6A+BsHo+OH7Ec2HwdBz4sbLeyZOjGgkLMEWBmbUmH+qF8r3bJu7EwdQRrL/C8aV9QT5oCly9sHvCVa7Hgb0+rCVa7/Zr54MaB2Mw+Cn4rfO6HAe78dB8L8lxYO0b60SByC4SbIiDVi/Y+ITr3MwHdcwxf2wtDkxERE1NxUSHyPh78QasLlP4OBgj4X7PuurApdfaz+vrs5oPtLw8NTWR+vH3M4xEtVe5cDDrJ+3j4eqQdNHBMMMpr7G94NKD1PKcKL+wdRSMEsxJ6NOjYXy19qRrPDI3df2iSDBTq42upraUAt+6Vs9pFwfTQHSjXrjgwET8uG61X5RXWlFzjb5O82dcPsjnVIbXHgdTFNTnXSkX7sRB6xMtcZmXsJ++rpCRM4MDh7RTKx99xnSdW/VB7xMuBMS90Pkpy0h45cB3sDJKtcdf5rID09r7u4U2dr5wsI6E1w5kigO5XaLdmpuai4M6aIpZUjMzS5ukLT/USqGwUJnW50ViyczS5MF1ttu/6pyD1o/LnTYXaq8paZGQNhNJqqp5XiSySIkmMsyLxIqBlO+kyYULg6mAe5sb+aBW8vMYZJbU0mY1ClS0TFLXCYNBQjGQUhqioZ/3NB86e5ZnHIyFmY61cVOQ1CzJZtaioNTJy8SBDR9DHNhsoVdrv1Yf1N+iVirgnoGLgKRJ1MySaMFUVKR9/P20WX8/v2Q5DlKOiO6izkvqU6/kh3trFW4mmjZLqllBEhFtDkRlKQlewc5BSnlY8tn5qOnPmHggH1QJqmZNweRgGQEZtwrkBqOUk0I30NeRZBiKTo5KN+qDYT5UPVQF3sFyEtwSRDm97CC3fo+Dvp46LVqcG4+urhfV/OySU1LtCmyTGgVOwhIW/ATT968sId/YOEXqo8IV3nYw7smXKPDJWDXV5haxTWxTlTwULaVgktCG2joOFQ2W5lqhDV/Dz3mD9+NgWmfIhXJXYEk1VQe2iW2mgwRZRUFvPNsFQouEeZLqp0eTij9yYiyaygPLewRleSIbKA6ygk26BBFZR8ELCalLSJbGknmfhk8MS+fzQR+ULI9IeX0o9f5eFFgR8C0OBgmtVrBWpPbkcJLT60VZQXmryTi/pzoQmW2mprODZSSMCnogWDdQZ0e9ULj+687GQbtQaJYgmnpCNlPvYDEJflzvGyOSekao89Q6Ry3hcvH3nVwvcgPRJMGS5Hmp5XFo8w6WkjAp6AvVbnbqDVhduPul9aL28lTMx2mty8RsM9MxDFYSkJnyQXfQcoK5fNBnptdC4VJOzmumWhwk972WjnXIyItZcBuULhB6rezqBF8c1G2fgx/1I6cd9D8zq5OGnrOkj0SatClYzECmL5z6DU0XCvULrjjY5eb3wuLKWkW7cEuLgxIJWuNAh3npenEgfv9gmBoVBS0x7Cakw0UWb45Md/KBtn0kq0ulYnM+XtKAyGyhO+ixcLCj0555hrcc7DbQ6iW8omZpS1vaypaBbZIV5PYfFouWkuA2EMZAsNTfhnxQnnZhU/m9OBh3IfMefV4+FROTIkFt06qgOmhxsFD7Z3qfdjVC2dU8WKvwA9KH1q7bWrVKu5S9dJK0FQmqdSCac8FKmweZ46mRCwS3qdkE2JQP3uTKvCjf9leZdMurRaqiajo6WDQMDmoENztqu/y1Qsi1wYf3D0TqjKj8TUe5YshEsoUtlWVSv2TdA2A1CYfVct9cdjfmDPxCjdbzgk1XDGUFNQhaFKyZkGVWIG3n2DNs4cj1dbsLa3Z11dT9StOsYBcFq60VVSYFdWFmvvg0tVxgF3OByK1r311OUElar6pze2dfFQetTGjZ2a0W7TcyT3BqP9kdmI5/5FGuLZ2q42UVTLWueQk+OzcFViNlfuobnNhPHptxlmDDMNQLg/WmpZ0+9esLozUvSHNQ1wqmSHg/Ik41j2vT0s1dz6/3xkSwsgLfnnVVtDoQ643fFZxfKxK5mA9yjTZFgqnUbYM5BlaVMO1pSl1DlR4LbZBqcXCe03HQb7RHQpsF6fE4tKaEXV5uhUKbJY1fkUthcGUPR8b9zOm7at+RCxptlPfV2l6He+zZ2dH5OJBdTui1wBeNQ5VhPBKnQGx4u5gLRG44cMPRUI99mYLDSqElaJ8N5HccHEsYi4Ef8sBaPmx3VBveOfDHVxWcbpej4ai/+yhYdbFuZNwTMPc+HFwfiORCC+0lHA0/L4rjdXzMLdnjwN8ddRw+8Q1uOdg3+09rdOsIyLzSMEu4NxCJyH+nnzE28Tj0f0cWLhw5mG6mL13kvIOXFr5MwbGD+lUbvnDHwDUHvp3nwed7FLxwMM9Vjx55krsOxjnobOF7jMzD/f3e37nWSkftfDAT/R4FrsF/uCPXvFxtpjctfB27euHgO2e53GJ6fPjdBkSGtn5GwbV8IPLD7P+7LTyVAzzXW+ydEuw7fLxq94fC4HYrrV4Mn+fFlPUGt9vshx/wPT5+aOcHBqdP/n84nxg7Q/jwidzvqz/9hO+IhJ8UPKHn6Vb6jlb/E88GxuNt9i9IeHhs4v8sjef5bvv9gfA1cw0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgBP8PwnL02qctkxrAAAAAElFTkSuQmCC\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1284\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1282\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1296\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1294\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1308\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1306\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1314\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 882.0 768.0 882.0 768.0C882.0 768.0 882.0 511.0 882.0 511.0C882.0 511.0 1124.0 511.0 1124.0 511.0C1124.0 511.0 1124.0 768.0 1124.0 768.0C1124.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 0.0 1366.0 0.0\"\n         id=\"path1312\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1318\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1320\"\n         xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA2YAAAOTCAAAAADx4U+IAAAAAXNCSVQI5gpbmQAAFehJREFUeJzt3duamzq2BlCJ1e//xs3cFyAhyTgpH7R7QY2Riu1y2Ung4/fUCZISAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbPL/+h/AxfyOIya++8f9jp3G1/yWA+a7OVu++qcBJ37LhxPf8XuOl6+Ws9+z23jfs6PkXkfPs2B9IXD32lFM8TtSNjNn+ma8624pm7hBt9tVfN14jNz/mBnL18fl7P67jPflJ4//9Nx1nYUp/vLzH7rXjuKrnqbs3kdNPPvm/Zz95+138lvdO2Qp5W+vAbn/LuN9YzHLpz+5n+gefaWc3XuH8b483P/pwU3EDx6kt8J2tz3Fl5ymbHzyXkdPnNx/KWf32lF8zZCkk5D9bRjyKs4CFMddPH/VzxkC4UwbqTw8ap4YX34vkVOknFKKlPJHwyL33D98pqtb9SY/PjW+4YqeVrM4qll0L9Ro5AseUjb+HgYer30YPYtZpDiajTH+9DVX3j9MMrQY+7vx2/FN13KSsSNZtZx1YRMzvuExZcNX86h/xzXF8Ci6mEUbtHdzdu0dxPedtBhzc1NTdpcJ6yFktbm4xyxSV9TebDded/cwxWnKasRyLWR5eOmlDTNlfcyaPtrbOTOgzzNN4ep/NXmrL7yyyMd95BQ5xuH7+HCd49X3EN/VJKf5yikfNw85u/4xdHS5oumTRdSb7vnuPT+jmnF4XOdRS1i5GaraDUpaNzEWTZ/s8VUpHev3X6pvl905fN/QL2v7ZDnl/JizezQcm6GPozu2fx3lrEnf6wVNNeNUaQ+2MTuy1gateflV9VNlW6oi5WaNVaQcOfK7fbRr7x6+ql8m3LcVt5w9Jq1901W14/W1S7ZVsqg1rR10fLmcqWacKM3G4ysfKdujdlSzhyWOF1Kr1dhijIhIaa9n21hkHYJ8uX8mZjxqVnp0KVtSm7VhGOSSOTtPWYlZzdo2zr/lLEc6GpM/XLgvZpypIWvai0vOXVVLx1KQcYHjVRytv3hI2dq/MqfYQ/XGOTFixuAYYtxClnPaI9bmrPTQLp2yrpodzcW2Z1bTFinvAyFv5EzM6NUhjT1kKaWasaUpayf17IrKauHH9mLaIrb0QXvv9E4xo9NPSad0NBhrzpYn9eya6hmcdYCxxmzdIras20v2ZuM7QRMznihNxjL8sUetqWrp+vXsYVZ6t24D+FvQcqoXLHgvZWJGNSwVPsYXt4yVXyVrdQrtwinrc7bHbI2IvEaKtC5r2r72Ef13+2dixiYP3239sqaWdVFr242XrWen4x9r5Ii1TkWv5ZNnS9rRP3tpPYiYkVJqItIu7ihj+aWELctJzi6bsjFnW8pyRKx5zWtal+1rTbkLV6llLxQ0MeNcu+wjL3mL2LJVtXuUs9NiliPWyGtetxeseVnb1ZtlmeOLPTQxI6WHlYlHbSs521NWsjaWs+uFLKVhNL8UszXHlrLtx0fQ9gVWW9JeWwYiZpyfZ5baBSA1akspaNszl5486679sY9/5Ig9ZTnn/+a8pJTWnFNdnd8u208p/bCPJmZ0KSvLE2uF6iNWklbG9fecXTBkKXUnwOyjjHnrl+Wc173RWJrG2/DiUMtSSj8qaGLGuWacccvVY86WS8+dRfu7TJnlyKVn1qx4zLF9mkSO10YYCzGj1ZwPXU42OybPdv8szfRZum7vrMlZXS68lbI9ZUtKsW9+5H1xvsVWfEddMdylrAyB/LP3z4aYXS9lfZuxLWb7MrNIKZYStD1n7508LWYMjqzkLmX7vNk/y7Is/xzz1N3lrq7mWAJSF1mVfllKKVIskZcuZ2/+RWLGEzU4TdTaVuOSl2ao8R4xW5t+WSyxRAlZyVnzxleIGeeONmM6UlaTVtZeHSm7YM4ei9mRsmVMWX7smP28uIkZD5o1xKldpr8cw425Tp9dt3P2MMwYZV56i16TsZRSSrnpm/XXBPkrMeNROX26XvSjjCwuechZX84ulbPHAZCIXE/hjCUiN12zUs2G6xS4Fgjvy93jY0y/FLF+zdXVG43NGTDlJ1vI2iZjSnlfPJz0zXhfH5Q6aVavGVfOnV5KF609vfPSMSvXi9tiFnkrYyVk+2fIsMzqpVFHMeNUXddRPsnzVsvaKbS6grhZnXWRrA0X9K6XJcg552WvZjkvEWu9JGxKqRnSf210X8w4HBUpl1nqYf3wshyjjc1C/eudC9MuATliVn64VbOtnpUrnuQP6pmYMahDa/tNt0o/N/Nnx3ln6XI52/8rs+13uVTcsi7bz46hj5TLapjyTtcC4WO5fdStVOyTtt+Wa4JcLWddynLkiFjTsi5bo3HrnNUu6bF5b65oFDOeKBcp2O6a/lmbtqaaXWvx8JiylLZL62zVrE5Lp7LdtdX44kW9CzGjl4cHR9Lagf324SUX6Tf1LCLHuudsq2ZtyvZLd/Xb9WpVEzOeKX2zfHymty2pQ3/O2TXUyy5u19BZtpyNm1U3+UNixlPNVNgWtHSaskvGbNScKn6sMqvN5ody9iIx40xpKu53JWTlu1vHrGxgCVrXen6PmHFiWA2yH3D9ReXuGrPUhyylL6wlEzP+qL3Ox7H6Kg0pu9wISD8Gksuj0mQsIUsnW5WTNY18Sx5ua5elWRVRS8ClRxq3S3aXsO05G6cNU0opv7jE6iBmnMrd4dWOhbSrIppR7yvNTo+1bH8mcnTV7KGeuUgBX1cq2X6YHYddU81O+mZXyFlfy/abyGM1qzk7JhPfK2fLt/7h3FVXy1JJXG1Nlg/+dszgX68d4ajlOafmA2Pc5M+IGU/l7nO8FqySrVw/8q/XNetrby7Vutz1ndH6hrdpNPLcyVFWWo3NxFozr3SVpDUXw98vPLC1GaMdzUmp2ZjP5qdVM/5kKGdNpJpFSE1Ru0bKxlq2P5ePLWkedW94k5jxF+2avly/z+3Phnp2AU3O6jb1hezY5i8sahQzfqIehI85ukXf7PQVQ+/sA/pmvOTksLtF32wu1YwfGFtU40/v0Dc7edHXypmY8YInx9zl+2YPP/7COWYtMeMdzRjcHfpmdRv+XN/epm/GG7oRx76WXSNoMfTNju7ZlE1QzXhPPm7bvtk1UtYV32Yb5tQyMeNNTcoep5quof9gqBs0YyvEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjGD6cQMphMzmE7MYDoxg+nEDKYTM5hOzGA6MYPpxAymEzOYTsxgOjHjA3F2dxWx/f7/+MeLGZ+I/SaGg/bfLmrK+m2Y9M//z5w/ll8h8v61f5MiXyVnNWXx/1HSVDPetpWB7Vhty8MVNClrt2ESMeMFcfLobmYUNjHjh6Lves388P/f6vtqX9lKMeNHoru/VPvwNV1f7VvEjJ8pn+xHzm6p76t9q2SLGX8Rw+OIiCFtcbkxkH6csTxzOugY2wZ/xIA+f9IEaP++fxQ5pUg5cuTIKdIVB/Qjtvq1PWon0x5f/SbVjOeOD/Z66DV9s62qxTFYsB+uV1CjtX2K1Edt36zblM+aj6oZT0WO/qP9vG92n2qW+r7Zw+vfJmb8UD0ux75ZTlvKtpDl/+E/8eeGNSBHs7Hrm/XDqx8QM56JIzHjCEeUkYGcblTN9pZvdBksNx/RN+PU2aFValk9FKOWtnv0zUqdjqgB7D5e3s6basa56Fp/7ZxZKodijkhbQ/Ee1Sw1HyFHBW8HV9/dODHjL8q00VHL9g/+iBypfOXIkVK+SshS29dMdYNSqmWt1uekb8YctZTVocauQRg1blfK1aCLWZSe2fEZcmxzN3n41gaLGWe2nHXtpXgoZhEXTtkQs+g2LpXnSz8tfZQyMeO5Om+WUlvNovE/+7d9bohZLWZx5K7ZZvNmzFHOij6Wewy1rHzsl4mzcdzkX60bAolOs51185s3vvHpImb0jm7ZNie2t5WaeK25HpBrzktcfnq6bs1wfyRqLGav5kzMOLWH7DgI0/CRHxFrWlJaa8ouPKDfpetJLdsblse7XyBmtI5W31akmgVHbb5yRMS6xLqkVFN2+Wq2BW3dU9bWsmPE9T1ixiBSStsiqpwe+y0Ra17zmlJKy5qWNed8pOxCM2dtzraNXCNiXdc11lgj1n7ssZuZf52YceiuBlcepbaSrTnnNa85Yk1pWVPOOee0/Uo5pYsUsyFmtdG4tjlbu5TttS36P+KHxIxTW99sz1gJ2ppzrWbLmvZidvmY1bGd7faoZ0eftJmlL+9/payJGcVRwY7vop28XXNpM5ac5VvFLNZY17XmrI6E9Ov2mz/gx8SMZ2qrsRn4WLc247qsKeXUtRlLyK4QtGOR5r6UqonZkLMyHFKmqpuxx58TM57Yatn+Yb7m7SuvOa8pp1i2r2umrMlZipqzdcjZukYdCtmbzg9Lrn4YODHjqW2osR3/iDWvOZUmYizRthkvlLKaj4dqVnK2rms3k5aOdubx9h9XNTHjmcgRkaMOf6x5azKmvZ7F0laza6WsDUxfzY5B/bW2HI9Fj6d/xN+JGY/q1FmKqCurtpztTy/7r1rNrpayIWdNNdtK2R62o5aVwUV9M76gjjfuk841Yse8dEptym4Us5Ky+O/j7FkMJ5C/RMwYlVH9IWdbW3H/0Z6yJd0rZmM16wYc65lorxMzWt3cWZ+zWNNezKKmLHK6U8xS22qMcRDkg7PrxIwTe+dsHx5YU8qxphxr/XmTssvNTB+OPleduNiHPsp4Y2w3+4ubjtprxIzHkzHrJQpyHYXbVjFuP41YIkfO65XbjKlLWaoxKykrbcfHahav99DEjDSevrL9/xNpW25f1tXWH8aSInKOnPNaU1ZDdpWktRdfKDlL3aD+Wpfs1wGQOK7x9RoxI6XHgtbVszI8kFJKsaTYG4z7MGMTsutUtMeUpXo6zNoUtH0+rS64qstHXouamFEdV/OIchZ03j7Dy/ll+9qPvZjtKbteyFL6azmLZjFInTyLN9qLKSUxYxf1RM79egP1bLMcsS7l/LJmjHFPWb5ixqr9MgVHztZjlrqualzrysZaxx4XXv2RmLGJ1F6Z6rgCY94HG7c1+TnlMWXDOOM1shbto70Hug+DrE0PLfohkOOa+mm8+zMxo9jbjPUCOvuzKUVal1iXdQtZHlJ24Vo2nAxztBuPtmO5q6MfQw37WRtSzHii/8BflzWnnHKOvDQds3Y4/5qaczvrSaxN0AYWW/E19eqm27frktZlzcuaU845x9Jm7LJz05vjDJcjZV3SjovvpP1lDyv1/07MeOa46uK6pHVJ65atMsqYasxKxi4YteFaBV09a2621/Z9s1eIGaPjYt31f3zZQlZi1rYXuzbj5XIW6bSepbVWtL7JWE6GMW/Gx5pLx9Wc5WW7q1FLJzG7pC5mXcPxJGTlDS8SMzr7/Nl2ddOmnm3V7Khot0nZ33KW2pDVM6hfmDNLScwY7esb92t75/Z/CjyG8e+Usuc5a+9Orzz847p29T3EFzUzzFt6yiBHM0k2dMvukLJnOUt9xKKsFnk9ZaoZp0pNSyntCxvL3HXOcdGLxj3zOA6SSraahx/9FdfeQXxXt2BqX0aV61fz8LiI3HVHGYs+ZUfQmq9URvKbVY0vDYWoZhzKeWcP/bPmJdtof7pNLUvppJ4NYevbisd7fuz6u4ivetI/a391dezqtSylh3r2kLQ6wBj9635ONeOZrn/WPt/8V2al0l0+Zqdtx1LKjmr2Zhft0ruHCU77Z+2Dh+bi9Y+hZtq5SVlT1brpsm7i7Geuv4v4tr7dWL7y8P0YssseSU1qym0d6ehLWVvPxIwPPfTPxtH7cfDj2kfRwxlkx3hiF7azF/+Qvhl/sv+37cNBVS4asq16fLvH8u/RhyeOsnWMiHzkn8/ezi0N/bN0r+H7E2PMHnN2+sIfEzPOtEHL7YNbpuyx3fjYDYuTl/+YmHFq6HbdO2UPRWoYvo8PUyZmnHsY3bjXsMcgxm+GkH3qVjuLLzrN2fBd9+DSHnI2NBU/K2Y32UnMkIfHp5PRdzmAxrHU7skPQ3afvcQEY87S4/Fyn+NnjM+TJuN7LUh9M546idldg/YsZF+aErzHTmKO05w9+f4+/tREtHSYSX5H2P4WqI/K2n12E9OcHCT3Pm5OIvVZ43H56N38Vpdfxfgn39+4e38q8R1nR8l9j5yzlH2YvPvuLL7t9x0rXytrv2/X8bbfdrB8r/GobwbT/bYPKD7xu46WWw/zAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwr/V/gpDVgLu1LHMAAAAASUVORK5CYII=\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1330\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1328\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1342\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1340\" />\n    </clipPath>\n    <clipPath\n       id=\"clipPath1348\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M1366.0 0.0C1366.0 0.0 0.0 0.0 0.0 0.0C0.0 0.0 0.0 768.0 0.0 768.0C0.0 768.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 1366.0 511.0 1366.0 511.0C1366.0 511.0 1124.0 511.0 1124.0 511.0C1124.0 511.0 1124.0 254.0 1124.0 254.0C1124.0 254.0 1366.0 254.0 1366.0 254.0C1366.0 254.0 1366.0 0.0 1366.0 0.0\"\n         id=\"path1346\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n    <mask\n       id=\"mask1352\"\n       height=\"1\"\n       width=\"1\"\n       y=\"0\"\n       x=\"0\"\n       maskUnits=\"userSpaceOnUse\">\n      <image\n         id=\"image1354\"\n         xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAJeCAAAAAAPIijiAAAAAXNCSVQI5gpbmQAAFFRJREFUeJzt3e16ozgSBlCJ3vu/41HtDyEhsJO1nfQOoHO6OyEfngl+XC+FJEhKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd5H/7R8A/iXnf+3H3/9fnP9JgL/iCi/9v58Ay1//PwCndYUYhN93jVf+X28BrvE0wPvmeG3/MCLmeJKY0Cwv7Z8lgDEAmNgsMclsnr2yr/9qf3a4/1ELcP2nBPbyF9v3E19sv+HeTxAT+rb+r/16fyjynyfAfz79WeByrl3+KeXfnxa8+lMCe8cGIH/1xSuK4wc/bgGu/ozAKB/eDy/wKw8NPK/zOG58EAFXeybgG0/r/+GT6Wqv+2f1vzv+f54A13oi4FuHWs9PN58+4oy+mvOLp5tfPeJ7Z95/eM9Y/3m3ccMA6FtjL/B2Apx5/+FVD+193mr+EAVfP/Bsvg2AutE3P42AM+8/vOhJ/R8S4G4B0Ot/lwhfPepr1gFwL2ul55oB24dfZsBZIyAef7JIKR/qO3KKuj7g+JXXnHXv4Q15fJfHBBj/DsMBTx58Msdy7if+sR3+Y/fxcUTwJefceXhLP81vhd7Lv787dgDXeOXHw0db0W9/xmB4fNS3rvE0wLeOY3354c9jBFzhpf9s5V/08h+bgG3j4XHfMgbAjeTn5f8sAa5Q/7tKjlzP+PP6JsavrB+8Pw5wjacBvjNM/G31f3jzrAs4+6t/v+p3PPOvx//6vp8PfDIOcPanAP6X7ZC+q/7hfQ+By/UAu8W+45l/rfz27jEBXo2AKzwJ8I3hcJ739f/w7mo9wHHd/0P5R4qIcSzg7QQwBsCt9PrPKbc3WwhcKwG+rv+IHBEpxzgQ8NE6AAHAPbTZvlb/7e22OS4OusRcwJMAaPXf3q7fkCPlqH/eHAgUANxBWwOQt/o/SHkYB7jGcoDnAbDWflNSarMD67e/dd8gAcANjNMAu/pf9hGQ8qUD4Fj+JaW01ARIvQlIb80GCgDuoZd/2lX/0kOgDQRsSwO3R57Q4+F/G/sra/kvUVoCpNb7vzkUIAC4vl7VQ/n36l/Wj7ZxgKH+z1n8zTap3xf/RaQoOcqaBEuUlgCptgDGAJhTLe024rf08l8jIC/DMMDQAZw3AoYeYKv/FCVyjYAUZSlpKSmnuk7wk5kAAcAd9Pn/ul2rfslLXpZDEzDW/3mLv2nXANYEiEgROaLkEilSWcoSZSlLSf3c/90IEADcxnj+n/Na+z0Blj4QuDUAZ0+Afg6wLf+JHJEjl1xSihRl3J/3618AcHGPk/prw7/UCGgJ0OYD0oUSYF//6/j/UiKXnEtKKVLJyxoBbQSwjwO8lgUCgKvKjx8OC4Bq7Y8RkJe0NQEXGAbcjQGsh/9UInLU8q9vS851/m98SE2AV9YDCAAuajzujzcE2U0D9BDoPUDaBgIP/52T2dd/S4ClRI66gyWlaLsUObUeoK4FeHU9gADg4oZFPa3A1x5gUCNgdxJw8gQ41n9bAJQjl8M3lZzrnQFTT4GX1wMIAK5vPw4wVH9elmX5s4xjgfthwKF1OJfhRr/bEGCpAVBjLKUUS7R+p98UxEIgplRLeaeGwJ+hCXjSAZyx+qvhNqBrB7CUiFzW6k9tenDdq8jDo14mALiD8XZAwyzgsix/WgLkZVlXA42XBZ43AXoPMHQAS4mcy7rkOaWIJfLaBbgcmMnl7WLgZRknAraRgHU10FD/470BziR2/9YxwFyP/+vlPxHLmADbbryTBAKAW9hdD9wWAiw9Av6sAVCnAttFgeet/0MC1FWAJZfczwAiloi8rMMAdfi/P/j1bkAAcAP9Vj+7xYDLcB6wLH/GeYAn9wY6m4fLAOsdP9YVgCki8hLRdyi2ccB3CADuYLgd6NYA5GU3DvAn72cCz13/xzOAiIiSyzoBsH4m15OAPgjw/hXBAoC72GYC9zMB22xA3i0GulAA1Hov9QqAlFLUQ3/vAGoPkN6eBBQAXN1hDUC/5LePAQ6zgdsNgtLpzwHGM4C1ARjrf/3MtrDh9bU/OwKA6zvc3mcbB9z3AMty+Q5gXe5XPxpGNHI6DAO+SgBwdbsGIO2mAg49wOU7gLROAUZEWXoGrPtrHQDzym19XB6nAoYeYHdN8LVmAfp1AClFiqWu/VtK/bftTEqpblgHwJzythgopf7LQdqkwC4BLhMAketdgGoAlNyX/y9luP9x3dl2DvDGvQEFADezvzdgXpcFLm1l0OUCoI75164/pRRLLMMIQEoptV979sk5gADgNvr9/tYrgtudQbZzgGEt0HUCIHL7VWAl57b2b+3+U0uB2vO0WwO+Ph4oALid9WKZPNruDLodOs8cAZHqJf7t131FSmlJ/dq/B5/uhADgTobx/X6j4J4By65iTl3/fV5/dzqfcx8CaAsfh0dYB8CsjjW8FnjedwH9FwScv/53d/XJkdJ6F8Bx0C9vd0Lv3/Y2AcAdbDf36Pf6OR7/9xtnr/+eAO0Wf0tZA2CJvvrv4b4mfjEIk1pP6/t2vzdA6kfL48Hz5AFwEHm7Beh4fpOG/UnWATC18aR4mxNI+zBIlzgFSJHbr/3OdUww5ej3PG07Nuxw/ugkQABwJ/v67yuDhxuB5fb7w06eAGv9t82UUuQcaz8z7NuQAAYBmdrubDiNR8l8OP5fYBowt3+R22/+bFc6Dkf/w0yAy4GZ2bNKbsNkfUzwGmMAQ/3XBFjv97M1/k931iAgkxvbgKH8h25g/MJ5I2BdCdQSIK1jgOPg/7CTH1t+42eFc9kdIFu1HEbN+3rBf/Hn/MZhsG9sZOr7/o2H3X2PDoC72Rrk4f3WPF++A2gpsN/LD/dCB8Dt5MMHfYr82BicuP63Et9N8R9+/ucfvEMAcFfDQf60jf4ndvcz+ul+CQBuqh8wf3aSfDrbGMChJfiIAOC2fqtITucXJzEFAPf1RZs8XjdwXb8zfiEAmMjQD5x8DHA3CvgXxzBMAzKJ3cTgWP/njIA43BEgRxqv+vstOgBmkQ/jAaeu/22gPz80Lr9JADCPp+sATiw/e/e7BABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTADAxAQATEwAwMQEAExMAMDEBABMTABwb5FStK1tu35h+OiU4vFdHL/4QwKA+4qxauJZBcVpQyDaDxj70u+f/J2f/T8//i/AucVQK5FT5HWj/TtpAowtyroLEduO/NL/RAfAnfXD51A22+apzwL6QT5S//nrF2KXaT8jALidY2EcxwC2I+mJE2B//O/vvvhpP94JpwDcTbQDZ6+YNgaQU1rPANK6FencpwDfjAH0L/+oHdABcENPeoB42NidHJxOHKr+MAaw/97PWwAdAPfS6nt/6GxjAFsPUI//6ewdwFdjAG3P+vaHBAD3dTyHjtx7/rqVUnt3OsPARQytSjz7ph8QANxHPcDXzbUFGEb+UuSIlHvR1K0LdABRm/9Y37adi8cG4P1dEQDc2DYLWIslR46UakysW6fuAFqJj7W/htrjif9HQSYAuJPtXHk8Sq5fafVfj/zr1rk7gJoA0UYAhxToYwHRv/2THREA3E4dLW+zZVvvXA+dh/o/a/mnbcYvtr8xbPeab/v7CQHAbaxT/OP8eauaNQF+MmH2/7cLgHE31n3pCx7aN3+wcwKAezoUSKueywdA35HY9jFZBwAp7S7t2QpkHEO/QQCktZd53J0Pdk0AcAt1br9u9TJJh0NnWcqSylK/K/d/57SNAaaIFCWi7E4DWgi03V0f9eZ4gADgDrbVfduof6uTskREySWXpSZAzjlfYBRwmAVIERElSokoUbYkWGcIdg95rxEQANzAcIVPfTscJyNKzrnXf8lLSpHH+j9jDxBpOAVIvQMo+/qPod35bCZAAHAnkVvltB6gLD0Ghg4g8tlnAg8JMHQA++rv3zwe+V/fIwHAzRzP/GsClNQ7gHoGUA/87d/5PAZAlLL+jX0O/GRkUwBwdb3/jxy5z5GPp/8555RLSjnltNb/uau/2p0CtAAoUUopu24gtV5gmBN8NREEANfXIiBy5PGkOKLkZR0FKGkLgFRbgJMnwDgNMARAS4C1FegrglwLwIz6bT7rB31grDcBuQ4BptQDIOWcz179VexagFb7qxjrv3UL4wNfIQC4hXZpb73SL3bKesCPJZY4nAKc3XgKMCRAHPVbnrw5GyAAuIPhLj/rApmS29F/rf7Y6n84Azi73QVN+w5gDYKtExhbgFcJAG5gNwgwzP+3AcD15j9L5OUwBHB2w0qgVNYE+GdrAnbDAJ9cECwAuJNa/+vxMpecS861+CNiiVxbgHSpAEh9ZmPsAGJ3/E8f1r8A4B7WMYCUok0E1ARIawCklNKu/q+RAOvY3poA+xagxHEsIL1/j2MBwH1EXucBavHXCwDWS4QiIueyrNMA6RLTAMerAbYe4J9Syu76oNi+2bUAzCpSHhIg5VJLfa2RXM8ILtgB7IYBo/zTuoBhDLCvC36vBxAA3EoMCRBrBKQ1ArYZgMt1AGsClBhPAuqlQftpwPRmDyAAuLhtJfD6tpZKjpJSLvVzsfQASNc5A3h2T4DjQGBNhfpdEUMT8GIGCAAuan8JQF8PGLleA1hS6rcIWSKWiLKkrQO4RP0fEiDGHuBhRWD0R/T6fyEEBABXVV/eQwzUjyOlfg3wP+sRcYnI0QYAjvV/zhjY6nkcBzz0AMMEwO7w/3oPIAC4tjryX5uAlLaJs94BxLoEcJ0BvEj9P0uAxx4gthTYHhNv1L8A4D6GYbAoS5R+ChA5co5W/vsZgLPW/0MC7E8CHi8Kjo/uCyAAuIOhBaijADUClpL6NUB1CGA4Azhz8TfbbUGeJcC2EmB37H+HAOBG6nrANmpW6iKAdg1QaZcBrpcGnLsH2B//nyfA4e6gn9z1XABwfes4QL0SIKWUcqSylLyUnMZrALf6P3fxN5G+T4B1a7szqFMAJhbtVv8pUkplSTUCcq//fh+Ak4//bXYzenEYCYy+EjB9fF9AAcBd1BYgUl4PhCXnpeT1LoD7JUDXaADG0fzxsuCt8oc1AP2C4PeiQABwH5Ej5Ug5lZyXlFIqfeZvXAGUz1/5mz4W0M4B0tYEjIYTABcDMZ9tHKC+/svuwN9uBHih64Cq6O+HP2MA7H4R2vt3BRAA3MT4e8HG3/VR8n7671oBsO8AWv2PNz1svyr8kyFAAcAt1HuB5noKsI4DpJRi7AF65V+q/p8nQBqO/mn7m94fCRQA3MH6S37XU4C1AVhjod4MPG0dwKXqP6U0rAceAmD416r/g5mAqz0TcDCM6K9H+HbF/zDyv78JyPVe9dtqgNhlQK/+7V5AMTzkf9MBcB+tD9g+0a8U2l8DfLUEGFcDDTOCKXazf5+MAVztmYCj3aR+n+k7/tl1/1d72Y+X+A7nAbs/h3sAvBgGV3sm4NH+LGAb7D8U/3bsv9rLfjvB763+YeHPR/1/ut4zAU88jAMMp/zPev+rveyfXBm0X/f3af0bA+Bm6tUA+VAC9TKh/GSZwDXsKnscDRxD4RN/fuOng3/ZYRwgPZ/vf/8AeRL7H7wFwMOp/wf7d7VeCJ4bIyAPG9e4/9dr9mcC25n/p/1/0gFwG4cr/Lb6H13u2D8aK/zxxP+z9kYAcBMPl/jm9DD4d20xbvzw3L+5xRMD6YsEOMz7X/v1vkuA/Wn/p+Mb135CYJQP2w+T/ld/ucdx89gDuBaAmR0T4PmnLuxJsf+o/o0BcCdPq/0+EfCzWn/q2k8I7H1X7Pd4rR8L/4ehcI8nBUZfxcD1X+1flfvH/cD1nxJ48ORlfZ9X+pNi//x8YPnBDwLXceklQKPf3ZH75CJsnr2u7/Faf1b/P8iEezwp8JX7vsJ/pRW479MDKaX7vsR/51TAGABM7K7xCM09X+O3GdQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgPP7L5TvTkEo+hryAAAAAElFTkSuQmCC\"\n         preserveAspectRatio=\"none\"\n         style=\"image-rendering:optimizeSpeed\"\n         height=\"1\"\n         width=\"1\"\n         transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n    </mask>\n    <clipPath\n       id=\"clipPath1364\"\n       clipPathUnits=\"userSpaceOnUse\">\n      <path\n         d=\"M0.0 0.0C0.0 0.0 1366.0 0.0 1366.0 0.0C1366.0 0.0 1366.0 768.0 1366.0 768.0C1366.0 768.0 0.0 768.0 0.0 768.0C0.0 768.0 0.0 0.0 0.0 0.0\"\n         id=\"path1362\"\n         style=\"clip-rule:evenodd\" />\n    </clipPath>\n  </defs>\n  <rect\n     class=\"cls-1\"\n     width=\"193.13\"\n     height=\"193.13\"\n     rx=\"16.92\"\n     id=\"rect4522\"\n     x=\"0\"\n     y=\"0\"\n     style=\"fill:#2a2e3c\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"27.82\"\n     y=\"103.96\"\n     width=\"28.16\"\n     height=\"61.34\"\n     rx=\"14.08\"\n     id=\"rect4524\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"64.260002\"\n     y=\"49.259998\"\n     width=\"28.16\"\n     height=\"81.010002\"\n     rx=\"14.08\"\n     id=\"rect4526\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"100.71\"\n     y=\"76.190002\"\n     width=\"28.16\"\n     height=\"65.349998\"\n     rx=\"14.08\"\n     id=\"rect4528\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"137.14999\"\n     y=\"27.82\"\n     width=\"28.16\"\n     height=\"83.019997\"\n     rx=\"14.08\"\n     id=\"rect4530\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4532\"\n     d=\"M27.82 51.8C26.664096071 51.8000131056 25.7255043043 50.8658908235 25.72 49.71C25.72 49.71 25.72 27.83 25.72 27.83C25.7255043043 26.6741091765 26.664096071 25.7399868944 27.82 25.74C27.82 25.74 49.69 25.74 49.69 25.74C50.4730192139 25.6858698318 51.2208673712 26.0729152703 51.6288445783 26.7434402609C52.0368217854 27.4139652515 52.0368217854 28.2560347485 51.6288445783 28.9265597391C51.2208673712 29.5970847297 50.4730192139 29.9841301682 49.69 29.93C49.69 29.93 29.91 29.93 29.91 29.93C29.91 29.93 29.91 49.71 29.91 49.71C29.9045272205 50.8620006127 28.9720006127 51.7945272205 27.82 51.8C27.82 51.8 27.82 51.8 27.82 51.8\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4534\"\n     d=\"M165.31 167.4C165.31 167.4 143.44 167.4 143.44 167.4C142.656980786 167.454130168 141.909132629 167.06708473 141.501155422 166.396559739C141.093178215 165.726034749 141.093178215 164.883965251 141.501155422 164.213440261C141.909132629 163.54291527 142.656980786 163.155869832 143.44 163.21C143.44 163.21 163.22 163.21 163.22 163.21C163.22 163.21 163.22 143.43 163.22 143.43C163.165869832 142.646980786 163.55291527 141.899132629 164.223440261 141.491155422C164.893965251 141.083178215 165.736034749 141.083178215 166.406559739 141.491155422C167.07708473 141.899132629 167.464130168 142.646980786 167.41 143.43C167.41 143.43 167.41 165.3 167.41 165.3C167.41 165.856954629 167.188750635 166.391097846 166.79492424 166.78492424C166.401097846 167.178750635 165.866954629 167.4 165.31 167.4C165.31 167.4 165.31 167.4 165.31 167.4\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4536\"\n     d=\"M155.15 64.0C155.15 64.0 147.31 64.0 147.31 64.0C146.93787972 63.9973131057 146.580220974 64.143949709 146.317085341 64.4070853413C146.053949709 64.6702209736 145.907313106 65.0278797203 145.91 65.4C145.91 65.4 145.91 73.24 145.91 73.24C145.907270784 73.6112212176 146.054219808 73.9678864677 146.317659111 74.2294440613C146.581098413 74.4910016548 146.938807884 74.6353901955 147.31 74.63C147.31 74.63 148.9 74.63 148.9 74.63C147.9 86.63 143.31 96.32 135.77 102.17C130.043903731 106.80871558 122.488918049 108.52659741 115.32 106.82C109.2 105.26 105.86 101.88 102.32 98.31C97.12 93.07 91.75 87.67 78.39 87.67C60.86 87.67 42.13 100.74 40.05 129.29C40.05 129.29 40.05 129.29 40.05 129.29C40.05 129.29 38.0 129.29 38.0 129.29C37.6287787824 129.287270784 37.2721135323 129.434219808 37.0105559387 129.697659111C36.7489983452 129.961098413 36.6046098045 130.318807884 36.61 130.69C36.61 130.69 36.61 138.52 36.61 138.52C36.5820279125 138.904739539 36.7163676113 139.283624516 36.9804540354 139.564810061C37.2445404596 139.845995606 37.6142637847 140.003810827 38.0 140.0C38.0 140.0 45.84 140.0 45.84 140.0C46.2121202797 140.002686894 46.5697790264 139.856050291 46.8329146587 139.592914659C47.096050291 139.329779026 47.2426868943 138.97212028 47.24 138.6C47.24 138.6 47.24 130.77 47.24 130.77C47.2426868943 130.39787972 47.096050291 130.040220974 46.8329146587 129.777085341C46.5697790264 129.513949709 46.2121202797 129.367313106 45.84 129.37C45.84 129.37 44.21 129.37 44.21 129.37C44.21 129.37 44.21 129.37 44.21 129.37C46.16 103.56 62.32 91.92 78.35 91.92C89.96 91.92 94.51 96.5 99.35 101.34C103.15 105.18 107.09 109.12 114.35 110.97C122.773397066 113.005672319 131.664472576 111.010169087 138.41 105.57C146.96 98.91 152.13 88.08 153.17 74.71C153.17 74.71 155.22 74.71 155.22 74.71C155.590293716 74.7154463837 155.947018936 74.570749973 156.208884455 74.3088844546C156.470749973 74.0470189363 156.615446384 73.6902937162 156.61 73.32C156.61 73.32 156.61 65.41 156.61 65.41C156.619036733 65.0245279784 156.46639341 64.6528545046 156.189040818 64.3850002882C155.911688225 64.1171460719 155.534923328 63.9775417453 155.15 64.0C155.15 64.0 155.15 64.0 155.15 64.0\"\n     class=\"cls-4\" />\n  <path\n     style=\"fill:#ffffff\"\n     id=\"path4538\"\n     d=\"M153.26 71.88C153.26 72.82 153.2 73.73 153.1 74.64C152.1 88.01 146.89 98.84 138.34 105.5C131.594472576 110.940169087 122.703397066 112.935672319 114.28 110.9C107.06 109.05 103.12 105.11 99.28 101.27C94.47 96.43 89.92 91.85 78.28 91.85C62.28 91.85 46.09 103.49 44.14 129.3C44.07 130.21 44.01 131.16 44.01 132.1C44.01 132.1 39.81 132.1 39.81 132.1C39.81 131.16 39.88 130.21 39.94 129.3C42.02 100.75 60.75 87.68 78.28 87.68C91.64 87.68 97.01 93.08 102.21 98.32C105.78 101.89 109.13 105.32 115.21 106.83C122.378918049 108.53659741 129.933903731 106.81871558 135.66 102.18C143.2 96.33 147.79 86.64 148.79 74.64C148.89 73.73 148.92 72.79 148.96 71.88C148.96 71.88 153.26 71.88 153.26 71.88\"\n     class=\"cls-4\" />\n  <rect\n     class=\"cls-4\"\n     x=\"145.91\"\n     y=\"64.010002\"\n     width=\"10.63\"\n     height=\"10.63\"\n     rx=\"1.4\"\n     id=\"rect4540\"\n     style=\"fill:#ffffff\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-3\"\n     x=\"148.67999\"\n     y=\"66.809998\"\n     width=\"5.0700002\"\n     height=\"5.0700002\"\n     id=\"rect4542\"\n     style=\"fill:#f6511d\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-4\"\n     x=\"36.59\"\n     y=\"129.32001\"\n     width=\"10.63\"\n     height=\"10.63\"\n     rx=\"1.4\"\n     id=\"rect4544\"\n     style=\"fill:#ffffff\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <rect\n     class=\"cls-2\"\n     x=\"39.349998\"\n     y=\"132.11\"\n     width=\"5.0700002\"\n     height=\"5.0700002\"\n     id=\"rect4546\"\n     style=\"fill:#c1d301\"\n     transform=\"matrix(1.000000,0.000000,0.000000,1.000000,0.000000,0.000000)\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4548\"\n     d=\"M338.53 130.92C338.53 130.92 267.39 130.92 267.39 130.92C267.39 130.92 254.78 155.81 254.78 155.81C254.78 155.81 226.0 155.81 226.0 155.81C226.0 155.81 288.41 38.1 288.41 38.1C288.41 38.1 317.84 38.1 317.84 38.1C317.84 38.1 380.23 155.81 380.23 155.81C380.23 155.81 351.14 155.81 351.14 155.81C351.14 155.81 338.53 130.92 338.53 130.92M327.26 109.06C327.26 109.06 302.87 61.13 302.87 61.13C302.87 61.13 278.49 109.06 278.49 109.06C278.49 109.06 327.26 109.06 327.26 109.06\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4550\"\n     d=\"M503.16 117.13C503.16 117.13 527.71 129.41 527.71 129.41C516.61 146.06 493.91 159.51 463.13 159.51C418.91 159.51 390.13 136.14 390.13 96.95C390.13 57.76 418.91 34.4 464.31 34.4C493.91 34.4 516.61 48.02 527.37 64.33C527.37 64.33 502.65 76.61 502.65 76.61C494.25 63.49 481.46 57.61 463.98 57.61C436.06 57.61 417.56 71.07 417.56 96.96C417.56 122.85 436.06 136.32 463.98 136.32C481.46 136.31 494.41 130.59 503.16 117.13C503.16 117.13 503.16 117.13 503.16 117.13\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4552\"\n     d=\"M677.54 133.28C677.54 133.28 677.54 155.81 677.54 155.81C677.54 155.81 556.29 155.81 556.29 155.81C556.29 155.81 556.29 38.1 556.29 38.1C556.29 38.1 675.86 38.1 675.86 38.1C675.86 38.1 675.86 60.63 675.86 60.63C675.86 60.63 583.0 60.63 583.0 60.63C583.0 60.63 583.0 84.85 583.0 84.85C583.0 84.85 660.53 84.85 660.53 84.85C660.53 84.85 660.53 107.38 660.53 107.38C660.53 107.38 583.0 107.38 583.0 107.38C583.0 107.38 583.0 133.28 583.0 133.28C583.0 133.28 677.54 133.28 677.54 133.28\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4554\"\n     d=\"M702.26 143.87C702.26 135.97 708.81 129.75 718.26 129.75C727.51 129.75 734.07 135.97 734.07 143.87C734.07 151.94 727.51 157.87 718.26 157.87C708.81 157.83 702.26 151.94 702.26 143.87C702.26 143.87 702.26 143.87 702.26 143.87\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4556\"\n     d=\"M892.28 120.16C892.28 143.37 870.28 159.51 828.54 159.51C798.78 159.51 774.54 151.1 756.54 135.8C756.54 135.8 772.0 117.47 772.0 117.47C786.5 130.76 805.17 137.0 829.22 137.0C853.1 137.0 865.22 132.46 865.22 122.7C865.22 112.94 853.1 110.24 826.0 107.88C792.39 105.0 761.11 97.63 761.11 72.4C761.11 47.85 787.34 34.4 823.67 34.4C849.4 34.4 871.6 40.79 886.56 52.4C886.56 52.4 871.76 71.07 871.76 71.07C858.82 61.14 842.84 57.07 823.67 56.94C807.67 56.77 788.18 59.63 788.18 70.39C788.18 80.48 805.0 81.49 828.38 83.39C865.88 86.36 892.28 94.26 892.28 120.16C892.28 120.16 892.28 120.16 892.28 120.16\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4558\"\n     d=\"M931.29 38.1C931.29 38.1 975.69 129.1 975.69 129.1C975.69 129.1 1019.91 38.1 1019.91 38.1C1019.91 38.1 1049.0 38.1 1049.0 38.1C1049.0 38.1 989.64 155.81 989.64 155.81C989.64 155.81 961.22 155.81 961.22 155.81C961.22 155.81 901.86 38.1 901.86 38.1C901.86 38.1 931.29 38.1 931.29 38.1\"\n     class=\"cls-5\" />\n  <path\n     style=\"fill:#595e71\"\n     id=\"path4560\"\n     d=\"M1203.0 131.93C1191.23 147.93 1168.0 159.51 1136.07 159.51C1088.82 159.51 1060.07 136.31 1060.07 96.95C1060.07 57.59 1088.83 34.4 1136.07 34.4C1165.0 34.4 1185.51 45.33 1197.28 56.76C1197.28 56.76 1176.28 72.07 1176.28 72.07C1166.02 61.98 1154.08 57.27 1136.28 57.27C1105.5 57.27 1087.51 70.72 1087.51 96.95C1087.51 123.18 1106.01 136.64 1137.29 136.64C1154.95 136.64 1169.41 132.77 1177.82 122.64C1177.82 122.64 1177.82 111.25 1177.82 111.25C1177.82 111.25 1133.42 111.25 1133.42 111.25C1133.42 111.25 1133.42 89.39 1133.42 89.39C1133.42 89.39 1203.0 89.39 1203.0 89.39C1203.0 89.39 1203.0 131.93 1203.0 131.93\"\n     class=\"cls-5\" />\n  <g\n     style=\"fill:none;fill-rule:evenodd\"\n     id=\"g1841\">\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 161.90062,290.84743 c 0.0114,26.6997 -17.63141,50.19067 -43.27621,57.62158 -10.93469,3.20124 -22.557844,3.20124 -33.492541,0 -29.733898,-8.6388 -48.016988,-38.47785 -42.211881,-68.89223 5.805106,-30.41437 33.793122,-51.4218 64.618552,-48.50181 30.82543,2.92 54.37109,28.80904 54.36208,59.77246 0,0 0,0 0,0\"\n       id=\"Shape-7\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 101.87814,230.82495 c -1.51857,0 -3.001123,0.11704 -4.501685,0.22808 28.940535,2.15765 52.184675,24.7262 55.194765,53.59053 3.01008,28.86433 -15.07751,55.74311 -42.95018,63.82545 -3.99179,1.17113 -8.09606,1.91754 -12.244585,2.22683 1.500562,0.11105 3.001125,0.17407 4.501685,0.17407 5.66816,0.005 11.30766,-0.80416 16.74627,-2.4009 28.66452,-8.36043 46.82517,-36.5195 42.61727,-66.08036 -4.2079,-29.56086 -29.5047,-51.53389 -59.36354,-51.5637 0,0 0,0 0,0\"\n       id=\"path866\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 115.68331,371.87778 c 0,0 -27.61034,0 -27.61034,0 -1.782394,0.002 -3.473654,-0.78754 -4.615858,-2.15586 -1.1422,-1.36832 -1.617188,-3.17351 -1.296356,-4.9268 0,0 0.900337,-4.92184 0.900337,-4.92184 0,0 2.070776,-11.40427 2.070776,-11.40427 10.934697,3.20124 22.557851,3.20124 33.492541,0 0,0 2.07078,11.40427 2.07078,11.40427 0,0 0.90034,4.92184 0.90034,4.92184 0.32083,1.75329 -0.15417,3.55848 -1.29636,4.9268 -1.14221,1.36832 -2.83346,2.15823 -4.61586,2.15586 0,0 0,0 0,0\"\n       id=\"path880\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 149.89612,389.88452 c 0,0 -96.035963,0 -96.035963,0 0,0 11.674372,-23.37875 11.674372,-23.37875 2.046241,-4.05801 6.199317,-6.62177 10.744024,-6.63249 0,0 6.78254,0 6.78254,0 0,0 -0.900337,4.92184 -0.900337,4.92184 -0.320832,1.75329 0.154168,3.55848 1.296356,4.9268 1.142204,1.36832 2.833464,2.15823 4.615858,2.15586 0,0 27.61034,0 27.61034,0 1.7824,0.002 3.47365,-0.78754 4.61586,-2.15586 1.1422,-1.36832 1.61719,-3.17351 1.29636,-4.9268 0,0 -0.90034,-4.92184 -0.90034,-4.92184 0,0 6.78254,0 6.78254,0 4.54471,0.0108 8.69778,2.57448 10.74402,6.63249 0,0 11.67437,23.37875 11.67437,23.37875\"\n       id=\"path882\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 73.157384,364.79512 c -0.320832,1.75329 0.154168,3.55848 1.296356,4.9268 1.142204,1.36832 2.833464,2.15823 4.615858,2.15586 0,0 9.003372,0 9.003372,0 -1.782394,0.002 -3.473654,-0.78754 -4.615858,-2.15586 -1.1422,-1.36832 -1.617188,-3.17351 -1.296356,-4.9268 0,0 0.900337,-4.92184 0.900337,-4.92184 0,0 -6.78254,0 -6.78254,0 -0.76134,0.008 -1.52013,0.0894 -2.265849,0.24309 0,0 -0.85532,4.67875 -0.85532,4.67875\"\n       id=\"path884\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 138.22175,366.50577 c -2.04624,-4.05801 -6.19931,-6.62177 -10.74402,-6.63249 0,0 -6.78254,0 -6.78254,0 0,0 0.045,0.24309 0.045,0.24309 3.66162,0.70514 6.7914,3.06383 8.47818,6.3894 0,0 11.67437,23.37875 11.67437,23.37875 0,0 9.00337,0 9.00337,0 0,0 -11.67437,-23.37875 -11.67437,-23.37875\"\n       id=\"path886\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 149.89612,389.88452 c 0,0 0,9.00337 0,9.00337 -0.01,3.31085 -2.6914,5.99236 -6.00224,6.00225 0,0 -84.031475,0 -84.031475,0 -3.310846,-0.01 -5.99236,-2.6914 -6.002248,-6.00225 0,0 0,-9.00337 0,-9.00337 0,0 96.035963,0 96.035963,0\"\n       id=\"path888\"\n       style=\"fill:#595e71;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 116.88376,290.84743 c -0.0213,8.27848 -6.72714,14.98418 -15.00562,15.00562 -0.91705,9e-4 -1.83191,-0.0896 -2.731022,-0.2701 -7.578115,-1.45665 -12.815904,-8.42349 -12.110262,-16.108 0.705639,-7.68451 7.12462,-13.58096 14.841284,-13.63314 0.91705,-9e-4 1.83191,0.0896 2.73102,0.2701 5.3947,0.98382 9.81769,4.84242 11.52432,10.05377 0.49437,1.5115 0.74756,3.09145 0.75028,4.68175 0,0 0,0 0,0\"\n       id=\"path890\"\n       style=\"fill:#f5f5f5;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 116.13348,286.16568 c -1.70663,-5.21135 -6.12962,-9.06995 -11.52432,-10.05377 -0.89911,-0.18052 -1.81397,-0.271 -2.73102,-0.2701 -1.53816,0.003 -3.066722,0.24243 -4.531697,0.71127 4.623697,1.42845 8.269577,5.00723 9.783667,9.60359 0.4953,1.51438 0.74851,3.09744 0.75028,4.69076 -0.015,6.54439 -4.26327,12.32673 -10.503935,14.29735 0.578823,0.1816 1.168124,0.32792 1.76466,0.43817 0.901075,0.18091 1.817965,0.27139 2.737025,0.2701 8.27848,-0.0213 14.98418,-6.72714 15.00562,-15.00562 -0.003,-1.5903 -0.25591,-3.17025 -0.75028,-4.68175 0,0 0,0 0,0\"\n       id=\"path892\"\n       style=\"fill:#dbdbdb;fill-opacity:1;fill-rule:nonzero\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#000000;fill-rule:nonzero\"\n       id=\"path894\"\n       d=\"m 81.710587,350.50377 c 0,0 -1.158434,6.36839 -1.158434,6.36839 0,0 -4.2736,0 -4.2736,0 -5.671077,0.0358 -10.847434,3.23544 -13.415024,8.2921 0,0 -11.677374,23.37876 -11.677374,23.37876 -0.01501,0.036 -0.02101,0.075 -0.03601,0.11104 -0.01501,0.036 -0.04502,0.13505 -0.07203,0.20108 -0.10687,0.28894 -0.168604,0.5926 -0.183069,0.90033 0,0.039 -0.02401,0.075 -0.02401,0.11705 0,0 0,9.00337 0,9.00337 0,4.97242 4.030948,9.00337 9.003372,9.00337 0,0 84.019472,0 84.019472,0 4.97242,0 9.00337,-4.03095 9.00337,-9.00337 0,0 0,-8.99137 0,-8.99137 0,-0.042 -0.021,-0.078 -0.024,-0.11704 -0.0144,-0.30773 -0.0762,-0.6114 -0.18307,-0.90034 -0.027,-0.066 -0.042,-0.13505 -0.072,-0.20108 -0.03,-0.066 -0.021,-0.075 -0.036,-0.11104 0,0 -11.68938,-23.39976 -11.68938,-23.39976 -2.57007,-5.05317 -7.74593,-8.24901 -13.41502,-8.2831 0,0 -4.2736,0 -4.2736,0 0,0 -1.15844,-6.36839 -1.15844,-6.36839 29.24001,-9.87611 47.02633,-39.47424 42.02205,-69.92867 -5.00428,-30.45444 -31.32675,-52.8046 -62.1896,-52.8046 -30.862848,0 -57.185324,22.35016 -62.189602,52.8046 -5.004278,30.45443 12.782046,60.05256 42.022048,69.92867 0,0 0,0 0,0 M 146.895,398.88789 c 0,1.65748 -1.34365,3.00113 -3.00112,3.00113 0,0 -84.031475,0 -84.031475,0 -1.657476,0 -3.001124,-1.34365 -3.001124,-3.00113 0,0 0,-6.00224 0,-6.00224 0,0 90.033719,0 90.033719,0 0,0 0,6.00224 0,6.00224 m -19.41727,-36.01348 c 3.40485,0.0195 6.51396,1.93818 8.05802,4.97286 0,0 9.50756,19.03613 9.50756,19.03613 0,0 -86.330336,0 -86.330336,0 0,0 9.501559,-19.02713 9.501559,-19.02713 1.543613,-3.03912 4.655412,-4.96156 8.06402,-4.98186 0,0 3.184192,0 3.184192,0 0,0 -0.252094,1.38351 -0.252094,1.38351 -0.480054,2.62844 0.232137,5.33432 1.943966,7.38585 1.711829,2.05153 4.246437,3.23675 6.918353,3.23513 0,0 27.61034,0 27.61034,0 2.67024,-3.2e-4 5.20257,-1.1859 6.91292,-3.23648 1.71036,-2.05057 2.42226,-4.75455 1.9434,-7.3815 0,0 -0.24609,-1.38651 -0.24609,-1.38651 0,0 3.18419,0 3.18419,0 m -8.83831,2.46392 c 0.15942,0.87618 -0.0785,1.77791 -0.64953,2.46135 -0.57098,0.68344 -1.41601,1.078 -2.30658,1.07697 0,0 -27.61034,0 -27.61034,0 -0.890148,-5.9e-4 -1.734103,-0.39631 -2.303846,-1.08023 -0.569745,-0.68393 -0.806486,-1.58549 -0.646259,-2.46109 0,0 2.400899,-13.18094 2.400899,-13.18094 9.44084,2.28885 19.291926,2.28885 28.732766,0 0,0 2.38289,13.18394 2.38289,13.18394 M 101.87814,233.82607 c 31.49203,0 57.02136,25.52933 57.02136,57.02136 0,31.49202 -25.52933,57.02136 -57.02136,57.02136 -31.492024,0 -57.021355,-25.52934 -57.021355,-57.02136 0.03473,-31.47763 25.543727,-56.98662 57.021355,-57.02136 0,0 0,0 0,0\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"Oval-9\"\n       cx=\"23.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"circle899\"\n       cx=\"27.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n    <circle\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero\"\n       id=\"circle901\"\n       cx=\"31.074423\"\n       cy=\"67.198463\"\n       r=\"1\"\n       transform=\"matrix(3.001124,0,0,3.001124,20.62444,179.21023)\" />\n  </g>\n  <g\n     style=\"fill:none;fill-rule:nonzero\"\n     id=\"g1550\">\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 104.05674,276.66434 c -0.89911,-0.18052 -1.81397,-0.27101 -2.73103,-0.27011 -4.342458,-0.006 -8.472485,1.87842 -11.314234,5.16193 -9.093403,-8.73327 -19.597337,-21.00786 -15.035631,-27.85043 7.562835,-11.34424 34.032745,-15.12566 45.376995,-3.78141 9.3335,9.3335 -17.13642,8.43316 -16.2961,26.74001 0,0 0,10e-6 0,10e-6\"\n       id=\"path868-4\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 101.32571,276.39424 c 0.91706,-9e-4 1.83192,0.0896 2.73103,0.2701 -0.84032,-18.30686 25.6296,-17.40652 16.2961,-26.74002 -5.73215,-5.73214 -15.32374,-7.59284 -24.390135,-6.57546 5.721725,0.40203 11.141615,2.71819 15.386765,6.57546 9.3335,9.3335 -17.13642,8.43316 -16.296106,26.74002 0,0 6.272346,-0.2701 6.272346,-0.2701\"\n       id=\"path870-8\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 98.594691,306.13537 c -2.971113,12.2746 -8.403148,27.7604 -16.656239,27.28022 -13.625103,-0.87032 -30.10127,-21.93822 -25.98973,-37.42402 3.421281,-12.75477 15.905954,10.654 31.361742,0.75028 1.854173,4.89315 6.13596,8.45751 11.284227,9.39352 0,0 0,0 0,0\"\n       id=\"path872-3\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 90.800772,300.70334 c -2.166812,10.61197 -6.656493,27.13616 -13.805168,31.57182 1.581782,0.62368 3.247712,1.00805 4.942848,1.14043 8.253091,0.48018 13.685126,-15.00562 16.656239,-27.28022 0,0 -7.793919,-5.43203 -7.793919,-5.43203\"\n       id=\"path874-8\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 128.03572,328.70383 c -12.8148,3.4813 1.38052,-19.26722 -15.27572,-27.61035 2.30575,-2.70344 3.57201,-6.14044 3.57133,-9.69362 -0.003,-1.5903 -0.2559,-3.17025 -0.75028,-4.68176 12.12455,-3.54133 28.21057,-6.60247 31.84193,0.81031 6.06227,12.21457 -3.93147,37.03386 -19.38726,41.17542 0,0 0,0 0,0\"\n       id=\"path876-8\"\n       style=\"fill:#adfcf9;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       d=\"m 147.42298,287.52841 c -2.1308,-4.34863 -8.5502,-5.08091 -15.93597,-4.23759 2.86888,0.18097 5.46334,1.76686 6.9326,4.23759 5.56708,11.21519 -2.41891,33.01236 -15.72589,39.71687 0.76528,1.6116 2.27785,2.28986 5.342,1.45855 15.45579,-4.14156 25.44953,-28.96085 19.38726,-41.17542 0,0 0,0 0,0\"\n       id=\"path878-7\"\n       style=\"fill:#1446a0;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\" />\n    <path\n       inkscape:connector-curvature=\"0\"\n       style=\"fill:#2a2e3c;fill-opacity:1;fill-rule:nonzero;stroke-width:3.00112391\"\n       id=\"path896-1\"\n       d=\"m 73.082135,333.78773 c 2.680139,1.46969 5.637015,2.36503 8.682255,2.62899 0,0 0.564209,0 0.564209,0 7.622854,0 13.850187,-9.10842 18.534941,-27.04614 0.15606,0 0.30011,0.024 0.46217,0.024 4.37537,-1.9e-4 8.59943,-1.60143 11.87545,-4.50168 2.99931,2.19205 4.91133,5.56788 5.24897,9.26747 -2.99877,2.32552 -6.44632,4.00535 -10.1258,4.93385 -0.84031,0.21608 -1.67762,0.37814 -2.54195,0.51319 -1.54824,0.24204 -2.64965,1.63452 -2.52862,3.19689 0.12103,1.56238 1.42374,2.76863 2.9908,2.76934 0.15674,-1.6e-4 0.31325,-0.0123 0.46817,-0.036 1.0564,-0.16506 2.07978,-0.36614 3.07915,-0.62123 3.19634,-0.81655 6.2552,-2.09874 9.0784,-3.80543 -0.006,1.65837 0.11438,3.31479 0.36014,4.95486 -5.49388,2.97753 -11.65619,4.5052 -17.90471,4.43866 0,0 -0.36013,0 -0.36013,0 -1.657477,0 -3.001125,1.34365 -3.001125,3.00112 0,1.65748 1.343648,3.00113 3.001125,3.00113 0,0 0.36013,0 0.36013,0 7.37564,0.0685 14.64362,-1.77173 21.09791,-5.342 0.99007,0.59285 2.12322,0.90415 3.27723,0.90033 1.05326,-0.0156 2.09979,-0.17106 3.11216,-0.46217 7.86595,-2.10079 15.2037,-9.21945 19.63035,-19.02112 4.33663,-9.6036 4.97587,-19.72039 1.67463,-26.37388 -3.50231,-7.15468 -14.26434,-8.16006 -32.81729,-3.08516 -2.1363,-4.10086 -5.76177,-7.22806 -10.1318,-8.73927 0.50004,-3.69549 2.55104,-7.00284 5.63911,-9.0934 3.4383,1.47727 6.55099,3.61903 9.15943,6.30236 0.63714,0.66776 1.23822,1.36902 1.80068,2.10078 1.01769,1.30941 2.90417,1.54589 4.21358,0.5282 1.30941,-1.01769 1.54589,-2.90417 0.5282,-4.21358 -0.69564,-0.89774 -1.43689,-1.7592 -2.22083,-2.58096 -2.26843,-2.33468 -4.85608,-4.3363 -7.68589,-5.94523 1.42536,-0.81259 2.77877,-1.74532 4.04552,-2.78805 1.8968,1.21712 3.68419,2.59683 5.342,4.12355 3.01737,2.81651 5.57886,6.08469 7.59285,9.68763 0.53106,0.94987 1.53473,1.53783 2.62298,1.53657 0.51099,10e-4 1.01358,-0.12992 1.45855,-0.38114 1.44648,-0.80758 1.96499,-2.63448 1.15843,-4.08153 -2.31458,-4.14378 -5.25991,-7.90214 -8.73027,-11.14017 -2.09698,-1.93101 -4.37424,-3.65655 -6.80055,-5.15293 -0.20264,-2.11855 -1.2115,-4.07826 -2.81806,-5.47406 -5.75915,-5.75915 -15.58183,-8.56821 -26.259831,-7.50281 -10.503934,1.03839 -19.597339,5.54008 -23.735889,11.7464 -4.40565,6.60248 0.05702,16.38914 13.586088,29.84318 -2.505924,3.97198 -3.340833,8.77325 -2.32287,13.358 -3.483738,1.41055 -7.403485,1.26974 -10.777036,-0.38714 -0.172295,-1.15323 -0.252575,-2.31834 -0.24009,-3.48431 -0.006,-2.63742 0.351599,-5.26308 1.062398,-7.80292 0.239729,-0.89426 0.533383,-1.7732 0.879329,-2.63199 0.624039,-1.53564 -0.114973,-3.28642 -1.650618,-3.91046 -1.535651,-0.62404 -3.286426,0.11497 -3.910462,1.65062 -0.431778,1.07165 -0.799559,2.16799 -1.101415,3.28323 -0.856131,3.05959 -1.287332,6.22241 -1.28148,9.39952 0,0 0,0.2821 0,0.2821 -1.414331,-0.83049 -2.899737,-1.53353 -4.43866,-2.10078 0.0774,-2.24324 0.361714,-4.47453 0.849318,-6.6655 0.920289,-4.09696 2.486435,-8.02145 4.639738,-11.62635 0.569295,-0.92317 0.596203,-2.08167 0.07038,-3.03027 -0.525817,-0.9486 -1.522548,-1.53969 -2.607118,-1.54609 -1.08457,-0.006 -2.088209,0.57288 -2.625191,1.51521 -2.472815,4.14275 -4.26999,8.65291 -5.323997,13.361 -0.631125,2.80797 -0.976017,5.67268 -1.029386,8.55021 -1.662169,1.24663 -2.804805,3.06373 -3.208201,5.10191 -2.100787,7.89295 0.408153,17.82368 6.698509,26.56895 3.468104,4.96858 8.029747,9.0754 13.33399,12.00449 0,0 3e-6,1e-5 3e-6,1e-5 M 144.73397,288.8639 c 2.49094,5.01788 1.80068,13.35801 -1.76466,21.24796 -3.69138,8.17807 -9.56458,14.04826 -15.71988,15.69588 -0.53482,0.16221 -1.08895,0.25204 -1.64762,0.2671 0,0 -0.14706,0 -0.14706,0 -0.51353,-1.83403 -0.71641,-3.74109 -0.60022,-5.64211 -0.10204,-6.00225 -0.27311,-14.70551 -7.84194,-20.23658 1.96699,-3.43906 2.7077,-7.44418 2.10079,-11.35925 16.60222,-4.47468 24.13504,-3.00413 25.62059,0.027 0,0 0,-10e-6 0,-10e-6 m -31.40376,2.53596 c 0,6.6299 -5.3746,12.00449 -12.0045,12.00449 -6.629897,0 -12.004493,-5.37459 -12.004493,-12.00449 0,-6.6299 5.374596,-12.0045 12.004493,-12.0045 6.6299,0 12.0045,5.3746 12.0045,12.0045 0,0 0,0 0,0 M 77.47278,255.38637 c 3.118168,-4.67575 10.70801,-8.25009 19.333241,-9.10541 8.907339,-0.87633 16.923339,1.28148 21.425019,5.78016 0.44566,0.4131 0.82433,0.89302 1.12243,1.42253 -1.33263,1.36201 -2.88486,2.49017 -4.59172,3.33725 -5.0689,3.03714 -12.43966,7.4788 -13.56208,16.59322 -4.062763,0.0252 -7.996334,1.43043 -11.155182,3.98549 C 79.76864,267.09075 75.086886,258.9517 77.47278,255.37136 c 0,0 0,0.015 0,0.015 m -18.624973,41.3825 c 0.134241,-0.59258 0.360033,-1.16061 0.669251,-1.68364 1.85841,0.44913 3.619019,1.23434 5.194946,2.31688 5.194942,2.89007 12.778783,7.07964 21.283968,3.40927 2.088116,3.39207 5.238528,5.99913 8.961356,7.41578 -4.387643,16.57821 -9.537569,22.34637 -12.838808,22.18731 -5.588093,-0.35714 -12.460667,-5.11992 -17.508555,-12.13655 -5.242963,-7.29573 -7.400771,-15.34175 -5.762158,-21.50905 0,0 0,0 0,0\" />\n  </g>\n  <path\n     id=\"path938\"\n     d=\"M812.90258 267.19167C812.90258 267.19167 716.72349 267.19167 716.72349 267.19167C715.86215 267.19167 715.05315 266.78281 714.54208 266.08974C714.03101 265.39668 713.88142 264.50167 714.13696 263.67897C714.13696 263.67897 720.0729 243.85554 720.0729 243.85554C720.76347 241.54449 722.89003 239.96141 725.30081 239.96141C725.30081 239.96141 804.32527 239.96141 804.32527 239.96141C806.73604 239.96141 808.86261 241.54449 809.55318 243.85554C809.55318 243.85554 815.48911 263.67897 815.48911 263.67897C815.74465 264.50167 815.59507 265.39668 815.08399 266.08974C814.57292 266.78281 813.76393 267.19167 812.90258 267.19167C812.90258 267.19167 812.90258 267.19167 812.90258 267.19167M812.90258 267.19167\"\n     style=\"stroke-width:0.31910944;fill:#283593\" />\n  <path\n     id=\"path940\"\n     d=\"M804.73288 267.19167C804.73288 267.19167 716.72349 267.19167 716.72349 267.19167C715.86215 267.19167 715.05315 266.78281 714.54208 266.08974C714.03101 265.39668 713.88142 264.50167 714.13696 263.67897C714.13696 263.67897 720.0729 243.85554 720.0729 243.85554C720.76347 241.54449 722.89003 239.96141 725.30081 239.96141C725.30081 239.96141 796.15557 239.96141 796.15557 239.96141C798.56759 239.96141 800.69291 241.54449 801.38348 243.85554C801.38348 243.85554 807.32066 263.67897 807.32066 263.67897C807.5762 264.50167 807.42537 265.39668 806.9143 266.08974C806.40447 266.78281 805.59423 267.19167 804.73288 267.19167C804.73288 267.19167 804.73288 267.19167 804.73288 267.19167M804.73288 267.19167\"\n     style=\"stroke-width:0.31910944;fill:#3f51b5\" />\n  <g\n     id=\"g1942\">\n    <path\n       style=\"stroke-width:0.31910944;fill:#fec108\"\n       d=\"M802.93664 267.19167C802.93664 267.19167 796.61803 326.6632 796.61803 326.6632C796.16554 330.09861 793.19259 332.63653 789.72975 332.54553C789.72975 332.54553 739.89757 332.54553 739.89757 332.54553C736.43349 332.63653 733.46053 330.09861 733.00805 326.6632C733.00805 326.6632 726.69068 267.19167 726.69068 267.19167C726.69068 267.19167 802.93664 267.19167 802.93664 267.19167M802.93664 267.19167\"\n       id=\"path942\" />\n    <path\n       style=\"stroke-width:0.31910944;fill:#ffdc00\"\n       d=\"M794.76694 267.19167C794.76694 267.19167 788.44958 326.6632 788.44958 326.6632C787.99584 330.09861 785.02289 332.63653 781.56005 332.54553C781.56005 332.54553 739.89757 332.54553 739.89757 332.54553C736.43349 332.63653 733.46053 330.09861 733.00805 326.6632C733.00805 326.6632 726.69068 267.19167 726.69068 267.19167C726.69068 267.19167 794.76694 267.19167 794.76694 267.19167M794.76694 267.19167\"\n       id=\"path944\" />\n    <path\n       style=\"stroke-width:0.31910944;fill:#ffeb3a\"\n       d=\"M778.42879 332.54553C778.42879 332.54553 751.19728 332.54553 751.19728 332.54553C751.19728 332.54553 745.75123 267.19167 745.75123 267.19167C745.75123 267.19167 783.87484 267.19167 783.87484 267.19167C783.87484 267.19167 778.42879 332.54553 778.42879 332.54553M778.42879 332.54553\"\n       id=\"path946\" />\n  </g>\n  <path\n     id=\"path948\"\n     d=\"M778.42879 332.54553C778.42879 332.54553 778.42879 392.45334 778.42879 392.45334C778.41979 395.45746 775.98685 397.89067 772.98274 397.8994C772.98274 397.8994 756.64334 397.8994 756.64334 397.8994C753.63922 397.8904 751.20601 395.45746 751.19729 392.45334C751.19729 392.45334 751.19729 332.54553 751.19729 332.54553C751.19729 332.54553 778.42879 332.54553 778.42879 332.54553M778.42879 332.54553\"\n     style=\"stroke-width:0.31910944;fill:#283593\" />\n  <path\n     id=\"path950\"\n     d=\"M770.25909 332.54553C770.25909 332.54553 770.25909 392.45334 770.25909 392.45334C770.25009 395.45746 767.81716 397.89067 764.81304 397.8994C764.81304 397.8994 756.64334 397.8994 756.64334 397.8994C753.63922 397.8904 751.20601 395.45746 751.19728 392.45334C751.19728 392.45334 751.19728 332.54553 751.19728 332.54553C751.19728 332.54553 770.25909 332.54553 770.25909 332.54553M770.25909 332.54553\"\n     style=\"stroke-width:0.31910944;fill:#3f51b5\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path952\"\n     d=\"M816.55115 269.91531C816.55115 269.91531 713.07492 269.91531 713.07492 269.91531C712.21358 269.91531 711.40459 269.5077 710.88977 268.81713C710.37621 268.1278 710.21914 267.23405 710.46596 266.4101C710.46596 266.4101 717.47016 243.06151 717.47016 243.06151C718.49231 239.59493 721.68216 237.22156 725.29707 237.23776C725.29707 237.23776 804.32901 237.23776 804.32901 237.23776C807.94392 237.22156 811.13377 239.59493 812.15592 243.06151C812.15592 243.06151 819.16012 266.4101 819.16012 266.4101C819.40693 267.23405 819.24982 268.1278 818.7363 268.81713C818.22274 269.5077 817.41249 269.91531 816.55115 269.91531C816.55115 269.91531 816.55115 269.91531 816.55115 269.91531M716.73471 264.46926C716.73471 264.46926 812.89137 264.46926 812.89137 264.46926C812.89137 264.46926 806.93922 244.62589 806.93922 244.62589C806.59893 243.46912 805.5344 242.67758 804.32901 242.68381C804.32901 242.68381 725.29707 242.68381 725.29707 242.68381C724.09168 242.67781 723.0284 243.46912 722.6881 244.62589C722.6881 244.62589 716.73471 264.46926 716.73471 264.46926M716.73471 264.46926\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path954\"\n     d=\"M789.73225 335.26793C789.73225 335.26793 739.89508 335.26793 739.89508 335.26793C735.03364 335.36643 730.88522 331.77269 730.28938 326.9474C730.28938 326.9474 723.98199 267.47961 723.98199 267.47961C723.89969 266.71051 724.14902 265.94515 724.66508 265.3705C725.18239 264.79585 725.91784 264.46802 726.69068 264.46926C726.69068 264.46926 802.93664 264.46926 802.93664 264.46926C803.70824 264.46826 804.44494 264.79585 804.96099 265.3705C805.47705 265.94515 805.72636 266.71051 805.64409 267.47961C805.64409 267.47961 799.33669 326.9474 799.33669 326.9474C798.74086 331.77269 794.59243 335.36641 789.73225 335.26793C789.73225 335.26793 789.73225 335.26793 789.73225 335.26793M729.71723 269.91531C729.71723 269.91531 735.70677 326.37276 735.70677 326.37276C736.0159 328.42453 737.82211 329.91288 739.89508 329.82188C739.89508 329.82188 789.73225 329.82188 789.73225 329.82188C791.80396 329.91288 793.61142 328.42453 793.92056 326.37276C793.92056 326.37276 799.90884 269.91531 799.90884 269.91531C799.90884 269.91531 729.71723 269.91531 729.71723 269.91531M729.71723 269.91531\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path956\"\n     d=\"M778.42879 335.26793C778.42879 335.26793 751.19728 335.26793 751.19728 335.26793C749.78124 335.26893 748.60203 334.18346 748.48361 332.77115C748.48361 332.77115 743.03756 267.41729 743.03756 267.41729C742.97526 266.6594 743.23326 265.909 743.74807 265.34806C744.26413 264.78837 744.99086 264.46926 745.75123 264.46926C745.75123 264.46926 783.87484 264.46926 783.87484 264.46926C784.63647 264.46926 785.36194 264.78837 785.878 265.34806C786.39406 265.909 786.65084 266.6594 786.58852 267.41729C786.58852 267.41729 781.14247 332.77115 781.14247 332.77115C781.02529 334.18346 779.84484 335.26918 778.42879 335.26793C778.42879 335.26793 778.42879 335.26793 778.42879 335.26793M753.70279 329.82188C753.70279 329.82188 775.92328 329.82188 775.92328 329.82188C775.92328 329.82188 780.91435 269.91531 780.91435 269.91531C780.91435 269.91531 748.71172 269.91531 748.71172 269.91531C748.71172 269.91531 753.70279 329.82188 753.70279 329.82188M753.70279 329.82188\" />\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path958\"\n     d=\"M772.98274 400.6218C772.98274 400.6218 756.64334 400.6218 756.64334 400.6218C752.13467 400.6168 748.47987 396.96201 748.47488 392.45334C748.47488 392.45334 748.47488 332.54553 748.47488 332.54553C748.47488 331.04098 749.69398 329.82188 751.19728 329.82188C751.19728 329.82188 778.42879 329.82188 778.42879 329.82188C779.93209 329.82188 781.15119 331.04098 781.15119 332.54553C781.15119 332.54553 781.15119 392.45334 781.15119 392.45334C781.14619 396.96201 777.4914 400.61681 772.98274 400.6218C772.98274 400.6218 772.98274 400.6218 772.98274 400.6218M753.92093 335.26793C753.92093 335.26793 753.92093 392.45334 753.92093 392.45334C753.92193 393.95665 755.14003 395.1745 756.64334 395.17575C756.64334 395.17575 772.98274 395.17575 772.98274 395.17575C774.48604 395.17475 775.70389 393.95665 775.70514 392.45334C775.70514 392.45334 775.70514 335.26793 775.70514 335.26793C775.70514 335.26793 753.92093 335.26793 753.92093 335.26793M753.92093 335.26793\" />\n  <g\n     id=\"g1926\">\n    <g\n       id=\"g1917\">\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path960\"\n         d=\"M707.62887 302.59162C707.62887 302.59162 691.29072 302.59162 691.29072 302.59162C689.78617 302.59162 688.56707 301.37253 688.56707 299.86922C688.56707 298.36467 689.78617 297.14557 691.29072 297.14557C691.29072 297.14557 707.62887 297.14557 707.62887 297.14557C709.13218 297.14557 710.35128 298.36467 710.35128 299.86922C710.35128 301.37253 709.13218 302.59162 707.62887 302.59162C707.62887 302.59162 707.62887 302.59162 707.62887 302.59162M707.62887 302.59162\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path962\"\n         d=\"M695.4354 325.59368C694.14899 325.59468 693.03834 324.69619 692.77034 323.43969C692.50234 322.18195 693.14928 320.90925 694.32351 320.38447C694.32351 320.38447 709.24187 313.72057 709.24187 313.72057C710.13064 313.31794 711.16775 313.4214 711.95929 313.99355C712.75083 314.56571 713.17589 315.5168 713.07368 316.48785C712.97022 317.45889 712.35568 318.30028 711.46193 318.69294C711.46193 318.69294 696.54356 325.35684 696.54356 325.35684C696.19453 325.5139 695.81684 325.59493 695.4354 325.59368C695.4354 325.59368 695.4354 325.59368 695.4354 325.59368M695.4354 325.59368\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path964\"\n         d=\"M710.35128 286.25347C709.96984 286.25347 709.59214 286.17367 709.24312 286.01663C709.24312 286.01663 694.32351 279.35273 694.32351 279.35273C693.41479 278.9688 692.78654 278.12366 692.6781 277.14389C692.56965 276.16413 692.99845 275.20181 693.80121 274.62966C694.60273 274.05626 695.6523 273.96152 696.54356 274.38035C696.54356 274.38035 711.46193 281.0455 711.46193 281.0455C712.63366 281.56904 713.2806 282.84174 713.0126 284.09824C712.7446 285.35348 711.63644 286.25222 710.35128 286.25347C710.35128 286.25347 710.35128 286.25347 710.35128 286.25347M710.35128 286.25347\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path966\"\n         d=\"M841.05901 302.59162C841.05901 302.59162 824.72085 302.59162 824.72085 302.59162C823.2163 302.59162 821.9972 301.37253 821.9972 299.86922C821.9972 298.36467 823.2163 297.14557 824.72085 297.14557C824.72085 297.14557 841.05901 297.14557 841.05901 297.14557C842.56231 297.14557 843.78265 298.36467 843.78265 299.86922C843.78265 301.37253 842.56231 302.59162 841.05901 302.59162C841.05901 302.59162 841.05901 302.59162 841.05901 302.59162M841.05901 302.59162\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path968\"\n         d=\"M836.91432 325.59368C836.53289 325.59468 836.15394 325.51388 835.80616 325.35809C835.80616 325.35809 820.8878 318.69294 820.8878 318.69294C819.99404 318.30028 819.37951 317.45889 819.27605 316.48785C819.17383 315.5168 819.5989 314.56571 820.39044 313.99355C821.18198 313.4214 822.21784 313.31794 823.10785 313.72057C823.10785 313.72057 838.02622 320.38447 838.02622 320.38447C839.19919 320.90925 839.84739 322.18195 839.57939 323.43969C839.31014 324.69619 838.19949 325.59493 836.91432 325.59368C836.91432 325.59368 836.91432 325.59368 836.91432 325.59368M836.91432 325.59368\" />\n      <path\n         style=\"stroke-width:0.31910944\"\n         id=\"path970\"\n         d=\"M821.99845 286.25347C820.71328 286.25347 819.60264 285.35597 819.33463 284.09824C819.06663 282.84174 819.71357 281.5678 820.8878 281.04426C820.8878 281.04426 835.80616 274.38035 835.80616 274.38035C836.69494 273.97773 837.73204 274.08244 838.52358 274.65334C839.31512 275.2255 839.74018 276.17659 839.63673 277.14763C839.53451 278.11867 838.91997 278.96007 838.02622 279.35398C838.02622 279.35398 823.10785 286.01788 823.10785 286.01788C822.75883 286.17369 822.38113 286.25472 821.99845 286.25347C821.99845 286.25347 821.99845 286.25347 821.99845 286.25347M821.99845 286.25347\" />\n    </g>\n  </g>\n  <path\n     style=\"stroke-width:0.31910944\"\n     id=\"path972\"\n     d=\"M729.41433 269.91531C729.14882 269.91431 728.8858 269.87671 728.63151 269.80064C727.93969 269.59371 727.35881 269.12003 727.01602 268.48431C726.67323 267.84734 726.59719 267.10192 726.80411 266.4101C726.80411 266.4101 734.97381 239.17984 734.97381 239.17984C735.25303 238.24744 736.00842 237.53568 736.95453 237.3113C737.90189 237.08693 738.89661 237.3849 739.5635 238.09287C740.23164 238.8009 740.47097 239.81058 740.19175 240.74298C740.19175 240.74298 732.02205 267.97324 732.02205 267.97324C731.67676 269.12502 730.61722 269.91407 729.41433 269.91531C729.41433 269.91531 729.41433 269.91531 729.41433 269.91531M729.41433 269.91531\" />\n  <path\n     id=\"Shape\"\n     d=\"M1046.4837 246.55584C1046.4117 268.35866 1046.6288 290.17607 1046.3748 311.96977C1044.9255 319.29909 1033.792 315.96342 1035.7615 309.06969C1035.8355 287.87397 1035.6128 266.66292 1035.8731 245.4768C1037.0283 239.25579 1046.5875 240.21705 1046.4837 246.55584C1046.4837 246.55584 1046.4837 246.55584 1046.4837 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     id=\"path1071\"\n     d=\"M1035.7615 246.55584C1035.7615 268.00033 1035.7615 289.44482 1035.7615 310.88931C1030.0592 310.75269 1024.302 311.16524 1018.6347 310.67866C1015.7107 308.44853 1017.4866 304.15343 1016.9976 300.93025C1016.9976 283.69897 1016.9976 266.46768 1016.9976 249.2364C1017.9408 244.92011 1023.3086 247.07939 1026.5017 246.55584C1029.5883 246.55584 1032.6749 246.55584 1035.7615 246.55584C1035.7615 246.55584 1035.7615 246.55584 1035.7615 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     id=\"Rectangle-path\"\n     d=\"M1027.7198 246.55584C1030.2402 246.86764 1034.0031 245.93696 1035.7615 247.01074C1035.7615 268.3036 1035.7615 289.59646 1035.7615 310.88931C1033.2411 310.57751 1029.4782 311.50819 1027.7198 310.4344C1027.7198 289.14155 1027.7198 267.84869 1027.7198 246.55584C1027.7198 246.55584 1027.7198 246.55584 1027.7198 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#707070\" />\n  <path\n     id=\"path1074\"\n     d=\"M1167.109 326.97268C1167.109 346.63013 1167.109 366.28758 1167.109 385.94503C1145.6645 385.94503 1124.22 385.94503 1102.7755 385.94503C1102.7215 365.74012 1102.8851 345.52968 1102.6925 325.32825C1102.0249 315.89103 1092.4702 309.66965 1083.5078 310.88931C1071.1665 310.88931 1058.8251 310.88931 1046.4837 310.88931C1046.4837 289.44482 1046.4837 268.00033 1046.4837 246.55584C1062.6235 246.75591 1078.7932 246.10734 1094.91 246.98027C1126.9359 249.86033 1155.5858 273.96865 1164.0374 304.9696C1166.0751 312.11462 1167.1024 319.54364 1167.109 326.97268C1167.109 326.97268 1167.109 326.97268 1167.109 326.97268\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#f6511d\" />\n  <path\n     id=\"path1076\"\n     d=\"M1086.6922 246.55584C1084.8345 246.55984 1078.1612 246.54684 1079.6893 246.56384C1111.2812 246.57414 1141.4693 267.25765 1153.0981 296.59247C1158.8893 309.73435 1159.3841 324.22356 1159.0673 338.34548C1159.0673 354.21205 1159.0673 370.07862 1159.0673 385.94518C1161.5877 385.63338 1165.3506 386.56406 1167.109 385.49028C1166.9702 363.92464 1167.4005 342.34434 1166.8674 320.78876C1164.8069 288.67426 1141.3942 259.41573 1110.5926 250.1936C1102.8701 247.78201 1094.7813 246.56244 1086.6922 246.55599C1086.6922 246.55599 1086.6922 246.55584 1086.6922 246.55584\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#af2f07\" />\n  <path\n     id=\"path1078\"\n     d=\"M1172.4701 391.30616C1172.4141 396.92393 1166.2173 396.9451 1162.105 396.66728C1141.9708 396.59298 1121.8212 396.81592 1101.6965 396.55566C1094.3696 395.10157 1097.7177 384.00079 1104.5952 385.94503C1125.7909 386.01933 1147.0019 385.79637 1168.188 386.05665C1170.6205 386.52132 1172.5071 388.82767 1172.4701 391.30616C1172.4701 391.30616 1172.4701 391.30616 1172.4701 391.30616\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#9e9e9e\" />\n  <path\n     d=\"M1169.7896 383.7577C1169.6496 362.70067 1170.0855 341.62881 1169.5407 320.58211C1167.4279 287.74654 1143.7345 257.76681 1112.3634 247.94146C1095.5899 242.12075 1077.7003 244.3038 1060.3076 243.87527C1056.4288 243.87527 1052.5499 243.87527 1048.6711 243.87527C1045.7591 235.25294 1035.5127 239.09536 1032.2094 243.87527C1027.3471 244.09145 1022.3684 243.40372 1017.5913 244.29658C1012.5936 246.77765 1014.8116 252.97997 1014.317 257.42471C1014.389 274.71107 1014.1723 292.01196 1014.4259 309.2892C1015.8465 315.10721 1022.5542 313.27776 1026.9566 313.56987C1031.1118 313.272 1034.6191 313.11846 1036.4926 317.45607C1043.1632 323.16312 1046.4981 313.2284 1051.8554 313.56987C1064.3628 313.73636 1076.9132 313.22619 1089.3919 313.84486C1096.9238 315.14937 1101.0416 323.01712 1100.095 330.15702C1100.095 348.02391 1100.095 365.8908 1100.095 383.7577C1090.937 386.52796 1094.8665 401.18552 1104.1402 399.34784C1125.6068 399.26444 1147.088 399.51508 1168.5454 399.2218C1176.504 398.05155 1177.4729 386.20105 1169.7896 383.7577C1169.7896 383.7577 1169.7896 383.7577 1169.7896 383.7577M1033.0809 308.20875C1028.6133 308.20875 1024.1457 308.20875 1019.6781 308.20875C1019.6781 288.5513 1019.6781 268.89385 1019.6781 249.2364C1024.1457 249.2364 1028.6133 249.2364 1033.0809 249.2364C1033.0809 268.89385 1033.0809 288.5513 1033.0809 308.20875C1033.0809 308.20875 1033.0809 308.20875 1033.0809 308.20875M1043.8032 310.88931C1041.0335 317.46171 1036.9553 309.89812 1038.4421 305.88534C1038.4421 286.10884 1038.4421 266.33234 1038.4421 246.55584C1041.2117 239.98343 1045.2899 247.54703 1043.8032 251.5598C1043.8032 271.33631 1043.8032 291.11281 1043.8032 310.88931C1043.8032 310.88931 1043.8032 310.88931 1043.8032 310.88931M1099.7974 313.56987C1096.1808 307.43448 1087.3019 311.08377 1084.1083 305.66361C1081.3148 303.524 1082.0009 301.06952 1083.8262 298.51195C1085.1133 295.55092 1088.2388 292.07795 1085.2459 289.12901C1082.9997 286.57949 1082.0422 282.25427 1078.4906 281.41377C1073.1035 283.41567 1078.626 288.28981 1080.2187 291.25434C1081.6679 293.63785 1078.2943 296.32134 1077.6758 298.83345C1075.0306 301.98224 1076.6623 305.50657 1079.2355 308.09521C1072.8947 308.36026 1065.5692 308.13301 1058.8498 308.20875C1055.6213 308.20875 1052.3928 308.20875 1049.1643 308.20875C1049.1643 288.5513 1049.1643 268.89385 1049.1643 249.2364C1064.3195 249.42743 1079.5032 248.80661 1094.6363 249.64625C1125.925 252.44825 1153.8489 276.23561 1161.7172 306.62656C1165.9086 321.70953 1163.9876 337.46515 1164.4284 352.90233C1164.4284 363.02304 1164.4284 373.14376 1164.4284 383.26447C1144.771 383.26447 1125.1135 383.26447 1105.4561 383.26447C1105.4561 376.48623 1105.4561 369.70798 1105.4561 362.92973C1108.1868 365.14594 1110.1094 368.74662 1113.4978 369.86109C1116.6416 370.03342 1118.1123 363.17299 1120.9304 366.72322C1123.9739 368.55992 1126.4228 371.85871 1129.9602 372.51529C1135.4825 370.02825 1129.1405 366.0001 1126.4585 364.16895C1123.5797 362.60217 1121.2831 358.80154 1117.759 359.37544C1115.382 360.98379 1113.4417 365.32099 1111.2461 361.13912C1109.4479 359.00288 1106.7086 357.25645 1105.4561 354.8942C1105.3025 344.55535 1105.7778 334.18163 1105.191 323.86656C1101.9814 318.39309 1105.4488 318.6 1109.9886 318.931C1113.7944 319.81896 1116.9973 317.61612 1116.6647 313.54909C1117.2996 311.34798 1117.2369 306.96937 1118.2879 306.06698C1120.9577 310.26476 1124.7842 306.60425 1126.4148 303.49033C1128.3254 301.69946 1129.3191 298.0738 1131.8312 297.4865C1135.3316 297.08363 1139.383 298.45139 1142.4153 296.45588C1143.5521 292.67981 1141.1164 288.73318 1140.5866 284.88945C1138.8823 277.69699 1132.7333 284.12614 1136.015 288.70448C1138.2346 292.65819 1135.0042 292.35593 1131.8656 292.12538C1127.1187 291.17236 1125.4265 296.52091 1122.7973 299.38481C1120.6099 304.92509 1117.8504 293.99471 1114.1515 298.41549C1112.4775 303.24899 1112.287 308.54488 1111.2273 313.56987C1107.4174 313.56987 1103.6074 313.56987 1099.7974 313.56987C1099.7974 313.56987 1099.7974 313.56987 1099.7974 313.56987M1167.109 393.98672C1145.6645 393.98672 1124.22 393.98672 1102.7755 393.98672C1096.2031 391.21707 1103.7667 387.13885 1107.7795 388.6256C1127.556 388.6256 1147.3325 388.6256 1167.109 388.6256C1170.6142 388.5885 1170.6151 394.01527 1167.109 393.98672C1167.109 393.98672 1167.109 393.98672 1167.109 393.98672\"\n     id=\"path1084\"\n     style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#000000\" />\n  <g\n     id=\"g1995\">\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#adfcf9\"\n       d=\"M1089.3727 359.13942C1089.8498 371.65302 1075.7606 381.53376 1064.1571 376.76476C1053.3603 373.18799 1049.0624 359.87783 1053.5765 349.95117C1057.1641 340.22022 1063.5511 331.78013 1070.6088 324.29212C1079.4495 334.00326 1088.6429 345.48931 1089.3727 359.13942C1089.3727 359.13942 1089.3727 359.13942 1089.3727 359.13942\"\n       id=\"path1080\" />\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill-opacity:1;fill:#23baf7\"\n       d=\"M1070.6088 324.29212C1062.3677 329.4119 1073.5007 335.03764 1075.4566 341.15191C1080.7867 349.86596 1084.5034 362.13169 1077.1859 370.89641C1075.2827 375.6111 1061.0272 378.27897 1071.8173 377.8663C1083.1695 377.51103 1091.8206 365.47438 1088.9089 354.56296C1086.2761 342.87531 1078.6114 332.90101 1070.6088 324.29212C1070.6088 324.29212 1070.6088 324.29212 1070.6088 324.29212\"\n       id=\"path1082\" />\n    <path\n       style=\"stroke-width:2.68056154;fill-rule:nonzero;fill:#000000\"\n       id=\"path1086\"\n       d=\"M1068.7136 322.39696C1059.1215 332.86169 1049.2946 345.3966 1049.1922 360.24295C1049.4005 373.7335 1064.2516 384.08689 1076.9857 379.61981C1088.7336 376.30779 1095.0612 362.36541 1090.8191 351.1058C1087.169 339.9106 1080.103 329.84219 1071.6173 321.80834C1070.6467 321.40227 1069.4486 321.63981 1068.7136 322.39696C1068.7136 322.39696 1068.7136 322.39696 1068.7136 322.39696M1070.6088 375.22279C1059.66 375.62355 1051.698 363.53602 1055.2951 353.47137C1057.9862 343.8475 1064.116 335.63425 1070.6088 328.21646C1078.3869 337.41194 1086.9673 348.09625 1086.6076 360.78315C1085.9355 368.77866 1078.6363 375.37456 1070.6088 375.22279C1070.6088 375.22279 1070.6088 375.22279 1070.6088 375.22279\" />\n  </g>\n  <path\n     id=\"path1629\"\n     d=\"M498.4048 366.93052C498.4048 366.93052 498.4048 369.74485 498.4048 369.74485C498.4078 371.98575 497.51823 374.13516 495.93452 375.72015C494.34953 377.30515 492.20012 378.19301 489.95922 378.19043C489.95922 378.19043 394.24875 378.19043 394.24875 378.19043C392.00786 378.19343 389.85845 377.30515 388.27345 375.72015C386.68975 374.13516 385.80061 371.98575 385.80318 369.74485C385.80318 369.74485 385.80318 366.93052 385.80318 366.93052C385.79518 365.95891 385.96684 364.99502 386.30961 364.08655C387.14592 361.70262 389.02085 359.82769 391.40607 358.99138C392.31326 358.6486 393.27714 358.47722 394.24875 358.48495C397.34916 358.46305 399.85551 355.9554 399.87871 352.855C399.87871 352.855 399.87871 294.94987 399.87871 294.94987C399.86971 282.09853 405.47386 269.88376 415.22094 261.50777C422.14595 255.50026 430.89177 252.00038 440.04865 251.57128C451.58819 251.01202 462.85324 255.20516 471.22021 263.17266C479.58589 271.14016 484.32412 282.18615 484.32928 293.73986C484.32928 293.73986 484.32928 352.855 484.32928 352.855C484.33828 355.96056 486.85367 358.47593 489.95922 358.48495C494.62014 358.49295 498.39707 362.26961 498.4048 366.93052C498.4048 366.93052 498.4048 366.93052 498.4048 366.93052M498.4048 366.93052\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1631\"\n     d=\"M489.95922 372.56048C489.95922 372.56048 489.95922 375.37481 489.95922 375.37481C489.96522 376.3374 489.793 377.29097 489.4528 378.19043C489.4528 378.19043 394.24875 378.19043 394.24875 378.19043C392.00786 378.19343 389.85845 377.30515 388.27345 375.72015C386.68975 374.13516 385.80061 371.98575 385.80318 369.74485C385.80318 369.74485 385.80318 366.93052 385.80318 366.93052C385.79518 365.95891 385.96684 364.99502 386.30961 364.08655C389.00925 363.82754 391.14577 361.69102 391.40607 358.99138C392.31326 358.6486 393.27714 358.47722 394.24875 358.48495C397.34916 358.46305 399.85551 355.9554 399.87871 352.855C399.87871 352.855 399.87871 294.94987 399.87871 294.94987C399.86971 282.09853 405.47387 269.88376 415.22094 261.50777C420.3174 258.93441 425.90097 257.46668 431.60437 257.20123C443.1439 256.64326 454.40767 260.83512 462.77464 268.80262C471.14032 276.77011 475.87855 287.81739 475.8837 299.36981C475.8837 299.36981 475.8837 358.48495 475.8837 358.48495C475.8927 361.59051 478.4081 364.10588 481.51365 364.1149C486.17586 364.1229 489.95278 367.89956 489.95922 372.56048C489.95922 372.56048 489.95922 372.56048 489.95922 372.56048M489.95922 372.56048\"\n     style=\"stroke-width:0.32988504;fill:#fec108\" />\n  <path\n     id=\"path1633\"\n     d=\"M411.13861 297.75776C410.3925 297.75776 409.67604 297.46137 409.1477 296.93304C408.62066 296.40471 408.32299 295.68953 408.32428 294.94214C408.18769 276.66702 422.21553 261.40211 440.43781 260.0001C440.99321 259.973 441.55118 259.9602 442.10141 259.9602C443.65548 259.9602 444.91574 261.22046 444.91574 262.77453C444.91574 264.32989 443.65548 265.59015 442.10141 265.59015C441.6388 265.59015 441.1749 265.60175 440.70713 265.62365C425.47314 266.85298 413.78671 279.65922 413.95423 294.94218C413.95423 295.68957 413.65785 296.40475 413.12952 296.93308C412.60119 297.46141 411.886 297.7578 411.13861 297.7578C411.13861 297.7578 411.13861 297.75776 411.13861 297.75776M411.13861 297.75776\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1635\"\n     d=\"M450.54956 243.069C450.54956 243.069 450.54956 252.35862 450.54956 252.35862C450.54956 252.35862 433.65842 252.35862 433.65842 252.35862C433.65842 252.35862 433.65842 243.069 433.65842 243.069C433.65842 238.40551 437.4405 234.62472 442.10399 234.62472C446.76748 234.62472 450.54956 238.40551 450.54956 243.069C450.54956 243.069 450.54956 243.069 450.54956 243.069M450.54956 243.069\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1637\"\n     d=\"M442.10399 243.069C442.10399 243.069 442.10399 252.35862 442.10399 252.35862C442.10399 252.35862 433.65842 252.35862 433.65842 252.35862C433.65842 252.35862 433.65842 243.069 433.65842 243.069C433.65442 240.04978 435.26532 237.25865 437.88121 235.75097C438.5152 236.12982 439.10023 236.58341 439.62727 237.10144C441.21227 238.68256 442.10399 240.83068 442.10399 243.069C442.10399 243.069 442.10399 243.069 442.10399 243.069M442.10399 243.069\"\n     style=\"stroke-width:0.32988504;fill:#fec108\" />\n  <path\n     id=\"path1639\"\n     d=\"M461.80947 378.19043C461.81347 383.41833 459.73867 388.43233 456.04163 392.12807C452.34589 395.8251 447.33189 397.89977 442.10399 397.8959C440.68523 397.8909 439.27033 397.73998 437.88121 397.44489C428.839 395.45914 422.39851 387.44782 422.39851 378.19043C422.39851 378.19043 461.80947 378.19043 461.80947 378.19043M461.80947 378.19043\"\n     style=\"stroke-width:0.32988504;fill:#d84315\" />\n  <path\n     id=\"path1641\"\n     d=\"M453.36389 378.19043C453.36489 387.44782 446.9234 395.45914 437.88121 397.44489C428.839 395.45914 422.39851 387.44782 422.39851 378.19043C422.39851 378.19043 453.36389 378.19043 453.36389 378.19043M453.36389 378.19043\"\n     style=\"stroke-width:0.32988504;fill:#f57c00\" />\n  <path\n     id=\"path1643\"\n     d=\"M411.13861 319.07529C410.3925 319.07529 409.67604 318.77891 409.1477 318.25058C408.62066 317.72224 408.32299 317.00706 408.32428 316.25967C408.32428 316.25967 408.32428 307.81538 408.32428 307.81538C408.32428 306.26003 409.58454 304.99976 411.13861 304.99976C412.69397 304.99976 413.95423 306.26003 413.95423 307.81538C413.95423 307.81538 413.95423 316.25967 413.95423 316.25967C413.95423 317.00706 413.65785 317.72224 413.12952 318.25058C412.60119 318.77891 411.886 319.07529 411.13861 319.07529C411.13861 319.07529 411.13861 319.07529 411.13861 319.07529M411.13861 319.07529\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1645\"\n     d=\"M419.58418 361.30057C419.58418 361.30057 411.13861 361.30057 411.13861 361.30057C409.58454 361.30057 408.32428 360.04031 408.32428 358.48495C408.32428 356.93088 409.58454 355.67062 411.13861 355.67062C411.13861 355.67062 419.58418 355.67062 419.58418 355.67062C421.13825 355.67062 422.39851 356.93088 422.39851 358.48495C422.39851 360.04031 421.13825 361.30057 419.58418 361.30057C419.58418 361.30057 419.58418 361.30057 419.58418 361.30057M419.58418 361.30057\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <path\n     id=\"path1647\"\n     d=\"M473.06937 361.30057C473.06937 361.30057 430.84408 361.30057 430.84408 361.30057C429.28873 361.30057 428.02847 360.04031 428.02847 358.48495C428.02847 356.93088 429.28873 355.67062 430.84408 355.67062C430.84408 355.67062 473.06937 355.67062 473.06937 355.67062C474.62344 355.67062 475.8837 356.93088 475.8837 358.48495C475.8837 360.04031 474.62344 361.30057 473.06937 361.30057C473.06937 361.30057 473.06937 361.30057 473.06937 361.30057M473.06937 361.30057\"\n     style=\"stroke-width:0.32988504;fill:#ffffff\" />\n  <g\n     id=\"g1657\"\n     style=\"fill:#c03a2b\">\n    <path\n       id=\"path1649\"\n       d=\"M372.81653655 345.011209826C372.07042931 345.011209826 371.35396059 344.71482792 370.826917463 344.186497251C353.265694069 326.585326429 353.265694069 298.090217113 370.826917463 280.48904959C371.536943528 279.773868741 372.575565762 279.491661995 373.549757821 279.751961077C374.525238081 280.010973607 375.285519822 280.772542888 375.545819893 281.746736267C375.804831104 282.720926347 375.523912228 283.75954957 374.807444498 284.469574316C359.440729474 299.871081654 359.440729474 324.804461888 374.807444498 340.205969226C375.61282779 341.010063987 375.852509717 342.221362231 375.416958553 343.272870764C374.98140706 344.324379297 373.955670794 345.009919975 372.817825411 345.011209826C372.817825411 345.011209826 372.81653655 345.011209826 372.81653655 345.011209826M372.81653655 345.011209826\" />\n    <path\n       id=\"path1651\"\n       d=\"M382.768497909 335.057958287C382.022390669 335.059277827 381.305921619 334.761579679 380.778878822 334.233245712C368.704571443 322.133168375 368.704571443 302.542378466 380.778878822 290.44229783C381.878065968 289.345687416 383.657640989 289.348263818 384.755539934 290.446157485C385.85343822 291.544054451 385.85472708 293.323632441 384.759406187 294.422819257C374.88218457 304.324522961 374.88218457 320.351007385 384.759406187 330.252714388C385.563500947 331.058095701 385.804471735 332.268104094 385.368920242 333.319612627C384.933369078 334.37112116 383.907632813 335.057951689 382.768498569 335.057951689C382.768498569 335.057951689 382.768497909 335.057958287 382.768497909 335.057958287M382.768497909 335.057958287\" />\n    <path\n       id=\"path1653\"\n       d=\"M511.391443037 345.011209826C510.252310442 345.011209826 509.226572527 344.324379297 508.791022023 343.272870764C508.355471519 342.221362231 508.595152787 341.011353837 509.400537398 340.205969226C524.765961911 324.804461888 524.765961911 299.871081654 509.400537398 284.469574316C508.309079788 283.369100948 508.31294604 281.593389211 509.409543259 280.498068647C510.504863823 279.402748083 512.28057556 279.39888183 513.381048929 280.489062785C530.946140224 298.088943756 530.946140224 326.586629475 513.381048929 344.186510446C512.85400811 344.714841115 512.137537411 345.011223021 511.391429841 345.011223021C511.391429841 345.011223021 511.391443037 345.011209826 511.391443037 345.011209826M511.391443037 345.011209826\" />\n    <path\n       id=\"path1655\"\n       d=\"M501.439481348 335.057958287C500.300348753 335.057958287 499.274610839 334.372417608 498.839060335 333.319619225C498.403509831 332.268110692 498.644480949 331.058102298 499.448575709 330.252720986C509.342550207 320.358746488 509.342550207 304.318086904 499.448575709 294.422825855C498.353255145 293.323639038 498.354541697 291.544064347 499.452435364 290.446164082C500.55033233 289.348267116 502.329907021 289.346977266 503.429097137 290.442304428C515.521445268 302.534652559 515.521445268 322.140904179 503.429097137 334.23325231C502.90205302 334.761586277 502.185582321 335.059254735 501.439474751 335.057964885C501.439474751 335.057964885 501.439481348 335.057958287 501.439481348 335.057958287M501.439481348 335.057958287\" />\n  </g>\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1659\"\n     d=\"M440.43781 260.0001C422.21553 261.40211 408.18769 276.66702 408.32428 294.94214C408.32428 296.49749 409.58454 297.75776 411.13861 297.75776C412.69397 297.75776 413.95423 296.49749 413.95423 294.94214C413.78671 279.65918 425.47314 266.85294 440.70713 265.62361C441.1749 265.60041 441.6388 265.58881 442.10141 265.59011C443.65548 265.59011 444.91574 264.32985 444.91574 262.77449C444.91574 261.22042 443.65548 259.96016 442.10141 259.96016C441.55118 259.96016 440.99321 259.97306 440.43781 260.00006C440.43781 260.00006 440.43781 260.0001 440.43781 260.0001M440.43781 260.0001\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1661\"\n     d=\"M450.06247 235.11053C446.84351 231.88899 442.0009 230.92382 437.79229 232.66603C433.58497 234.40823 430.84151 238.51504 430.84408 243.069C430.84408 243.069 430.84408 250.14865 430.84408 250.14865C410.71466 255.67164 396.84016 274.07046 397.06309 294.94214C397.06309 294.94214 397.06309 352.855 397.06309 352.855C397.06209 354.40907 395.80282 355.66933 394.24875 355.67062C388.03248 355.67662 382.99529 360.71425 382.98885 366.93052C382.98885 366.93052 382.98885 369.74485 382.98885 369.74485C382.99485 375.96113 388.03248 380.99831 394.24875 381.00605C394.24875 381.00605 419.77876 381.00605 419.77876 381.00605C421.18851 392.26337 430.75904 400.71024 442.10399 400.71024C453.44894 400.71024 463.01947 392.26337 464.42922 381.00605C464.42922 381.00605 489.95922 381.00605 489.95922 381.00605C496.1755 380.99805 501.21269 375.96113 501.21913 369.74485C501.21913 369.74485 501.21913 366.93052 501.21913 366.93052C501.21313 360.71425 496.1755 355.67706 489.95922 355.67062C488.40516 355.66962 487.14618 354.40907 487.14489 352.855C487.14489 352.855 487.14489 293.73986 487.14489 293.73986C487.12429 273.20452 473.24076 255.27217 453.36389 250.10999C453.36389 250.10999 453.36389 243.069 453.36389 243.069C453.37189 240.082 452.18224 237.21612 450.06247 235.11053C450.06247 235.11053 450.06247 235.11053 450.06247 235.11053M436.47404 243.069C436.47404 239.95958 438.99457 237.43905 442.10399 237.43905C445.21341 237.43905 447.73394 239.95958 447.73394 243.069C447.73394 243.069 447.73394 249.08812 447.73394 249.08812C445.13739 248.75179 442.51506 248.63968 439.89917 248.75179C438.74071 248.80719 437.60673 248.94508 436.47404 249.08812C436.47404 249.08812 436.47404 243.069 436.47404 243.069M442.10399 395.08028C433.87104 395.06608 426.84552 389.12302 425.46799 381.00605C425.46799 381.00605 458.73999 381.00605 458.73999 381.00605C457.36246 389.12302 450.33694 395.06611 442.10399 395.08028C442.10399 395.08028 442.10399 395.08028 442.10399 395.08028M469.28987 265.21383C477.1285 272.62722 481.5536 282.95159 481.51365 293.73986C481.51365 293.73986 481.51365 352.855 481.51365 352.855C481.51865 357.5172 485.29702 361.29542 489.95922 361.30057C493.06736 361.30457 495.58531 363.82239 495.58918 366.93052C495.58918 366.93052 495.58918 369.74485 495.58918 369.74485C495.58518 372.85299 493.06736 375.37223 489.95922 375.37481C489.95922 375.37481 394.24875 375.37481 394.24875 375.37481C391.14062 375.37181 388.62267 372.85299 388.6188 369.74485C388.6188 369.74485 388.6188 366.93052 388.6188 366.93052C388.6228 363.82239 391.14062 361.30444 394.24875 361.30057C398.91096 361.29557 402.68917 357.5172 402.69433 352.855C402.69433 352.855 402.69433 294.94214 402.69433 294.94214C402.33996 273.5795 418.84452 255.71417 440.16849 254.37659C440.82311 254.34439 441.47128 254.33019 442.12074 254.33019C452.24538 254.30059 461.98472 258.20376 469.28987 265.21382C469.28987 265.21382 469.28987 265.21383 469.28987 265.21383M469.28987 265.21383\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1663\"\n     d=\"M411.13861 319.07529C411.886 319.07529 412.60119 318.77891 413.12952 318.25058C413.65785 317.72224 413.95423 317.00706 413.95423 316.25967C413.95423 316.25967 413.95423 307.81538 413.95423 307.81538C413.95423 306.26003 412.69397 304.99976 411.13861 304.99976C409.58454 304.99976 408.32428 306.26003 408.32428 307.81538C408.32428 307.81538 408.32428 316.25967 408.32428 316.25967C408.32328 317.00706 408.62066 317.72224 409.1477 318.25058C409.67604 318.77891 410.3925 319.07529 411.13861 319.07529C411.13861 319.07529 411.13861 319.07529 411.13861 319.07529M411.13861 319.07529\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1665\"\n     d=\"M419.58418 355.67062C419.58418 355.67062 411.13861 355.67062 411.13861 355.67062C409.58454 355.67062 408.32428 356.93088 408.32428 358.48495C408.32428 360.04031 409.58454 361.30057 411.13861 361.30057C411.13861 361.30057 419.58418 361.30057 419.58418 361.30057C421.13825 361.30057 422.39851 360.04031 422.39851 358.48495C422.39851 356.93088 421.13825 355.67062 419.58418 355.67062C419.58418 355.67062 419.58418 355.67062 419.58418 355.67062M419.58418 355.67062\" />\n  <path\n     style=\"stroke-width:0.32988504\"\n     id=\"path1667\"\n     d=\"M428.02847 358.48495C428.02847 359.23235 428.32485 359.94753 428.85318 360.47586C429.38151 361.00419 430.09669 361.30057 430.84408 361.30057C430.84408 361.30057 473.06937 361.30057 473.06937 361.30057C474.62344 361.30057 475.8837 360.04031 475.8837 358.48495C475.8837 356.93088 474.62344 355.67062 473.06937 355.67062C473.06937 355.67062 430.84408 355.67062 430.84408 355.67062C430.09669 355.67062 429.38151 355.967 428.85318 356.49404C428.32485 357.02238 428.02847 357.73884 428.02847 358.48495C428.02847 358.48495 428.02847 358.48495 428.02847 358.48495M428.02847 358.48495\" />\n  <g\n     id=\"g1891\">\n    <path\n       d=\"M370.82692 280.48905C353.26569 298.09022 353.26569 326.58533 370.82692 344.1865C371.53823 344.89781 372.57428 345.17486 373.54589 344.91456C374.51751 344.65426 375.27521 343.89527 375.53551 342.92494C375.79581 341.95333 375.51871 340.91728 374.80744 340.20597C359.44073 324.80446 359.44073 299.87108 374.80744 284.46957C375.90663 283.37039 375.90663 281.58824 374.80744 280.48905C373.70826 279.38986 371.9261 279.38986 370.82692 280.48905C370.82692 280.48905 370.82692 280.48905 370.82692 280.48905M370.82692 280.48905\"\n       id=\"path1669\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M384.75941 290.4423C384.23107 289.91397 383.51461 289.61759 382.7685 289.61759C382.02239 289.61759 381.30592 289.91397 380.77888 290.4423C368.70457 302.54238 368.70457 322.13317 380.77888 334.23325C381.87807 335.32986 383.65764 335.32728 384.75554 334.22925C385.85344 333.13135 385.85473 331.35177 384.75954 330.25258C374.88231 320.35088 374.88231 304.32439 384.75954 294.42269C385.28658 293.89565 385.58425 293.17918 385.58425 292.43307C385.58425 291.68567 385.28658 290.97049 384.75954 290.44216C384.75954 290.44216 384.75941 290.4423 384.75941 290.4423M384.75941 290.4423\"\n       id=\"path1671\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M509.40054 280.48905C508.8722 281.01738 508.57582 281.73385 508.57582 282.47996C508.57582 283.22606 508.8722 283.94253 509.40054 284.46957C524.76596 299.87108 524.76596 324.80446 509.40054 340.20597C508.30135 341.30516 508.30135 343.08731 509.40054 344.1865C510.49972 345.28568 512.28188 345.28568 513.38106 344.1865C530.94615 326.58662 530.94615 298.08893 513.38106 280.48905C512.85273 279.96201 512.13755 279.66434 511.39144 279.66434C510.64405 279.66434 509.92887 279.96201 509.40054 280.48905C509.40054 280.48905 509.40054 280.48905 509.40054 280.48905M509.40054 280.48905\"\n       id=\"path1673\"\n       style=\"stroke-width:0.32988504\" />\n    <path\n       d=\"M499.44858 334.23325C499.97691 334.76158 500.69338 335.05796 501.43948 335.05796C502.18559 335.05796 502.90206 334.76158 503.4291 334.23325C515.52145 322.1409 515.52145 302.53465 503.4291 290.4423C502.32991 289.34698 500.55034 289.34826 499.45244 290.4463C498.35454 291.54419 498.35326 293.32377 499.44844 294.42296C509.34113 304.31822 509.34113 320.35759 499.44844 330.25285C498.9214 330.7799 498.62373 331.49637 498.62373 332.24247C498.62373 332.98987 498.9214 333.70505 499.44844 334.23338C499.44844 334.23338 499.44858 334.23325 499.44858 334.23325M499.44858 334.23325\"\n       id=\"path1675\"\n       style=\"stroke-width:0.32988504\" />\n  </g>\n  <g\n     id=\"g1721\">\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill-opacity:1;fill:#f6511d\"\n       id=\"path1021\"\n       d=\"M524.751956 271.0061238C524.755956 290.9354738 510.732396 308.1144038 491.205706 312.1002738C488.445966 312.6642038 485.635906 312.9452038 482.819146 312.9389338C465.858906 312.9389338 450.568676 302.7223338 444.078276 287.0531138C437.587876 271.3839038 441.175466 253.3478538 453.168166 241.3551538C465.160866 229.3624538 483.196916 225.7748538 498.866136 232.2652638C514.535346 238.7556638 524.751956 254.0458838 524.751956 271.0061238C524.751956 271.0061238 524.751956 271.0061238 524.751956 271.0061238\" />\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill-opacity:1;fill:#ad3014\"\n       id=\"path1023\"\n       d=\"M482.819146 229.0733138C481.455706 229.0773138 480.093396 229.1520138 478.737686 229.2969538C499.342946 231.4130938 515.315966 248.2574438 516.335726 268.9459638C517.355476 289.6344838 503.116416 307.9680138 482.819146 312.1002738C481.451846 312.3848138 480.070926 312.5994138 478.681776 312.7432438C480.023626 312.9389338 481.421386 312.9389338 482.819146 312.9389338C485.635906 312.9449338 488.445966 312.6641938 491.205706 312.1002738C512.317976 307.8133038 526.746856 288.2259638 524.581796 266.7919138C522.416746 245.3578538 504.362256 229.0516638 482.819146 229.0733138C482.819146 229.0733138 482.819146 229.0733138 482.819146 229.0733138\" />\n    <g\n       style=\"fill:#f5f5f5;fill-rule:nonzero\"\n       id=\"g1028\">\n      <path\n         id=\"path1025\"\n         d=\"M482.8191419 279.3926864C479.592666524 279.392194388 476.866197981 277.000556541 476.445354704 273.801645C476.445354704 273.801645 473.230505899 251.4374794 473.230505899 251.4374794C472.797982936 248.63890068 473.609953106 245.791050628 475.453308273 243.6413637C477.296666236 241.491676492 479.987338137 240.254813734 482.8191419 240.2553966C485.650945663 240.254813734 488.341617564 241.491676492 490.184975527 243.6413637C492.028330694 245.791050907 492.840300864 248.638900959 492.407777901 251.4374794C492.407777901 251.4374794 489.192929096 273.801645 489.192929096 273.801645C488.772085819 277.000556541 486.045617276 279.392194388 482.8191419 279.3926864C482.8191419 279.3926864 482.8191419 279.3926864 482.8191419 279.3926864\" />\n      <circle\n         transform=\"matrix(2.795521,0.000000,0.000000,2.795521,379.384876,229.073314)\"\n         id=\"Oval-6\"\n         cx=\"37\"\n         cy=\"24\"\n         r=\"2\" />\n    </g>\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill:#000000\"\n       id=\"path1033\"\n       d=\"M482.819146 237.4598738C479.197206 237.4548738 475.752096 239.0251338 473.379976 241.7621938C471.007856 244.4992638 469.943196 248.1325738 470.462946 251.7170338C470.462946 251.7170338 473.677786 274.2489338 473.677786 274.2489338C474.298706 278.8222838 478.203826 282.2330438 482.819146 282.2330438C487.434456 282.2330438 491.339586 278.8222838 491.960496 274.2489338C491.960496 274.2489338 495.175346 251.7170338 495.175346 251.7170338C495.695086 248.1325738 494.630426 244.4992638 492.258306 241.7621938C489.886186 239.0251338 486.441086 237.4548738 482.819146 237.4598738C482.819146 237.4598738 482.819146 237.4598738 482.819146 237.4598738M489.640216 250.9342838C489.640216 250.9342838 486.425366 273.4661838 486.425366 273.4661838C486.198426 275.2852138 484.652276 276.6504638 482.819146 276.6504638C480.986006 276.6504638 479.439856 275.2852138 479.212916 273.4661838C479.212916 273.4661838 475.998076 250.9342838 475.998076 250.9342838C475.574606 248.2420538 476.774316 245.5525838 479.060496 244.0690738C481.346686 242.5855638 484.291596 242.5855638 486.577786 244.0690738C488.863976 245.5525838 490.063686 248.2420538 489.640216 250.9342838C489.640216 250.9342838 489.640216 250.9342838 489.640216 250.9342838\" />\n    <path\n       style=\"stroke-width:2.79552078;fill-rule:nonzero;fill:#000000\"\n       id=\"path1035\"\n       d=\"M482.819146 287.7792538C478.187376 287.7792538 474.432576 291.5340438 474.432576 296.1658138C474.432576 300.7975838 478.187376 304.5523738 482.819146 304.5523738C487.450916 304.5523738 491.205706 300.7975838 491.205706 296.1658138C491.205706 291.5340438 487.450916 287.7792538 482.819146 287.7792538C482.819146 287.7792538 482.819146 287.7792538 482.819146 287.7792538M482.819146 298.9613338C481.275216 298.9613338 480.023626 297.7097338 480.023626 296.1658138C480.023626 294.6218838 481.275216 293.3702938 482.819146 293.3702938C484.363066 293.3702938 485.614666 294.6218838 485.614666 296.1658138C485.614666 297.7097338 484.363066 298.9613338 482.819146 298.9613338C482.819146 298.9613338 482.819146 298.9613338 482.819146 298.9613338\" />\n    <path\n       d=\"M524.751956 271.0061238C524.755956 290.9354738 510.732396 308.1144038 491.205706 312.1002738C488.445966 312.6642038 485.635906 312.9452038 482.819146 312.9389338C465.858906 312.9389338 450.568676 302.7223338 444.078276 287.0531138C437.587876 271.3839038 441.175466 253.3478538 453.168166 241.3551538C465.160866 229.3624538 483.196916 225.7748538 498.866136 232.2652638C514.535346 238.7556638 524.751956 254.0458838 524.751956 271.0061238C524.751956 271.0061238 524.751956 271.0061238 524.751956 271.0061238\"\n       id=\"path1711\"\n       style=\"stroke-opacity:1;fill-rule:nonzero;fill-opacity:1;stroke:#000000;stroke-miterlimit:4;stroke-dasharray:none;stroke-width:4.91338587;fill:none\" />\n  </g>\n</svg>\n>\n    ",
  initSource: "options.animateLogo = (svgmap, data) => {\n    let buffer = data.series[0].fields[1].values.buffer;\n    let valueCount = buffer.length\n    let chartData = [];\n    for (let i=0; i<valueCount; i+=(Math.floor(valueCount / 4)-1)) {\n        chartData.push(buffer[i])\n    }\n    let minData = chartData.reduce((acc, val) => {\n        return Math.min(acc, val);\n    });\n    let maxData = 1.05 * chartData.reduce((acc, val) => {\n        return Math.max(acc, val);\n    });\n    let spread = maxData - minData;\n    let iconHeight = svgmap.iconbg.height();\n    let iconY = svgmap.iconbg.y();\n    [svgmap.barOne, svgmap.barTwo, svgmap.barThree, svgmap.barFour].forEach((elem) => {\n        elem.animate(1000).ease('<>').move(elem.x(),  ((iconHeight * (chartData[0] / maxData)) - elem.height())).loop(0, true);    \n    });\n    }\n    ",
  eventSource: "// example of calling a function defined in the init script\noptions.animateLogo(svgmap, data);\n// Here we're going to initialized some variables just to make things less verbose\n// This is the raw buffer from the values field of the DataFrame\nlet buffer = data.series[0].fields[1].values.buffer;\n// here we collect the most recent value from the Data Frame\nlet lastValue = buffer[buffer.length -1]\n// We need to collect the center of the fan as a static value here, otherwise it will cause a feedback loop in the animation.\n// The rotate animation will use the center of the bounding box by default, but of irregular shaped items, like these fan blades\n// the center is not the center axis of rotation\nconst fanX = svgmap.fanBlades.cx();\nconst fanY = svgmap.fanBlades.cy();\n// Here we're defining a state condition to use later in our pipe animation\nlet leakCond = lastValue > 10 && lastValue < 45;\n\n// Here we're simply making the visibility of the alert icon on top of tbe bell dependent on the last value being greater than 50\nsvgmap.alarmIcon.showOn(lastValue > 50); \n// Now we use the same logic to apply an animation to the sound waves around the bell\nsvgmap.alarmRings.animateOn(1500, (lastValue > 50), (elem) => {\n    // this callback is passed the resulting SVG.js runner object which you then chain your animation actions on.\n    // Here, we're simply scaling the dark sound wave lines by 10%, with bidirectional easing and looping with swing\n    elem.ease('<>').transform({scale: 1.1, relative: true}).loop(0, true);\n})\n// Here we animate the fan, using the static variables we create earlier to get closer to the center of the blades\n// if the item we were rotating was centered in the bounding box, we could just call rotate(360) with no axis specificied\nsvgmap.fanBlades.animateOn(1000, (lastValue > 40), (elem) => {\n    elem.ease('-').rotate(360, fanX - 1, fanY +3).loop();\n});\n// these simply hide the elements of the lamp when below the threshold\nsvgmap.lampLens.showOn(lastValue>10);\nsvgmap.lampRays.showOn(lastValue>10);\n// Here we hide the water drop when leakCond is false\nsvgmap.waterDrop.showOn(leakCond)\n// and here we animate the water drop when leakCond is true\nsvgmap.waterDrop.animateOn(2000 - lastValue *20, leakCond, (elem) => {\n    // we're using single direction easing to give a gravity affect, and scaling the drop down as it falls off the screen\n    elem.ease('<').transform({translateY: 1000, scale: 0.00001}).loop();\n})\n",
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
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @monaco-editor/react */ "../node_modules/@monaco-editor/react/lib/index.js");
/* harmony import */ var _monaco_editor_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! emotion */ "emotion");
/* harmony import */ var emotion__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(emotion__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @grafana/runtime */ "@grafana/runtime");
/* harmony import */ var _grafana_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var examples__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! examples */ "./examples.ts");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var cloneArray__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! cloneArray */ "./cloneArray.ts");





 // import { Input, stylesFactory, Icon, HorizontalGroup, Label, VerticalGroup, useTheme } from '@grafana/ui';




var MonacoEditor = function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MonacoEditor, _super);

  function MonacoEditor() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.onSourceChange = function () {
      _this.props.onChange(_this.getEditorValue());
    };

    _this.onEditorDidMount = function (getEditorValue, editorInstance) {
      _this.getEditorValue = getEditorValue;
      _this.editorInstance = editorInstance;
    };

    return _this;
  }

  MonacoEditor.prototype.updateDimensions = function () {
    this.editorInstance.layout();
  };

  MonacoEditor.prototype.render = function () {
    var source = this.props.value;

    if (this.editorInstance) {
      this.editorInstance.layout();
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      onBlur: this.onSourceChange
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_monaco_editor_react__WEBPACK_IMPORTED_MODULE_2___default.a, {
      height: '33vh',
      language: this.props.language,
      theme: this.props.theme,
      value: source,
      editorDidMount: this.onEditorDidMount
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
      onBlur: function onBlur(e) {
        var svgId = e.currentTarget.value;

        _this.setState({
          svgId: svgId
        });

        onChangeItem && index && onChangeItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), {
          svgId: svgId
        }), index);
      },
      css: true
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Label"], null, "Mapped Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["Input"], {
      type: "text",
      name: "mappedName",
      defaultValue: value.mappedName,
      onBlur: function onBlur(e) {
        var mappedName = e.currentTarget.value;

        _this.setState({
          mappedName: mappedName
        });

        onChangeItem && index && onChangeItem(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, value), {
          mappedName: mappedName
        }), index);
      },
      css: true
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
      var newMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.props.value);
      newMappings[index] = updatedMapping;

      _this.props.onChange(newMappings);
    };

    _this.onAdd = function (newMapping) {
      if (newMapping.svgId !== '') {
        var newMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.props.value);
        newMappings.push(newMapping);

        _this.props.onChange(newMappings);
      }
    };

    _this.onDelete = function (index) {
      var newMappings = Object(cloneArray__WEBPACK_IMPORTED_MODULE_7__["default"])(_this.props.value);
      newMappings.splice(index, 1);

      _this.props.onChange(newMappings);
    };

    return _this;
  }

  SvgMappings.prototype.render = function () {
    var _this = this;

    var styles = getStyles(_grafana_runtime__WEBPACK_IMPORTED_MODULE_4__["config"].theme);
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
    description: "Editor for SVG Document, while small tweaks can be made here, we recommend using a dedicated \n        Graphical SVG Editor and simply pasting the resulting XML here",
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
    description: "The User JS Init code is executed once when the panel loads, you can use this to define helper functions that \n        you later reference in the User JS Render code section. The sections have identical execution contexts, and any \n        JS objects you want to reference between them will need to be attached to the options object as properties",
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
var getStyles = Object(_grafana_ui__WEBPACK_IMPORTED_MODULE_6__["stylesFactory"])(function (theme) {
  return {
    colorPicker: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      padding: 0 ", ";\n    "], ["\n      padding: 0 ", ";\n    "])), theme.spacing.sm),
    inputPrefix: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_2 || (templateObject_2 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      display: flex;\n      align-items: center;\n    "], ["\n      display: flex;\n      align-items: center;\n    "]))),
    trashIcon: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_3 || (templateObject_3 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text),
    addIcon: Object(emotion__WEBPACK_IMPORTED_MODULE_3__["css"])(templateObject_4 || (templateObject_4 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "], ["\n      color: ", ";\n      cursor: pointer;\n      //\n      &:hover {\n        color: ", ";\n      }\n    "])), theme.colors.textWeak, theme.colors.text)
  };
});
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