function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-saqhan-chat-main-user-card_2-entry-js"], {
  /***/
  "./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-main-user-card_2.entry.js":
  /*!***********************************************************************************!*\
    !*** ./node_modules/s-saqhan-v1/dist/esm/s-saqhan-chat-main-user-card_2.entry.js ***!
    \***********************************************************************************/

  /*! exports provided: s_saqhan_chat_main_user_card, s_saqhan_chat_user_card */

  /***/
  function node_modulesSSaqhanV1DistEsmSSaqhanChatMainUserCard_2EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_main_user_card", function () {
      return SSaqhanChatMainUserCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user_card", function () {
      return SSaqhanChatUserCard;
    });
    /* harmony import */


    var _index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-7a106f9f.js */
    "./node_modules/s-saqhan-v1/dist/esm/index-7a106f9f.js");

    var sSaqhanChatMainUserCardCss = ".wrap-main{display:-ms-flexbox;display:flex}.user-wrapper-main{padding:0px 10px;display:-ms-flexbox;display:flex;margin-right:0px;padding-right:15px}.left{width:15%;margin:auto;display:inline-block}.right-main{width:80%;overflow:hidden;display:inline-block;border:none}.img-user{border-radius:50%;width:45px;height:45px;background-image:url(\"http://via.placeholder.com/300\");background-size:cover}.user-data{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:5px}.user-name{font-size:13px;font-weight:500}.message-date{font-size:12px;color:#8e8e8e;margin-right:5px}.message-date:before{content:\"\\f058\";font-family:Font Awesome\\ 5 Free}.user-mess{color:#8e8e8e;font-size:13px;white-space:nowrap}.new-mess-wrap::after{content:\"            \";position:relative;left:-50px;z-index:0;background:-webkit-gradient(linear,left top, right top,from(hsla(0,0%,100%,0)),color-stop(100%, #fff),color-stop(0, #fff));background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 100%,#fff 0)}.new-mess-wrap{text-align:right;width:15px}.new-mess{position:relative;right:10%;margin-top:3px;font-size:11px;z-index:99;background-color:#c73f45;border-radius:50%;padding:0px 5px;color:#fff}@media (max-width: 414px){.new-mess{right:6%}.user-mess::after{right:15%}}@media (max-width: 375px){.right{width:77%}.new-mess{right:16%}.user-mess::after{right:25%}.user-wrapper{width:365px}.user-wrapper-main{padding-right:0px;padding:0px 0px}}@media (max-width: 320px){.user-wrapper{width:100%}.message-date{font-size:11px}.right{width:80%}.new-mess{right:27%}.user-mess::after{right:40%}}";

    var SSaqhanChatMainUserCard = /*#__PURE__*/function () {
      function SSaqhanChatMainUserCard(hostRef) {
        _classCallCheck(this, SSaqhanChatMainUserCard);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.selectPersonal = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectPersonal", 7);
      }

      _createClass(SSaqhanChatMainUserCard, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-wrapper-main",
            onClick: function onClick() {
              return _this.selectPersonal.emit();
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user",
            style: {
              backgroundImage: "url(" + this.main.img + ")"
            }
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "right-main"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-data"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-name"
          }, this.main.name), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-date"
          }, " ", this.main.date, " ")), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-wrapper"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-mess"
          }, this.main.message), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "new-mess-wrap"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "new-mess"
          }, "2")))));
        }
      }]);

      return SSaqhanChatMainUserCard;
    }();

    SSaqhanChatMainUserCard.style = sSaqhanChatMainUserCardCss;
    var sSaqhanChatUserCardCss = ".wrap-main{display:-ms-flexbox;display:flex}.user-card{cursor:pointer;padding:5px 0px;display:-ms-flexbox;display:flex}.left{width:15%;margin:auto;display:inline-block}.right{width:80%;overflow:hidden;display:inline-block;border-bottom:1px solid #ececec;padding-bottom:5px}.mess-wrapper{display:-ms-flexbox;display:flex}.positon-user{font-size:10px;background-color:#efd96e;color:#5a5a5a;border-radius:15%;padding:1px 5px;margin-bottom:5px;margin-top:10px;display:inline-block}.img-user{border-radius:50%;width:45px;height:45px;background-image:url(\"http://via.placeholder.com/300\");background-size:cover}.user-data{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin-bottom:5px}.user-name{font-size:13px;font-weight:500}.message-date{font-size:12px;color:#8e8e8e}.message-date:before{content:\"\\f058\";font-family:Font Awesome\\ 5 Free;margin-right:5px}.user-mess{color:#8e8e8e;font-size:13px;white-space:nowrap;width:100%;overflow:hidden}.new-mess-wrap::after{content:\"            \";position:relative;left:-50px;z-index:0;background:-webkit-gradient(linear,left top, right top,from(hsla(0,0%,100%,0)),color-stop(100%, #fff),color-stop(0, #fff));background:linear-gradient(90deg,hsla(0,0%,100%,0),#fff 100%,#fff 0)}.new-mess-wrap{text-align:right;width:15px}.new-mess{position:relative;right:10%;margin-top:3px;font-size:11px;z-index:99;background-color:#c73f45;border-radius:50%;padding:0px 5px;color:#fff}@media (max-width: 414px){.user-mess::after{right:10%}}@media (max-width: 375px){.new-mess{right:12%}}";

    var SSaqhanChatUserCard = /*#__PURE__*/function () {
      function SSaqhanChatUserCard(hostRef) {
        _classCallCheck(this, SSaqhanChatUserCard);

        Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.selectPersonal = Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "selectPersonal", 7);
      }

      _createClass(SSaqhanChatUserCard, [{
        key: "render",
        value: function render() {
          var _this2 = this;

          return Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-card",
            onClick: function onClick() {
              return _this2.selectPersonal.emit();
            }
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user",
            style: {
              backgroundImage: "url(" + this.user.img + ")"
            }
          })), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "right"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-data"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-name"
          }, this.user.name), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-date"
          }, this.user.date)), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-wrapper"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-mess"
          }, this.user.message), Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "new-mess-wrap"
          }, Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "new-mess"
          }, "1"))), this.user.position ? Object(_index_7a106f9f_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "positon-user"
          }, this.user.position) : '')));
        }
      }]);

      return SSaqhanChatUserCard;
    }();

    SSaqhanChatUserCard.style = sSaqhanChatUserCardCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-saqhan-chat-main-user-card_2-entry-js-es5.js.map