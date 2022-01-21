function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-bread-crumbs_2-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-crumbs_2.entry.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-crumbs_2.entry.js ***!
    \****************************************************************************/

  /*! exports provided: s_saqhan_bread_crumbs, s_saqhan_list_news */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanBreadCrumbs_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_bread_crumbs", function () {
      return SSaqhanBreadCrumbs;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_list_news", function () {
      return SSaqhanListNews;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanBreadCrumbsCss = ":host{display:block}";

    var SSaqhanBreadCrumbs = /*#__PURE__*/function () {
      function SSaqhanBreadCrumbs(hostRef) {
        _classCallCheck(this, SSaqhanBreadCrumbs);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanBreadCrumbs, [{
        key: "getLinks",
        value: function getLinks(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(BreadLinks, {
            links: this.getLinks(this.links)
          }));
        }
      }]);

      return SSaqhanBreadCrumbs;
    }();

    var BreadLinks = function BreadLinks(props) {
      return props.links.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "container"
        }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-bread-card", {
          links: item
        }));
      });
    };

    SSaqhanBreadCrumbs.style = sSaqhanBreadCrumbsCss;
    var sSaqhanListNewsCss = ":host{display:block}";

    var SSaqhanListNews = /*#__PURE__*/function () {
      function SSaqhanListNews(hostRef) {
        _classCallCheck(this, SSaqhanListNews);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanListNews, [{
        key: "getNews",
        value: function getNews(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewsItem, {
            news: this.getNews(this.news)
          }));
        }
      }]);

      return SSaqhanListNews;
    }();

    var NewsItem = function NewsItem(props) {
      return props.news.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "container-fluid"
        }, " ", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-news-card", {
          news: item
        }), " ");
      });
    };

    SSaqhanListNews.style = sSaqhanListNewsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-bread-crumbs_2-entry-js-es5.js.map