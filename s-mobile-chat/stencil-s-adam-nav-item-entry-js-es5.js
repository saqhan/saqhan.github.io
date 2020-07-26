function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-s-adam-nav-item-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/s-adam-nav-item.entry.js":
  /*!*********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/s-adam-nav-item.entry.js ***!
    \*********************************************************************/

  /*! exports provided: s_adam_nav_item */

  /***/
  function node_modulesStencilChatDistEsmSAdamNavItemEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_nav_item", function () {
      return SAdamNavItem;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var sAdamNavItemCss = ".c-chat.sc-s-adam-nav-item{color:#bacbe3}.hover-link.sc-s-adam-nav-item:hover{color:#6328f8;cursor:pointer}.hover-link.sc-s-adam-nav-item:active{color:#6328f8}.nav-item.sc-s-adam-nav-item{margin-bottom:20px}.nav-item-wrapper.sc-s-adam-nav-item{text-align:center}";

    var SAdamNavItem = /*#__PURE__*/function () {
      function SAdamNavItem(hostRef) {
        _classCallCheck(this, SAdamNavItem);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.visibleContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "visibleContacts", 7);
      }

      _createClass(SAdamNavItem, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-item-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            onClick: function onClick() {
              return _this.visibleContactsHandler();
            },
            "class": "c-chat c-chat-comment-alt hover-link"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-shopping-bag hover-link"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-cart-arrow-down hover-link"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-calendar-alt hover-link"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "nav -item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-cog hover-link"
          })));
        }
        /**
         * Показать личный профиль юзера
         */

      }, {
        key: "visibleContactsHandler",
        value: function visibleContactsHandler() {
          this.visibleContacts.emit();
        }
      }]);

      return SAdamNavItem;
    }();

    SAdamNavItem.style = sAdamNavItemCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-s-adam-nav-item-entry-js-es5.js.map