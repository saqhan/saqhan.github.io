(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-dialogs-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-dialogs.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-dialogs.entry.js ***!
  \********************************************************************/
/*! exports provided: s_adam_dialogs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_dialogs", function() { return SAdamDialogs; });
/* harmony import */ var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-325847e8.js */ "./node_modules/stencil-chat/dist/esm/index-325847e8.js");


const sAdamDialogsCss = "";

const SAdamDialogs = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.toggleChat = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "toggleChat", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog", onClick: () => this.toggleChat.emit({ place: 'showChat', item: this.dialog }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-photo border-radius", style: { backgroundImage: 'url(' + this.dialog.photo + ')' } }), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-message" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-message-caption" }, this.dialog.name), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "dialog-message-text" }, this.dialog.message)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-time" }, this.dialog.time)));
    }
};
SAdamDialogs.style = sAdamDialogsCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-dialogs-entry-js-es2015.js.map