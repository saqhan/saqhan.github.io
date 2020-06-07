function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-item-news-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-item-news.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-item-news.entry.js ***!
    \***********************************************************************/

  /*! exports provided: s_saqhan_item_news */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanItemNewsEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_item_news", function () {
      return SSaqhanItemNews;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
    /* harmony import */


    var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-ac8aa152.js */
    "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");

    var sSaqhanItemNewsCss = ":host{display:block}";

    var SSaqhanItemNews = /*#__PURE__*/function () {
      function SSaqhanItemNews(hostRef) {
        _classCallCheck(this, SSaqhanItemNews);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanItemNews, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-bread-crumbs", {
            links: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["k"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-list-news", {
            news: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["N"]
          }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", null));
        }
      }]);

      return SSaqhanItemNews;
    }();

    SSaqhanItemNews.style = sSaqhanItemNewsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-item-news-entry-js-es5.js.map