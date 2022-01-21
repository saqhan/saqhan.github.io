function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-card-author-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-author.entry.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-author.entry.js ***!
    \*************************************************************************/

  /*! exports provided: s_saqhan_card_author */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanCardAuthorEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_card_author", function () {
      return SSaqhanCardAuthor;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanCardAuthorCss = ".author-sub{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.follow{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;font-size:12px;-ms-flex-pack:end;justify-content:flex-end;color:#c4c4c4}.soc-acc{margin-left:20px}.sub-auth{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.img{margin-right:30px;width:70px;height:70px;background-size:cover;border-radius:50%}.name{font-weight:600}.info{font-size:12px}";

    var SSaqhanCardAuthor = /*#__PURE__*/function () {
      function SSaqhanCardAuthor(hostRef) {
        _classCallCheck(this, SSaqhanCardAuthor);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanCardAuthor, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row sub-auth"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "author-sub"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img",
            style: {
              backgroundImage: 'url(' + this.author.img + ')'
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "author-info"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name"
          }, this.author.firstName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info"
          }, this.author.position)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "follow"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Follow me on:"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "soc-acc"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "footer-soc"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "template-demo"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            "class": "btn btn-social-icon btn-facebook btn-rounded"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fab fa-facebook-f"
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            type: "button",
            "class": "btn btn-social-icon btn-instagram btn-rounded"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fab fa-twitter"
          }))))))));
        }
      }]);

      return SSaqhanCardAuthor;
    }();

    SSaqhanCardAuthor.style = sSaqhanCardAuthorCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-card-author-entry-js-es5.js.map