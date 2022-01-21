(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/stencil-chat/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./btn-wrapper_32.entry.js": [
		"./node_modules/stencil-chat/dist/esm/btn-wrapper_32.entry.js",
		"default~stencil-btn-wrapper_32-entry-js~stencil-mobile-chat-entry-js~stencil-s-adam-chat-entry-js",
		"stencil-btn-wrapper_32-entry-js"
	],
	"./m-chat-dialogs_2.entry.js": [
		"./node_modules/stencil-chat/dist/esm/m-chat-dialogs_2.entry.js",
		"stencil-m-chat-dialogs_2-entry-js"
	],
	"./mobile-chat.entry.js": [
		"./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js",
		"default~stencil-btn-wrapper_32-entry-js~stencil-mobile-chat-entry-js~stencil-s-adam-chat-entry-js",
		"stencil-mobile-chat-entry-js"
	],
	"./mobile-dialogs_2.entry.js": [
		"./node_modules/stencil-chat/dist/esm/mobile-dialogs_2.entry.js",
		"stencil-mobile-dialogs_2-entry-js"
	],
	"./s-adam-chat.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-chat.entry.js",
		"default~stencil-btn-wrapper_32-entry-js~stencil-mobile-chat-entry-js~stencil-s-adam-chat-entry-js",
		"stencil-s-adam-chat-entry-js"
	],
	"./s-adam-contacts_5.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-contacts_5.entry.js",
		"stencil-s-adam-contacts_5-entry-js"
	],
	"./s-adam-copying.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-copying.entry.js",
		"stencil-s-adam-copying-entry-js"
	],
	"./s-adam-nav-item.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-nav-item.entry.js",
		"stencil-s-adam-nav-item-entry-js"
	],
	"./s-adam-personal-header.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-personal-header.entry.js",
		"stencil-s-adam-personal-header-entry-js"
	],
	"./s-adam-search-contact.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-search-contact.entry.js",
		"stencil-s-adam-search-contact-entry-js"
	],
	"./user-profile.entry.js": [
		"./node_modules/stencil-chat/dist/esm/user-profile.entry.js",
		"stencil-user-profile-entry-js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/stencil-chat/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./module/module.component */ "./src/app/module/module.component.ts");





const routes = [
    // {
    //   path: '',
    //   loadChildren: () => import('./comp/comp.module').then(m => m.CompModule)
    // }
    {
        path: 'module',
        component: _module_module_component__WEBPACK_IMPORTED_MODULE_2__["ModuleComponent"],
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() | mobile-mobile-module */ "mobile-mobile-module").then(__webpack_require__.bind(null, /*! ./mobile/mobile.module */ "./src/app/mobile/mobile.module.ts")).then(m => m.MobileModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _services_common_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/common/animations */ "./src/app/services/common/animations.ts");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/common/animation.service */ "./src/app/services/common/animation.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class AppComponent {
    constructor(animSRVC) {
        this.animSRVC = animSRVC;
        this.title = 'ng-chat';
    }
    getAnimation() {
        return this.animSRVC.getCurrentAnimation();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 1, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeTransition", ctx.getAnimation());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeTransition', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToLeft', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToLeft"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToRight', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToRight"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToTop', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToTop"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToBottom', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToBottom"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToLeftDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToLeft"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToRightDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToRight"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToTopDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToTop"]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToBottomDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToBottom"]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('routeTransition', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToLeft', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToLeft"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToRight', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToRight"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToTop', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToTop"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToBottom', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToBottom"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToLeftDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToLeft"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToRightDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToRight"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToTopDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToTop"]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => slideToBottomDuplicate', _services_common_animations__WEBPACK_IMPORTED_MODULE_2__["slideToBottom"]),
                    ]),
                ],
            }]
    }], function () { return [{ type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/common/animation.service */ "./src/app/services/common/animation.service.ts");
/* harmony import */ var _module_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./module/module.component */ "./src/app/module/module.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _module_module_component__WEBPACK_IMPORTED_MODULE_6__["ModuleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _module_module_component__WEBPACK_IMPORTED_MODULE_6__["ModuleComponent"]
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
                providers: [_services_common_animation_service__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/mock.ts":
/*!*************************!*\
  !*** ./src/app/mock.ts ***!
  \*************************/
/*! exports provided: DialogsMock, CategoriesMock, ContactsMock, MessageMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogsMock", function() { return DialogsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesMock", function() { return CategoriesMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsMock", function() { return ContactsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageMock", function() { return MessageMock; });
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");

const DialogsMock = [
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
// export const DialogsMock: ChatDialogInterface[] = [
//   {
//     id: 1,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Даниил Копылов',
//     mess: 'Конфликтный гештальт',
//     time: {
//       created: new Date(),
//     },
//     category: 'work',
//     online: true,
//   },
//   {
//     id: 2,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Ярослав Кириллов',
//     mess: 'Реакция, по определению, доступна.',
//     time: {
//       created: new Date(),
//     },
//     category: 'family',
//     online: true,
//   },
//   {
//     id: 3,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Марина Коновалова',
//     mess: 'Чем больше люди узнают друг друга, тем больше воспитание',
//     time: {
//       created: new Date(),
//     },
//     category: 'friends',
//     online: false,
//   },
//   {
//     id: 4,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Алина Брагина',
//     mess: 'Предсознательное стабильно. Рефлексия вызывает стимул. ',
//     time: {
//       created: new Date(),
//     },
//     category: 'friends',
//     online: true,
//   },
//   {
//     id: 5,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Иван Степанович',
//     mess: 'Эскапизм осознаёт импульс.',
//     time: {
//       created: new Date(),
//     },
//     category: 'work',
//     online: false,
//   },
//   {
//     id: 6,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Элеонора Тимофеевна',
//     mess: 'Психе выбирает закон. Психоз изменяем.',
//     time: {
//       created: new Date(),
//     },
//     category: 'work',
//     online: true,
//   },
//   {
//     id: 7,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Александра Дмитриевна',
//     mess: 'Конформизм понимает психоз.',
//     time: {
//       created: new Date(),
//     },
//     category: 'work',
//     online: false,
//   },
//   {
//     id: 8,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Вадим Тимофеевич',
//     mess: 'Как было показано выше, психоз притягивает',
//     time: {
//       created: new Date(),
//     },
//     category: 'family',
//     online: true,
//   },
//   {
//     id: 9,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Яков Даниилович',
//     mess: 'Придерживаясь жестких принципов социального Дарвинизма',
//     time: {
//       created: new Date(),
//     },
//     category: 'interesting',
//     online: false,
//   },
//   {
//     id: 10,
//     img: 'https://via.placeholder.com/300x300?text=User',
//     name: 'Виктория Ильина',
//     mess: 'Предсознательное вызывает позитивистский генезис.',
//     time: {
//       created: new Date(),
//     },
//     category: 'study',
//     online: false,
//   },
// ];
const CategoriesMock = [
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
];
const ContactsMock = [
    {
        id: 1,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'R',
        time: {
            created: new Date(),
        },
        mess: 'n',
        category: 'work',
        online: true,
    },
    {
        id: 2,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Harry Sutton',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'interesting',
        online: true,
    },
    {
        id: 3,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Matthew Jake Sanchez',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 4,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Isaac Jack King',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 5,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Joseph Samuel Johnson',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'study',
        online: true,
    },
    {
        id: 6,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Mike Vazovski',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 7,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Dominic Mason',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 8,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Blake David',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 9,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Joseph Samuel Johnson',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 10,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Alejandro Kyle Jenkins',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 11,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Hunter Joshua Coleman',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
    {
        id: 12,
        img: 'https://via.placeholder.com/300x300?text=User',
        name: 'Jordan Isaiah Martinez',
        mess: 'rebuild finished',
        time: {
            created: new Date(),
        },
        category: 'work',
        online: true,
    },
];
const MessageMock = [
    {
        content: 'Привет, как дела?',
        sender: {
            uid: 'test-id-1',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Сайхан',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        sender: {
            uid: 'test-id-1',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Сайхан',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Олег подключился к чату',
        sender: {
            uid: '',
            icon: '',
            name: '',
            phone: '',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].center,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'https://via.placeholder.com/500',
        sender: {
            uid: 'test-id-2',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Сайхан',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].image,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: 1593606947701,
        sender: {
            uid: '',
            icon: '',
            name: '',
            phone: '',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].date,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].center,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Все гуд!',
        sender: {
            uid: 'test-id-2',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Адам',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
            delivery: new Date(),
            read: new Date(),
        },
    },
    {
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolor sit amet, consectetur adipiscing elit df sss',
        sender: {
            uid: 'test-id-2',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Адам',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
            read: new Date(),
        },
    },
    {
        content: 'https://via.placeholder.com/500',
        sender: {
            uid: 'test-id-2',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Адам',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].image,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Где ты?',
        sender: {
            uid: 'test-id-1',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Сайхан',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Чат пилю',
        sender: {
            uid: 'test-id-2',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Адам',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].fromMe,
        time: {
            created: new Date(),
        },
    },
    {
        content: 'Прикинь, я тоже',
        sender: {
            uid: 'test-id-1',
            icon: 'https://via.placeholder.com/60x60?text=User',
            name: 'Сайхан',
            phone: '79291234567',
        },
        type: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageTypeEnum"].text,
        direction: stencil_chat__WEBPACK_IMPORTED_MODULE_0__["ChatMessageDirectionEnum"].toMe,
        time: {
            created: new Date(),
        },
    },
];
// export const Writing: ChatWritingUserInterface[] = [
//   {
//     uid: 'test',
//     icon: 'https://via.placeholder.com/60x60?text=User',
//     name: '',
//     phone: '',
//   },
// ];


/***/ }),

/***/ "./src/app/module/module.component.ts":
/*!********************************************!*\
  !*** ./src/app/module/module.component.ts ***!
  \********************************************/
/*! exports provided: ModuleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleComponent", function() { return ModuleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store-service.service */ "./src/app/store-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common/animation.service */ "./src/app/services/common/animation.service.ts");





const _c0 = ["moduleChat"];
class ModuleComponent {
    constructor(storeMessage, router, animSRVC, cdRef) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
        this.cdRef = cdRef;
        this.dialogs = [];
        this.categories = [];
        this.contacts = [];
        this.allDialogs = [];
        this.messages = [];
    }
    // public messages$: Observable<ChatMessage[]>;
    // public getMessages() {
    //   return this.messages;
    // }
    ngOnInit() {
        window['ngRef'] = this.moduleChat.nativeElement;
        this.startSyncMessage();
        this.storeMessage.getDialogs().subscribe((dataFromSever) => {
            this.dialogs = dataFromSever;
            this.cdRef.markForCheck();
        });
        this.storeMessage.getCategories().subscribe((dataFromSever) => {
            this.categories = dataFromSever;
            console.log('this.categories', this.categories);
            this.cdRef.markForCheck();
        });
        this.storeMessage.getContacts().subscribe((dataFromSever) => {
            this.contacts = dataFromSever;
            console.log('this.contacts', this.contacts);
            this.cdRef.markForCheck();
        });
    }
    startSyncMessage() {
        this.storeMessage.getMessages$().subscribe((messagesFromServer) => {
            this.messages = [...messagesFromServer];
            this.cdRef.markForCheck();
        });
        // this.messages$ = this.storeMessage.getMessages$().pipe(
        //   share(),
        //   map(
        //     (messages) => [...messages]
        //   )
        // )
    }
    getTitleModule() {
        return this.storeMessage.titleModule;
    }
    // getPersonalMessage$(): Observable<ChatMessage[]> {
    //   // return this.storeMessage.getPersonalMessage();
    //   // return this.storeMessage.getMessage$();
    // }
    // public clickToDialog (ev: any) {}
    // public sendTextMessage (ev: any) {}
    // public showFullChat (ev: any) {}
    clickToDialog(dialog) {
        // this.messages = MessageMock.map(
        //   (message) => (
        //     {
        //       ...message,
        //       content: (
        //         message.direction !== ChatMessageDirectionEnum.center &&
        //         message.type === ChatMessageTypeEnum.text
        //       )
        //         ? `${dialog.name}> ${message.content}`
        //         : message.content
        //     }
        //   )
        // )
        console.log('clickToDialog [12]', dialog);
    }
    showFullChat(ev) {
        console.log('showFullChat', ev);
    }
    sendTextMessage(message) {
        console.log('sendTextMessage [2]', message);
        this.storeMessage.sendTextMessage(message);
        // this.messages = [
        //   ...this.messages,
        //   {
        //     content: message,
        //     sender: {
        //       uid: "test-id-2",
        //       icon: "https://via.placeholder.com/60x60?text=User",
        //       name: "Адам",
        //       phone: "79291234567",
        //     },
        //     type: ChatMessageTypeEnum.text,
        //     direction: ChatMessageDirectionEnum.fromMe,
        //     time: {
        //       created: new Date(),
        //       delivery: new Date(),
        //       read: new Date(),
        //     },
        //   },
        // ]
    }
}
ModuleComponent.ɵfac = function ModuleComponent_Factory(t) { return new (t || ModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
ModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModuleComponent, selectors: [["app-module"]], viewQuery: function ModuleComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.moduleChat = _t.first);
    } }, decls: 2, vars: 7, consts: [[3, "categories", "dialogs", "contacts", "dictionary", "message", "disableInnerSearchDialogsState", "disableInnerSearchMessagesState", "clickToDialog", "sendTextMessage", "showFullChat"], ["moduleChat", ""]], template: function ModuleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "cnt-module-chat", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToDialog", function ModuleComponent_Template_cnt_module_chat_clickToDialog_0_listener($event) { return ctx.clickToDialog($event); })("sendTextMessage", function ModuleComponent_Template_cnt_module_chat_sendTextMessage_0_listener($event) { return ctx.sendTextMessage($event.detail); })("showFullChat", function ModuleComponent_Template_cnt_module_chat_showFullChat_0_listener($event) { return ctx.showFullChat($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.categories)("dialogs", ctx.dialogs)("contacts", ctx.contacts)("dictionary", null)("message", ctx.messages)("disableInnerSearchDialogsState", false)("disableInnerSearchMessagesState", false);
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9tb2R1bGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-module',
                templateUrl: './module.component.html',
                styleUrls: ['./module.component.scss'],
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { moduleChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['moduleChat', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/services/api-layer/api-layer.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/api-layer/api-layer.service.ts ***!
  \*********************************************************/
/*! exports provided: ApiLayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiLayerService", function() { return ApiLayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mock */ "./src/app/mock.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var stencil_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! stencil-chat */ "./node_modules/stencil-chat/dist/esm/index.mjs");






class ApiLayerService {
    constructor() {
        /**
         * */
        this.lastMessages = _mock__WEBPACK_IMPORTED_MODULE_2__["MessageMock"];
        /**
         * */
        this.messages$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](this.lastMessages);
    }
    /**
     *
     * */
    getDialogs(uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock__WEBPACK_IMPORTED_MODULE_2__["DialogsMock"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1500));
    }
    /**
     *
     * */
    getDialog(uid, dialogId) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock__WEBPACK_IMPORTED_MODULE_2__["DialogsMock"])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(200))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((dialogs) => dialogs.find((dialog) => dialog.id === dialogId)));
    }
    /**
     *
     * */
    getCategories(uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock__WEBPACK_IMPORTED_MODULE_2__["CategoriesMock"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(2000));
    }
    /**
     *
     * */
    getContacts(uid) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(_mock__WEBPACK_IMPORTED_MODULE_2__["ContactsMock"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(1000));
    }
    /**
     *
     * */
    getMessages$(uid) {
        return this.messages$;
    }
    /**
     *
     * */
    sendTextMessage(content, sender) {
        this.lastMessages.push(Object(stencil_chat__WEBPACK_IMPORTED_MODULE_4__["createTextMessage"])(content, sender));
        this.messages$.next(this.lastMessages);
    }
}
ApiLayerService.ɵfac = function ApiLayerService_Factory(t) { return new (t || ApiLayerService)(); };
ApiLayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiLayerService, factory: ApiLayerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiLayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/common/animation.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/common/animation.service.ts ***!
  \******************************************************/
/*! exports provided: AnimationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationService", function() { return AnimationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AnimationService {
    constructor() {
        this.currentAnimation = null;
        this.currentAnimationId = -1;
    }
    slideToLEFT() { this.setCurrentAnimation(1); }
    slideToRIGHT() { this.setCurrentAnimation(2); }
    slideToTOP() { this.setCurrentAnimation(3); }
    slideToBOTTOM() { this.setCurrentAnimation(4); }
    setCurrentAnimation(animationId) {
        var nextAnimation = "";
        var isDuplicate = false;
        switch (animationId) {
            case 1:
                nextAnimation = "slideToLeft";
                break;
            case 2:
                nextAnimation = "slideToRight";
                break;
            case 3:
                nextAnimation = "slideToTop";
                break;
            case 4:
                nextAnimation = "slideToBottom";
                break;
        }
        if (this.currentAnimation && (this.currentAnimation.indexOf("Duplicate") > -1)) {
            isDuplicate = true;
        }
        /* add duplicate if previous animation otherwise animation will not work */
        if ((animationId == this.currentAnimationId) && !isDuplicate) {
            nextAnimation = nextAnimation + "Duplicate";
        }
        this.currentAnimation = nextAnimation;
        this.currentAnimationId = animationId;
    }
    getCurrentAnimation() {
        return this.currentAnimation;
    }
}
AnimationService.ɵfac = function AnimationService_Factory(t) { return new (t || AnimationService)(); };
AnimationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AnimationService, factory: AnimationService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/services/common/animations.ts":
/*!***********************************************!*\
  !*** ./src/app/services/common/animations.ts ***!
  \***********************************************/
/*! exports provided: slideToRight, slideToLeft, slideToTop, slideToBottom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToRight", function() { return slideToRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToLeft", function() { return slideToLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToTop", function() { return slideToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slideToBottom", function() { return slideToBottom; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const slideToRight = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
        ], { optional: true })
    ])
];
const slideToLeft = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(100%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateX(0%)' })),
        ], { optional: true })
    ])
];
const slideToTop = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' })),
        ], { optional: true })
    ])
];
const slideToBottom = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'fixed', left: 0, right: 0, top: 0, bottom: 0 }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100%)' }), { optional: true }),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["group"])([
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100%)' })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s ease-in-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(0%)' })),
        ], { optional: true })
    ])
];


/***/ }),

/***/ "./src/app/store-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/store-service.service.ts ***!
  \******************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./src/app/mock.ts");
/* harmony import */ var _services_api_layer_api_layer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/api-layer/api-layer.service */ "./src/app/services/api-layer/api-layer.service.ts");




class StoreService {
    // private messages$: BehaviorSubject<ChatMessage[]> = new BehaviorSubject(
    //   this.messages
    // );
    constructor(apiLayerService) {
        this.apiLayerService = apiLayerService;
        this.dialogVisible = false;
        this.profileVisible = false;
        /**
         *
         */
        this.logo = {
            id: 'logo',
            logo: 'https://via.placeholder.com/100x100?text=Text',
        };
        /**
         * Иконки навигации комп версии
         */
        this.titleModule = {
            title: 'Модульный чат',
        };
        /**
         * Иконки навигации комп версии
         */
        this.contacts = _mock__WEBPACK_IMPORTED_MODULE_1__["ContactsMock"];
        /**
         * Иконки навигации комп версии
         */
        this.navItems = [
            {
                id: 1,
                icon: 'fas fa-comment-alt',
            },
            {
                id: 2,
                icon: 'fas fa-shopping-bag',
            },
            {
                id: 3,
                icon: 'fas fa-cart-arrow-down',
            },
            {
                id: 5,
                icon: 'fas fa-calendar-alt',
            },
            {
                id: 6,
                icon: 'fas fa-cog',
            },
        ];
        /**
         *
         */
        // private messages: ChatMessage[] = MessageMock;
        this.compThemeClass = 'comp';
    }
    /**
     * */
    getDialogs() {
        return this.apiLayerService.getDialogs('');
    }
    /**
     * */
    getMessages$() {
        return this.apiLayerService.getMessages$('');
    }
    /**
     * */
    getDialog(dialogId) {
        return this.apiLayerService.getDialog('', dialogId);
    }
    /**
     * */
    // public getPersonalMessage() {
    //   return this.messages;
    // }
    /**
     * */
    // public getMessage$(): Observable<ChatMessage[]> {
    //   // return this.messages$;
    // }
    /**
     * */
    // public sendMessage(message: ChatMessage) {
    //   this.messages$.pipe(take(1)).subscribe((messages) => {
    //     messages.push(message);
    //     this.messages$.next([...messages]);
    //   });
    // }
    // public sendTestTextMessage(content: string) {
    //   this.sendMessage({
    //     content,
    //     sender: {
    //       uid: 'test-id-1',
    //       icon: 'https://via.placeholder.com/60x60?text=User',
    //       name: 'Сайхан',
    //       phone: '79291234567',
    //     },
    //     type: ChatMessageTypeEnum.text,
    //     direction: ChatMessageDirectionEnum.toMe,
    //     time: {
    //       created: new Date(),
    //     },
    //   });
    // }
    /**
     *
     */
    getCategories() {
        return this.apiLayerService.getCategories('');
    }
    /**
     * */
    getContacts() {
        return this.apiLayerService.getContacts('');
    }
    // getMessages() {
    //   return this.messages;
    // }
    getNavItems() {
        return this.navItems;
    }
    getLogo() {
        return this.logo;
    }
    // getContacts() {
    //   return this.contacts;
    // }
    /**
     *
     */
    filterChatsByCategory(input, allDialogs) {
        if ((input === null || input === void 0 ? void 0 : input.id) !== 'all') {
            return allDialogs.filter((item) => item.category === input.id);
        }
        else {
            return allDialogs;
        }
    }
    /**
     * */
    sendTextMessage(content) {
        this.apiLayerService.sendTextMessage(content, {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567",
        });
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_api_layer_api_layer_service__WEBPACK_IMPORTED_MODULE_2__["ApiLayerService"])); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _services_api_layer_api_layer_service__WEBPACK_IMPORTED_MODULE_2__["ApiLayerService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var stencil_chat_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stencil-chat/loader */ "./node_modules/stencil-chat/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


// stencil js - source



if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
// stencil js - source
Object(stencil_chat_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/JS Projects/cnt-chat/ng-chat/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map