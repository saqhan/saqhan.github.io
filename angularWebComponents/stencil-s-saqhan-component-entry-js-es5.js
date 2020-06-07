function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-component-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-component.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-component.entry.js ***!
    \***********************************************************************/

  /*! exports provided: s_saqhan_component */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanComponentEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_component", function () {
      return SSaqhanComponent;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
    /* harmony import */


    var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-ac8aa152.js */
    "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");

    var sSaqhanComponentCss = "";

    var SSaqhanComponent = /*#__PURE__*/function () {
      function SSaqhanComponent(hostRef) {
        _classCallCheck(this, SSaqhanComponent);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanComponent, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-header-app", {
            menu: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["m"],
            subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"],
            logoUrl: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["l"],
            onClickToLogo: function onClickToLogo(item) {
              console.log("clickOnLogo", item);
            },
            onClickOnMenu: function onClickOnMenu(item) {
              return _this.clickOnMenu(item);
            },
            onClickOnSubscribeButton: function onClickOnSubscribeButton(event) {
              return _this.clickOnSubscribeButton(event);
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-first-slider", {
            onClickOnCategoryNews: function onClickOnCategoryNews(event) {
              return _this.clickOnCategoryNews(event);
            },
            onClickOnNews: function onClickOnNews(event) {
              return _this.clickOnNews(event);
            },
            blogCarouselMock: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["j"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-new-blog", {
            blogPost: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["b"],
            onClickOnNews: function onClickOnNews(event) {
              return _this.clickOnNews(event);
            },
            onClickOnCategoryNews: function onClickOnCategoryNews(event) {
              return _this.clickOnCategoryNews(event);
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-popular-news", {
            popularNews: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["p"],
            bannerPopular: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["i"],
            onClickOnNews: function onClickOnNews(event) {
              return _this.clickOnNews(event);
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-events-blog", {
            onClickOnNews: function onClickOnNews(event) {
              return _this.clickOnNews(event);
            },
            onClickOnCategoryNews: function onClickOnCategoryNews(event) {
              return _this.clickOnCategoryNews(event);
            },
            events: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["h"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-subsc-banner", {
            subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"],
            subscribeBlockText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["c"],
            onClickOnSubscribeButton: function onClickOnSubscribeButton(event) {
              return _this.clickOnSubscribeButton(event);
            }
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", {
            onClickOnMenu: function onClickOnMenu(item) {
              return _this.clickOnMenu(item);
            },
            footerItems: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["f"],
            footerInfo: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["a"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-app", null));
        }
        /**
         *  Клик по меню
         */

      }, {
        key: "clickOnMenu",
        value: function clickOnMenu(_ref) {
          var detail = _ref.detail;
          return console.log(detail);
        }
        /**
         *  Клик по новости
         * */

      }, {
        key: "clickOnNews",
        value: function clickOnNews(_ref2) {
          var detail = _ref2.detail;
          return console.log(detail);
        }
        /**
         *  Клик по категории публикации
         * */

      }, {
        key: "clickOnNewsCategory",
        value: function clickOnNewsCategory(_ref3) {
          var detail = _ref3.detail;
          return console.log(detail);
        }
        /**
         *  Клик по кнопке подписаться
         * */

      }, {
        key: "clickOnSubscribeButton",
        value: function clickOnSubscribeButton(_ref4) {
          var detail = _ref4.detail;
          return console.log(detail);
        }
        /**
         *  Клик по категории
         * */

      }, {
        key: "clickOnCategoryNews",
        value: function clickOnCategoryNews(_ref5) {
          var detail = _ref5.detail;
          return console.log(detail);
        }
      }]);

      return SSaqhanComponent;
    }();

    SSaqhanComponent.style = sSaqhanComponentCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-component-entry-js-es5.js.map