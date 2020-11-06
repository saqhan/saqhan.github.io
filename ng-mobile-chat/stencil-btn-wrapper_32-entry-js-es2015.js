(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stencil-btn-wrapper_32-entry-js"],{

/***/ "./node_modules/stencil-chat/dist/esm/btn-wrapper_32.entry.js":
/*!********************************************************************!*\
  !*** ./node_modules/stencil-chat/dist/esm/btn-wrapper_32.entry.js ***!
  \********************************************************************/
/*! exports provided: btn_wrapper, cnt_module_chat, contact_card, contacts_list, contacts_list_body, contacts_list_header, dialog_card, dialog_categories, footer_audio, footer_text, m_chat_footer, message_from, message_img, message_text, module_chat, module_header, module_personal, my_component, personal_footer, personal_header, personal_message, s_adam_profile, s_saqhan_chat_add_question, s_saqhan_chat_files, s_saqhan_chat_files_wrapper, s_saqhan_chat_form_search, s_saqhan_chat_form_search_files, s_saqhan_chat_user, s_saqhan_chat_users, s_saqhan_chat_users_wrapper, user_folders, user_status */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "btn_wrapper", function() { return BtnWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cnt_module_chat", function() { return CntModuleChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contact_card", function() { return ContactCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts_list", function() { return ContactsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts_list_body", function() { return ContactsListBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contacts_list_header", function() { return ContactsListHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog_card", function() { return DialogCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dialog_categories", function() { return DialogCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_audio", function() { return FooterAudio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footer_text", function() { return FooterText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m_chat_footer", function() { return MChatFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_from", function() { return MessageFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_img", function() { return MessageImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "message_text", function() { return MessageText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_chat", function() { return ModuleChat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_header", function() { return ModuleHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "module_personal", function() { return ModulePersonal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "my_component", function() { return MyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal_footer", function() { return PersonalFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal_header", function() { return PersonalHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "personal_message", function() { return PersonalMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_adam_profile", function() { return SAdamProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_add_question", function() { return SSaqhanChatAddQuestion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files", function() { return SSaqhanChatFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_files_wrapper", function() { return SSaqhanChatFilesWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search", function() { return SSaqhanChatFormSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_form_search_files", function() { return SSaqhanChatFormSearchFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_user", function() { return SSaqhanChatUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users", function() { return SSaqhanChatUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s_saqhan_chat_users_wrapper", function() { return SSaqhanChatUsersWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_folders", function() { return UserFolders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user_status", function() { return UserStatus; });
/* harmony import */ var _index_53235049_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-53235049.js */ "./node_modules/stencil-chat/dist/esm/index-53235049.js");
/* harmony import */ var _index_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.mjs */ "./node_modules/stencil-chat/dist/esm/index.mjs");
/* harmony import */ var _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mock-8ce3ba60.js */ "./node_modules/stencil-chat/dist/esm/mock-8ce3ba60.js");




const btnWrapperCss = ".btn-open.sc-btn-wrapper{width:60px;height:60px;font-size:24px;border:none;background-color:#72b94d;color:#fff;border-radius:50%;outline:none !important;cursor:pointer}.open-chat.sc-btn-wrapper{text-align:right;z-index:999;position:fixed;right:20px;bottom:20px}.btn-green.sc-btn-wrapper{position:relative}.counterNewMess.sc-btn-wrapper{position:absolute;right:-5px;top:0px;color:#fff;text-align:center;width:25px;padding:5px 5px;border-radius:50%;background-color:#c73f45;font-size:12px}@media (max-width: 414px){.btn-open.sc-btn-wrapper{width:40px;height:40px}.open-chat.sc-btn-wrapper{right:0px;bottom:60px}.open-chat.sc-btn-wrapper::after{font-size:10px;padding:0px 5px;top:-20px;left:-15px}.btn-open.sc-btn-wrapper{font-size:18px}.counterNewMess.sc-btn-wrapper{width:18px;font-size:8px}}@media (max-width: 375px){.open-chat.sc-btn-wrapper{right:15px;bottom:60px}}";

const BtnWrapper = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowChat = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowChat", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "open-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'btn-green' }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { onClick: () => this.clickToShowChatHandler(), class: "btn-open" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, this.showChat ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times" })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-comment-dots" })))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: 'counterNewMess' }, this.dialogs)))));
    }
    clickToShowChatHandler() {
        this.clickToShowChat.emit();
    }
};
BtnWrapper.style = btnWrapperCss;

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var dayjs_min = createCommonjsModule(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,function(){var t="millisecond",e="second",n="minute",r="hour",i="day",s="week",u="month",o="quarter",a="year",h=/^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,f=/\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,c=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},d={s:c,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+c(r,2,"0")+":"+c(i,2,"0")},m:function(t,e){var n=12*(e.year()-t.year())+(e.month()-t.month()),r=t.clone().add(n,u),i=e-r<0,s=t.clone().add(n+(i?-1:1),u);return Number(-(n+(e-r)/(i?r-s:s-r))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return {M:u,y:a,w:s,d:i,D:"date",h:r,m:n,s:e,ms:t,Q:o}[h]||String(h||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},$={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},l="en",m={};m[l]=$;var y=function(t){return t instanceof v},M=function(t,e,n){var r;if(!t)return l;if("string"==typeof t)m[t]&&(r=t),e&&(m[t]=e,r=t);else{var i=t.name;m[i]=t,r=i;}return !n&&r&&(l=r),r||!n&&l},g=function(t,e){if(y(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new v(n)},D=d;D.l=M,D.i=y,D.w=function(t,e){return g(t,{locale:e.$L,utc:e.$u,$offset:e.$offset})};var v=function(){function c(t){this.$L=this.$L||M(t.locale,null,!0),this.parse(t);}var d=c.prototype;return d.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(D.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r)return n?new Date(Date.UTC(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)):new Date(r[1],r[2]-1,r[3]||1,r[4]||0,r[5]||0,r[6]||0,r[7]||0)}return new Date(e)}(t),this.init();},d.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},d.$utils=function(){return D},d.isValid=function(){return !("Invalid Date"===this.$d.toString())},d.isSame=function(t,e){var n=g(t);return this.startOf(e)<=n&&n<=this.endOf(e)},d.isAfter=function(t,e){return g(t)<this.startOf(e)},d.isBefore=function(t,e){return this.endOf(e)<g(t)},d.$g=function(t,e,n){return D.u(t)?this[e]:this.set(n,t)},d.year=function(t){return this.$g(t,"$y",a)},d.month=function(t){return this.$g(t,"$M",u)},d.day=function(t){return this.$g(t,"$W",i)},d.date=function(t){return this.$g(t,"$D","date")},d.hour=function(t){return this.$g(t,"$H",r)},d.minute=function(t){return this.$g(t,"$m",n)},d.second=function(t){return this.$g(t,"$s",e)},d.millisecond=function(e){return this.$g(e,"$ms",t)},d.unix=function(){return Math.floor(this.valueOf()/1e3)},d.valueOf=function(){return this.$d.getTime()},d.startOf=function(t,o){var h=this,f=!!D.u(o)||o,c=D.p(t),d=function(t,e){var n=D.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return f?n:n.endOf(i)},$=function(t,e){return D.w(h.toDate()[t].apply(h.toDate("s"),(f?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},l=this.$W,m=this.$M,y=this.$D,M="set"+(this.$u?"UTC":"");switch(c){case a:return f?d(1,0):d(31,11);case u:return f?d(1,m):d(0,m+1);case s:var g=this.$locale().weekStart||0,v=(l<g?l+7:l)-g;return d(f?y-v:y+(6-v),m);case i:case"date":return $(M+"Hours",0);case r:return $(M+"Minutes",1);case n:return $(M+"Seconds",2);case e:return $(M+"Milliseconds",3);default:return this.clone()}},d.endOf=function(t){return this.startOf(t,!1)},d.$set=function(s,o){var h,f=D.p(s),c="set"+(this.$u?"UTC":""),d=(h={},h[i]=c+"Date",h.date=c+"Date",h[u]=c+"Month",h[a]=c+"FullYear",h[r]=c+"Hours",h[n]=c+"Minutes",h[e]=c+"Seconds",h[t]=c+"Milliseconds",h)[f],$=f===i?this.$D+(o-this.$W):o;if(f===u||f===a){var l=this.clone().set("date",1);l.$d[d]($),l.init(),this.$d=l.set("date",Math.min(this.$D,l.daysInMonth())).toDate();}else d&&this.$d[d]($);return this.init(),this},d.set=function(t,e){return this.clone().$set(t,e)},d.get=function(t){return this[D.p(t)]()},d.add=function(t,o){var h,f=this;t=Number(t);var c=D.p(o),d=function(e){var n=g(f);return D.w(n.date(n.date()+Math.round(e*t)),f)};if(c===u)return this.set(u,this.$M+t);if(c===a)return this.set(a,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(h={},h[n]=6e4,h[r]=36e5,h[e]=1e3,h)[c]||1,l=this.$d.getTime()+t*$;return D.w(l,this)},d.subtract=function(t,e){return this.add(-1*t,e)},d.format=function(t){var e=this;if(!this.isValid())return "Invalid Date";var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=D.z(this),i=this.$locale(),s=this.$H,u=this.$m,o=this.$M,a=i.weekdays,h=i.months,c=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return D.s(s%12||12,t,"0")},$=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:o+1,MM:D.s(o+1,2,"0"),MMM:c(i.monthsShort,o,h,3),MMMM:c(h,o),D:this.$D,DD:D.s(this.$D,2,"0"),d:String(this.$W),dd:c(i.weekdaysMin,this.$W,a,2),ddd:c(i.weekdaysShort,this.$W,a,3),dddd:a[this.$W],H:String(s),HH:D.s(s,2,"0"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:D.s(u,2,"0"),s:String(this.$s),ss:D.s(this.$s,2,"0"),SSS:D.s(this.$ms,3,"0"),Z:r};return n.replace(f,function(t,e){return e||l[t]||r.replace(":","")})},d.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},d.diff=function(t,h,f){var c,d=D.p(h),$=g(t),l=6e4*($.utcOffset()-this.utcOffset()),m=this-$,y=D.m(this,$);return y=(c={},c[a]=y/12,c[u]=y,c[o]=y/3,c[s]=(m-l)/6048e5,c[i]=(m-l)/864e5,c[r]=m/36e5,c[n]=m/6e4,c[e]=m/1e3,c)[d]||m,f?y:D.a(y)},d.daysInMonth=function(){return this.endOf(u).$D},d.$locale=function(){return m[this.$L]},d.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=M(t,e,!0);return r&&(n.$L=r),n},d.clone=function(){return D.w(this.$d,this)},d.toDate=function(){return new Date(this.valueOf())},d.toJSON=function(){return this.isValid()?this.toISOString():null},d.toISOString=function(){return this.$d.toISOString()},d.toString=function(){return this.$d.toUTCString()},c}();return g.prototype=v.prototype,g.extend=function(t,e){return t(e,v,g),g},g.locale=M,g.isDayjs=y,g.unix=function(t){return g(1e3*t)},g.en=m[l],g.Ls=m,g});
});

function isFunction(x) {
    return typeof x === 'function';
}

let _enable_super_gross_mode_that_will_cause_bad_things = false;
const config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            const error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};

function hostReportError(err) {
    setTimeout(() => { throw err; }, 0);
}

const empty = {
    closed: true,
    next(value) { },
    error(err) {
        if (config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError(err);
        }
    },
    complete() { }
};

const isArray = (() => Array.isArray || ((x) => x && typeof x.length === 'number'))();

function isObject(x) {
    return x !== null && typeof x === 'object';
}

const UnsubscriptionErrorImpl = (() => {
    function UnsubscriptionErrorImpl(errors) {
        Error.call(this);
        this.message = errors ?
            `${errors.length} errors occurred during unsubscription:
${errors.map((err, i) => `${i + 1}) ${err.toString()}`).join('\n  ')}` : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
        return this;
    }
    UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
    return UnsubscriptionErrorImpl;
})();
const UnsubscriptionError = UnsubscriptionErrorImpl;

class Subscription {
    constructor(unsubscribe) {
        this.closed = false;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    unsubscribe() {
        let errors;
        if (this.closed) {
            return;
        }
        let { _parentOrParents, _unsubscribe, _subscriptions } = this;
        this.closed = true;
        this._parentOrParents = null;
        this._subscriptions = null;
        if (_parentOrParents instanceof Subscription) {
            _parentOrParents.remove(this);
        }
        else if (_parentOrParents !== null) {
            for (let index = 0; index < _parentOrParents.length; ++index) {
                const parent = _parentOrParents[index];
                parent.remove(this);
            }
        }
        if (isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                errors = e instanceof UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray(_subscriptions)) {
            let index = -1;
            let len = _subscriptions.length;
            while (++index < len) {
                const sub = _subscriptions[index];
                if (isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
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
    add(teardown) {
        let subscription = teardown;
        if (!teardown) {
            return Subscription.EMPTY;
        }
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    const tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        let { _parentOrParents } = subscription;
        if (_parentOrParents === null) {
            subscription._parentOrParents = this;
        }
        else if (_parentOrParents instanceof Subscription) {
            if (_parentOrParents === this) {
                return subscription;
            }
            subscription._parentOrParents = [_parentOrParents, this];
        }
        else if (_parentOrParents.indexOf(this) === -1) {
            _parentOrParents.push(this);
        }
        else {
            return subscription;
        }
        const subscriptions = this._subscriptions;
        if (subscriptions === null) {
            this._subscriptions = [subscription];
        }
        else {
            subscriptions.push(subscription);
        }
        return subscription;
    }
    remove(subscription) {
        const subscriptions = this._subscriptions;
        if (subscriptions) {
            const subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    }
}
Subscription.EMPTY = (function (empty) {
    empty.closed = true;
    return empty;
}(new Subscription()));
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce((errs, err) => errs.concat((err instanceof UnsubscriptionError) ? err.errors : err), []);
}

const rxSubscriber = (() => typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random())();

class Subscriber extends Subscription {
    constructor(destinationOrNext, error, complete) {
        super();
        this.syncErrorValue = null;
        this.syncErrorThrown = false;
        this.syncErrorThrowable = false;
        this.isStopped = false;
        switch (arguments.length) {
            case 0:
                this.destination = empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    this.destination = empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        this.destination = destinationOrNext;
                        destinationOrNext.add(this);
                    }
                    else {
                        this.syncErrorThrowable = true;
                        this.destination = new SafeSubscriber(this, destinationOrNext);
                    }
                    break;
                }
            default:
                this.syncErrorThrowable = true;
                this.destination = new SafeSubscriber(this, destinationOrNext, error, complete);
                break;
        }
    }
    [rxSubscriber]() { return this; }
    static create(next, error, complete) {
        const subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    }
    next(value) {
        if (!this.isStopped) {
            this._next(value);
        }
    }
    error(err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    }
    complete() {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        super.unsubscribe();
    }
    _next(value) {
        this.destination.next(value);
    }
    _error(err) {
        this.destination.error(err);
        this.unsubscribe();
    }
    _complete() {
        this.destination.complete();
        this.unsubscribe();
    }
    _unsubscribeAndRecycle() {
        const { _parentOrParents } = this;
        this._parentOrParents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parentOrParents = _parentOrParents;
        return this;
    }
}
class SafeSubscriber extends Subscriber {
    constructor(_parentSubscriber, observerOrNext, error, complete) {
        super();
        this._parentSubscriber = _parentSubscriber;
        let next;
        let context = this;
        if (isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== empty) {
                context = Object.create(observerOrNext);
                if (isFunction(context.unsubscribe)) {
                    this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = this.unsubscribe.bind(this);
            }
        }
        this._context = context;
        this._next = next;
        this._error = error;
        this._complete = complete;
    }
    next(value) {
        if (!this.isStopped && this._next) {
            const { _parentSubscriber } = this;
            if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    }
    error(err) {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            const { useDeprecatedSynchronousErrorHandling } = config;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    }
    complete() {
        if (!this.isStopped) {
            const { _parentSubscriber } = this;
            if (this._complete) {
                const wrappedComplete = () => this._complete.call(this._context);
                if (!config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    }
    __tryOrUnsub(fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError(err);
            }
        }
    }
    __tryOrSetError(parent, fn, value) {
        if (!config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError(err);
                return true;
            }
        }
        return false;
    }
    _unsubscribe() {
        const { _parentSubscriber } = this;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    }
}

function canReportError(observer) {
    while (observer) {
        const { closed, destination, isStopped } = observer;
        if (closed || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber) {
            observer = destination;
        }
        else {
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

const observable = (() => typeof Symbol === 'function' && Symbol.observable || '@@observable')();

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
        return fns.reduce((prev, fn) => fn(prev), input);
    };
}

class Observable {
    constructor(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    lift(operator) {
        const observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }
    subscribe(observerOrNext, error, complete) {
        const { operator } = this;
        const sink = toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
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
    _trySubscribe(sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    }
    forEach(next, promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let subscription;
            subscription = this.subscribe((value) => {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    }
    _subscribe(subscriber) {
        const { source } = this;
        return source && source.subscribe(subscriber);
    }
    [observable]() {
        return this;
    }
    pipe(...operations) {
        if (operations.length === 0) {
            return this;
        }
        return pipeFromArray(operations)(this);
    }
    toPromise(promiseCtor) {
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor((resolve, reject) => {
            let value;
            this.subscribe((x) => value = x, (err) => reject(err), () => resolve(value));
        });
    }
}
Observable.create = (subscribe) => {
    return new Observable(subscribe);
};
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor =  Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}

const ObjectUnsubscribedErrorImpl = (() => {
    function ObjectUnsubscribedErrorImpl() {
        Error.call(this);
        this.message = 'object unsubscribed';
        this.name = 'ObjectUnsubscribedError';
        return this;
    }
    ObjectUnsubscribedErrorImpl.prototype = Object.create(Error.prototype);
    return ObjectUnsubscribedErrorImpl;
})();
const ObjectUnsubscribedError = ObjectUnsubscribedErrorImpl;

class SubjectSubscription extends Subscription {
    constructor(subject, subscriber) {
        super();
        this.subject = subject;
        this.subscriber = subscriber;
        this.closed = false;
    }
    unsubscribe() {
        if (this.closed) {
            return;
        }
        this.closed = true;
        const subject = this.subject;
        const observers = subject.observers;
        this.subject = null;
        if (!observers || observers.length === 0 || subject.isStopped || subject.closed) {
            return;
        }
        const subscriberIndex = observers.indexOf(this.subscriber);
        if (subscriberIndex !== -1) {
            observers.splice(subscriberIndex, 1);
        }
    }
}

class SubjectSubscriber extends Subscriber {
    constructor(destination) {
        super(destination);
        this.destination = destination;
    }
}
class Subject extends Observable {
    constructor() {
        super();
        this.observers = [];
        this.closed = false;
        this.isStopped = false;
        this.hasError = false;
        this.thrownError = null;
    }
    [rxSubscriber]() {
        return new SubjectSubscriber(this);
    }
    lift(operator) {
        const subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    }
    next(value) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        if (!this.isStopped) {
            const { observers } = this;
            const len = observers.length;
            const copy = observers.slice();
            for (let i = 0; i < len; i++) {
                copy[i].next(value);
            }
        }
    }
    error(err) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.hasError = true;
        this.thrownError = err;
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].error(err);
        }
        this.observers.length = 0;
    }
    complete() {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        this.isStopped = true;
        const { observers } = this;
        const len = observers.length;
        const copy = observers.slice();
        for (let i = 0; i < len; i++) {
            copy[i].complete();
        }
        this.observers.length = 0;
    }
    unsubscribe() {
        this.isStopped = true;
        this.closed = true;
        this.observers = null;
    }
    _trySubscribe(subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return super._trySubscribe(subscriber);
        }
    }
    _subscribe(subscriber) {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else if (this.hasError) {
            subscriber.error(this.thrownError);
            return Subscription.EMPTY;
        }
        else if (this.isStopped) {
            subscriber.complete();
            return Subscription.EMPTY;
        }
        else {
            this.observers.push(subscriber);
            return new SubjectSubscription(this, subscriber);
        }
    }
    asObservable() {
        const observable = new Observable();
        observable.source = this;
        return observable;
    }
}
Subject.create = (destination, source) => {
    return new AnonymousSubject(destination, source);
};
class AnonymousSubject extends Subject {
    constructor(destination, source) {
        super();
        this.destination = destination;
        this.source = source;
    }
    next(value) {
        const { destination } = this;
        if (destination && destination.next) {
            destination.next(value);
        }
    }
    error(err) {
        const { destination } = this;
        if (destination && destination.error) {
            this.destination.error(err);
        }
    }
    complete() {
        const { destination } = this;
        if (destination && destination.complete) {
            this.destination.complete();
        }
    }
    _subscribe(subscriber) {
        const { source } = this;
        if (source) {
            return this.source.subscribe(subscriber);
        }
        else {
            return Subscription.EMPTY;
        }
    }
}

class BehaviorSubject extends Subject {
    constructor(_value) {
        super();
        this._value = _value;
    }
    get value() {
        return this.getValue();
    }
    _subscribe(subscriber) {
        const subscription = super._subscribe(subscriber);
        if (subscription && !subscription.closed) {
            subscriber.next(this._value);
        }
        return subscription;
    }
    getValue() {
        if (this.hasError) {
            throw this.thrownError;
        }
        else if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
        else {
            return this._value;
        }
    }
    next(value) {
        super.next(this._value = value);
    }
}

class Timer {
    /**
     * Start timer
     */
    start(cb) {
        this.startedTime = new Date();
        this.callbackFunction = cb;
        this.intervalId = setInterval(() => {
            const timeInMinutes = dayjs_min(Date.now() - this.startedTime.getTime()).format("mm:ss");
            cb(timeInMinutes, this.startedTime);
        }, 0);
    }
    /**
     * Reset timer
     */
    reset() {
        this.start(this.callbackFunction);
    }
    /**
     * delete timer
     */
    delete() {
        clearInterval(this.intervalId);
    }
}
class ChatMessagesLogic {
    /**
     * */
    static setScrollToBot(callback) {
        this.scrollToBotCallback = callback;
    }
    /**
     * */
    static safeScrollToBot() {
        if (typeof this.scrollToBotCallback === 'function') {
            this.scrollToBotCallback();
        }
    }
}
class ChatDictionaryService {
}
ChatDictionaryService.dictionary$ = new BehaviorSubject(null);

const cntModuleChatCss = ".wrapper-chat.sc-cnt-module-chat{-webkit-box-shadow:0 0 10px 1px #828282;box-shadow:0 0 10px 1px #828282;border-radius:10px;width:400px;overflow:hidden;height:calc(100vh - 130px);background-color:#fff}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 170px)}.drop-file-wrapper.sc-cnt-module-chat{height:calc(100vh - 177px)}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 370px)}.content-chat.sc-cnt-module-chat .personal-footer.sc-cnt-module-chat .footer-wrapper.sc-cnt-module-chat{border-radius:10px 10px 5px 5px}.content-chat.sc-cnt-module-chat .profile.sc-cnt-module-chat .mobile.sc-cnt-module-chat{height:100vh;overflow:auto}@media (max-width: 414px){.wrapper-chat.sc-cnt-module-chat{border-radius:0px}.wrapper-chat.sc-cnt-module-chat{width:414px;height:100vh}.content-chat.sc-cnt-module-chat .personal-wrapper.sc-cnt-module-chat .personal-message.sc-cnt-module-chat{height:calc(100vh - 215px)}}.wrapper-modal.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end;-ms-flex-direction:column;flex-direction:column;position:fixed;top:2%;right:2%;z-index:999}.message.sc-cnt-module-chat{font-size:14px;height:21px;overflow:hidden;width:260px;margin-top:5px;white-space:nowrap;cursor:pointer}.user.sc-cnt-module-chat{display:-ms-flexbox;display:flex;cursor:pointer;-ms-flex-align:end;align-items:flex-end}.user-img.sc-cnt-module-chat{width:20%;margin:auto}.user-img.sc-cnt-module-chat .img.sc-cnt-module-chat{width:43px;height:43px;border-radius:50%;background-size:cover;margin:auto}.user-info.sc-cnt-module-chat{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;width:90%}.user-info.sc-cnt-module-chat .name.sc-cnt-module-chat{font-weight:500;font-size:13px}.sc-cnt-module-chat::-webkit-scrollbar{width:5px}.sc-cnt-module-chat::-webkit-scrollbar-track{-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.3);-webkit-border-radius:5px;border-radius:3px}.sc-cnt-module-chat::-webkit-scrollbar-thumb{-webkit-border-radius:10px;border-radius:10px;background:rgba(108, 108, 108, 0.8);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,0.5)}.sc-cnt-module-chat::-webkit-scrollbar-thumb:window-inactive{background:rgba(106, 106, 106, 0.4)}@media (max-width: 414px){.wrapper-modal.sc-cnt-module-chat{top:0%;right:0%;max-width:414px}.wrapper-chat.sc-cnt-module-chat{width:414px}.personal-messages.sc-cnt-module-chat{height:80vh}.users.sc-cnt-module-chat{height:80vh}.m-chat-wrapper.sc-cnt-module-chat{height:calc(100vh - 40px)}}@media (max-width: 375px){.wrapper-chat.sc-cnt-module-chat{max-width:375px;padding-right:0px}.users.sc-cnt-module-chat{padding:0px 10px}.new-mess.sc-cnt-module-chat{right:12%}}@media (max-width: 320px){.wrapper-chat.sc-cnt-module-chat{max-width:320px}.chat-header.sc-cnt-module-chat a.sc-cnt-module-chat{right:25%}.message-date.sc-cnt-module-chat{font-size:11px}.users.sc-cnt-module-chat{padding:0px 25px}.personal-messages.sc-cnt-module-chat{padding:0 10px}}";

const CntModuleChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        // /**
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
        this.chatViewState = _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].dialogs;
        //============================================================================================
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
        this.ShowContent = (content) => {
            // console.log("ShowContent", content);
            switch (content) {
                case "dialogs":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users-wrapper", { dialogs: this.dialogsState, categories: this.categoriesState, onClickToCategory: (item) => this.safeFiltersDialog(this.lastSearchDialog, item.detail, this.dialogs), onClickToDialog: (item) => this.clickToDialogHandler(item.detail), onClickToFilesBtn: () => this.clickToFilesBtnHandler(), onSearchDialog: (item) => this.safeFiltersDialog(item.detail, this.lastClickedCategory, this.dialogs), onSendNewMessModal: () => this.sendNewMessModal() }));
                case "personal":
                    return (
                    // <div class='drop-file-wrapper' >
                    //   <s-adam-copying></s-adam-copying>
                    // </div>
                    Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-personal", { chatPresenceState: this.chatPresenceState, openedDialog: this.openedDialog, chatActionState: this.chatActionState, writing: this.writing, canRecordAudio: this.canRecordAudio, onSendTextMessage: () => this.scrollMessageViewToBot(), dialogs: this.dialogsState, message: this.messageState, onSearchPersonalMessages: (e) => this.searchPersonalMessages(e.detail), onClickToShowDialogs: () => this.clickToShowDialogsHandler(), onClickToUserProfile: () => this.clickToUserProfileHandler(), onCancelSearchPersonal: () => this.cancelSearchPersonal() }));
                case "files":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files-wrapper", {
                        // onClickToLink={(item) => this.clickToLink(item.detail)}
                        onClickToShowDialogs: () => this.clickToShowDialogsHandler()
                    }));
                case "profile":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-adam-profile", { theme: "module", categories: this.categoriesState, onClickToShowDialogs: () => this.clickToShowDialogsHandler(), onClickToShowFolders: () => this.clickToShowFoldersHandler() }));
                case "contacts":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list", { theme: "module", contacts: this.contacts,
                        // onSearchContact={(detail) => this.searchContact({ detail })}
                        onClickToShowDialogs: () => this.clickToShowDialogsHandler() }));
                case "folders":
                    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-folders", { onCreateFolder: (e) => this.createFolderHandler(e.detail), dialogs: this.dialogsState, onClickToUserProfile: () => this.clickToUserProfileHandler() }));
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
    async setWritingState(item) {
        this.writing = item ? [item] : null;
    }
    /**
     * меняет статус (присутстия собеседников или контакта) в чате
     * */
    async updateChatPresenceState(item) {
        this.chatPresenceState = item;
    }
    /**
     * меняет статусы действия текущих (печатает, записывает и т.д.)
     * */
    async updateChatActionState(item) {
        this.chatActionState = item;
    }
    /**
     * скрывает весь блок что бы на экране не было вообще видно
     * */
    async hide() {
        this.visibleState = false;
    }
    /**
     * позволяет активировать/деактивароть возможность записи аудио
     * */
    async activeRecordAudioState(state) {
        this.canRecordAudio = state;
    }
    /**
     * позволяет активировать/деактивароть возможность октрытие приложение
     * */
    async activeShowFullChat(state) {
        this.disableShowFullChatState = !state;
    }
    /**
     * сменить окно показа
     * */
    async changeViewToShow(state) {
        this.chatViewState = state;
    }
    /**
     * скролит вниз окно сообщений
     * */
    async safeScrollToBotMessageView() {
        this.scrollMessageViewToBot();
    }
    /**
     * показывает весь блок после скрытия
     * */
    async show() {
        // show a prompt
        this.visibleState = true;
    }
    /**
     * показывает только кнопку
     * */
    async close() {
        this.showChat(false);
    }
    /**
     * открывает блок чатов
     * */
    async open() {
        this.showChat(true);
    }
    /**
     * */
    async openDialog(dialog) {
        this.open();
        this.clickToDialogHandler(dialog, true);
    }
    watchDictionaryHandler(newValue) {
        this.updateDictionary(newValue);
    }
    watchDialogsHandler(newValue) {
        this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, newValue);
    }
    watchMessageHandler(newValue, oldValue) {
        // console.log("The new value of activated is: ", { newValue, oldValue });
        console.log("The new value of activated is: ", { newValue, oldValue });
        this.messageState = this.message;
    }
    watchCategoriesHandler(newValue) {
        this.categoriesState = newValue;
        this.safeFiltersDialog(this.lastSearchDialog, this.lastClickedCategory, this.dialogs);
    }
    componentDidLoad() {
        this.updateDictionary(this.dictionary);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["H"], { style: { display: !this.visibleState ? "none" : null } }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-modal" }, this.openState ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "wrapper-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-header", { disableShowFullChatState: this.disableShowFullChatState, onShowFullChat: () => this.showFullChatHandler(), onClose: () => this.onClose() }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-chat-wrapper" }, this.ShowContent(this.chatViewState)))) : (""), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("btn-wrapper", { onClickToShowChat: () => this.showChat(), showChat: this.openState, dialogs: this.countNewMess(this.dialogs) }))));
    }
    /**
     *
     * */
    updateDictionary(newValue) {
        ChatDictionaryService.dictionary$.next(newValue);
        // console.log("changed - dictionary");
    }
    countNewMess(array) {
        let counter = 0;
        array.map((item) => {
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
    safeFiltersDialog(searchValue, category, allDialogs) {
        this.lastSearchDialog = searchValue;
        this.lastClickedCategory = category;
        let filteredDialogsBySearchValue = allDialogs;
        if (!this.disableInnerSearchDialogsState) {
            filteredDialogsBySearchValue = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterDialogsBySearchValue"])(searchValue, allDialogs);
        }
        this.dialogsState = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterDialogsByCategory"])(category, filteredDialogsBySearchValue);
    }
    /**
     * search for private messages
     * */
    searchPersonalMessages(value) {
        if (!this.disableInnerSearchMessagesState) {
            this.messageState = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterMessageBySearchValue"])(value, this.message);
        }
    }
    createFolderHandler(item) {
        // return item;
        console.log("createFolderHandler", item);
    }
    /**
     * Метод отмена поиска
     * **/
    cancelSearchPersonal() {
        this.messageState = this.message;
    }
    /**
     * Метод для изменения состояния чата
     * */
    showChat(state = !this.openState) {
        this.openState = state;
    }
    /**
     * Метод для закрытия чата
     * */
    onClose() {
        this.openState = false;
    }
    /**
     * click to Link
     * */
    clickToLinkHandler() {
        return this.chatViewState;
    }
    /**
     *
     * */
    clickToDialogHandler(dialog, pseudoClick) {
        if (pseudoClick) {
            this.clickToDialog.emit(dialog);
        }
        this.openedDialog = dialog;
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].personal);
    }
    /**
     *
     * */
    clickToFilesBtnHandler() {
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].files);
    }
    /**
     *
     * */
    showFullChatHandler() {
        this.showFullChat.emit({
            view: this.chatViewState,
            data: this.chatViewState === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].personal
                ? this.openedDialog
                : null,
        });
    }
    /**
     *
     * */
    clickToShowDialogsHandler() {
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].dialogs);
    }
    /**
     *
     * */
    clickToUserProfileHandler() {
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].profile);
    }
    /**
     *
     * */
    sendNewMessModal() {
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].contacts);
    }
    /**
     *
     * */
    clickToShowFoldersHandler() {
        this.updateViewState(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatViewToShowEnum"].folders);
    }
    /**
     *
     * */
    scrollMessageViewToBot() {
        ChatMessagesLogic.safeScrollToBot();
    }
    /**
     * */
    updateViewState(state) {
        this.chatViewStateChange.emit((this.chatViewState = state));
    }
    get el() { return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
    static get watchers() { return {
        "dictionary": ["watchDictionaryHandler"],
        "dialogs": ["watchDialogsHandler"],
        "message": ["watchMessageHandler"],
        "categories": ["watchCategoriesHandler"]
    }; }
};
CntModuleChat.style = cntModuleChatCss;

const contactCardCss = ".m-contact-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-contact-card{margin-right:20px;text-align:center}.img-user.sc-contact-card .img.sc-contact-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-contact-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-contact-card{width:80%;overflow:hidden}.comp.sc-contact-card .unfo-user.sc-contact-card{width:auto}.name-user.sc-contact-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-contact-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-contact-card{text-align:center}.data-message.sc-contact-card .date.sc-contact-card{font-size:10px;color:#979eab}.data-message.sc-contact-card .new-message.sc-contact-card{font-size:10px;color:#979eab}.add-new-message.sc-contact-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-contact-card .info-card.sc-contact-card{width:70%}.comp.sc-contact-card .m-contact-card.sc-contact-card{padding:20px 10px;margin:0}.comp.sc-contact-card .m-contact-card.sc-contact-card:hover{background-color:white}.comp.sc-contact-card .data-message.sc-contact-card{height:100%}";

const ContactCard = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToContact", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-contact-card", onClick: () => this.clickToDialogHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img", style: { backgroundImage: `url(${this.contact.img})` } })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unfo-user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name-user" }, this.contact.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-user" }, " ", "last seen ", this.createSendTime(this.contact.time.created))))))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        // console.log(this.theme)
        return {
            [this.theme]: true,
        };
    }
    /**
     * click to contact
     * */
    clickToDialogHandler() {
        this.clickToContact.emit(this.contact);
    }
    /*
     * last visit time
     * **/
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // выводим время в минутах/часах
        return `${hours} : ${minutes}`;
    }
};
ContactCard.style = contactCardCss;

const contactsListCss = "";

const ContactsList = class {
    constructor(hostRef) {
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
    watchContactsHandler(newValue) {
        this.filterContacts(this.lastSearchValue, newValue);
    }
    componentWillRender() {
        this.filterContacts(this.lastSearchValue);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-header", { onSearchContact: (e) => this.filterContacts(e.detail) }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contacts-list-body", { theme: this.theme, contacts: this.contactsFiltered }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("m-chat-footer", { theme: this.theme })));
    }
    /**
     *
     * */
    filterContacts(value, allContacts = this.contacts) {
        this.lastSearchValue = value;
        if (!this.disableInnerSearchContactState) {
            this.contactsFiltered = Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["filterContactBySearchValue"])(value, allContacts);
        }
    }
    static get watchers() { return {
        "contacts": ["watchContactsHandler"]
    }; }
};
ContactsList.style = contactsListCss;

const contactsListBodyCss = ".contacts-list-body.sc-contacts-list-body{padding:20px 20px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 175px);overflow:auto}.contacts-list-body.sc-contacts-list-body{padding:20px 30px 0px;border-bottom:1px solid #ccc;height:calc(100vh - 155px);overflow:auto}.sc-contacts-list-body::-webkit-scrollbar{width:0px;background:transparent}.module.sc-contacts-list-body .contacts-list-body.sc-contacts-list-body{height:calc(100vh - 325px)}";

const ContactsListBody = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной/Комп версии
         * */
        this.theme = "mobile";
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-body" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ContactCard$1, { contacts: this.contacts }))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
/**
 * Компонент высшего порядка для передачи данных о контактах
 * */
const ContactCard$1 = (props) => {
    return props.contacts.map((item) => {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("contact-card", { contact: item });
    });
};
ContactsListBody.style = contactsListBodyCss;

const contactsListHeaderCss = ".contacts-list-header.sc-contacts-list-header{border-bottom:1px solid #eaeaea;background-color:#eaeaea45;padding:20px 0px 10px 0px}.comp.sc-contacts-list-header .contacts-list-header.sc-contacts-list-header{background-color:transparent;padding:0 0 20px 0;border-bottom:none}.comp.sc-contacts-list-header{margin:0 -20px;padding:0 20px}.custom-link.sc-contacts-list-header{cursor:pointer}.contacts-list-description.sc-contacts-list-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;position:relative;padding:0px 20px}.comp.sc-contacts-list-header .contacts-list-description.sc-contacts-list-header{display:none}.contacts-list-arraw-back.sc-contacts-list-header i.sc-contacts-list-header{font-size:14px;color:#979eab}.contacts-list-title.sc-contacts-list-header{font-weight:600;color:#4c567d;-ms-flex-align:center;align-items:center;width:100%;margin-left:-12px;text-align:center}.contacts-list-input.sc-contacts-list-header{text-align:center;margin:10px 0px;position:relative;padding:0 20px}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header{margin:0}.contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;padding:5px;font-size:14px;outline:none}.comp.sc-contacts-list-header .contacts-list-input.sc-contacts-list-header input.sc-contacts-list-header{text-align:left;border-radius:0;background-color:white;width:100%;padding:10px 40px;font-size:13px}.contacts-list-input.sc-contacts-list-header i.sc-contacts-list-header{position:absolute;top:30%;z-index:2;left:39%;font-size:14px;color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-moz-placeholder{color:#979eab}.comp.sc-contacts-list-header input.sc-contacts-list-header::-webkit-input-placeholder{color:#979eab}";

const ContactsListHeader = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-header" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-description" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-arraw-back custom-link ", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-title" }, "Contacts")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "contacts-list-input" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "Search..", onInput: (e) => this.searchContactHandler(e.target.value) })))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * show Dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    /**
     *
     * */
    searchContactHandler(value) {
        this.searchContact.emit(value);
    }
};
ContactsListHeader.style = contactsListHeaderCss;

const dialogCardCss = ".m-dialog-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;margin-bottom:20px;cursor:pointer}.img-user.sc-dialog-card{margin-right:20px;text-align:center}.img-user.sc-dialog-card .img.sc-dialog-card{width:50px;height:50px;border-radius:50%;background-position:center;background-size:cover}.info-card.sc-dialog-card{display:-ms-flexbox;display:flex;-ms-flex-align:start;align-items:flex-start;width:100%;-ms-flex-pack:justify;justify-content:space-between}.unfo-user.sc-dialog-card{width:80%;overflow:hidden}.mobile.sc-dialog-card .unfo-user.sc-dialog-card{max-width:250px;overflow:hidden}.name-user.sc-dialog-card{font-size:14px;font-weight:600;color:#4c567d}.message-user.sc-dialog-card{font-size:14px;color:#979eab;white-space:nowrap}.data-message.sc-dialog-card{text-align:center}.data-message.sc-dialog-card .date.sc-dialog-card{font-size:10px;color:#979eab}.data-message.sc-dialog-card .new-message.sc-dialog-card{font-size:10px;color:#979eab}.add-new-message.sc-dialog-card{background-color:#ff7e7f;font-size:10px;padding:1px 5px;border-radius:50%;color:#fff}.comp.sc-dialog-card .info-card.sc-dialog-card{width:70%}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card{padding:20px 10px;margin:0}.comp.sc-dialog-card .m-dialog-card.sc-dialog-card:hover{background-color:white}.comp.sc-dialog-card .data-message.sc-dialog-card{height:100%}@media (max-width: 320px){.info-card.sc-dialog-card{max-width:210px}}";

const DialogCard = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * карточка диалога
         * */
        this.theme = "mobile";
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-dialog-card", onClick: () => this.clickToDialogHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.mess.online ? "img online" : "img", style: { backgroundImage: `url(${this.mess.img})` } })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "unfo-user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "name-user" }, this.mess.name), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "message-user" }, this.mess.mess)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "data-message" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "date" }, " ", this.createSendTime(this.mess.time.created)), this.showNewMess(this.mess))))));
    }
    showNewMess(dialog) {
        if (dialog.newMessage > 0) {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "add-new-message" }, " ", dialog.newMessage);
        }
    }
    /**
     * Управление по клику на диалог
     * */
    clickToDialogHandler() {
        // this.clickToDialog.emit({ data: this.mess });
        this.clickToDialog.emit(this.mess);
    }
    // public clickToLinkHandler() {
    //   this.clickToLink.emit({place: ChatLinkTypeEnum.showPersonalDialog, data: this.mess })
    // }
    /**
     * Метод выобра темы для ПК/Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * Метод вывода времени отправки сообщения
     * */
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        // выводим время в минутах/часах
        return `${hours} : ${minutes}`;
    }
};
DialogCard.style = dialogCardCss;

const dialogCategoriesCss = "@charset \"UTF-8\";.btns-nav.sc-dialog-categories{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;overflow-x:scroll;overflow-y:hidden;height:30px}.btns-nav.sc-dialog-categories span.sc-dialog-categories{cursor:pointer;font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;text-align:center;font-weight:600;color:#979eab;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out;padding:0 20px;height:30px;border-bottom:1px solid #ccc}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover,.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{border-bottom:1px solid #5780f7}.btns-nav.sc-dialog-categories span.sc-dialog-categories:hover{color:#5780f7}.btns-nav.sc-dialog-categories span.active.sc-dialog-categories{color:black}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories{border-bottom:none}.comp.sc-dialog-categories{margin:0 -20px}.comp.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{padding-bottom:10px}.mobile.sc-dialog-categories .btns-nav.sc-dialog-categories{margin-top:10px}.module.sc-dialog-categories .btns-nav.sc-dialog-categories span.sc-dialog-categories{font-size:14px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0px 20px;height:30px;text-align:center;font-weight:600;-webkit-transition:0.3s ease-in-out;transition:0.3s ease-in-out}.module.sc-dialog-categories .btns-nav.sc-dialog-categories{-ms-flex-pack:start;justify-content:start}.sc-dialog-categories::-webkit-scrollbar{height:0px}";

const DialogCategories = class {
    constructor(hostRef) {
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
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btns-nav" }, this.getCategories(this.categories))));
    }
    /**
     * Метод получения названий категорий
     * */
    getCategories(array) {
        return array.map((item) => {
            var _a;
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: { active: item.id === ((_a = this.lastClickedCategory) === null || _a === void 0 ? void 0 : _a.id) }, onClick: () => this.clickToCategoryHandler(item) }, item.name));
        });
    }
    /**
     * */
    clickToCategoryHandler(item) {
        this.clickToCategory.emit(this.lastClickedCategory = item);
    }
    /**
     *
     * */
    getClassForHost() {
        return {
            [this.theme]: true
        };
    }
};
DialogCategories.style = dialogCategoriesCss;

const footerAudioCss = ".record-dot.sc-footer-audio{width:10px;height:10px;background-color:#ff7e7f;border-radius:100%}.personal-footer.sc-footer-audio{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.audio.sc-footer-audio{width:20px;text-align:center;cursor:pointer}.input-wrapper.sc-footer-audio{width:100%}.input-wrapper.sc-footer-audio input.sc-footer-audio{width:100%;text-align:center;padding:10px 0;border:none;font-size:16px;outline:none;color:#4c567d}input.input-audio.sc-footer-audio{text-align:center !important}.comp.sc-footer-audio .footer-wrapper.sc-footer-audio{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-audio{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.recording-btn.sc-footer-audio{display:block;width:40px;height:40px;border-radius:100%;background-color:#bacbe3;opacity:0.2;position:absolute;right:10px}.c-chat-microphone.sc-footer-audio{z-index:1;position:absolute;top:24px;right:23px}.timer.sc-footer-audio{margin-left:10px}.record-audio.sc-footer-audio{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;font-size:14px}.module.sc-footer-audio .personal-footer.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}.mobile.sc-footer-audio .footer-wrapper.sc-footer-audio{border-radius:15px 15px 0px 0px}";

const FooterAudio = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Пропс с классом CSS
         */
        this.theme = "comp";
        /**
         * Курсор за пределами инпута остановка таймера
         * */
        this.mouseUpCallback = (event) => {
            const state = this.outInputTag.contains(event.target);
            this.recordFinished.emit(state);
        };
        this.recordFinished = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "recordFinished", 7);
    }
    componentDidLoad() {
        document.addEventListener("mouseup", this.mouseUpCallback);
        this.startTimer();
    }
    disconnectedCallback() {
        document.removeEventListener("mouseup", this.mouseUpCallback);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-footer" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-wrapper", onMouseLeave: (e) => this.mouseOutInput(e), ref: (el) => (this.outInputTag = el) }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "record-audio" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "record-dot" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "timer", ref: (el) => (this.timerElement = el) })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { class: "input-audio", type: "text", placeholder: "Release outside this field to cancel", readonly: true }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "audio", id: "audio" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-microphone" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "recording-btn" })))));
    }
    /**
     * смена класса
     */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * Старт таймера
     * */
    startTimer() {
        const timer = new Timer();
        timer.start((time) => {
            {
                this.timerElement.innerText = time;
            }
        });
    }
    /**
     * Событие при MouseLeave
     * */
    mouseOutInput(e) {
        console.log("mouseOutInput", e);
    }
};
FooterAudio.style = footerAudioCss;

const footerTextCss = ".personal-footer.sc-footer-text{position:absolute;bottom:0;width:100%;background-color:white;z-index:1}.footer-wrapper.sc-footer-text{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-radius:20px;-ms-flex-align:center;align-items:center;padding:10px 20px;-webkit-box-shadow:0px 0px 10px 1px #d4d4d4;box-shadow:0px 0px 10px 1px #d4d4d4;font-size:18px;color:#979eab}.file.sc-footer-text,.audio.sc-footer-text{width:20px;text-align:center;cursor:pointer}.file.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.audio.sc-footer-text i.sc-footer-text:hover{color:#6328f8}.input-wrapper.sc-footer-text{width:100%;padding:0px 15px}.input-wrapper.sc-footer-text input.sc-footer-text{width:100%;text-align:center;color:#4c567d;padding:10px 0;border:none;font-size:16px;outline:none}.comp.sc-footer-text .footer-wrapper.sc-footer-text{-webkit-box-shadow:none;box-shadow:none;border:1px solid lightgray}.comp.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .input-wrapper.sc-footer-text input.sc-footer-text{text-align:left}.module.sc-footer-text .personal-footer.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.mobile.sc-footer-text .footer-wrapper.sc-footer-text{border-radius:15px 15px 0px 0px}.animate-audio.sc-footer-text{width:40px;height:40px;background-color:red;border-radius:100%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.c-chat-microphone.sc-footer-text{z-index:1;position:absolute;top:24px;right:23px}";

const FooterText = class {
    constructor(hostRef) {
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
    mouseEnter(event) {
        console.log("mouseEnter", event);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-footer" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "footer-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file", onClick: () => this.showSendFileFooter.emit() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-paperclip" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "input-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (e) => this.sendMessageFromForm(e) }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", ref: (el) => (this.inputElement = el), onInput: (e) => this.switchIconInput(e.target.value), placeholder: "Type something ..." }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "audio", id: "audio" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(SendButtonTag, { showAudio: this.canRecordAudio && this.showAudioSendButton, sendMessageFromButton: this.sendMessageFromButton.bind(this), clickOnAudio: this.showRecordAudioFooter }))))));
    }
    /**
     * Смена класса
     */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * when sending message-from
     * */
    sendingNewMess() {
        const input = this.inputElement;
        if (input.value === "") {
            return false;
        }
        else {
            // скрипт отправки сообщения
            // console.log("send mess:", input.value);
            this.sendTextMessage.emit(input.value);
            // скрипт отправки сообщения
            this.switchIconInput((input.value = ""));
        }
    }
    /**
     * send message from form
     * */
    sendMessageFromForm(e) {
        e.preventDefault();
        this.sendingNewMess();
    }
    /**
     * send message from send button
     * */
    sendMessageFromButton() {
        this.sendingNewMess();
    }
    /**
     * Функция для для отправки сообщения
     * */
    switchIconInput(value) {
        this.showAudioSendButton = !value.replace(/[\t\n\r ]+/g, "").length;
    }
};
/**
 * Смена иконки микрофона на стрелку
 * */
const SendButtonTag = (props) => {
    return (props === null || props === void 0 ? void 0 : props.showAudio) ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-microphone", onMouseDown: () => props.clickOnAudio.emit() })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-location-arrow", onClick: () => props.sendMessageFromButton() }));
};
FooterText.style = footerTextCss;

const mChatFooterCss = ".m-chat-footer.sc-m-chat-footer{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;margin:15px;padding:0px 15px}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer{color:#979eab;font-size:18px;-webkit-transition:0.3s ease;transition:0.3s ease}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer{cursor:pointer}.m-chat-footer.sc-m-chat-footer span.sc-m-chat-footer i.sc-m-chat-footer:hover{color:rgb(87, 128, 247)}.module.sc-m-chat-footer .showContacts.sc-m-chat-footer{display:none}";

const MChatFooter = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Данные выбора темы для Мобильная/Модульной версии
         * */
        this.theme = "mobile";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowContacts = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowContacts", 7);
        this.clickToShowMenuBar = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowMenuBar", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "m-chat-footer" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showDialogs", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-comment" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showContacts", onClick: () => this.clickToShowContactsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-user-friends" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "showMenuBar", onClick: () => this.clickToShowMenuBarHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-bars" })))));
    }
    /**
     * Метод выобра темы для Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     * click to show dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    /**
     * click to show Contacts
     * */
    clickToShowContactsHandler() {
        this.clickToShowContacts.emit();
    }
    /**
     * click to show Contacts
     * */
    clickToShowMenuBarHandler() {
        this.clickToShowMenuBar.emit();
    }
};
MChatFooter.style = mChatFooterCss;

const messageFromCss = ".from-mess-wrapper.sc-message-from .mess-img.sc-message-from{height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.from-mess-wrapper.sc-message-from{margin:15px 0px;display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end}.from-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;width:100%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #c7d0e8;border-radius:20px 0px 20px 20px;background-color:#ebf0fe;color:#799af8;font-size:14px;min-height:42px}.from-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:20px 0 20px 20px;background-position:center;background-size:cover}.to-me-mess-wrapper.sc-message-from{margin:15px 0px}.to-me-mess-wrap.sc-message-from{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:end}.to-me-mess-wrap.sc-message-from .img.sc-message-from{width:30px;height:30px;margin-right:10px;border-radius:50%;background-size:cover;background-position:center}.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:350px;width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;padding:10px;border:1px solid #ccc;border-radius:0px 20px 20px 20px;font-size:14px;color:#979eab;display:-ms-flexbox;display:flex;-ms-flex-align:unset;align-items:unset;-ms-flex-pack:justify;justify-content:space-between;background:white;min-height:42px}.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{max-width:350px;min-width:300px;height:150px;border-radius:0px 20px 20px 20px;background-position:center;background-size:cover}.user-mess.sc-message-from .check.sc-message-from{font-size:10px;margin-left:5px}.system-message.sc-message-from{text-align:center;font-size:13px;color:#969696;margin:25px 0px;border-bottom:1px solid #ccc;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}.system-message.sc-message-from div.sc-message-from{border:1px solid #969696;padding:5px 8px;border-radius:15px;background-color:#fff;margin-bottom:-15px}.module.sc-message-from .personal-message.sc-message-from .to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .from-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:260px}.module.sc-message-from .personal-message.sc-message-from .from-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:260px}.module.sc-message-from .to-me-mess-wrap.sc-message-from{max-width:315px}@media (max-width: 414px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:230px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:230px}}@media (max-width: 320px){.from-mess-wrapper.sc-message-from .mess-img.sc-message-from,.to-me-mess-wrapper.sc-message-from .mess-img.sc-message-from{min-width:200px}.mess-img.sc-message-from .check.sc-message-from{left:90%}.from-mess-wrapper.sc-message-from .from-mess.sc-message-from,.to-me-mess-wrapper.sc-message-from .from-mess.sc-message-from{max-width:200px}}";

const MessageFrom = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.message ? this.renderMessage(this.message) : '');
    }
    /**
     * */
    getWritingMessage(writing) {
        if (!(writing === null || writing === void 0 ? void 0 : writing.length)) {
            return '';
        }
        // @ts-ignore
        const message = ({
            sender: {
                icon: writing[0].icon
            },
            type: _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].loading
        });
        return this.getToMeMessage(message);
    }
    /**
     *
     * */
    getToMeMessage(message) {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "to-me-mess-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "to-me-mess-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "img", style: {
                backgroundImage: `url(${message.sender.icon})`,
            } }), this.createType(message))));
    }
    /**
     *
     * */
    getCenterMeMessage(message) {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "system-message" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.checkTypeSystemMessage(message.content))));
    }
    /**
     *
     * */
    getFromMeMessage(message) {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess-wrapper " }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess-wrap" }, this.createType(message)))));
    }
    /**
     * Определяем от кого сообщение
     * @param message
     */
    renderMessage(message) {
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
    createType(message) {
        switch (message.type) {
            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].text:
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "from-mess" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-text", { checkSendMess: this.checkSendMess(message), createSendTime: this.createSendTime(message.time.created), message: message })));
            case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].image:
                return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img", style: { backgroundImage: `url(${this.message.content})` } }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-img", { checkSendMess: this.checkSendMess(message), message: message })));
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
    createSendTime(array) {
        const timeNow = array;
        let hours = timeNow.getHours();
        let minutes = timeNow.getMinutes();
        // add zero for minutes
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return `${hours} : ${minutes}`;
    }
    /**
     * Проверка статуса доставки сообщения
     * */
    checkSendMess(array) {
        if (array.time.read) {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check-double" })));
        }
        else if (array.time.delivery) {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check" })));
        }
        else {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "check" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-check" })));
        }
    }
    /**
     * Проверка на тип полученного системного сообщения
     * */
    checkTypeSystemMessage(message) {
        if (typeof message === "string") {
            return message;
        }
        else if (typeof message === "number") {
            return dayjs_min(message).format("DD MMMM");
        }
    }
};
MessageFrom.style = messageFromCss;

const messageImgCss = ".mess-img-content.sc-message-img{height:100%;position:relative}.check.sc-message-img{position:absolute;bottom:10px;right:20px;font-size:10px;color:#fff}";

const MessageImg = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-img-content" }, this.message.direction === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].fromMe
            ? this.checkSendMess : ''));
    }
};
MessageImg.style = messageImgCss;

const messageTextCss = ".check.sc-message-text{font-size:10px;margin-left:5px}.text-wrapper.sc-message-text{-ms-flex:1;flex:1}.info-wrapper.sc-message-text{display:-ms-flexbox;display:flex;text-align:right;white-space:nowrap}.personal-mess-date.sc-message-text{font-size:10px;margin-left:10px}.mess-content-wrap.sc-message-text{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around}.module.sc-message-text to-me-mess-wrapper.sc-message-text{max-width:315px}";

const MessageText = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mess-content-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "text-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "message-text" }, this.message.content)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "info-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "personal-mess-date" }, this.createSendTime), this.message.direction === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].fromMe
            ? this.checkSendMess
            : "")));
    }
};
MessageText.style = messageTextCss;

const moduleChatCss = "";

const ModuleChat = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.messages = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"];
        this.dialogs = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"];
        this.dictionary = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"];
    }
    componentDidLoad() {
        window['ref'] = this.ref;
        setInterval(() => {
            // console.log(
            //   'messages setInterval',
            //
            // );
            this.messages = [..._mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"]];
            this.dialogs = [..._mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["d"]];
            this.dictionary = this.dictionary === _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"] ? _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["a"] : _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["D"];
            // console.log(
            //   'updated dictionary',
            //   this.dictionary
            // );
            // @ts-ignore
            Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["f"])(this.ref2);
        }, 990000);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("cnt-module-chat", { ref: (el) => this.ref = el, categories: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["c"], dialogs: this.dialogs, contacts: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["b"], dictionary: this.dictionary, message: this.messages, onClickToDialog: (ev) => this.clickToDialog(ev.detail), onSendTextMessage: (ev) => this.sendTextMessage(ev.detail), onShowFullChat: (ev) => this.showFullChat(ev.detail), disableInnerSearchDialogsState: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["e"], disableInnerSearchMessagesState: _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["f"] }));
    }
    clickToDialog(dialog) {
        this.messages = _mock_8ce3ba60_js__WEBPACK_IMPORTED_MODULE_2__["M"].map((message) => (Object.assign(Object.assign({}, message), { content: (message.direction !== _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageDirectionEnum"].center &&
                message.type === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatMessageTypeEnum"].text)
                ? `${dialog.name}> ${message.content}`
                : message.content })));
        // console.log(
        //   'clickToDialog [12]',
        //   dialog
        // );
    }
    showFullChat(ev) {
        return ev;
        // console.log(
        //   'showFullChat',
        //   ev
        // )
    }
    sendTextMessage(message) {
        // console.log(
        //   'sendTextMessage [2]',
        //   message
        // );
        this.messages = [
            ...this.messages,
            Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["createTextMessage"])(message, {
                uid: "test-id-2",
                icon: "https://via.placeholder.com/60x60?text=User",
                name: "Адам",
                phone: "79291234567",
            })
        ];
    }
    get ref2() { return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["g"])(this); }
};
ModuleChat.style = moduleChatCss;

const moduleHeaderCss = ".header-chat.sc-module-header{background-color:#ececec;padding:10px 20px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header{font-size:20px;color:#ccc;-webkit-transition:0.3s ease;transition:0.3s ease}.header-chat.sc-module-header .close.sc-module-header i.sc-module-header:hover{color:#4c567d;cursor:pointer}.showFullChat.sc-module-header i.sc-module-header{color:#4c567d;cursor:pointer}";

const ModuleHeader = class {
    constructor(hostRef) {
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
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-chat" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "showFullChat", style: { visibility: this.disableShowFullChatState ? 'hidden' : null }, onClick: () => this.showFullChatHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-expand" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-chat-title" }, "\u041C\u043E\u0434\u0443\u043B\u044C\u043D\u044B\u0439 \u0447\u0430\u0442"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "close", onClick: () => this.close.emit() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times-circle" }))));
    }
    /**
     * Разворачивать полную версию чата при клике иконку
     * */
    showFullChatHandler() {
        if (!this.disableShowFullChatState) {
            this.showFullChat.emit();
        }
    }
};
ModuleHeader.style = moduleHeaderCss;

const modulePersonalCss = ".personal-wrapper.sc-module-personal .personal-footer.sc-module-personal .footer-wrapper.sc-module-personal{border-radius:15px 15px 0px 0px}";

const ModulePersonal = class {
    constructor(hostRef) {
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
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-header", { chatActionState: this.chatActionState, openedDialog: this.openedDialog, chatPresenceState: this.chatPresenceState, dialogs: this.dialogs, message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-message", { writing: this.writing, theme: "module", message: this.message }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("personal-footer", { canRecordAudio: this.canRecordAudio, theme: "module" })));
    }
};
ModulePersonal.style = modulePersonalCss;

const myComponentCss = ":host{display:block}";

const MyComponent = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        // return <mobile-chat></mobile-chat>;
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("module-chat", null);
        // return <s-adam-chat></s-adam-chat>;
    }
};
MyComponent.style = myComponentCss;

const personalFooterCss = "";

const PersonalFooter = class {
    constructor(hostRef) {
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
    toggleFooter() {
        this.switchFooter = !this.switchFooter;
    }
    onMouseUp(e) {
        console.log("onMouseUp", e.target);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, this.switchFooter ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-text", { canRecordAudio: this.canRecordAudio, theme: this.theme, onShowRecordAudioFooter: () => this.toggleFooter() })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("footer-audio", { theme: this.theme, onRecordFinished: (state) => this.recordFinished(state.detail) }))));
    }
    recordFinished(state) {
        this.toggleFooter();
        console.log("recordFinished", { state });
    }
};
PersonalFooter.style = personalFooterCss;

const personalHeaderCss = ".drop-down.sc-personal-header{position:absolute;right:20px;padding:10px;background-color:#dadada8f;border-radius:10px 0px 10px 10px}.drop-down.sc-personal-header ul.sc-personal-header li.sc-personal-header{list-style:none}.searchPersonalmess.sc-personal-header input.sc-personal-header{text-align:center;border-radius:5px;border:none;background-color:#eaeaea;width:100%;height:25px;font-size:14px;outline:none}.cancel-search.sc-personal-header{padding:5px;cursor:pointer}.search-wrapper.sc-personal-header{margin-bottom:-10px}.personal-header.sc-personal-header{padding:20px 20px 20px;border-bottom:1px solid #ccc;position:relative;height:85px}.header-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header:hover{cursor:pointer;color:rgb(87, 128, 247)}.header-nav.sc-personal-header .user-name-personal-wrapper.sc-personal-header{font-weight:600;color:#4c567d;text-align:center;width:100%;position:relative}.users-nav.sc-personal-header{display:-ms-flexbox;display:flex;-ms-flex-pack:distribute;justify-content:space-around;-ms-flex-align:center;align-items:center;margin:auto;margin-top:7px}.img-user-other.sc-personal-header{text-align:center;border-radius:50%}.img-user-other.sc-personal-header .img.sc-personal-header{width:30px;height:30px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.img-user-current.sc-personal-header{text-align:center;border:2px solid #4c567d;border-radius:50%}.img-user-current.sc-personal-header .img.sc-personal-header{width:35px;height:35px;margin:3px;border-radius:50%;background-image:url(\"https://via.placeholder.com/300x300?text=User\");background-size:cover;background-position:center}.user-active.sc-personal-header{width:100%;text-align:center}.user-active.sc-personal-header span.sc-personal-header{color:#4c567d;font-size:14px}.header-nav.sc-personal-header span.sc-personal-header i.sc-personal-header{width:14px}.user-name-personal.sc-personal-header{position:relative}.user-online-status.sc-personal-header,.user-ofline-status.sc-personal-header{width:10px;height:10px;border-radius:50%;display:inline-block;margin-left:5px}.user-online-status.sc-personal-header{background-color:#7dbd27}.user-ofline-status.sc-personal-header{background-color:#ccc}";

const PersonalHeader = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Показывать/скрывать меню
         * */
        this.isShowDropDown = false;
        /**
         * Переключение поиска и окна с диалогами в шапке
         * */
        this.isPersonalMess = true;
        this.showDrop = () => (this.isShowDropDown = !this.isShowDropDown);
        this.clickToLink = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToLink", 7);
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.searchContact = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchContact", 7);
        this.searchPersonalMessages = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchPersonalMessages", 7);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.cancelSearchPersonal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "cancelSearchPersonal", 7);
        this.clickToDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToDialog", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-header" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-nav" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "custom-link", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: " user-name-personal-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "custom-link user-name-personal", onClick: () => this.clickToUserProfileHandler() }, this.getNameUser(), this.chatPresenceState === _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online
            ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-online-status" }))
            : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-ofline-status" })))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "custom-link", onClick: () => this.showInputSearchPersonalMess() }, this.isPersonalMess ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search" })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times" })))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "users-nav" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-active" }, this.isPersonalMess ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("user-status", { theme: "module", chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "search-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "searchPersonalmess" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "search", onInput: (e) => this.searchPersonalMessagesHandler(e.target["value"]) })))))))));
    }
    /**
     * get name user
     * */
    getNameUser() {
        var _a;
        return (_a = this.openedDialog) === null || _a === void 0 ? void 0 : _a.name;
    }
    showInputSearchPersonalMess() {
        this.isPersonalMess = !this.isPersonalMess;
        this.cancelSearchPersonal.emit();
    }
    /**
     * show Dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    /**
     * click to show user profile
     * */
    clickToUserProfileHandler() {
        this.clickToUserProfile.emit();
    }
    /**
     * search for private messages
     * */
    searchPersonalMessagesHandler(value) {
        this.searchPersonalMessages.emit(value);
    }
    /**
     * TODO
     * Метод для получения изображений предыдущих и следующих диалогов
     * */
    getIconUsers(array) {
    }
    /**
     * Управление по клику на диалог
     * */
    clickToDialogHandler(item) {
        this.clickToDialog.emit({ data: item });
        console.log(item);
    }
    /**
     * Метод получения названий категорий
     * */
    getIconDialogs(array) {
        return array
            .map((item) => (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img-user-other" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "img online", onClick: () => this.clickToDialogHandler(item), style: { backgroundImage: `url(${item.img})` } }))))
            .slice(5);
    }
};
PersonalHeader.style = personalHeaderCss;

const personalMessageCss = ".personal-message.sc-personal-message{padding:20px 0px;height:calc(100vh - 370px);overflow:auto}.mobile.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 145px)}.mobile.sc-personal-message .personal-message.sc-personal-message{padding:20px}.module.sc-personal-message .personal-message.sc-personal-message{padding:20px;height:calc(100vh - 310px);overflow:hidden}.module.sc-personal-message .personal-message-inner.sc-personal-message{height:100%;overflow-y:auto}.module.sc-personal-message .personal-message.sc-personal-message .to-me-mess-wrapper.sc-personal-message .from-mess.sc-personal-message{max-width:260px}.sc-personal-message::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.module.sc-personal-message .personal-message.sc-personal-message{height:calc(100vh - 190px)}}";

const PersonalMessage = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * */
        this.theme = "mobile";
        /**
         * */
        this.writing = [];
    }
    componentDidLoad() {
        // this.scrollToBot();
        ChatMessagesLogic.setScrollToBot(() => {
            this.scrollToBot();
        });
        ChatMessagesLogic.safeScrollToBot();
    }
    render() {
        var _a;
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-message" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "personal-message-inner", ref: (el) => (this.scrollContainer = el) }, this.message.map((message) => {
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", { message: message });
        }), ((_a = this.writing) === null || _a === void 0 ? void 0 : _a.length) ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("message-from", { message: Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["chatConvertWritingStatusToMessage"])(this.writing[0]) })) : ("")))));
    }
    /**
     *
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    /**
     *
     * */
    scrollToBot() {
        Object(_index_mjs__WEBPACK_IMPORTED_MODULE_1__["scrollToBot"])(this.scrollContainer, {
            timer: 100,
        });
    }
};
PersonalMessage.style = personalMessageCss;

const sAdamProfileCss = ".comp.sc-s-adam-profile .links-wrapper.sc-s-adam-profile a.sc-s-adam-profile{display:none}.mobile.sc-s-adam-profile .links-wpapper.sc-s-adam-profile{display:-ms-flexbox;display:flex}.mobile.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.module.sc-s-adam-profile .about-user.sc-s-adam-profile{margin-bottom:30px}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.mobile.sc-s-adam-profile .profile.sc-s-adam-profile{height:100vh}.profile.sc-s-adam-profile{background-color:#f7f8f9;padding:20px;height:95vh;overflow:auto}.about-user.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;margin-bottom:70px}.profile-user-photo.sc-s-adam-profile{width:80px;height:80px;background-size:cover;background-position:center;margin-bottom:20px;border-radius:100%;cursor:pointer}.profile.sc-s-adam-profile .user-name.sc-s-adam-profile{font-size:14px;margin-bottom:10px}.user-mail.sc-s-adam-profile{margin-bottom:30px;font-size:12px;color:#8d8d8d}.about-user.sc-s-adam-profile .c-chat.sc-s-adam-profile{margin:0 15px}.user-social.sc-s-adam-profile{margin-bottom:40px}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:700;font-size:12px;margin-bottom:10px}.user-social-block.sc-s-adam-profile{background:white;min-height:140px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-social-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px}.user-social-name.sc-s-adam-profile,.mediafile-desc.sc-s-adam-profile{font-size:12px;color:#8d8d8d;font-weight:600}.media-header.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.media-descr.sc-s-adam-profile{font-size:8px;color:#8d8d8d}.media-item.sc-s-adam-profile{padding:10px;background:white;margin-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.mediafile.sc-s-adam-profile{width:40px;height:40px;border-radius:5px;margin-right:20px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.pdf.sc-s-adam-profile{background-color:#ff908c}.zip.sc-s-adam-profile{background-color:#58c4c9}.doc.sc-s-adam-profile{background-color:#73a4e9}.mediafile.sc-s-adam-profile span.sc-s-adam-profile{color:white;font-size:8px;font-weight:600}.c-chat.sc-s-adam-profile{color:#bacbe3;cursor:pointer}.hover-link.sc-s-adam-profile:hover{color:#6328f8}.sc-s-adam-profile::-webkit-scrollbar{width:0px;background:transparent}.user-folders-block.sc-s-adam-profile{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:20px}.user-folders-block.sc-s-adam-profile .c-chat.sc-s-adam-profile{width:16px;text-align:center;margin-right:20px;cursor:pointer}.user-folders-block.sc-s-adam-profile .user-social-name.sc-s-adam-profile{cursor:pointer}.user-add-folder.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;background-color:#ffffff;padding:15px 20px;margin-bottom:30px;cursor:pointer}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile{color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.user-add-folder.sc-s-adam-profile div.sc-s-adam-profile:hover{color:#4c567d}.user-add-folder.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.user-add-btn.sc-s-adam-profile{margin-left:20px;font-size:14px;color:#4c567d;font-weight:600}.user-social-title.sc-s-adam-profile,.media-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-s-adam-profile{margin-top:30px}.user-folder-link.sc-s-adam-profile{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-s-adam-profile{background-color:#fff;max-height:130px;overflow:auto}.user-folders-blocks.sc-s-adam-profile ul.sc-s-adam-profile li.sc-s-adam-profile{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-s-adam-profile:hover i.sc-s-adam-profile{color:#4c567d}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-s-adam-profile i.sc-s-adam-profile{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-s-adam-profile{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-s-adam-profile{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px;text-replace:0.3s ease}.delete-folder.sc-s-adam-profile:hover{border-bottom:1px solid darkred;color:darkred}.delete-folder.sc-s-adam-profile:hover .c-chat.sc-s-adam-profile{color:darkred}.user-folders.sc-s-adam-profile{margin:30px 0px}.user-folders-title.sc-s-adam-profile{margin-bottom:10px}.folders-content.sc-s-adam-profile{height:100vh;overflow:auto}.user-social-title.sc-s-adam-profile{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-s-adam-profile{font-size:14px;font-weight:600;color:#8d8d8d}.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 172px)}@media (max-width: 414px){.module.sc-s-adam-profile .profile.sc-s-adam-profile{height:calc(100vh - 50px)}}";

const SAdamProfile = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */
        this.theme = "comp";
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
        this.clickToShowFolders = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowFolders", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("section", { class: "profile" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "links-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { onClick: () => this.clickToShowDialogsHandler() }, " ", Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "about-user" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "profile-user-photo border-radius", style: {
                backgroundImage: "url(https://via.placeholder.com/200x200?text=Text)",
            } }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-name" }, "Tim Ostin"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-mail" }, "timostin@gmail.com"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-contact" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-phone-alt hover-link" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-video hover-link" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-envelope hover-link" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-title" }, "\u041F\u0430\u043F\u043A\u0438"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-blocks" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Folder, { categories: this.categories }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-add-folder", onClick: () => this.clickToShowFoldersHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-folder-plus hover-link" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-add-btn" }, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u043F\u0430\u043F\u043A\u0443")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-title" }, "Terhubung"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-instagram-brands hover-link" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "TimOstin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-twitter-brands hover-link" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-social-link" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-facebook-f-brands \u0440" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-social-name" }, "Tim Ostin")))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-header" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-title" }, "Media"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-descr" }, "Lihat lebin banyak")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile pdf" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "PDF")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Buku Hueanghong.pdf")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile zip" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "ZIP")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "File jungjang.zip")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "media-item" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "mediafile doc" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "DOC")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "mediafile-desc" }, "Laporan keuangan.ppt")))))));
    }
    /**
     * выводим класс
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
    clickToShowFoldersHandler() {
        this.clickToShowFolders.emit();
    }
};
const Folder = (props) => {
    return props.categories.map((item) => {
        if (item.id !== "all") {
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-folders" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-item-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-folder " }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name)), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "delete-folder" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-times " })))));
        }
    });
};
SAdamProfile.style = sAdamProfileCss;

const sSaqhanChatAddQuestionCss = ".btn-new-ask.sc-s-saqhan-chat-add-question{text-align:center;margin-top:10px}.btn-add-question.sc-s-saqhan-chat-add-question{border-radius:30px;padding:10px 30px;border:none;background-color:#72b94d;color:#ffffff;text-transform:uppercase;font-size:12px;outline:none;letter-spacing:1px}.custom-link.sc-s-saqhan-chat-add-question{cursor:pointer}";

const SSaqhanChatAddQuestion = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.sendNewMessModal = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "sendNewMessModal", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-new-ask" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("button", { class: "btn-add-question custom-link ", onClick: () => this.sendNewMessModalHandler() }, "\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u044C \u043D\u0430\u043C"))));
    }
    sendNewMessModalHandler() {
        this.sendNewMessModal.emit();
    }
};
SSaqhanChatAddQuestion.style = sSaqhanChatAddQuestionCss;

const sSaqhanChatFilesCss = ".wrapper-files.sc-s-saqhan-chat-files{padding:0px 20px}.block-file.sc-s-saqhan-chat-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-files .row.sc-s-saqhan-chat-files{-ms-flex-align:center;align-items:center}.chat-files.sc-s-saqhan-chat-files .block-input.sc-s-saqhan-chat-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{font-size:16px;color:#5a5a5a}.btn-back.sc-s-saqhan-chat-files::after{content:\"1\";background-color:#c73f45;padding:1px 6px;color:#fff;font-size:10px;border-radius:30px;position:relative;right:7px;top:-15px;z-index:999}.btn-back.sc-s-saqhan-chat-files{cursor:pointer}.btn-back.sc-s-saqhan-chat-files span.sc-s-saqhan-chat-files i.sc-s-saqhan-chat-files{color:#a9a9a9;font-size:15px}.file-card.sc-s-saqhan-chat-files{padding-top:10px;border-bottom:1px solid #e5e5e5}.block-info.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;margin-bottom:15px}.file-date.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-img.sc-s-saqhan-chat-files{width:60px;height:60px;margin-right:15px;border-radius:3px;background-image:url(\"https://via.placeholder.com/500x500?text=Visit\")}.file-name.sc-s-saqhan-chat-files{font-size:14px;font-weight:500;margin-bottom:10px}.file-size.sc-s-saqhan-chat-files{font-size:12px;color:#5a5a5a}.block-files.sc-s-saqhan-chat-files{display:-ms-flexbox;display:flex;width:75%;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.block-repost.sc-s-saqhan-chat-files{-webkit-transition:0.3s easy;transition:0.3s easy}.block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:none;color:#000;font-size:12px;margin-left:10px}.block-info.sc-s-saqhan-chat-files:hover .block-repost.sc-s-saqhan-chat-files a.sc-s-saqhan-chat-files{display:inline-block;cursor:pointer}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-files{width:auto;padding:10px 30px}}@media (max-width: 320px){.wrapper-chat.sc-s-saqhan-chat-files{width:320px}}";

const SSaqhanChatFiles = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " wrapper-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-date" }, "19 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" })))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-card" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-date" }, "17 \u043D\u043E\u044F\u0431\u0440\u044F 2018"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-img" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-info" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-name" }, "\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F_\u0411\u0430\u043D\u043A\u0430_\u043A_\u0420\u0435\u0441\u0443\u0440\u0441\u0443.."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "file-size" }, "18.8 \u041A\u0411 13:27")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-repost" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-share" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("a", { href: "#" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-download" }))))))));
    }
};
SSaqhanChatFiles.style = sSaqhanChatFilesCss;

const sSaqhanChatFilesWrapperCss = "";

const SSaqhanChatFilesWrapper = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search-files", null), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-files", null)));
    }
};
SSaqhanChatFilesWrapper.style = sSaqhanChatFilesWrapperCss;

const sSaqhanChatFormSearchCss = ".header-wrapper.sc-s-saqhan-chat-form-search{border-bottom:1px solid #ececec;height:89px}.chat-files.sc-s-saqhan-chat-form-search{text-align:center;padding:10px 10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.chat-files.sc-s-saqhan-chat-form-search .row.sc-s-saqhan-chat-form-search{-ms-flex-align:center;align-items:center}.block-input.sc-s-saqhan-chat-form-search{width:100%;display:-ms-flexbox;display:flex;position:relative}.block-input.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{position:absolute;top:12px;left:20px;color:#97a9c9}.input-search.sc-s-saqhan-chat-form-search{width:100%;border-radius:3px;border:none;background-color:#ececec;outline:none;color:#5a5a5a;padding-top:10px;padding-bottom:10px;padding-left:40px;margin-left:8px;margin-right:20px}.block-file.sc-s-saqhan-chat-form-search{padding-right:15px}.block-file.sc-s-saqhan-chat-form-search i.sc-s-saqhan-chat-form-search{font-size:18px;color:#ccc}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search{padding:10px 30px}.chat-files.sc-s-saqhan-chat-form-search .block-input.sc-s-saqhan-chat-form-search::before{left:13px}}@media (max-width: 320px){.block-input.sc-s-saqhan-chat-form-search{text-align:center}}";

const SSaqhanChatFormSearch = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * array categories
         * */
        this.categories = [];
        this.clickToFilesBtn = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToFilesBtn", 7);
        this.searchDialog = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "searchDialog", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: " chat-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-input" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-search" }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "input-search", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0447\u0430\u0442\u043E\u0432 \u0438 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0439", onInput: (e) => this.searchDialogsHandler(e.target.value) })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-file" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-file-alt" }))), this.categories.length ? Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-categories", { theme: "module", categories: this.categories })
            : ''));
    }
    /**
     * click to Files btn
     * */
    clickToFilesBtnHandler() {
        this.clickToFilesBtn.emit();
    }
    searchDialogsHandler(e) {
        this.searchDialog.emit(e);
    }
};
SSaqhanChatFormSearch.style = sSaqhanChatFormSearchCss;

const sSaqhanChatFormSearchFilesCss = ".block-file.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files-search.sc-s-saqhan-chat-form-search-files{text-align:center;padding:10px 0px;border-bottom:1px solid #ececec;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:space-evenly;justify-content:space-evenly}.btn-back.sc-s-saqhan-chat-form-search-files{cursor:pointer}.chat-files.sc-s-saqhan-chat-form-search-files .row.sc-s-saqhan-chat-form-search-files{-ms-flex-align:center;align-items:center}.block-input-files.sc-s-saqhan-chat-form-search-files{width:70%;position:relative}.block-input-files.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f0eb\";position:absolute;left:15px;top:10px;z-index:999;color:#5a5a5a}.input-search-files.sc-s-saqhan-chat-form-search-files{width:100%;border-radius:3px;border:none;background-color:#ececec;padding:10px 40px;outline:none}.chat-files.sc-s-saqhan-chat-form-search-files .block-input.sc-s-saqhan-chat-form-search-files::before{font-family:\"Font Awesome 5 Free\";font-weight:400;content:\"\\f274\";position:relative;left:20px;z-index:999;color:#5a5a5a}.block-file.sc-s-saqhan-chat-form-search-files i.sc-s-saqhan-chat-form-search-files{font-size:18px;color:#5a5a5a}@media (max-width: 375px){.input-search.sc-s-saqhan-chat-form-search-files{width:92%;padding:10px 30px}}";

const SSaqhanChatFormSearchFiles = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        this.clickToShowDialogs = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToShowDialogs", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "header-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-files-search" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "btn-back", onClick: () => this.clickToShowDialogsHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-chevron-left" }))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-input-files" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", class: "input-search-files", placeholder: "\u041F\u043E\u0438\u0441\u043A \u0444\u0430\u0439\u043B\u043E\u0432" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "block-file" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-filter" })))));
    }
    /**
     * show Dialogs
     * */
    clickToShowDialogsHandler() {
        this.clickToShowDialogs.emit();
    }
};
SSaqhanChatFormSearchFiles.style = sSaqhanChatFormSearchFilesCss;

const sSaqhanChatUserCss = "";

const SSaqhanChatUser = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserMessage, { user: this.dialogs })));
    }
};
/**
 * компонентная функция
 * */
const UserMessage = (props) => {
    return props.user.map((item) => {
        return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("dialog-card", { mess: item });
    });
};
SSaqhanChatUser.style = sSaqhanChatUserCss;

const sSaqhanChatUsersCss = ".user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 20px}@media (max-width: 375px){.user-wrapper.sc-s-saqhan-chat-users{cursor:pointer;padding:0px 0px;padding-right:0px;padding-top:10px}}";

const SSaqhanChatUsers = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Массив данных с диалогами
         * */
        this.dialogs = [];
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-user", { dialogs: this.dialogs })));
    }
};
SSaqhanChatUsers.style = sSaqhanChatUsersCss;

const sSaqhanChatUsersWrapperCss = ".chat-wrap.sc-s-saqhan-chat-users-wrapper{width:100%;height:calc(100vh - 317px);overflow:auto;padding-top:15px}.sc-s-saqhan-chat-users-wrapper::-webkit-scrollbar{width:0px;background:transparent}@media (max-width: 414px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px)}}@media (max-width: 375px){.chat-wrap.sc-s-saqhan-chat-users-wrapper{height:calc(100vh - 190px);padding:0px 15px}.chat-files.sc-s-saqhan-chat-users-wrapper .block-input.sc-s-saqhan-chat-users-wrapper::before{left:13px}}";

const SSaqhanChatUsersWrapper = class {
    constructor(hostRef) {
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
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-form-search", { categories: this.categories }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "chat-wrap" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-users", { dialogs: this.dialogs })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("s-saqhan-chat-add-question", null)));
    }
};
SSaqhanChatUsersWrapper.style = sSaqhanChatUsersWrapperCss;

const userFoldersCss = ".folders-wrapper.sc-user-folders{background-color:#f7f8f9;padding:20px;overflow:auto}.main-icon.sc-user-folders img.sc-user-folders{width:70px}.sc-user-folders::-webkit-scrollbar{width:0px;background:transparent}.folders-title.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid #cccccc;padding:0px 20px;padding-bottom:20px;margin:0px -20px}.folders-title.sc-user-folders .title.sc-user-folders{padding-left:20px}.folders-title.sc-user-folders .left.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;cursor:pointer}.folders-title.sc-user-folders .right.sc-user-folders{cursor:pointer}.left-back.sc-user-folders{cursor:pointer}.left-back.sc-user-folders i.sc-user-folders{color:#979eab;-webkit-transition:0.3s ease;transition:0.3s ease;width:14px}.advice.sc-user-folders{padding:10px;font-size:14px;background-color:#ececec;color:grey;margin-top:30px}.user-folders-block.sc-user-folders{background:white;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;padding:10px 10px}.user-folders-block.sc-user-folders .c-chat.sc-user-folders{width:16px;text-align:center;cursor:pointer}.user-social-title.sc-user-folders,.media-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px}.user-folder.sc-user-folders{margin-top:30px}.user-folder-link.sc-user-folders{padding:10px 0px;font-size:14px;cursor:pointer}.user-folders-blocks.sc-user-folders{background-color:#fff;max-height:360px;overflow:auto}.comp.sc-user-folders .user-folders-blocks.sc-user-folders{max-height:none;height:calc(100vh - 390px);min-height:121px}.user-folders-blocks.sc-user-folders ul.sc-user-folders li.sc-user-folders{list-style:none;cursor:pointer;font-size:14px;font-weight:600;color:#8d8d8d;-webkit-transition:0.3s ease;transition:0.3s ease}.list-item-wrapper.sc-user-folders:hover{color:#4c567d;border-bottom:1px solid #4c567d}.list-item-wrapper.sc-user-folders{display:-ms-flexbox;display:flex;width:100%;border-bottom:1px solid #ccc;padding:10px;-ms-flex-align:center;align-items:center;-webkit-transition:0.3s ease;transition:0.3s ease;cursor:pointer}.list-item-wrapper.sc-user-folders input.sc-user-folders{margin-right:20px;margin-left:10px;font-size:16px}.list-folders.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}.delete-folder.sc-user-folders{width:40px;text-align:center;border-bottom:1px solid #ccc;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;font-size:16px}.delete-folder.sc-user-folders:hover{border-bottom:1px solid darkred;color:darkred}.user-folders.sc-user-folders{margin:30px 0px}.user-folders-title.sc-user-folders{margin-bottom:10px}.folders-content.sc-user-folders{height:100vh;overflow:auto}.user-social-title.sc-user-folders{font-weight:600;font-size:14px;margin-bottom:10px;color:#4c567d}.user-social-name.sc-user-folders{font-size:14px;font-weight:600;color:#8d8d8d}.creating-folder-block.sc-user-folders{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}.creating-folder-block.sc-user-folders form.sc-user-folders{width:100%}.creating-folder-block.sc-user-folders i.sc-user-folders{color:#4c567d}.creating-folder-block.sc-user-folders input.sc-user-folders{border:none;padding:10px;outline:none;width:100%}.icon-new-folder.sc-user-folders{width:20px;text-align:center}.icon-new-folder.sc-user-folders i.sc-user-folders{color:#bacbe3;-webkit-transition:0.3s ease;transition:0.3s ease}.icon-new-folder.sc-user-folders i.sc-user-folders:hover{color:#6328f8}.main-icon.sc-user-folders{margin-top:30px;text-align:center}.main-icon.sc-user-folders i.sc-user-folders{font-size:56px}";

const UserFolders = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Задаем стиль для мобильной/пк версии
         * */
        this.theme = "mobile";
        this.clickToUserProfile = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "clickToUserProfile", 7);
        this.createFolder = Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["c"])(this, "createFolder", 7);
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-title" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left", onClick: () => this.clickToUserProfileHandler() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "left-back" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat c-chat-arrow-left" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "title" }, "\u041F\u0430\u043F\u043A\u0438")), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "right" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { onClick: () => this.createFolderFromButton() }, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C"))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "main-icon" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("img", { src: "http://cdn.ramman.net/connect/assets/app/chat/folder.svg", alt: "" })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "folders-content" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folder" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "creating-folder-block" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("form", { onSubmit: (e) => this.creatingFolderFromInputHandler(e) }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "text", placeholder: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0430\u043F\u043A\u0438", ref: (el) => (this.inputElement = el) })), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "icon-new-folder" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("i", { class: "c-chat sc-btn-wrapper c-chat-folder", onClick: () => this.showInputCreateFolderHandler() }))))), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folder" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-title user-social-title" }, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442\u044B"), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-folders-blocks" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("ul", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(Dialogs, { dialog: this.dialogs }))))))));
    }
    /**
     * показывать инпут для создания папки
     * */
    showInputCreateFolderHandler() {
        this.showInputCreateFolderState = !this.showInputCreateFolderState;
    }
    /**
     *проверка и отправка данных на создание папки
     * */
    creatingFolderHandler() {
        const input = this.inputElement;
        if (input.value !== "") {
            this.createFolder.emit({
                name: input.value,
                chats: [],
            });
            input.value = "";
        }
    }
    /**
     * create folder from send button
     * */
    createFolderFromButton() {
        this.creatingFolderHandler();
    }
    /**
     *
     * */
    creatingFolderFromInputHandler(e) {
        e.preventDefault();
        this.creatingFolderHandler();
    }
    /**
     * переход на профиль пользователя
     * */
    clickToUserProfileHandler() {
        this.clickToUserProfile.emit();
    }
    /**
     * выводим класс
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
const Dialogs = (props) => {
    return props.dialog.map((item) => {
        // if (item.id !== "all") {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("li", null, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-folders" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "list-item-wrapper" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("input", { type: "checkbox", id: item.name }), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("label", { htmlFor: item.name }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, item.name))))));
        // }
    });
};
UserFolders.style = userFoldersCss;

const userStatusCss = ".status-user.sc-user-status span.sc-user-status{color:#4c567d;font-size:14px}.module.sc-user-status .status-user.sc-user-status{margin-bottom:-7px}.user-writing.sc-user-status{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center}@-webkit-keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}@keyframes blink{0%{opacity:0.2}20%{opacity:1}100%{opacity:0.2}}.user-saving.sc-user-status span.sc-user-status{-webkit-animation-name:blink;animation-name:blink;-webkit-animation-duration:1.4s;animation-duration:1.4s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-fill-mode:both;animation-fill-mode:both}.user-saving.sc-user-status span.sc-user-status:nth-child(2){-webkit-animation-delay:0.2s;animation-delay:0.2s}.user-saving.sc-user-status span.sc-user-status:nth-child(3){-webkit-animation-delay:0.4s;animation-delay:0.4s}";

const UserStatus = class {
    constructor(hostRef) {
        Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["r"])(this, hostRef);
        /**
         * Тема для блока
         * */
        this.theme = "comp";
    }
    render() {
        return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: this.getClassForHost() }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(StatusBlockElement, { chatActionState: this.chatActionState, chatPresenceState: this.chatPresenceState })));
    }
    /**
     * Метод выобра темы для ПК/Мобильная/Модульной версии
     * */
    getClassForHost() {
        return {
            [this.theme]: true,
        };
    }
};
const ChatAnimationDots = (props) => {
    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-saving" }, props.text, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, "."), Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", null, ".")));
};
/**
 * Компонент для вывода статуса действий
 * */
const UserActionStateElement = (props) => {
    switch (props.chatActionState) {
        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserActionStatusState"].writing:
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "user-writing" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, { text: "\u043F\u0435\u0447\u0430\u0442\u0430\u0435\u0442" })));
        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserActionStatusState"].audioRecording:
            return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "user-writing" }, Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(ChatAnimationDots, { text: "\u0437\u0430\u043F\u0438\u0441\u044B\u0432\u0430\u0435\u0442 \u0430\u0443\u0434\u0438\u043E" })));
        default:
            return "";
    }
};
/**
 * Компонент для вывода статуса присутствия пользоватея
 * */
const UserPresenceStateElement = (props) => {
    switch (props.chatPresenceState) {
        case _index_mjs__WEBPACK_IMPORTED_MODULE_1__["ChatUserPresenceState"].online:
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "last-seen" }, "\u043E\u043D\u043B\u0430\u0439\u043D");
        default:
            return Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("span", { class: "last-seen" }, "\u0431\u044B\u043B \u043D\u0435\u0434\u0430\u0432\u043D\u043E");
    }
};
/**
 * Компонент контроллер
 * */
const StatusBlockElement = (props) => {
    return (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])("div", { class: "status-user" }, props.chatActionState ? (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserActionStateElement, { chatActionState: props.chatActionState })) : (Object(_index_53235049_js__WEBPACK_IMPORTED_MODULE_0__["h"])(UserPresenceStateElement, { chatPresenceState: props.chatPresenceState }))));
};
UserStatus.style = userStatusCss;




/***/ })

}]);
//# sourceMappingURL=stencil-btn-wrapper_32-entry-js-es2015.js.map