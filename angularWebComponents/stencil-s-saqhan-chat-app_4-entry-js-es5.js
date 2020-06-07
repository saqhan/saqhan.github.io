function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-app_4-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-app_4.entry.js":
  /*!************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-app_4.entry.js ***!
    \************************************************************************/

  /*! exports provided: s_saqhan_chat_app, s_saqhan_events_blog, s_saqhan_first_slider, s_saqhan_popular_news */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanChatApp_4EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_app", function () {
      return SSaqhanChatApp;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_events_blog", function () {
      return SSaqhanEventsBlog;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_first_slider", function () {
      return SSaqhanFirstSlider;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_popular_news", function () {
      return SSaqhanPopularNews;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
    /* harmony import */


    var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-ac8aa152.js */
    "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");

    var sSaqhanChatAppCss = ".wrapper-modal{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:column;flex-direction:column;position:fixed;top:2%;right:2%;z-index:999}.btn-open{width:60px;height:60px;font-size:24px;border:none;background-color:#72b94d;color:#fff;border-radius:50%;outline:none !important;cursor:pointer}.open-chat{text-align:right;z-index:999;position:fixed;right:10px;bottom:20px}.open-chat::after{content:\"1\";background-color:#c73f45;position:relative;top:-25px;left:-20px;color:#fff;font-size:12px;padding:5px 10px;border-radius:50%}.message{font-size:14px;height:21px;overflow:hidden;width:260px;margin-top:5px;white-space:nowrap;cursor:pointer}.user{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:end;align-items:flex-end}.user-img{width:20%;margin:auto}.user-img .img{width:43px;height:43px;border-radius:50%;background-size:cover;margin:auto}.user-info{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:90%}.user-info .name{font-weight:500;font-size:13px}::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}@media (max-width: 414px){.wrapper-modal{top:0%;right:0%;max-width:414px}.wrapper-chat{width:414px}.personal-messages{height:80vh}.users{height:80vh}}@media (max-width: 375px){.wrapper-chat{max-width:375px;padding-right:0px}.users{padding:0px 10px}.new-mess{right:12%}}@media (max-width: 320px){.wrapper-chat{max-width:320px}.chat-header a{right:25%}.wrapper-chat{height:110vh}.message-date{font-size:11px}.users{padding:0px 25px}.personal-messages{padding:0 10px}}";

    var SSaqhanChatApp = /*#__PURE__*/function () {
      function SSaqhanChatApp(hostRef) {
        _classCallCheck(this, SSaqhanChatApp);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.showContent = "users";
        this.close = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
        this.selectPersonal = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectPersonal", 7);
        this.selectUsers = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectUsers", 7);
        this.selectFiles = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectFiles", 7);
      }

      _createClass(SSaqhanChatApp, [{
        key: "isShowChat",
        value: function isShowChat() {
          this.showChat = !this.showChat;
        }
      }, {
        key: "onClose",
        value: function onClose() {
          this.showChat = false;
        }
      }, {
        key: "onSelectPersonal",
        value: function onSelectPersonal() {
          return this.showContent = 'personal';
        }
      }, {
        key: "onSelectUsers",
        value: function onSelectUsers() {
          return this.showContent = 'users';
        }
      }, {
        key: "onSelectFiles",
        value: function onSelectFiles() {
          return this.showContent = 'files';
        }
      }, {
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-modal"
          }, this.showChat ? Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-wrapper", {
            messages: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["n"],
            mainUser: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["o"],
            onSelectPersonal: function onSelectPersonal() {
              return _this.onSelectPersonal();
            },
            onSelectUsers: function onSelectUsers() {
              return _this.onSelectUsers();
            },
            onSelectFiles: function onSelectFiles() {
              return _this.onSelectFiles();
            },
            onClose: function onClose() {
              return _this.onClose();
            },
            showContent: this.showContent
          }) : "", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-wrapper"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "open-chat"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            onClick: function onClick() {
              return _this.isShowChat();
            },
            "class": "btn-open"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.showChat ? Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-times"
          }) : Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "far fa-comment-dots"
          }))))));
        }
      }]);

      return SSaqhanChatApp;
    }();

    SSaqhanChatApp.style = sSaqhanChatAppCss;
    var sSaqhanEventsBlogCss = ".blog-img{width:310px;height:210px;background-size:cover;margin-bottom:20px}.date-event{padding:10px;background-color:#fff;position:relative;top:8px;border-bottom-right-radius:5px}.new-blog-cards{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}@media (max-width: 414px){.blog-card{width:85%;margin:auto}.block-title{text-align:center}}";

    var SSaqhanEventsBlog = /*#__PURE__*/function () {
      function SSaqhanEventsBlog(hostRef) {
        _classCallCheck(this, SSaqhanEventsBlog);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
        this.clickOnCategoryNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCategoryNews", 7);
      }

      _createClass(SSaqhanEventsBlog, [{
        key: "getEvents",
        value: function getEvents(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " pt-5 pb-5"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", {
            "class": "font-weight-bold block-title"
          }, "Upcoming events")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(EventsPost, {
            event: this.getEvents(this.events)
          }))));
        }
      }]);

      return SSaqhanEventsBlog;
    }();

    var EventsPost = function EventsPost(props) {
      return props.event.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "col-12 col-md-6 col-lg-4"
        }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-event-card", {
          event: item
        }));
      });
    };

    SSaqhanEventsBlog.style = sSaqhanEventsBlogCss;
    var sSaqhanFirstSliderCss = "";

    var SSaqhanFirstSlider = /*#__PURE__*/function () {
      function SSaqhanFirstSlider(hostRef) {
        _classCallCheck(this, SSaqhanFirstSlider);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * массив новостей для вывода
         */

        this.blogCarouselMock = [];
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
        this.clickOnCategoryNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnCategoryNews", 7);
      }
      /**
       * Фильтруем для главной новости
       * */


      _createClass(SSaqhanFirstSlider, [{
        key: "mainNews",
        value: function mainNews(arr) {
          return (arr.filter(function (item) {
            return item.main;
          }) || []).slice(-1);
        }
      }, {
        key: "lentaNews",
        value: function lentaNews(arr) {
          return arr.filter(function (item) {
            return item.lenta;
          }).slice(-4).reverse();
        }
      }, {
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row pt-5 pb-5"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-lg-7"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(MainNews, {
            arr: this.mainNews(this.blogCarouselMock)
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-lg-5"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(LentaNews, {
            lenta: this.lentaNews(this.blogCarouselMock)
          }))));
        }
      }]);

      return SSaqhanFirstSlider;
    }();
    /**
     * Компонентная функция для главной новости
     * */


    var MainNews = function MainNews(props) {
      return props.arr.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-main-news-card", {
          mainNews: item
        });
      });
    };
    /**
     * Компонентная функция для ленты новостей
     * */
    //лента новостей


    var LentaNews = function LentaNews(props) {
      return props.lenta.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-lenta-news-card", {
          lentaNews: item
        });
      });
    };

    SSaqhanFirstSlider.style = sSaqhanFirstSliderCss;
    var sSaqhanPopularNewsCss = ".banner{background-image:url(\"https://via.placeholder.com/900x900?text=Visit\");background-size:cover;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;-ms-flex-direction:column;flex-direction:column}.banner .btn-read a{color:#fff;border-bottom:1px solid #ffffff;-webkit-transition:0.3s all;transition:0.3s all}.banner .btn-read a:hover{text-decoration:none;color:#007bff;border-bottom:1px solid #007bff}@media (max-width: 414px){.banner{margin-top:50px}.blog-img{margin:auto}.block-title{text-align:center}}";

    var SSaqhanPopularNews = /*#__PURE__*/function () {
      function SSaqhanPopularNews(hostRef) {
        _classCallCheck(this, SSaqhanPopularNews);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickOnNews = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickOnNews", 7);
      }

      _createClass(SSaqhanPopularNews, [{
        key: "getPopularNews",
        value: function getPopularNews(arr) {
          return arr.map(function (item) {
            return item;
          });
        }
      }, {
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "container"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "row pt-5 pb-5"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("h1", {
            "class": "font-weight-bold pb-4 block-title"
          }, "Popular Resours")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-lg-7"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "cards-popular"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])(CardPopular, {
            post: this.getPopularNews(this.popularNews)
          }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 col-lg-5 p-5 p-lg-0 banner",
            style: {
              backgroundImage: "url(".concat(this.bannerPopular.img, ")")
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "banner-title text-center text-white",
            onClick: function onClick() {
              return _this2.clickOnNews.emit({
                place: 'title',
                item: _this2.bannerPopular
              });
            }
          }, this.bannerPopular.title), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-read pt-3",
            onClick: function onClick() {
              return _this2.clickOnNews.emit({
                place: 'btn-read',
                item: _this2.bannerPopular
              });
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.bannerPopular.nameLink)))));
        }
      }]);

      return SSaqhanPopularNews;
    }();

    var CardPopular = function CardPopular(props) {
      return props.post.map(function (item) {
        return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-popular-card", {
          post: item
        });
      });
    };

    SSaqhanPopularNews.style = sSaqhanPopularNewsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-chat-app_4-entry-js-es5.js.map