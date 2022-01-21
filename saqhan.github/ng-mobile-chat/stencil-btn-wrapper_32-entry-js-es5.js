function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-btn-wrapper_32-entry-js"], {
  /***/
  "./node_modules/stencil-chat/dist/esm/btn-wrapper_32.entry.js":
  /*!********************************************************************!*\
    !*** ./node_modules/stencil-chat/dist/esm/btn-wrapper_32.entry.js ***!
    \********************************************************************/

  /*! exports provided: btn_wrapper, cnt_module_chat, contact_card, contacts_list, contacts_list_body, contacts_list_header, dialog_card, dialog_categories, footer_audio, footer_text, m_chat_footer, message_from, message_img, message_text, module_chat, module_header, module_personal, my_component, personal_footer, personal_header, personal_message, s_adam_profile, s_saqhan_chat_add_question, s_saqhan_chat_files, s_saqhan_chat_files_wrapper, s_saqhan_chat_form_search, s_saqhan_chat_form_search_files, s_saqhan_chat_user, s_saqhan_chat_users, s_saqhan_chat_users_wrapper, user_folders, user_status */

  /***/
  function node_modulesStencilChatDistEsmBtnWrapper_32EntryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "btn_wrapper", function () {
      return BtnWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cnt_module_chat", function () {
      return CntModuleChat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contact_card", function () {
      return ContactCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list", function () {
      return ContactsList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list_body", function () {
      return ContactsListBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "contacts_list_header", function () {
      return ContactsListHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dialog_card", function () {
      return DialogCard;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dialog_categories", function () {
      return DialogCategories;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footer_audio", function () {
      return FooterAudio;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "footer_text", function () {
      return FooterText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "m_chat_footer", function () {
      return MChatFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_from", function () {
      return MessageFrom;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_img", function () {
      return MessageImg;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "message_text", function () {
      return MessageText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_chat", function () {
      return ModuleChat;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_header", function () {
      return ModuleHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "module_personal", function () {
      return ModulePersonal;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "my_component", function () {
      return MyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_footer", function () {
      return PersonalFooter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_header", function () {
      return PersonalHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "personal_message", function () {
      return PersonalMessage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_adam_profile", function () {
      return SAdamProfile;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_add_question", function () {
      return SSaqhanChatAddQuestion;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files", function () {
      return SSaqhanChatFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files_wrapper", function () {
      return SSaqhanChatFilesWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search", function () {
      return SSaqhanChatFormSearch;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search_files", function () {
      return SSaqhanChatFormSearchFiles;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user", function () {
      return SSaqhanChatUser;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users", function () {
      return SSaqhanChatUsers;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users_wrapper", function () {
      return SSaqhanChatUsersWrapper;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_folders", function () {
      return UserFolders;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "user_status", function () {
      return UserStatus;
    });
    /* harmony import */


    var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./index-53235049.js */
    "./node_modules/stencil-chat/dist/esm/index-53235049.js");
    /* harmony import */


    var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./index.mjs */
    "./node_modules/stencil-chat/dist/esm/index.mjs");
    /* harmony import */


    var _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./mock-8ce3ba60.js */
    "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js");

    var btnWrapperCss = ".btn-open.sc-btn-wrapper{width:60px;height:60px;font-size:24px;border:none;background-color:#72b94d;color:#fff;border-radius:50%;outline:none !important;cursor:pointer}.open-chat.sc-btn-wrapper{text-align:right;z-index:999;position:fixed;right:20px;bottom:20px}.btn-green.sc-btn-wrapper{position:relative}.counterNewMess.sc-btn-wrapper{position:absolute;right:-5px;top:0px;color:#fff;text-align:center;width:25px;padding:5px 5px;border-radius:50%;background-color:#c73f45;font-size:12px}@media (max-width: 414px){.btn-open.sc-btn-wrapper{width:40px;height:40px}.open-chat.sc-btn-wrapper{right:0px;bottom:60px}.open-chat.sc-btn-wrapper::after{font-size:10px;padding:0px 5px;top:-20px;left:-15px}.btn-open.sc-btn-wrapper{font-size:18px}.counterNewMess.sc-btn-wrapper{width:18px;font-size:8px}}@media (max-width: 375px){.open-chat.sc-btn-wrapper{right:15px;bottom:60px}}";

    var BtnWrapper = /*#__PURE__*/function () {
      function BtnWrapper(hostRef) {
        _classCallCheck(this, BtnWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowChat", 7);
      }

      _createClass(BtnWrapper, [{
        key: "render",
        value: function render() {
          var _this = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "open-chat"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": 'btn-green'
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            onClick: function onClick() {
              return _this.clickToShowChatHandler();
            },
            "class": "btn-open"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.showChat ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-comment-dots"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": 'counterNewMess'
          }, this.dialogs))));
        }
      }, {
        key: "clickToShowChatHandler",
        value: function clickToShowChatHandler() {
          this.clickToShowChat.emit();
        }
      }]);

      return BtnWrapper;
    }();

    BtnWrapper.style = btnWrapperCss;
    var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

    function createCommonjsModule(fn, module) {
      return module = {
        exports: {}
      }, fn(module, module.exports), module.exports;
    }

    var dayjs_min = createCommonjsModule(function (module, exports) {
      !function (t, e) {
        module.exports = e();
      }(commonjsGlobal, function () {
        var t = "millisecond",
            e = "second",
            n = "minute",
            r = "hour",
            i = "day",
            s = "week",
            u = "month",
            o = "quarter",
            a = "year",
            h = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
            f = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
            c = function c(t, e, n) {
          var r = String(t);
          return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
        },
            d = {
          s: c,
          z: function z(t) {
            var e = -t.utcOffset(),
                n = Math.abs(e),
                r = Math.floor(n / 60),
                i = n % 60;
            return (e <= 0 ? "+" : "-") + c(r, 2, "0") + ":" + c(i, 2, "0");
          },
          m: function m(t, e) {
            var n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
                r = t.clone().add(n, u),
                i = e - r < 0,
                s = t.clone().add(n + (i ? -1 : 1), u);
            return Number(-(n + (e - r) / (i ? r - s : s - r)) || 0);
          },
          a: function a(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          },
          p: function p(h) {
            return {
              M: u,
              y: a,
              w: s,
              d: i,
              D: "date",
              h: r,
              m: n,
              s: e,
              ms: t,
              Q: o
            }[h] || String(h || "").toLowerCase().replace(/s$/, "");
          },
          u: function u(t) {
            return void 0 === t;
          }
        },
            $ = {
          name: "en",
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
            l = "en",
            m = {};

        m[l] = $;

        var y = function y(t) {
          return t instanceof v;
        },
            M = function M(t, e, n) {
          var r;
          if (!t) return l;
          if ("string" == typeof t) m[t] && (r = t), e && (m[t] = e, r = t);else {
            var i = t.name;
            m[i] = t, r = i;
          }
          return !n && r && (l = r), r || !n && l;
        },
            g = function g(t, e) {
          if (y(t)) return t.clone();
          var n = "object" == typeof e ? e : {};
          return n.date = t, n.args = arguments, new v(n);
        },
            D = d;

        D.l = M, D.i = y, D.w = function (t, e) {
          return g(t, {
            locale: e.$L,
            utc: e.$u,
            $offset: e.$offset
          });
        };

        var v = function () {
          function c(t) {
            this.$L = this.$L || M(t.locale, null, !0), this.parse(t);
          }

          var d = c.prototype;
          return d.parse = function (t) {
            this.$d = function (t) {
              var e = t.date,
                  n = t.utc;
              if (null === e) return new Date(NaN);
              if (D.u(e)) return new Date();
              if (e instanceof Date) return new Date(e);

              if ("string" == typeof e && !/Z$/i.test(e)) {
                var r = e.match(h);
                if (r) return n ? new Date(Date.UTC(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0)) : new Date(r[1], r[2] - 1, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, r[7] || 0);
              }

              return new Date(e);
            }(t), this.init();
          }, d.init = function () {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
          }, d.$utils = function () {
            return D;
          }, d.isValid = function () {
            return !("Invalid Date" === this.$d.toString());
          }, d.isSame = function (t, e) {
            var n = g(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
          }, d.isAfter = function (t, e) {
            return g(t) < this.startOf(e);
          }, d.isBefore = function (t, e) {
            return this.endOf(e) < g(t);
          }, d.$g = function (t, e, n) {
            return D.u(t) ? this[e] : this.set(n, t);
          }, d.year = function (t) {
            return this.$g(t, "$y", a);
          }, d.month = function (t) {
            return this.$g(t, "$M", u);
          }, d.day = function (t) {
            return this.$g(t, "$W", i);
          }, d.date = function (t) {
            return this.$g(t, "$D", "date");
          }, d.hour = function (t) {
            return this.$g(t, "$H", r);
          }, d.minute = function (t) {
            return this.$g(t, "$m", n);
          }, d.second = function (t) {
            return this.$g(t, "$s", e);
          }, d.millisecond = function (e) {
            return this.$g(e, "$ms", t);
          }, d.unix = function () {
            return Math.floor(this.valueOf() / 1e3);
          }, d.valueOf = function () {
            return this.$d.getTime();
          }, d.startOf = function (t, o) {
            var h = this,
                f = !!D.u(o) || o,
                c = D.p(t),
                d = function d(t, e) {
              var n = D.w(h.$u ? Date.UTC(h.$y, e, t) : new Date(h.$y, e, t), h);
              return f ? n : n.endOf(i);
            },
                $ = function $(t, e) {
              return D.w(h.toDate()[t].apply(h.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e)), h);
            },
                l = this.$W,
                m = this.$M,
                y = this.$D,
                M = "set" + (this.$u ? "UTC" : "");

            switch (c) {
              case a:
                return f ? d(1, 0) : d(31, 11);

              case u:
                return f ? d(1, m) : d(0, m + 1);

              case s:
                var g = this.$locale().weekStart || 0,
                    v = (l < g ? l + 7 : l) - g;
                return d(f ? y - v : y + (6 - v), m);

              case i:
              case "date":
                return $(M + "Hours", 0);

              case r:
                return $(M + "Minutes", 1);

              case n:
                return $(M + "Seconds", 2);

              case e:
                return $(M + "Milliseconds", 3);

              default:
                return this.clone();
            }
          }, d.endOf = function (t) {
            return this.startOf(t, !1);
          }, d.$set = function (s, o) {
            var h,
                f = D.p(s),
                c = "set" + (this.$u ? "UTC" : ""),
                d = (h = {}, h[i] = c + "Date", h.date = c + "Date", h[u] = c + "Month", h[a] = c + "FullYear", h[r] = c + "Hours", h[n] = c + "Minutes", h[e] = c + "Seconds", h[t] = c + "Milliseconds", h)[f],
                $ = f === i ? this.$D + (o - this.$W) : o;

            if (f === u || f === a) {
              var l = this.clone().set("date", 1);
              l.$d[d]($), l.init(), this.$d = l.set("date", Math.min(this.$D, l.daysInMonth())).toDate();
            } else d && this.$d[d]($);

            return this.init(), this;
          }, d.set = function (t, e) {
            return this.clone().$set(t, e);
          }, d.get = function (t) {
            return this[D.p(t)]();
          }, d.add = function (t, o) {
            var h,
                f = this;
            t = Number(t);

            var c = D.p(o),
                d = function d(e) {
              var n = g(f);
              return D.w(n.date(n.date() + Math.round(e * t)), f);
            };

            if (c === u) return this.set(u, this.$M + t);
            if (c === a) return this.set(a, this.$y + t);
            if (c === i) return d(1);
            if (c === s) return d(7);
            var $ = (h = {}, h[n] = 6e4, h[r] = 36e5, h[e] = 1e3, h)[c] || 1,
                l = this.$d.getTime() + t * $;
            return D.w(l, this);
          }, d.subtract = function (t, e) {
            return this.add(-1 * t, e);
          }, d.format = function (t) {
            var e = this;
            if (!this.isValid()) return "Invalid Date";

            var n = t || "YYYY-MM-DDTHH:mm:ssZ",
                r = D.z(this),
                i = this.$locale(),
                s = this.$H,
                u = this.$m,
                o = this.$M,
                a = i.weekdays,
                h = i.months,
                c = function c(t, r, i, s) {
              return t && (t[r] || t(e, n)) || i[r].substr(0, s);
            },
                d = function d(t) {
              return D.s(s % 12 || 12, t, "0");
            },
                $ = i.meridiem || function (t, e, n) {
              var r = t < 12 ? "AM" : "PM";
              return n ? r.toLowerCase() : r;
            },
                l = {
              YY: String(this.$y).slice(-2),
              YYYY: this.$y,
              M: o + 1,
              MM: D.s(o + 1, 2, "0"),
              MMM: c(i.monthsShort, o, h, 3),
              MMMM: c(h, o),
              D: this.$D,
              DD: D.s(this.$D, 2, "0"),
              d: String(this.$W),
              dd: c(i.weekdaysMin, this.$W, a, 2),
              ddd: c(i.weekdaysShort, this.$W, a, 3),
              dddd: a[this.$W],
              H: String(s),
              HH: D.s(s, 2, "0"),
              h: d(1),
              hh: d(2),
              a: $(s, u, !0),
              A: $(s, u, !1),
              m: String(u),
              mm: D.s(u, 2, "0"),
              s: String(this.$s),
              ss: D.s(this.$s, 2, "0"),
              SSS: D.s(this.$ms, 3, "0"),
              Z: r
            };

            return n.replace(f, function (t, e) {
              return e || l[t] || r.replace(":", "");
            });
          }, d.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
          }, d.diff = function (t, h, f) {
            var c,
                d = D.p(h),
                $ = g(t),
                l = 6e4 * ($.utcOffset() - this.utcOffset()),
                m = this - $,
                y = D.m(this, $);
            return y = (c = {}, c[a] = y / 12, c[u] = y, c[o] = y / 3, c[s] = (m - l) / 6048e5, c[i] = (m - l) / 864e5, c[r] = m / 36e5, c[n] = m / 6e4, c[e] = m / 1e3, c)[d] || m, f ? y : D.a(y);
          }, d.daysInMonth = function () {
            return this.endOf(u).$D;
          }, d.$locale = function () {
            return m[this.$L];
          }, d.locale = function (t, e) {
            if (!t) return this.$L;
            var n = this.clone(),
                r = M(t, e, !0);
            return r && (n.$L = r), n;
          }, d.clone = function () {
            return D.w(this.$d, this);
          }, d.toDate = function () {
            return new Date(this.valueOf());
          }, d.toJSON = function () {
            return this.isValid() ? this.toISOString() : null;
          }, d.toISOString = function () {
            return this.$d.toISOString();
          }, d.toString = function () {
            return this.$d.toUTCString();
          }, c;
        }();

        return g.prototype = v.prototype, g.extend = function (t, e) {
          return t(e, v, g), g;
        }, g.locale = M, g.isDayjs = y, g.unix = function (t) {
          return g(1e3 * t);
        }, g.en = m[l], g.Ls = m, g;
      });
    });

    function isFunction(x) {
      return typeof x === 'function';
    }

    var _enable_super_gross_mode_that_will_cause_bad_things = false;
    var config = {
      Promise: undefined,

      set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
          var error = new Error();
          console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        } else if (_enable_super_gross_mode_that_will_cause_bad_things) {
          console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }

        _enable_super_gross_mode_that_will_cause_bad_things = value;
      },

      get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
      }

    };

    function hostReportError(err) {
      setTimeout(function () {
        throw err;
      }, 0);
    }

    var empty = {
      closed: true,
      next: function next(value) {},
      error: function error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
          throw err;
        } else {
          hostReportError(err);
        }
      },
      complete: function complete() {}
    };

    var isArray = function () {
      return Array.isArray || function (x) {
        return x && typeof x.length === 'number';
      };
    }();

    function isObject(x) {
      return x !== null && typeof x === 'object';
    }

    var UnsubscriptionErrorImpl = function () {
      function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ? "".concat(errors.length, " errors occurred during unsubscription:\n").concat(errors.map(function (err, i) {
          return "".concat(i + 1, ") ").concat(err.toString());
        }).join('\n  ')) : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
      }

      UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
      return UnsubscriptionErrorImpl;
    }();

    var UnsubscriptionError = UnsubscriptionErrorImpl;

    var Subscription = /*#__PURE__*/function () {
      function Subscription(unsubscribe) {
        _classCallCheck(this, Subscription);

        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;

        if (unsubscribe) {
          this._unsubscribe = unsubscribe;
        }
      }

      _createClass(Subscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          var errors;

          if (this.closed) {
            return;
          }

          var _parentOrParents = this._parentOrParents,
              _unsubscribe = this._unsubscribe,
              _subscriptions = this._subscriptions;
          this.closed = true;
          this._parentOrParents = null;
          this._subscriptions = null;

          if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
          } else if (_parentOrParents !== null) {
            for (var index = 0; index < _parentOrParents.length; ++index) {
              var parent = _parentOrParents[index];
              parent.remove(this);
            }
          }

          if (isFunction(_unsubscribe)) {
            try {
              _unsubscribe.call(this);
            } catch (e) {
              errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
          }

          if (isArray(_subscriptions)) {
            var _index = -1;

            var len = _subscriptions.length;

            while (++_index < len) {
              var sub = _subscriptions[_index];

              if (isObject(sub)) {
                try {
                  sub.unsubscribe();
                } catch (e) {
                  errors = errors || [];

                  if (e instanceof UnsubscriptionError) {
                    errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                  } else {
                    errors.push(e);
                  }
                }
              }
            }
          }

          if (errors) {
            throw new UnsubscriptionError(errors);
          }
        }
      }, {
        key: "add",
        value: function add(teardown) {
          var subscription = teardown;

          if (!teardown) {
            return Subscription.EMPTY;
          }

          switch (typeof teardown) {
            case 'function':
              subscription = new Subscription(teardown);

            case 'object':
              if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                return subscription;
              } else if (this.closed) {
                subscription.unsubscribe();
                return subscription;
              } else if (!(subscription instanceof Subscription)) {
                var tmp = subscription;
                subscription = new Subscription();
                subscription._subscriptions = [tmp];
              }

              break;

            default:
              {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
              }
          }

          var _subscription = subscription,
              _parentOrParents = _subscription._parentOrParents;

          if (_parentOrParents === null) {
            subscription._parentOrParents = this;
          } else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
              return subscription;
            }

            subscription._parentOrParents = [_parentOrParents, this];
          } else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
          } else {
            return subscription;
          }

          var subscriptions = this._subscriptions;

          if (subscriptions === null) {
            this._subscriptions = [subscription];
          } else {
            subscriptions.push(subscription);
          }

          return subscription;
        }
      }, {
        key: "remove",
        value: function remove(subscription) {
          var subscriptions = this._subscriptions;

          if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);

            if (subscriptionIndex !== -1) {
              subscriptions.splice(subscriptionIndex, 1);
            }
          }
        }
      }]);

      return Subscription;
    }();

    Subscription.EMPTY = function (empty) {
      empty.closed = true;
      return empty;
    }(new Subscription());

    function flattenUnsubscriptionErrors(errors) {
      return errors.reduce(function (errs, err) {
        return errs.concat(err instanceof UnsubscriptionError ? err.errors : err);
      }, []);
    }

    var rxSubscriber = function () {
      return typeof Symbol === 'function' ? Symbol('rxSubscriber') : '@@rxSubscriber_' + Math.random();
    }();

    var Subscriber = /*#__PURE__*/function (_Subscription) {
      _inherits(Subscriber, _Subscription);

      var _super = _createSuper(Subscriber);

      function Subscriber(destinationOrNext, error, complete) {
        var _this2;

        _classCallCheck(this, Subscriber);

        _this2 = _super.call(this);
        _this2.syncErrorValue = null;
        _this2.syncErrorThrown = false;
        _this2.syncErrorThrowable = false;
        _this2.isStopped = false;

        switch (arguments.length) {
          case 0:
            _this2.destination = empty;
            break;

          case 1:
            if (!destinationOrNext) {
              _this2.destination = empty;
              break;
            }

            if (typeof destinationOrNext === 'object') {
              if (destinationOrNext instanceof Subscriber) {
                _this2.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                _this2.destination = destinationOrNext;
                destinationOrNext.add(_assertThisInitialized(_this2));
              } else {
                _this2.syncErrorThrowable = true;
                _this2.destination = new SafeSubscriber(_assertThisInitialized(_this2), destinationOrNext);
              }

              break;
            }

          default:
            _this2.syncErrorThrowable = true;
            _this2.destination = new SafeSubscriber(_assertThisInitialized(_this2), destinationOrNext, error, complete);
            break;
        }

        return _this2;
      }

      _createClass(Subscriber, [{
        key: rxSubscriber,
        value: function value() {
          return this;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (!this.isStopped) {
            this._next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            this.isStopped = true;

            this._error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          if (!this.isStopped) {
            this.isStopped = true;

            this._complete();
          }
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.isStopped = true;

          _get(_getPrototypeOf(Subscriber.prototype), "unsubscribe", this).call(this);
        }
      }, {
        key: "_next",
        value: function _next(value) {
          this.destination.next(value);
        }
      }, {
        key: "_error",
        value: function _error(err) {
          this.destination.error(err);
          this.unsubscribe();
        }
      }, {
        key: "_complete",
        value: function _complete() {
          this.destination.complete();
          this.unsubscribe();
        }
      }, {
        key: "_unsubscribeAndRecycle",
        value: function _unsubscribeAndRecycle() {
          var _parentOrParents = this._parentOrParents;
          this._parentOrParents = null;
          this.unsubscribe();
          this.closed = false;
          this.isStopped = false;
          this._parentOrParents = _parentOrParents;
          return this;
        }
      }], [{
        key: "create",
        value: function create(next, error, complete) {
          var subscriber = new Subscriber(next, error, complete);
          subscriber.syncErrorThrowable = false;
          return subscriber;
        }
      }]);

      return Subscriber;
    }(Subscription);

    var SafeSubscriber = /*#__PURE__*/function (_Subscriber) {
      _inherits(SafeSubscriber, _Subscriber);

      var _super2 = _createSuper(SafeSubscriber);

      function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this3;

        _classCallCheck(this, SafeSubscriber);

        _this3 = _super2.call(this);
        _this3._parentSubscriber = _parentSubscriber;
        var next;

        var context = _assertThisInitialized(_this3);

        if (isFunction(observerOrNext)) {
          next = observerOrNext;
        } else if (observerOrNext) {
          next = observerOrNext.next;
          error = observerOrNext.error;
          complete = observerOrNext.complete;

          if (observerOrNext !== empty) {
            context = Object.create(observerOrNext);

            if (isFunction(context.unsubscribe)) {
              _this3.add(context.unsubscribe.bind(context));
            }

            context.unsubscribe = _this3.unsubscribe.bind(_assertThisInitialized(_this3));
          }
        }

        _this3._context = context;
        _this3._next = next;
        _this3._error = error;
        _this3._complete = complete;
        return _this3;
      }

      _createClass(SafeSubscriber, [{
        key: "next",
        value: function next(value) {
          if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;

            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
              this.__tryOrUnsub(this._next, value);
            } else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config.useDeprecatedSynchronousErrorHandling;

            if (this._error) {
              if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._error, err);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, this._error, err);

                this.unsubscribe();
              }
            } else if (!_parentSubscriber.syncErrorThrowable) {
              this.unsubscribe();

              if (useDeprecatedSynchronousErrorHandling) {
                throw err;
              }

              hostReportError(err);
            } else {
              if (useDeprecatedSynchronousErrorHandling) {
                _parentSubscriber.syncErrorValue = err;
                _parentSubscriber.syncErrorThrown = true;
              } else {
                hostReportError(err);
              }

              this.unsubscribe();
            }
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var _this4 = this;

          if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;

            if (this._complete) {
              var wrappedComplete = function wrappedComplete() {
                return _this4._complete.call(_this4._context);
              };

              if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(wrappedComplete);

                this.unsubscribe();
              } else {
                this.__tryOrSetError(_parentSubscriber, wrappedComplete);

                this.unsubscribe();
              }
            } else {
              this.unsubscribe();
            }
          }
        }
      }, {
        key: "__tryOrUnsub",
        value: function __tryOrUnsub(fn, value) {
          try {
            fn.call(this._context, value);
          } catch (err) {
            this.unsubscribe();

            if (config.useDeprecatedSynchronousErrorHandling) {
              throw err;
            } else {
              hostReportError(err);
            }
          }
        }
      }, {
        key: "__tryOrSetError",
        value: function __tryOrSetError(parent, fn, value) {
          if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
          }

          try {
            fn.call(this._context, value);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              parent.syncErrorValue = err;
              parent.syncErrorThrown = true;
              return true;
            } else {
              hostReportError(err);
              return true;
            }
          }

          return false;
        }
      }, {
        key: "_unsubscribe",
        value: function _unsubscribe() {
          var _parentSubscriber = this._parentSubscriber;
          this._context = null;
          this._parentSubscriber = null;

          _parentSubscriber.unsubscribe();
        }
      }]);

      return SafeSubscriber;
    }(Subscriber);

    function canReportError(observer) {
      while (observer) {
        var _observer = observer,
            closed = _observer.closed,
            destination = _observer.destination,
            isStopped = _observer.isStopped;

        if (closed || isStopped) {
          return false;
        } else if (destination && destination instanceof Subscriber) {
          observer = destination;
        } else {
          observer = null;
        }
      }

      return true;
    }

    function toSubscriber(nextOrObserver, error, complete) {
      if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber) {
          return nextOrObserver;
        }

        if (nextOrObserver[rxSubscriber]) {
          return nextOrObserver[rxSubscriber]();
        }
      }

      if (!nextOrObserver && !error && !complete) {
        return new Subscriber(empty);
      }

      return new Subscriber(nextOrObserver, error, complete);
    }

    var observable = function () {
      return typeof Symbol === 'function' && Symbol.observable || '@@observable';
    }();

    function identity(x) {
      return x;
    }

    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity;
      }

      if (fns.length === 1) {
        return fns[0];
      }

      return function piped(input) {
        return fns.reduce(function (prev, fn) {
          return fn(prev);
        }, input);
      };
    }

    var Observable = /*#__PURE__*/function () {
      function Observable(subscribe) {
        _classCallCheck(this, Observable);

        this._isScalar = false;

        if (subscribe) {
          this._subscribe = subscribe;
        }
      }

      _createClass(Observable, [{
        key: "lift",
        value: function lift(operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
        }
      }, {
        key: "subscribe",
        value: function subscribe(observerOrNext, error, complete) {
          var operator = this.operator;
          var sink = toSubscriber(observerOrNext, error, complete);

          if (operator) {
            sink.add(operator.call(sink, this.source));
          } else {
            sink.add(this.source || config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable ? this._subscribe(sink) : this._trySubscribe(sink));
          }

          if (config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
              sink.syncErrorThrowable = false;

              if (sink.syncErrorThrown) {
                throw sink.syncErrorValue;
              }
            }
          }

          return sink;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(sink) {
          try {
            return this._subscribe(sink);
          } catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
              sink.syncErrorThrown = true;
              sink.syncErrorValue = err;
            }

            if (canReportError(sink)) {
              sink.error(err);
            } else {
              console.warn(err);
            }
          }
        }
      }, {
        key: "forEach",
        value: function forEach(next, promiseCtor) {
          var _this5 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this5.subscribe(function (value) {
              try {
                next(value);
              } catch (err) {
                reject(err);

                if (subscription) {
                  subscription.unsubscribe();
                }
              }
            }, reject, resolve);
          });
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;
          return source && source.subscribe(subscriber);
        }
      }, {
        key: observable,
        value: function value() {
          return this;
        }
      }, {
        key: "pipe",
        value: function pipe() {
          for (var _len = arguments.length, operations = new Array(_len), _key = 0; _key < _len; _key++) {
            operations[_key] = arguments[_key];
          }

          if (operations.length === 0) {
            return this;
          }

          return pipeFromArray(operations)(this);
        }
      }, {
        key: "toPromise",
        value: function toPromise(promiseCtor) {
          var _this6 = this;

          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
            var value;

            _this6.subscribe(function (x) {
              return value = x;
            }, function (err) {
              return reject(err);
            }, function () {
              return resolve(value);
            });
          });
        }
      }]);

      return Observable;
    }();

    Observable.create = function (subscribe) {
      return new Observable(subscribe);
    };

    function getPromiseCtor(promiseCtor) {
      if (!promiseCtor) {
        promiseCtor = Promise;
      }

      if (!promiseCtor) {
        throw new Error('no Promise impl found');
      }

      return promiseCtor;
    }

    var ObjectUnsubscribedErrorImpl = function () {
      function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
      }

      ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
      return ObjectUnsubscribedErrorImpl;
    }();

    var ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

    var SubjectSubscription = /*#__PURE__*/function (_Subscription2) {
      _inherits(SubjectSubscription, _Subscription2);

      var _super3 = _createSuper(SubjectSubscription);

      function SubjectSubscription(subject, subscriber) {
        var _this7;

        _classCallCheck(this, SubjectSubscription);

        _this7 = _super3.call(this);
        _this7.subject = subject;
        _this7.subscriber = subscriber;
        _this7.closed = false;
        return _this7;
      }

      _createClass(SubjectSubscription, [{
        key: "unsubscribe",
        value: function unsubscribe() {
          if (this.closed) {
            return;
          }

          this.closed = true;
          var subject = this.subject;
          var observers = subject.observers;
          this.subject = null;

          if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
          }

          var subscriberIndex = observers.indexOf(this.subscriber);

          if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
          }
        }
      }]);

      return SubjectSubscription;
    }(Subscription);

    var SubjectSubscriber = /*#__PURE__*/function (_Subscriber2) {
      _inherits(SubjectSubscriber, _Subscriber2);

      var _super4 = _createSuper(SubjectSubscriber);

      function SubjectSubscriber(destination) {
        var _this8;

        _classCallCheck(this, SubjectSubscriber);

        _this8 = _super4.call(this, destination);
        _this8.destination = destination;
        return _this8;
      }

      return SubjectSubscriber;
    }(Subscriber);

    var Subject = /*#__PURE__*/function (_Observable) {
      _inherits(Subject, _Observable);

      var _super5 = _createSuper(Subject);

      function Subject() {
        var _this9;

        _classCallCheck(this, Subject);

        _this9 = _super5.call(this);
        _this9.observers = [];
        _this9.closed = false;
        _this9.isStopped = false;
        _this9.hasError = false;
        _this9.thrownError = null;
        return _this9;
      }

      _createClass(Subject, [{
        key: rxSubscriber,
        value: function value() {
          return new SubjectSubscriber(this);
        }
      }, {
        key: "lift",
        value: function lift(operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
        }
      }, {
        key: "next",
        value: function next(value) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          if (!this.isStopped) {
            var observers = this.observers;
            var len = observers.length;
            var copy = observers.slice();

            for (var i = 0; i < len; i++) {
              copy[i].next(value);
            }
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          this.hasError = true;
          this.thrownError = err;
          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].error(err);
          }

          this.observers.length = 0;
        }
      }, {
        key: "complete",
        value: function complete() {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          }

          this.isStopped = true;
          var observers = this.observers;
          var len = observers.length;
          var copy = observers.slice();

          for (var i = 0; i < len; i++) {
            copy[i].complete();
          }

          this.observers.length = 0;
        }
      }, {
        key: "unsubscribe",
        value: function unsubscribe() {
          this.isStopped = true;
          this.closed = true;
          this.observers = null;
        }
      }, {
        key: "_trySubscribe",
        value: function _trySubscribe(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else {
            return _get(_getPrototypeOf(Subject.prototype), "_trySubscribe", this).call(this, subscriber);
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
          } else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
          } else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
          }
        }
      }, {
        key: "asObservable",
        value: function asObservable() {
          var observable = new Observable();
          observable.source = this;
          return observable;
        }
      }]);

      return Subject;
    }(Observable);

    Subject.create = function (destination, source) {
      return new AnonymousSubject(destination, source);
    };

    var AnonymousSubject = /*#__PURE__*/function (_Subject) {
      _inherits(AnonymousSubject, _Subject);

      var _super6 = _createSuper(AnonymousSubject);

      function AnonymousSubject(destination, source) {
        var _this10;

        _classCallCheck(this, AnonymousSubject);

        _this10 = _super6.call(this);
        _this10.destination = destination;
        _this10.source = source;
        return _this10;
      }

      _createClass(AnonymousSubject, [{
        key: "next",
        value: function next(value) {
          var destination = this.destination;

          if (destination && destination.next) {
            destination.next(value);
          }
        }
      }, {
        key: "error",
        value: function error(err) {
          var destination = this.destination;

          if (destination && destination.error) {
            this.destination.error(err);
          }
        }
      }, {
        key: "complete",
        value: function complete() {
          var destination = this.destination;

          if (destination && destination.complete) {
            this.destination.complete();
          }
        }
      }, {
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var source = this.source;

          if (source) {
            return this.source.subscribe(subscriber);
          } else {
            return Subscription.EMPTY;
          }
        }
      }]);

      return AnonymousSubject;
    }(Subject);

    var BehaviorSubject = /*#__PURE__*/function (_Subject2) {
      _inherits(BehaviorSubject, _Subject2);

      var _super7 = _createSuper(BehaviorSubject);

      function BehaviorSubject(_value) {
        var _this11;

        _classCallCheck(this, BehaviorSubject);

        _this11 = _super7.call(this);
        _this11._value = _value;
        return _this11;
      }

      _createClass(BehaviorSubject, [{
        key: "_subscribe",
        value: function _subscribe(subscriber) {
          var subscription = _get(_getPrototypeOf(BehaviorSubject.prototype), "_subscribe", this).call(this, subscriber);

          if (subscription && !subscription.closed) {
            subscriber.next(this._value);
          }

          return subscription;
        }
      }, {
        key: "getValue",
        value: function getValue() {
          if (this.hasError) {
            throw this.thrownError;
          } else if (this.closed) {
            throw new ObjectUnsubscribedError();
          } else {
            return this._value;
          }
        }
      }, {
        key: "next",
        value: function next(value) {
          _get(_getPrototypeOf(BehaviorSubject.prototype), "next", this).call(this, this._value = value);
        }
      }, {
        key: "value",
        get: function get() {
          return this.getValue();
        }
      }]);

      return BehaviorSubject;
    }(Subject);

    var Timer = /*#__PURE__*/function () {
      function Timer() {
        _classCallCheck(this, Timer);
      }

      _createClass(Timer, [{
        key: "start",

        /**
         * Start timer
         */
        value: function start(cb) {
          var _this12 = this;

          this.startedTime = new Date();
          this.callbackFunction = cb;
          this.intervalId = setInterval(function () {
            var timeInMinutes = dayjs_min(Date.now() - _this12.startedTime.getTime()).format("mm:ss");
            cb(timeInMinutes, _this12.startedTime);
          }, 0);
        }
        /**
         * Reset timer
         */

      }, {
        key: "reset",
        value: function reset() {
          this.start(this.callbackFunction);
        }
        /**
         * delete timer
         */

      }, {
        key: "delete",
        value: function _delete() {
          clearInterval(this.intervalId);
        }
      }]);

      return Timer;
    }();

    var ChatMessagesLogic = /*#__PURE__*/function () {
      function ChatMessagesLogic() {
        _classCallCheck(this, ChatMessagesLogic);
      }

      _createClass(ChatMessagesLogic, null, [{
        key: "setScrollToBot",

        /**
         * */
        value: function setScrollToBot(callback) {
          this.scrollToBotCallback = callback;
        }
        /**
         * */

      }, {
        key: "safeScrollToBot",
        value: function safeScrollToBot() {
          if (typeof this.scrollToBotCallback === 'function') {
            this.scrollToBotCallback();
          }
        }
      }]);

      return ChatMessagesLogic;
    }();

    var ChatDictionaryService = function ChatDictionaryService() {
      _classCallCheck(this, ChatDictionaryService);
    };

    ChatDictionaryService.dictionary$ = new BehaviorSubject(null);
    var cntModuleChatCss = ".wrapper-chat.sc-cnt-module-chat{-webkit-box-shadow:0 0 10px 1px #828282;box-shadow:0 0 10px 1px #828282;border-radius:10px;width:400px;overflow:hidden;height:calc(100vh - 130px);background-color:#fff}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 170px)}.drop-file-wrapper.sc-cnt-module-chat{height:calc(100vh - 177px)}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 370px)}.content-chat.sc-cnt-module-chat .personal-footer.sc-cnt-module-chat .footer-wrapper.sc-cnt-module-chat{border-radius:10px 10px 5px 5px}.content-chat.sc-cnt-module-chat .profile.sc-cnt-module-chat .mobile.sc-cnt-module-chat{height:100vh;overflow:auto}@media (max-width: 414px){.wrapper-chat.sc-cnt-module-chat{border-radius:0px}.wrapper-chat.sc-cnt-module-chat{width:414px;height:100vh}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 215px)}}.wrapper-modal.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:column;flex-direction:column;position:fixed;top:2%;right:2%;z-index:999}.message.sc-cnt-module-chat{font-size:14px;height:21px;overflow:hidden;width:260px;margin-top:5px;white-space:nowrap;cursor:pointer}.user.sc-cnt-module-chat{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:end;align-items:flex-end}.user-img.sc-cnt-module-chat{width:20%;margin:auto}.user-img.sc-cnt-module-chat .img.sc-cnt-module-chat{width:43px;height:43px;border-radius:50%;background-size:cover;margin:auto}.user-info.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:90%}.user-info.sc-cnt-module-chat .name.sc-cnt-module-chat{font-weight:500;font-size:13px}.sc-cnt-module-chat::-webkit-scrollbar{width:5px}.sc-cnt-module-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-cnt-module-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-cnt-module-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}@media (max-width: 414px){.wrapper-modal.sc-cnt-module-chat{top:0%;right:0%;max-width:414px}.wrapper-chat.sc-cnt-module-chat{width:414px}.personal-messages.sc-cnt-module-chat{height:80vh}.users.sc-cnt-module-chat{height:80vh}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 40px)}}@media (max-width: 375px){.wrapper-chat.sc-cnt-module-chat{max-width:375px;padding-right:0px}.users.sc-cnt-module-chat{padding:0px 10px}.new-mess.sc-cnt-module-chat{right:12%}}@media (max-width: 320px){.wrapper-chat.sc-cnt-module-chat{max-width:320px}.chat-header.sc-cnt-module-chat a.sc-cnt-module-chat{right:25%}.message-date.sc-cnt-module-chat{font-size:11px}.users.sc-cnt-module-chat{padding:0px 25px}.personal-messages.sc-cnt-module-chat{padding:0 10px}}";

    var CntModuleChat = /*#__PURE__*/function () {
      function CntModuleChat(hostRef) {
        var _this13 = this;

        _classCallCheck(this, CntModuleChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef); // /**
        //  * Заголовок для чата
        //  * */
        // @Prop() titleModule: TitleModuleInterface;

        /**
         * добавляем печатающий
         * */

        this.writing = [];
        /**
         * видимость
         * */

        this.visibleState = true;
        /**
         * select content default
         * */

        this.chatViewState = _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].dialogs; //============================================================================================

        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * массив данных для контактов
         * */

        this.contactsState = this.contacts;
        /**
         * массив данных категорий
         * */

        this.categoriesState = this.categories;
        /**
         * массив данных диалогов
         * */

        this.dialogsState = this.dialogs;
        /**
         * массив данных персонального чата
         * */

        this.messageState = this.message;
        /**
         * Select show content
         * */

        this.ShowContent = function (content) {
          // console.log("ShowContent", content);
          switch (content) {
            case "dialogs":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users-wrapper", {
                dialogs: _this13.dialogsState,
                categories: _this13.categoriesState,
                onClickToCategory: function onClickToCategory(item) {
                  return _this13.safeFiltersDialog(_this13.lastSearchDialog, item.detail, _this13.dialogs);
                },
                onClickToDialog: function onClickToDialog(item) {
                  return _this13.clickToDialogHandler(item.detail);
                },
                onClickToFilesBtn: function onClickToFilesBtn() {
                  return _this13.clickToFilesBtnHandler();
                },
                onSearchDialog: function onSearchDialog(item) {
                  return _this13.safeFiltersDialog(item.detail, _this13.lastClickedCategory, _this13.dialogs);
                },
                onSendNewMessModal: function onSendNewMessModal() {
                  return _this13.sendNewMessModal();
                }
              });

            case "personal":
              return (// <div class='drop-file-wrapper' >
                //   <s-adam-copying></s-adam-copying>
                // </div>
                Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-personal", {
                  chatPresenceState: _this13.chatPresenceState,
                  openedDialog: _this13.openedDialog,
                  chatActionState: _this13.chatActionState,
                  writing: _this13.writing,
                  canRecordAudio: _this13.canRecordAudio,
                  onSendTextMessage: function onSendTextMessage() {
                    return _this13.scrollMessageViewToBot();
                  },
                  dialogs: _this13.dialogsState,
                  message: _this13.messageState,
                  onSearchPersonalMessages: function onSearchPersonalMessages(e) {
                    return _this13.searchPersonalMessages(e.detail);
                  },
                  onClickToShowDialogs: function onClickToShowDialogs() {
                    return _this13.clickToShowDialogsHandler();
                  },
                  onClickToUserProfile: function onClickToUserProfile() {
                    return _this13.clickToUserProfileHandler();
                  },
                  onCancelSearchPersonal: function onCancelSearchPersonal() {
                    return _this13.cancelSearchPersonal();
                  }
                })
              );

            case "files":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files-wrapper", {
                // onClickToLink={(item) => this.clickToLink(item.detail)}
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this13.clickToShowDialogsHandler();
                }
              });

            case "profile":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", {
                theme: "module",
                categories: _this13.categoriesState,
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this13.clickToShowDialogsHandler();
                },
                onClickToShowFolders: function onClickToShowFolders() {
                  return _this13.clickToShowFoldersHandler();
                }
              });

            case "contacts":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", {
                theme: "module",
                contacts: _this13.contacts,
                // onSearchContact={(detail) => this.searchContact({ detail })}
                onClickToShowDialogs: function onClickToShowDialogs() {
                  return _this13.clickToShowDialogsHandler();
                }
              });

            case "folders":
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", {
                onCreateFolder: function onCreateFolder(e) {
                  return _this13.createFolderHandler(e.detail);
                },
                dialogs: _this13.dialogsState,
                onClickToUserProfile: function onClickToUserProfile() {
                  return _this13.clickToUserProfileHandler();
                }
              });
          }
        };

        this.showFullChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 7);
        this.createFolder = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.chatViewStateChange = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "chatViewStateChange", 7);
      }
      /**
       * позволяет установить печатающие данные
       * */


      _createClass(CntModuleChat, [{
        key: "setWritingState",
        value: function () {
          var _setWritingState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(item) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.writing = item ? [item] : null;

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));

          function setWritingState(_x) {
            return _setWritingState.apply(this, arguments);
          }

          return setWritingState;
        }()
        /**
         * меняет статус (присутстия собеседников или контакта) в чате
         * */

      }, {
        key: "updateChatPresenceState",
        value: function () {
          var _updateChatPresenceState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(item) {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.chatPresenceState = item;

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));

          function updateChatPresenceState(_x2) {
            return _updateChatPresenceState.apply(this, arguments);
          }

          return updateChatPresenceState;
        }()
        /**
         * меняет статусы действия текущих (печатает, записывает и т.д.)
         * */

      }, {
        key: "updateChatActionState",
        value: function () {
          var _updateChatActionState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(item) {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    this.chatActionState = item;

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));

          function updateChatActionState(_x3) {
            return _updateChatActionState.apply(this, arguments);
          }

          return updateChatActionState;
        }()
        /**
         * скрывает весь блок что бы на экране не было вообще видно
         * */

      }, {
        key: "hide",
        value: function () {
          var _hide = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.visibleState = false;

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));

          function hide() {
            return _hide.apply(this, arguments);
          }

          return hide;
        }()
        /**
         * позволяет активировать/деактивароть возможность записи аудио
         * */

      }, {
        key: "activeRecordAudioState",
        value: function () {
          var _activeRecordAudioState = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(state) {
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.canRecordAudio = state;

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));

          function activeRecordAudioState(_x4) {
            return _activeRecordAudioState.apply(this, arguments);
          }

          return activeRecordAudioState;
        }()
        /**
         * позволяет активировать/деактивароть возможность октрытие приложение
         * */

      }, {
        key: "activeShowFullChat",
        value: function () {
          var _activeShowFullChat = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(state) {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    this.disableShowFullChatState = !state;

                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));

          function activeShowFullChat(_x5) {
            return _activeShowFullChat.apply(this, arguments);
          }

          return activeShowFullChat;
        }()
        /**
         * сменить окно показа
         * */

      }, {
        key: "changeViewToShow",
        value: function () {
          var _changeViewToShow = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(state) {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.chatViewState = state;

                  case 1:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));

          function changeViewToShow(_x6) {
            return _changeViewToShow.apply(this, arguments);
          }

          return changeViewToShow;
        }()
        /**
         * скролит вниз окно сообщений
         * */

      }, {
        key: "safeScrollToBotMessageView",
        value: function () {
          var _safeScrollToBotMessageView = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    this.scrollMessageViewToBot();

                  case 1:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));

          function safeScrollToBotMessageView() {
            return _safeScrollToBotMessageView.apply(this, arguments);
          }

          return safeScrollToBotMessageView;
        }()
        /**
         * показывает весь блок после скрытия
         * */

      }, {
        key: "show",
        value: function () {
          var _show = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    // show a prompt
                    this.visibleState = true;

                  case 1:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));

          function show() {
            return _show.apply(this, arguments);
          }

          return show;
        }()
        /**
         * показывает только кнопку
         * */

      }, {
        key: "close",
        value: function () {
          var _close = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    this.showChat(false);

                  case 1:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10, this);
          }));

          function close() {
            return _close.apply(this, arguments);
          }

          return close;
        }()
        /**
         * открывает блок чатов
         * */

      }, {
        key: "open",
        value: function () {
          var _open = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    this.showChat(true);

                  case 1:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this);
          }));

          function open() {
            return _open.apply(this, arguments);
          }

          return open;
        }()
        /**
         * */

      }, {
        key: "openDialog",
        value: function () {
          var _openDialog = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12(dialog) {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.open();
                    this.clickToDialogHandler(dialog, true);

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));

          function openDialog(_x7) {
            return _openDialog.apply(this, arguments);
          }

          return openDialog;
        }()
      }, {
        key: "watchDictionaryHandler",
        value: function watchDictionaryHandler(newValue) {
          this.updateDictionary(newValue);
        }
      }, {
        key: "watchDialogsHandler",
        value: function watchDialogsHandler(newValue) {
          this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, newValue);
        }
      }, {
        key: "watchMessageHandler",
        value: function watchMessageHandler(newValue, oldValue) {
          // console.log("The new value of activated is: ", { newValue, oldValue });
          console.log("The new value of activated is: ", {
            newValue: newValue,
            oldValue: oldValue
          });
          this.messageState = this.message;
        }
      }, {
        key: "watchCategoriesHandler",
        value: function watchCategoriesHandler(newValue) {
          this.categoriesState = newValue;
          this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, this.dialogs);
        }
      }, {
        key: "componentDidLoad",
        value: function componentDidLoad() {
          this.updateDictionary(this.dictionary);
        }
      }, {
        key: "render",
        value: function render() {
          var _this14 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["H"], {
            style: {
              display: !this.visibleState ? "none" : null
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-modal"
          }, this.openState ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "wrapper-chat"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-header", {
            disableShowFullChatState: this.disableShowFullChatState,
            onShowFullChat: function onShowFullChat() {
              return _this14.showFullChatHandler();
            },
            onClose: function onClose() {
              return _this14.onClose();
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-wrapper"
          }, this.ShowContent(this.chatViewState))) : "", Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("btn-wrapper", {
            onClickToShowChat: function onClickToShowChat() {
              return _this14.showChat();
            },
            showChat: this.openState,
            dialogs: this.countNewMess(this.dialogs)
          })));
        }
        /**
         *
         * */

      }, {
        key: "updateDictionary",
        value: function updateDictionary(newValue) {
          ChatDictionaryService.dictionary$.next(newValue); // console.log("changed - dictionary");
        }
      }, {
        key: "countNewMess",
        value: function countNewMess(array) {
          var counter = 0;
          array.map(function (item) {
            counter += item.newMessage;
          });
          return counter;
        }
        /**
         * */
        // public clickToCategory(value: ChatCategoryInterface) {
        //   this.dialogsState = filterDialogsByCategory(value, this.dialogs);
        // }

        /**
         * dialogue search
         * */

      }, {
        key: "safeFiltersDialog",
        value: function safeFiltersDialog(searchValue, category, allDialogs) {
          this.lastSearchDialog = searchValue;
          this.lastClickedCategory = category;
          var filteredDialogsBySearchValue = allDialogs;

          if (!this.disableInnerSearchDialogsState) {
            filteredDialogsBySearchValue = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterDialogsBySearchValue"])(searchValue, allDialogs);
          }

          this.dialogsState = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterDialogsByCategory"])(category, filteredDialogsBySearchValue);
        }
        /**
         * search for private messages
         * */

      }, {
        key: "searchPersonalMessages",
        value: function searchPersonalMessages(value) {
          if (!this.disableInnerSearchMessagesState) {
            this.messageState = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterMessageBySearchValue"])(value, this.message);
          }
        }
      }, {
        key: "createFolderHandler",
        value: function createFolderHandler(item) {
          // return item;
          console.log("createFolderHandler", item);
        }
        /**
         * Метод отмена поиска
         * **/

      }, {
        key: "cancelSearchPersonal",
        value: function cancelSearchPersonal() {
          this.messageState = this.message;
        }
        /**
         * Метод для изменения состояния чата
         * */

      }, {
        key: "showChat",
        value: function showChat() {
          var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !this.openState;
          this.openState = state;
        }
        /**
         * Метод для закрытия чата
         * */

      }, {
        key: "onClose",
        value: function onClose() {
          this.openState = false;
        }
        /**
         * click to Link
         * */

      }, {
        key: "clickToLinkHandler",
        value: function clickToLinkHandler() {
          return this.chatViewState;
        }
        /**
         *
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler(dialog, pseudoClick) {
          if (pseudoClick) {
            this.clickToDialog.emit(dialog);
          }

          this.openedDialog = dialog;
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].personal);
        }
        /**
         *
         * */

      }, {
        key: "clickToFilesBtnHandler",
        value: function clickToFilesBtnHandler() {
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].files);
        }
        /**
         *
         * */

      }, {
        key: "showFullChatHandler",
        value: function showFullChatHandler() {
          this.showFullChat.emit({
            view: this.chatViewState,
            data: this.chatViewState === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].personal ? this.openedDialog : null
          });
        }
        /**
         *
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].dialogs);
        }
        /**
         *
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].profile);
        }
        /**
         *
         * */

      }, {
        key: "sendNewMessModal",
        value: function sendNewMessModal() {
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].contacts);
        }
        /**
         *
         * */

      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {
          this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].folders);
        }
        /**
         *
         * */

      }, {
        key: "scrollMessageViewToBot",
        value: function scrollMessageViewToBot() {
          ChatMessagesLogic.safeScrollToBot();
        }
        /**
         * */

      }, {
        key: "updateViewState",
        value: function updateViewState(state) {
          this.chatViewStateChange.emit(this.chatViewState = state);
        }
      }, {
        key: "el",
        get: function get() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "dictionary": ["watchDictionaryHandler"],
            "dialogs": ["watchDialogsHandler"],
            "message": ["watchMessageHandler"],
            "categories": ["watchCategoriesHandler"]
          };
        }
      }]);

      return CntModuleChat;
    }();

    CntModuleChat.style = cntModuleChatCss;
    var contactCardCss = ".m-contact-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-contact-card{margin-right:20px;text-align:center}.img-user.sc-contact-card .img.sc-contact-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-contact-card{width:80%;overflow:hidden}.comp.sc-contact-card .unfo-user.sc-contact-card{width:auto}.name-user.sc-contact-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-contact-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-contact-card{text-align:center}.data-message.sc-contact-card .date.sc-contact-card{font-size:10px;color:#979eab}.data-message.sc-contact-card .new-message.sc-contact-card{font-size:10px;color:#979eab}.add-new-message.sc-contact-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-contact-card .info-card.sc-contact-card{width:70%}.comp.sc-contact-card .m-contact-card.sc-contact-card{padding:20px 10px;margin:0}.comp.sc-contact-card .m-contact-card.sc-contact-card:hover{background-color:white}.comp.sc-contact-card .data-message.sc-contact-card{height:100%}";

    var ContactCard = /*#__PURE__*/function () {
      function ContactCard(hostRef) {
        _classCallCheck(this, ContactCard);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
      }

      _createClass(ContactCard, [{
        key: "render",
        value: function render() {
          var _this15 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-contact-card",
            onClick: function onClick() {
              return _this15.clickToDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img",
            style: {
              backgroundImage: "url(".concat(this.contact.img, ")")
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "unfo-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name-user"
          }, this.contact.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-user"
          }, " ", "last seen ", this.createSendTime(this.contact.time.created)))))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          // console.log(this.theme)
          return _defineProperty({}, this.theme, true);
        }
        /**
         * click to contact
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler() {
          this.clickToContact.emit(this.contact);
        }
        /*
         * last visit time
         * **/

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          } // выводим время в минутах/часах


          return "".concat(hours, " : ").concat(minutes);
        }
      }]);

      return ContactCard;
    }();

    ContactCard.style = contactCardCss;
    var contactsListCss = "";

    var ContactsList = /*#__PURE__*/function () {
      function ContactsList(hostRef) {
        _classCallCheck(this, ContactsList);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для модульного/мобильного чата
         * */

        this.theme = "mobile";
        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
        this.clickToContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
      }
      /**
       * при изменении входящих контактов фильтрует данные заново
       * */


      _createClass(ContactsList, [{
        key: "watchContactsHandler",
        value: function watchContactsHandler(newValue) {
          this.filterContacts(this.lastSearchValue, newValue);
        }
      }, {
        key: "componentWillRender",
        value: function componentWillRender() {
          this.filterContacts(this.lastSearchValue);
        }
      }, {
        key: "render",
        value: function render() {
          var _this16 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", {
            onSearchContact: function onSearchContact(e) {
              return _this16.filterContacts(e.detail);
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-body", {
            theme: this.theme,
            contacts: this.contactsFiltered
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-footer", {
            theme: this.theme
          }));
        }
        /**
         *
         * */

      }, {
        key: "filterContacts",
        value: function filterContacts(value) {
          var allContacts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.contacts;
          this.lastSearchValue = value;

          if (!this.disableInnerSearchContactState) {
            this.contactsFiltered = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterContactBySearchValue"])(value, allContacts);
          }
        }
      }], [{
        key: "watchers",
        get: function get() {
          return {
            "contacts": ["watchContactsHandler"]
          };
        }
      }]);

      return ContactsList;
    }();

    ContactsList.style = contactsListCss;
    var contactsListBodyCss = ".contacts-list-body.sc-contacts-list-body{padding:20px 20px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 175px);overflow:auto}.contacts-list-body.sc-contacts-list-body{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 155px);overflow:auto}.sc-contacts-list-body::-webkit-scrollbar{width:0px;background:transparent}.module.sc-contacts-list-body .contacts-list-body.sc-contacts-list-body{height:calc(100vh - 325px)}";

    var ContactsListBody = /*#__PURE__*/function () {
      function ContactsListBody(hostRef) {
        _classCallCheck(this, ContactsListBody);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной/Комп версии
         * */

        this.theme = "mobile";
      }

      _createClass(ContactsListBody, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-body"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ContactCard$1, {
            contacts: this.contacts
          })));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return ContactsListBody;
    }();
    /**
     * Компонент высшего порядка для передачи данных о контактах
     * */


    var ContactCard$1 = function ContactCard$1(props) {
      return props.contacts.map(function (item) {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", {
          contact: item
        });
      });
    };

    ContactsListBody.style = contactsListBodyCss;
    var contactsListHeaderCss = ".contacts-list-header.sc-contacts-list-header{border-bottom:1px solid #eaeaea;background-color:#eaeaea45;padding:20px 0px 10px 0px}.comp.sc-contacts-list-header .contacts-list-header.sc-contacts-list-header{background-color:transparent;padding:0 0 20px 0;border-bottom:none}.comp.sc-contacts-list-header{margin:0 -20px;padding:0 20px}.custom-link.sc-contacts-list-header{cursor:pointer}.contacts-list-description.sc-contacts-list-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0px 20px}.comp.sc-contacts-list-header .contacts-list-description.sc-contacts-list-header{display:none}.contacts-list-arraw-back.sc-contacts-list-header i.sc-contacts-list-header{font-size:14px;color:#979eab}.contacts-list-title.sc-contacts-list-header{font-weight:600;color:#4c567d;-ms-flex-align:center;align-items:center;width:100%;margin-left:-12px;text-align:center}.contacts-list-input.sc-contacts-list-header{text-align:center;margin:10px 0px;position:relative;padding:0 20px}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header{margin:0}.contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:left;border-radius:0;background-color:white;width:100%;padding:10px 40px;font-size:13px}.contacts-list-input.sc-contacts-list-header i.sc-contacts-list-header{position:absolute;top:30%;z-index:2;left:39%;font-size:14px;color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-moz-placeholder{color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-webkit-input-placeholder{color:#979eab}";

    var ContactsListHeader = /*#__PURE__*/function () {
      function ContactsListHeader(hostRef) {
        _classCallCheck(this, ContactsListHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
      }

      _createClass(ContactsListHeader, [{
        key: "render",
        value: function render() {
          var _this17 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-description"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-arraw-back custom-link ",
            onClick: function onClick() {
              return _this17.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-title"
          }, "Contacts")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "contacts-list-input"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "Search..",
            onInput: function onInput(e) {
              return _this17.searchContactHandler(e.target.value);
            }
          }))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * show Dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
        /**
         *
         * */

      }, {
        key: "searchContactHandler",
        value: function searchContactHandler(value) {
          this.searchContact.emit(value);
        }
      }]);

      return ContactsListHeader;
    }();

    ContactsListHeader.style = contactsListHeaderCss;
    var dialogCardCss = ".m-dialog-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-dialog-card{margin-right:20px;text-align:center}.img-user.sc-dialog-card .img.sc-dialog-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-dialog-card{width:80%;overflow:hidden}.mobile.sc-dialog-card .unfo-user.sc-dialog-card{max-width:250px;overflow:hidden}.name-user.sc-dialog-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-dialog-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-dialog-card{text-align:center}.data-message.sc-dialog-card .date.sc-dialog-card{font-size:10px;color:#979eab}.data-message.sc-dialog-card .new-message.sc-dialog-card{font-size:10px;color:#979eab}.add-new-message.sc-dialog-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-dialog-card .info-card.sc-dialog-card{width:70%}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card{padding:20px 10px;margin:0}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card:hover{background-color:white}.comp.sc-dialog-card .data-message.sc-dialog-card{height:100%}@media (max-width: 320px){.info-card.sc-dialog-card{max-width:210px}}";

    var DialogCard = /*#__PURE__*/function () {
      function DialogCard(hostRef) {
        _classCallCheck(this, DialogCard);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * карточка диалога
         * */

        this.theme = "mobile";
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
      }

      _createClass(DialogCard, [{
        key: "render",
        value: function render() {
          var _this18 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-dialog-card",
            onClick: function onClick() {
              return _this18.clickToDialogHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "img-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.mess.online ? "img online" : "img",
            style: {
              backgroundImage: "url(".concat(this.mess.img, ")")
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "unfo-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "name-user"
          }, this.mess.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "message-user"
          }, this.mess.mess)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "data-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "date"
          }, " ", this.createSendTime(this.mess.time.created)), this.showNewMess(this.mess)))));
        }
      }, {
        key: "showNewMess",
        value: function showNewMess(dialog) {
          if (dialog.newMessage > 0) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "add-new-message"
            }, " ", dialog.newMessage);
          }
        }
        /**
         * Управление по клику на диалог
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler() {
          // this.clickToDialog.emit({ data: this.mess });
          this.clickToDialog.emit(this.mess);
        } // public clickToLinkHandler() {
        //   this.clickToLink.emit({place: ChatLinkTypeEnum.showPersonalDialog, data: this.mess })
        // }

        /**
         * Метод выобра темы для ПК/Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * Метод вывода времени отправки сообщения
         * */

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          } // выводим время в минутах/часах


          return "".concat(hours, " : ").concat(minutes);
        }
      }]);

      return DialogCard;
    }();

    DialogCard.style = dialogCardCss;
    var dialogCategoriesCss = "@charset \"UTF-8\";.btns-nav.sc-dialog-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:scroll;overflow-y:hidden;height:30px}.btns-nav.sc-dialog-categories span.sc-dialog-categories{cursor:pointer;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;font-weight:600;color:#979eab;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;padding:0 20px;height:30px;border-bottom:1px solid #ccc}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover,.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{border-bottom:1px solid #5780f7}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover{color:#5780f7}.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{color:black}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories{border-bottom:none}.comp.sc-dialog-categories{margin:0 -20px}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{padding-bottom:10px}.mobile.sc-dialog-categories .btns-nav.sc-dialog-categories{margin-top:10px}.module.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0px 20px;height:30px;text-align:center;font-weight:600;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out}.module.sc-dialog-categories .btns-nav.sc-dialog-categories{-ms-flex-pack:start;justify-content:start}.sc-dialog-categories::-webkit-scrollbar{height:0px}";

    var DialogCategories = /*#__PURE__*/function () {
      function DialogCategories(hostRef) {
        _classCallCheck(this, DialogCategories);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         *
         * */

        this.theme = "comp";
        /**
         *
         * */

        this.categories = [];
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
      }

      _createClass(DialogCategories, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btns-nav"
          }, this.getCategories(this.categories)));
        }
        /**
         * Метод получения названий категорий
         * */

      }, {
        key: "getCategories",
        value: function getCategories(array) {
          var _this19 = this;

          return array.map(function (item) {
            var _a;

            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": {
                active: item.id === ((_a = _this19.lastClickedCategory) === null || _a === void 0 ? void 0 : _a.id)
              },
              onClick: function onClick() {
                return _this19.clickToCategoryHandler(item);
              }
            }, item.name);
          });
        }
        /**
         * */

      }, {
        key: "clickToCategoryHandler",
        value: function clickToCategoryHandler(item) {
          this.clickToCategory.emit(this.lastClickedCategory = item);
        }
        /**
         *
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return DialogCategories;
    }();

    DialogCategories.style = dialogCategoriesCss;
    var footerAudioCss = ".record-dot.sc-footer-audio{width:10px;height:10px;background-color:#ff7e7f;border-radius:100%}.personal-footer.sc-footer-audio{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.audio.sc-footer-audio{width:20px;text-align:center;cursor:pointer}.input-wrapper.sc-footer-audio{width:100%}.input-wrapper.sc-footer-audio input.sc-footer-audio{width:100%;text-align:center;padding:10px 0;border:none;font-size:16px;outline:none;color:#4c567d}input.input-audio.sc-footer-audio{text-align:center !important}.comp.sc-footer-audio .footer-wrapper.sc-footer-audio{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-audio{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.recording-btn.sc-footer-audio{display:block;width:40px;height:40px;border-radius:100%;background-color:#bacbe3;opacity:0.2;position:absolute;right:10px}.c-chat-microphone.sc-footer-audio{z-index:1;position:absolute;top:24px;right:23px}.timer.sc-footer-audio{margin-left:10px}.record-audio.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.module.sc-footer-audio .personal-footer.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}";

    var FooterAudio = /*#__PURE__*/function () {
      function FooterAudio(hostRef) {
        var _this20 = this;

        _classCallCheck(this, FooterAudio);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом CSS
         */

        this.theme = "comp";
        /**
         * Курсор за пределами инпута остановка таймера
         * */

        this.mouseUpCallback = function (event) {
          var state = _this20.outInputTag.contains(event.target);

          _this20.recordFinished.emit(state);
        };

        this.recordFinished = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "recordFinished", 7);
      }

      _createClass(FooterAudio, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          document.addEventListener("mouseup", this.mouseUpCallback);
          this.startTimer();
        }
      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          document.removeEventListener("mouseup", this.mouseUpCallback);
        }
      }, {
        key: "render",
        value: function render() {
          var _this21 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "footer-wrapper",
            onMouseLeave: function onMouseLeave(e) {
              return _this21.mouseOutInput(e);
            },
            ref: function ref(el) {
              return _this21.outInputTag = el;
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "record-audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "record-dot"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "timer",
            ref: function ref(el) {
              return _this21.timerElement = el;
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            "class": "input-audio",
            type: "text",
            placeholder: "Release outside this field to cancel",
            readonly: true
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "audio",
            id: "audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-microphone"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "recording-btn"
          }))));
        }
        /**
         * смена класса
         */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * Старт таймера
         * */

      }, {
        key: "startTimer",
        value: function startTimer() {
          var _this22 = this;

          var timer = new Timer();
          timer.start(function (time) {
            {
              _this22.timerElement.innerText = time;
            }
          });
        }
        /**
         * Событие при MouseLeave
         * */

      }, {
        key: "mouseOutInput",
        value: function mouseOutInput(e) {
          console.log("mouseOutInput", e);
        }
      }]);

      return FooterAudio;
    }();

    FooterAudio.style = footerAudioCss;
    var footerTextCss = ".personal-footer.sc-footer-text{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-text{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.file.sc-footer-text,.audio.sc-footer-text{width:20px;text-align:center;cursor:pointer}.file.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.audio.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.input-wrapper.sc-footer-text{width:100%;padding:0px 15px}.input-wrapper.sc-footer-text input.sc-footer-text{width:100%;text-align:center;color:#4c567d;padding:10px 0;border:none;font-size:16px;outline:none}.comp.sc-footer-text .footer-wrapper.sc-footer-text{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.comp.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .personal-footer.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.mobile.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-text{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.c-chat-microphone.sc-footer-text{z-index:1;position:absolute;top:24px;right:23px}";

    var FooterText = /*#__PURE__*/function () {
      function FooterText(hostRef) {
        _classCallCheck(this, FooterText);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом
         */

        this.theme = "comp";
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * */

        this.showAudioSendButton = true;
        this.showSendFileFooter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showSendFileFooter", 7);
        this.showRecordAudioFooter = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showRecordAudioFooter", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
      }
      /**
       *
       * */


      _createClass(FooterText, [{
        key: "mouseEnter",
        value: function mouseEnter(event) {
          console.log("mouseEnter", event);
        }
      }, {
        key: "render",
        value: function render() {
          var _this23 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "footer-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file",
            onClick: function onClick() {
              return _this23.showSendFileFooter.emit();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-paperclip"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "input-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
            onSubmit: function onSubmit(e) {
              return _this23.sendMessageFromForm(e);
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            ref: function ref(el) {
              return _this23.inputElement = el;
            },
            onInput: function onInput(e) {
              return _this23.switchIconInput(e.target.value);
            },
            placeholder: "Type something ..."
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "audio",
            id: "audio"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SendButtonTag, {
            showAudio: this.canRecordAudio && this.showAudioSendButton,
            sendMessageFromButton: this.sendMessageFromButton.bind(this),
            clickOnAudio: this.showRecordAudioFooter
          })))));
        }
        /**
         * Смена класса
         */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * when sending message-from
         * */

      }, {
        key: "sendingNewMess",
        value: function sendingNewMess() {
          var input = this.inputElement;

          if (input.value === "") {
            return false;
          } else {
            // скрипт отправки сообщения
            // console.log("send mess:", input.value);
            this.sendTextMessage.emit(input.value); // скрипт отправки сообщения

            this.switchIconInput(input.value = "");
          }
        }
        /**
         * send message from form
         * */

      }, {
        key: "sendMessageFromForm",
        value: function sendMessageFromForm(e) {
          e.preventDefault();
          this.sendingNewMess();
        }
        /**
         * send message from send button
         * */

      }, {
        key: "sendMessageFromButton",
        value: function sendMessageFromButton() {
          this.sendingNewMess();
        }
        /**
         * Функция для для отправки сообщения
         * */

      }, {
        key: "switchIconInput",
        value: function switchIconInput(value) {
          this.showAudioSendButton = !value.replace(/[\t\n\r ]+/g, "").length;
        }
      }]);

      return FooterText;
    }();
    /**
     * Смена иконки микрофона на стрелку
     * */


    var SendButtonTag = function SendButtonTag(props) {
      return (props === null || props === void 0 ? void 0 : props.showAudio) ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        "class": "c-chat c-chat-microphone",
        onMouseDown: function onMouseDown() {
          return props.clickOnAudio.emit();
        }
      }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
        "class": "c-chat c-chat-location-arrow",
        onClick: function onClick() {
          return props.sendMessageFromButton();
        }
      });
    };

    FooterText.style = footerTextCss;
    var mChatFooterCss = ".m-chat-footer.sc-m-chat-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:15px;padding:0px 15px}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer{cursor:pointer}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer:hover{color:rgb(87, 128, 247)}.module.sc-m-chat-footer .showContacts.sc-m-chat-footer{display:none}";

    var MChatFooter = /*#__PURE__*/function () {
      function MChatFooter(hostRef) {
        _classCallCheck(this, MChatFooter);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */

        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
      }

      _createClass(MChatFooter, [{
        key: "render",
        value: function render() {
          var _this24 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "m-chat-footer"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showDialogs",
            onClick: function onClick() {
              return _this24.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-comment"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showContacts",
            onClick: function onClick() {
              return _this24.clickToShowContactsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-user-friends"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "showMenuBar",
            onClick: function onClick() {
              return _this24.clickToShowMenuBarHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-bars"
          }))));
        }
        /**
         * Метод выобра темы для Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         * click to show dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
        /**
         * click to show Contacts
         * */

      }, {
        key: "clickToShowContactsHandler",
        value: function clickToShowContactsHandler() {
          this.clickToShowContacts.emit();
        }
        /**
         * click to show Contacts
         * */

      }, {
        key: "clickToShowMenuBarHandler",
        value: function clickToShowMenuBarHandler() {
          this.clickToShowMenuBar.emit();
        }
      }]);

      return MChatFooter;
    }();

    MChatFooter.style = mChatFooterCss;
    var messageFromCss = ".from-mess-wrapper.sc-message-from .mess-img.sc-message-from{height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.from-mess-wrapper.sc-message-from{margin:15px 0px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.from-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:100%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;min-height:42px}.from-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.to-me-mess-wrapper.sc-message-from{margin:15px 0px}.to-me-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.to-me-mess-wrap.sc-message-from .img.sc-message-from{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between;background:white;min-height:42px}.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:0px 20px 20px 20px;background-position:center;background-size:cover}.user-mess.sc-message-from .check.sc-message-from{font-size:10px;margin-left:5px}.system-message.sc-message-from{text-align:center;font-size:13px;color:#969696;margin:25px 0px;border-bottom:1px solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.system-message.sc-message-from div.sc-message-from{border:1px solid #969696;padding:5px 8px;border-radius:15px;background-color:#fff;margin-bottom:-15px}.module.sc-message-from .personal-message.sc-message-from .to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:260px}.module.sc-message-from .personal-message.sc-message-from .from-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .to-me-mess-wrap.sc-message-from{max-width:315px}@media (max-width: 414px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:230px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:230px}}@media (max-width: 320px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:200px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:200px}}";

    var MessageFrom = /*#__PURE__*/function () {
      function MessageFrom(hostRef) {
        _classCallCheck(this, MessageFrom);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageFrom, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.message ? this.renderMessage(this.message) : '');
        }
        /**
         * */

      }, {
        key: "getWritingMessage",
        value: function getWritingMessage(writing) {
          if (!(writing === null || writing === void 0 ? void 0 : writing.length)) {
            return '';
          } // @ts-ignore


          var message = {
            sender: {
              icon: writing[0].icon
            },
            type: _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].loading
          };
          return this.getToMeMessage(message);
        }
        /**
         *
         * */

      }, {
        key: "getToMeMessage",
        value: function getToMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "to-me-mess-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "to-me-mess-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "img",
            style: {
              backgroundImage: "url(".concat(message.sender.icon, ")")
            }
          }), this.createType(message)));
        }
        /**
         *
         * */

      }, {
        key: "getCenterMeMessage",
        value: function getCenterMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "system-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.checkTypeSystemMessage(message.content)));
        }
        /**
         *
         * */

      }, {
        key: "getFromMeMessage",
        value: function getFromMeMessage(message) {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "from-mess-wrapper "
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "from-mess-wrap"
          }, this.createType(message))));
        }
        /**
         * Определяем от кого сообщение
         * @param message
         */

      }, {
        key: "renderMessage",
        value: function renderMessage(message) {
          switch (message.direction) {
            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].fromMe:
              return this.getFromMeMessage(message);

            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].toMe:
              return this.getToMeMessage(message);

            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].center:
              return this.getCenterMeMessage(message);
          }
        }
        /**
         * Определяем тип сообщения
         * @param message
         */

      }, {
        key: "createType",
        value: function createType(message) {
          switch (message.type) {
            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].text:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "from-mess"
              }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-text", {
                checkSendMess: this.checkSendMess(message),
                createSendTime: this.createSendTime(message.time.created),
                message: message
              }));

            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].image:
              return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
                "class": "mess-img",
                style: {
                  backgroundImage: "url(".concat(this.message.content, ")")
                }
              }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-img", {
                checkSendMess: this.checkSendMess(message),
                message: message
              }));
            // case ChatMessageTypeEnum.loading:
            //   return (
            //     <div class="from-mess">
            //       <div id="circleG">
            //         <div id="circleG_1" class="circleG"></div>
            //         <div id="circleG_2" class="circleG"></div>
            //         <div id="circleG_3" class="circleG"></div>
            //       </div>
            //     </div>
            //   );
          }
        }
        /**
         * Метод вывода времени отправки
         * */

      }, {
        key: "createSendTime",
        value: function createSendTime(array) {
          var timeNow = array;
          var hours = timeNow.getHours();
          var minutes = timeNow.getMinutes(); // add zero for minutes

          if (minutes < 10) {
            minutes = "0" + minutes;
          }

          return "".concat(hours, " : ").concat(minutes);
        }
        /**
         * Проверка статуса доставки сообщения
         * */

      }, {
        key: "checkSendMess",
        value: function checkSendMess(array) {
          if (array.time.read) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check-double"
            }));
          } else if (array.time.delivery) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check"
            }));
          } else {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
              "class": "check"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
              "class": "c-chat c-chat-check"
            }));
          }
        }
        /**
         * Проверка на тип полученного системного сообщения
         * */

      }, {
        key: "checkTypeSystemMessage",
        value: function checkTypeSystemMessage(message) {
          if (typeof message === "string") {
            return message;
          } else if (typeof message === "number") {
            return dayjs_min(message).format("DD MMMM");
          }
        }
      }]);

      return MessageFrom;
    }();

    MessageFrom.style = messageFromCss;
    var messageImgCss = ".mess-img-content.sc-message-img{height:100%;position:relative}.check.sc-message-img{position:absolute;bottom:10px;right:20px;font-size:10px;color:#fff}";

    var MessageImg = /*#__PURE__*/function () {
      function MessageImg(hostRef) {
        _classCallCheck(this, MessageImg);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageImg, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-img-content"
          }, this.message.direction === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].fromMe ? this.checkSendMess : '');
        }
      }]);

      return MessageImg;
    }();

    MessageImg.style = messageImgCss;
    var messageTextCss = ".check.sc-message-text{font-size:10px;margin-left:5px}.text-wrapper.sc-message-text{-ms-flex:1;flex:1}.info-wrapper.sc-message-text{display:-ms-flexbox;display:flex;text-align:right;white-space:nowrap}.personal-mess-date.sc-message-text{font-size:10px;margin-left:10px}.mess-content-wrap.sc-message-text{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.module.sc-message-text to-me-mess-wrapper.sc-message-text{max-width:315px}";

    var MessageText = /*#__PURE__*/function () {
      function MessageText(hostRef) {
        _classCallCheck(this, MessageText);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MessageText, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mess-content-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "text-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "message-text"
          }, this.message.content)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "info-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "personal-mess-date"
          }, this.createSendTime), this.message.direction === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].fromMe ? this.checkSendMess : ""));
        }
      }]);

      return MessageText;
    }();

    MessageText.style = messageTextCss;
    var moduleChatCss = "";

    var ModuleChat = /*#__PURE__*/function () {
      function ModuleChat(hostRef) {
        _classCallCheck(this, ModuleChat);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"];
      }

      _createClass(ModuleChat, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this25 = this;

          window['ref'] = this.ref;
          setInterval(function () {
            // console.log(
            //   'messages setInterval',
            //
            // );
            _this25.messages = _toConsumableArray(_mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"]);
            _this25.dialogs = _toConsumableArray(_mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"]);
            _this25.dictionary = _this25.dictionary === _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["a"] : _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"]; // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore

            Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["f"])(_this25.ref2);
          }, 990000);
        }
      }, {
        key: "render",
        value: function render() {
          var _this26 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", {
            ref: function ref(el) {
              return _this26.ref = el;
            },
            categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"],
            dialogs: this.dialogs,
            contacts: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["b"],
            dictionary: this.dictionary,
            message: this.messages,
            onClickToDialog: function onClickToDialog(ev) {
              return _this26.clickToDialog(ev.detail);
            },
            onSendTextMessage: function onSendTextMessage(ev) {
              return _this26.sendTextMessage(ev.detail);
            },
            onShowFullChat: function onShowFullChat(ev) {
              return _this26.showFullChat(ev.detail);
            },
            disableInnerSearchDialogsState: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["e"],
            disableInnerSearchMessagesState: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["f"]
          });
        }
      }, {
        key: "clickToDialog",
        value: function clickToDialog(dialog) {
          this.messages = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"].map(function (message) {
            return Object.assign(Object.assign({}, message), {
              content: message.direction !== _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].center && message.type === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].text ? "".concat(dialog.name, "> ").concat(message.content) : message.content
            });
          }); // console.log(
          //   'clickToDialog [12]',
          //   dialog
          // );
        }
      }, {
        key: "showFullChat",
        value: function showFullChat(ev) {
          return ev; // console.log(
          //   'showFullChat',
          //   ev
          // )
        }
      }, {
        key: "sendTextMessage",
        value: function sendTextMessage(message) {
          // console.log(
          //   'sendTextMessage [2]',
          //   message
          // );
          this.messages = [].concat(_toConsumableArray(this.messages), [Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["createTextMessage"])(message, {
            uid: "test-id-2",
            icon: "https://via.placeholder.com/60x60?text=User",
            name: "Адам",
            phone: "79291234567"
          })]);
        }
      }, {
        key: "ref2",
        get: function get() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this);
        }
      }]);

      return ModuleChat;
    }();

    ModuleChat.style = moduleChatCss;
    var moduleHeaderCss = ".header-chat.sc-module-header{background-color:#ececec;padding:10px 20px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header{font-size:20px;color:#ccc;-webkit-transition:0.3s ease;transition:0.3s ease}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header:hover{color:#4c567d;cursor:pointer}.showFullChat.sc-module-header i.sc-module-header{color:#4c567d;cursor:pointer}";

    var ModuleHeader = /*#__PURE__*/function () {
      function ModuleHeader(hostRef) {
        _classCallCheck(this, ModuleHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.close = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "close", 7);
        this.showFullChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "showFullChat", 3);
      }
      /**
       *
       * */
      // @State() dictionary: any;
      //
      // componentDidLoad() {
      //   ChatDictionaryService.dictionary$.subscribe(
      //     (dictionary) => {
      //       this.dictionary = dictionary;
      //     }
      //   )
      // }


      _createClass(ModuleHeader, [{
        key: "render",
        value: function render() {
          var _this27 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-chat"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "showFullChat",
            style: {
              visibility: this.disableShowFullChatState ? 'hidden' : null
            },
            onClick: function onClick() {
              return _this27.showFullChatHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-expand"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-chat-title"
          }, "\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439 \u0447\u0430\u0442"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "close",
            onClick: function onClick() {
              return _this27.close.emit();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times-circle"
          })));
        }
        /**
         * Разворачивать полную версию чата при клике иконку
         * */

      }, {
        key: "showFullChatHandler",
        value: function showFullChatHandler() {
          if (!this.disableShowFullChatState) {
            this.showFullChat.emit();
          }
        }
      }]);

      return ModuleHeader;
    }();

    ModuleHeader.style = moduleHeaderCss;
    var modulePersonalCss = ".personal-wrapper.sc-module-personal .personal-footer.sc-module-personal .footer-wrapper.sc-module-personal{border-radius:15px 15px 0px 0px}";

    var ModulePersonal = /*#__PURE__*/function () {
      function ModulePersonal(hostRef) {
        _classCallCheck(this, ModulePersonal);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * */

        this.writing = [];
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.sendTextMessage = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendTextMessage", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
      }

      _createClass(ModulePersonal, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", {
            chatActionState: this.chatActionState,
            openedDialog: this.openedDialog,
            chatPresenceState: this.chatPresenceState,
            dialogs: this.dialogs,
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", {
            writing: this.writing,
            theme: "module",
            message: this.message
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", {
            canRecordAudio: this.canRecordAudio,
            theme: "module"
          }));
        }
      }]);

      return ModulePersonal;
    }();

    ModulePersonal.style = modulePersonalCss;
    var myComponentCss = ":host{display:block}";

    var MyComponent = /*#__PURE__*/function () {
      function MyComponent(hostRef) {
        _classCallCheck(this, MyComponent);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(MyComponent, [{
        key: "render",
        value: function render() {
          // return <mobile-chat></mobile-chat>;
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-chat", null); // return <s-adam-chat></s-adam-chat>;
        }
      }]);

      return MyComponent;
    }();

    MyComponent.style = myComponentCss;
    var personalFooterCss = "";

    var PersonalFooter = /*#__PURE__*/function () {
      function PersonalFooter(hostRef) {
        _classCallCheck(this, PersonalFooter);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.theme = "comp";
        /**
         * Возможность записи аудио
         */

        this.canRecordAudio = false;
        /**
         * audio animation state
         */

        this.switchFooter = true;
        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
      }

      _createClass(PersonalFooter, [{
        key: "toggleFooter",
        value: function toggleFooter() {
          this.switchFooter = !this.switchFooter;
        }
      }, {
        key: "onMouseUp",
        value: function onMouseUp(e) {
          console.log("onMouseUp", e.target);
        }
      }, {
        key: "render",
        value: function render() {
          var _this28 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.switchFooter ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-text", {
            canRecordAudio: this.canRecordAudio,
            theme: this.theme,
            onShowRecordAudioFooter: function onShowRecordAudioFooter() {
              return _this28.toggleFooter();
            }
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-audio", {
            theme: this.theme,
            onRecordFinished: function onRecordFinished(state) {
              return _this28.recordFinished(state.detail);
            }
          }));
        }
      }, {
        key: "recordFinished",
        value: function recordFinished(state) {
          this.toggleFooter();
          console.log("recordFinished", {
            state: state
          });
        }
      }]);

      return PersonalFooter;
    }();

    PersonalFooter.style = personalFooterCss;
    var personalHeaderCss = ".drop-down.sc-personal-header{position:absolute;right:20px;padding:10px;background-color:#dadada8f;border-radius:10px 0px 10px 10px}.drop-down.sc-personal-header ul.sc-personal-header li.sc-personal-header{list-style:none}.searchPersonalmess.sc-personal-header input.sc-personal-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;height:25px;font-size:14px;outline:none}.cancel-search.sc-personal-header{padding:5px;cursor:pointer}.search-wrapper.sc-personal-header{margin-bottom:-10px}.personal-header.sc-personal-header{padding:20px 20px 20px;border-bottom:1px solid #ccc;position:relative;height:85px}.header-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header:hover{cursor:pointer;color:rgb(87, 128, 247)}.header-nav.sc-personal-header .user-name-personal-wrapper.sc-personal-header{font-weight:600;color:#4c567d;text-align:center;width:100%;position:relative}.users-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;margin:auto;margin-top:7px}.img-user-other.sc-personal-header{text-align:center;border-radius:50%}.img-user-other.sc-personal-header .img.sc-personal-header{width:30px;height:30px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.img-user-current.sc-personal-header{text-align:center;border:2px solid #4c567d;border-radius:50%}.img-user-current.sc-personal-header .img.sc-personal-header{width:35px;height:35px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.user-active.sc-personal-header{width:100%;text-align:center}.user-active.sc-personal-header span.sc-personal-header{color:#4c567d;font-size:14px}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{width:14px}.user-name-personal.sc-personal-header{position:relative}.user-online-status.sc-personal-header,.user-ofline-status.sc-personal-header{width:10px;height:10px;border-radius:50%;display:inline-block;margin-left:5px}.user-online-status.sc-personal-header{background-color:#7dbd27}.user-ofline-status.sc-personal-header{background-color:#ccc}";

    var PersonalHeader = /*#__PURE__*/function () {
      function PersonalHeader(hostRef) {
        var _this29 = this;

        _classCallCheck(this, PersonalHeader);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Показывать/скрывать меню
         * */

        this.isShowDropDown = false;
        /**
         * Переключение поиска и окна с диалогами в шапке
         * */

        this.isPersonalMess = true;

        this.showDrop = function () {
          return _this29.isShowDropDown = !_this29.isShowDropDown;
        };

        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
      }

      _createClass(PersonalHeader, [{
        key: "render",
        value: function render() {
          var _this30 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-nav"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this30.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": " user-name-personal-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link user-name-personal",
            onClick: function onClick() {
              return _this30.clickToUserProfileHandler();
            }
          }, this.getNameUser(), this.chatPresenceState === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-online-status"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-ofline-status"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "custom-link",
            onClick: function onClick() {
              return _this30.showInputSearchPersonalMess();
            }
          }, this.isPersonalMess ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "users-nav"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-active"
          }, this.isPersonalMess ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", {
            theme: "module",
            chatActionState: this.chatActionState,
            chatPresenceState: this.chatPresenceState
          }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "search-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "searchPersonalmess"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "search",
            onInput: function onInput(e) {
              return _this30.searchPersonalMessagesHandler(e.target["value"]);
            }
          })))))));
        }
        /**
         * get name user
         * */

      }, {
        key: "getNameUser",
        value: function getNameUser() {
          var _a;

          return (_a = this.openedDialog) === null || _a === void 0 ? void 0 : _a.name;
        }
      }, {
        key: "showInputSearchPersonalMess",
        value: function showInputSearchPersonalMess() {
          this.isPersonalMess = !this.isPersonalMess;
          this.cancelSearchPersonal.emit();
        }
        /**
         * show Dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
        /**
         * click to show user profile
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.clickToUserProfile.emit();
        }
        /**
         * search for private messages
         * */

      }, {
        key: "searchPersonalMessagesHandler",
        value: function searchPersonalMessagesHandler(value) {
          this.searchPersonalMessages.emit(value);
        }
        /**
         * TODO
         * Метод для получения изображений предыдущих и следующих диалогов
         * */

      }, {
        key: "getIconUsers",
        value: function getIconUsers(array) {}
        /**
         * Управление по клику на диалог
         * */

      }, {
        key: "clickToDialogHandler",
        value: function clickToDialogHandler(item) {
          this.clickToDialog.emit({
            data: item
          });
          console.log(item);
        }
        /**
         * Метод получения названий категорий
         * */

      }, {
        key: "getIconDialogs",
        value: function getIconDialogs(array) {
          var _this31 = this;

          return array.map(function (item) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img-user-other"
            }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
              "class": "img online",
              onClick: function onClick() {
                return _this31.clickToDialogHandler(item);
              },
              style: {
                backgroundImage: "url(".concat(item.img, ")")
              }
            }));
          }).slice(5);
        }
      }]);

      return PersonalHeader;
    }();

    PersonalHeader.style = personalHeaderCss;
    var personalMessageCss = ".personal-message.sc-personal-message{padding:20px 0px;height:calc(100vh - 370px);overflow:auto}.mobile.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 145px)}.mobile.sc-personal-message .personal-message.sc-personal-message{padding:20px}.module.sc-personal-message .personal-message.sc-personal-message{padding:20px;height:calc(100vh - 310px);overflow:hidden}.module.sc-personal-message .personal-message-inner.sc-personal-message{height:100%;overflow-y:auto}.module.sc-personal-message .personal-message.sc-personal-message .to-me-mess-wrapper.sc-personal-message .from-mess.sc-personal-message{max-width:260px}.sc-personal-message::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.module.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 190px)}}";

    var PersonalMessage = /*#__PURE__*/function () {
      function PersonalMessage(hostRef) {
        _classCallCheck(this, PersonalMessage);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * */

        this.theme = "mobile";
        /**
         * */

        this.writing = [];
      }

      _createClass(PersonalMessage, [{
        key: "componentDidLoad",
        value: function componentDidLoad() {
          var _this32 = this;

          // this.scrollToBot();
          ChatMessagesLogic.setScrollToBot(function () {
            _this32.scrollToBot();
          });
          ChatMessagesLogic.safeScrollToBot();
        }
      }, {
        key: "render",
        value: function render() {
          var _this33 = this;

          var _a;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "personal-message-inner",
            ref: function ref(el) {
              return _this33.scrollContainer = el;
            }
          }, this.message.map(function (message) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
              message: message
            });
          }), ((_a = this.writing) === null || _a === void 0 ? void 0 : _a.length) ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", {
            message: Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["chatConvertWritingStatusToMessage"])(this.writing[0])
          }) : "")));
        }
        /**
         *
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
        /**
         *
         * */

      }, {
        key: "scrollToBot",
        value: function scrollToBot() {
          Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["scrollToBot"])(this.scrollContainer, {
            timer: 100
          });
        }
      }]);

      return PersonalMessage;
    }();

    PersonalMessage.style = personalMessageCss;
    var sAdamProfileCss = ".comp.sc-s-adam-profile .links-wrapper.sc-s-adam-profile a.sc-s-adam-profile{display:none}.mobile.sc-s-adam-profile .links-wpapper.sc-s-adam-profile{display:-ms-flexbox;display:flex}.mobile.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.module.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.mobile.sc-s-adam-profile .profile.sc-s-adam-profile{height:100vh}.profile.sc-s-adam-profile{background-color:#f7f8f9;padding:20px;height:95vh;overflow:auto}.about-user.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-bottom:70px}.profile-user-photo.sc-s-adam-profile{width:80px;height:80px;background-size:cover;background-position:center;margin-bottom:20px;border-radius:100%;cursor:pointer}.profile.sc-s-adam-profile .user-name.sc-s-adam-profile{font-size:14px;margin-bottom:10px}.user-mail.sc-s-adam-profile{margin-bottom:30px;font-size:12px;color:#8d8d8d}.about-user.sc-s-adam-profile .c-chat.sc-s-adam-profile{margin:0 15px}.user-social.sc-s-adam-profile{margin-bottom:40px}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:700;font-size:12px;margin-bottom:10px}.user-social-block.sc-s-adam-profile{background:white;min-height:140px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-social-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px}.user-social-name.sc-s-adam-profile,.mediafile-desc.sc-s-adam-profile{font-size:12px;color:#8d8d8d;font-weight:600}.media-header.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.media-descr.sc-s-adam-profile{font-size:8px;color:#8d8d8d}.media-item.sc-s-adam-profile{padding:10px;background:white;margin-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mediafile.sc-s-adam-profile{width:40px;height:40px;border-radius:5px;margin-right:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pdf.sc-s-adam-profile{background-color:#ff908c}.zip.sc-s-adam-profile{background-color:#58c4c9}.doc.sc-s-adam-profile{background-color:#73a4e9}.mediafile.sc-s-adam-profile span.sc-s-adam-profile{color:white;font-size:8px;font-weight:600}.c-chat.sc-s-adam-profile{color:#bacbe3;cursor:pointer}.hover-link.sc-s-adam-profile:hover{color:#6328f8}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.user-folders-block.sc-s-adam-profile{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-folders-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px;cursor:pointer}.user-folders-block.sc-s-adam-profile .user-social-name.sc-s-adam-profile{cursor:pointer}.user-add-folder.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:15px 20px;margin-bottom:30px;cursor:pointer}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile{color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile:hover{color:#4c567d}.user-add-folder.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.user-add-btn.sc-s-adam-profile{margin-left:20px;font-size:14px;color:#4c567d;font-weight:600}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-s-adam-profile{margin-top:30px}.user-folder-link.sc-s-adam-profile{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-s-adam-profile{background-color:#fff;max-height:130px;overflow:auto}.user-folders-blocks.sc-s-adam-profile ul.sc-s-adam-profile li.sc-s-adam-profile{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-s-adam-profile{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px;text-replace:0.3s ease}.delete-folder.sc-s-adam-profile:hover{border-bottom:1px solid darkred;color:darkred}.delete-folder.sc-s-adam-profile:hover .c-chat.sc-s-adam-profile{color:darkred}.user-folders.sc-s-adam-profile{margin:30px 0px}.user-folders-title.sc-s-adam-profile{margin-bottom:10px}.folders-content.sc-s-adam-profile{height:100vh;overflow:auto}.user-social-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-s-adam-profile{font-size:14px;font-weight:600;color:#8d8d8d}.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 172px)}@media (max-width: 414px){.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 50px)}}";

    var SAdamProfile = /*#__PURE__*/function () {
      function SAdamProfile(hostRef) {
        _classCallCheck(this, SAdamProfile);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */

        this.theme = "comp";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowFolders = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowFolders", 7);
      }

      _createClass(SAdamProfile, [{
        key: "render",
        value: function render() {
          var _this34 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", {
            "class": "profile"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "links-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            onClick: function onClick() {
              return _this34.clickToShowDialogsHandler();
            }
          }, " ", Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "about-user"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "profile-user-photo border-radius",
            style: {
              backgroundImage: "url(https://via.placeholder.com/200x200?text=Text)"
            }
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-name"
          }, "Tim Ostin"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-mail"
          }, "timostin@gmail.com"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-contact"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-phone-alt hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-video hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-envelope hover-link"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-title"
          }, "\u041F\u0430\u043F\u043A\u0438"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-blocks"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Folder, {
            categories: this.categories
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-add-folder",
            onClick: function onClick() {
              return _this34.clickToShowFoldersHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-folder-plus hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-add-btn"
          }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-title"
          }, "Terhubung"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-instagram-brands hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "TimOstin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-twitter-brands hover-link"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "Tim Ostin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-social-link"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-facebook-f-brands \u0440"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-social-name"
          }, "Tim Ostin")))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-header"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-title"
          }, "Media"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-descr"
          }, "Lihat lebin banyak")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile pdf"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "PDF")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "Buku Hueanghong.pdf")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile zip"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "ZIP")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "File jungjang.zip")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "media-item"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "mediafile doc"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "DOC")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "mediafile-desc"
          }, "Laporan keuangan.ppt"))))));
        }
        /**
         * выводим класс
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
      }, {
        key: "clickToShowFoldersHandler",
        value: function clickToShowFoldersHandler() {
          this.clickToShowFolders.emit();
        }
      }]);

      return SAdamProfile;
    }();

    var Folder = function Folder(props) {
      return props.categories.map(function (item) {
        if (item.id !== "all") {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "list-folders"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "list-item-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-folder "
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "delete-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-times "
          }))));
        }
      });
    };

    SAdamProfile.style = sAdamProfileCss;
    var sSaqhanChatAddQuestionCss = ".btn-new-ask.sc-s-saqhan-chat-add-question{text-align:center;margin-top:10px}.btn-add-question.sc-s-saqhan-chat-add-question{border-radius:30px;padding:10px 30px;border:none;background-color:#72b94d;color:#ffffff;text-transform:uppercase;font-size:12px;outline:none;letter-spacing:1px}.custom-link.sc-s-saqhan-chat-add-question{cursor:pointer}";

    var SSaqhanChatAddQuestion = /*#__PURE__*/function () {
      function SSaqhanChatAddQuestion(hostRef) {
        _classCallCheck(this, SSaqhanChatAddQuestion);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
      }

      _createClass(SSaqhanChatAddQuestion, [{
        key: "render",
        value: function render() {
          var _this35 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-new-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-new-ask"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", {
            "class": "btn-add-question custom-link ",
            onClick: function onClick() {
              return _this35.sendNewMessModalHandler();
            }
          }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C")));
        }
      }, {
        key: "sendNewMessModalHandler",
        value: function sendNewMessModalHandler() {
          this.sendNewMessModal.emit();
        }
      }]);

      return SSaqhanChatAddQuestion;
    }();

    SSaqhanChatAddQuestion.style = sSaqhanChatAddQuestionCss;
    var sSaqhanChatFilesCss = ".wrapper-files.sc-s-saqhan-chat-files{padding:0px 20px}.block-file.sc-s-saqhan-chat-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-files .row.sc-s-saqhan-chat-files{-ms-flex-align:center;align-items:center}.chat-files.sc-s-saqhan-chat-files .block-input.sc-s-saqhan-chat-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{font-size:16px;color:#5a5a5a}.btn-back.sc-s-saqhan-chat-files::after{content:\"1\";background-color:#c73f45;padding:1px 6px;color:#fff;font-size:10px;border-radius:30px;position:relative;right:7px;top:-15px;z-index:999}.btn-back.sc-s-saqhan-chat-files{cursor:pointer}.btn-back.sc-s-saqhan-chat-files span.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{color:#a9a9a9;font-size:15px}.file-card.sc-s-saqhan-chat-files{padding-top:10px;border-bottom:1px solid #e5e5e5}.block-info.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;margin-bottom:15px}.file-date.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-img.sc-s-saqhan-chat-files{width:60px;height:60px;margin-right:15px;border-radius:3px;background-image:url(\"https://via.placeholder.com/500x500?text=Visit\")}.file-name.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-size.sc-s-saqhan-chat-files{font-size:12px;color:#5a5a5a}.block-files.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;width:75%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.block-repost.sc-s-saqhan-chat-files{-webkit-transition:0.3s easy;transition:0.3s easy}.block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:none;color:#000;font-size:12px;margin-left:10px}.block-info.sc-s-saqhan-chat-files:hover .block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:inline-block;cursor:pointer}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-files{width:auto;padding:10px 30px}}@media (max-width: 320px){.wrapper-chat.sc-s-saqhan-chat-files{width:320px}}";

    var SSaqhanChatFiles = /*#__PURE__*/function () {
      function SSaqhanChatFiles(hostRef) {
        _classCallCheck(this, SSaqhanChatFiles);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatFiles, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " wrapper-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-date"
          }, "19 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          })))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-card"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-date"
          }, "17 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-img"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-info"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-name"
          }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "file-size"
          }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-repost"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-share"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
            href: "#"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-download"
          })))))));
        }
      }]);

      return SSaqhanChatFiles;
    }();

    SSaqhanChatFiles.style = sSaqhanChatFilesCss;
    var sSaqhanChatFilesWrapperCss = "";

    var SSaqhanChatFilesWrapper = /*#__PURE__*/function () {
      function SSaqhanChatFilesWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatFilesWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
      }

      _createClass(SSaqhanChatFilesWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search-files", null), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files", null));
        }
      }]);

      return SSaqhanChatFilesWrapper;
    }();

    SSaqhanChatFilesWrapper.style = sSaqhanChatFilesWrapperCss;
    var sSaqhanChatFormSearchCss = ".header-wrapper.sc-s-saqhan-chat-form-search{border-bottom:1px solid #ececec;height:89px}.chat-files.sc-s-saqhan-chat-form-search{text-align:center;padding:10px 10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chat-files.sc-s-saqhan-chat-form-search .row.sc-s-saqhan-chat-form-search{-ms-flex-align:center;align-items:center}.block-input.sc-s-saqhan-chat-form-search{width:100%;display:-ms-flexbox;display:flex;position:relative}.block-input.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{position:absolute;top:12px;left:20px;color:#97a9c9}.input-search.sc-s-saqhan-chat-form-search{width:100%;border-radius:3px;border:none;background-color:#ececec;outline:none;color:#5a5a5a;padding-top:10px;padding-bottom:10px;padding-left:40px;margin-left:8px;margin-right:20px}.block-file.sc-s-saqhan-chat-form-search{padding-right:15px}.block-file.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{font-size:18px;color:#ccc}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search{padding:10px 30px}.chat-files.sc-s-saqhan-chat-form-search .block-input.sc-s-saqhan-chat-form-search::before{left:13px}}@media (max-width: 320px){.block-input.sc-s-saqhan-chat-form-search{text-align:center}}";

    var SSaqhanChatFormSearch = /*#__PURE__*/function () {
      function SSaqhanChatFormSearch(hostRef) {
        _classCallCheck(this, SSaqhanChatFormSearch);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * array categories
         * */

        this.categories = [];
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
      }

      _createClass(SSaqhanChatFormSearch, [{
        key: "render",
        value: function render() {
          var _this36 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": " chat-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-input"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-search"
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            "class": "input-search",
            placeholder: "\u041F\u043E\u0438\u0441\u043A \u0447\u0430\u0442\u043E\u0432 \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439",
            onInput: function onInput(e) {
              return _this36.searchDialogsHandler(e.target.value);
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-file"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-file-alt"
          }))), this.categories.length ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", {
            theme: "module",
            categories: this.categories
          }) : '');
        }
        /**
         * click to Files btn
         * */

      }, {
        key: "clickToFilesBtnHandler",
        value: function clickToFilesBtnHandler() {
          this.clickToFilesBtn.emit();
        }
      }, {
        key: "searchDialogsHandler",
        value: function searchDialogsHandler(e) {
          this.searchDialog.emit(e);
        }
      }]);

      return SSaqhanChatFormSearch;
    }();

    SSaqhanChatFormSearch.style = sSaqhanChatFormSearchCss;
    var sSaqhanChatFormSearchFilesCss = ".block-file.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files-search.sc-s-saqhan-chat-form-search-files{text-align:center;padding:10px 0px;border-bottom:1px solid #ececec;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.btn-back.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-form-search-files .row.sc-s-saqhan-chat-form-search-files{-ms-flex-align:center;align-items:center}.block-input-files.sc-s-saqhan-chat-form-search-files{width:70%;position:relative}.block-input-files.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:absolute;left:15px;top:10px;z-index:999;color:#5a5a5a}.input-search-files.sc-s-saqhan-chat-form-search-files{width:100%;border-radius:3px;border:none;background-color:#ececec;padding:10px 40px;outline:none}.chat-files.sc-s-saqhan-chat-form-search-files .block-input.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f274\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-form-search-files i.sc-s-saqhan-chat-form-search-files{font-size:18px;color:#5a5a5a}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search-files{width:92%;padding:10px 30px}}";

    var SSaqhanChatFormSearchFiles = /*#__PURE__*/function () {
      function SSaqhanChatFormSearchFiles(hostRef) {
        _classCallCheck(this, SSaqhanChatFormSearchFiles);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
      }

      _createClass(SSaqhanChatFormSearchFiles, [{
        key: "render",
        value: function render() {
          var _this37 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "header-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-files-search"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "btn-back",
            onClick: function onClick() {
              return _this37.clickToShowDialogsHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-chevron-left"
          }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-input-files"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            "class": "input-search-files",
            placeholder: "\u041F\u043E\u0438\u0441\u043A \u0444\u0430\u0439\u043B\u043E\u0432"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "block-file"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-filter"
          }))));
        }
        /**
         * show Dialogs
         * */

      }, {
        key: "clickToShowDialogsHandler",
        value: function clickToShowDialogsHandler() {
          this.clickToShowDialogs.emit();
        }
      }]);

      return SSaqhanChatFormSearchFiles;
    }();

    SSaqhanChatFormSearchFiles.style = sSaqhanChatFormSearchFilesCss;
    var sSaqhanChatUserCss = "";

    var SSaqhanChatUser = /*#__PURE__*/function () {
      function SSaqhanChatUser(hostRef) {
        _classCallCheck(this, SSaqhanChatUser);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
      }

      _createClass(SSaqhanChatUser, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserMessage, {
            user: this.dialogs
          }));
        }
      }]);

      return SSaqhanChatUser;
    }();
    /**
     * компонентная функция
     * */


    var UserMessage = function UserMessage(props) {
      return props.user.map(function (item) {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", {
          mess: item
        });
      });
    };

    SSaqhanChatUser.style = sSaqhanChatUserCss;
    var sSaqhanChatUsersCss = ".user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 20px}@media (max-width: 375px){.user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 0px;padding-right:0px;padding-top:10px}}";

    var SSaqhanChatUsers = /*#__PURE__*/function () {
      function SSaqhanChatUsers(hostRef) {
        _classCallCheck(this, SSaqhanChatUsers);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */

        this.dialogs = [];
      }

      _createClass(SSaqhanChatUsers, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-user", {
            dialogs: this.dialogs
          }));
        }
      }]);

      return SSaqhanChatUsers;
    }();

    SSaqhanChatUsers.style = sSaqhanChatUsersCss;
    var sSaqhanChatUsersWrapperCss = ".chat-wrap.sc-s-saqhan-chat-users-wrapper{width:100%;height:calc(100vh - 317px);overflow:auto;padding-top:15px}.sc-s-saqhan-chat-users-wrapper::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px)}}@media (max-width: 375px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px);padding:0px 15px}.chat-files.sc-s-saqhan-chat-users-wrapper .block-input.sc-s-saqhan-chat-users-wrapper::before{left:13px}}";

    var SSaqhanChatUsersWrapper = /*#__PURE__*/function () {
      function SSaqhanChatUsersWrapper(hostRef) {
        _classCallCheck(this, SSaqhanChatUsersWrapper);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */

        this.dialogs = [];
        /**
         *
         * */

        this.categories = [];
        /**
         * Массив данных с личным чатом
         * */

        this.personalMessage = [];
        this.clickToCategory = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToCategory", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
      }

      _createClass(SSaqhanChatUsersWrapper, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search", {
            categories: this.categories
          }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "chat-wrap"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users", {
            dialogs: this.dialogs
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null));
        }
      }]);

      return SSaqhanChatUsersWrapper;
    }();

    SSaqhanChatUsersWrapper.style = sSaqhanChatUsersWrapperCss;
    var userFoldersCss = ".folders-wrapper.sc-user-folders{background-color:#f7f8f9;padding:20px;overflow:auto}.main-icon.sc-user-folders img.sc-user-folders{width:70px}.sc-user-folders::-webkit-scrollbar{width:0px;background:transparent}.folders-title.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #cccccc;padding:0px 20px;padding-bottom:20px;margin:0px -20px}.folders-title.sc-user-folders .title.sc-user-folders{padding-left:20px}.folders-title.sc-user-folders .left.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.folders-title.sc-user-folders .right.sc-user-folders{cursor:pointer}.left-back.sc-user-folders{cursor:pointer}.left-back.sc-user-folders i.sc-user-folders{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease;width:14px}.advice.sc-user-folders{padding:10px;font-size:14px;background-color:#ececec;color:grey;margin-top:30px}.user-folders-block.sc-user-folders{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:10px 10px}.user-folders-block.sc-user-folders .c-chat.sc-user-folders{width:16px;text-align:center;cursor:pointer}.user-social-title.sc-user-folders,.media-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-user-folders{margin-top:30px}.user-folder-link.sc-user-folders{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-user-folders{background-color:#fff;max-height:360px;overflow:auto}.comp.sc-user-folders .user-folders-blocks.sc-user-folders{max-height:none;height:calc(100vh - 390px);min-height:121px}.user-folders-blocks.sc-user-folders ul.sc-user-folders li.sc-user-folders{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-user-folders:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-user-folders{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease;cursor:pointer}.list-item-wrapper.sc-user-folders input.sc-user-folders{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-user-folders{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px}.delete-folder.sc-user-folders:hover{border-bottom:1px solid darkred;color:darkred}.user-folders.sc-user-folders{margin:30px 0px}.user-folders-title.sc-user-folders{margin-bottom:10px}.folders-content.sc-user-folders{height:100vh;overflow:auto}.user-social-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-user-folders{font-size:14px;font-weight:600;color:#8d8d8d}.creating-folder-block.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.creating-folder-block.sc-user-folders form.sc-user-folders{width:100%}.creating-folder-block.sc-user-folders i.sc-user-folders{color:#4c567d}.creating-folder-block.sc-user-folders input.sc-user-folders{border:none;padding:10px;outline:none;width:100%}.icon-new-folder.sc-user-folders{width:20px;text-align:center}.icon-new-folder.sc-user-folders i.sc-user-folders{color:#bacbe3;-webkit-transition:0.3s ease;transition:0.3s ease}.icon-new-folder.sc-user-folders i.sc-user-folders:hover{color:#6328f8}.main-icon.sc-user-folders{margin-top:30px;text-align:center}.main-icon.sc-user-folders i.sc-user-folders{font-size:56px}";

    var UserFolders = /*#__PURE__*/function () {
      function UserFolders(hostRef) {
        _classCallCheck(this, UserFolders);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */

        this.theme = "mobile";
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.createFolder = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
      }

      _createClass(UserFolders, [{
        key: "render",
        value: function render() {
          var _this38 = this;

          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-wrapper"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-title"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left",
            onClick: function onClick() {
              return _this38.clickToUserProfileHandler();
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "left-back"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat c-chat-arrow-left"
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "title"
          }, "\u041F\u0430\u043F\u043A\u0438")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "right"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            onClick: function onClick() {
              return _this38.createFolderFromButton();
            }
          }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "main-icon"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", {
            src: "http://cdn.ramman.net/connect/assets/app/chat/folder.svg",
            alt: ""
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "folders-content"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "creating-folder-block"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", {
            onSubmit: function onSubmit(e) {
              return _this38.creatingFolderFromInputHandler(e);
            }
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
            type: "text",
            placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438",
            ref: function ref(el) {
              return _this38.inputElement = el;
            }
          })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "icon-new-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", {
            "class": "c-chat sc-btn-wrapper c-chat-folder",
            onClick: function onClick() {
              return _this38.showInputCreateFolderHandler();
            }
          }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folder"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-title user-social-title"
          }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442\u044B"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-folders-blocks"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialogs, {
            dialog: this.dialogs
          })))))));
        }
        /**
         * показывать инпут для создания папки
         * */

      }, {
        key: "showInputCreateFolderHandler",
        value: function showInputCreateFolderHandler() {
          this.showInputCreateFolderState = !this.showInputCreateFolderState;
        }
        /**
         *проверка и отправка данных на создание папки
         * */

      }, {
        key: "creatingFolderHandler",
        value: function creatingFolderHandler() {
          var input = this.inputElement;

          if (input.value !== "") {
            this.createFolder.emit({
              name: input.value,
              chats: []
            });
            input.value = "";
          }
        }
        /**
         * create folder from send button
         * */

      }, {
        key: "createFolderFromButton",
        value: function createFolderFromButton() {
          this.creatingFolderHandler();
        }
        /**
         *
         * */

      }, {
        key: "creatingFolderFromInputHandler",
        value: function creatingFolderFromInputHandler(e) {
          e.preventDefault();
          this.creatingFolderHandler();
        }
        /**
         * переход на профиль пользователя
         * */

      }, {
        key: "clickToUserProfileHandler",
        value: function clickToUserProfileHandler() {
          this.clickToUserProfile.emit();
        }
        /**
         * выводим класс
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return UserFolders;
    }();

    var Dialogs = function Dialogs(props) {
      return props.dialog.map(function (item) {
        // if (item.id !== "all") {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "list-folders"
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
          "class": "list-item-wrapper"
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", {
          type: "checkbox",
          id: item.name
        }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
          htmlFor: item.name
        }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name))))); // }
      });
    };

    UserFolders.style = userFoldersCss;
    var userStatusCss = ".status-user.sc-user-status span.sc-user-status{color:#4c567d;font-size:14px}.module.sc-user-status .status-user.sc-user-status{margin-bottom:-7px}.user-writing.sc-user-status{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}@keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}.user-saving.sc-user-status span.sc-user-status{-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1.4s;animation-duration:1.4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.user-saving.sc-user-status span.sc-user-status:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s}.user-saving.sc-user-status span.sc-user-status:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}";

    var UserStatus = /*#__PURE__*/function () {
      function UserStatus(hostRef) {
        _classCallCheck(this, UserStatus);

        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для блока
         * */

        this.theme = "comp";
      }

      _createClass(UserStatus, [{
        key: "render",
        value: function render() {
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": this.getClassForHost()
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(StatusBlockElement, {
            chatActionState: this.chatActionState,
            chatPresenceState: this.chatPresenceState
          }));
        }
        /**
         * Метод выобра темы для ПК/Мобильная/Модульной версии
         * */

      }, {
        key: "getClassForHost",
        value: function getClassForHost() {
          return _defineProperty({}, this.theme, true);
        }
      }]);

      return UserStatus;
    }();

    var ChatAnimationDots = function ChatAnimationDots(props) {
      return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "user-saving"
      }, props.text, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."));
    };
    /**
     * Компонент для вывода статуса действий
     * */


    var UserActionStateElement = function UserActionStateElement(props) {
      switch (props.chatActionState) {
        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserActionStatusState"].writing:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
            "class": "user-writing"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, {
            text: "\u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442"
          }));

        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserActionStatusState"].audioRecording:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "user-writing"
          }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, {
            text: "\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u0443\u0434\u0438\u043E"
          }));

        default:
          return "";
      }
    };
    /**
     * Компонент для вывода статуса присутствия пользоватея
     * */


    var UserPresenceStateElement = function UserPresenceStateElement(props) {
      switch (props.chatPresenceState) {
        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "last-seen"
          }, "\u043E\u043D\u043B\u0430\u0439\u043D");

        default:
          return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
            "class": "last-seen"
          }, "\u0431\u044B\u043B \u043D\u0435\u0434\u0430\u0432\u043D\u043E");
      }
    };
    /**
     * Компонент контроллер
     * */


    var StatusBlockElement = function StatusBlockElement(props) {
      return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "status-user"
      }, props.chatActionState ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserActionStateElement, {
        chatActionState: props.chatActionState
      }) : Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserPresenceStateElement, {
        chatPresenceState: props.chatPresenceState
      }));
    };

    UserStatus.style = userStatusCss;
    /***/
  }
}]);
//# sourceMappingURL=stencil-btn-wrapper_32-entry-js-es5.js.map