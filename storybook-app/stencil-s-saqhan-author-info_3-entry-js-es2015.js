(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-author-info_3-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_3.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_3.entry.js ***!
  \***************************************************************************/
/*! exports provided: s_saqhan_author_info, s_saqhan_line_book, s_saqhan_quote_text */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_author_info", function() { return SSaqhanAuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_line_book", function() { return SSaqhanLineBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_quote_text", function() { return SSaqhanQuoteText; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanAuthorInfoCss = ".content-text{max-width:625px;margin:auto;width:100%;margin-bottom:15px}";

const SSaqhanAuthorInfo = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getAuthor(arr) {
        return arr.map((item) => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardAuthor, { author: this.getAuthor(this.author) })));
    }
};
const CardAuthor = (props) => {
    return props.author.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "content-text" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("hr", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-author", { author: item })));
    });
};
SSaqhanAuthorInfo.style = sSaqhanAuthorInfoCss;

const sSaqhanLineBookCss = ".banner{width:80%;max-height:320px;background-color:#000;padding:50px 20px;margin:80px 0;color:#fff;border-top-right-radius:5px;border-bottom-right-radius:5px}";

const SSaqhanLineBook = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    getBanner(arr) {
        return arr.map(item => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Banner, { bannerPost: this.getBanner(this.banner) })));
    }
};
const Banner = (props) => {
    return (props.bannerPost.map(item => {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-banner", { bannerPost: item }));
    }));
};
SSaqhanLineBook.style = sSaqhanLineBookCss;

const sSaqhanQuoteTextCss = ".quote-text{padding-left:50px;margin:30px 0;padding-left:50px;font-weight:600;border-left:5px solid #000000}";

const SSaqhanQuoteText = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "quote-text" }, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dignissimos dolore eius eligendi eum excepturi hic iure iusto labore nisi nobis nulla pariatur quo sapiente, suscipit veritatis voluptatem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci assumenda delectus dignissimos dolore eius eligendi eum excepturi hic iure iusto labore nisi nobis nulla pariatur quo sapiente, suscipit veritatis voluptatem.")))));
    }
};
SSaqhanQuoteText.style = sSaqhanQuoteTextCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-author-info_3-entry-js-es2015.js.map