function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-files-wrapper_4-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-files-wrapper_4.entry.js":
  /*!**********************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-files-wrapper_4.entry.js ***!
    \**********************************************************************************/

  /*! exports provided: s_saqhan_chat_files_wrapper, s_saqhan_chat_personal, s_saqhan_chat_users_wrapper, s_saqhan_chat_wrapper */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanChatFilesWrapper_4EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files_wrapper", function () {
      return SSaqhanChatFilesWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_personal", function () {
      return SSaqhanChatPersonal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users_wrapper", function () {
      return SSaqhanChatUsersWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_wrapper", function () {
      return SSaqhanChatWrapper;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");
    /* harmony import */


    var _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mock-ac8aa152.js */
    "./node_modules/s-saqhan-v1/dist/esm/mock-ac8aa152.js");

    var sSaqhanChatFilesWrapperCss = "";

    var SSaqhanChatFilesWrapper = /*#__PURE__*/function () {
      function SSaqhanChatFilesWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatFilesWrapper);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatFilesWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search-files", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files", null));
        }
      }]);

      return SSaqhanChatFilesWrapper;
    }();

    SSaqhanChatFilesWrapper.style = sSaqhanChatFilesWrapperCss;
    var sSaqhanChatPersonalCss = ".header-chat a{position:relative;right:-25%;display:block;top:3px;padding-bottom:3px;border-radius:50%;width:25px}.header-chat a i{font-size:25px;color:#ccc}.header-chat a i:hover{color:#72b94d}.personal-messages .user{-ms-flex-align:center;align-items:center}.personal-messages{width:100%}.personal-messages .chat-user-main{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between;margin:10px;padding-left:15px}.personal-messages .chat-user-main .user-img{width:50px;padding-right:5px}.name{font-weight:500}.menu-personal i{color:#ccc;margin-right:15px;cursor:pointer}.btn-back::after{content:\"1\";background-color:#c73f45;padding:1px 6px;color:#fff;font-size:10px;border-radius:30px;position:relative;right:7px;top:-15px;z-index:999}.btn-back{cursor:pointer}.btn-back span i{color:#a9a9a9;font-size:15px}.personal-mess,.admin-mess{padding:0 15px;font-size:14px}.personal-mess{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.mess-user{padding:10px;background-color:#feffc5;border-radius:3px;width:80%;margin:5px 0}.mess-admin{background-color:#ececec;width:80%;padding:10px;border-radius:3px;margin:10px 0}.position-admin span{font-size:12px;color:#8e8e8e;font-weight:500}.mess-date{font-size:11px;color:#8e8e8e;margin-left:5px}.mess-date::before{content:\"\\f058\";font-family:\"Font Awesome 5 Free\";color:#9a9ab5;font-size:10px;margin-right:3px}.messages-block{height:66vh}.messages-block{overflow:scroll;overflow-x:hidden}@media (max-width: 414px){.messages-block{height:74vh}}@media (max-width: 375px){.messages-block{height:72vh}}@media (max-width: 320px){.wrapper-chat{width:100%;height:100vh}.messages-block{height:67vh}}@media (height: 1366px) and (width: 1024px ){.messages-block{height:72vh}}";

    var SSaqhanChatPersonal = /*#__PURE__*/function () {
      function SSaqhanChatPersonal(hostRef) {
        _classCallCheck(this, SSaqhanChatPersonal);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.selectUsers = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectUsers", 7);
      }

      _createClass(SSaqhanChatPersonal, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-messages"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "col-12 chat-user-main"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-back",
            onClick: function onClick() {
              return _this.selectUsers.emit();
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-chevron-left"
          }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-img"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img",
            style: {
              backgroundImage: "url(https://via.placeholder.com/500)"
            }
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name"
          }, "\u041A\u0441\u0435\u043D\u0438\u044F"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "menu-personal"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-ellipsis-v"
          }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "messages-block"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "\u0412\u0438\u0440\u0443\u0441 \u044D\u0432\u043E\u043B\u0438\u0446\u0438\u043E\u043D\u0438\u0440\u0443\u0435\u0442!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "admin-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "position-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u041A\u0441\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "admin-text"
          }, "\u0422\u0430\u043A \u0434\u0430\u0432\u0430\u0439\u0442\u0435 \u0441\u043D\u0438\u043C\u0438\u043C \u043A\u0430\u0440\u0430\u043D\u0442\u0438\u043D, \u043F\u0443\u0441\u0442\u044C \u0432\u0441\u0435 \u0432\u044B\u0439\u0434\u0443\u0442 \u043D\u0430 \u0440\u0430\u0431\u043E\u0442\u0443!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "\u041C\u0438\u0440\u043E\u0432\u043E\u0439 \u0437\u0430\u0433\u043E\u0432\u0440, \u0432\u0441\u0435 \u043E\u0431 \u044D\u0442\u043E\u043C \u0437\u043D\u0430\u044E\u0442!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "admin-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "position-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u041A\u0441\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "admin-text"
          }, "\u041C\u044B \u0441 \u0412\u0430\u043C\u0438 \u0441\u043E\u0433\u043B\u0430\u0441\u043D\u044B \u0438 \u0441\u0435\u0439\u0447\u0430\u0441 \u043F\u0435\u0440\u0435\u0432\u0435\u043B\u0438 \u043C\u0438\u043B\u043B\u0438\u043E\u043D \u043D\u0430 \u043B\u0435\u0447\u0435\u043D\u0438\u0435."), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u043E\u0447\u0435\u043D\u044C \u0446\u0435\u043D\u044E!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "\u0413\u0434\u0435 \u0434\u0435\u043D\u044C\u0433\u0438, \u041B\u0435\u0431\u043E\u0432\u0441\u043A\u0438\u0439?"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "Hello there! pls tell me, where a u?"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "admin-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "position-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u041A\u0441\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "admin-text"
          }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u0434\u0435\u043D\u0435\u0433 (\u043D\u0435\u0442)"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "Well done!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "admin-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "position-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u041A\u0441\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "admin-text"
          }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u0434\u0435\u043D\u0435\u0433 (\u043D\u0435\u0442)"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "Well done!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "admin-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "position-admin"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "\u041A\u0441\u0435\u043D\u0438\u044F, \u0431\u0438\u0437\u043D\u0435\u0441-\u0430\u0441\u0441\u0438\u0441\u0442\u0435\u043D\u0442")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "admin-text"
          }, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E! \u043C\u044B \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F \u0438 \u043F\u0435\u0440\u0435\u0432\u0435\u0434\u0435\u043C \u0441\u0443\u043C\u043C\u0443 \u0434\u0435\u043D\u0435\u0433 (\u043D\u0435\u0442)"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20"))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-mess"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-user"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-text"
          }, "Well done!"), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mess-date"
          }, "30.08.2020 09:20")))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null));
        }
      }]);

      return SSaqhanChatPersonal;
    }();

    SSaqhanChatPersonal.style = sSaqhanChatPersonalCss;
    var sSaqhanChatUsersWrapperCss = ".chat-wrap{width:100%;height:65vh;overflow:overlay}@media (max-width: 414px){.chat-wrap{height:76vh}}@media (max-width: 375px){.chat-wrap{height:78vh}.chat-files .block-input::before{left:13px}}@media (max-width: 320px){.chat-wrap{height:72vh}.block-input{text-align:center}}@media (height: 1366px) and (width: 1024px ){.chat-wrap{height:72vh}}@media (height: 1024px) and (width: 768px ){.chat-wrap{height:68vh}}@media (max-width: 375px) and (max-height: 667px){.chat-wrap{height:74vh}}@media (max-width: 320px) and (max-height: 568px){.chat-wrap{height:68vh}}";

    var SSaqhanChatUsersWrapper = /*#__PURE__*/function () {
      function SSaqhanChatUsersWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatUsersWrapper);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatUsersWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search", null), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-wrap"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users", {
            messages: this.messages,
            mainUser: this.mainUser
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null));
        }
      }]);

      return SSaqhanChatUsersWrapper;
    }();

    SSaqhanChatUsersWrapper.style = sSaqhanChatUsersWrapperCss;
    var sSaqhanChatWrapperCss = ".wrapper-chat{-webkit-box-shadow:0 0 10px 1px #828282;box-shadow:0 0 10px 1px #828282;border-radius:2px;margin-bottom:10px;width:400px;height:85vh;background-color:#fff}.header-chat{background-color:#ececec;text-align:center;padding:10px 0px;font-weight:500;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.header-chat a{position:relative;right:-25%;display:block;top:3px;padding-bottom:3px;border-radius:50%;width:25px}.header-chat a i{font-size:25px;color:#ccc}.header-chat a i:hover{color:#72b94d}@media (max-width: 414px){.wrapper-chat{width:414px;height:100vh}}@media (height: 1366px) and (width: 1024px ){.messages-block{height:72vh}}";

    var SSaqhanChatWrapper = /*#__PURE__*/function () {
      function SSaqhanChatWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatWrapper);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);

        this.ShowContent = function (content) {
          switch (content) {
            case "personal":
              return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-personal", null);

            case "users":
              return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users-wrapper", {
                messages: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["n"],
                mainUser: _mock_ac8aa152_js__WEBPACK_IMPORTED_MODULE_1__["o"]
              });

            case "files":
              return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files-wrapper", null);
          }
        };

        this.close = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
        this.selectPersonal = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectPersonal", 7);
        this.selectUsers = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectUsers", 7);
        this.selectFiles = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectFiles", 7);
      }

      _createClass(SSaqhanChatWrapper, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-chat"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-chat"
          }, "\u0427\u0430\u0442 \u0441 \u0431\u0430\u043D\u043A\u043E\u043C", Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#",
            onClick: function onClick() {
              return _this2.close.emit();
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-times-circle"
          }))), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "content-chat"
          }, this.ShowContent(this.showContent)));
        }
      }]);

      return SSaqhanChatWrapper;
    }();

    SSaqhanChatWrapper.style = sSaqhanChatWrapperCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-chat-files-wrapper_4-entry-js-es5.js.map