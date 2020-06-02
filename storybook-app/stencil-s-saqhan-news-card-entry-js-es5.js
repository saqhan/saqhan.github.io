function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-news-card-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-news-card.entry.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-news-card.entry.js ***!
    \***********************************************************************/

  /*! exports provided: s_saqhan_news_card */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanNewsCardEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_news_card", function () {
      return SSaqhanNewsCard;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanNewsCardCss = ":host{display:block}";

    var SSaqhanNewsCard = /*#__PURE__*/function () {
      function SSaqhanNewsCard(hostRef) {
        _classCallCheck(this, SSaqhanNewsCard);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanNewsCard, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container list-items"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row item"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-sm-4"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-img",
            style: {
              backgroundImage: 'url(' + this.news.img + ')'
            }
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-title"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "/"
          }, this.news.title)), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-info"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-author"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "/"
          }, this.news.author)), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-date"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "/"
          }, this.news.date)), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "class": "btn btn-primary btn-custom-head"
          }, this.news.category)), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-sub-title"
          }, this.news.subTitle), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "item-link"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, "Keep Readeing ", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-chevron-circle-right"
          }))))));
        }
      }]);

      return SSaqhanNewsCard;
    }();

    SSaqhanNewsCard.style = sSaqhanNewsCardCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-news-card-entry-js-es5.js.map