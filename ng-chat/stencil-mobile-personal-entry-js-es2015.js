(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-personal-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/mobile-personal.entry.js":
/*!*********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mobile-personal.entry.js ***!
  \*********************************************************************/
/*! exports provided: mobile_personal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobile_personal", function() { return MobilePersonal; });
/* harmony import */ var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-325847e8.js */ "./node_modules/stencil-chat/dist/esm/index-325847e8.js");
/* harmony import */ var _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common.interface-2aa0c474.js */ "./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js");



const mobilePersonalCss = ".personal-header{padding:20px 20px 20px;border-bottom:1px solid #ccc}.header-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-nav span i{color:#979eab}.header-nav .user-name-personal{font-weight:600;color:#4c567d}.users-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;width:60%;margin:auto;margin-top:15px}.img-user-other{text-align:center;border-radius:50%}.img-user-other .img{width:30px;height:30px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.img-user-current{text-align:center;border:2px solid #4c567d;border-radius:50%}.img-user-current .img{width:35px;height:35px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.text-wrapper{width:75%}.info-wrapper{width:25%;min-width:55px;text-align:right}.user-mess-wrapper,.admin-mess-wrapper{margin:15px 0}.personal-message{padding:20px;height:calc(100vh - 188px);overflow:auto}.user-mess-wrapp{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.user-mess-wrapp .img{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.user-mess{max-width:250px;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between}.admin-mess-wrapp{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess{max-width:250px;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;display:-ms-flexbox;display:flex}.personal-mess-date{font-size:10px;margin-left:5px}.user-mess .check{font-size:10px;margin-left:5px}.admin-mess-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.admin-mess .check{font-size:10px;margin-left:5px}.admin-mess-wrapper .mess-img{width:70%;height:150px;border-top-left-radius:20px;border-top-right-radius:0px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.user-mess-wrapper .mess-img{width:70%;height:150px;border-top-left-radius:0px;border-top-right-radius:20px;border-bottom-right-radius:20px;border-bottom-left-radius:20px;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-position:center;background-size:cover}.mess-img-admin .check{position:relative;top:80%;left:92%;font-size:10px;color:#fff}.mess-img .check{position:relative;top:80%;left:90%;font-size:10px;color:#fff}";

const MobilePersonal = class {
    constructor(hostRef) {
        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
    }
    render() {
        return (Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-wrapper" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-header" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-nav" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "custom-link", onClick: () => this.clickToLink.emit({ place: "showDialogs" }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-arrow-left" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-name-personal", onClick: () => this.clickToLink.emit({ place: "user-name-personal" }) }, this.getNameUser()), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "custom-link", onClick: () => this.clickToLink.emit({ place: "showDetails" }) }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "fas fa-ellipsis-h" }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "users-nav" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-other" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-other" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-current" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-other" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online" })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-other" }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online" })))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-message" }, this.createMessagesElements(this.messageMock)), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", null)));
    }
    /**
     * Создаем сообщение которое отправлено/прислано и сообщение по центру
     * */
    createMessagesElements(array) {
        return array.map((item) => {
            switch (item.direction) {
                //Если это сообщение для меня
                case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["a"].toMe:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mess-to-me", { message: item });
                //Если это сообщение от меня
                case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["a"].fromMe:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("mess-from-me", { message: item });
                // Сообщение по центру
                case _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_1__["a"].center:
                    return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, "Today");
            }
        });
    }
    /**
     * get name user
     * */
    getNameUser() {
        let name = "";
        this.messageMock.forEach((item) => {
            if (name.indexOf(item.sender.name) === -1) {
                name = item.sender.name;
            }
        });
        return name;
    }
};
MobilePersonal.style = mobilePersonalCss;




/***/ })

}]);
//# sourceMappingURL=stencil-mobile-personal-entry-js-es2015.js.map