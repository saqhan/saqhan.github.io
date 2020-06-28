(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js":
/*!*************************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js ***!
  \*************************************************************************/
/*! exports provided: M, a */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MessageTypeEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDirectionEnum; });
/**
 *
 * */
var MessageDirectionEnum;
(function (MessageDirectionEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    MessageDirectionEnum[MessageDirectionEnum["toMe"] = 0] = "toMe";
    /**
     * сообщения написал я
     * */
    MessageDirectionEnum[MessageDirectionEnum["fromMe"] = 1] = "fromMe";
    /**
     * сообщения которое будет отображаться в центре
     * */
    MessageDirectionEnum[MessageDirectionEnum["center"] = 2] = "center";
})(MessageDirectionEnum || (MessageDirectionEnum = {}));
/**
 *
 * */
var MessageTypeEnum;
(function (MessageTypeEnum) {
    /**
     * сообщения написал кто то другой, и получено мною
     * */
    MessageTypeEnum["text"] = "text";
    /**
     * аудио сообщения записанное самим пользователем
     * */
    MessageTypeEnum["liveAudio"] = "live-audio";
    /**
     * аудио сообщение любое которое не записано самим пользователем
     * */
    MessageTypeEnum["audio"] = "audio";
    /**
     * фотка сделанная на устройстве пользователя и отправленная сразу
     * */
    MessageTypeEnum["liveImage"] = "live-image";
    /**
     * фотка из устройства отправителя
     * */
    MessageTypeEnum["image"] = "image";
    /**
     * видео сделанная на устройстве пользователя и отправленная сразу
     * */
    MessageTypeEnum["liveVideo"] = "live-video";
    /**
     * видео из устройства отправителя
     * */
    MessageTypeEnum["video"] = "video";
    /**
     * файл из устройства отправителя
     * */
    MessageTypeEnum["file"] = "file";
})(MessageTypeEnum || (MessageTypeEnum = {}));




/***/ }),

/***/ "./node_modules/stencil-chat/dist/esm/mock-ba054b7a.js":
/*!*************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mock-ba054b7a.js ***!
  \*************************************************************/
/*! exports provided: M, c, d, l, n */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MessageMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return logo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return navItems; });
/* harmony import */ var _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common.interface-2aa0c474.js */ "./node_modules/stencil-chat/dist/esm/common.interface-2aa0c474.js");


const dialogs = [
    {
        id: 1,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 2,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "generate lazy started",
        time: {
            created: new Date(),
        },
        category: "family",
        online: true,
    },
    {
        id: 3,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "generate lazy finished in 141 ms",
        time: {
            created: new Date(),
        },
        category: "friends",
        online: false,
    },
    {
        id: 4,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "Hello everyone!!!",
        time: {
            created: new Date(),
        },
        category: "friends",
        online: true,
    },
    {
        id: 5,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "transpile started",
        time: {
            created: new Date(),
        },
        category: "work",
        online: false,
    },
    {
        id: 6,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "Hello everyone!!!",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 7,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Anna Dalonzo",
        mess: "Hello everyone!!!",
        time: {
            created: new Date(),
        },
        category: "work",
        online: false,
    },
    {
        id: 8,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Saqhan Dalonzo",
        mess: "Hello everyone!!!",
        time: {
            created: new Date(),
        },
        category: "family",
        online: true,
    },
    {
        id: 9,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Saqhan Chrome",
        mess: "Hello everyone!!! category",
        time: {
            created: new Date(),
        },
        category: "friends",
        online: false,
    },
    {
        id: 10,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Saqhan Chrome",
        mess: "Generate lazy started",
        time: {
            created: new Date(),
        },
        category: "friends",
        online: false,
    },
];
const categories = [
    {
        name: "All",
        id: "all",
    },
    {
        name: "Work",
        id: "work",
    },
    {
        name: "Family",
        id: "family",
    },
    {
        name: "Friends",
        id: "friends",
    },
];
const MessageMock = [
    {
        content: "Как твои дела",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].text,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "https://via.placeholder.com/500",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].image,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Нормально",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].text,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "https://via.placeholder.com/500",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].image,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Где ты?",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].text,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Чат пилю",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].text,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Прикинь, я тоже",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["M"].text,
        direction: _common_interface_2aa0c474_js__WEBPACK_IMPORTED_MODULE_0__["a"].toMe,
        time: {
            created: new Date(),
        },
    },
];
const logo = {
    id: "logo",
    logo: "https://via.placeholder.com/100x100?text=Text",
};
const navItems = [
    {
        id: 1,
        icon: "fas fa-comment-alt",
    },
    {
        id: 2,
        icon: "fas fa-shopping-bag",
    },
    {
        id: 3,
        icon: "fas fa-cart-arrow-down",
    },
    {
        id: 5,
        icon: "fas fa-calendar-alt",
    },
    {
        id: 6,
        icon: "fas fa-cog",
    },
];




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map