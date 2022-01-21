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

    var routes = [];

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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _building_building_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./building/building.component */
    "./src/app/building/building.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _specialize_specialize_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./specialize/specialize.component */
    "./src/app/specialize/specialize.component.ts");
    /* harmony import */


    var _logos_logos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./logos/logos.component */
    "./src/app/logos/logos.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _design_products_design_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./design-products/design-products.component */
    "./src/app/design-products/design-products.component.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./tabs/tabs.component */
    "./src/app/tabs/tabs.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./filter/filter.component */
    "./src/app/filter/filter.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Hello, Angular.';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 12,
      vars: 0,
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-building");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-specialize");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-banner");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-design-products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-tabs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-statistics");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-filter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-news");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-footer");
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _building_building_component__WEBPACK_IMPORTED_MODULE_2__["BuildingComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"], _specialize_specialize_component__WEBPACK_IMPORTED_MODULE_4__["SpecializeComponent"], _logos_logos_component__WEBPACK_IMPORTED_MODULE_5__["LogosComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_6__["BannerComponent"], _design_products_design_products_component__WEBPACK_IMPORTED_MODULE_7__["DesignProductsComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_8__["TabsComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_9__["StatisticsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_10__["FilterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]],
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
      }], function () {
        return [];
      }, null);
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


    var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _building_building_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./building/building.component */
    "./src/app/building/building.component.ts");
    /* harmony import */


    var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./products/products.component */
    "./src/app/products/products.component.ts");
    /* harmony import */


    var _specialize_specialize_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./specialize/specialize.component */
    "./src/app/specialize/specialize.component.ts");
    /* harmony import */


    var _logos_logos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./logos/logos.component */
    "./src/app/logos/logos.component.ts");
    /* harmony import */


    var _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./banner/banner.component */
    "./src/app/banner/banner.component.ts");
    /* harmony import */


    var _design_products_design_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./design-products/design-products.component */
    "./src/app/design-products/design-products.component.ts");
    /* harmony import */


    var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./tabs/tabs.component */
    "./src/app/tabs/tabs.component.ts");
    /* harmony import */


    var _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./statistics/statistics.component */
    "./src/app/statistics/statistics.component.ts");
    /* harmony import */


    var _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./filter/filter.component */
    "./src/app/filter/filter.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

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
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _building_building_component__WEBPACK_IMPORTED_MODULE_7__["BuildingComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], _specialize_specialize_component__WEBPACK_IMPORTED_MODULE_9__["SpecializeComponent"], _logos_logos_component__WEBPACK_IMPORTED_MODULE_10__["LogosComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"], _design_products_design_products_component__WEBPACK_IMPORTED_MODULE_12__["DesignProductsComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_14__["StatisticsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_16__["NewsComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]],
        exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _building_building_component__WEBPACK_IMPORTED_MODULE_7__["BuildingComponent"], _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"], _specialize_specialize_component__WEBPACK_IMPORTED_MODULE_9__["SpecializeComponent"], _logos_logos_component__WEBPACK_IMPORTED_MODULE_10__["LogosComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"], _design_products_design_products_component__WEBPACK_IMPORTED_MODULE_12__["DesignProductsComponent"], _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_13__["TabsComponent"], _statistics_statistics_component__WEBPACK_IMPORTED_MODULE_14__["StatisticsComponent"], _filter_filter_component__WEBPACK_IMPORTED_MODULE_15__["FilterComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_16__["NewsComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]],
          exports: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_18__["MatTabsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/banner/banner.component.ts":
  /*!********************************************!*\
    !*** ./src/app/banner/banner.component.ts ***!
    \********************************************/

  /*! exports provided: BannerComponent */

  /***/
  function srcAppBannerBannerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
      return BannerComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BannerComponent = /*#__PURE__*/function () {
      function BannerComponent() {
        _classCallCheck(this, BannerComponent);
      }

      _createClass(BannerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BannerComponent;
    }();

    BannerComponent.ɵfac = function BannerComponent_Factory(t) {
      return new (t || BannerComponent)();
    };

    BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BannerComponent,
      selectors: [["app-banner"]],
      decls: 11,
      vars: 0,
      consts: [[1, "container-fluid", "banner"], [1, "container"], [1, "row"], [1, "col-lg-8"], [1, "main-title-banner"], [1, "info-block-banner"], [1, "col-lg-4"], ["href", "#", 1, "btn-theme"]],
      template: function BannerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "A digital product agency helping startups & big companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Prelude exists to help companies inspire, adapt and take advantage of change. We orchestrate people, systems, processes and technology to work together and better our clients\u2019 businesses. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Get Started ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".banner[_ngcontent-%COMP%] {\r\n  background-image: url('about-us-bg.jpg');\r\n  padding: 150px 0;\r\n  background-repeat: no-repeat;\r\n\r\n}\r\n\r\n.banner[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.info-block-banner[_ngcontent-%COMP%]{\r\n  font-size: 16px;\r\n  color: #fff;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n.main-title-banner[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  color: #fff;\r\n  font-weight: 300;\r\n  line-height: 1.2;\r\n  margin-bottom: 20px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0NBQXlEO0VBQ3pELGdCQUFnQjtFQUNoQiw0QkFBNEI7O0FBRTlCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5uZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9hYm91dC11cy1iZy5qcGcnKTtcclxuICBwYWRkaW5nOiAxNTBweCAwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG59XHJcblxyXG4uYmFubmVyIC5yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uaW5mby1ibG9jay1iYW5uZXJ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLm1haW4tdGl0bGUtYmFubmVyIHtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogMS4yO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-banner',
          templateUrl: './banner.component.html',
          styleUrls: ['./banner.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/building/building.component.ts":
  /*!************************************************!*\
    !*** ./src/app/building/building.component.ts ***!
    \************************************************/

  /*! exports provided: BuildingComponent */

  /***/
  function srcAppBuildingBuildingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuildingComponent", function () {
      return BuildingComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var BuildingComponent = /*#__PURE__*/function () {
      function BuildingComponent() {
        _classCallCheck(this, BuildingComponent);
      }

      _createClass(BuildingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BuildingComponent;
    }();

    BuildingComponent.ɵfac = function BuildingComponent_Factory(t) {
      return new (t || BuildingComponent)();
    };

    BuildingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuildingComponent,
      selectors: [["app-building"]],
      decls: 17,
      vars: 0,
      consts: [["id", "second", 1, "second", "container"], [1, "row"], [1, "col-lg-5", "block-left"], [1, "up-title"], [1, "main-title"], [1, "sub-title"], [1, "link-more"], ["href", "#", 1, "btn-theme"], [1, "col-lg-7", "second-block-right"], ["src", "assets/img/second-right.jpg", "alt", ""]],
      template: function BuildingComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "We design digital products & branded experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Building brands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "& Digital experiences");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "We help in-house teams make better digital products with design systems.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Learn More ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".second[_ngcontent-%COMP%]  {\r\n  padding: 95px 0;\r\n}\r\n\r\n.block-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.second-block-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.up-title[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  margin-top: 50px;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  font-weight: 300;\r\n  line-height: 65px;\r\n  color: #39374d;\r\n  max-width: 500px;\r\n}\r\n\r\n.main-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.sub-title[_ngcontent-%COMP%] {\r\n  color: #5e5d6c;\r\n  font-family: 'Open Sans', sans-serif;\r\n  margin-top: 15px;\r\n}\r\n\r\n.link-more[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .second[_ngcontent-%COMP%] {\r\n    padding: 60px 0;\r\n  }\r\n  .second-left[_ngcontent-%COMP%] {\r\n    margin-bottom: 30px;\r\n\r\n  }\r\n  .second-up-title[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVpbGRpbmcvYnVpbGRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxpQkFBaUI7O0FBRWpCO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsY0FBYztFQUNkLG9DQUFvQztFQUNwQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLG1CQUFtQjs7RUFFckI7RUFDQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2J1aWxkaW5nL2J1aWxkaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzZWNvbmQtYmxvY2sgKi9cclxuXHJcbi5zZWNvbmQgIHtcclxuICBwYWRkaW5nOiA5NXB4IDA7XHJcbn1cclxuXHJcbi5ibG9jay1sZWZ0IGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zZWNvbmQtYmxvY2stcmlnaHQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnVwLXRpdGxlIHtcclxuICBjb2xvcjogI2ZmMzM2NjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxlIHtcclxuICBmb250LXNpemU6IDUycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBsaW5lLWhlaWdodDogNjVweDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4ubWFpbi10aXRsZSBzcGFuIHtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmxpbmstbW9yZSB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuc2Vjb25kIHtcclxuICAgIHBhZGRpbmc6IDYwcHggMDtcclxuICB9XHJcbiAgLnNlY29uZC1sZWZ0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gIH1cclxuICAuc2Vjb25kLXVwLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuildingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-building',
          templateUrl: './building.component.html',
          styleUrls: ['./building.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/design-products/design-products.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/design-products/design-products.component.ts ***!
    \**************************************************************/

  /*! exports provided: DesignProductsComponent */

  /***/
  function srcAppDesignProductsDesignProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DesignProductsComponent", function () {
      return DesignProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function DesignProductsComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var product_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", product_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.subtitle, " ");
      }
    }

    var DesignProductsComponent = /*#__PURE__*/function () {
      function DesignProductsComponent() {
        _classCallCheck(this, DesignProductsComponent);

        this.products = [{
          id: 1,
          title: '1. Define the Audience',
          subtitle: 'Great businesses are built on great experiences. We make those experiences happen.',
          img: 'assets/img/icons/6.png'
        }, {
          id: 2,
          title: '2. Prototype & Test',
          subtitle: 'Great businesses are built on great experiences. We make those experiences happen.',
          img: 'assets/img/icons/7.png'
        }, {
          id: 3,
          title: '3. Detail & Present Findings',
          subtitle: 'Great businesses are built on great experiences. We make those experiences happen.',
          img: 'assets/img/icons/8.png'
        }];
      }

      _createClass(DesignProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DesignProductsComponent;
    }();

    DesignProductsComponent.ɵfac = function DesignProductsComponent_Factory(t) {
      return new (t || DesignProductsComponent)();
    };

    DesignProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DesignProductsComponent,
      selectors: [["app-design-products"]],
      decls: 8,
      vars: 1,
      consts: [[1, "container", "process-work"], [1, "row"], [1, "col-lg-10", "quickly-title", "m-auto"], [1, "col-lg-7", "process-sub-title", "m-auto"], ["class", "col-lg-4 process-work-cart", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "process-work-cart"], ["alt", "", 3, "src"], [1, "name-block"], [1, "info-block"]],
      template: function DesignProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " How we design digital products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " We specialize in understanding users and designing digital products they love. How do we know? Because we ask them. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DesignProductsComponent_div_7_Template, 7, 3, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".process-work[_ngcontent-%COMP%] {\r\n  padding: 100px 0;\r\n}\r\n.process-sub-title[_ngcontent-%COMP%] {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #5e5d6c;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 65px;\r\n}\r\n.process-work-cart[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 0 45px;\r\n}\r\n.border-bottom-process[_ngcontent-%COMP%] {\r\n  width: 20px;\r\n  border-bottom: 5px solid red;\r\n}\r\nhr[_ngcontent-%COMP%] {\r\n  border: 3px solid #e7e7e7;\r\n  width: 30px;\r\n  border-radius: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVzaWduLXByb2R1Y3RzL2Rlc2lnbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQ0FBb0M7RUFDcEMsY0FBYztFQUNkLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7QUFFQTtFQUNFLFdBQVc7RUFDWCw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvZGVzaWduLXByb2R1Y3RzL2Rlc2lnbi1wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2Nlc3Mtd29yayB7XHJcbiAgcGFkZGluZzogMTAwcHggMDtcclxufVxyXG4ucHJvY2Vzcy1zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA2NXB4O1xyXG59XHJcblxyXG4ucHJvY2Vzcy13b3JrLWNhcnQge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDQ1cHg7XHJcbn1cclxuXHJcbi5ib3JkZXItYm90dG9tLXByb2Nlc3Mge1xyXG4gIHdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjZTdlN2U3O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DesignProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-design-products',
          templateUrl: './design-products.component.html',
          styleUrls: ['./design-products.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/filter/filter.component.ts":
  /*!********************************************!*\
    !*** ./src/app/filter/filter.component.ts ***!
    \********************************************/

  /*! exports provided: FilterComponent */

  /***/
  function srcAppFilterFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FilterComponent", function () {
      return FilterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function FilterComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Knowledge About Design ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var filter_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", filter_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var FilterComponent = /*#__PURE__*/function () {
      function FilterComponent() {
        _classCallCheck(this, FilterComponent);

        this.caseBlocks = [{
          id: 1,
          title: 'Knowledge About Design',
          img: 'assets/img/gallery-about-us-5.jpg'
        }, {
          id: 2,
          title: 'Knowledge About Design',
          img: 'assets/img/gallery-about-us-6.jpg'
        }, {
          id: 3,
          title: 'Knowledge About Design',
          img: 'assets/img/gallery-about-us-7.jpg'
        }, {
          id: 4,
          title: 'Knowledge About Design',
          img: 'assets/img/gallery-about-us-8.jpg'
        }];
      }

      _createClass(FilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FilterComponent;
    }();

    FilterComponent.ɵfac = function FilterComponent_Factory(t) {
      return new (t || FilterComponent)();
    };

    FilterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FilterComponent,
      selectors: [["app-filter"]],
      decls: 26,
      vars: 1,
      consts: [[1, "container"], [1, "row", "filter"], [1, "col-lg-12", "mr-auto", "text-center"], [1, "up-title"], [1, "filter-title"], [1, "col-lg-12", "filter-btns", "text-center"], [1, "row", "carts-block"], ["class", "col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "filter-cart"], ["alt", "", 3, "src"], ["href", "#", 1, "cart-name"], [1, "fas", "fa-arrow-right"]],
      template: function FilterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " We design digital products ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " We work with ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "incredible customers & companies");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " around the world ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "App");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branding");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Development");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "UX Design");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Web");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, FilterComponent_div_25_Template, 8, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.caseBlocks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".filter[_ngcontent-%COMP%] {\r\n  margin-top: 140px;\r\n}\r\n\r\n.filter-title[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  font-weight: 300;\r\n  line-height: 65px;\r\n  color: #39374d;\r\n}\r\n\r\n.filter-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  font-weight: 500;\r\n}\r\n\r\n.filter-btns[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  display: inline;\r\n  text-transform: uppercase;\r\n  margin: 0 15px;\r\n  color: #002e5b;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n}\r\n\r\n.filter-btns[_ngcontent-%COMP%] {\r\n  margin-top: 50px;\r\n}\r\n\r\n.carts-block[_ngcontent-%COMP%] {\r\n\r\n}\r\n\r\n.cart-name[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  height: 85px;\r\n  display: flex;\r\n  align-items: flex-start;\r\n  background-color: #fff;\r\n  border-radius: 5px;\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  padding: 20px 25px;\r\n  transition: 0.5s ease-in-out;\r\n  box-shadow: 0px 10px 25px -10px #ccc;\r\n  position: relative;\r\n  bottom: 40px;\r\n  margin: auto;\r\n  text-decoration: none;\r\n}\r\n\r\n.filter-cart[_ngcontent-%COMP%]:hover   .cart-name[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n  text-decoration: none;\r\n  bottom: 110px;\r\n\r\n}\r\n\r\n.filter-cart[_ngcontent-%COMP%]:hover   .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color:#8ed4ea;\r\n}\r\n\r\n.cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  font-size: 18px;\r\n  position: relative;\r\n  top: 60%;\r\n  color: #ccc;\r\n  left: 40%;\r\n  transition: 0.3s ease-in-out;\r\n}\r\n\r\n.filter-cart[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  height: 440px;\r\n  border-radius: 5px;\r\n  margin-top: 50px;\r\n  margin-bottom: 70px;\r\n\r\n}\r\n\r\n.filter-cart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  border-radius: 5px;\r\n}\r\n\r\n.filter-cart[_ngcontent-%COMP%]:hover   .cart-name[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n  text-decoration: none;\r\n  bottom: 110px;\r\n\r\n}\r\n\r\n.firtst-cart[_ngcontent-%COMP%] {\r\n  background-image: url('gallery-about-us-5.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.second-cart[_ngcontent-%COMP%] {\r\n  background-image: url('gallery-about-us-6.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.third-cart[_ngcontent-%COMP%] {\r\n  background-image: url('gallery-about-us-7.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.fourth-cart[_ngcontent-%COMP%] {\r\n  background-image: url('gallery-about-us-8.jpg');\r\n  background-size: cover;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTs7QUFFQTs7QUFHQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixhQUFhOztBQUVmOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLFNBQVM7RUFDVCw0QkFBNEI7QUFDOUI7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQW1COztBQUVyQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGFBQWE7O0FBRWY7O0FBR0E7RUFDRSwrQ0FBOEQ7RUFDOUQsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0UsK0NBQThEO0VBQzlELHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLCtDQUE4RDtFQUM5RCxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSwrQ0FBOEQ7RUFDOUQsc0JBQXNCO0FBQ3hCIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVyL2ZpbHRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbHRlciB7XHJcbiAgbWFyZ2luLXRvcDogMTQwcHg7XHJcbn1cclxuXHJcbi5maWx0ZXItdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNTJweDtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGxpbmUtaGVpZ2h0OiA2NXB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG59XHJcbi5maWx0ZXItdGl0bGUgc3BhbiB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLmZpbHRlci1idG5zIHVsIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW46IDAgMTVweDtcclxuICBjb2xvcjogIzAwMmU1YjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uZmlsdGVyLWJ0bnMge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbi5jYXJ0cy1ibG9jayB7XHJcblxyXG59XHJcblxyXG5cclxuLmNhcnQtbmFtZSB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBoZWlnaHQ6IDg1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgcGFkZGluZzogMjBweCAyNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjVweCAtMTBweCAjY2NjO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuXHJcbi5maWx0ZXItY2FydDpob3ZlciAuY2FydC1uYW1lIHtcclxuICBjb2xvcjogI2ZmMzM2NjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm90dG9tOiAxMTBweDtcclxuXHJcbn1cclxuXHJcbi5maWx0ZXItY2FydDpob3ZlciAuY2FydC1uYW1lIGkge1xyXG4gIGNvbG9yOiM4ZWQ0ZWE7XHJcbn1cclxuXHJcbi5jYXJ0LW5hbWUgaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDYwJTtcclxuICBjb2xvcjogI2NjYztcclxuICBsZWZ0OiA0MCU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuXHJcbi5maWx0ZXItY2FydCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0NDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG5cclxufVxyXG4uZmlsdGVyLWNhcnQgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5maWx0ZXItY2FydDpob3ZlciAuY2FydC1uYW1lIHtcclxuICBjb2xvcjogI2ZmMzM2NjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm90dG9tOiAxMTBweDtcclxuXHJcbn1cclxuXHJcblxyXG4uZmlydHN0LWNhcnQge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvZ2FsbGVyeS1hYm91dC11cy01LmpwZycpO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLnNlY29uZC1jYXJ0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2dhbGxlcnktYWJvdXQtdXMtNi5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi50aGlyZC1jYXJ0IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2dhbGxlcnktYWJvdXQtdXMtNy5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbi5mb3VydGgtY2FydCB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdzcmMvYXNzZXRzL2ltZy9nYWxsZXJ5LWFib3V0LXVzLTguanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-filter',
          templateUrl: './filter.component.html',
          styleUrls: ['./filter.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 86,
      vars: 0,
      consts: [[1, "container"], [1, "row", "footer"], [1, "col-lg-4", "col-md-12", "footer-info-block"], [1, "footer-logo"], ["src", "assets/img/logo-footer.png", "alt", ""], [1, "footer-info"], [1, "footer-soc"], [1, "template-demo"], ["type", "button", 1, "btn", "btn-social-icon", "btn-facebook", "btn-rounded"], [1, "fab", "fa-facebook-f"], ["type", "button", 1, "btn", "btn-social-icon", "btn-twitter", "btn-rounded"], [1, "fab", "fa-instagram"], ["type", "button", 1, "btn", "btn-social-icon", "btn-instagram", "btn-rounded"], [1, "col-lg-2", "col-md-3", "col-sm-6", "col-6"], [1, "footer-title"], [1, "footer-item"], ["href", "#", 1, "foot-nav-link"], [1, "footer-info-office"], [1, "footer-info-number"], [1, "row", "coopyrite"], [1, "col-lg-6", "left"], [1, "col-lg-6", "right"], ["href", "#"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We\u2019re designers, engineers and strategists. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " We design digital products. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Portfolio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Platform");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Customers");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Pricing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Training");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Marketplace");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Experts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Guides");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Offices");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "New York. 112 W 34th St, Manhattan. USA.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "(1) 212-946-2707");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "\xA92019 Prelude by Viworx-Co. All Rights Reserved.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Terms of use");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, " | ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Privacy policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\r\n  margin-top: 100px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n\r\n.footer-info[_ngcontent-%COMP%] {\r\n  margin-top: 40px;\r\n  margin-bottom: 40px;\r\n  color: #5e5d6c;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n\r\n.footer-info-office[_ngcontent-%COMP%] {\r\n  color: #5e5d6c;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n\r\n.footer-info-number[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n  font-size: 14px;\r\n}\r\n\r\n\r\n.footer-title[_ngcontent-%COMP%] {\r\n  margin-bottom: 35px;\r\n  color: #39374d;\r\n  font-size: 18px;\r\n  font-weight: 500;\r\n}\r\n\r\n\r\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\r\n  padding-left: 0px;\r\n}\r\n\r\n\r\n.footer-item[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n  list-style-type: none;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n\r\n.foot-nav-link[_ngcontent-%COMP%] {\r\n  font-family: 'Futura PT Book';\r\n  color: #39374d;\r\n  font-size: 16px;\r\n  transition: 0.1s ease;\r\n}\r\n\r\n\r\n.foot-nav-link[_ngcontent-%COMP%]:hover {\r\n  color: #ff3366;\r\n  font-family: 'Futura PT';\r\n  font-weight: 500;\r\n  text-decoration: none;\r\n  border-bottom: 2px solid #ff3366;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n.btn.btn-social-icon[_ngcontent-%COMP%] {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 0\r\n}\r\n\r\n\r\n.template-demo[_ngcontent-%COMP%] > .btn[_ngcontent-%COMP%] {\r\n  margin-right: 0.5rem !important\r\n}\r\n\r\n\r\n.template-demo[_ngcontent-%COMP%] {\r\n  margin-top: 0.5rem !important\r\n}\r\n\r\n\r\n.btn.btn-rounded[_ngcontent-%COMP%] {\r\n  border-radius: 50px\r\n}\r\n\r\n\r\n.btn-facebook[_ngcontent-%COMP%], .btn-twitter[_ngcontent-%COMP%], .btn-instagram[_ngcontent-%COMP%]  {\r\n  background: #fff;\r\n  color: #c4c4c4;\r\n  border:1px solid #c4c4c4;\r\n}\r\n\r\n\r\n.btn-facebook[_ngcontent-%COMP%]:hover, .btn-facebook[_ngcontent-%COMP%]:focus {\r\n  background: #ff3366;\r\n  color: #ffffff\r\n}\r\n\r\n\r\n.btn-twitter[_ngcontent-%COMP%]:hover, .btn-twitter[_ngcontent-%COMP%]:focus {\r\n  background: #ff3366;\r\n  color: #ffffff\r\n}\r\n\r\n\r\n.btn-instagram[_ngcontent-%COMP%]:hover, .btn-instagram[_ngcontent-%COMP%]:focus {\r\n  background: #ff3366;\r\n  color: #ffffff\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.coopyrite[_ngcontent-%COMP%] {\r\n  height: 60px;\r\n  display: flex;\r\n  align-items: center;\r\n  border-top: 1px solid #e2e7ea;\r\n}\r\n\r\n\r\n.coopyrite[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n  color: #5e5d6c;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  font-family: 'Open Sans', sans-serif;\r\n}\r\n\r\n\r\n.coopyrite[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n  text-align: right;\r\n  color: #5e5d6c;\r\n}\r\n\r\n\r\n.coopyrite[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n  font-family: 'Futura PT Book';\r\n  color: #5e5d6c;\r\n  font-size: 16px;\r\n  text-decoration: none;\r\n\r\n}\r\n\r\n\r\n@media screen and (max-width: 992px) {\r\n  .footer[_ngcontent-%COMP%] {\r\n    margin-top: 70px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .footer-info-block[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n}\r\n\r\n\r\n@media screen and (max-width: 414px) {\r\n  .footer[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .footer-title[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  .coopyrite[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .coopyrite[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7O0FBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLG9DQUFvQztBQUN0Qzs7O0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixvQ0FBb0M7QUFDdEM7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7OztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOzs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0FBQ3JCOzs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsZ0NBQWdDO0FBQ2xDOzs7QUFFQSxzQkFBc0I7OztBQUV0QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1o7QUFDRjs7O0FBRUE7RUFDRTtBQUNGOzs7QUFFQTtFQUNFO0FBQ0Y7OztBQUVBO0VBQ0U7QUFDRjs7O0FBSUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHdCQUF3QjtBQUMxQjs7O0FBSUE7O0VBRUUsbUJBQW1CO0VBQ25CO0FBQ0Y7OztBQUVBOztFQUVFLG1CQUFtQjtFQUNuQjtBQUNGOzs7QUFHQTs7RUFFRSxtQkFBbUI7RUFDbkI7QUFDRjs7O0FBQ0Esc0JBQXNCOzs7QUFFdEIsY0FBYzs7O0FBRWQ7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFDL0I7OztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsb0NBQW9DO0FBQ3RDOzs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCOzs7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZUFBZTtFQUNmLHFCQUFxQjs7QUFFdkI7OztBQUdBO0VBQ0U7SUFDRSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUNyQjtBQUNGOzs7QUFDQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA3MHB4O1xyXG59XHJcblxyXG5cclxuLmZvb3Rlci1pbmZvIHtcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgY29sb3I6ICM1ZTVkNmM7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5mb290ZXItaW5mby1vZmZpY2Uge1xyXG4gIGNvbG9yOiAjNWU1ZDZjO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZvb3Rlci1pbmZvLW51bWJlciB7XHJcbiAgY29sb3I6ICNmZjMzNjY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLXRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAzNXB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcbi5mb290ZXItaXRlbSB1bCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLmZvb3Rlci1pdGVtIHVsIGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmZvb3QtbmF2LWxpbmsge1xyXG4gIGZvbnQtZmFtaWx5OiAnRnV0dXJhIFBUIEJvb2snO1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICB0cmFuc2l0aW9uOiAwLjFzIGVhc2U7XHJcbn1cclxuXHJcbi5mb290LW5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmMzM2NjtcclxuICBmb250LWZhbWlseTogJ0Z1dHVyYSBQVCc7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZjMzNjY7XHJcbn1cclxuXHJcbi8qIGZvb3RlciBpY29uIHN0eWxlICovXHJcblxyXG4uYnRuLmJ0bi1zb2NpYWwtaWNvbiB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIHBhZGRpbmc6IDBcclxufVxyXG5cclxuLnRlbXBsYXRlLWRlbW8+LmJ0biB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwLjVyZW0gIWltcG9ydGFudFxyXG59XHJcblxyXG4udGVtcGxhdGUtZGVtbyB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtICFpbXBvcnRhbnRcclxufVxyXG5cclxuLmJ0bi5idG4tcm91bmRlZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTBweFxyXG59XHJcblxyXG5cclxuXHJcbi5idG4tZmFjZWJvb2ssIC5idG4tdHdpdHRlciwgLmJ0bi1pbnN0YWdyYW0gIHtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGNvbG9yOiAjYzRjNGM0O1xyXG4gIGJvcmRlcjoxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG5cclxuXHJcblxyXG4uYnRuLWZhY2Vib29rOmhvdmVyLFxyXG4uYnRuLWZhY2Vib29rOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYzMzY2O1xyXG4gIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcbi5idG4tdHdpdHRlcjpob3ZlcixcclxuLmJ0bi10d2l0dGVyOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiAjZmYzMzY2O1xyXG4gIGNvbG9yOiAjZmZmZmZmXHJcbn1cclxuXHJcblxyXG4uYnRuLWluc3RhZ3JhbTpob3ZlcixcclxuLmJ0bi1pbnN0YWdyYW06Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICNmZjMzNjY7XHJcbiAgY29sb3I6ICNmZmZmZmZcclxufVxyXG4vKiBmb290ZXIgaWNvbiBzdHlsZSAqL1xyXG5cclxuLyogY29vcHlyaXRlICovXHJcblxyXG4uY29vcHlyaXRlIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTJlN2VhO1xyXG59XHJcblxyXG4uY29vcHlyaXRlIC5sZWZ0IHtcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5jb29weXJpdGUgLnJpZ2h0IHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBjb2xvcjogIzVlNWQ2YztcclxufVxyXG4uY29vcHlyaXRlIC5yaWdodCBhIHtcclxuICBmb250LWZhbWlseTogJ0Z1dHVyYSBQVCBCb29rJztcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLmZvb3RlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcblxyXG4gIC5mb290ZXItaW5mby1ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gIC5mb290ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuZm9vdGVyLXRpdGxlIHtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIC5jb29weXJpdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY29vcHlyaXRlIC5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_li_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("nav-link ", item_r1["class"], "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.title, " ");
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.menu = [{
          "class": 'active',
          title: 'Home'
        }, {
          "class": '',
          title: 'About'
        }, {
          "class": '',
          title: 'Services'
        }, {
          "class": '',
          title: 'Pricing'
        }, {
          "class": '',
          title: 'Servis'
        }, {
          "class": '',
          title: 'Products'
        }, {
          "class": 'material-icons',
          title: 'shopping_cart'
        }, {
          "class": 'material-icons',
          title: 'search'
        }, {
          "class": 'btn-theme',
          title: 'Get Started'
        }];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 26,
      vars: 1,
      consts: [[1, "header"], [1, "container-fluid"], [1, "row"], [1, "container-fluid", "border-bottom", "sticky-top"], [1, "container"], [1, "row", "main__menu"], [1, "navbar", "navbar-expand-lg", "navbar-light"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/logo.png"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], ["class", "nav-item", 4, "ngFor", "ngForOf"], [1, "container", "title-first"], [1, "row", "align-items-center"], [1, "col-lg-8", "m-auto"], [1, "first-title"], [1, "first-sub-title"], [1, "col-12", "arrow-down"], ["href", "#second"], ["src", "assets/img/icons/down.png", "alt", ""], [1, "nav-item"], ["href", "#", "href", "#"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nav", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, HeaderComponent_li_13_Template, 3, 4, "li", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Helping you connect with your customers ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " A full-service branding & digital agency based in NYC ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menu);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["header[_ngcontent-%COMP%] {\r\n  background-image: url('header_bg.jpg');\r\n  height: 100vh;\r\n  background-size: cover;\r\n  color: #fff;\r\n}\r\n\r\n.nav-item[_ngcontent-%COMP%]   .btn-theme[_ngcontent-%COMP%] {\r\n  color: #fff;\r\n}\r\n\r\n.cart-counter[_ngcontent-%COMP%] {\r\n  background-color: #28c23e;\r\n  padding: 2px 5px;\r\n  font-size:10px;\r\n  border-radius: 50%;\r\n  position: relative;\r\n  right:-25px;\r\n  top: -8px;\r\n}\r\n\r\n\r\n\r\n.main__menu[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  height: 100px;\r\n}\r\n\r\n.border-bottom[_ngcontent-%COMP%] {\r\n  border-bottom: 0.3px solid #dee2e6fc!important;\r\n}\r\n\r\n.navbar[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n\r\n.navbar-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]{\r\n  margin-left: 15px;\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .navbar-light[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] > .nav-link[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n}\r\n\r\n.navbar-collapse[_ngcontent-%COMP%] {\r\n  justify-content: flex-end;\r\n  z-index: 999;\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%] {\r\n  background-image: url('toggle.svg');\r\n}\r\n\r\n.navbar-light[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\r\n  color: rgb(255, 255, 255);\r\n  border-color: rgb(255, 255, 255);\r\n}\r\n\r\n.title-first[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n}\r\n\r\n.align-items-center[_ngcontent-%COMP%] {\r\n  height: 80%;\r\n}\r\n\r\n.first-title[_ngcontent-%COMP%] {\r\n  font-size: 85px;\r\n  color: #fff;\r\n  text-align: center;\r\n  line-height: 1.2;\r\n}\r\n\r\n.first-sub-title[_ngcontent-%COMP%] {\r\n  font-size: 28px;\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.arrow-down[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.arrow-down[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  cursor: pointer;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .first-title[_ngcontent-%COMP%] {\r\n    font-size: 75px;\r\n  }\r\n  .first-sub-title[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n  }\r\n\r\n  .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 35%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 992px) {\r\n\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    align-items: baseline;\r\n    padding-bottom: 15px;\r\n  }\r\n  .first-title[_ngcontent-%COMP%] {\r\n    font-size: 70px;\r\n  }\r\n  .logo-block[_ngcontent-%COMP%] {\r\n    margin-top: 20px;\r\n  }\r\n  .banner[_ngcontent-%COMP%]   .btn-theme[_ngcontent-%COMP%] {\r\n    margin-top: 30px;\r\n  }\r\n  .info-block[_ngcontent-%COMP%] {\r\n    max-width: 100%;\r\n  }\r\n  .cart-stat[_ngcontent-%COMP%] {\r\n    border: 1px solid #e7e7e7;\r\n    width: 340px;\r\n    padding-left: 30px;\r\n    padding-right: 25px;\r\n    margin-bottom: 20px;\r\n  }\r\n  .static[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  .footer[_ngcontent-%COMP%] {\r\n    margin-top: 70px;\r\n    margin-bottom: 40px;\r\n  }\r\n\r\n  .footer-info-block[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n  }\r\n  .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 30%;\r\n    top: 60%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 991px) {\r\n  .navbar-nav[_ngcontent-%COMP%] {\r\n    background-color: #444444f2;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .main-title[_ngcontent-%COMP%], .up-title[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n  .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 57%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n\r\n  .first-title[_ngcontent-%COMP%] {\r\n    font-size: 60px;\r\n  }\r\n  .first-sub-title[_ngcontent-%COMP%] {\r\n    font-size: 22px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 414px) {\r\n  .first-sub-title[_ngcontent-%COMP%] {\r\n    font-size: 25px;\r\n  }\r\n  .first-title[_ngcontent-%COMP%] {\r\n    font-size: 42px;\r\n  }\r\n  .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 20%;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 375px) {\r\n  .cart-name[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    left: 10%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usc0NBQXFEO0VBQ3JELGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUlBO0VBQ0UseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztBQUNYOztBQUVBLFdBQVc7O0FBRVg7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDhDQUE4QztBQUNoRDs7QUFHQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQ0FBa0Q7QUFDcEQ7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUNBOztFQUVFO0lBQ0UscUJBQXFCO0lBQ3JCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGFBQWE7SUFDYiw2QkFBNkI7RUFDL0I7RUFDQTtJQUNFLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQ3JCO0VBQ0E7SUFDRSxTQUFTO0lBQ1QsUUFBUTtFQUNWO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFNBQVM7RUFDWDtBQUNGOztBQUVBOztFQUVFO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2hlYWRlcl9iZy5qcGdcIik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubmF2LWl0ZW0gLmJ0bi10aGVtZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcblxyXG5cclxuLmNhcnQtY291bnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI4YzIzZTtcclxuICBwYWRkaW5nOiAycHggNXB4O1xyXG4gIGZvbnQtc2l6ZToxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcmlnaHQ6LTI1cHg7XHJcbiAgdG9wOiAtOHB4O1xyXG59XHJcblxyXG4vKiBoZWFkZXIgKi9cclxuXHJcbi5tYWluX19tZW51IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmJvcmRlci1ib3R0b20ge1xyXG4gIGJvcmRlci1ib3R0b206IDAuM3B4IHNvbGlkICNkZWUyZTZmYyFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4ubmF2YmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm5hdmJhci1uYXYge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZiYXItbmF2IC5uYXYtaXRlbXtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLm5hdmJhci1saWdodCAubmF2YmFyLW5hdiAubmF2LWxpbmssIC5uYXZiYXItbGlnaHQgLm5hdmJhci1uYXYgLmFjdGl2ZT4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbn1cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlnaHQgLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWcvdG9nZ2xlLnN2ZycpO1xyXG59XHJcblxyXG4ubmF2YmFyLWxpZ2h0IC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxufVxyXG5cclxuLnRpdGxlLWZpcnN0IHtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG4uYWxpZ24taXRlbXMtY2VudGVyIHtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuLmZpcnN0LXRpdGxlIHtcclxuICBmb250LXNpemU6IDg1cHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbn1cclxuLmZpcnN0LXN1Yi10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uYXJyb3ctZG93biB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYXJyb3ctZG93biBpbWcge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmZpcnN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNzVweDtcclxuICB9XHJcbiAgLmZpcnN0LXN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgfVxyXG5cclxuICAuY2FydC1uYW1lIGkge1xyXG4gICAgbGVmdDogMzUlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG5cclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgLmZpcnN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNzBweDtcclxuICB9XHJcbiAgLmxvZ28tYmxvY2sge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICB9XHJcbiAgLmJhbm5lciAuYnRuLXRoZW1lIHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIC5pbmZvLWJsb2NrIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLmNhcnQtc3RhdCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZTdlN2U3O1xyXG4gICAgd2lkdGg6IDM0MHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG4gIC5zdGF0aWMgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5mb290ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogNzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyLWluZm8tYmxvY2sge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgLmNhcnQtbmFtZSBpIHtcclxuICAgIGxlZnQ6IDMwJTtcclxuICAgIHRvcDogNjAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkxcHgpIHtcclxuICAubmF2YmFyLW5hdiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0NDQ0ZjI7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5tYWluLXRpdGxlLCAudXAtdGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2FydC1uYW1lIGkge1xyXG4gICAgbGVmdDogNTclO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuXHJcbiAgLmZpcnN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICB9XHJcbiAgLmZpcnN0LXN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDE0cHgpIHtcclxuICAuZmlyc3Qtc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcbiAgLmZpcnN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogNDJweDtcclxuICB9XHJcbiAgLmNhcnQtbmFtZSBpIHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgLmNhcnQtbmFtZSBpIHtcclxuICAgIGxlZnQ6IDEwJTtcclxuICB9XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/logos/logos.component.ts":
  /*!******************************************!*\
    !*** ./src/app/logos/logos.component.ts ***!
    \******************************************/

  /*! exports provided: LogosComponent */

  /***/
  function srcAppLogosLogosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LogosComponent", function () {
      return LogosComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LogosComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var logo_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", logo_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var LogosComponent = /*#__PURE__*/function () {
      function LogosComponent() {
        _classCallCheck(this, LogosComponent);

        this.logos = [{
          id: 1,
          img: 'assets/img/logos/1.png'
        }, {
          id: 2,
          img: 'assets/img/logos/2.png'
        }, {
          id: 3,
          img: 'assets/img/logos/3.png'
        }, {
          id: 4,
          img: 'assets/img/logos/4.png'
        }];
      }

      _createClass(LogosComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LogosComponent;
    }();

    LogosComponent.ɵfac = function LogosComponent_Factory(t) {
      return new (t || LogosComponent)();
    };

    LogosComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LogosComponent,
      selectors: [["app-logos"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container", "logos"], [1, "row"], ["class", "col-lg-3 col-md-6 logo-block", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-md-6", "logo-block"], ["alt", "", 3, "src"]],
      template: function LogosComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LogosComponent_div_2_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logos);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".logos[_ngcontent-%COMP%] {\r\n  height: auto;\r\n  margin: 100px auto;\r\n\r\n}\r\n.logos[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\r\n  align-items: center;\r\n}\r\n.logo-block[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nb3MvbG9nb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7O0FBRXBCO0FBQ0E7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ29zL2xvZ29zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb3Mge1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcblxyXG59XHJcbi5sb2dvcyAucm93IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubG9nby1ibG9jayB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogosComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-logos',
          templateUrl: './logos.component.html',
          styleUrls: ['./logos.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    function NewsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var news_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", news_r1.title, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", news_r1.subtitle, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", news_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r1.user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](news_r1.date);
      }
    }

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);

        this.news = [{
          id: 1,
          title: 'Tips for creating a digital product that can make you a tidy profit',
          subtitle: 'It will continue many of the best deals from Black Friday and Cyber Monday',
          user: 'Earlene Monna',
          img: 'assets/img/avatar-3.jpg',
          date: '20 September 2020 '
        }, {
          id: 2,
          title: 'Tips for creating a digital product that can make you a tidy profit',
          subtitle: 'It will continue many of the best deals from Black Friday and Cyber Monday',
          user: 'Stella Smith',
          img: 'assets/img/avatar-2.jpg',
          date: '27 August 2020 '
        }, {
          id: 3,
          title: 'Tips for creating a digital product that can make you a tidy profit',
          subtitle: 'It will continue many of the best deals from Black Friday and Cyber Monday',
          user: 'Frenki Black',
          img: 'assets/img/avatar-1.jpg',
          date: '17 August 2019 '
        }];
      }

      _createClass(NewsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent.ɵfac = function NewsComponent_Factory(t) {
      return new (t || NewsComponent)();
    };

    NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NewsComponent,
      selectors: [["app-news"]],
      decls: 20,
      vars: 1,
      consts: [[1, "container-fluid", "subs-bg"], [1, "container"], [1, "row"], [1, "col-lg-12", "latest-news-title"], [1, "row", "news-block"], ["class", "col-lg-4", 4, "ngFor", "ngForOf"], [1, "row", "subscribe"], [1, "col-lg-10", "quickly-title", "m-auto"], [1, "col-lg-7", "process-sub-title", "m-auto"], [1, "col-lg-12"], [1, "subscribe-form"], ["type", "text", "placeholder", "Enter your email address"], [1, "fas", "fa-paper-plane"], ["type", "submit"], [1, "col-lg-4"], [1, "news-cart"], [1, "news-title"], [1, "news-description"], [1, "news-author"], [1, "left"], ["alt", "", 3, "src"], [1, "right"], [1, "author-name"], [1, "date-news"], [1, "arrow-news"], [1, "fas", "fa-arrow-right"]],
      template: function NewsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Latest news ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NewsComponent_div_6_Template, 16, 5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Don't miss the new designs ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Subscribe to get the latest news and updates.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " No obligations and we don't share your data with anyone. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Subscribe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.news);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".subs-bg[_ngcontent-%COMP%] {\r\n  background-image: url('subs_bg.jpg');\r\n  background-position: bottom;\r\n  background-repeat: no-repeat;\r\n  padding-bottom: 100px;\r\n}\r\n\r\n.latest-news-title[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  color: #39374d;\r\n  font-family: serif;\r\n  font-family: \"Futura PT Demi\";\r\n  font-weight: 600;\r\n  margin-top: 100px;\r\n  margin-bottom: 70px;\r\n}\r\n\r\n.news-block[_ngcontent-%COMP%] {\r\n  margin-bottom: 150px;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  padding: 28px;\r\n  width: 100%;\r\n  height: 340px;\r\n  border-radius: 20px;\r\n  text-align: left;\r\n  color: #39374d;\r\n  border: 1px solid #c4c4c4;\r\n  background-color: #fff;\r\n  cursor: pointer;\r\n  transition: 0.3s ease all;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%]:hover {\r\n  background-image: url('news-placeholder-1.jpg');\r\n  color: #fff;\r\n  transition: 0.3s ease all;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%]:hover   .news-author[_ngcontent-%COMP%] {\r\n  display: none;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%]:hover   .news-description[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%]:hover   .arrow-news[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #ff5982;\r\n}\r\n\r\n.news-cart[_ngcontent-%COMP%]:hover   .arrow-news[_ngcontent-%COMP%] {\r\n  top: 22%;\r\n}\r\n\r\n.news-title[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  margin-bottom: 15px;\r\n  max-height: 80px;\r\n}\r\n\r\n.news-description[_ngcontent-%COMP%] {\r\n  display: none;\r\n  font-size: 16px;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.news-author[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.news-author[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .right[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 25px;\r\n}\r\n\r\n.arrow-news[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  top: 20%;\r\n  left: 94%;\r\n  width: 15px;\r\n  color: #ccc;\r\n}\r\n\r\n.news-author[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 60px;\r\n  height: 60px;\r\n  border-radius: 50%;\r\n}\r\n\r\n.news-author[_ngcontent-%COMP%] {\r\n  text-transform: uppercase;\r\n  font-size: 14px;\r\n  color: #39374d;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.date-news[_ngcontent-%COMP%] {\r\n  color: #748494;\r\n  font-size: 16px;\r\n  text-transform: capitalize;\r\n}\r\n\r\n\r\n\r\n.subscribe[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n}\r\n\r\n.subscribe-title[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  color: #39374d;\r\n  font-family: serif;\r\n  font-family: \"Futura PT Demi\";\r\n  font-weight: 600;\r\n}\r\n\r\n.subscribe-form[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n  overflow: hidden;\r\n}\r\n\r\n.subscribe-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  padding-left: 50px;\r\n  border: none;\r\n  border-radius: 50px;\r\n  width: 320px;\r\n  height: 48px;\r\n  position: relative;\r\n  outline: none;\r\n  left: 30px;\r\n}\r\n\r\n.subscribe-form[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  position: relative;\r\n  left: -24.5%;\r\n  font-size: 14px;\r\n}\r\n\r\n.subscribe-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\r\n  padding: 10px;\r\n  border: none;\r\n  border-radius: 50px;\r\n  position: relative;\r\n  left: -30px;\r\n  background-color: #ff3366;\r\n  color: #fff;\r\n  height: 49px;\r\n  top: 0px;\r\n  width: 170px;\r\n}\r\n\r\n.process-sub-title[_ngcontent-%COMP%] {\r\n  font-family: \"Open Sans\", sans-serif;\r\n  color: #5e5d6c;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 65px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBbUQ7RUFDbkQsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQ0FBOEQ7RUFDOUQsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsUUFBUTtBQUNWOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixjQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBLGNBQWM7O0FBRWQ7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFlBQVk7RUFDWixRQUFRO0VBQ1IsWUFBWTtBQUNkOztBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uZXdzL25ld3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJzLWJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9zdWJzX2JnLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b207XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbn1cclxuXHJcbi5sYXRlc3QtbmV3cy10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLm5ld3MtYmxvY2sge1xyXG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xyXG59XHJcblxyXG4ubmV3cy1jYXJ0IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMjhweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDM0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogIzM5Mzc0ZDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZSBhbGw7XHJcbn1cclxuXHJcbi5uZXdzLWNhcnQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL25ld3MtcGxhY2Vob2xkZXItMS5qcGdcIik7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlIGFsbDtcclxufVxyXG5cclxuLm5ld3MtY2FydDpob3ZlciAubmV3cy1hdXRob3Ige1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5uZXdzLWNhcnQ6aG92ZXIgLm5ld3MtZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubmV3cy1jYXJ0OmhvdmVyIC5hcnJvdy1uZXdzIGkge1xyXG4gIGNvbG9yOiAjZmY1OTgyO1xyXG59XHJcblxyXG4ubmV3cy1jYXJ0OmhvdmVyIC5hcnJvdy1uZXdzIHtcclxuICB0b3A6IDIyJTtcclxufVxyXG5cclxuLm5ld3MtdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDgwcHg7XHJcbn1cclxuLm5ld3MtZGVzY3JpcHRpb24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4ubmV3cy1hdXRob3IgLmxlZnQge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLm5ld3MtYXV0aG9yIC5sZWZ0LFxyXG4ucmlnaHQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDI1cHg7XHJcbn1cclxuXHJcbi5hcnJvdy1uZXdzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAyMCU7XHJcbiAgbGVmdDogOTQlO1xyXG4gIHdpZHRoOiAxNXB4O1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcblxyXG4ubmV3cy1hdXRob3IgLmxlZnQgaW1nIHtcclxuICB3aWR0aDogNjBweDtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4ubmV3cy1hdXRob3Ige1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRhdGUtbmV3cyB7XHJcbiAgY29sb3I6ICM3NDg0OTQ7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG59XHJcblxyXG4vKiBzdWJzY3JpYmUgKi9cclxuXHJcbi5zdWJzY3JpYmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnN1YnNjcmliZS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIGZvbnQtZmFtaWx5OiBzZXJpZjtcclxuICBmb250LWZhbWlseTogXCJGdXR1cmEgUFQgRGVtaVwiO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUtZm9ybSB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUtZm9ybSBpbnB1dCB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDUwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgd2lkdGg6IDMyMHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBsZWZ0OiAzMHB4O1xyXG59XHJcblxyXG4uc3Vic2NyaWJlLWZvcm0gaSB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0yNC41JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5zdWJzY3JpYmUtZm9ybSBidXR0b24ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0zMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjMzNjY7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA0OXB4O1xyXG4gIHRvcDogMHB4O1xyXG4gIHdpZHRoOiAxNzBweDtcclxufVxyXG4ucHJvY2Vzcy1zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjNWU1ZDZjO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDY1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-news',
          templateUrl: './news.component.html',
          styleUrls: ['./news.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/products/products.component.ts":
  /*!************************************************!*\
    !*** ./src/app/products/products.component.ts ***!
    \************************************************/

  /*! exports provided: ProductsComponent */

  /***/
  function srcAppProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductsComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var block_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", block_r1.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](block_r1.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", block_r1.info, " ");
      }
    }

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);

        this.blocks = [{
          id: 1,
          name: 'Photography & Video',
          info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
          img: 'assets/img/icons/1.png'
        }, {
          id: 2,
          name: 'Branding & Positioning',
          info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
          img: 'assets/img/icons/2.png'
        }, {
          id: 3,
          name: 'User Research & Design',
          info: 'We work with you to get your brand out there and drive traffic & enquiries to help the sales team convert',
          img: 'assets/img/icons/3.png'
        }];
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ɵfac = function ProductsComponent_Factory(t) {
      return new (t || ProductsComponent)();
    };

    ProductsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductsComponent,
      selectors: [["app-products"]],
      decls: 13,
      vars: 1,
      consts: [[1, "container-fluid", "quickly"], [1, "row"], [1, "col-lg-10", "quickly-title", "m-auto"], [1, "col-lg-5", "quickly-sub-title", "m-auto"], [1, "container"], [1, "row", "quickly-blocks"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "col-lg-12", "more-quickly"], ["href", "#", 1, "view-all"], [1, "block"], [1, "block-image"], [3, "src"], [1, "name-block"], [1, "info-block"], [1, "arrow-right"], [1, "fas", "fa-arrow-right"]],
      template: function ProductsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Design digital products more quickly ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " If you need help making one from scratch or evolving an existing one, we\u2019d love to talk with you about how we can help. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ProductsComponent_div_8_Template, 9, 3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "View All");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".quickly[_ngcontent-%COMP%] {\r\n  background-image: url('dots.png');\r\n  background-repeat: no-repeat;\r\n  background-position-x: 1330px;\r\n  background-position-y: 150px;\r\n}\r\n\r\n.quickly-title[_ngcontent-%COMP%] {\r\n  font-size: 42px;\r\n  font-weight: 500;\r\n  color: #39374d;\r\n  text-align: center;\r\n  margin-bottom: 30px;\r\n\r\n}\r\n\r\n.quickly-sub-title[_ngcontent-%COMP%] {\r\n  font-family: 'Open Sans', sans-serif;\r\n  color: #5e5d6c;\r\n  font-size: 18px;\r\n  text-align: center;\r\n  padding-top: 20px;\r\n  padding-bottom: 90px;\r\n}\r\n\r\n.quickly-blocks[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n}\r\n\r\n.quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\r\n  border: 1px solid #ccc;\r\n  background-color: #fff;\r\n  height: 330px;\r\n  width: 360px;\r\n  border-radius: 15px;\r\n  padding-top: 50px;\r\n  padding-left: 35px;\r\n  padding-right: 35px;\r\n  padding-bottom: 40px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:hover {\r\n  border-bottom: 5px solid #ff3366;\r\n  cursor: pointer;\r\n}\r\n\r\n.name-block[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  margin-top: 25px;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.info-block[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #748494;\r\n  font-family: 'Open Sans', sans-serif;\r\n  max-width: 480px;\r\n}\r\n\r\n.more-quickly[_ngcontent-%COMP%] {\r\n  margin-top: 80px;\r\n  margin-bottom: 100px;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.view-all[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  border-radius: 3px;\r\n  border: 1px solid #b7b7b7;\r\n  color: #b7b7b7;\r\n  width: 150px;\r\n  height: 50px;\r\n  transition: 0.3s ease-in;\r\n}\r\n\r\n.view-all[_ngcontent-%COMP%]:hover {\r\n  background-color: #ff3366;\r\n  color: #fff;\r\n  border: none;\r\n  text-decoration: none;\r\n}\r\n\r\n.arrow-right[_ngcontent-%COMP%] {\r\n  margin-top: 30px;\r\n  text-align: right;\r\n  display: none;\r\n  transition: 0.3s ease-in;\r\n\r\n}\r\n\r\n.quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:hover   .arrow-right[_ngcontent-%COMP%] {\r\n  display: block;\r\n}\r\n\r\n.arrow-right[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n}\r\n\r\n@media screen and (max-width: 1024px) {\r\n  .quickly-blocks[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n  }\r\n  .quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\r\n    margin-bottom: 50px;\r\n  }\r\n  .more-quickly[_ngcontent-%COMP%] {\r\n    margin-top: 0px;\r\n    margin-bottom: 80px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\r\n    height: 330px;\r\n    width: 335px;\r\n    padding-left: 20px;\r\n    padding-right: 20px;\r\n    margin-bottom: 25px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 414px) {\r\n\r\n  .quickly-sub-title[_ngcontent-%COMP%] {\r\n    padding-bottom: 50px;\r\n  }\r\n  .quickly-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  .quickly-title[_ngcontent-%COMP%] {\r\n    font-size: 34px;\r\n  }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlDQUFnRDtFQUNoRCw0QkFBNEI7RUFDNUIsNkJBQTZCO0VBQzdCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7O0FBRXJCOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjs7QUFFckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsZUFBZTtBQUNqQjs7QUFHQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2Qsb0NBQW9DO0VBQ3BDLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFHQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0FBQ3ZCOztBQUdBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isd0JBQXdCOztBQUUxQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGVBQWU7SUFDZixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjtBQUNGOztBQUtBOztFQUVFO0lBQ0Usb0JBQW9CO0VBQ3RCO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGIiwiZmlsZSI6InNyYy9hcHAvcHJvZHVjdHMvcHJvZHVjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5xdWlja2x5IHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL2RvdHMucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDEzMzBweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDE1MHB4O1xyXG59XHJcblxyXG4ucXVpY2tseS10aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0MnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG59XHJcblxyXG4ucXVpY2tseS1zdWItdGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICBjb2xvcjogIzVlNWQ2YztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5MHB4O1xyXG59XHJcblxyXG5cclxuLnF1aWNrbHktYmxvY2tzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLnF1aWNrbHktYmxvY2tzIC5ibG9jayB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogMzMwcHg7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy10b3A6IDUwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4ucXVpY2tseS1ibG9ja3MgLmJsb2NrOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2ZmMzM2NjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcblxyXG4ubmFtZS1ibG9jayB7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLmluZm8tYmxvY2sge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBjb2xvcjogIzc0ODQ5NDtcclxuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgbWF4LXdpZHRoOiA0ODBweDtcclxufVxyXG5cclxuLm1vcmUtcXVpY2tseSB7XHJcbiAgbWFyZ2luLXRvcDogODBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG5cclxuLnZpZXctYWxsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNiN2I3Yjc7XHJcbiAgY29sb3I6ICNiN2I3Yjc7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGVhc2UtaW47XHJcbn1cclxuXHJcbi52aWV3LWFsbDpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzM2NjtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5cclxuLmFycm93LXJpZ2h0IHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluO1xyXG5cclxufVxyXG5cclxuLnF1aWNrbHktYmxvY2tzIC5ibG9jazpob3ZlciAuYXJyb3ctcmlnaHQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4uYXJyb3ctcmlnaHQgaSB7XHJcbiAgY29sb3I6ICNmZjMzNjY7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gIC5xdWlja2x5LWJsb2NrcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgfVxyXG4gIC5xdWlja2x5LWJsb2NrcyAuYmxvY2sge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLm1vcmUtcXVpY2tseSB7XHJcbiAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAucXVpY2tseS1ibG9ja3MgLmJsb2NrIHtcclxuICAgIGhlaWdodDogMzMwcHg7XHJcbiAgICB3aWR0aDogMzM1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxNHB4KSB7XHJcblxyXG4gIC5xdWlja2x5LXN1Yi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxuICB9XHJcbiAgLnF1aWNrbHktYmxvY2tzIC5ibG9jayB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucXVpY2tseS10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-products',
          templateUrl: './products.component.html',
          styleUrls: ['./products.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/specialize/specialize.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/specialize/specialize.component.ts ***!
    \****************************************************/

  /*! exports provided: SpecializeComponent */

  /***/
  function srcAppSpecializeSpecializeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpecializeComponent", function () {
      return SpecializeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpecializeComponent = /*#__PURE__*/function () {
      function SpecializeComponent() {
        _classCallCheck(this, SpecializeComponent);
      }

      _createClass(SpecializeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpecializeComponent;
    }();

    SpecializeComponent.ɵfac = function SpecializeComponent_Factory(t) {
      return new (t || SpecializeComponent)();
    };

    SpecializeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SpecializeComponent,
      selectors: [["app-specialize"]],
      decls: 27,
      vars: 0,
      consts: [[1, "container-fluid", "specialize"], [1, "row"], [1, "col-lg-7", "specialize-left"], ["src", "assets/img/specialize_bg.png", "alt", ""], [1, "col-lg-5", "block-right"], [1, "up-title"], [1, "main-title"], [1, "detail"], [1, "icon_block"], ["src", "assets/img/icons/4.png", "alt", ""], [1, "info_block"], [1, "name-block"], [1, "info-block"], [1, "detail", "pt-2"], ["src", "assets/img/icons/5.png", "alt", ""]],
      template: function SpecializeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "We are a digital agency founded in NYC");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We specialize in");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " building brands");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "We treat branding, design & marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " We are an independent strategic creative agency with technology at our core. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "We treat branding, design & marketing");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " We are an independent strategic creative agency with technology at our core. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".specialize-left[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.specialize-left[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n}\r\n\r\n.detail[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: baseline;\r\n}\r\n\r\n.icon_block[_ngcontent-%COMP%] {\r\n  margin-right: 20px;\r\n}\r\n\r\n.up-title[_ngcontent-%COMP%] {\r\n  color: #ff3366;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  text-transform: uppercase;\r\n  margin-top: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3BlY2lhbGl6ZS9zcGVjaWFsaXplLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9zcGVjaWFsaXplL3NwZWNpYWxpemUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGVjaWFsaXplLWxlZnR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnNwZWNpYWxpemUtbGVmdCBpbWcge1xyXG4gIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbi5kZXRhaWwge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xyXG59XHJcblxyXG4uaWNvbl9ibG9jayB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcbi51cC10aXRsZSB7XHJcbiAgY29sb3I6ICNmZjMzNjY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpecializeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-specialize',
          templateUrl: './specialize.component.html',
          styleUrls: ['./specialize.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/statistics/statistics.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/statistics/statistics.component.ts ***!
    \****************************************************/

  /*! exports provided: StatisticsComponent */

  /***/
  function srcAppStatisticsStatisticsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatisticsComponent", function () {
      return StatisticsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function StatisticsComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cart_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cart_r1.count, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r1.countType);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](cart_r1.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cart_r1.subtitle, " ");
      }
    }

    var StatisticsComponent = /*#__PURE__*/function () {
      function StatisticsComponent() {
        _classCallCheck(this, StatisticsComponent);

        this.cartStat = [{
          id: 1,
          count: 80,
          countType: '+',
          title: 'Launched startups',
          subtitle: 'We define behaviour, looks and personality for your product.'
        }, {
          id: 2,
          count: 1.2,
          countType: 'k',
          title: 'Completed projects',
          subtitle: 'We define behaviour, looks and personality for your product.'
        }, {
          id: 3,
          count: 2.4,
          countType: 'm',
          title: 'Total downloads',
          subtitle: 'We define behaviour, looks and personality for your product.'
        }];
      }

      _createClass(StatisticsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StatisticsComponent;
    }();

    StatisticsComponent.ɵfac = function StatisticsComponent_Factory(t) {
      return new (t || StatisticsComponent)();
    };

    StatisticsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: StatisticsComponent,
      selectors: [["app-statistics"]],
      decls: 3,
      vars: 1,
      consts: [[1, "container", "static"], [1, "row"], ["class", "col-lg-4 col-md-6", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6"], [1, "cart-stat"], [1, "number-stat"], [1, "title-stat"], [1, "sub-title-stat"]],
      template: function StatisticsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StatisticsComponent_div_2_Template, 10, 4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cartStat);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: [".static[_ngcontent-%COMP%] {\r\n  margin: 100px auto;\r\n}\r\n\r\n.cart-stat[_ngcontent-%COMP%] {\r\n  border: 1px solid #e7e7e7;\r\n  width: 360px;\r\n  height: 230px;\r\n  border-radius: 5px;\r\n  padding-top: 20px;\r\n  padding-left: 40px;\r\n  padding-right: 35px;\r\n  transition: 0.3s ease-in;\r\n  cursor: pointer;\r\n  line-height: 1.5;\r\n}\r\n\r\n.cart-stat[_ngcontent-%COMP%]:hover {\r\n  box-shadow: 0px 10px 40px 10px #e7e7e7;\r\n  margin-top: -10px;\r\n}\r\n\r\n.number-stat[_ngcontent-%COMP%] {\r\n  font-size: 52px;\r\n  color: #39374d;\r\n}\r\n\r\n.number-stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  color: #7540ee;\r\n}\r\n\r\n.title-stat[_ngcontent-%COMP%] {\r\n  font-size: 22px;\r\n  color: #39374d;\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.sub-title-stat[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #5e5d6c;\r\n  font-family: \"Open Sans\", sans-serif;\r\n}\r\n\r\n.right-tabs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 1200px) {\r\n  .cart-stat[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n    padding-left: 25px;\r\n    padding-right: 25px;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .cart-stat[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxzQ0FBc0M7RUFDdEMsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixtQkFBbUI7RUFDckI7QUFDRjs7QUFDQTtFQUNFO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc3RhdGlzdGljcy9zdGF0aXN0aWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3RhdGljIHtcclxuICBtYXJnaW46IDEwMHB4IGF1dG87XHJcbn1cclxuXHJcbi5jYXJ0LXN0YXQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlN2U3ZTc7XHJcbiAgd2lkdGg6IDM2MHB4O1xyXG4gIGhlaWdodDogMjMwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmNhcnQtc3RhdDpob3ZlciB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggNDBweCAxMHB4ICNlN2U3ZTc7XHJcbiAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5udW1iZXItc3RhdCB7XHJcbiAgZm9udC1zaXplOiA1MnB4O1xyXG4gIGNvbG9yOiAjMzkzNzRkO1xyXG59XHJcblxyXG4ubnVtYmVyLXN0YXQgc3BhbiB7XHJcbiAgY29sb3I6ICM3NTQwZWU7XHJcbn1cclxuXHJcbi50aXRsZS1zdGF0IHtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICMzOTM3NGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxuLnN1Yi10aXRsZS1zdGF0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM1ZTVkNmM7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbn1cclxuLnJpZ2h0LXRhYnMgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNhcnQtc3RhdCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jYXJ0LXN0YXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatisticsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-statistics',
          templateUrl: './statistics.component.html',
          styleUrls: ['./statistics.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/tabs/tabs.component.ts":
  /*!****************************************!*\
    !*** ./src/app/tabs/tabs.component.ts ***!
    \****************************************/

  /*! exports provided: TabsComponent */

  /***/
  function srcAppTabsTabsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsComponent", function () {
      return TabsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");

    var TabsComponent = /*#__PURE__*/function () {
      function TabsComponent() {
        _classCallCheck(this, TabsComponent);
      }

      _createClass(TabsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TabsComponent;
    }();

    TabsComponent.ɵfac = function TabsComponent_Factory(t) {
      return new (t || TabsComponent)();
    };

    TabsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TabsComponent,
      selectors: [["app-tabs"]],
      decls: 14,
      vars: 0,
      consts: [[1, "container-fluid", "tabs"], [1, "container"], [1, "row"], [1, "col-lg-6"], [1, "tabs-title"], [1, "tab-item"], ["label", "What is the benefit of branding"], ["label", "How to create a digital marketing strategy?"], [1, "col-lg-6", "right-tabs"], ["src", "assets/img/acc1.png", "alt", ""]],
      template: function TabsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Branding & Marketing \u2014 FAQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-tab-group");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-tab", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-tab", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_1__["MatTab"]],
      styles: [".tabs[_ngcontent-%COMP%] {\r\n  background-image: url('tabs_bg.png');\r\n  background-position: right;\r\n  background-repeat: no-repeat;\r\n  padding-bottom: 45px;\r\n  background-position-y: 60px;\r\n}\r\n\r\n.tabs-title[_ngcontent-%COMP%] {\r\n  font-size: 32px;\r\n  color:#39374d;\r\n  margin-top: 50px;\r\n  margin-bottom: 40px;\r\n}\r\n\r\n.tab-item[_ngcontent-%COMP%] {\r\n  border: 1px solid #9fe7ff;\r\n  border-radius: 5px;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.is-active[_ngcontent-%COMP%] {\r\n  background-color: #ebebeb;\r\n}\r\n\r\n.accord-parent[_ngcontent-%COMP%]{\r\n  max-width: 300px;\r\n}\r\n\r\n.accord-item[_ngcontent-%COMP%]{\r\n  position: relative;\r\n}\r\n\r\n.right-tabs[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n.question[_ngcontent-%COMP%]{\r\n  font-weight: 800;\r\n}\r\n\r\n.answer[_ngcontent-%COMP%]{\r\n  display: none;\r\n}\r\n\r\n.indicator[_ngcontent-%COMP%]{\r\n  position: absolute;\r\n  top: 1.5em;\r\n  left: 0;\r\n  height: 13px;\r\n  width: 14px;\r\n  outline: none;\r\n  margin-left: 10px;\r\n  border: none;\r\n  background: transparent;\r\n}\r\n\r\n.indicator[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\r\n  background: #39374d;\r\n  position: absolute;\r\n  transition: all 300ms ease;\r\n}\r\n\r\n.indi--top[_ngcontent-%COMP%]{\r\n  height: 100%;\r\n  width: 2px;\r\n  top: 0; left: 50%;\r\n  margin-left: -1px;\r\n}\r\n\r\n.indi--bot[_ngcontent-%COMP%]{\r\n  height: 2px;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 50%;\r\n  margin-top: -1px;\r\n}\r\n\r\n.accord-item--inner[_ngcontent-%COMP%] {\r\n  padding: 1em 0em 1em 2em;\r\n  cursor: pointer;\r\n}\r\n\r\n.accord-item.is-active[_ngcontent-%COMP%]   .indi--top[_ngcontent-%COMP%] {\r\n  transform: rotate(90deg);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy90YWJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBbUQ7RUFDbkQsMEJBQTBCO0VBQzFCLDRCQUE0QjtFQUM1QixvQkFBb0I7RUFDcEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLE9BQU87RUFDUCxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFVBQVU7RUFDVixNQUFNLEVBQUUsU0FBUztFQUNqQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLE9BQU87RUFDUCxRQUFRO0VBQ1IsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSx3QkFBd0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC90YWJzL3RhYnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1nL3RhYnNfYmcucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBwYWRkaW5nLWJvdHRvbTogNDVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDYwcHg7XHJcbn1cclxuXHJcbi50YWJzLXRpdGxlIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgY29sb3I6IzM5Mzc0ZDtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi50YWItaXRlbSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzlmZTdmZjtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uaXMtYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWJlYmViO1xyXG59XHJcblxyXG4uYWNjb3JkLXBhcmVudHtcclxuICBtYXgtd2lkdGg6IDMwMHB4O1xyXG59XHJcbi5hY2NvcmQtaXRlbXtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnJpZ2h0LXRhYnMgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4ucXVlc3Rpb257XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmFuc3dlcntcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uaW5kaWNhdG9ye1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEuNWVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxM3B4O1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaW5kaWNhdG9yIHNwYW4ge1xyXG4gIGJhY2tncm91bmQ6ICMzOTM3NGQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlO1xyXG59XHJcbi5pbmRpLS10b3B7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAycHg7XHJcbiAgdG9wOiAwOyBsZWZ0OiA1MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xcHg7XHJcbn1cclxuLmluZGktLWJvdHtcclxuICBoZWlnaHQ6IDJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xcHg7XHJcbn1cclxuLmFjY29yZC1pdGVtLS1pbm5lciB7XHJcbiAgcGFkZGluZzogMWVtIDBlbSAxZW0gMmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uYWNjb3JkLWl0ZW0uaXMtYWN0aXZlIC5pbmRpLS10b3Age1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TabsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-tabs',
          templateUrl: './tabs.component.html',
          styleUrls: ['./tabs.component.css']
        }]
      }], function () {
        return [];
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


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
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
    /*! C:\Users\saqha\Desktop\Angular\second-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map