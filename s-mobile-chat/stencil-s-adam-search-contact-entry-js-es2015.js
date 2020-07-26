(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-search-contact-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-search-contact.entry.js":
/*!***************************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-search-contact.entry.js ***!
  \***************************************************************************/
/*! exports provided: s_adam_search_contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_search_contact", function() { return SAdamSearchContact; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");


const sAdamSearchContactCss = ".search-contact-block{margin-bottom:20px}.search-contact-wrapper{position:relative}.search-contact-wrapper .c-chat{position:absolute;left:15px;font-size:12px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);color:#bacbe3}.search-contact{border:none;padding:10px 40px;width:100%;outline:none}input::-moz-placeholder{color:#979eab}input::-webkit-input-placeholder{color:#979eab}";

const SAdamSearchContact = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-contact-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-contact-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { onInput: (e) => this.searchDialogHandler(e), class: "search-contact", type: "text", placeholder: "Search dialogs" }))));
    }
    /**
     * Фильтрация диалогов
     */
    searchDialogHandler(e) {
        this.searchDialogs.emit(e.target.value);
    }
};
SAdamSearchContact.style = sAdamSearchContactCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-search-contact-entry-js-es2015.js.map