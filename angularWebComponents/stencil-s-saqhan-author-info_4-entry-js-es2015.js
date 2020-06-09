(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-author-info_4-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_4.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_4.entry.js ***!
  \***************************************************************************/
/*! exports provided: s_saqhan_author_info, s_saqhan_line_book, s_saqhan_quote_text, second_title_block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_author_info", function() { return SSaqhanAuthorInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_line_book", function() { return SSaqhanLineBook; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_quote_text", function() { return SSaqhanQuoteText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "second_title_block", function() { return SecondTitleBlock; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanAuthorInfoCss = ".content-text{max-width:625px;margin:auto;width:100%;margin-bottom:15px}";

const SSaqhanAuthorInfo = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
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
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
    }
    /**
     * Функция для получения данных
     * */
    getBanner(arr) {
        return arr.map((item) => item);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Banner, { bannerPost: this.getBanner(this.banner) })));
    }
};
/**
 * компонентная функция для разбивки массива
 * */
const Banner = (props) => {
    return props.bannerPost.map((item) => {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-card-banner", { bannerPost: item })));
    });
};
SSaqhanLineBook.style = sSaqhanLineBookCss;

const sSaqhanQuoteTextCss = ".quote-text{padding-left:50px;margin:30px 0;padding-left:50px;font-weight:600;border-left:5px solid #000000}";

const SSaqhanQuoteText = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " col " }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "quote-text" }, this.quoteText.text)))));
    }
};
SSaqhanQuoteText.style = sSaqhanQuoteTextCss;

const secondTitleBlockCss = ".title-wrapper{margin:50px 0px}.header-img-title{width:80%;margin:auto;min-height:500px;background-color:red;background-size:cover;background-position:center}.text-title{width:70%;margin:50px auto;text-align:justify}.second-category{color:#0f91e3;font-size:14px;font-weight:500;text-align:center;margin-bottom:30px}.second-title-news{font-size:24px;width:50%;margin:auto;text-align:center;font-weight:700;margin-bottom:30px}.second-title-author{font-size:13px;margin-bottom:30px;text-align:center}.second-title-author .name{font-weight:700}.second-title-author .date{color:#ccc}";

const SecondTitleBlock = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnLink = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnLink", 7);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container title-wrapper" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-category custom-links ", onClick: () => this.clickOnLink.emit({ place: 'category', item: this.secondTitle }) }, this.secondTitle.category), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-title-news custom-links", onClick: () => this.clickOnLink.emit({ place: 'title', item: this.secondTitle }) }, this.secondTitle.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "second-title-author" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name custom-links", onClick: () => this.clickOnLink.emit({ place: 'name', item: this.secondTitle }) }, this.secondTitle.authorName), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "date custom-links", onClick: () => this.clickOnLink.emit({ place: 'date', item: this.secondTitle }) }, this.secondTitle.date)))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-img-title custom-links", onClick: () => this.clickOnLink.emit({ place: 'img', item: this.secondTitle }), style: { backgroundImage: `url(${this.secondTitle.img})` } }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-title" }, this.secondTitle.text)))));
    }
};
SecondTitleBlock.style = secondTitleBlockCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-author-info_4-entry-js-es2015.js.map