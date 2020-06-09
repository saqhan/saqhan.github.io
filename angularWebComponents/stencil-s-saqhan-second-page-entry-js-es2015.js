(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-second-page-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-second-page.entry.js":
/*!*************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-second-page.entry.js ***!
  \*************************************************************************/
/*! exports provided: s_saqhan_second_page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_second_page", function() { return SSaqhanSecondPage; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
/* harmony import */ var _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-45c9f158.js */ "./node_modules/s-saqhan-v1/dist/esm/mock-45c9f158.js");



const sSaqhanSecondPageCss = ".custom-links{cursor:pointer}";

const SSaqhanSecondPage = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-header-app", { menu: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["j"], subscribeText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["s"], logoUrl: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["l"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("second-title-block", { onClickOnLink: (event) => this.clickOnLink(event), secondTitle: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["r"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-line-book", { onClickOnLink: (event) => this.clickOnLink(event), banner: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["o"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-quote-text", { quoteText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["q"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-author-info", { onClickOnLink: (event) => this.clickOnLink(event), author: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["n"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-subsc-banner", { subscribeText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["s"], subscribeBlockText: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["d"], onClickOnSubscribeButton: (event) => this.clickOnSubscribeButton(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-new-blog", { blogPost: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["h"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", { footerItems: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["f"], footerInfo: _mock_45c9f158_js__WEBPACK_IMPORTED_MODULE_1__["b"] })));
    }
    /**
     *  Клик по кнопке подписаться
     * */
    clickOnSubscribeButton({ detail }) {
        return console.log(detail);
    }
    /**
     * Клик по кнопке перехода
     * */
    clickOnLink({ detail }) {
        return console.log(detail);
    }
};
SSaqhanSecondPage.style = sSaqhanSecondPageCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-second-page-entry-js-es2015.js.map