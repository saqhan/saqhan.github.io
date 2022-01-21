function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-second-page-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-second-page.entry.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-second-page.entry.js ***!
    \*************************************************************************/

  /*! exports provided: s_saqhan_second_page */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanSecondPageEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_second_page", function () {
      return SSaqhanSecondPage;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
    /* harmony import */


    var _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-45c9f158.js */
    "./node_modules/s-saqhan-v1/dist/esm/mock-45c9f158.js");

    var sSaqhanSecondPageCss = ".custom-links{cursor:pointer}";

    var SSaqhanSecondPage = /*#__PURE__*/function () {
      function SSaqhanSecondPage(hostRef) {
        _classCallCheck(this, SSaqhanSecondPage);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanSecondPage, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-header-app", {
            menu: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["j"],
            subscribeText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["s"],
            logoUrl: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["l"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("second-title-block", {
            onClickOnLink: function onClickOnLink(event) {
              return _this.clickOnLink(event);
            },
            secondTitle: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["r"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-line-book", {
            onClickOnLink: function onClickOnLink(event) {
              return _this.clickOnLink(event);
            },
            banner: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["o"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-quote-text", {
            quoteText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["q"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-author-info", {
            onClickOnLink: function onClickOnLink(event) {
              return _this.clickOnLink(event);
            },
            author: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["n"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-subsc-banner", {
            subscribeText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["s"],
            subscribeBlockText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["d"],
            onClickOnSubscribeButton: function onClickOnSubscribeButton(event) {
              return _this.clickOnSubscribeButton(event);
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-new-blog", {
            blogPost: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["h"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", {
            footerItems: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["f"],
            footerInfo: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["b"]
          }));
        }
        /**
         *  Клик по кнопке подписаться
         * */

      }, {
        key: "clickOnSubscribeButton",
        value: function clickOnSubscribeButton(_ref) {
          var detail = _ref.detail;
          return console.log(detail);
        }
        /**
         * Клик по кнопке перехода
         * */

      }, {
        key: "clickOnLink",
        value: function clickOnLink(_ref2) {
          var detail = _ref2.detail;
          return console.log(detail);
        }
      }]);

      return SSaqhanSecondPage;
    }();

    SSaqhanSecondPage.style = sSaqhanSecondPageCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-second-page-entry-js-es5.js.map