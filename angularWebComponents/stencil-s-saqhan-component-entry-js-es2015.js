(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-component-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-component.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-component.entry.js ***!
  \***********************************************************************/
/*! exports provided: s_saqhan_component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_component", function() { return SSaqhanComponent; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
/* harmony import */ var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock-ac8aa152.js */ "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");



const sSaqhanComponentCss = "";

const SSaqhanComponent = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-header-app", { menu: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["m"], subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"], logoUrl: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["l"], onClickToLogo: (item) => {
                console.log("clickOnLogo", item);
            }, onClickOnMenu: (item) => this.clickOnMenu(item), onClickOnSubscribeButton: (event) => this.clickOnSubscribeButton(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-first-slider", { onClickOnCategoryNews: (event) => this.clickOnCategoryNews(event), onClickOnNews: (event) => this.clickOnNews(event), blogCarouselMock: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["j"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-new-blog", { blogPost: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["b"], onClickOnNews: (event) => this.clickOnNews(event), onClickOnCategoryNews: (event) => this.clickOnCategoryNews(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-popular-news", { popularNews: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["p"], bannerPopular: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["i"], onClickOnNews: (event) => this.clickOnNews(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-events-blog", { onClickOnNews: (event) => this.clickOnNews(event), onClickOnCategoryNews: (event) => this.clickOnCategoryNews(event), events: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["h"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-subsc-banner", { subscribeText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["s"], subscribeBlockText: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["c"], onClickOnSubscribeButton: (event) => this.clickOnSubscribeButton(event) }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-app-footer", { onClickOnMenu: (item) => this.clickOnMenu(item), footerItems: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["f"], footerInfo: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["a"] }), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-app", null)));
    }
    /**
     *  Клик по меню
     */
    clickOnMenu({ detail }) {
        return console.log(detail);
    }
    /**
     *  Клик по новости
     * */
    clickOnNews({ detail }) {
        return console.log(detail);
    }
    /**
     *  Клик по категории публикации
     * */
    clickOnNewsCategory({ detail }) {
        return console.log(detail);
    }
    /**
     *  Клик по кнопке подписаться
     * */
    clickOnSubscribeButton({ detail }) {
        return console.log(detail);
    }
    /**
     *  Клик по категории
     * */
    clickOnCategoryNews({ detail }) {
        return console.log(detail);
    }
};
SSaqhanComponent.style = sSaqhanComponentCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-component-entry-js-es2015.js.map