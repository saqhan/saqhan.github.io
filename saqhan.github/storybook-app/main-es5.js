function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/s-saqhan-v1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
  /*!*****************************************************************************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
    \*****************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesSSaqhanV1DistEsmLazyRecursiveEntryJs$IncludeEntryJs$ExcludeSystemEntryJs$(module, exports, __webpack_require__) {
    var map = {
      "./s-saqhan-app-footer_27.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-app-footer_27.entry.js", "default~stencil-s-saqhan-app-footer_27-entry-js~stencil-s-saqhan-item-news-entry-js~stencil-s-saqhan~40899ba3", "stencil-s-saqhan-app-footer_27-entry-js"],
      "./s-saqhan-author-info_3.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-author-info_3.entry.js", "stencil-s-saqhan-author-info_3-entry-js"],
      "./s-saqhan-bread-card.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-card.entry.js", "stencil-s-saqhan-bread-card-entry-js"],
      "./s-saqhan-bread-crumbs_2.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-bread-crumbs_2.entry.js", "stencil-s-saqhan-bread-crumbs_2-entry-js"],
      "./s-saqhan-card-author.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-author.entry.js", "stencil-s-saqhan-card-author-entry-js"],
      "./s-saqhan-card-banner.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-card-banner.entry.js", "stencil-s-saqhan-card-banner-entry-js"],
      "./s-saqhan-item-news.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-item-news.entry.js", "default~stencil-s-saqhan-app-footer_27-entry-js~stencil-s-saqhan-item-news-entry-js~stencil-s-saqhan~40899ba3", "stencil-s-saqhan-item-news-entry-js"],
      "./s-saqhan-news-card.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-news-card.entry.js", "stencil-s-saqhan-news-card-entry-js"],
      "./s-saqhan-second-page.entry.js": ["./node_modules/s-saqhan-v1/dist/esm/s-saqhan-second-page.entry.js", "default~stencil-s-saqhan-app-footer_27-entry-js~stencil-s-saqhan-item-news-entry-js~stencil-s-saqhan~40899ba3", "stencil-s-saqhan-second-page-entry-js"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./node_modules/s-saqhan-v1/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");
    /* harmony import */


    var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./second-page/second-page.component */
    "./src/app/second-page/second-page.component.ts");
    /* harmony import */


    var _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./third-page/third-page.component */
    "./src/app/third-page/third-page.component.ts");

    var routes = [{
      path: '',
      component: _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_2__["FirstPageComponent"]
    }, {
      path: 'second-page',
      component: _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_3__["SecondPageComponent"]
    }, {
      path: 'list-items',
      component: _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_4__["ThirdPageComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'storybook-app';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 1,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./first-page/first-page.component */
    "./src/app/first-page/first-page.component.ts");
    /* harmony import */


    var _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./second-page/second-page.component */
    "./src/app/second-page/second-page.component.ts");
    /* harmony import */


    var _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./third-page/third-page.component */
    "./src/app/third-page/third-page.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"], _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"], _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_6__["ThirdPageComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _first_page_first_page_component__WEBPACK_IMPORTED_MODULE_4__["FirstPageComponent"], _second_page_second_page_component__WEBPACK_IMPORTED_MODULE_5__["SecondPageComponent"], _third_page_third_page_component__WEBPACK_IMPORTED_MODULE_6__["ThirdPageComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/first-page/first-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/first-page/first-page.component.ts ***!
    \****************************************************/

  /*! exports provided: FirstPageComponent */

  /***/
  function srcAppFirstPageFirstPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FirstPageComponent", function () {
      return FirstPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store-app.service */
    "./src/app/store-app.service.ts");

    var FirstPageComponent = /*#__PURE__*/function () {
      function FirstPageComponent(storeBlog) {
        _classCallCheck(this, FirstPageComponent);

        this.storeBlog = storeBlog;
        this.result = 0;
      }

      _createClass(FirstPageComponent, [{
        key: "getBlog",
        value: function getBlog() {
          return this.storeBlog.getBlog();
        }
      }, {
        key: "getBlogPost",
        value: function getBlogPost() {
          return this.storeBlog.getBlogPost();
        }
      }, {
        key: "getPopularNews",
        value: function getPopularNews() {
          return this.storeBlog.getPopularNews();
        }
      }, {
        key: "getEvents",
        value: function getEvents() {
          return this.storeBlog.getEvents();
        }
      }, {
        key: "getMainUser",
        value: function getMainUser() {
          return this.storeBlog.getMainUser();
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          return this.storeBlog.getMainUser();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.amount = this.storeBlog.sum(this.a, this.b);
        }
      }, {
        key: "onClickButton",
        value: function onClickButton() {
          var result = this.storeBlog.sum(5, 5);
          this.result = result;
        }
      }]);

      return FirstPageComponent;
    }();

    FirstPageComponent.ɵfac = function FirstPageComponent_Factory(t) {
      return new (t || FirstPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]));
    };

    FirstPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FirstPageComponent,
      selectors: [["app-first-page"]],
      inputs: {
        a: "a",
        b: "b"
      },
      decls: 8,
      vars: 6,
      consts: [[3, "blogCarouselMock"], [3, "blogPost"], [3, "popularNews"], [3, "events"], [3, "mainUser", "messages"]],
      template: function FirstPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-saqhan-header-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-saqhan-first-slider", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-saqhan-new-blog", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-saqhan-popular-news", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-saqhan-events-blog", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-saqhan-subsc-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-saqhan-app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-saqhan-chat-app", 4);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogCarouselMock", ctx.getBlog());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogPost", ctx.getBlogPost());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("popularNews", ctx.getPopularNews());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("events", ctx.getEvents());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mainUser", ctx.getMainUser())("messages", ctx.getMessages());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpcnN0LXBhZ2UvZmlyc3QtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FirstPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-first-page',
          templateUrl: './first-page.component.html',
          styleUrls: ['./first-page.component.css']
        }]
      }], function () {
        return [{
          type: _store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]
        }];
      }, {
        a: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        b: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/second-page/second-page.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/second-page/second-page.component.ts ***!
    \******************************************************/

  /*! exports provided: SecondPageComponent */

  /***/
  function srcAppSecondPageSecondPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SecondPageComponent", function () {
      return SecondPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store-app.service */
    "./src/app/store-app.service.ts");

    var SecondPageComponent = /*#__PURE__*/function () {
      function SecondPageComponent(storeBlog) {
        _classCallCheck(this, SecondPageComponent);

        this.storeBlog = storeBlog;
      }

      _createClass(SecondPageComponent, [{
        key: "getBlogPost",
        value: function getBlogPost() {
          return this.storeBlog.getBlogPost();
        }
      }, {
        key: "getBanner",
        value: function getBanner() {
          return this.storeBlog.getBanner();
        }
      }, {
        key: "getAuthor",
        value: function getAuthor() {
          return this.storeBlog.getAuthor();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SecondPageComponent;
    }();

    SecondPageComponent.ɵfac = function SecondPageComponent_Factory(t) {
      return new (t || SecondPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]));
    };

    SecondPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SecondPageComponent,
      selectors: [["app-second-page"]],
      decls: 7,
      vars: 3,
      consts: [[3, "banner"], [3, "author"], [3, "blogPost"]],
      template: function SecondPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-saqhan-header-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-saqhan-line-book", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-saqhan-quote-text");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-saqhan-author-info", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-saqhan-subsc-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-saqhan-new-blog", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-saqhan-app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("banner", ctx.getBanner());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("author", ctx.getAuthor());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("blogPost", ctx.getBlogPost());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY29uZC1wYWdlL3NlY29uZC1wYWdlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SecondPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-second-page',
          templateUrl: './second-page.component.html',
          styleUrls: ['./second-page.component.css']
        }]
      }], function () {
        return [{
          type: _store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/store-app.service.ts":
  /*!**************************************!*\
    !*** ./src/app/store-app.service.ts ***!
    \**************************************/

  /*! exports provided: StoreAppService */

  /***/
  function srcAppStoreAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StoreAppService", function () {
      return StoreAppService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var StoreAppService = /*#__PURE__*/function () {
      function StoreAppService() {
        _classCallCheck(this, StoreAppService);

        this.blogCarouselMock = [{
          id: 1,
          title: 'How to optimize your Facebook & Instagram video ads for success',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
          img: 'https://via.placeholder.com/900',
          category: 'Blog Post',
          btnText: 'Read Story',
          main: true,
          lenta: false
        }, {
          id: 2,
          title: 'Explore instagram Video: How to convert..',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ',
          img: 'https://via.placeholder.com/900',
          category: 'Report',
          btnText: 'Read Report',
          main: false,
          lenta: true
        }, {
          id: 3,
          title: 'Explore instagram Video: How to convert.',
          subTitle: 'Lorem ipsum dolor sit amet.',
          img: 'https://via.placeholder.com/900',
          category: 'Blog Post',
          btnText: 'Read Story',
          main: false,
          lenta: true
        }, {
          id: 4,
          title: 'Explore instagram Video: How to convert.',
          subTitle: 'Lorem ipsum dolor sit amet.',
          img: 'https://via.placeholder.com/900',
          category: 'Webinar',
          btnText: 'Read Story',
          main: false,
          lenta: true
        }, {
          id: 5,
          title: 'Last News instagram Video',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
          img: 'https://via.placeholder.com/900',
          category: 'Report',
          btnText: 'Read Report',
          main: false,
          lenta: true
        }, {
          id: 6,
          title: 'Last News instagram Video',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
          img: 'https://via.placeholder.com/900',
          category: 'Report',
          btnText: 'Read Report',
          main: false,
          lenta: true
        }, {
          id: 7,
          title: 'Last News instagram Video',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, aut dolore doloremque incidunt maxime quasi sint ullam.',
          img: 'https://via.placeholder.com/900',
          category: 'Report',
          btnText: 'Read Report',
          main: false,
          lenta: true
        }];
        this.blogPost = [{
          id: 1,
          title: 'How to quickly turn your podcast into a video script',
          img: 'https://via.placeholder.com/900',
          category: 'Report',
          btnText: 'Read Story'
        }, {
          id: 2,
          title: 'How to quickly turn your podcast into a video script',
          img: 'https://via.placeholder.com/900',
          category: 'Blog Post',
          btnText: 'Read Story'
        }, {
          id: 3,
          title: 'How to quickly turn your podcast into a video script',
          img: 'https://via.placeholder.com/900',
          category: 'Webinar',
          btnText: 'Read Story'
        }];
        this.popularNews = [{
          id: 1,
          title: 'How to quickly turn your podcast into a video script',
          category: 'Blog Post',
          btnText: 'Read Story',
          img: 'https://via.placeholder.com/900'
        }, {
          id: 2,
          title: 'How to quickly turn your podcast into a video script',
          category: 'Webinar',
          btnText: 'Watch Webinar',
          img: 'https://via.placeholder.com/900'
        }, {
          id: 3,
          title: 'How to quickly turn your podcast into a video script',
          category: 'Report',
          btnText: 'Read Report ',
          img: 'https://via.placeholder.com/900'
        }];
        this.events = [{
          id: 1,
          title: 'The Basic: Structuring Your Video Marketing Strategy',
          category: 'Webinar',
          btnText: 'Watch Webinar',
          img: 'https://via.placeholder.com/900',
          date: '24 Jun'
        }, {
          id: 2,
          title: 'How to quickly turn your podcast into a video script',
          category: 'Webinar',
          btnText: 'Watch Webinar',
          img: 'https://via.placeholder.com/900',
          date: ''
        }, {
          id: 3,
          title: 'The Basic: Structuring Your Video Marketing Strategy',
          category: 'Webinar',
          btnText: 'Watch Webinar',
          img: 'https://via.placeholder.com/900',
          date: '24 Jun'
        }];
        this.banner = [{
          id: 1,
          title: 'Lorem ipsum dolor sit amet',
          subTitle: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid asperiores.\n',
          btnText: 'Explore Report',
          img: 'https://via.placeholder.com/300x400?text=Banner'
        }];
        this.authors = [{
          id: 1,
          firstName: 'Saqhan Abaev',
          img: 'https://via.placeholder.com/900',
          position: 'Founder',
          instagram: 'www.instagram.com',
          vkontacte: 'https://vk.com/saqhan'
        }];
        this.breadCrumbs = [{
          homeLink: 'Home',
          homeUrlLink: '/',
          currentLink: 'Item News',
          currentUrlLink: '/',
          allLink: 'All',
          allUrlLink: '/',
          nameLink: 'Another',
          nameUrlLink: '/'
        }];
        this.NewsStore = [{
          id: 1,
          title: 'Annoucing V2.7 Release',
          subTitle: 'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
          img: 'https://via.placeholder.com/500',
          author: 'Saqhan Abaev',
          date: '20 Апр 2020',
          btnText: 'Keep Readeing',
          category: 'Editor'
        }, {
          id: 2,
          title: 'Doing Wonders With Images In the Froala Editor',
          subTitle: 'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
          img: 'https://via.placeholder.com/500',
          author: 'Saqhan Abaev',
          date: '20 Апр 2019',
          btnText: 'Keep Readeing',
          category: 'Editor'
        }, {
          id: 3,
          title: 'Using Multiple Froala Editors On a Single Webpage',
          subTitle: 'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
          img: 'https://via.placeholder.com/500',
          author: 'Saqhan Abaev',
          date: '20 Апр 2020',
          btnText: 'Keep Readeing',
          category: 'Editor'
        }, {
          id: 4,
          title: 'Annoucing V2.7 Release',
          subTitle: 'At Froala, our mission has always been about pushing web editing beyond its conceived limits—this vision has served as the guiding philosophy for all Froala releases from Version 1.x to',
          img: 'https://via.placeholder.com/500',
          author: 'Saqhan Abaev',
          date: '20 Апр 2020',
          btnText: 'Keep Readeing',
          category: 'Editor'
        }]; //chat data

        this.mainUser = [{
          id: 1,
          name: "Эм, виртуальный помощник",
          message: "Во тьме ночной при свете дня, тут сообщение пишу я",
          img: "https://via.placeholder.com/500x500?text=Admin",
          date: "24 Апр, 15:50"
        }];
        this.messages = [{
          id: 1,
          name: "Константин Михалков",
          message: "Я ответственно заявляю, что в верстке есть большие",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 2,
          name: "Зинедин Зидан",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: "Тренер"
        }, {
          id: 3,
          name: "Владимир Путин",
          message: "Предсознательное стабильно. Рефлексия вызывает стимул. Эскапизм осознаёт импульс. ",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "30 Окт 15:20",
          position: "Президент"
        }, {
          id: 4,
          name: "Психоз изменяем",
          message: "Мышление, например, однородно иллюстрирует стимул.",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 5,
          name: "Батька",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: "Президент"
        }, {
          id: 6,
          name: "Маргарита",
          message: "Психоз изменяем. Конформизм понимает психоз.",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 7,
          name: "Никита фролков",
          message: "Спасибо, оплатили!",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 8,
          name: "Михаэль Шумахер",
          message: "Мышление, например, однородно иллюстрирует стимул.",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: "Водитель"
        }, {
          id: 9,
          name: "Филипп Лам",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: "Футболист"
        }, {
          id: 10,
          name: "Френсис",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 11,
          name: "Френсис",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 12,
          name: "Филипп Лам",
          message: "Конфликтный гештальт: бессознательное или восприятие?",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: "Футболист"
        }, {
          id: 13,
          name: "Маргарита",
          message: "Психоз изменяем. Конформизм понимает психоз.",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }, {
          id: 14,
          name: "Никита фролков",
          message: "Спасибо, оплатили!",
          img: "https://via.placeholder.com/500x500?text=User",
          date: "24 Апр 15:20",
          position: ""
        }];
      }

      _createClass(StoreAppService, [{
        key: "sum",
        value: function sum(a1, b1) {
          return a1 + b1;
        }
      }, {
        key: "getBlog",
        value: function getBlog() {
          return this.blogCarouselMock;
        }
      }, {
        key: "getBlogPost",
        value: function getBlogPost() {
          return this.blogPost;
        }
      }, {
        key: "getPopularNews",
        value: function getPopularNews() {
          return this.popularNews;
        }
      }, {
        key: "getEvents",
        value: function getEvents() {
          return this.events;
        }
      }, {
        key: "getBanner",
        value: function getBanner() {
          return this.banner;
        }
      }, {
        key: "getAuthor",
        value: function getAuthor() {
          return this.authors;
        }
      }, {
        key: "getBreadCrumbs",
        value: function getBreadCrumbs() {
          return this.breadCrumbs;
        }
      }, {
        key: "getNewsStore",
        value: function getNewsStore() {
          return this.NewsStore;
        }
      }, {
        key: "getMainUser",
        value: function getMainUser() {
          return this.mainUser;
        }
      }, {
        key: "getMessages",
        value: function getMessages() {
          return this.messages;
        }
      }]);

      return StoreAppService;
    }();

    StoreAppService.ɵfac = function StoreAppService_Factory(t) {
      return new (t || StoreAppService)();
    };

    StoreAppService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: StoreAppService,
      factory: StoreAppService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StoreAppService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/third-page/third-page.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/third-page/third-page.component.ts ***!
    \****************************************************/

  /*! exports provided: ThirdPageComponent */

  /***/
  function srcAppThirdPageThirdPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThirdPageComponent", function () {
      return ThirdPageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _store_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../store-app.service */
    "./src/app/store-app.service.ts");

    var ThirdPageComponent = /*#__PURE__*/function () {
      function ThirdPageComponent(storeBlog) {
        _classCallCheck(this, ThirdPageComponent);

        this.storeBlog = storeBlog;
      }

      _createClass(ThirdPageComponent, [{
        key: "getBreadCrumbs",
        value: function getBreadCrumbs() {
          return this.storeBlog.getBreadCrumbs();
        }
      }, {
        key: "getNewsStore",
        value: function getNewsStore() {
          return this.storeBlog.getNewsStore();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThirdPageComponent;
    }();

    ThirdPageComponent.ɵfac = function ThirdPageComponent_Factory(t) {
      return new (t || ThirdPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]));
    };

    ThirdPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThirdPageComponent,
      selectors: [["app-third-page"]],
      decls: 4,
      vars: 2,
      consts: [[3, "links"], [3, "news"]],
      template: function ThirdPageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "s-saqhan-header-app");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-saqhan-bread-crumbs", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-saqhan-list-news", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-saqhan-app-footer");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("links", ctx.getBreadCrumbs());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("news", ctx.getNewsStore());
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RoaXJkLXBhZ2UvdGhpcmQtcGFnZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThirdPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-third-page',
          templateUrl: './third-page.component.html',
          styleUrls: ['./third-page.component.css']
        }]
      }], function () {
        return [{
          type: _store_app_service__WEBPACK_IMPORTED_MODULE_1__["StoreAppService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var s_saqhan_v1_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! s-saqhan-v1/loader */
    "./node_modules/s-saqhan-v1/loader/index.es2017.mjs");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js"); // stencil js - source


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    }); // stencil js - source


    Object(s_saqhan_v1_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\saqha\Desktop\storybook\storybook-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map