(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-chat-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js ***!
  \*****************************************************************/
/*! exports provided: mobile_chat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile_chat", function() { return MobileChat; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-8ce3ba60.js */ "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js");




const mobileChatCss = ".temp.sc-mobile-chat{width:414px;height:708px;overflow:hidden;margin:auto;border:5px solid #4c567d;border-radius:20px;position:absolute;left:0;right:0;-webkit-transform:translate(0, 15%);transform:translate(0, 15%);-webkit-box-shadow:15px 10px 40px 1px #4c567d;box-shadow:15px 10px 40px 1px #4c567d}.temp.sc-mobile-chat .m-chat-dialogs.sc-mobile-chat{height:63vh}.temp.sc-mobile-chat .personal-message.sc-mobile-chat{height:59vh}.sc-mobile-chat::-webkit-scrollbar{width:5px}.sc-mobile-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-mobile-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-mobile-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}";

const MobileChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Выбираем какой контент показывать
         * */
        this.showContent = "dialogs";
        // profile
        // folders
        // contacts
        /**
         * массив данных для диалогов
         * */
        this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        /**
         * массив данных для контактов
         * */
        this.contacts = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["b"];
        /**
         * массив данных личных диалогово
         * */
        this.message = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"];
    }
    /**
     * click to Link
     * */
    clickToLink({ detail }) {
        return detail;
        // console.log(detail);
    }
    /**
     * click to Link
     * */
    clickToDialog({ detail }) {
        return detail;
        // console.log("clickToDialog", detail);
    }
    /**
     * click to Link
     * */
    clickToContact({ detail }) {
        return detail;
        // console.log("clickToContact", detail);
    }
    /**
     * Click to category filter
     * */
    clickToCategory({ detail }) {
        return detail;
        // console.log("clickToCategory", detail);
    }
    /**
     * Поиск контактов
     * */
    searchContact(e) {
        return e;
        // console.log("searchContact", e);
    }
    /**
     * Поиск среди диалогов
     * */
    searchDialogs(e) {
        return e;
        // console.log("searchDialogs", e.detail.detail);
    }
    /**
     * Поиск среди диалогов
     * */
    searchPersonalMessages(e) {
        return e;
        // console.log("searchPersonalMessages", e);
    }
    /**
     * click to add dialog
     * */
    clickToAddDialog() {
        // console.log("clickToAddDialog");
    }
    /**
     * click to click To Show Dialogs
     * */
    clickToShowDialogs() {
        // console.log("clickToShowDialogs");
    }
    /**
     * click to click To Show Contacts
     * */
    clickToShowContacts() {
        // console.log("clickToShowContacts");
    }
    /**
     * click to click To Show MenuBar
     * */
    clickToShowMenuBar() {
        // console.log("clickToShowMenuBar");
    }
    // personal chat
    /**
     * click to click To Show MenuBar
     * */
    clickToUserProfile() {
        // console.log("clickToUserProfile");
    }
    cancelSearchPersonal() {
        // console.log("cancelSearchPersonal");
    }
    render() {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.getContent(this.showContent));
    }
    componentWillLoad() {
        this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
    }
    clickToShowDialogsHandler() {
        // console.log('clickToShowDialogsHandler');
    }
    clickToShowFoldersHandler() {
        // console.log('clickToShowFoldersHandler');
    }
    /**
     *
     * */
    clickOnUserProfile() {
        // console.log('clickOnUserProfile')
    }
    /**
     *
     * */
    createFolderHandler(e) {
        return e;
        // console.log('createFolderHandler', e)
    }
    /**
     * Метод для вывода определенного контента
     * */
    getContent(content) {
        switch (content) {
            case "dialogs":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-dialogs", { onClickToAddDialog: () => this.clickToAddDialog(), onClickToDialog: (item) => this.clickToDialog(item), onClickToCategory: (item) => this.clickToCategory(item), onClickToShowDialogs: () => this.clickToShowDialogs(), onClickToShowContacts: () => this.clickToShowContacts(), onClickToShowMenuBar: () => this.clickToShowMenuBar(), onSearchDialogs: (detail) => this.searchDialogs({ detail }), onCancelSearchPersonal: () => this.cancelSearchPersonal(), categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"], dialogs: this.dialogs }));
            case "personal":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mobile-personal", { onClickToShowDialogs: () => this.clickToShowDialogs(), onClickToUserProfile: () => this.clickToUserProfile(), message: this.message, onSearchPersonalMessages: (detail) => this.searchPersonalMessages({ detail }), onCancelSearchPersonal: () => this.cancelSearchPersonal() }));
            case "profile":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", { theme: "mobile", categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"], onClickToShowDialogs: () => this.clickToShowDialogsHandler(), onClickToShowFolders: () => this.clickToShowFoldersHandler() }));
            case "folders":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", { onClickToUserProfile: () => this.clickOnUserProfile(), onCreateFolder: (e) => this.createFolderHandler(e.detail), dialogs: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"], theme: "mobile" }));
            case "contacts":
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", { contacts: this.contacts, onSearchContact: (detail) => this.searchContact({ detail }), onClickToShowDialogs: () => this.clickToShowDialogs(), onClickToShowContacts: () => this.clickToShowContacts(), onClickToShowMenuBar: () => this.clickToShowMenuBar(), onClickToContact: (item) => this.clickToContact(item) }));
            default:
                return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "no content");
        }
    }
};
MobileChat.style = mobileChatCss;




/***/ })

}]);
//# sourceMappingURL=stencil-mobile-chat-entry-js-es2015.js.map