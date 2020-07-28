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

/***/ "./node_modules/s-promo/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/s-promo/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./cnt-flexy-view-saqhan-promo-about-me_15.entry.js": [
		"./node_modules/s-promo/dist/esm/cnt-flexy-view-saqhan-promo-about-me_15.entry.js",
		"stencil-cnt-flexy-view-saqhan-promo-about-me_15-entry-js"
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
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./node_modules/s-promo/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _store_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-service.service */ "./src/app/store-service.service.ts");



class AppComponent {
    constructor(storeBlog) {
        this.storeBlog = storeBlog;
    }
    getCategories() {
        return this.storeBlog.getCategories();
    }
    getSkills() {
        return this.storeBlog.getSkills();
    }
    getAboutMe() {
        return this.storeBlog.getAboutMe();
    }
    getPortfolio() {
        return this.storeBlog.getPortfolio();
    }
    getContactForm() {
        return this.storeBlog.getContactForm();
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreServiceService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 6, consts: [[3, "categories"], [3, "payload"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "cnt-flexy-view-saqhan-promo-header-wrapper-1_01", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "cnt-flexy-view-saqhan-promo-about-me-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cnt-flexy-view-saqhan-promo-skils-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cnt-flexy-view-saqhan-promo-portfolio-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cnt-flexy-view-saqhan-promo-contact-form-wrapper-1_01", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "cnt-flexy-view-saqhan-promo-footer-wrapper", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getAboutMe());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSkills());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPortfolio());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getContactForm());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getCategories());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _store_service_service__WEBPACK_IMPORTED_MODULE_1__["StoreServiceService"] }]; }, null); })();


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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");





class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/store-service.service.ts":
/*!******************************************!*\
  !*** ./src/app/store-service.service.ts ***!
  \******************************************/
/*! exports provided: StoreServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreServiceService", function() { return StoreServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StoreServiceService {
    constructor() {
        /*
       * данные для первого блока и меню
       * */
        this.header = {
            stickyTop: [
                {
                    id: 'about-me',
                    name: 'Обо мне',
                },
                {
                    id: 'skills',
                    name: 'Навыки',
                },
                {
                    id: 'portfolio',
                    name: 'Портфолио',
                },
                {
                    id: 'contacts',
                    name: 'Контакты',
                },
            ],
            headerTitle: 'Профессиональная разработка сайтов',
            headerBtnTitle: 'отправить завку',
            logoMain: 'http://saqhan.ru/img/pre-stage/logo.png',
            backgroundImage: 'http://saqhan.ru/img/pre-stage/main_bg.jpg',
            socilaLinks: [
                {
                    name: 'vkontakte',
                    class: 'fab fa-vk',
                    links: 'https://vk.com/saqhan'
                },
                {
                    name: 'instagram',
                    class: 'fab fa-instagram',
                    links: 'https://www.instagram.com/saqhan/'
                },
                {
                    name: 'github',
                    class: 'fab fa-github',
                    links: 'https://github.com/saqhan'
                },
            ],
            footerBackgroundImage: 'http://saqhan.ru/img/pre-stage/footer-bg.jpg',
        };
        /*
         * Данные для блока Обо мне
         * */
        this.aboutMe = {
            title: 'Обо мне',
            subTitle: 'познакомимся по ближе',
            aboutMe: {
                title: 'Немного о себе',
                text: 'Сайхан, 26 лет. ' +
                    'Занимаюсь разработкой сайтов с нуля, под ключ. Специалист по CMS WordPress. Выполняю верстку и программирование сайтов. Добавляю весь необходимый функционал на сайт. Делаю адаптивную верстку на Bootstrap, таким образом Ваш сайт будет отлично выглядеть на всех устройствах. Любой начатый проект довожу до конца, постоянно совершенствую свой профессиональный уровень. Вы можете заказать у меня разработку сайта с нуля, или связаться со мной для сотрудничества.',
            },
            img: 'http://saqhan.ru/img/pre-stage/saqhan.jpg',
            contacts: {
                name: 'Сайхан Абаев',
                text: 'Профессиональное создание сайтов: разработка дизайна, HTML верстка, посадка на CMS WordPress, программирование на PHP, JavaScript. ',
                phone: '+ 7 (965) 954 00 34',
                email: 'saqhan1@mail.ru',
            },
            socilaLinks: [
                {
                    name: 'vkontakte',
                    class: 'fab fa-vk',
                    links: 'https://vk.com/saqhan'
                },
                {
                    name: 'instagram',
                    class: 'fab fa-instagram',
                    links: 'https://www.instagram.com/saqhan/'
                },
                {
                    name: 'github',
                    class: 'fab fa-github',
                    links: 'https://github.com/saqhan'
                },
            ],
        };
        this.portfolio = {
            portfolioCard: [
                {
                    id: 1,
                    title: 'Module Chat',
                    linkGithub: 'https://github.com/saqhan/contacts',
                    linkApp: 'https://saqhan.github.io/contacts/',
                    img: 'http://saqhan.ru/img/pre-stage/angular.jpg',
                    category: 'angular',
                },
                {
                    id: 2,
                    title: 'Mobile Chat',
                    linkGithub: 'https://github.com/saqhan/contacts',
                    linkApp: 'https://saqhan.github.io/contacts/',
                    img: 'http://saqhan.ru/img/pre-stage/angular.jpg',
                    category: 'angular',
                },
                {
                    id: 3,
                    title: 'Contacts',
                    linkGithub: 'https://github.com/saqhan/contacts',
                    linkApp: 'https://saqhan.github.io/contacts/',
                    img: 'http://saqhan.ru/img/pre-stage/react.jpg',
                    category: 'react',
                },
                {
                    id: 4,
                    title: 'Приложение no-twitter.',
                    linkGithub: 'https://github.com/saqhan/no-twitter/',
                    linkApp: 'https://saqhan.github.io/no-twitter/',
                    img: 'http://saqhan.ru/img/pre-stage/angular.jpg',
                    category: 'angular',
                },
                {
                    id: 9,
                    title: 'Министерство автомобильных дорог',
                    linkGithub: '',
                    linkApp: 'https://www.minavtodor-chr.ru/',
                    img: 'http://saqhan.ru/img/pre-stage/minavtodor.jpg',
                    category: 'wordpress',
                },
                {
                    id: 5,
                    title: 'Todo приложение нa Angular',
                    linkGithub: 'https://github.com/saqhan/ng-todo/',
                    linkApp: 'https://saqhan.github.io/ng-todo/',
                    img: 'http://saqhan.ru/img/pre-stage/angular.jpg',
                    category: 'angular',
                },
                {
                    id: 6,
                    title: 'Chat приложение нa React',
                    linkGithub: 'https://github.com/saqhan/chat',
                    linkApp: 'https://saqhan.github.io/chat/',
                    img: 'http://saqhan.ru/img/pre-stage/react.jpg',
                    category: 'react',
                },
                {
                    id: 7,
                    title: 'Интернет магазин детских товаров',
                    linkGithub: '',
                    linkApp: 'https://wowchild.ru/',
                    img: 'http://saqhan.ru/img/pre-stage/kids.jpg',
                    category: 'wordpress',
                },
                {
                    id: 8,
                    title: 'Префектура Ленинского района ЧР',
                    linkGithub: '',
                    linkApp: 'https://prefect-len.ru/',
                    img: 'http://saqhan.ru/img/pre-stage/len-pre.jpg',
                    category: 'wordpress',
                },
            ],
            categoriesPortfolio: [
                {
                    id: 'all',
                    name: 'Все',
                },
                {
                    id: 'angular',
                    name: 'Angular',
                },
                {
                    id: 'react',
                    name: 'React',
                },
                {
                    id: 'wordpress',
                    name: 'WordPress',
                },
            ],
        };
        this.skills = [
            {
                name: 'HTML',
                percent: 75,
            },
            {
                name: 'CSS',
                percent: 70,
            },
            {
                name: 'JS',
                percent: 35,
            },
            {
                name: 'Angular',
                percent: 37,
            },
            {
                name: 'React',
                percent: 45,
            },
            {
                name: 'Wordpress',
                percent: 80,
            },
            {
                name: 'JQuery',
                percent: 65,
            },
            {
                name: 'Photoshop',
                percent: 50,
            },
        ];
        this.contactForm = {
            title: 'Контакты',
            subTitle: 'Позвоните или напишите на почту',
            number: '+ 7 (965) 954 00 34',
            email: 'saqhan1@mail.ru',
            backgroundImage: 'http://saqhan.ru/img/pre-stage/9.svg'
        };
    }
    getContactForm() {
        return this.contactForm;
    }
    getCategories() {
        return this.header;
    }
    getAboutMe() {
        return this.aboutMe;
    }
    getPortfolio() {
        return this.portfolio;
    }
    getSkills() {
        return this.skills;
    }
}
StoreServiceService.ɵfac = function StoreServiceService_Factory(t) { return new (t || StoreServiceService)(); };
StoreServiceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreServiceService, factory: StoreServiceService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreServiceService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var s_promo_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! s-promo/loader */ "./node_modules/s-promo/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
// stencil js - source



// stencil js - source
Object(s_promo_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/s-promo-ng/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map