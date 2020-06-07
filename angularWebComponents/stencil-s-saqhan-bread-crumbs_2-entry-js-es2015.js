(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-bread-crumbs_2-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-crumbs_2.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-crumbs_2.entry.js ***!
  \****************************************************************************/
/*! exports provided: s_saqhan_bread_crumbs, s_saqhan_list_news */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_bread_crumbs", function() { return SSaqhanBreadCrumbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_list_news", function() { return SSaqhanListNews; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanBreadCrumbsCss = ":host{display:block}";

const SSaqhanBreadCrumbs = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getLinks(arr) {
        return arr.map((item) => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(BreadLinks, { links: this.getLinks(this.links) })));
    }
};
const BreadLinks = (props) => {
    return props.links.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-bread-card", { links: item })));
    });
};
SSaqhanBreadCrumbs.style = sSaqhanBreadCrumbsCss;

const sSaqhanListNewsCss = ":host{display:block}";

const SSaqhanListNews = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getNews(arr) {
        return arr.map(item => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(NewsItem, { news: this.getNews(this.news) })));
    }
};
const NewsItem = (props) => {
    return (props.news.map(item => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container-fluid" }, " ", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-news-card", { news: item }), " "));
    }));
};
SSaqhanListNews.style = sSaqhanListNewsCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-bread-crumbs_2-entry-js-es2015.js.map