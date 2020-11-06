(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-chat-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/s-adam-chat.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/s-adam-chat.entry.js ***!
  \*****************************************************************/
/*! exports provided: s_adam_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_chat", function() { return SAdamChat; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-8ce3ba60.js */ "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js");




const sAdamChatCss = ".col-1.sc-s-adam-chat,.col.sc-s-adam-chat,.col-3.sc-s-adam-chat{padding:0 !important}.container.sc-s-adam-chat{max-width:1280px;width:100%}.main-wrapper.sc-s-adam-chat{background-color:#ebeff6;height:100vh;position:relative}main.sc-s-adam-chat{height:95vh;overflow:hidden;position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);width:100%}.chat.sc-s-adam-chat{position:relative;height:95vh}.white-col.sc-s-adam-chat{background-color:#fdfdfd}";

const SAdamChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *Стейт для переключения на личный чат
         */
        this.dialogVisible = "noChat";
        /**
         * Стейт для показа профиля пользователя
         */
        this.profileVisible = false;
        /**
         * Стейт для показа контактов или диалогов
         */
        this.contactsVisible = true;
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("main", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "container" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "row" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-1 white-col" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-navigate", { onVisibleContacts: () => this.visibleContacts(), logo: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["l"] })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, this.showContacts(this.contactsVisible)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col white-col" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "chat" }, this.showChat(this.dialogVisible))), this.showProfile(this.profileVisible))))));
    }
    /**
     * Метод, который выводит необходимый чат
     * @param content
     */
    showChat(content) {
        switch (content) {
            case "showChat":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-direct", { onVisibleUserProfile: () => {
                        this.visibleProfile();
                    }, onSearchPersonalMessage: () => this.searchPersonalMessages(), message: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"] }));
            case "noChat":
                return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-no-chat", null);
            //Компонент с версткой копирования
            // <s-adam-copying></s-adam-copying>
        }
    }
    showProfile(item) {
        if (item === true) {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "col-3" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", { onClickToUserProfile: () => this.clickOnUserProfile(), onCreateFolder: (e) => this.createFolderHandler(e.detail), dialogs: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"], theme: "comp" })));
        }
        else {
            return "";
        }
    }
    createFolderHandler(item) {
        console.log("createFolderHandler", item);
    }
    /**
     * Показать контакты или диалоги
     * @param item
     */
    showContacts(item) {
        if (item === true) {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-dialogs", { onSearchDialogs: () => this.searchDialogs(), onClickToDialog: () => {
                    this.toggleChat();
                }, dialogs: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"], categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"], onClickToCategory: () => this.clickToCategory() }));
        }
        else {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-contacts", { theme: "comp", contacts: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["b"], disableInnerSearchContactState: this.disableInnerSearchContactState }));
        }
    }
    /**
     *
     */
    clickOnUserProfile() {
    }
    createFolder() {
    }
    /**
     * click to Link
     * */
    clickToLink() {
    }
    /**
     *
     */
    searchDialogs() {
    }
    /**
     *
     */
    searchPersonalMessages() {
    }
    /**
     *
     * @param detail
     */
    clickToCategory() {
    }
    /**
     * Метод для переключения на личный чат
     * @param detail
     */
    toggleChat() {
        this.dialogVisible = "showChat";
    }
    /**
     * Метод для открытия и закрытия личного профиля
     * @param detail
     */
    visibleProfile() {
        this.profileVisible = !this.profileVisible;
    }
    /**
     * Метод для переключения на контакты
     */
    visibleContacts() {
        this.contactsVisible = !this.contactsVisible;
    }
    /**
     *
     */
    clickToShowFoldersHandler() {
    }
};
SAdamChat.style = sAdamChatCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-adam-chat-entry-js-es2015.js.map