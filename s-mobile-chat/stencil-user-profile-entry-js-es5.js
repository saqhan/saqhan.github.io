function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-user-profile-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/user-profile.entry.js":
  /*!******************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/user-profile.entry.js ***!
    \******************************************************************/

  /*! exports provided: user_profile */

  /***/
  function node_modulesStencilChatDistEsmUserProfileEntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_profile", function () {
      return UserProfile;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");

    var userProfileCss = "";

    var UserProfile = /*#__PURE__*/function () {
      function UserProfile(hostRef) {
        _classCallCheck(this, UserProfile);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
      }

      _createClass(UserProfile, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
            theme: 'mobile'
          });
        }
      }]);

      return UserProfile;
    }();

    UserProfile.style = userProfileCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-user-profile-entry-js-es5.js.map