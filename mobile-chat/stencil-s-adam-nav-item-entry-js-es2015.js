(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-nav-item-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-nav-item.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-nav-item.entry.js ***!
  \*********************************************************************/
/*! exports provided: s_adam_nav_item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_nav_item", function() { return SAdamNavItem; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");


const sAdamNavItemCss = ".c-chat.sc-s-adam-nav-item{color:#bacbe3}.hover-link.sc-s-adam-nav-item:hover{color:#6328f8;cursor:pointer}.hover-link.sc-s-adam-nav-item:active{color:#6328f8}.nav-item.sc-s-adam-nav-item{margin-bottom:20px}.nav-item-wrapper.sc-s-adam-nav-item{text-align:center}";

const SAdamNavItem = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { onClick: () => this.visibleContactsHandler(), class: "c-chat c-chat-comment-alt hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-shopping-bag hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-cart-arrow-down hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-calendar-alt hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav -item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-cog hover-link" }))));
    }
    /**
     * Показать личный профиль юзера
     */
    visibleContactsHandler() {
        this.visibleContacts.emit();
    }
};
SAdamNavItem.style = sAdamNavItemCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-nav-item-entry-js-es2015.js.map