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

/***/ "./node_modules/stencil-market/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/stencil-market/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./group-a_42.entry.js": [
		"./node_modules/stencil-market/dist/esm/group-a_42.entry.js",
		"default~stencil-group-a_42-entry-js~stencil-group-b-entry-js~stencil-s-cnt-market-first-page-entry-js",
		"default~stencil-group-a_42-entry-js~stencil-group-b-entry-js",
		"stencil-group-a_42-entry-js"
	],
	"./group-b.entry.js": [
		"./node_modules/stencil-market/dist/esm/group-b.entry.js",
		"default~stencil-group-a_42-entry-js~stencil-group-b-entry-js~stencil-s-cnt-market-first-page-entry-js",
		"default~stencil-group-a_42-entry-js~stencil-group-b-entry-js",
		"stencil-group-b-entry-js"
	],
	"./s-cnt-market-app_8.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-app_8.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-app_8-entry-js"
	],
	"./s-cnt-market-delivery-item.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-delivery-item.entry.js",
		"stencil-s-cnt-market-delivery-item-entry-js"
	],
	"./s-cnt-market-first-page.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-first-page.entry.js",
		"default~stencil-group-a_42-entry-js~stencil-group-b-entry-js~stencil-s-cnt-market-first-page-entry-js",
		"stencil-s-cnt-market-first-page-entry-js"
	],
	"./s-cnt-market-item-choice.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-choice.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-item-choice-entry-js"
	],
	"./s-cnt-market-item-courier.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-courier.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-item-courier-entry-js"
	],
	"./s-cnt-market-item-offer.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-offer.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-item-offer-entry-js"
	],
	"./s-cnt-market-item-selection.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-selection.entry.js",
		"stencil-s-cnt-market-item-selection-entry-js"
	],
	"./s-cnt-market-item-specialist.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-specialist.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-item-specialist-entry-js"
	],
	"./s-cnt-market-item-statistics.entry.js": [
		"./node_modules/stencil-market/dist/esm/s-cnt-market-item-statistics.entry.js",
		"default~stencil-s-cnt-market-app_8-entry-js~stencil-s-cnt-market-item-choice-entry-js~stencil-s-cnt-~72759683",
		"stencil-s-cnt-market-item-statistics-entry-js"
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
webpackAsyncContext.id = "./node_modules/stencil-market/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
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
/* harmony import */ var _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ng-cnt-market-first-page/ng-cnt-market-first-page.component */ "./src/app/ng-cnt-market-first-page/ng-cnt-market-first-page.component.ts");
/* harmony import */ var _ng_cnt_market_second_page_ng_cnt_market_second_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-cnt-market-second-page/ng-cnt-market-second-page.component */ "./src/app/ng-cnt-market-second-page/ng-cnt-market-second-page.component.ts");






const routes = [
    {
        path: '',
        component: _ng_cnt_market_second_page_ng_cnt_market_second_page_component__WEBPACK_IMPORTED_MODULE_3__["NgCntMarketSecondPageComponent"],
    },
    {
        path: 'first',
        component: _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_2__["NgCntMarketFirstPageComponent"],
    },
    {
        path: '**',
        component: _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_2__["NgCntMarketFirstPageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'ng-market-place';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-cnt-market-first-page/ng-cnt-market-first-page.component */ "./src/app/ng-cnt-market-first-page/ng-cnt-market-first-page.component.ts");
/* harmony import */ var _ng_cnt_market_second_page_ng_cnt_market_second_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-cnt-market-second-page/ng-cnt-market-second-page.component */ "./src/app/ng-cnt-market-second-page/ng-cnt-market-second-page.component.ts");
/* harmony import */ var _shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/ng-cnt-market-header/ng-cnt-market-header.component */ "./src/app/shared/ng-cnt-market-header/ng-cnt-market-header.component.ts");
/* harmony import */ var _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/ng-cnt-market-footer/ng-cnt-market-footer.component */ "./src/app/shared/ng-cnt-market-footer/ng-cnt-market-footer.component.ts");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_4__["NgCntMarketFirstPageComponent"],
        _ng_cnt_market_second_page_ng_cnt_market_second_page_component__WEBPACK_IMPORTED_MODULE_5__["NgCntMarketSecondPageComponent"],
        _shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_6__["NgCntMarketHeaderComponent"],
        _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_7__["NgCntMarketFooterComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ng_cnt_market_first_page_ng_cnt_market_first_page_component__WEBPACK_IMPORTED_MODULE_4__["NgCntMarketFirstPageComponent"],
                    _ng_cnt_market_second_page_ng_cnt_market_second_page_component__WEBPACK_IMPORTED_MODULE_5__["NgCntMarketSecondPageComponent"],
                    _shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_6__["NgCntMarketHeaderComponent"],
                    _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_7__["NgCntMarketFooterComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/market-store.service.ts":
/*!*****************************************!*\
  !*** ./src/app/market-store.service.ts ***!
  \*****************************************/
/*! exports provided: MarketStoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarketStoreService", function() { return MarketStoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./src/app/mock.ts");



class MarketStoreService {
    constructor() {
        this.logo = _mock__WEBPACK_IMPORTED_MODULE_1__["header"].body.logo;
        this.numberHeader = _mock__WEBPACK_IMPORTED_MODULE_1__["header"].numberHeader;
        this.forOffer = _mock__WEBPACK_IMPORTED_MODULE_1__["forOffer"];
        this.offerTitleText = _mock__WEBPACK_IMPORTED_MODULE_1__["offerTitleText"];
        this.forStatistics = _mock__WEBPACK_IMPORTED_MODULE_1__["forStatistics"];
        this.delivery = _mock__WEBPACK_IMPORTED_MODULE_1__["delivery"];
        this.forChoice = _mock__WEBPACK_IMPORTED_MODULE_1__["forChoice"];
        this.choiceTitleText = _mock__WEBPACK_IMPORTED_MODULE_1__["choiceTitleText"];
        this.forSpecialist = _mock__WEBPACK_IMPORTED_MODULE_1__["forSpecialist"];
        this.forCourier = _mock__WEBPACK_IMPORTED_MODULE_1__["forCourier"];
        this.forApp = _mock__WEBPACK_IMPORTED_MODULE_1__["forApp"];
        this.forSelection = _mock__WEBPACK_IMPORTED_MODULE_1__["forSelection"];
        this.homePageImage = _mock__WEBPACK_IMPORTED_MODULE_1__["homePageImage"];
        this.homeText = _mock__WEBPACK_IMPORTED_MODULE_1__["homeText"];
        this.homeSubText = _mock__WEBPACK_IMPORTED_MODULE_1__["homeSubText"];
        /**
         * Вторая страница
         */
        this.promoSliderCards = _mock__WEBPACK_IMPORTED_MODULE_1__["promoSliderCards"];
        this.productsSliderCards = _mock__WEBPACK_IMPORTED_MODULE_1__["productsSliderCards"];
        this.productsSliderTitle = _mock__WEBPACK_IMPORTED_MODULE_1__["productsSliderTitle"];
        this.productsList = _mock__WEBPACK_IMPORTED_MODULE_1__["productsList"];
        this.recentlyWatchedProducts = _mock__WEBPACK_IMPORTED_MODULE_1__["recentlyWatchedProducts"];
        this.recentlyWatchedTitle = _mock__WEBPACK_IMPORTED_MODULE_1__["recentlyWatchedTitle"];
        this.productModal = _mock__WEBPACK_IMPORTED_MODULE_1__["productModal"];
    }
    //  сайхан
    //
    getLogoFooter() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["footerData"].logoFooter;
    }
    //
    getMenuItemFooter() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["footerData"].footerMenu;
    }
    //
    getFooterContactColumn() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["footerData"].footerContactColumn;
    }
    getFooterCopyrightRow() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["footerData"].footerCopyrightRow;
    }
    getFooterLinksPolitics() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["footerData"].footerLinksPolitics;
    }
    getTopBar() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["header"].topBar;
    }
    //
    getBodyHeader() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["header"].body;
    }
    //
    getLoginUser() {
        return true;
    }
    //
    getNavBar() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["header"].navBar;
    }
    //
    getSelectShops() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["header"].selectShops;
    }
    //
    getLeftMenuCatalog() {
        return _mock__WEBPACK_IMPORTED_MODULE_1__["header"].leftMenuCatalog;
    }
}
MarketStoreService.ɵfac = function MarketStoreService_Factory(t) { return new (t || MarketStoreService)(); };
MarketStoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MarketStoreService, factory: MarketStoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MarketStoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/mock.ts":
/*!*************************!*\
  !*** ./src/app/mock.ts ***!
  \*************************/
/*! exports provided: promoSliderCards, forSelection, homePageImage, homeText, homeSubText, forOffer, offerTitleText, forStatistics, delivery, forChoice, forSpecialist, forCourier, choiceTitleText, forApp, productModal, productsSliderCards, productsSliderTitle, footerMenu, footerData, logoFooter, forUpFooterForm, forDownFooter, forFooterInfo, recentlyWatchedTitle, productsList, recentlyWatchedProducts, header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "promoSliderCards", function() { return promoSliderCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forSelection", function() { return forSelection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homePageImage", function() { return homePageImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeText", function() { return homeText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeSubText", function() { return homeSubText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forOffer", function() { return forOffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerTitleText", function() { return offerTitleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forStatistics", function() { return forStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delivery", function() { return delivery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forChoice", function() { return forChoice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forSpecialist", function() { return forSpecialist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forCourier", function() { return forCourier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "choiceTitleText", function() { return choiceTitleText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forApp", function() { return forApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productModal", function() { return productModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSliderCards", function() { return productsSliderCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsSliderTitle", function() { return productsSliderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerMenu", function() { return footerMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerData", function() { return footerData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoFooter", function() { return logoFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forUpFooterForm", function() { return forUpFooterForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forDownFooter", function() { return forDownFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forFooterInfo", function() { return forFooterInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recentlyWatchedTitle", function() { return recentlyWatchedTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productsList", function() { return productsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recentlyWatchedProducts", function() { return recentlyWatchedProducts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
const promoSliderCards = [
    {
        id: 1,
        title: 'Давайте знакомиться',
        description: 'Видеоролик расскажет о том, как мы работаем.',
        link: 'Смотреть',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '0, 199, 33',
        color: '255, 255, 255',
    },
    {
        id: 2,
        title: 'Онлайн вечеринка с Mars!',
        description: 'Скидка -20% на любимые бренды!',
        link: 'Присоединиться!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '132, 9, 227',
        color: '255, 255, 255',
    },
    {
        id: 3,
        title: 'Утро. Новости. Премьера.',
        description: 'Новые сорта Ламбера!',
        link: 'Купить!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '249, 189, 89',
        color: '255, 255, 255',
    },
    {
        id: 4,
        title: 'БЕСПЛАТНАЯ ДОСТАВКА!',
        description: 'Средства по уходу за собой',
        link: 'Получить',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '1, 191, 217',
        color: '255, 255, 255',
    },
    {
        id: 4,
        title: 'Почувствуйте лето вместе с Lipton Ice Tea',
        description: 'Новые дизайны классических вкусов',
        link: 'Попробовать!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '245, 152, 220',
        color: '0, 0, 0',
    },
    {
        id: 5,
        title: 'Новинки от Агуши!',
        description: 'Порадуйте малыша полезными фруктовыми батончиками и мини-хлебцами!',
        link: 'Перекусить',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '255, 147, 5',
        color: '255, 255, 255',
    },
    {
        id: 6,
        title: 'Щедрые выходные!',
        description: 'Скидки до 50% с 30 июля по 2 августа!',
        link: 'В каталог',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '52, 219, 213',
        color: '255, 255, 255',
    },
    {
        id: 7,
        title: 'Фруктовая корзина',
        description: 'Витамины для вас!',
        link: 'Купить в один клик',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '43, 194, 68',
        color: '255, 255, 255',
    },
    {
        id: 8,
        title: 'Большая упаковка',
        description: 'Вода, соки и напитки в больших упаковках',
        link: 'Посмотреть',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '93, 152, 240',
        color: '255, 255, 255',
    },
    {
        id: 9,
        title: 'Рецепты',
        description: 'Готовьте ваши любимые блюда вместе с нами!',
        link: 'Посмотреть',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '115, 191, 57',
        color: '255, 255, 255',
    },
    {
        id: 10,
        title: 'Освежись с Heineken 0.0!',
        description: '100% вкуса и 0% алкоголя',
        link: 'Купить!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '49, 46, 110',
        color: '255, 255, 255',
    },
    {
        id: 11,
        title: 'Доставим на дачу!',
        description: 'В пределах московского малого кольца',
        link: 'К покупкам',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '167, 242, 17',
        color: '0, 0, 0',
    },
    {
        id: 12,
        title: 'Персональный шопер',
        description: 'Оформите заказ, и мы соберем корзину так же, как это сделали бы вы сами!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '160, 128, 194',
        color: '255, 255, 255',
    },
    {
        id: 13,
        title: 'Подарочные сертификаты',
        description: 'Подарите сертификат на покупку в Сбермаркете своим близким!',
        link: 'Подарить',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '156, 12, 60',
        color: '255, 255, 255',
    },
    {
        id: 14,
        title: 'Скоро в школу!',
        description: 'Покупайте все необходимые товары к школе',
        link: 'Посмотреть',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '255, 165, 0',
        color: '255, 255, 255',
    },
    {
        id: 15,
        title: 'Начни здоровый образ жизни!',
        description: 'Мы выбрали для тебя только самое полезное!',
        link: 'Посмотреть!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '38, 150, 43',
        color: '255, 255, 255',
    },
    {
        id: 16,
        title: 'Набор Радости от Mars',
        description: 'Узнай как подсластить жизнь своим близким и сделать приятный подарок',
        link: 'Выбрать подарок!',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '255, 182, 241',
        color: '52, 24, 108',
    },
    {
        id: 17,
        title: 'Овощная корзина',
        description: 'Витамины для вас!',
        link: 'Купить в один клик',
        img: 'https://via.placeholder.com/100x100?img=img',
        bgImage: 'https://sbermarket.ru/static/promo_cards/background.png',
        bgColor: '235, 116, 56',
        color: '255, 255, 255',
    },
];
const forSelection = [
    {
        id: 1,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'METRO',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'SELGROS',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Лента',
    },
    {
        id: 4,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ВкусВилл',
        text: 'Доступно за 30 минут в Москве',
    },
    {
        id: 5,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Ашан',
    },
    {
        id: 6,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Азбука Вкуса',
        text: 'Доступно за 30 минут в Москве',
    },
    {
        id: 7,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'МЕГАМАРТ',
    },
    {
        id: 8,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Бахетле',
    },
    {
        id: 9,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ВИКТОРИЯ',
    },
    {
        id: 10,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ЗЕЛЕНОЕ ЯБЛОКО',
    },
    {
        id: 11,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Аллея',
    },
    {
        id: 12,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Командор',
    },
    {
        id: 13,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'BILLA',
    },
    {
        id: 14,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'REAL',
    },
    {
        id: 15,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ДЕЯ',
    },
    {
        id: 16,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Хороший',
    },
    {
        id: 17,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ТИТАН',
    },
    {
        id: 18,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'СЕДЬМАЯ СТОЛИЦА',
    },
    {
        id: 29,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Забайкальский Привозъ',
    },
    {
        id: 20,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'КИТ',
    },
    {
        id: 21,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ПАРУС',
    },
    {
        id: 22,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'КАРАВАН',
    },
    {
        id: 23,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'МАГНОЛИЯ',
    },
    {
        id: 24,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ВЕГА',
    },
    {
        id: 25,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Шан',
    },
    {
        id: 26,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'АУТЛЕТ',
    },
    {
        id: 27,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Осень',
    },
    {
        id: 28,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ТЦ "Новомариинский"',
    },
    {
        id: 29,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'УДАЧНАЯ ПОКУПКА',
    },
    {
        id: 30,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ТД ХОРОШИЙ',
    },
    {
        id: 31,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ФРЕШ25',
    },
    {
        id: 32,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ТЦ SТОЛИЦА',
    },
    {
        id: 33,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'СИГМА',
    },
    {
        id: 34,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ИДЕЯ',
    },
    {
        id: 35,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Столичный',
    },
    {
        id: 36,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'СберМаркет',
        text: 'СберМаркет',
    },
    {
        id: 37,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Быстроном',
    },
    {
        id: 38,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'АГРОКОМПЛЕКС',
    },
    {
        id: 39,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'YVES ROCHER',
    },
    {
        id: 40,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'ЮгОпт',
    },
    {
        id: 41,
        image: 'https://via.placeholder.com/70x70?text=Text',
        title: 'Дочки-Сыночки',
    },
];
const homePageImage = 'https://via.placeholder.com/1245x518?text=Text';
const homeText = 'Продукты \n' + '\n' + 'из магазинов\n' + '\n' + ' на дом и в офис';
const homeSubText = 'Выберите магазин и начинайте делать покупки!';
const forOffer = [
    {
        id: 1,
        icon: 'fas fa-truck',
        text: 'Доставим день в день, в удобное для вас время',
    },
    {
        id: 2,
        icon: 'fas fa-dolly',
        text: 'Привезём тяжелые сумки прямо до вашей двери',
    },
    {
        id: 3,
        icon: 'fas fa-gifts',
        text: 'Выберем лучшее с полок магазинов, как для себя',
    },
    {
        id: 4,
        icon: 'fas fa-tags',
        text: 'Скидки и акции наших партнёров на 2 000 товаров',
    },
];
const offerTitleText = 'Сохраняйте время, энергию и деньги\n' +
    '\n' +
    'для того, что важно именно вам';
const forStatistics = [
    {
        id: 1,
        text: '**Более 20000 заказов** ежедневно доставляют наши курьеры',
    },
    {
        id: 2,
        text: '**400 тонн товаров** мы поднимаем\n' +
            '\n' +
            'в дома клиентов каждый день',
    },
    {
        id: 3,
        text: 'Мы стали незаменимым помощником\n' +
            '\n' +
            'для** 500 тысяч семей** по всей России за 7 лет',
    },
    {
        id: 4,
        text: '**Более 10000 компаний** доверяют нам\n' +
            '\n' +
            'закупку продуктов и товаров для офиса',
    },
];
const delivery = {
    img: 'https://via.placeholder.com/1245x505?text=Text',
    title: 'Доставляем\n' + '\n' + '**в 115 городах** России',
    btn: 'Показать всё',
    cities: [
        { name: 'Москва' },
        { name: 'Абакан' },
        { name: 'Анадырь' },
        { name: 'Астрахань' },
        { name: 'Барнаул' },
        { name: 'Бердск' },
        { name: 'Санкт-Петербург' },
        { name: 'Альметьевск' },
        { name: 'Архангельск' },
        { name: 'Балашиха' },
        { name: 'Белгород' },
        { name: 'Бийск' },
    ],
};
const forChoice = [
    {
        id: 1,
        image: 'https://via.placeholder.com/360x360?text=Text',
        number: '1',
        text: '**Выберите магазин и положите**\n' +
            '\n' +
            '**в корзину нужные товары,**\n' +
            '\n' +
            'выберите удобное время\n' +
            '\n' +
            'доставки заказа',
    },
];
const forSpecialist = [
    {
        id: 1,
        image: 'https://via.placeholder.com/360x360?text=Text',
        number: '2',
        text: '**Специалист по закупкам**\n' +
            '\n' +
            '**соберет** самые свежие продукты\n' +
            '\n' +
            'прямо с полок магазина',
    },
];
const forCourier = [
    {
        id: 1,
        image: 'https://via.placeholder.com/360x360?text=Text',
        number: '3',
        text: '**Курьер привезет продукты**\n' +
            '\n' +
            'через несколько часов, а вы\n' +
            '\n' +
            'можете заняться своими делами',
    },
];
const choiceTitleText = 'СберМаркет сходит в магазин вместо вас';
const forApp = {
    id: 1,
    image: 'https://sbermarket.ru/assets/webpack/images/home_landing/mobile_sbermarket_2x-05ced63a@1x.png',
    title: 'Скачивайте наше удобное приложение\n' +
        '\n' +
        'в Google Play или App Store',
    googlePlayButton: 'Google Play',
    appStoreButton: 'AppStore',
};
const productModal = {
    productBlock: {
        button: "Купить",
        likeIcon: 'fas fa-heart my-heart',
    },
    recommendedBlock: {
        recommendedTitle: 'С этим смотрят',
    },
    specificationBlock: {
        descriptionTitle: "Описание",
        nutritionalValueTitle: "Пищевая ценность",
        nutritionalOnTheValueTitle: "на 100 г",
        compositionTitle: "Состав",
        generalInformationTitle: "Общая информация",
        hideInformation: "Скрыть подробную информацию",
    },
};
const productsSliderCards = [
    {
        id: 1,
        img: "https://via.placeholder.com/70x70?img=Img",
        disPrice: "599.01",
        oldPrice: "889.00",
        currency: "₽",
        desc: "Сыр полутвердый Ламбер 50% ~ 1 кг бзмж",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 2,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "63.40",
        currency: "₽",
        desc: "Пиво безалкогольное Heineken пастеризованное",
        weight: "467.7 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 3,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "34.99",
        currency: "₽",
        desc: "Сахар-песок Aro 1 кг",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 4,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "125.00",
        oldPrice: "166.00",
        currency: "₽",
        desc: "Сыр Сиртаки Classic для греческого салата 35% 330 ...",
        weight: "330 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 5,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "49.90",
        currency: "₽",
        desc: "Кабачки грунтовые",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 6,
        img: "https://via.placeholder.com/70x70?img=Img",
        disPrice: "125.00",
        oldPrice: "184.00",
        currency: "₽",
        desc: "Сыр полутвердый Arla Natura Сливочный 45% 200 г бз ...",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 7,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "21.90",
        currency: "₽",
        desc: "Капуста белокочанная ранняя",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 8,
        img: "https://via.placeholder.com/70x70?img=Img",
        disPrice: "54.90",
        oldPrice: "74.89 ",
        currency: "₽",
        desc: "Молоко Белый Город ультрапастеризованное 3,2% 1 л ...",
        weight: "1 л",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 9,
        img: "https://via.placeholder.com/70x70?img=Img",
        price: "24.90",
        currency: "₽",
        desc: "Лук репчатый",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 10,
        img: "https://via.placeholder.com/70x70?img=Img",
        disPrice: "99.99",
        oldPrice: "129.90",
        currency: "₽",
        desc: "Помидоры сливовидные",
        weight: "1 кг",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
];
const productsSliderTitle = 'Популярные товары';
const footerMenu = [
    {
        title: 'СберМаркет',
        items: [
            'О Компании',
            'Контакты',
            'Вакансии',
            'Документы',
            'Стать партнером',
        ],
    },
    {
        title: 'Помощь покупателю',
        items: ['Как мы работаем', 'Зоны доставки', 'Доставка и оплата', 'Помощь'],
    },
];
const footerData = {
    logoFooter: 'https://via.placeholder.com/220x40?img=logo',
    footerMenu: [
        {
            title: 'Сбермаркет1',
            menuItems: [
                {
                    title: 'О Компании',
                    link: '#',
                },
                {
                    title: 'Контакты',
                    link: '#',
                },
                {
                    title: 'Вакансии',
                    link: '#',
                },
                {
                    title: 'Документы',
                    link: '#',
                },
                {
                    title: 'Стать партнером',
                    link: '#',
                },
            ],
        },
        {
            title: 'Помощь покупателю',
            menuItems: [
                {
                    title: 'Как мы работаем',
                    link: '#',
                },
                {
                    title: 'Зоны доставки',
                    link: '#',
                },
                {
                    title: 'Доставка и оплата',
                    link: '#',
                },
                {
                    title: 'Помощь',
                    link: '#',
                },
            ],
        },
    ],
    footerContactColumn: {
        number: '+7 800 222-11-11',
        time: 'Круглосуточно',
        input: 'Форма обратной связи',
        text: 'Пишите нам свои вопросы, комментарии и предложения',
    },
    footerCopyrightRow: {
        copyright: 'Copyright 2013 —2020',
        nameCompany: 'ООО "Инстамарт Сервис"',
        download: 'Скачайте наше удобное приложение в Google Play и App Store',
    },
    footerLinksPolitics: [
        {
            title: 'Политика возврата',
            link: '/',
        },
        {
            title: 'Обработка персональных данных',
            link: '/',
        },
        {
            title: 'Официальное уведомление',
            link: '/',
        },
    ],
};
const logoFooter = 'https://via.placeholder.com/220x40?img=logo';
const forUpFooterForm = {
    number: '+7 800 222-11-00',
    time: 'Круглосуточно',
    input: 'Форма обратной связи',
    text: 'Пишите нам свои вопросы, комментарии и предложения',
};
const forDownFooter = {
    copyright: 'Copyright 2013 —2020',
    company: 'ООО "Инстамарт Сервис"',
    download: 'Скачайте наше удобное приложение в Google Play и App Store',
};
const forFooterInfo = [
    'Политика возврата',
    'Обработка персональных данных',
    'Официальное уведомление',
];
const recentlyWatchedTitle = 'Вы недавно смотрели';
const productsList = [
    {
        header: {
            title: "L'Oreal Paris с заботой о красоте",
            allProducts: "Показать 97 товаров ",
        },
        card: [
            {
                id: 1,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "347,56",
                desc: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 2,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "279,00",
                desc: "Бальзам L’Oreal Paris Elseve Длина мечты для длинных поврежденных волос",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 3,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "361,00",
                desc: "Экспресс-Кондиционер L’Oreal Paris Elseve Полное Восстановление 5 двухфазный",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 4,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "315,00",
                desc: "Стойкая крем-краска для волос L'Oreal Excellence светло-русый пепельный оттенок 8.1",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 5,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "265,00",
                desc: "Шампунь L’Oreal Paris Elseve Роскошь 6 масел питательный для всех типов волос 400 мл",
                weight: "400 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 6,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "261,02",
                desc: "Очищающий тоник для лица L'Oreal Paris Бесконечная Свежесть для нормальной и смешанной кожи с экстрактами Розы и Лотоса 200 мл",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 7,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "289,00",
                oldPrice: "334,96",
                discount: "-14%",
                disDate: "до 19.08",
                desc: "Гель для бритья L'Oreal Paris Men Expert Sensitive для чувствительной кожи 200 мл",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 8,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "289,00",
                oldPrice: "334,96",
                discount: "-14%",
                disDate: "до 19.08",
                desc: "Лосьон для бритья L'Oreal Paris Men Expert Sensitive для чувствительной кожи 200 мл",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 9,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "289,00",
                oldPrice: "334,96",
                discount: "-14%",
                disDate: "до 19.08",
                desc: "Гель после бритья L'Oreal Paris Men Expert Sensitive для чувствительной кожи 200 мл",
                weight: "200 мл",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Дачный сезон",
            allProducts: "Показать 2345 товаров ",
        },
        card: [
            {
                id: 10,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "65,29",
                desc: "Газированный напиток Pepsi Wild Cherry 0,5 л",
                weight: "0,5 л x 12",
                multipack: {
                    amount: "12",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 11,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "505,00",
                desc: "Шашлык из перепелов Qegg Классический охлажденный ~1 кг",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 12,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "1 469,30",
                oldPrice: "2 099,00",
                discount: "-30%",
                disDate: "до 9.08",
                desc: "Стейк говяжий Мираторг рибай охлажденный",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 13,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "216,00",
                desc: "Крыло куриное с кожей Петелинка Целое охлажденное ~900 г",
                weight: "900 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 14,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "149,75",
                desc: "Форель Радужная Ла Маре потрошеная с головой охлажденная",
                weight: "250 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 15,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "129,00",
                oldPrice: "237,00",
                discount: "-46%",
                disDate: "до 19.08",
                desc: "Сосиски Велком Докторские",
                weight: "440 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 16,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "239,90",
                desc: "Перец красный сладкий",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 17,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "42,00",
                desc: "Укроп Ло Карно в пакете 70 г",
                weight: "70 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 18,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "270,00",
                desc: "Шампиньоны Horeca",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Дешевле, чем на полке",
            allProducts: "Показать 71 товар",
        },
        card: [
            {
                id: 19,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "38,33",
                desc: "Вода питьевая Святой Источник природная негазированная 1,5 л",
                weight: "1,5 кг x 6",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 20,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "78,28",
                desc: "Вода минеральная Borjomi газированная лечебно-столовая 0,5 л",
                weight: "500 г x 12",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 21,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "68,23",
                desc: "Сметана Простоквашино 15 % 315 г бзмж",
                weight: "315 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 22,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "76,68",
                desc: "Сметана Простоквашино 20 % 315 г бзмж",
                weight: "315 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 23,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "138,58",
                oldPrice: "149,01",
                discount: "-7%",
                disDate: "до 31.08",
                desc: "Колбаски Metro Chef Особые Охотничьи",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 24,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "84,83",
                desc: "Соус Heinz Сырный 230 г",
                weight: "230 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 25,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "81,52 ₽",
                desc: "Вода питьевая Aqua Minerale негазированная 5 л",
                weight: "5 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 26,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "81,52 ₽",
                desc: "Вода питьевая Aqua Minerale негазированная 5 л",
                weight: "5 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 27,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "81,52 ₽",
                desc: "Вода питьевая Aqua Minerale негазированная 5 л",
                weight: "5 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Бренды METRO",
            allProducts: "Показать 1986 товар",
        },
        card: [
            {
                id: 28,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "227,00",
                desc: "Чайный напиток Rioba Ройбуш земляничный в пакетиках 2 г 20 шт",
                weight: "40 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 29,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "81,91",
                desc: "Сок Fine Life апельсин",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 30,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "75,49",
                desc: "Молоко Rioba ультрапастеризованное 3,5% 1 л бзмж",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 31,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "138,58",
                oldPrice: "149,01",
                discount: "-7%",
                disDate: "до 31.08",
                desc: "Колбаски Metro Chef Особые Охотничьи",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 32,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "59,90",
                oldPrice: "75,30",
                discount: "-20%",
                disDate: "до 19.08",
                desc: "Мука Fine Life пшеничная высший сорт",
                weight: "2 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 33,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "312,00",
                desc: "Перец Horeca Select черный молотый",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 34,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "52,90",
                oldPrice: "58,79",
                discount: "-10%",
                disDate: "до 19.08",
                desc: "Печенье Fine Life Купелька с малиной 225 г",
                weight: "225 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 35,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "52,90",
                oldPrice: "58,79",
                discount: "-10%",
                disDate: "до 19.08",
                desc: "Печенье Fine Life Купелька с малиной 225 г",
                weight: "225 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 36,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "52,90",
                oldPrice: "58,79",
                discount: "-10%",
                disDate: "до 19.08",
                desc: "Печенье Fine Life Купелька с малиной 225 г",
                weight: "225 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Сыры",
            allProducts: "Показать 624 товаров",
        },
        card: [
            {
                id: 37,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "928,00",
                desc: "Сыр полутвердый Emmi Tete de Moine нарезка 51% 100 г бзмж",
                weight: "100 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 38,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "197,00",
                desc: "Сыр Milkana Гранд Блю голубой с плесенью сливочный бзмж",
                weight: "100 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 39,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "275,00",
                desc: "Сыр мягкий Satonoyuki соевый тофу Shiki-Organic 300 г",
                weight: "300 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 40,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "205,00",
                desc: "Сыр мягкий Bonfesto Рикотта 40% 500 г бзмж",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 41,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "214,02",
                desc: "Сыр мягкий Fine Life Маскарпоне 80% 250 г бзмж",
                weight: "250 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 42,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "191,00",
                desc: "Сыр мягкий Milkana GrandBlu сливочный с голубой плесенью 56% 100 г бзмж",
                weight: "100 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 43,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "206,00",
                desc: "Сыр мягкий Vitalat Камамбер с белой плесенью 45% 125 г бзмж",
                weight: "125 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 44,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "206,00",
                desc: "Сыр мягкий Vitalat Камамбер с белой плесенью 45% 125 г бзмж",
                weight: "125 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 45,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "206,00",
                desc: "Сыр мягкий Vitalat Камамбер с белой плесенью 45% 125 г бзмж",
                weight: "125 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Овощи и фрукты",
            allProducts: "Показать 393 товаров",
        },
        card: [
            {
                id: 46,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "299,00",
                desc: "Авокадо",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 47,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "199,90",
                desc: "Фенхель в лотке ~1 кг",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 48,
                img: "https://sbermarket.ru/spree/products/60230/small/65988.jpg?1587399619",
                desc: "Кабачки грунтовые",
                weight: "Нет в наличии",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 49,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "199,76",
                desc: "Картофель для варки ~2,5 кг",
                weight: "2,5 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 50,
                img: "https://via.placeholder.com/200x200?img=Img",
                desc: "Редис красный 500 г",
                weight: "Нет в наличии",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 51,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "799,90",
                desc: "Спаржа зеленая крупная",
                weight: "450 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 52,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,90",
                desc: "Капуста белокочанная ранняя",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 53,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,90",
                desc: "Капуста белокочанная ранняя",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 54,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,90",
                desc: "Капуста белокочанная ранняя",
                weight: "1 кг",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Вода, соки, напитки",
            allProducts: "Показать 1417 товаров ",
        },
        card: [
            {
                id: 55,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "65,29",
                desc: "Газированный напиток Pepsi Wild Cherry 0,5 л",
                weight: "0,5 л x 12",
                multipack: {
                    amount: "12",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 56,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,89",
                desc: "Вода питьевая Святой Источник газированная 1 л",
                weight: "1 кг x 6",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 57,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "52,39",
                desc: "Сок Swell апельсин",
                weight: "0,25 л x 8",
                multipack: {
                    amount: "8",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 58,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "57,59",
                desc: "Чай Lipton холодный лимон 0,25 л",
                weight: "1 шт x 12",
                multipack: {
                    amount: "12",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 59,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "229,00",
                oldPrice: "279,00",
                discount: "-18%",
                disDate: "до 19.08",
                desc: "Шампанское детское Abrau Junior безалкогольное золотое",
                weight: "0,75 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 60,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "36,90",
                oldPrice: "66,90",
                discount: "-45%",
                disDate: "до 19.08",
                desc: "Вода Ессентуки Старый Источник №4",
                weight: "1,5 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 61,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,89",
                desc: "Вода питьевая Святой Источник негазированная 1 л",
                weight: "1 кг x 6",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 62,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,89",
                desc: "Вода питьевая Святой Источник негазированная 1 л",
                weight: "1 кг x 6",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 63,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "19,89",
                desc: "Вода питьевая Святой Источник негазированная 1 л",
                weight: "1 кг x 6",
                multipack: {
                    amount: "6",
                    weight: "шт.",
                },
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Молочные продукты",
            allProducts: "Показать 1667 товаров",
        },
        card: [
            {
                id: 64,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "189,00",
                oldPrice: "226,00",
                discount: "-16%",
                disDate: "до 19.08",
                desc: "Молоко соевое Joya Natural Calcium 2,3% 1л",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 65,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "275,00",
                desc: "Сыр мягкий Satonoyuki соевый тофу Shiki-Organic 300 г",
                weight: "300 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 66,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "75,49",
                desc: "Молоко Rioba ультрапастеризованное 3,5% 1 л бзмж",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 67,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "139,00",
                desc: "Молоко Село Зеленое отборное ультрапастеризованное 2,8 - 5,5% 500 мл бзмж",
                weight: "0,5 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 68,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "184,00",
                desc: "Молоко кокосовое Aroy - D 60% 18,5% 400 мл",
                weight: "0,4 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 69,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "189,00",
                oldPrice: "226,00",
                discount: "-16%",
                disDate: "до 19.08",
                desc: "Молоко соевое Joya Natural Calcium 2,3% 1л",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 70,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "119,00",
                desc: "Напиток гречневый Nemoloko классический Лайт 1 л",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 71,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "119,00",
                desc: "Напиток гречневый Nemoloko классический Лайт 1 л",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 72,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "119,00",
                desc: "Напиток гречневый Nemoloko классический Лайт 1 л",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Бакалея",
            allProducts: "Показать 1227 товаров",
        },
        card: [
            {
                id: 73,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "130,00",
                desc: "Булгур Bravolli",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 74,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "75,49",
                desc: "Крупа Увелка гречневая в пакетиках для варки",
                weight: "5 пак",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 75,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "229,00",
                desc: "Киноа Националь",
                weight: "450 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 76,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "52,49",
                oldPrice: "74,99",
                discount: "-30%",
                disDate: "до 19.08",
                desc: "Крупа кукурузная Увелка в пакетиках для варки",
                weight: "400 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 77,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "179,00",
                desc: "Кускус Bravolli",
                weight: "1 л",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 78,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "50,00",
                desc: "Крупа манная Fine Life",
                weight: "800 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 79,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "56,99",
                desc: "Крупа перловая Увелка в пакетиках для варки",
                weight: "400 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 80,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "56,99",
                desc: "Крупа перловая Увелка в пакетиках для варки",
                weight: "400 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 81,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "56,99",
                desc: "Крупа перловая Увелка в пакетиках для варки",
                weight: "400 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
    {
        header: {
            title: "Сладости",
            allProducts: "Показать 1956 товаров",
        },
        card: [
            {
                id: 82,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "1 699,00",
                desc: "Подарочный набор Тайгета 700 г",
                weight: "1 шт",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 83,
                img: "https://via.placeholder.com/200x200?img=Img",
                disPrice: "209,00",
                oldPrice: "397,00",
                discount: "-47%",
                disDate: "до 02.09",
                desc: "Набор конфет А.Коркунов Ассорти темный и молочный шоколад 192 г",
                weight: "192 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 84,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "76,99",
                desc: "Мармелад Fruittella звери микс",
                weight: "150 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 85,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "86,99",
                desc: "Конфеты Eco botanica с экстрактом имбиря",
                weight: "200 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 86,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "117,00",
                desc: "Конфеты КДВ Нильс карамельная жевательная с фруктово-ягодной начинкой",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 87,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "479,00",
                desc: "Конфеты РотФронт Грильяж в шоколаде",
                weight: "500 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 88,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "263,00 ₽",
                desc: "Драже M&M's с молочным шоколадом и арахисом",
                weight: "360 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 89,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "263,00 ₽",
                desc: "Драже M&M's с молочным шоколадом и арахисом",
                weight: "360 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
            {
                id: 90,
                img: "https://via.placeholder.com/200x200?img=Img",
                price: "263,00 ₽",
                desc: "Драже M&M's с молочным шоколадом и арахисом",
                weight: "360 г",
                currency: "₽",
                productData: {
                    getProduct: {
                        brand: "Товары для офиса",
                        products: "Подарки для сотрудников",
                        category: "Средства для бритья",
                        defaultImgId: 1,
                        image: [
                            {
                                id: 1,
                                img: 'https://via.placeholder.com/250x250?img=Img',
                            },
                            {
                                id: 2,
                                img: 'https://via.placeholder.com/251x250?img=Img',
                            },
                            {
                                id: 3,
                                img: 'https://via.placeholder.com/252x250?img=Img',
                            },
                        ],
                        name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                        weight: "200 мл",
                        price: "347,56",
                        currency: "₽",
                        presence: 22,
                    },
                    getRecommended: {
                        featuredProduct: [
                            {
                                id: 1,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "269.59 ₽",
                                productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                                weight: "190 г",
                            },
                            {
                                id: 2,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "252.69 ₽",
                                productName: "Конфеты Dolce Albero Ассорти",
                                weight: "200 г",
                            },
                            {
                                id: 3,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "115.79 ₽",
                                productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                                weight: "200 г",
                            },
                            {
                                id: 4,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Миска Mallony 1,1л",
                                weight: "1 шт",
                            },
                            {
                                id: 5,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "168.49 ₽",
                                productName: "Миска Mallony 3,3л",
                                weight: "1 шт",
                            },
                            {
                                id: 6,
                                image: "https://via.placeholder.com/70x70?text=Text",
                                price: "105.29 ₽",
                                productName: "Грибы вешенки свежие",
                                weight: "300 гр",
                            },
                        ]
                    },
                    getSpecification: {
                        description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                            'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                            'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                            'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                        composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                            ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                            'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                        nutritionalValue: [],
                        BrandNameTitle: 'Бренд',
                        BrandName: 'L\'Oreal Paris',
                        generalInformation: [
                            {
                                id: 1,
                                infoTitle: 'Производитель',
                                info: 'ЗАО Лореаль'
                            },
                            {
                                id: 2,
                                infoTitle: 'Страна',
                                info: 'Франция'
                            },
                            {
                                id: 3,
                                infoTitle: 'Количество в упаковке',
                                info: '200 мл'
                            },
                            {
                                id: 4,
                                infoTitle: 'Условия хранения',
                                info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                            },
                            {
                                id: 5,
                                infoTitle: 'Срок хранения',
                                info: '3 г'
                            },
                            {
                                id: 6,
                                infoTitle: 'Вид средства для бритья',
                                info: 'Пена'
                            },
                            {
                                id: 7,
                                infoTitle: 'Пол',
                                info: 'Мужской'
                            },
                            {
                                id: 8,
                                infoTitle: 'Свойства',
                                info: 'Смягчающие'
                            },
                            {
                                id: 9,
                                infoTitle: 'Тип кожи',
                                info: 'Чувствительная'
                            },
                            {
                                id: 10,
                                infoTitle: 'Экстракт алоэ',
                                info: 'Добавки'
                            },
                            {
                                id: 11,
                                infoTitle: 'Особенность',
                                info: 'Гладкое скольжение'
                            },
                            {
                                id: 12,
                                infoTitle: 'Упаковка',
                                info: 'Аэрозоль'
                            },
                        ],
                    },
                },
            },
        ],
    },
];
const recentlyWatchedProducts = [
    {
        id: 1,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "206.00",
        currency: "₽",
        weight: "125 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 2,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "191.00",
        currency: "₽",
        weight: "100 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 3,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "205.00",
        currency: "₽",
        weight: "500 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 4,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "275.00",
        currency: "₽",
        weight: "300 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 5,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "928.00",
        currency: "₽",
        weight: "100 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 6,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "263.00",
        currency: "₽",
        weight: "360 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 7,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "479.00",
        currency: "₽",
        weight: "500 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 8,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "117.00",
        currency: "₽",
        weight: "500 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 9,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "86.99",
        currency: "₽",
        weight: "200 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 10,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "76.99",
        currency: "₽",
        weight: "150 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 11,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "56.99",
        currency: "₽",
        weight: "400 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 12,
        img: "https://via.placeholder.com/100x100?img=Img",
        price: "179.00",
        currency: "₽",
        weight: "450 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
    {
        id: 13,
        img: "https://via.placeholder.com/100x100?img=Img",
        disPrice: "52.49",
        oldPrice: "74.99",
        currency: "₽",
        weight: "125 г",
        productData: {
            getProduct: {
                brand: "Товары для офиса",
                products: "Подарки для сотрудников",
                category: "Средства для бритья",
                defaultImgId: 1,
                image: [
                    {
                        id: 1,
                        img: 'https://via.placeholder.com/250x250?img=Img',
                    },
                    {
                        id: 2,
                        img: 'https://via.placeholder.com/251x250?img=Img',
                    },
                    {
                        id: 3,
                        img: 'https://via.placeholder.com/252x250?img=Img',
                    },
                ],
                name: "Пена для бритья L’Oreal Paris Men Expert для чувствительной кожи гипоаллергенная 200 мл",
                weight: "200 мл",
                price: "347,56",
                currency: "₽",
                presence: 22,
            },
            getRecommended: {
                featuredProduct: [
                    {
                        id: 1,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "269.59 ₽",
                        productName: "Конфеты Россия Щедрая душа Родные просторы с начинкой",
                        weight: "190 г",
                    },
                    {
                        id: 2,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "252.69 ₽",
                        productName: "Конфеты Dolce Albero Ассорти",
                        weight: "200 г",
                    },
                    {
                        id: 3,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "115.79 ₽",
                        productName: "Конфеты Бабаевский оригинальные с фундуком и какао",
                        weight: "200 г",
                    },
                    {
                        id: 4,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Миска Mallony 1,1л",
                        weight: "1 шт",
                    },
                    {
                        id: 5,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "168.49 ₽",
                        productName: "Миска Mallony 3,3л",
                        weight: "1 шт",
                    },
                    {
                        id: 6,
                        image: "https://via.placeholder.com/70x70?text=Text",
                        price: "105.29 ₽",
                        productName: "Грибы вешенки свежие",
                        weight: "300 гр",
                    },
                ]
            },
            getSpecification: {
                description: 'Покраснения, стянутость, раздражение… Ежедневное бритье - настоящее испытание для чувствительной кожи. ' +
                    'Дайте отпор лезвию бритвы с пеной для бритья для чувствительной кожи! Гипоаллергенная формула пены специально разработана для ' +
                    'чувствительной кожи: она обогащена экстрактом Алоэ Вера, успокаивающим кожу и уменьшающим раздражение от бритья, защищает от жжения во ' +
                    'время бритья. Не содержит спирта. Протестировано под дерматологическим контролем.',
                composition: 'Aqua/water, Stearic Acid, Triethanolamine, Palmitic Acid, Glicerin, Isobutane, Polysorbate 20, Cocamide Mea, Sodium Chloride,' +
                    ' Trideceth-9 PG-Amodimethicone, Trideceth-12, Dimethiconol Stearate, Orofane, Aloe Barbadensis/Aloe Barbadensis Leaf Juice, Parfum/Fragrance, ' +
                    'Myristic Acid, Butane, Cetyl Hydroxyethylcellulose, Lauril Betaine',
                nutritionalValue: [],
                BrandNameTitle: 'Бренд',
                BrandName: 'L\'Oreal Paris',
                generalInformation: [
                    {
                        id: 1,
                        infoTitle: 'Производитель',
                        info: 'ЗАО Лореаль'
                    },
                    {
                        id: 2,
                        infoTitle: 'Страна',
                        info: 'Франция'
                    },
                    {
                        id: 3,
                        infoTitle: 'Количество в упаковке',
                        info: '200 мл'
                    },
                    {
                        id: 4,
                        infoTitle: 'Условия хранения',
                        info: 'Хранить вдали от солнечных лучей и не подвергать нагреванию свыше +50°С.'
                    },
                    {
                        id: 5,
                        infoTitle: 'Срок хранения',
                        info: '3 г'
                    },
                    {
                        id: 6,
                        infoTitle: 'Вид средства для бритья',
                        info: 'Пена'
                    },
                    {
                        id: 7,
                        infoTitle: 'Пол',
                        info: 'Мужской'
                    },
                    {
                        id: 8,
                        infoTitle: 'Свойства',
                        info: 'Смягчающие'
                    },
                    {
                        id: 9,
                        infoTitle: 'Тип кожи',
                        info: 'Чувствительная'
                    },
                    {
                        id: 10,
                        infoTitle: 'Экстракт алоэ',
                        info: 'Добавки'
                    },
                    {
                        id: 11,
                        infoTitle: 'Особенность',
                        info: 'Гладкое скольжение'
                    },
                    {
                        id: 12,
                        infoTitle: 'Упаковка',
                        info: 'Аэрозоль'
                    },
                ],
            },
        },
    },
];
// group-b
const header = {
    numberHeader: '+7 800 222-11-00',
    topBar: {
        id: 1,
        choiceDelivery: 'Доставка',
        choicePickUp: 'Самовывоз',
        choiceAddress: ' Выберите адрес доставки',
        choiceAddressIcon: 'fas fa-pencil-alt',
        timeOfDeliveryText: '🚛 Ближайшая доставка',
        timeOfDelivery: 'сегодня, 19:00-21:00',
        phoneNumber: '+7 800 222-11-00',
        workingHours: 'Круглосуточно',
        loginAndRegistration: {
            id: 1,
            closeIcon: 'fas fa-times',
            loginBtnText: 'Вход',
            regBtnText: 'Регистрация',
            users: [
                {
                    id: 1,
                    name: 'user',
                    mail: 'user@mail.ru',
                    password: 'Password1',
                    forBusiness: false,
                    mailing: false,
                },
                {
                    id: 2,
                    name: 'user2',
                    mail: 'user2@mail.ru',
                    password: 'Password2',
                    forBusiness: false,
                    mailing: false,
                },
                {
                    id: 3,
                    name: 'user3',
                    mail: 'user3@mail.ru',
                    password: 'Password3',
                    forBusiness: false,
                    mailing: false,
                },
                {
                    id: 4,
                    name: 'user4',
                    mail: 'user4@mail.ru',
                    password: 'Password4',
                    forBusiness: false,
                    mailing: false,
                },
            ],
            login: {
                id: 1,
                rememberMe: 'Запомнить меня',
                logIn: 'Войти',
                remindPass: 'Напомнить пароль',
                bankIcon: `
                  <svg viewBox="0 0 23 23" class="sberbank_button">
                    <g transform="translate(58.42 11)">
                      <circle fill="none" cx="-46.9" cy="0.5" r="11"/>
                      <path fill-rule="evenodd" clip-rule="evenodd" fill="currentColor"
                            d="M-37.1-4.5c.8 1.6 1.2 3.3 1.2 5 0 6.1-4.9 11-11 11s-11-4.9-11-11v-.7l6.7 3.8 14.1-8.1zm-1.4-2c.3.3.5.6.7 1l-13.5 7.7-6.5-3.7.3-1.2 6.2 3.6 12.8-7.4zm-1.8-1.7c.3.3.7.5 1 .8L-51.2-.6-57-3.8c.2-.4.3-.7.5-1.1l5.2 3 11-6.3zm-1-.7l-9.9 5.7-4.6-2.7c.2-.3.5-.6.8-.9l3.9 2.2 8.6-4.9c.3.1.8.4 1.2.6z"/>
                    </g>
                  </svg>`,
                logInToBank: 'Вход через Сбербанк ID',
                orLogInSocial: 'или авторизуйтесь через',
                socialIcons: [
                    {
                        id: 1,
                        social: `
                     <svg class="social-icons" width="24" height="24" viewBox="0 0 24 24" color="#5780b1">
                      <g fill="none" fill-rule="evenodd">
                        <path fill="currentColor"
                              d="M20.642 14.413c1.783 1.646 2.155 2.451 2.215 2.55.736 1.22-.816 1.316-.816
                              1.316l-2.974.043s-.643.125-1.482-.452c-1.115-.759-2.637-2.738-3.453-2.48-.83.26-.565 2.335-.565
                              2.335s.006.254-.181.458c-.207.215-.609.132-.609.132h-.856s-3.175.013-5.765-2.671C3.336 12.718.978
                              7.247.978 7.247s-.144-.347.01-.532c.177-.207.655-.204.655-.204h3.182s.298.04.512.198c.18.129.277.373.277.373S6
                              8.1 6.682 9.275c1.328 2.289 1.947 2.79
                              2.398 2.543.656-.36.459-3.236.459-3.236s.013-1.045-.332-1.51c-.267-.363-.766-.469-.986-.498-.181-.02.113-.436.495-.62.572-.277
                              1.586-.297 2.78-.284.93.01 1.281-.003 1.281-.003 1.097.264.726 1.286.726 3.727 0
                              .785-.144 1.886.425 2.249.244.162 1.12.185 2.61-2.338.709-1.198
                              1.267-2.322 1.267-2.322s.12-.254.298-.36c.187-.112.435-.112.435-.112l3.349.016s1.007-.125 1.167.33c.171.475-.411
                              1.306-1.776 3.124-2.248 2.985-2.5 2.708-.636 4.432z"/>
                        <path d="M0 0h24v24H0z"/>
                      </g>
                    </svg>`,
                    },
                    {
                        id: 2,
                        social: `
                     <svg width="24" height="24" viewBox="0 0 24 24" color="#4561a3">
                      <g fill="none" fill-rule="evenodd">
                        <path fill="currentColor"
                              d="M15.54 11.652h-2.22v9.056h-3.3v-9.056H8.043V8.865h1.979v-1.68c.002-2.443.964-3.893 3.69-3.893h2.247v2.786h-1.507c-1.062 0-1.132.42-1.132 1.2v1.587h2.64l-.418 2.787z"/>
                              <path d="M0 0h24v24H0z"/>
                      </g>
                    </svg>`,
                    },
                    {
                        id: 3,
                        social: `
                      <svg width="24" height="24" viewBox="6 6 24 24" color="#ff9e00">
                        <path fill="currentColor"
                              d="M21.008 18A3.011 3.011 0 0118 21.008 3.011 3.011 0 0114.992 18 3.011 3.011 0 0118 14.992 3.011 3.011 0 0121.008 18M18 8C12.486 8 8 12.486 8 18s4.486 10 10 10c2.02 0 3.968-.601 5.633-1.74l.029-.02-1.348-1.566-.022.015A7.92 7.92 0 0118 25.95c-4.384 0-7.95-3.566-7.95-7.95s3.566-7.95 7.95-7.95 7.95 3.566 7.95 7.95a7.94 7.94 0 01-.188 1.709c-.25 1.032-.973 1.348-1.516 1.306-.545-.044-1.183-.433-1.188-1.384V18A5.063 5.063 0 0018 12.942 5.063 5.063 0 0012.942 18 5.063 5.063 0 0018 23.058a5.02 5.02 0 003.584-1.493 3.249 3.249 0 002.767 1.504c.727 0 1.448-.243 2.03-.685.599-.455 1.046-1.113 1.294-1.903.04-.128.112-.42.113-.422l.001-.01C27.935 19.413 28 18.78 28 18c0-5.514-4.486-10-10-10"/>
                      </svg>`,
                    },
                ],
            },
            // reg: {
            //   id: 1,
            //   rememberMe: 'Запомнить меня',
            //   logIn: 'Войти',
            //   remindPass: 'Напомнить пароль',
            //   logInToBank: 'Вход через Сбербанк ID',
            //   orLogInSocial: 'или авторизуйтесь через'
            // },
            reg: {
                checkForBis: 'Хочу заказывать для бизнеса',
                checkForAdvertisingText: 'Согласен',
                checkForAdvertisingLink: 'на рекламную рассылку',
                regBtn: 'Зарегистрироваться',
                agreementText: 'Продолжая, я соглашаюсь на обработку персональных данных на',
                agreementLink: 'следующих условиях',
            },
        },
        modalWindow: {
            id: 1,
            modalWindowTitle: 'Выберите способ получения',
            offerToEnter: 'Уже зарегистрированы?',
            offerToEnterLink: 'Войти',
            choiceDelivery: 'Доставка',
            choicePickUp: 'Самовывоз',
            Delivery: {
                id: 1,
                enterAddressText: 'Введите адрес доставки, чтобы увидеть доступные магазины',
                searchIcon: 'fas fa-search',
                btnText: 'Сохранить',
                cityForSelectedDelivery: [
                    {
                        id: 1,
                        city: 'Москва',
                        storeAddress: [
                            {
                                id: 1,
                                storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 2,
                                storeAddress: 'Москва, Маршала Прошлякова, 14',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 3,
                                storeAddress: 'Москва, р-н северного Измайлово, 104-й км. МКАД, 6',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 4,
                                storeAddress: 'Москва, Шоссейная, 2Б',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 5,
                                storeAddress: 'Москва, Дмитровское ш, 165Б',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 6,
                                storeAddress: 'д. Апаринки, МО, п. Совхоза им. Ленина, 8',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 7,
                                storeAddress: 'Москва, Рябиновая, 59',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 8,
                                storeAddress: 'Москва, Боровское ш, 10А',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                        ],
                    },
                    {
                        id: 2,
                        city: 'Казань',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 3,
                        city: 'Екатеринбург',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 4,
                        city: 'Нижний Новгород',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 5,
                        city: 'Ростов-на-Дону',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 6,
                        city: 'Уфа',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 7,
                        city: 'Краснодар',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 8,
                        city: 'Самара',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 9,
                        city: 'Воронеж',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 10,
                        city: 'Волгоград',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 11,
                        city: 'Омск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 12,
                        city: 'Челябинск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 13,
                        city: 'Красноярск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 14,
                        city: 'Московская Область',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 15,
                        city: 'Пермь',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 16,
                        city: 'Тюмень',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 17,
                        city: 'Одинцово',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 18,
                        city: 'Балашиха',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 19,
                        city: 'Ногинск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 20,
                        city: 'Подольск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 21,
                        city: 'Иркутск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 22,
                        city: 'Калининград',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 23,
                        city: 'Ярославль',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 24,
                        city: 'Владимир',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 25,
                        city: 'Барнаул',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 26,
                        city: 'Тула',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 27,
                        city: 'Курск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 28,
                        city: 'Кемерово',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 29,
                        city: 'Томск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 30,
                        city: 'Иваново',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 31,
                        city: 'Саратов',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 32,
                        city: 'Новокузнецк',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 33,
                        city: 'Астрахань',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 34,
                        city: 'Ставрополь',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 35,
                        city: 'Ижевск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 36,
                        city: 'Орел',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 37,
                        city: 'Смоленск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 38,
                        city: 'Чебоксары',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 39,
                        city: 'Брянск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                ],
            },
            PickUp: {
                id: 1,
                locationIcon: 'fas fa-map-marker-alt',
                city: 'Город:',
                selectIcon: 'fas fa-caret-down',
                defaultCity: 1,
                cityForSelected: [
                    {
                        id: 1,
                        city: 'Москва',
                        storeAddress: [
                            {
                                id: 1,
                                storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 2,
                                storeAddress: 'Москва, Маршала Прошлякова, 14',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 3,
                                storeAddress: 'Москва, р-н северного Измайлово, 104-й км. МКАД, 6',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 4,
                                storeAddress: 'Москва, Шоссейная, 2Б',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 5,
                                storeAddress: 'Москва, Дмитровское ш, 165Б',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 6,
                                storeAddress: 'д. Апаринки, МО, п. Совхоза им. Ленина, 8',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 7,
                                storeAddress: 'Москва, Рябиновая, 59',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                            {
                                id: 8,
                                storeAddress: 'Москва, Боровское ш, 10А',
                                storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                                btnText: 'Выбрать',
                            },
                        ],
                    },
                    {
                        id: 2,
                        city: 'Казань',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 3,
                        city: 'Екатеринбург',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 4,
                        city: 'Нижний Новгород',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 5,
                        city: 'Ростов-на-Дону',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 6,
                        city: 'Уфа',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 7,
                        city: 'Краснодар',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 8,
                        city: 'Самара',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 9,
                        city: 'Воронеж',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 10,
                        city: 'Волгоград',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 11,
                        city: 'Омск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 12,
                        city: 'Челябинск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 13,
                        city: 'Красноярск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 14,
                        city: 'Московская Область',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 15,
                        city: 'Пермь',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 16,
                        city: 'Тюмень',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 17,
                        city: 'Одинцово',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 18,
                        city: 'Балашиха',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 19,
                        city: 'Ногинск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 20,
                        city: 'Подольск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 21,
                        city: 'Иркутск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 22,
                        city: 'Калининград',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 23,
                        city: 'Ярославль',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 24,
                        city: 'Владимир',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 25,
                        city: 'Барнаул',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 26,
                        city: 'Тула',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 27,
                        city: 'Курск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 28,
                        city: 'Кемерово',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 29,
                        city: 'Томск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 30,
                        city: 'Иваново',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 31,
                        city: 'Саратов',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 32,
                        city: 'Новокузнецк',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 33,
                        city: 'Астрахань',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 34,
                        city: 'Ставрополь',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 35,
                        city: 'Ижевск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 36,
                        city: 'Орел',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 37,
                        city: 'Смоленск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 38,
                        city: 'Чебоксары',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                    {
                        id: 39,
                        city: 'Брянск',
                        storeAddress: [
                        // {
                        //   id: 1,
                        //   storeAddress: 'Москва, Ленинградское шоссе, 71Г',
                        //   storeWorkTime: 'Самовывоз ежедневно с 10:00 до 22:00',
                        //   btnText: 'Выбрать',
                        // },
                        ],
                    },
                ],
                logoImg: 'https://sbermarket.ru/spree/retailer/icons/234559/original/1.png?1580316602',
                storeName: 'Metro',
                numberOfStores: 'магазинов',
                selectedStoreIcon: 'fas fa-angle-up',
                storeWithdrawalIcon: 'fas fa-angle-down',
                updateSelectedAddress: 'Изменить',
            },
        },
    },
    body: {
        logo: 'https://via.placeholder.com/200x33?text=LOGO',
        navMenuItem: [
            {
                id: 'bisness',
                name: '👩‍💻 Для бизнеса',
            },
            {
                id: 'how-we-work',
                name: 'Как мы работаем',
            },
            {
                id: 'contacts',
                name: 'Контакты',
            },
            {
                id: 'help',
                name: 'Помощь',
            },
            {
                id: 'delivery',
                name: 'Доставка и оплата',
            },
        ],
    },
    navBar: {
        catalogBtn: 'Каталог',
        backgroundImageFullMenu: 'https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580',
        placeholder: 'Найти в магазине METRO',
        iconUser: 'far fa-user',
        iconWishList: 'far fa-heart',
        iconOrders: 'fas fa-history',
        iconCart: 'fas fa-shopping-cart',
        titleOrders: 'Заказы',
        titleCart: 'Корзина',
    },
    leftMenuCatalog: [
        {
            id: 1,
            title: 'Дачный сезон',
            img: 'https://sbermarket.ru/spree/taxons/10412/normal/%D0%93%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F.jpg',
            sales: false,
            subcategories: [
                {
                    id: 2,
                    title: 'Все для пикника',
                    img: 'https://sbermarket.ru/spree/taxons/10413/normal/%D0%92%D1%81%D0%B5_%D0%B4%D0%BB%D1%8F_%D0%BF%D0%B8%D0%BA%D0%BD%D0%B8%D0%BA%D0%B0.jpg',
                },
            ],
        },
        {
            id: 2,
            title: 'Бренды METRO',
            img: 'https://sbermarket.ru/spree/taxons/7783/normal/61000000.png',
            sales: true,
            subcategories: [
                {
                    id: 1,
                    title: '1Средства для бритья и депиляции',
                    img: 'https://sbermarket.ru/spree/taxons/12360/normal/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9_%D1%83%D1%85%D0%BE%D0%B4.jpeg',
                },
                {
                    id: 2,
                    title: '2Уход за кожей',
                    img: 'https://sbermarket.ru/spree/taxons/12360/normal/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9_%D1%83%D1%85%D0%BE%D0%B4.jpeg',
                },
                {
                    id: 3,
                    title: 'Какой то третий товар',
                    img: 'https://sbermarket.ru/spree/taxons/12360/normal/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%BE%D0%B9_%D1%83%D1%85%D0%BE%D0%B4.jpeg',
                },
            ],
        },
        {
            id: 3,
            title: 'Вода, соки, напитки',
            img: 'https://sbermarket.ru/spree/taxons/5020/normal/%D0%92%D0%BE%D0%B4%D0%B0__%D1%81%D0%BE%D0%BA%D0%B8__%D0%BD%D0%B0%D0%BF%D0%B8%D1%82%D0%BA%D0%B8.png',
            sales: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Большая упаковка',
                    img: 'https://sbermarket.ru/spree/taxons/9850/normal/%D0%91%D0%BE%D0%BB%D1%8C%D1%88%D0%B0%D1%8F_%D1%83%D0%BF%D0%B0%D0%BA%D0%BE%D0%B2%D0%BA%D0%B0.jpg',
                },
            ],
        },
        {
            id: 4,
            title: 'Овощи и фрукты',
            img: 'https://sbermarket.ru/spree/taxons/4232/normal/2000000.png',
            sales: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Овощи',
                    img: 'https://sbermarket.ru/spree/taxons/4233/normal/2010000.jpg',
                },
                {
                    id: 2,
                    title: 'Зелень, салаты, смеси',
                    img: 'https://sbermarket.ru/spree/taxons/4279/normal/2050000.jpg',
                },
            ],
        },
        {
            id: 5,
            title: 'Молочные продукты',
            img: 'https://sbermarket.ru/spree/taxons/4502/normal/%D0%A1%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%B0.png',
            sales: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Молочные продукты',
                    img: 'https://sbermarket.ru/spree/taxons/4502/normal/%D0%A1%D0%BC%D0%B5%D1%82%D0%B0%D0%BD%D0%B0.png',
                },
            ],
        },
        {
            id: 6,
            title: 'Бакалея',
            img: 'https://sbermarket.ru/spree/taxons/4329/normal/3000000.png',
            sales: true,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
        {
            id: 7,
            title: 'Сладости',
            img: 'https://sbermarket.ru/spree/taxons/4768/normal/10000000.png',
            sales: true,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
        {
            id: 8,
            title: 'Сыры',
            img: 'https://sbermarket.ru/spree/taxons/4582/normal/7000000.png',
            sales: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
        {
            id: 9,
            title: 'Колбасы, сосиски, деликатесы',
            img: 'https://sbermarket.ru/spree/taxons/4672/normal/8000000.png?1587987444',
            sales: false,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
        {
            id: 10,
            title: 'Яйца',
            img: 'https://sbermarket.ru/spree/taxons/4574/normal/6000000.png?1587987444',
            sales: true,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
        {
            id: 11,
            title: 'Хлеб и выпечка',
            img: 'https://sbermarket.ru/spree/taxons/4697/normal/9000000.png?1587987444',
            sales: true,
            subcategories: [
                {
                    id: 1,
                    title: 'Бритье',
                    img: 'https://sbermarket.ru/static/taxons/default.png',
                },
            ],
        },
    ],
    selectShops: [
        {
            id: 1,
            title: 'METRO',
            description: 'Ближайшая доставка завтра',
            time: '09:00-12:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/97198/default/metro_logo.png?1524229580',
            backgroundColor: '#203490',
            city: 'moscow',
        },
        {
            id: 2,
            title: 'SELGROS',
            description: 'Ближайшая доставка завтра',
            time: '11:00-13:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/86854/default/selgros_square.png?15132714340',
            backgroundColor: '#e52720',
            city: 'SPB',
        },
        {
            id: 3,
            title: 'Лента',
            description: 'Ближайшая доставка завтра',
            time: '09:00-12:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/86856/default/lenta.png?1513271434',
            backgroundColor: '#203490',
            city: 'moscow',
        },
        {
            id: 4,
            title: 'ВкусВилл',
            description: 'Ближайшая доставка завтра',
            time: '11:00-13:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/222135/default/group-13_2x.png?1577350775',
            backgroundColor: '#e52720',
            city: 'moscow',
        },
        {
            id: 5,
            title: 'Ашан',
            description: 'Ближайшая доставка завтра',
            time: '09:00-12:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/110302/default/auchan-logo.png?1539666604',
            backgroundColor: '#ffffff',
            city: 'moscow',
        },
        {
            id: 6,
            title: 'Азбука Вкуса',
            description: 'Ближайшая доставка завтра',
            time: '11:00-13:00',
            img: 'https://sbermarket.ru/spree/retailer_logos/156863/default/8796150988830.png?1564663752',
            backgroundColor: '#ffffff',
            city: 'moscow',
        },
    ],
};


/***/ }),

/***/ "./src/app/ng-cnt-market-first-page/ng-cnt-market-first-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ng-cnt-market-first-page/ng-cnt-market-first-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: NgCntMarketFirstPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntMarketFirstPageComponent", function() { return NgCntMarketFirstPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../market-store.service */ "./src/app/market-store.service.ts");
/* harmony import */ var _shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ng-cnt-market-header/ng-cnt-market-header.component */ "./src/app/shared/ng-cnt-market-header/ng-cnt-market-header.component.ts");
/* harmony import */ var _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/ng-cnt-market-footer/ng-cnt-market-footer.component */ "./src/app/shared/ng-cnt-market-footer/ng-cnt-market-footer.component.ts");





class NgCntMarketFirstPageComponent {
    constructor(marketStore) {
        this.marketStore = marketStore;
    }
    ngOnInit() { }
    getLogo() {
        return this.marketStore.logo;
    }
    getNumberHeader() {
        return this.marketStore.numberHeader;
    }
    getForOffer() {
        return this.marketStore.forOffer;
    }
    getOfferTitleText() {
        return this.marketStore.offerTitleText;
    }
    getForStatictics() {
        return this.marketStore.forStatistics;
    }
    getDelivery() {
        return this.marketStore.delivery;
    }
    getForChoice() {
        return this.marketStore.forChoice;
    }
    getChoiceTitleText() {
        return this.marketStore.choiceTitleText;
    }
    getForSpecialist() {
        return this.marketStore.forSpecialist;
    }
    getForCourier() {
        return this.marketStore.forCourier;
    }
    getForApp() {
        return this.marketStore.forApp;
    }
    getForSelection() {
        return this.marketStore.forSelection;
    }
    getHomeText() {
        return this.marketStore.homeText;
    }
    getHomeSubText() {
        return this.marketStore.homeSubText;
    }
    getHomePageImge() {
        return this.marketStore.homePageImage;
    }
}
NgCntMarketFirstPageComponent.ɵfac = function NgCntMarketFirstPageComponent_Factory(t) { return new (t || NgCntMarketFirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"])); };
NgCntMarketFirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntMarketFirstPageComponent, selectors: [["app-ng-cnt-market-first-page"]], decls: 12, vars: 14, consts: [[3, "firstPage"], [3, "forSelection", "homePageImage", "homeText", "homeSubText"], [3, "forOffer", "offerTitleText"], [3, "forStatistics"], [3, "delivery"], [3, "forChoice", "choiceTitleText"], [3, "forSpecialist"], [3, "forCourier"], [3, "forApp"]], template: function NgCntMarketFirstPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ng-cnt-market-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-market-selection", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-cnt-market-offer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-cnt-market-statistics", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-cnt-market-delivery", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-market-choice", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-cnt-market-specialist", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "s-cnt-market-courier", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "s-cnt-market-app", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-ng-cnt-market-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "s-cnt-market-back-to-top");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("firstPage", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forSelection", ctx.getForSelection())("homePageImage", ctx.getHomePageImge())("homeText", ctx.getHomeText())("homeSubText", ctx.getHomeSubText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forOffer", ctx.getForOffer())("offerTitleText", ctx.getOfferTitleText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forStatistics", ctx.getForStatictics());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("delivery", ctx.getDelivery());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forChoice", ctx.getForChoice())("choiceTitleText", ctx.getChoiceTitleText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forSpecialist", ctx.getForSpecialist());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forCourier", ctx.getForCourier());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("forApp", ctx.getForApp());
    } }, directives: [_shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_2__["NgCntMarketHeaderComponent"], _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_3__["NgCntMarketFooterComponent"]], styles: ["main[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  margin: 0 auto;\n  padding: 0 80px;\n}\n\n@media only screen and (max-width: 1439px) {\n  main[_ngcontent-%COMP%] {\n    padding: 0 42px;\n  }\n}\n\n@media only screen and (max-width: 767px) {\n  main[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmctY250LW1hcmtldC1maXJzdC1wYWdlL25nLWNudC1tYXJrZXQtZmlyc3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uZy1jbnQtbWFya2V0LWZpcnN0LXBhZ2UvbmctY250LW1hcmtldC1maXJzdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWFpbiB7XG4gIG1heC13aWR0aDogMTQ0MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCA4MHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzlweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAwIDQycHg7XG4gIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICBtYWluIHtcbiAgICBwYWRkaW5nOiAwIDE2cHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntMarketFirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-cnt-market-first-page',
                templateUrl: './ng-cnt-market-first-page.component.html',
                styleUrls: ['./ng-cnt-market-first-page.component.scss'],
            }]
    }], function () { return [{ type: _market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-market-second-page/ng-cnt-market-second-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/ng-cnt-market-second-page/ng-cnt-market-second-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NgCntMarketSecondPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntMarketSecondPageComponent", function() { return NgCntMarketSecondPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../market-store.service */ "./src/app/market-store.service.ts");
/* harmony import */ var _shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ng-cnt-market-header/ng-cnt-market-header.component */ "./src/app/shared/ng-cnt-market-header/ng-cnt-market-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/ng-cnt-market-footer/ng-cnt-market-footer.component */ "./src/app/shared/ng-cnt-market-footer/ng-cnt-market-footer.component.ts");






function NgCntMarketSecondPageComponent_s_cnt_market_modal_window_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-cnt-market-modal-window", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnModal", function NgCntMarketSecondPageComponent_s_cnt_market_modal_window_6_Template_s_cnt_market_modal_window_clickOnModal_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.showOrCloseModal($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productModal", ctx_r0.getProductModal())("productData", ctx_r0.getProductData());
} }
class NgCntMarketSecondPageComponent {
    constructor(marketStore) {
        this.marketStore = marketStore;
        this.showModalState = false;
    }
    ngOnInit() { }
    getProductData() {
        return this.productData;
    }
    getLogo() {
        return this.marketStore.logo;
    }
    getPromoSliderCards() {
        return this.marketStore.promoSliderCards;
    }
    getProductsSliderTitle() {
        return this.marketStore.productsSliderTitle;
    }
    getProductsSliderCards() {
        return this.marketStore.productsSliderCards;
    }
    getProductsList() {
        return this.marketStore.productsList;
    }
    getRecentlyWatchedProducts() {
        return this.marketStore.recentlyWatchedProducts;
    }
    getRecentlyWatchedTitle() {
        return this.marketStore.recentlyWatchedTitle;
    }
    getProductModal() {
        return this.marketStore.productModal;
    }
    /**
     * Открытие и закрытие модального окна
     */
    showOrCloseModal({ detail }) {
        this.showModalState = !this.showModalState;
        this.bodyToggleScroll();
        this.productData = Object.assign({}, detail);
    }
    /**
     * Отключение и включение прокрутки body
     */
    bodyToggleScroll() {
        if (this.showModalState) {
            document.body.style.overflow = 'hidden';
        }
        else {
            document.body.style.overflow = 'auto';
        }
    }
}
NgCntMarketSecondPageComponent.ɵfac = function NgCntMarketSecondPageComponent_Factory(t) { return new (t || NgCntMarketSecondPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"])); };
NgCntMarketSecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntMarketSecondPageComponent, selectors: [["app-ng-cnt-market-second-page"]], decls: 9, vars: 8, consts: [[3, "firstPage"], [3, "promoSliderCards"], [3, "productsSliderCards", "productsSliderTitle", "showModal"], [3, "productsList", "showModal"], [3, "recentlyWatchedProducts", "recentlyWatchedTitle", "showModal"], [3, "productModal", "productData", "clickOnModal", 4, "ngIf"], [3, "productModal", "productData", "clickOnModal"]], template: function NgCntMarketSecondPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-ng-cnt-market-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-market-promo-slider", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "s-cnt-market-products-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showModal", function NgCntMarketSecondPageComponent_Template_s_cnt_market_products_slider_showModal_3_listener($event) { return ctx.showOrCloseModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "s-cnt-market-products-list", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showModal", function NgCntMarketSecondPageComponent_Template_s_cnt_market_products_list_showModal_4_listener($event) { return ctx.showOrCloseModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "s-cnt-market-recently-watched", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showModal", function NgCntMarketSecondPageComponent_Template_s_cnt_market_recently_watched_showModal_5_listener($event) { return ctx.showOrCloseModal($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgCntMarketSecondPageComponent_s_cnt_market_modal_window_6_Template, 1, 2, "s-cnt-market-modal-window", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-cnt-market-back-to-top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-ng-cnt-market-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("firstPage", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("promoSliderCards", ctx.getPromoSliderCards());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productsSliderCards", ctx.getProductsSliderCards())("productsSliderTitle", ctx.getProductsSliderTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("productsList", ctx.getProductsList());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("recentlyWatchedProducts", ctx.getRecentlyWatchedProducts())("recentlyWatchedTitle", ctx.getRecentlyWatchedTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showModalState);
    } }, directives: [_shared_ng_cnt_market_header_ng_cnt_market_header_component__WEBPACK_IMPORTED_MODULE_2__["NgCntMarketHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_ng_cnt_market_footer_ng_cnt_market_footer_component__WEBPACK_IMPORTED_MODULE_4__["NgCntMarketFooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25nLWNudC1tYXJrZXQtc2Vjb25kLXBhZ2UvbmctY250LW1hcmtldC1zZWNvbmQtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntMarketSecondPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-cnt-market-second-page',
                templateUrl: './ng-cnt-market-second-page.component.html',
                styleUrls: ['./ng-cnt-market-second-page.component.scss'],
            }]
    }], function () { return [{ type: _market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/ng-cnt-market-footer/ng-cnt-market-footer.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/ng-cnt-market-footer/ng-cnt-market-footer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgCntMarketFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntMarketFooterComponent", function() { return NgCntMarketFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../market-store.service */ "./src/app/market-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NgCntMarketFooterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-cnt-market-up-footer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerMenu", item_r1);
} }
const _c0 = function (a0) { return { "background-image": a0 }; };
class NgCntMarketFooterComponent {
    constructor(marketStore) {
        this.marketStore = marketStore;
    }
    ngOnInit() {
    }
    // TODO
    getLogoFooter() {
        // return this.marketStore.getLogoFooter;
        return 'https://via.placeholder.com/200x30?text=Visit';
    }
    //
    getMenuItemFooter() {
        return this.marketStore.getMenuItemFooter();
    }
    //
    getFooterContactColumn() {
        return this.marketStore.getFooterContactColumn();
    }
    //
    getFooterCopyrightRow() {
        return this.marketStore.getFooterCopyrightRow();
    }
    //
    getFooterLinksPolitics() {
        return this.marketStore.getFooterLinksPolitics();
    }
}
NgCntMarketFooterComponent.ɵfac = function NgCntMarketFooterComponent_Factory(t) { return new (t || NgCntMarketFooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"])); };
NgCntMarketFooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntMarketFooterComponent, selectors: [["app-ng-cnt-market-footer"]], decls: 12, vars: 7, consts: [[1, "upFooter"], [1, "container"], [1, "row"], [1, "col-12", "col-lg-3"], [1, "logo", 3, "ngStyle"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-12", "col-md-4", "col-lg-3"], [3, "footerContactColumn"], [1, "line"], [3, "footerCopyrightRow"], [3, "footerLinksPolitics"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [3, "footerMenu"]], template: function NgCntMarketFooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NgCntMarketFooterComponent_div_6_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "s-cnt-market-up-footer-form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "s-cnt-market-down-footer", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "s-cnt-market-footer-info", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, "url(" + ctx.getLogoFooter() + ")"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMenuItemFooter());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerContactColumn", ctx.getFooterContactColumn());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerCopyrightRow", ctx.getFooterCopyrightRow());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("footerLinksPolitics", ctx.getFooterLinksPolitics());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".upFooter[_ngcontent-%COMP%] {\n  padding: 25px 0 0 0;\n  background-color: #f3f4f7;\n  margin-top: 100px;\n}\n\n.logo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40px;\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  margin: 0 70px 0 0;\n}\n\n.line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 1px;\n  background-color: #e4ece7;\n  margin-top: 25px;\n}\n\n@media screen and (max-width: 992px) {\n  .logo[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  .logo[_ngcontent-%COMP%] {\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25nLWNudC1tYXJrZXQtZm9vdGVyL25nLWNudC1tYXJrZXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHdCQUF3QjtFQUN4QiwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25nLWNudC1tYXJrZXQtZm9vdGVyL25nLWNudC1tYXJrZXQtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVwRm9vdGVyIHtcbiAgcGFkZGluZzogMjVweCAwIDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YzZjRmNztcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIG1hcmdpbjogMCA3MHB4IDAgMDtcbn1cblxuLmxpbmUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNGVjZTc7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcbiAgLmxvZ28ge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfVxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntMarketFooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-cnt-market-footer',
                templateUrl: './ng-cnt-market-footer.component.html',
                styleUrls: ['./ng-cnt-market-footer.component.scss']
            }]
    }], function () { return [{ type: _market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/ng-cnt-market-header/ng-cnt-market-header.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/ng-cnt-market-header/ng-cnt-market-header.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NgCntMarketHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntMarketHeaderComponent", function() { return NgCntMarketHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _market_store_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../market-store.service */ "./src/app/market-store.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NgCntMarketHeaderComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-cnt-market-header-base", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", ctx_r0.getLogo())("number", ctx_r0.getNumberHeader());
} }
function NgCntMarketHeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-market-top-bar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-cnt-market-header-body", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "s-cnt-market-header-nav", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("topBar", ctx_r1.getTopBar());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("body", ctx_r1.getBodyHeader());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("login", ctx_r1.getLoginUser())("navBar", ctx_r1.getNavBar())("selectShops", ctx_r1.getSelectShops())("leftMenuCatalogArr", ctx_r1.getLeftMenuCatalog());
} }
class NgCntMarketHeaderComponent {
    constructor(marketStore) {
        this.marketStore = marketStore;
    }
    ngOnInit() { }
    getLogo() {
        return this.marketStore.logo;
    }
    getNumberHeader() {
        return this.marketStore.numberHeader;
    }
    /* Получаем данные для топ бара */
    getTopBar() {
        return this.marketStore.getTopBar();
    }
    /* Получаем данные для body header */
    getBodyHeader() {
        return this.marketStore.getBodyHeader();
    }
    //
    getLoginUser() {
        return this.marketStore.getLoginUser();
    }
    //
    getNavBar() {
        return this.marketStore.getNavBar();
    }
    //
    getSelectShops() {
        return this.marketStore.getSelectShops();
    }
    //
    getLeftMenuCatalog() {
        return this.marketStore.getLeftMenuCatalog();
    }
}
NgCntMarketHeaderComponent.ɵfac = function NgCntMarketHeaderComponent_Factory(t) { return new (t || NgCntMarketHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"])); };
NgCntMarketHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntMarketHeaderComponent, selectors: [["app-ng-cnt-market-header"]], inputs: { firstPage: "firstPage" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [3, "logo", "number"], [1, "header-wrapper"], [1, "container-fluid"], [1, "row"], [1, "col-12"], [1, "header-wrapper-child"], [3, "topBar"], [3, "body"], [3, "login", "navBar", "selectShops", "leftMenuCatalogArr"]], template: function NgCntMarketHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgCntMarketHeaderComponent_div_0_Template, 2, 2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgCntMarketHeaderComponent_div_1_Template, 9, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.firstPage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.firstPage);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: [".header-wrapper[_ngcontent-%COMP%] {\n  box-shadow: 0 6px 11px -6px rgba(0, 0, 0, 0.1);\n  margin-bottom: 185px;\n}\n\n.header-wrapper[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n\n.header-wrapper-child[_ngcontent-%COMP%] {\n  position: fixed;\n  transition: 0.2s;\n  right: 0;\n  left: 0;\n  z-index: 2000;\n  background-color: #fff;\n  box-shadow: 0 6px 11px -6px rgba(0, 0, 0, 0.1);\n}\n\n.sticky[_ngcontent-%COMP%] {\n  margin-top: -75px;\n  transition: 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL25nLWNudC1tYXJrZXQtaGVhZGVyL25nLWNudC1tYXJrZXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOENBQThDO0VBQzlDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw4Q0FBOEM7QUFDaEQ7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL25nLWNudC1tYXJrZXQtaGVhZGVyL25nLWNudC1tYXJrZXQtaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci13cmFwcGVyIHtcbiAgYm94LXNoYWRvdzogMCA2cHggMTFweCAtNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMTg1cHg7XG59XG5cbi5oZWFkZXItd3JhcHBlciAuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xuICBwYWRkaW5nLXJpZ2h0OiAwO1xufVxuXG4uaGVhZGVyLXdyYXBwZXItY2hpbGQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRyYW5zaXRpb246IDAuMnM7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAyMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDZweCAxMXB4IC02cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc3RpY2t5IHtcbiAgbWFyZ2luLXRvcDogLTc1cHg7XG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntMarketHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ng-cnt-market-header',
                templateUrl: './ng-cnt-market-header.component.html',
                styleUrls: ['./ng-cnt-market-header.component.scss'],
            }]
    }], function () { return [{ type: _market_store_service__WEBPACK_IMPORTED_MODULE_1__["MarketStoreService"] }]; }, { firstPage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


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
/* harmony import */ var stencil_market_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! stencil-market/loader */ "./node_modules/stencil-market/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));
// stencil js - source



// stencil js - source
Object(stencil_market_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/admin/Desktop/cnt-market/ng-market/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map