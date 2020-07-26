(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~stencil-btn-wrapper_32-entry-js~stencil-mobile-chat-entry-js~stencil-s-adam-chat-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js":
/*!*************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js ***!
  \*************************************************************/
/*! exports provided: D, M, a, b, c, d, e, f, l */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return DictionaryMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return MessageMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DictionaryMockEng; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return contacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return dialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return disableInnerSearchDialogs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return disableInnerSearchMessages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return logo; });
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");


const DictionaryMock = {
    module: {
        appName: "Модульный чат"
    },
    shared: {},
    comp: {},
};
const DictionaryMockEng = {
    module: {
        appName: "Module chat"
    },
    shared: {},
    comp: {},
};
const dialogs = [
    {
        id: 1,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Даниил Копылов',
        mess: 'Конфликтный гештальт',
        time: {
            created: new Date(),
        },
        newMessage: 4,
        category: 'work',
        online: true,
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Ярослав Кириллов',
        mess: 'Реакция, по определению, доступна.',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'family',
        online: true,
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Марина Коновалова',
        mess: 'Чем больше люди узнают друг друга, тем больше воспитание',
        time: {
            created: new Date(),
        },
        newMessage: 3,
        category: 'friends',
        online: false,
    },
    {
        id: 4,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Алина Брагина',
        mess: 'Предсознательное стабильно. Рефлексия вызывает стимул. ',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'friends',
        online: true,
    },
    {
        id: 5,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Иван Степанович',
        mess: 'Эскапизм осознаёт импульс.',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'work',
        online: false,
    },
    {
        id: 6,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Элеонора Тимофеевна',
        mess: 'Психе выбирает закон. Психоз изменяем.',
        time: {
            created: new Date(),
        },
        newMessage: 2,
        category: 'work',
        online: true,
    },
    {
        id: 7,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Александра Дмитриевна',
        mess: 'Конформизм понимает психоз.',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'work',
        online: false,
    },
    {
        id: 8,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Вадим Тимофеевич',
        mess: 'Как было показано выше, психоз притягивает',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'family',
        online: true,
    },
    {
        id: 9,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Яков Даниилович',
        mess: 'Придерживаясь жестких принципов социального Дарвинизма',
        time: {
            created: new Date(),
        },
        newMessage: 1,
        category: 'interesting',
        online: false,
    },
    {
        id: 10,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Виктория Ильина',
        mess: 'Предсознательное вызывает позитивистский генезис.',
        time: {
            created: new Date(),
        },
        newMessage: 0,
        category: 'study',
        online: false,
    },
];
const categories = [
    {
        name: 'Все',
        id: 'all',
    },
    {
        name: 'Работа',
        id: 'work',
    },
    {
        name: 'Семья',
        id: 'family',
    },
    {
        name: 'Друзья',
        id: 'friends',
    },
    {
        name: 'Учеба',
        id: 'study',
    },
    {
        name: 'Интересное',
        id: 'interesting',
    },
    {
        name: 'Личное',
        id: 'self',
    },
    {
        name: 'Машины',
        id: 'auto',
    },
    {
        name: 'Игры',
        id: 'games',
    },
];
const MessageMock = [
    {
        content: "Привет, как дела?",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        sender: {
            uid: "test-id-1",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Сайхан",
            phone: "79291234567",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Олег подключился к чату",
        sender: {
            uid: "",
            icon: "",
            name: "",
            phone: "",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].center,
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
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].image,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: 1593606947701,
        sender: {
            uid: "",
            icon: "",
            name: "",
            phone: "",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].date,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].center,
        time: {
            created: new Date(),
        },
    },
    {
        content: "Все гуд!",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss",
        sender: {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        },
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
            read: new Date(),
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
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].image,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
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
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
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
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
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
        type: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: _index_mjs__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    }
];
const logo = {
    id: "logo",
    logo: "https://via.placeholder.com/100x100?text=Text",
};
// export const titleModule = {
//   id: 'modal',
//   title: 'Модульный чат'
// }
// export const navItems = [
//   {
//     id: 1,
//     icon: "c-chat c-chat-comment-alt",
//   },
//   {
//     id: 2,
//     icon: "c-chat c-chat-shopping-bag",
//   },
//   {
//     id: 3,
//     icon: "c-chat c-chat-cart-arrow-down",
//   },
//   {
//     id: 4,
//     icon: "c-chat c-chat-calendar-alt",
//   },
//   {
//     id: 5,
//     icon: "c-chat c-chat-cog",
//   },
// ];
const contacts = [
    {
        id: 1,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Randolph Newman",
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
        name: "Harry Sutton",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 3,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Matthew Jake Sanchez",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 4,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Isaac Jack King",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 5,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Joseph Samuel Johnson",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 6,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Mike Vazovski",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 7,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Dominic Mason",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 8,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Blake David",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 9,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Joseph Samuel Johnson",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 10,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Alejandro Kyle Jenkins",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 11,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Hunter Joshua Coleman",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
    {
        id: 12,
        img: "https://via.placeholder.com/300x300?text=User",
        name: "Jordan Isaiah Martinez",
        mess: "rebuild finished",
        time: {
            created: new Date(),
        },
        category: "work",
        online: true,
    },
];
const disableInnerSearchDialogs = false;
const disableInnerSearchMessages = false;




/***/ })

}]);
//# sourceMappingURL=default~stencil-btn-wrapper_32-entry-js~stencil-mobile-chat-entry-js~stencil-s-adam-chat-entry-js-es2015.js.map