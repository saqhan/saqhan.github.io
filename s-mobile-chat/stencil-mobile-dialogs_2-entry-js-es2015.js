(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-dialogs_2-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/mobile-dialogs_2.entry.js":
/*!**********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mobile-dialogs_2.entry.js ***!
  \**********************************************************************/
/*! exports provided: mobile_dialogs, mobile_personal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile_dialogs", function() { return MobileDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile_personal", function() { return MobilePersonal; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");


const mobileDialogsCss = ".m-chat-wrapper.sc-mobile-dialogs{width:100%;height:100%}.sc-mobile-dialogs::-webkit-scrollbar{width:0px;background:transparent}";

const MobileDialogs = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
        this.searchDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToAddDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToAddDialog", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-chat-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-header", { categories: this.categories }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-dialogs", { dialogs: this.dialogs }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-footer", null)));
    }
};
MobileDialogs.style = mobileDialogsCss;

const mobilePersonalCss = ".personal-wrapper.sc-mobile-personal .personal-footer.sc-mobile-personal .footer-wrapper.sc-mobile-personal{border-radius:15px 15px 0px 0px}.text-wrapper.sc-mobile-personal{width:75%}.info-wrapper.sc-mobile-personal{width:25%;min-width:55px;text-align:right}.header-nav.sc-mobile-personal div.sc-mobile-personal{cursor:pointer}.user-name-persona.sc-mobile-personal{cursor:pointer}.user-mess-wrapper.sc-mobile-personal,.admin-mess-wrapper.sc-mobile-personal{margin:15px 0}.personal-message.sc-mobile-personal{padding:20px 0px;height:calc(100vh - 185px);overflow:auto}.user-mess-wrapp.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.user-mess-wrapp.sc-mobile-personal .img.sc-mobile-personal{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.user-mess.sc-mobile-personal{max-width:250px;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between}.admin-mess-wrapp.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess.sc-mobile-personal{max-width:250px;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;display:-ms-flexbox;display:flex}.personal-mess-date.sc-mobile-personal{font-size:10px;margin-left:5px}.user-mess.sc-mobile-personal .check.sc-mobile-personal{font-size:10px;margin-left:5px}.admin-mess-wrapper.sc-mobile-personal{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess.sc-mobile-personal .check.sc-mobile-personal{font-size:10px;margin-left:5px}.admin-mess-wrapper.sc-mobile-personal .mess-img.sc-mobile-personal{width:70%;height:150px;border-top-left-radius:20px;border-top-right-radius:0px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.user-mess-wrapper.sc-mobile-personal .mess-img.sc-mobile-personal{width:70%;height:150px;border-top-left-radius:0px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.mess-img-admin.sc-mobile-personal .check.sc-mobile-personal{position:relative;top:80%;left:92%;font-size:10px;color:#fff}.mess-img.sc-mobile-personal .check.sc-mobile-personal{position:relative;top:80%;left:90%;font-size:10px;color:#fff}";

const MobilePersonal = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", { message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", { theme: "mobile", message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", { theme: "mobile" })));
    }
};
MobilePersonal.style = mobilePersonalCss;




/***/ })

}]);
//# sourceMappingURL=stencil-mobile-dialogs_2-entry-js-es2015.js.map