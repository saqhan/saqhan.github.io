function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-mobile-dialogs-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/mobile-dialogs.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/mobile-dialogs.entry.js ***!
    \********************************************************************/

  /*! exports provided: mobile_dialogs */

  /***/
  function node_modulesStencilChatDistEsmMobileDialogsEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "mobile_dialogs", function () {
      return MobileDialogs;
    });
    /* harmony import */


    var _index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-325847e8.js */
    "./node_modules/stencil-chat/dist/esm/index-325847e8.js");

    var mobileDialogsCss = ".m-chat-wrapper{width:100%;height:100%}.m-chat-header{padding:20px 20px 0px;border-bottom:1px solid #ccc}.title-wrapper{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.btns-nav{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;padding:20px 10px 0px}.btns-nav span{font-size:14px;width:25%;height:30px;text-align:center;font-weight:600;color:#979eab;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out}.btns-nav span:hover{cursor:pointer;color:#5780f7;border-bottom:2px solid #5780f7}.m-chat-header .title{font-weight:600;color:#4c567d}.m-chat-header .search i{color:#979eab}.m-chat-header .add i{color:#979eab;font-size:18px}.m-chat-dialogs{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 150px);overflow:auto}.m-chat-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:15px;padding:0px 30px}.m-chat-footer span i{color:#979eab;font-size:18px}";

    var MobileDialogs = /*#__PURE__*/function () {
      function MobileDialogs(hostRef) {
        _classCallCheck(this, MobileDialogs);

        Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToLink = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.clickToCategory = Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
      }

      _createClass(MobileDialogs, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-wrapper"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-header"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "title-wrapper"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "search custom-link",
            onClick: function onClick() {
              return _this.clickToLink.emit({
                place: 'search-dialog'
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-search"
          })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "title"
          }, "Messages"), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "add custom-link",
            onClick: function onClick() {
              return _this.clickToLink.emit({
                place: 'add-dialog'
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-plus-circle"
          }))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btns-nav"
          }, this.getCategories(this.categories))), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-dialogs"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialog, {
            mess: this.dialogs
          })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-footer"
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            onClick: function onClick() {
              return _this.clickToLink.emit({
                place: 'new-mess'
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "far fa-comment"
          })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            onClick: function onClick() {
              return _this.clickToLink.emit({
                place: 'contacts'
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-user-friends"
          })), Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            onClick: function onClick() {
              return _this.clickToLink.emit({
                place: 'menu-bar'
              });
            }
          }, Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "fas fa-bars"
          }))));
        }
        /**
         * Метод получения названий категорий
         * */

      }, {
        key: "getCategories",
        value: function getCategories(array) {
          var _this2 = this;

          return array.map(function (item) {
            return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": item.id,
              onClick: function onClick() {
                return _this2.clickToCategory.emit({
                  place: 'item-category',
                  item: item
                });
              }
            }, item.name);
          });
        }
      }]);

      return MobileDialogs;
    }();
    /**
     * Распаковка массива диалогов и выдача в компоненте <dialog-card/>
     * */


    var Dialog = function Dialog(array) {
      return array.mess.map(function (item) {
        return Object(_index_325847e8_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
          mess: item
        });
      });
    };

    MobileDialogs.style = mobileDialogsCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-mobile-dialogs-entry-js-es5.js.map