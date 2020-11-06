function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-copying-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/s-adam-copying.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/s-adam-copying.entry.js ***!
    \********************************************************************/

  /*! exports provided: s_adam_copying */

  /***/
  function node_modulesStencilChatDistEsmSAdamCopyingEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_copying", function () {
      return SAdamCopying;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var sAdamCopyingCss = ".copying-file.sc-s-adam-copying{position:absolute;bottom:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#8d8d8d;width:100%;text-align:center}.drop-file.sc-s-adam-copying{text-align:center}.copying-file-wrap.sc-s-adam-copying{height:100%;border:2px solid #bacbe3;position:relative}";

    var SAdamCopying = /*#__PURE__*/function () {
      function SAdamCopying(hostRef) {
        _classCallCheck(this, SAdamCopying);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SAdamCopying, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "copying-file-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "copying-file"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h2", {
            "class": "drop-file"
          }, "Drop filles here"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "to send them as documents")));
        }
      }]);

      return SAdamCopying;
    }();

    SAdamCopying.style = sAdamCopyingCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-copying-entry-js-es5.js.map