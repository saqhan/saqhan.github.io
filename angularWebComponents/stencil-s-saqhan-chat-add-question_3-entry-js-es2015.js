(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-add-question_3-entry-js"],{

/***/ "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-add-question_3.entry.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-add-question_3.entry.js ***!
  \*********************************************************************************/
/*! exports provided: s_saqhan_chat_add_question, s_saqhan_chat_main_user, s_saqhan_chat_user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_add_question", function() { return SSaqhanChatAddQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_main_user", function() { return SSaqhanChatMainUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user", function() { return SSaqhanChatUser; });
/* harmony import */ var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-7a106f9f.js */ "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");


const sSaqhanChatAddQuestionCss = ".btn-new-ask{text-align:center;margin-top:10px}.btn-add-question{border-radius:30px;padding:10px 30px;border:none;background-color:#72b94d;color:#ffffff;text-transform:uppercase;font-size:12px;outline:none;letter-spacing:1px}";

const SSaqhanChatAddQuestion = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-wrap" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-ask" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn-add-question" }, "\u0417\u0430\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u044B\u0439 \u0432\u043E\u043F\u0440\u043E\u0441"))));
    }
};
SSaqhanChatAddQuestion.style = sSaqhanChatAddQuestionCss;

const sSaqhanChatMainUserCss = ".main-wrapper{width:100%;padding:15px 0px;border-bottom:1px solid #ececec}";

const SSaqhanChatMainUser = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    // getUserMain(arr): any[] {
    //   return arr.map((item) => item.main);
    // }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-wrapper" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MainUserMessage, { main: this.mainUser })));
    }
};
const MainUserMessage = (props) => {
    return props.main.map((item) => {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-main-user-card", { main: item });
    });
};
SSaqhanChatMainUser.style = sSaqhanChatMainUserCss;

const sSaqhanChatUserCss = "";

const SSaqhanChatUser = class {
    constructor(hostRef) {
        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    // getUser(arr): any[] {
    //   return arr.map((item) => item.main);
    // }
    render() {
        return (Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wrapper" }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserMessage, { user: this.messages })));
    }
};
const UserMessage = (props) => {
    return props.user.map(item => {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-user-card", { user: item });
    });
};
SSaqhanChatUser.style = sSaqhanChatUserCss;




/***/ })

}]);
//# sourceMappingURL=stencil-s-saqhan-chat-add-question_3-entry-js-es2015.js.map