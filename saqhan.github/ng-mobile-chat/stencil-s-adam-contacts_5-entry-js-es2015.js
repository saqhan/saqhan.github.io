(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-contacts_5-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-contacts_5.entry.js":
/*!***********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-contacts_5.entry.js ***!
  \***********************************************************************/
/*! exports provided: s_adam_contacts, s_adam_dialogs, s_adam_direct, s_adam_navigate, s_adam_no_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_contacts", function() { return SAdamContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_dialogs", function() { return SAdamDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_direct", function() { return SAdamDirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_navigate", function() { return SAdamNavigate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_no_chat", function() { return SAdamNoChat; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");



const sAdamContactsCss = ".contacts-column.sc-s-adam-contacts{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.col-3.sc-s-adam-contacts{padding:0 !important}.contacts.sc-s-adam-contacts{overflow-y:auto;height:calc(100vh - 100px);padding-bottom:20px}.sc-s-adam-contacts::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamContacts = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = "mobile";
    }
    /**
     * при изменении входящих контактов фильтрует данные заново
     * */
    watchContactsHandler(newValue) {
        this.filterContacts(this.lastSearchValue, newValue);
    }
    componentWillRender() {
        this.filterContacts(this.lastSearchValue);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-column" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", { theme: this.theme, onSearchContact: (e) => this.filterContacts(e.detail) }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts" }, this.contactsFiltered.map((dialog) => {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", { theme: this.theme, contact: dialog }));
        }))));
    }
    /**
     *
     * */
    filterContacts(value, allContacts = this.contacts) {
        this.lastSearchValue = value;
        if (!this.disableInnerSearchContactState) {
            this.contactsFiltered = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterContactBySearchValue"])(value, allContacts);
        }
    }
    static get watchers() { return {
        "contacts": ["watchContactsHandler"]
    }; }
};
SAdamContacts.style = sAdamContactsCss;

const sAdamDialogsCss = ".col-3.sc-s-adam-dialogs{padding:0 !important}.contacts-column.sc-s-adam-dialogs{background-color:#f7f8f9;padding:20px 20px 0 20px;height:100vh}.contacts.sc-s-adam-dialogs{overflow-y:auto;height:calc(100vh - 129px);padding-bottom:20px}.dialog.sc-s-adam-dialogs{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin:30px 0;padding:20px 10px;cursor:pointer}.dialog.sc-s-adam-dialogs:hover{background-color:white}.dialog.sc-s-adam-dialogs:active{background-color:white}.dialog-photo.sc-s-adam-dialogs{width:40px;height:40px;background-size:cover;background-position:center;margin-right:15px}.dialog-message-caption.sc-s-adam-dialogs{font-weight:700;font-size:13px}.dialog-message-text.sc-s-adam-dialogs{font-size:12px;color:gray}.message-time.sc-s-adam-dialogs{font-size:10px;margin-left:auto;color:lightgray}.sc-s-adam-dialogs::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamDialogs = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив с элементами диалога
         */
        this.dialogs = [];
        /**
         * Тема для модульного/мобильного чата
         * */
        this.theme = "mobile";
        /**
         * массив категорий диалогов
         */
        this.categories = [];
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-column" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", { theme: "comp" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", { categories: this.categories }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts" }, this.dialogs.map((dialog) => {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", { theme: "comp", mess: dialog });
        }))));
    }
};
SAdamDialogs.style = sAdamDialogsCss;

const sAdamDirectCss = ".chat-messages.sc-s-adam-direct{padding:40px 20px;overflow-y:auto;height:calc(100vh - 168px);position:relative}.sc-s-adam-direct::-webkit-scrollbar{width:0px;background:transparent}";

const SAdamDirect = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Личный диалог
         */
        this.message = [];
        this.visibleUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleUserProfile", 7);
        this.searchPersonalMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessage", 7);
    }
    /**
     * меняет статус (присутстия собеседников или контакта) в чате
     * */
    // @Method() async updateChatPresenceState(item: ChatUserPresenceState) {
    //   this.chatPresenceState = item;
    // }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "direct-comp" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-personal-header", { chatPresenceState: this.chatPresenceState, chatActionState: this.chatActionState }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-messages" }, this.message.map((message) => {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", { message: message });
        })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", null)));
    }
};
SAdamDirect.style = sAdamDirectCss;

const sAdamNavigateCss = ".nav-column.sc-s-adam-navigate{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;padding-top:20px}.logo.sc-s-adam-navigate{width:50px;height:50px;background-size:cover;background-position:center;margin-bottom:50px;border-radius:100%;cursor:pointer}";

const SAdamNavigate = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "nav-column" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "logo border-radius", style: { backgroundImage: 'url(' + this.logo.logo + ')' } }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-nav-item", null)));
    }
};
SAdamNavigate.style = sAdamNavigateCss;

const sAdamNoChatCss = ".select-chat.sc-s-adam-no-chat{position:absolute;bottom:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);color:#8d8d8d}";

const SAdamNoChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "select-chat" }, "Please select a chat"));
    }
};
SAdamNoChat.style = sAdamNoChatCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-contacts_5-entry-js-es2015.js.map