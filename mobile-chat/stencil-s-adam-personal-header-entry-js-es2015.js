(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-personal-header-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-personal-header.entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-personal-header.entry.js ***!
  \****************************************************************************/
/*! exports provided: s_adam_personal_header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_personal_header", function() { return SAdamPersonalHeader; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");



const sAdamPersonalHeaderCss = ".header.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;font-size:14px;padding:20px;height:80px;border-bottom:1px solid #f7f8f9}.header-search-block.sc-s-adam-personal-header{padding:20px;border-bottom:1px solid #f7f8f9;height:80px}.user.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.user-name.sc-s-adam-personal-header{font-weight:700}.online-marker.sc-s-adam-personal-header,.offline-marker.sc-s-adam-personal-header{width:10px;height:10px;border-radius:100%;background-color:#5dc969;margin-left:5px}.offline-marker.sc-s-adam-personal-header{background-color:#ccc}.search-message.sc-s-adam-personal-header,.settings.sc-s-adam-personal-header{color:#bacbe3;cursor:pointer}.search-message-wrapper.sc-s-adam-personal-header{width:100%;position:relative}.search-message-wrapper.sc-s-adam-personal-header input.sc-s-adam-personal-header{padding:10px 40px;width:100%;margin:0 auto;border:none;background-color:#f7f8f9;outline:none}.search-message-wrapper.sc-s-adam-personal-header .c-chat.sc-s-adam-personal-header{position:absolute;left:15px;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer}.c-chat.sc-s-adam-personal-header{color:#bacbe3}.hover-link.sc-s-adam-personal-header:hover{color:#6328f8}.hover-link.sc-s-adam-personal-header:active{color:#6328f8}.nav-item.sc-s-adam-personal-header{margin-bottom:20px;cursor:pointer}.user-name-wrapper.sc-s-adam-personal-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;line-height:1}";

const SAdamPersonalHeader = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Стейт для переключения окна поиска сообщений
         */
        this.searchVisible = false;
        this.visibleUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
        this.resetMessagesFilter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "resetMessagesFilter", 7);
    }
    render() {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.toggleHeader());
    }
    /**
     * Переключатель стейта
     */
    toggleSearchVisible() {
        this.searchVisible = !this.searchVisible;
        this.resetMessagesFilter.emit();
    }
    /**
     * Переключение шапки в личной переписке
     */
    toggleHeader() {
        if (this.searchVisible === false) {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message", onClick: () => this.toggleSearchVisible() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search hover-link" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, this.getNameUser()), this.chatPresenceState === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online
                ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "online-marker" })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "offline-marker" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", { chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "settings", onClick: () => this.visibleUserProfileHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-cog hover-link" }))));
        }
        else {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-search-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-message-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left hover-link", onClick: () => this.toggleSearchVisible() }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { onInput: (e) => this.searchPersonalMessageHandler(e), type: "text", placeholder: "Search messages" }))));
        }
    }
    /**
     * Вывод имени юзера в шапке личной переписки
     * */
    getNameUser() {
        var _a;
        return (_a = this.openedDialog) === null || _a === void 0 ? void 0 : _a.name;
        // let name = "";
        //
        // this.message.forEach((item) => {
        //   if (name.indexOf(item.sender.name) === -1) {
        //     name = item.sender.name;
        //   }
        // });
        //
        // return name;
    }
    /**
     * Показать личный профиль юзера
     */
    visibleUserProfileHandler() {
        this.visibleUserProfile.emit();
    }
    /**
     * Поиск сообщений в личной переписке
     * @param e
     */
    searchPersonalMessageHandler(e) {
        this.searchPersonalMessage.emit(e.target.value);
    }
};
SAdamPersonalHeader.style = sAdamPersonalHeaderCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-personal-header-entry-js-es2015.js.map