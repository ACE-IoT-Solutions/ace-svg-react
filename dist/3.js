(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "../node_modules/geotiff/src/compression/basedecoder.js":
/*!**************************************************************!*\
  !*** ../node_modules/geotiff/src/compression/basedecoder.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseDecoder; });
/* harmony import */ var _predictor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../predictor */ "../node_modules/geotiff/src/predictor.js");


class BaseDecoder {
  async decode(fileDirectory, buffer) {
    const decoded = await this.decodeBlock(buffer);
    const predictor = fileDirectory.Predictor || 1;
    if (predictor !== 1) {
      const isTiled = !fileDirectory.StripOffsets;
      const tileWidth = isTiled ? fileDirectory.TileWidth : fileDirectory.ImageWidth;
      const tileHeight = isTiled ? fileDirectory.TileLength : (
        fileDirectory.RowsPerStrip || fileDirectory.ImageLength
      );
      return Object(_predictor__WEBPACK_IMPORTED_MODULE_0__["applyPredictor"])(
        decoded, predictor, tileWidth, tileHeight, fileDirectory.BitsPerSample,
        fileDirectory.PlanarConfiguration,
      );
    }
    return decoded;
  }
}


/***/ }),

/***/ "../node_modules/geotiff/src/compression/packbits.js":
/*!***********************************************************!*\
  !*** ../node_modules/geotiff/src/compression/packbits.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PackbitsDecoder; });
/* harmony import */ var _basedecoder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basedecoder */ "../node_modules/geotiff/src/compression/basedecoder.js");


class PackbitsDecoder extends _basedecoder__WEBPACK_IMPORTED_MODULE_0__["default"] {
  decodeBlock(buffer) {
    const dataView = new DataView(buffer);
    const out = [];

    for (let i = 0; i < buffer.byteLength; ++i) {
      let header = dataView.getInt8(i);
      if (header < 0) {
        const next = dataView.getUint8(i + 1);
        header = -header;
        for (let j = 0; j <= header; ++j) {
          out.push(next);
        }
        i += 1;
      } else {
        for (let j = 0; j <= header; ++j) {
          out.push(dataView.getUint8(i + j + 1));
        }
        i += header + 1;
      }
    }
    return new Uint8Array(out).buffer;
  }
}


/***/ }),

/***/ "../node_modules/geotiff/src/predictor.js":
/*!************************************************!*\
  !*** ../node_modules/geotiff/src/predictor.js ***!
  \************************************************/
/*! exports provided: applyPredictor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPredictor", function() { return applyPredictor; });
function decodeRowAcc(row, stride) {
  let length = row.length - stride;
  let offset = 0;
  do {
    for (let i = stride; i > 0; i--) {
      row[offset + stride] += row[offset];
      offset++;
    }

    length -= stride;
  } while (length > 0);
}

function decodeRowFloatingPoint(row, stride, bytesPerSample) {
  let index = 0;
  let count = row.length;
  const wc = count / bytesPerSample;

  while (count > stride) {
    for (let i = stride; i > 0; --i) {
      row[index + stride] += row[index];
      ++index;
    }
    count -= stride;
  }

  const copy = row.slice();
  for (let i = 0; i < wc; ++i) {
    for (let b = 0; b < bytesPerSample; ++b) {
      row[(bytesPerSample * i) + b] = copy[((bytesPerSample - b - 1) * wc) + i];
    }
  }
}

function applyPredictor(block, predictor, width, height, bitsPerSample,
  planarConfiguration) {
  if (!predictor || predictor === 1) {
    return block;
  }

  for (let i = 0; i < bitsPerSample.length; ++i) {
    if (bitsPerSample[i] % 8 !== 0) {
      throw new Error('When decoding with predictor, only multiple of 8 bits are supported.');
    }
    if (bitsPerSample[i] !== bitsPerSample[0]) {
      throw new Error('When decoding with predictor, all samples must have the same size.');
    }
  }

  const bytesPerSample = bitsPerSample[0] / 8;
  const stride = planarConfiguration === 2 ? 1 : bitsPerSample.length;

  for (let i = 0; i < height; ++i) {
    // Last strip will be truncated if height % stripHeight != 0
    if (i * stride * width * bytesPerSample >= block.byteLength) {
      break;
    }
    let row;
    if (predictor === 2) { // horizontal prediction
      switch (bitsPerSample[0]) {
        case 8:
          row = new Uint8Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,
          );
          break;
        case 16:
          row = new Uint16Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 2,
          );
          break;
        case 32:
          row = new Uint32Array(
            block, i * stride * width * bytesPerSample, stride * width * bytesPerSample / 4,
          );
          break;
        default:
          throw new Error(`Predictor 2 not allowed with ${bitsPerSample[0]} bits per sample.`);
      }
      decodeRowAcc(row, stride, bytesPerSample);
    } else if (predictor === 3) { // horizontal floating point
      row = new Uint8Array(
        block, i * stride * width * bytesPerSample, stride * width * bytesPerSample,
      );
      decodeRowFloatingPoint(row, stride, bytesPerSample);
    }
  }
  return block;
}


/***/ })

}]);
//# sourceMappingURL=3.js.map