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
	"./dialog-card_12.entry.js": [
		"./node_modules/stencil-chat/dist/esm/dialog-card_12.entry.js",
		"common",
		"stencil-dialog-card_12-entry-js"
	],
	"./mobile-chat.entry.js": [
		"./node_modules/stencil-chat/dist/esm/mobile-chat.entry.js",
		"common",
		"stencil-mobile-chat-entry-js"
	],
	"./mobile-dialogs.entry.js": [
		"./node_modules/stencil-chat/dist/esm/mobile-dialogs.entry.js",
		"stencil-mobile-dialogs-entry-js"
	],
	"./mobile-personal.entry.js": [
		"./node_modules/stencil-chat/dist/esm/mobile-personal.entry.js",
		"common",
		"stencil-mobile-personal-entry-js"
	],
	"./s-adam-dialogs.entry.js": [
		"./node_modules/stencil-chat/dist/esm/s-adam-dialogs.entry.js",
		"stencil-s-adam-dialogs-entry-js"
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
/* harmony import */ var _comp_comp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comp/comp.component */ "./src/app/comp/comp.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _mobile_res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile/res/view/mobile-personal-chat/mobile-personal-chat.component */ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts");
/* harmony import */ var _mobile_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile/res/view/user-profile/user-profile.component */ "./src/app/mobile/res/view/user-profile/user-profile.component.ts");








const routes = [
    {
        path: '',
        component: _comp_comp_component__WEBPACK_IMPORTED_MODULE_2__["CompComponent"],
    },
    {
        path: 'mobile',
        component: _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_3__["MobileComponent"],
    },
    {
        path: 'profile',
        component: _mobile_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"],
    },
    {
        path: 'app-mobile-personal-chat',
        component: _mobile_res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_4__["MobilePersonalChatComponent"],
    },
    {
        path: '**',
        component: _comp_comp_component__WEBPACK_IMPORTED_MODULE_2__["CompComponent"],
    }
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
        console.log(this.animSRVC.getCurrentAnimation());
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
/* harmony import */ var _comp_comp_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comp/comp.component */ "./src/app/comp/comp.component.ts");
/* harmony import */ var _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mobile/mobile.component */ "./src/app/mobile/mobile.component.ts");
/* harmony import */ var _mobile_res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobile/res/view/mobile-personal-chat/mobile-personal-chat.component */ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts");
/* harmony import */ var _mobile_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mobile/res/view/user-profile/user-profile.component */ "./src/app/mobile/res/view/user-profile/user-profile.component.ts");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/common/animation.service */ "./src/app/services/common/animation.service.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_common_animation_service__WEBPACK_IMPORTED_MODULE_9__["AnimationService"]], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _comp_comp_component__WEBPACK_IMPORTED_MODULE_5__["CompComponent"],
        _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"],
        _mobile_res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_7__["MobilePersonalChatComponent"],
        _mobile_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _comp_comp_component__WEBPACK_IMPORTED_MODULE_5__["CompComponent"],
                    _mobile_mobile_component__WEBPACK_IMPORTED_MODULE_6__["MobileComponent"],
                    _mobile_res_view_mobile_personal_chat_mobile_personal_chat_component__WEBPACK_IMPORTED_MODULE_7__["MobilePersonalChatComponent"],
                    _mobile_res_view_user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_8__["UserProfileComponent"],
                ],
                imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
                providers: [_services_common_animation_service__WEBPACK_IMPORTED_MODULE_9__["AnimationService"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/comp/comp.component.ts":
/*!****************************************!*\
  !*** ./src/app/comp/comp.component.ts ***!
  \****************************************/
/*! exports provided: CompComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompComponent", function() { return CompComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_servic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store-servic.service */ "./src/app/store-servic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function CompComponent_s_adam_no_chat_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-adam-no-chat");
} }
function CompComponent_s_adam_direct_13_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-adam-direct", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnUsername", function CompComponent_s_adam_direct_13_Template_s_adam_direct_clickOnUsername_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.toggleProfile($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r1.getMessages());
} }
function CompComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-adam-profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CompComponent {
    constructor(chatStore, router) {
        this.chatStore = chatStore;
        this.router = router;
    }
    ngOnInit() { }
    getNavItems() {
        return this.chatStore.getNavItems();
    }
    getLogo() {
        return this.chatStore.getLogo();
    }
    getDialogs() {
        return this.chatStore.getDialogs();
    }
    getMessages() {
        return this.chatStore.getMessages();
    }
    getDialogVisible() {
        return this.chatStore.dialogVisible;
    }
    getProfileVisible() {
        return this.chatStore.profileVisible;
    }
    clickToLink({ detail }) {
        if (detail.place === 'showPersonalDialog') {
            this.chatStore.dialogVisible = false;
        }
    }
    toggleProfile({ detail }) {
        console.log('adad', detail);
        if (detail.place === 'userName') {
            this.chatStore.profileVisible = !this.chatStore.profileVisible;
        }
    }
}
CompComponent.ɵfac = function CompComponent_Factory(t) { return new (t || CompComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CompComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CompComponent, selectors: [["app-comp"]], decls: 15, vars: 7, consts: [[1, "container"], [1, "row"], [1, "col-1"], ["routerLink", "/mobile/"], [3, "logo", "navItems"], [1, "col-3"], [3, "dialogs", "clickToLink"], [3, "dialogs"], [1, "col"], [1, "chat"], [4, "ngIf"], [3, "message", "clickOnUsername", 4, "ngIf"], ["class", "col-3", 4, "ngIf"], [3, "message", "clickOnUsername"]], template: function CompComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "mobile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-adam-navigate", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "s-adam-contacts", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToLink", function CompComponent_Template_s_adam_contacts_clickToLink_8_listener($event) { return ctx.clickToLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "s-adam-contacts", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CompComponent_s_adam_no_chat_12_Template, 1, 0, "s-adam-no-chat", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CompComponent_s_adam_direct_13_Template, 1, 1, "s-adam-direct", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CompComponent_div_14_Template, 2, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("logo", ctx.getLogo())("navItems", ctx.getNavItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogs", ctx.getDialogs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogs", ctx.getDialogs());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getDialogVisible());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.getDialogVisible());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.getProfileVisible());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1280px;\n  width: 100%;\n}\n\nmain[_ngcontent-%COMP%] {\n  height: 95vh;\n  overflow: hidden;\n}\n\n.chat[_ngcontent-%COMP%] {\n  position: relative;\n  height: 95vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcC9DOlxcVXNlcnNcXHNhcWhhXFxEZXNrdG9wXFxhbmd1bGFyLWNoYXRcXG5nLWNoYXQvc3JjXFxhcHBcXGNvbXBcXGNvbXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXAvY29tcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2NvbXAvY29tcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5tYWluIHtcbiAgaGVpZ2h0OiA5NXZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmNoYXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogOTV2aDtcbn1cbiIsIi5jb250YWluZXIge1xuICBtYXgtd2lkdGg6IDEyODBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IDk1dmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5jaGF0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDk1dmg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CompComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-comp',
                templateUrl: './comp.component.html',
                styleUrls: ['./comp.component.scss'],
            }]
    }], function () { return [{ type: _store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/comp/interface/common.interface.ts":
/*!****************************************************!*\
  !*** ./src/app/comp/interface/common.interface.ts ***!
  \****************************************************/
/*! exports provided: MessageDirectionEnum, MessageTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageDirectionEnum", function() { return MessageDirectionEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageTypeEnum", function() { return MessageTypeEnum; });
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

/***/ "./src/app/mobile/mobile.component.ts":
/*!********************************************!*\
  !*** ./src/app/mobile/mobile.component.ts ***!
  \********************************************/
/*! exports provided: MobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileComponent", function() { return MobileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_servic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store-servic.service */ "./src/app/store-servic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/common/animation.service */ "./src/app/services/common/animation.service.ts");





class MobileComponent {
    constructor(storeMessage, router, animSRVC) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
        // массив данных личного чата
        this.dialogs = this.storeMessage.getDialogs();
    }
    ngOnInit() { }
    // массив данных для диалогов
    getDialogs() {
        return this.dialogs;
    }
    // получаем категории
    getCategories() {
        return this.storeMessage.getCategories();
    }
    // клик по кнопке категорий для фильтрации диалогов
    clickToCategory({ detail }) {
        return (this.dialogs =
            detail.item.id !== 'all'
                ? this.storeMessage
                    .getDialogs()
                    .filter((item) => item.category === detail.item.id)
                : this.storeMessage.getDialogs());
    }
    // клик по ссылке
    clickToLink({ detail }) {
        console.log('clickToLink', detail);
        if (detail.place === 'showPersonalDialog') {
            this.animSRVC.slideToLEFT();
            this.router.navigate(['app-mobile-personal-chat']);
        }
    }
}
MobileComponent.ɵfac = function MobileComponent_Factory(t) { return new (t || MobileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"])); };
MobileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobileComponent, selectors: [["app-mobile"]], decls: 1, vars: 2, consts: [[3, "categories", "dialogs", "clickToLink", "clickToCategory"]], template: function MobileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mobile-dialogs", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToLink", function MobileComponent_Template_mobile_dialogs_clickToLink_0_listener($event) { return ctx.clickToLink($event); })("clickToCategory", function MobileComponent_Template_mobile_dialogs_clickToCategory_0_listener($event) { return ctx.clickToCategory($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("categories", ctx.getCategories())("dialogs", ctx.getDialogs());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9tb2JpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile',
                templateUrl: './mobile.component.html',
                styleUrls: ['./mobile.component.scss'],
            }]
    }], function () { return [{ type: _store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mobile/res/view/mobile-personal-chat/mobile-personal-chat.component.ts ***!
  \****************************************************************************************/
/*! exports provided: MobilePersonalChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobilePersonalChatComponent", function() { return MobilePersonalChatComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_servic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store-servic.service */ "./src/app/store-servic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/animation.service */ "./src/app/services/common/animation.service.ts");





class MobilePersonalChatComponent {
    constructor(storeMessage, router, animSRVC) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
    }
    ngOnInit() { }
    getMessages() {
        return this.storeMessage.getMessages();
    }
    // клик по ссылке
    clickToLink({ detail }) {
        console.log('clickToLinkBack', detail);
        if (detail.place === 'showDialogs') {
            this.animSRVC.slideToRIGHT();
            this.router.navigate(['mobile']);
        }
        if (detail.place === 'user-name-personal') {
            this.animSRVC.slideToLEFT();
            this.router.navigate(['profile']);
        }
    }
}
MobilePersonalChatComponent.ɵfac = function MobilePersonalChatComponent_Factory(t) { return new (t || MobilePersonalChatComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"])); };
MobilePersonalChatComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobilePersonalChatComponent, selectors: [["app-mobile-personal-chat"]], decls: 1, vars: 1, consts: [[3, "messageMock", "clickToLink"]], template: function MobilePersonalChatComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mobile-personal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToLink", function MobilePersonalChatComponent_Template_mobile_personal_clickToLink_0_listener($event) { return ctx.clickToLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messageMock", ctx.getMessages());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9yZXMvdmlldy9tb2JpbGUtcGVyc29uYWwtY2hhdC9tb2JpbGUtcGVyc29uYWwtY2hhdC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobilePersonalChatComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mobile-personal-chat',
                templateUrl: './mobile-personal-chat.component.html',
                styleUrls: ['./mobile-personal-chat.component.scss'],
            }]
    }], function () { return [{ type: _store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/mobile/res/view/user-profile/user-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/mobile/res/view/user-profile/user-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_servic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../store-servic.service */ "./src/app/store-servic.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/common/animation.service */ "./src/app/services/common/animation.service.ts");





class UserProfileComponent {
    constructor(storeMessage, router, animSRVC) {
        this.storeMessage = storeMessage;
        this.router = router;
        this.animSRVC = animSRVC;
    }
    ngOnInit() {
    }
    // клик по ссылке
    clickToLink({ detail }) {
        console.log('clickToLinkBack', detail);
        if (detail.place === 'showPersonalDialog') {
            this.animSRVC.slideToRIGHT();
            this.router.navigate(['app-mobile-personal-chat']);
        }
    }
}
UserProfileComponent.ɵfac = function UserProfileComponent_Factory(t) { return new (t || UserProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"])); };
UserProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserProfileComponent, selectors: [["app-user-profile"]], decls: 1, vars: 0, consts: [[3, "clickToLink"]], template: function UserProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "user-profile", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickToLink", function UserProfileComponent_Template_user_profile_clickToLink_0_listener($event) { return ctx.clickToLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vYmlsZS9yZXMvdmlldy91c2VyLXByb2ZpbGUvdXNlci1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-profile',
                templateUrl: './user-profile.component.html',
                styleUrls: ['./user-profile.component.scss']
            }]
    }], function () { return [{ type: _store_servic_service__WEBPACK_IMPORTED_MODULE_1__["StoreService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_common_animation_service__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] }]; }, null); })();


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

/***/ "./src/app/store-servic.service.ts":
/*!*****************************************!*\
  !*** ./src/app/store-servic.service.ts ***!
  \*****************************************/
/*! exports provided: StoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreService", function() { return StoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comp/interface/common.interface */ "./src/app/comp/interface/common.interface.ts");



class StoreService {
    constructor() {
        this.dialogs = [
            {
                id: 1,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'rebuild finished',
                time: {
                    created: new Date(),
                },
                category: 'work',
                online: true,
            },
            {
                id: 2,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'generate lazy started',
                time: {
                    created: new Date(),
                },
                category: 'family',
                online: true,
            },
            {
                id: 3,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'generate lazy finished in 141 ms',
                time: {
                    created: new Date(),
                },
                category: 'friends',
                online: false,
            },
            {
                id: 4,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'Hello everyone!!!',
                time: {
                    created: new Date(),
                },
                category: 'friends',
                online: true,
            },
            {
                id: 5,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'transpile started',
                time: {
                    created: new Date(),
                },
                category: 'work',
                online: false,
            },
            {
                id: 6,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'Hello everyone!!!',
                time: {
                    created: new Date(),
                },
                category: 'work',
                online: true,
            },
            {
                id: 7,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Anna Dalonzo',
                mess: 'Hello everyone!!!',
                time: {
                    created: new Date(),
                },
                category: 'work',
                online: false,
            },
            {
                id: 8,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Saqhan Dalonzo',
                mess: 'Hello everyone!!!',
                time: {
                    created: new Date(),
                },
                category: 'family',
                online: true,
            },
            {
                id: 9,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Saqhan Chrome',
                mess: 'Hello everyone!!! category',
                time: {
                    created: new Date(),
                },
                category: 'friends',
                online: false,
            },
            {
                id: 10,
                img: 'https://via.placeholder.com/300x300?text=User',
                name: 'Saqhan Chrome',
                mess: 'Generate lazy started',
                time: {
                    created: new Date(),
                },
                category: 'friends',
                online: false,
            },
        ];
        this.categories = [
            {
                name: 'All',
                id: 'all',
            },
            {
                name: 'Work',
                id: 'work',
            },
            {
                name: 'Family',
                id: 'family',
            },
            {
                name: 'Friends',
                id: 'friends',
            },
        ];
        this.logo = {
            id: 'logo',
            logo: 'https://via.placeholder.com/100x100?text=Text'
        };
        /**
         * Иконки навигации комп версии
         */
        this.navItems = [
            {
                id: 1,
                icon: 'fas fa-comment-alt'
            },
            {
                id: 2,
                icon: 'fas fa-shopping-bag'
            },
            {
                id: 3,
                icon: 'fas fa-cart-arrow-down'
            },
            {
                id: 5,
                icon: 'fas fa-calendar-alt'
            },
            {
                id: 6,
                icon: 'fas fa-cog'
            }
        ];
        this.MessageMock = [
            {
                content: 'Как твои дела',
                sender: {
                    uid: 'test-id-1',
                    icon: 'https://via.placeholder.com/60x60?text=User',
                    name: 'Сайхан',
                    phone: '79291234567',
                },
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].text,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].toMe,
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
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].image,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].toMe,
                time: {
                    created: new Date(),
                },
            },
            {
                content: 'Нормально',
                sender: {
                    uid: 'test-id-2',
                    icon: 'https://via.placeholder.com/60x60?text=User',
                    name: 'Адам',
                    phone: '79291234567',
                },
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].text,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].fromMe,
                time: {
                    created: new Date(),
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
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].image,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].fromMe,
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
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].text,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].toMe,
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
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].text,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].fromMe,
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
                type: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageTypeEnum"].text,
                direction: _comp_interface_common_interface__WEBPACK_IMPORTED_MODULE_1__["MessageDirectionEnum"].toMe,
                time: {
                    created: new Date(),
                },
            },
        ];
        this.dialogVisible = true;
        this.profileVisible = false;
    }
    getDialogs() {
        return this.dialogs;
    }
    getCategories() {
        return this.categories;
    }
    getMessages() {
        return this.MessageMock;
    }
    getNavItems() {
        return this.navItems;
    }
    getLogo() {
        return this.logo;
    }
}
StoreService.ɵfac = function StoreService_Factory(t) { return new (t || StoreService)(); };
StoreService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StoreService, factory: StoreService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
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

module.exports = __webpack_require__(/*! C:\Users\saqha\Desktop\angular-chat\ng-chat\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map