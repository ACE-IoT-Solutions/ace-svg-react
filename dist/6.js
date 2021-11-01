(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "../node_modules/geotiff/src/compression/deflate.js":
/*!**********************************************************!*\
  !*** ../node_modules/geotiff/src/compression/deflate.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DeflateDecoder; });
/* harmony import */ var pako__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pako */ "../node_modules/geotiff/node_modules/pako/dist/pako.esm.mjs");
/* harmony import */ var _basedecoder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basedecoder */ "../node_modules/geotiff/src/compression/basedecoder.js");



class DeflateDecoder extends _basedecoder__WEBPACK_IMPORTED_MODULE_1__["default"] {
  decodeBlock(buffer) {
    return Object(pako__WEBPACK_IMPORTED_MODULE_0__["inflate"])(new Uint8Array(buffer)).buffer;
  }
}


/***/ })

}]);
//# sourceMappingURL=6.js.map