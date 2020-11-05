(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./my-component_8.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/my-component_8.entry.js",
		"common",
		0
	],
	"./s-cnt-bank-additional-options.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-additional-options.entry.js",
		1
	],
	"./s-cnt-bank-main-carousel-banners_4.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-main-carousel-banners_4.entry.js",
		"common",
		2
	],
	"./s-cnt-bank-main-page-wrapper.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-main-page-wrapper.entry.js",
		"common",
		3
	],
	"./s-cnt-bank-payment-categories-card.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-categories-card.entry.js",
		4
	],
	"./s-cnt-bank-payment-page-categories_2.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-categories_2.entry.js",
		"common",
		5
	],
	"./s-cnt-bank-payment-page-wrapper.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-payment-page-wrapper.entry.js",
		6
	],
	"./s-cnt-bank-search-history-card_2.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-card_2.entry.js",
		7
	],
	"./s-cnt-bank-search-history-cards-wrapper_2.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-cards-wrapper_2.entry.js",
		8
	],
	"./s-cnt-bank-search-history-page.entry.js": [
		"../../../dist/libs/design/stencil/cnt/bank/dist/esm/s-cnt-bank-search-history-page.entry.js",
		"common",
		9
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../dist/libs/design/stencil/cnt/bank/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js ***!
  \***************************************************************************************************************************/
/*! exports provided: C, N, a, b, c, d, h, p, r, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return CSS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return NAMESPACE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return promiseResolve; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return bootstrapLazy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return doc; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return plt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return registerInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return win; });
const NAMESPACE = 'design-stencil-cnt-bank';

let scopeId;
let isSvgMode = false;
let queuePending = false;
const win = typeof window !== 'undefined' ? window : {};
const CSS =  win.CSS ;
const doc = win.document || { head: {} };
const plt = {
    $flags$: 0,
    $resourcesUrl$: '',
    jmp: h => h(),
    raf: h => requestAnimationFrame(h),
    ael: (el, eventName, listener, opts) => el.addEventListener(eventName, listener, opts),
    rel: (el, eventName, listener, opts) => el.removeEventListener(eventName, listener, opts),
    ce: (eventName, opts) => new CustomEvent(eventName, opts),
};
const promiseResolve = (v) => Promise.resolve(v);
const supportsConstructibleStylesheets =  /*@__PURE__*/ (() => {
        try {
            new CSSStyleSheet();
            return true;
        }
        catch (e) { }
        return false;
    })()
    ;
const HYDRATED_CSS = '{visibility:hidden}.hydrated{visibility:inherit}';
const createTime = (fnName, tagName = '') => {
    {
        return () => {
            return;
        };
    }
};
const uniqueTime = (key, measureText) => {
    {
        return () => {
            return;
        };
    }
};
const rootAppliedStyles = new WeakMap();
const registerStyle = (scopeId, cssText, allowCS) => {
    let style = styles.get(scopeId);
    if (supportsConstructibleStylesheets && allowCS) {
        style = (style || new CSSStyleSheet());
        style.replace(cssText);
    }
    else {
        style = cssText;
    }
    styles.set(scopeId, style);
};
const addStyle = (styleContainerNode, cmpMeta, mode, hostElm) => {
    let scopeId = getScopeId(cmpMeta);
    let style = styles.get(scopeId);
    // if an element is NOT connected then getRootNode() will return the wrong root node
    // so the fallback is to always use the document for the root node in those cases
    styleContainerNode = styleContainerNode.nodeType === 11 /* DocumentFragment */ ? styleContainerNode : doc;
    if (style) {
        if (typeof style === 'string') {
            styleContainerNode = styleContainerNode.head || styleContainerNode;
            let appliedStyles = rootAppliedStyles.get(styleContainerNode);
            let styleElm;
            if (!appliedStyles) {
                rootAppliedStyles.set(styleContainerNode, (appliedStyles = new Set()));
            }
            if (!appliedStyles.has(scopeId)) {
                {
                    if ( plt.$cssShim$) {
                        styleElm = plt.$cssShim$.createHostStyle(hostElm, scopeId, style, !!(cmpMeta.$flags$ & 10 /* needsScopedEncapsulation */));
                        const newScopeId = styleElm['s-sc'];
                        if (newScopeId) {
                            scopeId = newScopeId;
                            // we don't want to add this styleID to the appliedStyles Set
                            // since the cssVarShim might need to apply several different
                            // stylesheets for the same component
                            appliedStyles = null;
                        }
                    }
                    else {
                        styleElm = doc.createElement('style');
                        styleElm.innerHTML = style;
                    }
                    styleContainerNode.insertBefore(styleElm, styleContainerNode.querySelector('link'));
                }
                if (appliedStyles) {
                    appliedStyles.add(scopeId);
                }
            }
        }
        else if ( !styleContainerNode.adoptedStyleSheets.includes(style)) {
            styleContainerNode.adoptedStyleSheets = [...styleContainerNode.adoptedStyleSheets, style];
        }
    }
    return scopeId;
};
const attachStyles = (hostRef) => {
    const cmpMeta = hostRef.$cmpMeta$;
    const elm = hostRef.$hostElement$;
    const flags = cmpMeta.$flags$;
    const endAttachStyles = createTime('attachStyles', cmpMeta.$tagName$);
    const scopeId = addStyle( elm.getRootNode(), cmpMeta, hostRef.$modeName$, elm);
    if ( flags & 10 /* needsScopedEncapsulation */) {
        // only required when we're NOT using native shadow dom (slot)
        // or this browser doesn't support native shadow dom
        // and this host element was NOT created with SSR
        // let's pick out the inner content for slot projection
        // create a node to represent where the original
        // content was first placed, which is useful later on
        // DOM WRITE!!
        elm['s-sc'] = scopeId;
        elm.classList.add(scopeId + '-h');
        if ( flags & 2 /* scopedCssEncapsulation */) {
            elm.classList.add(scopeId + '-s');
        }
    }
    endAttachStyles();
};
const getScopeId = (cmp, mode) => 'sc-' + ( cmp.$tagName$);
/**
 * Default style mode id
 */
/**
 * Reusable empty obj/array
 * Don't add values to these!!
 */
const EMPTY_OBJ = {};
const isDef = (v) => v != null;
const noop = () => {
    /* noop*/
};
const isComplexType = (o) => {
    // https://jsperf.com/typeof-fn-object/5
    o = typeof o;
    return o === 'object' || o === 'function';
};
const IS_DENO_ENV = typeof Deno !== 'undefined';
const IS_NODE_ENV = !IS_DENO_ENV &&
    typeof global !== 'undefined' &&
    "function" === 'function' &&
    !!global.process &&
    typeof __filename === 'string' &&
    (!global.origin || typeof global.origin !== 'string');
const IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
const getCurrentDirectory = IS_NODE_ENV ? process.cwd : IS_DENO_ENV ? Deno.cwd : () => '/';
const exit = IS_NODE_ENV ? process.exit : IS_DENO_ENV ? Deno.exit : noop;
/**
 * Production h() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
// const stack: any[] = [];
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, child?: d.ChildType): d.VNode;
// export function h(nodeName: string | d.FunctionalComponent, vnodeData: d.PropsType, ...children: d.ChildType[]): d.VNode;
const h = (nodeName, vnodeData, ...children) => {
    let child = null;
    let simple = false;
    let lastSimple = false;
    let vNodeChildren = [];
    const walk = (c) => {
        for (let i = 0; i < c.length; i++) {
            child = c[i];
            if (Array.isArray(child)) {
                walk(child);
            }
            else if (child != null && typeof child !== 'boolean') {
                if ((simple = typeof nodeName !== 'function' && !isComplexType(child))) {
                    child = String(child);
                }
                if (simple && lastSimple) {
                    // If the previous child was simple (string), we merge both
                    vNodeChildren[vNodeChildren.length - 1].$text$ += child;
                }
                else {
                    // Append a new vNode, if it's text, we create a text vNode
                    vNodeChildren.push(simple ? newVNode(null, child) : child);
                }
                lastSimple = simple;
            }
        }
    };
    walk(children);
    if (vnodeData) {
        {
            const classData = vnodeData.className || vnodeData.class;
            if (classData) {
                vnodeData.class =
                    typeof classData !== 'object'
                        ? classData
                        : Object.keys(classData)
                            .filter(k => classData[k])
                            .join(' ');
            }
        }
    }
    if ( typeof nodeName === 'function') {
        // nodeName is a functional component
        return nodeName(vnodeData === null ? {} : vnodeData, vNodeChildren, vdomFnUtils);
    }
    const vnode = newVNode(nodeName, null);
    vnode.$attrs$ = vnodeData;
    if (vNodeChildren.length > 0) {
        vnode.$children$ = vNodeChildren;
    }
    return vnode;
};
const newVNode = (tag, text) => {
    const vnode = {
        $flags$: 0,
        $tag$: tag,
        $text$: text,
        $elm$: null,
        $children$: null,
    };
    {
        vnode.$attrs$ = null;
    }
    return vnode;
};
const Host = {};
const isHost = (node) => node && node.$tag$ === Host;
const vdomFnUtils = {
    forEach: (children, cb) => children.map(convertToPublic).forEach(cb),
    map: (children, cb) => children
        .map(convertToPublic)
        .map(cb)
        .map(convertToPrivate),
};
const convertToPublic = (node) => ({
    vattrs: node.$attrs$,
    vchildren: node.$children$,
    vkey: node.$key$,
    vname: node.$name$,
    vtag: node.$tag$,
    vtext: node.$text$,
});
const convertToPrivate = (node) => {
    if (typeof node.vtag === 'function') {
        const vnodeData = Object.assign({}, node.vattrs);
        if (node.vkey) {
            vnodeData.key = node.vkey;
        }
        if (node.vname) {
            vnodeData.name = node.vname;
        }
        return h(node.vtag, vnodeData, ...node.vchildren || []);
    }
    const vnode = newVNode(node.vtag, node.vtext);
    vnode.$attrs$ = node.vattrs;
    vnode.$children$ = node.vchildren;
    vnode.$key$ = node.vkey;
    vnode.$name$ = node.vname;
    return vnode;
};
/**
 * Production setAccessor() function based on Preact by
 * Jason Miller (@developit)
 * Licensed under the MIT License
 * https://github.com/developit/preact/blob/master/LICENSE
 *
 * Modified for Stencil's compiler and vdom
 */
const setAccessor = (elm, memberName, oldValue, newValue, isSvg, flags) => {
    if (oldValue !== newValue) {
        let isProp = isMemberInElement(elm, memberName);
        let ln = memberName.toLowerCase();
        if ( memberName === 'class') {
            const classList = elm.classList;
            const oldClasses = parseClassList(oldValue);
            const newClasses = parseClassList(newValue);
            classList.remove(...oldClasses.filter(c => c && !newClasses.includes(c)));
            classList.add(...newClasses.filter(c => c && !oldClasses.includes(c)));
        }
        else if ( memberName === 'style') {
            // update style attribute, css properties and values
            {
                for (const prop in oldValue) {
                    if (!newValue || newValue[prop] == null) {
                        if ( prop.includes('-')) {
                            elm.style.removeProperty(prop);
                        }
                        else {
                            elm.style[prop] = '';
                        }
                    }
                }
            }
            for (const prop in newValue) {
                if (!oldValue || newValue[prop] !== oldValue[prop]) {
                    if ( prop.includes('-')) {
                        elm.style.setProperty(prop, newValue[prop]);
                    }
                    else {
                        elm.style[prop] = newValue[prop];
                    }
                }
            }
        }
        else if ( memberName === 'ref') {
            // minifier will clean this up
            if (newValue) {
                newValue(elm);
            }
        }
        else if ( ( !isProp ) && memberName[0] === 'o' && memberName[1] === 'n') {
            // Event Handlers
            // so if the member name starts with "on" and the 3rd characters is
            // a capital letter, and it's not already a member on the element,
            // then we're assuming it's an event listener
            if (memberName[2] === '-') {
                // on- prefixed events
                // allows to be explicit about the dom event to listen without any magic
                // under the hood:
                // <my-cmp on-click> // listens for "click"
                // <my-cmp on-Click> // listens for "Click"
                // <my-cmp on-ionChange> // listens for "ionChange"
                // <my-cmp on-EVENTS> // listens for "EVENTS"
                memberName = memberName.slice(3);
            }
            else if (isMemberInElement(win, ln)) {
                // standard event
                // the JSX attribute could have been "onMouseOver" and the
                // member name "onmouseover" is on the window's prototype
                // so let's add the listener "mouseover", which is all lowercased
                memberName = ln.slice(2);
            }
            else {
                // custom event
                // the JSX attribute could have been "onMyCustomEvent"
                // so let's trim off the "on" prefix and lowercase the first character
                // and add the listener "myCustomEvent"
                // except for the first character, we keep the event name case
                memberName = ln[2] + memberName.slice(3);
            }
            if (oldValue) {
                plt.rel(elm, memberName, oldValue, false);
            }
            if (newValue) {
                plt.ael(elm, memberName, newValue, false);
            }
        }
        else {
            // Set property if it exists and it's not a SVG
            const isComplex = isComplexType(newValue);
            if ((isProp || (isComplex && newValue !== null)) && !isSvg) {
                try {
                    if (!elm.tagName.includes('-')) {
                        let n = newValue == null ? '' : newValue;
                        // Workaround for Safari, moving the <input> caret when re-assigning the same valued
                        if (memberName === 'list') {
                            isProp = false;
                            // tslint:disable-next-line: triple-equals
                        }
                        else if (oldValue == null || elm[memberName] != n) {
                            elm[memberName] = n;
                        }
                    }
                    else {
                        elm[memberName] = newValue;
                    }
                }
                catch (e) { }
            }
            if (newValue == null || newValue === false) {
                if (newValue !== false || elm.getAttribute(memberName) === '') {
                    {
                        elm.removeAttribute(memberName);
                    }
                }
            }
            else if ((!isProp || flags & 4 /* isHost */ || isSvg) && !isComplex) {
                newValue = newValue === true ? '' : newValue;
                {
                    elm.setAttribute(memberName, newValue);
                }
            }
        }
    }
};
const parseClassListRegex = /\s/;
const parseClassList = (value) => (!value ? [] : value.split(parseClassListRegex));
const updateElement = (oldVnode, newVnode, isSvgMode, memberName) => {
    // if the element passed in is a shadow root, which is a document fragment
    // then we want to be adding attrs/props to the shadow root's "host" element
    // if it's not a shadow root, then we add attrs/props to the same element
    const elm = newVnode.$elm$.nodeType === 11 /* DocumentFragment */ && newVnode.$elm$.host ? newVnode.$elm$.host : newVnode.$elm$;
    const oldVnodeAttrs = (oldVnode && oldVnode.$attrs$) || EMPTY_OBJ;
    const newVnodeAttrs = newVnode.$attrs$ || EMPTY_OBJ;
    {
        // remove attributes no longer present on the vnode by setting them to undefined
        for (memberName in oldVnodeAttrs) {
            if (!(memberName in newVnodeAttrs)) {
                setAccessor(elm, memberName, oldVnodeAttrs[memberName], undefined, isSvgMode, newVnode.$flags$);
            }
        }
    }
    // add new & update changed attributes
    for (memberName in newVnodeAttrs) {
        setAccessor(elm, memberName, oldVnodeAttrs[memberName], newVnodeAttrs[memberName], isSvgMode, newVnode.$flags$);
    }
};
const createElm = (oldParentVNode, newParentVNode, childIndex, parentElm) => {
    // tslint:disable-next-line: prefer-const
    let newVNode = newParentVNode.$children$[childIndex];
    let i = 0;
    let elm;
    let childNode;
    if ( newVNode.$text$ !== null) {
        // create text node
        elm = newVNode.$elm$ = doc.createTextNode(newVNode.$text$);
    }
    else {
        // create element
        elm = newVNode.$elm$ = ( doc.createElement( newVNode.$tag$));
        // add css classes, attrs, props, listeners, etc.
        {
            updateElement(null, newVNode, isSvgMode);
        }
        if ( isDef(scopeId) && elm['s-si'] !== scopeId) {
            // if there is a scopeId and this is the initial render
            // then let's add the scopeId as a css class
            elm.classList.add((elm['s-si'] = scopeId));
        }
        if (newVNode.$children$) {
            for (i = 0; i < newVNode.$children$.length; ++i) {
                // create the node
                childNode = createElm(oldParentVNode, newVNode, i);
                // return node could have been null
                if (childNode) {
                    // append our new node
                    elm.appendChild(childNode);
                }
            }
        }
    }
    return elm;
};
const addVnodes = (parentElm, before, parentVNode, vnodes, startIdx, endIdx) => {
    let containerElm = ( parentElm);
    let childNode;
    for (; startIdx <= endIdx; ++startIdx) {
        if (vnodes[startIdx]) {
            childNode = createElm(null, parentVNode, startIdx);
            if (childNode) {
                vnodes[startIdx].$elm$ = childNode;
                containerElm.insertBefore(childNode,  before);
            }
        }
    }
};
const removeVnodes = (vnodes, startIdx, endIdx, vnode, elm) => {
    for (; startIdx <= endIdx; ++startIdx) {
        if ((vnode = vnodes[startIdx])) {
            elm = vnode.$elm$;
            callNodeRefs(vnode);
            // remove the vnode's element from the dom
            elm.remove();
        }
    }
};
const updateChildren = (parentElm, oldCh, newVNode, newCh) => {
    let oldStartIdx = 0;
    let newStartIdx = 0;
    let oldEndIdx = oldCh.length - 1;
    let oldStartVnode = oldCh[0];
    let oldEndVnode = oldCh[oldEndIdx];
    let newEndIdx = newCh.length - 1;
    let newStartVnode = newCh[0];
    let newEndVnode = newCh[newEndIdx];
    let node;
    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (oldStartVnode == null) {
            // Vnode might have been moved left
            oldStartVnode = oldCh[++oldStartIdx];
        }
        else if (oldEndVnode == null) {
            oldEndVnode = oldCh[--oldEndIdx];
        }
        else if (newStartVnode == null) {
            newStartVnode = newCh[++newStartIdx];
        }
        else if (newEndVnode == null) {
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newStartVnode)) {
            patch(oldStartVnode, newStartVnode);
            oldStartVnode = oldCh[++oldStartIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else if (isSameVnode(oldEndVnode, newEndVnode)) {
            patch(oldEndVnode, newEndVnode);
            oldEndVnode = oldCh[--oldEndIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldStartVnode, newEndVnode)) {
            patch(oldStartVnode, newEndVnode);
            parentElm.insertBefore(oldStartVnode.$elm$, oldEndVnode.$elm$.nextSibling);
            oldStartVnode = oldCh[++oldStartIdx];
            newEndVnode = newCh[--newEndIdx];
        }
        else if (isSameVnode(oldEndVnode, newStartVnode)) {
            patch(oldEndVnode, newStartVnode);
            parentElm.insertBefore(oldEndVnode.$elm$, oldStartVnode.$elm$);
            oldEndVnode = oldCh[--oldEndIdx];
            newStartVnode = newCh[++newStartIdx];
        }
        else {
            {
                // new element
                node = createElm(oldCh && oldCh[newStartIdx], newVNode, newStartIdx);
                newStartVnode = newCh[++newStartIdx];
            }
            if (node) {
                {
                    oldStartVnode.$elm$.parentNode.insertBefore(node, oldStartVnode.$elm$);
                }
            }
        }
    }
    if (oldStartIdx > oldEndIdx) {
        addVnodes(parentElm, newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].$elm$, newVNode, newCh, newStartIdx, newEndIdx);
    }
    else if ( newStartIdx > newEndIdx) {
        removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
};
const isSameVnode = (vnode1, vnode2) => {
    // compare if two vnode to see if they're "technically" the same
    // need to have the same element tag, and same key to be the same
    if (vnode1.$tag$ === vnode2.$tag$) {
        return true;
    }
    return false;
};
const patch = (oldVNode, newVNode) => {
    const elm = (newVNode.$elm$ = oldVNode.$elm$);
    const oldChildren = oldVNode.$children$;
    const newChildren = newVNode.$children$;
    const text = newVNode.$text$;
    if ( text === null) {
        // element node
        {
            {
                // either this is the first render of an element OR it's an update
                // AND we already know it's possible it could have changed
                // this updates the element's css classes, attrs, props, listeners, etc.
                updateElement(oldVNode, newVNode, isSvgMode);
            }
        }
        if ( oldChildren !== null && newChildren !== null) {
            // looks like there's child vnodes for both the old and new vnodes
            updateChildren(elm, oldChildren, newVNode, newChildren);
        }
        else if (newChildren !== null) {
            // no old child vnodes, but there are new child vnodes to add
            if ( oldVNode.$text$ !== null) {
                // the old vnode was text, so be sure to clear it out
                elm.textContent = '';
            }
            // add the new vnode children
            addVnodes(elm, null, newVNode, newChildren, 0, newChildren.length - 1);
        }
        else if ( oldChildren !== null) {
            // no new child vnodes, but there are old child vnodes to remove
            removeVnodes(oldChildren, 0, oldChildren.length - 1);
        }
    }
    else if ( oldVNode.$text$ !== text) {
        // update the text content for the text only vnode
        // and also only if the text is different than before
        elm.data = text;
    }
};
const callNodeRefs = (vNode) => {
    {
        vNode.$attrs$ && vNode.$attrs$.ref && vNode.$attrs$.ref(null);
        vNode.$children$ && vNode.$children$.map(callNodeRefs);
    }
};
const renderVdom = (hostRef, renderFnResults) => {
    const hostElm = hostRef.$hostElement$;
    const oldVNode = hostRef.$vnode$ || newVNode(null, null);
    const rootVnode = isHost(renderFnResults) ? renderFnResults : h(null, null, renderFnResults);
    rootVnode.$tag$ = null;
    rootVnode.$flags$ |= 4 /* isHost */;
    hostRef.$vnode$ = rootVnode;
    rootVnode.$elm$ = oldVNode.$elm$ = ( hostElm);
    {
        scopeId = hostElm['s-sc'];
    }
    // synchronous patch
    patch(oldVNode, rootVnode);
};
const getElement = (ref) => ( getHostRef(ref).$hostElement$ );
const createEvent = (ref, name, flags) => {
    const elm = getElement(ref);
    return {
        emit: (detail) => {
            return emitEvent(elm, name, {
                bubbles: !!(flags & 4 /* Bubbles */),
                composed: !!(flags & 2 /* Composed */),
                cancelable: !!(flags & 1 /* Cancellable */),
                detail,
            });
        },
    };
};
const emitEvent = (elm, name, opts) => {
    const ev = plt.ce(name, opts);
    elm.dispatchEvent(ev);
    return ev;
};
const attachToAncestor = (hostRef, ancestorComponent) => {
    if ( ancestorComponent && !hostRef.$onRenderResolve$ && ancestorComponent['s-p']) {
        ancestorComponent['s-p'].push(new Promise(r => (hostRef.$onRenderResolve$ = r)));
    }
};
const scheduleUpdate = (hostRef, isInitialLoad) => {
    {
        hostRef.$flags$ |= 16 /* isQueuedForUpdate */;
    }
    if ( hostRef.$flags$ & 4 /* isWaitingForChildren */) {
        hostRef.$flags$ |= 512 /* needsRerender */;
        return;
    }
    attachToAncestor(hostRef, hostRef.$ancestorComponent$);
    // there is no ancestorc omponent or the ancestor component
    // has already fired off its lifecycle update then
    // fire off the initial update
    const dispatch = () => dispatchHooks(hostRef, isInitialLoad);
    return  writeTask(dispatch) ;
};
const dispatchHooks = (hostRef, isInitialLoad) => {
    const endSchedule = createTime('scheduleUpdate', hostRef.$cmpMeta$.$tagName$);
    const instance =  hostRef.$lazyInstance$ ;
    let promise;
    endSchedule();
    return then(promise, () => updateComponent(hostRef, instance, isInitialLoad));
};
const updateComponent = (hostRef, instance, isInitialLoad) => {
    // updateComponent
    const elm = hostRef.$hostElement$;
    const endUpdate = createTime('update', hostRef.$cmpMeta$.$tagName$);
    const rc = elm['s-rc'];
    if ( isInitialLoad) {
        // DOM WRITE!
        attachStyles(hostRef);
    }
    const endRender = createTime('render', hostRef.$cmpMeta$.$tagName$);
    {
        {
            // looks like we've got child nodes to render into this host element
            // or we need to update the css class/attrs on the host element
            // DOM WRITE!
            renderVdom(hostRef, callRender(hostRef, instance));
        }
    }
    if ( plt.$cssShim$) {
        plt.$cssShim$.updateHost(elm);
    }
    if ( rc) {
        // ok, so turns out there are some child host elements
        // waiting on this parent element to load
        // let's fire off all update callbacks waiting
        rc.map(cb => cb());
        elm['s-rc'] = undefined;
    }
    endRender();
    endUpdate();
    {
        const childrenPromises = elm['s-p'];
        const postUpdate = () => postUpdateComponent(hostRef);
        if (childrenPromises.length === 0) {
            postUpdate();
        }
        else {
            Promise.all(childrenPromises).then(postUpdate);
            hostRef.$flags$ |= 4 /* isWaitingForChildren */;
            childrenPromises.length = 0;
        }
    }
};
const callRender = (hostRef, instance) => {
    try {
        instance =  instance.render() ;
        {
            hostRef.$flags$ &= ~16 /* isQueuedForUpdate */;
        }
        {
            hostRef.$flags$ |= 2 /* hasRendered */;
        }
    }
    catch (e) {
        consoleError(e);
    }
    return instance;
};
const postUpdateComponent = (hostRef) => {
    const tagName = hostRef.$cmpMeta$.$tagName$;
    const elm = hostRef.$hostElement$;
    const endPostUpdate = createTime('postUpdate', tagName);
    const instance =  hostRef.$lazyInstance$ ;
    const ancestorComponent = hostRef.$ancestorComponent$;
    if (!(hostRef.$flags$ & 64 /* hasLoadedComponent */)) {
        hostRef.$flags$ |= 64 /* hasLoadedComponent */;
        {
            // DOM WRITE!
            addHydratedFlag(elm);
        }
        {
            safeCall(instance, 'componentDidLoad');
        }
        endPostUpdate();
        {
            hostRef.$onReadyResolve$(elm);
            if (!ancestorComponent) {
                appDidLoad();
            }
        }
    }
    else {
        endPostUpdate();
    }
    // load events fire from bottom to top
    // the deepest elements load first then bubbles up
    {
        if (hostRef.$onRenderResolve$) {
            hostRef.$onRenderResolve$();
            hostRef.$onRenderResolve$ = undefined;
        }
        if (hostRef.$flags$ & 512 /* needsRerender */) {
            nextTick(() => scheduleUpdate(hostRef, false));
        }
        hostRef.$flags$ &= ~(4 /* isWaitingForChildren */ | 512 /* needsRerender */);
    }
    // ( •_•)
    // ( •_•)>⌐■-■
    // (⌐■_■)
};
const forceUpdate = (ref) => {
    {
        const hostRef = getHostRef(ref);
        const isConnected = hostRef.$hostElement$.isConnected;
        if (isConnected && (hostRef.$flags$ & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
            scheduleUpdate(hostRef, false);
        }
        // Returns "true" when the forced update was successfully scheduled
        return isConnected;
    }
};
const appDidLoad = (who) => {
    // on appload
    // we have finish the first big initial render
    {
        addHydratedFlag(doc.documentElement);
    }
    nextTick(() => emitEvent(win, 'appload', { detail: { namespace: NAMESPACE } }));
};
const safeCall = (instance, method, arg) => {
    if (instance && instance[method]) {
        try {
            return instance[method](arg);
        }
        catch (e) {
            consoleError(e);
        }
    }
    return undefined;
};
const then = (promise, thenFn) => {
    return promise && promise.then ? promise.then(thenFn) : thenFn();
};
const addHydratedFlag = (elm) => ( elm.classList.add('hydrated') );
const parsePropertyValue = (propValue, propType) => {
    // ensure this value is of the correct prop type
    if (propValue != null && !isComplexType(propValue)) {
        if ( propType & 1 /* String */) {
            // could have been passed as a number or boolean
            // but we still want it as a string
            return String(propValue);
        }
        // redundant return here for better minification
        return propValue;
    }
    // not sure exactly what type we want
    // so no need to change to a different type
    return propValue;
};
const getValue = (ref, propName) => getHostRef(ref).$instanceValues$.get(propName);
const setValue = (ref, propName, newVal, cmpMeta) => {
    // check our new property value against our internal value
    const hostRef = getHostRef(ref);
    const oldVal = hostRef.$instanceValues$.get(propName);
    const flags = hostRef.$flags$;
    const instance =  hostRef.$lazyInstance$ ;
    newVal = parsePropertyValue(newVal, cmpMeta.$members$[propName][0]);
    if (( !(flags & 8 /* isConstructingInstance */) || oldVal === undefined) && newVal !== oldVal) {
        // gadzooks! the property's value has changed!!
        // set our new value!
        hostRef.$instanceValues$.set(propName, newVal);
        if ( instance) {
            if ( (flags & (2 /* hasRendered */ | 16 /* isQueuedForUpdate */)) === 2 /* hasRendered */) {
                // looks like this value actually changed, so we've got work to do!
                // but only if we've already rendered, otherwise just chill out
                // queue that we need to do an update, but don't worry about queuing
                // up millions cuz this function ensures it only runs once
                scheduleUpdate(hostRef, false);
            }
        }
    }
};
const proxyComponent = (Cstr, cmpMeta, flags) => {
    if ( cmpMeta.$members$) {
        // It's better to have a const than two Object.entries()
        const members = Object.entries(cmpMeta.$members$);
        const prototype = Cstr.prototype;
        members.map(([memberName, [memberFlags]]) => {
            if ( (memberFlags & 31 /* Prop */ || (( flags & 2 /* proxyState */) && memberFlags & 32 /* State */))) {
                // proxyComponent - prop
                Object.defineProperty(prototype, memberName, {
                    get() {
                        // proxyComponent, get value
                        return getValue(this, memberName);
                    },
                    set(newValue) {
                        // proxyComponent, set value
                        setValue(this, memberName, newValue, cmpMeta);
                    },
                    configurable: true,
                    enumerable: true,
                });
            }
        });
        if ( ( flags & 1 /* isElementConstructor */)) {
            const attrNameToPropName = new Map();
            prototype.attributeChangedCallback = function (attrName, _oldValue, newValue) {
                plt.jmp(() => {
                    const propName = attrNameToPropName.get(attrName);
                    this[propName] = newValue === null && typeof this[propName] === 'boolean' ? false : newValue;
                });
            };
            // create an array of attributes to observe
            // and also create a map of html attribute name to js property name
            Cstr.observedAttributes = members
                .filter(([_, m]) => m[0] & 15 /* HasAttribute */) // filter to only keep props that should match attributes
                .map(([propName, m]) => {
                const attrName = m[1] || propName;
                attrNameToPropName.set(attrName, propName);
                return attrName;
            });
        }
    }
    return Cstr;
};
const initializeComponent = async (elm, hostRef, cmpMeta, hmrVersionId, Cstr) => {
    // initializeComponent
    if ( (hostRef.$flags$ & 32 /* hasInitializedComponent */) === 0) {
        {
            // we haven't initialized this element yet
            hostRef.$flags$ |= 32 /* hasInitializedComponent */;
            // lazy loaded components
            // request the component's implementation to be
            // wired up with the host element
            Cstr = loadModule(cmpMeta);
            if (Cstr.then) {
                // Await creates a micro-task avoid if possible
                const endLoad = uniqueTime();
                Cstr = await Cstr;
                endLoad();
            }
            if ( !Cstr.isProxied) {
                proxyComponent(Cstr, cmpMeta, 2 /* proxyState */);
                Cstr.isProxied = true;
            }
            const endNewInstance = createTime('createInstance', cmpMeta.$tagName$);
            // ok, time to construct the instance
            // but let's keep track of when we start and stop
            // so that the getters/setters don't incorrectly step on data
            {
                hostRef.$flags$ |= 8 /* isConstructingInstance */;
            }
            // construct the lazy-loaded component implementation
            // passing the hostRef is very important during
            // construction in order to directly wire together the
            // host element and the lazy-loaded instance
            try {
                new Cstr(hostRef);
            }
            catch (e) {
                consoleError(e);
            }
            {
                hostRef.$flags$ &= ~8 /* isConstructingInstance */;
            }
            endNewInstance();
        }
        if ( Cstr.style) {
            // this component has styles but we haven't registered them yet
            let style = Cstr.style;
            const scopeId = getScopeId(cmpMeta);
            if (!styles.has(scopeId)) {
                const endRegisterStyles = createTime('registerStyles', cmpMeta.$tagName$);
                registerStyle(scopeId, style, !!(cmpMeta.$flags$ & 1 /* shadowDomEncapsulation */));
                endRegisterStyles();
            }
        }
    }
    // we've successfully created a lazy instance
    const ancestorComponent = hostRef.$ancestorComponent$;
    const schedule = () => scheduleUpdate(hostRef, true);
    if ( ancestorComponent && ancestorComponent['s-rc']) {
        // this is the intial load and this component it has an ancestor component
        // but the ancestor component has NOT fired its will update lifecycle yet
        // so let's just cool our jets and wait for the ancestor to continue first
        // this will get fired off when the ancestor component
        // finally gets around to rendering its lazy self
        // fire off the initial update
        ancestorComponent['s-rc'].push(schedule);
    }
    else {
        schedule();
    }
};
const connectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        const cmpMeta = hostRef.$cmpMeta$;
        const endConnected = createTime('connectedCallback', cmpMeta.$tagName$);
        if (!(hostRef.$flags$ & 1 /* hasConnected */)) {
            // first time this component has connected
            hostRef.$flags$ |= 1 /* hasConnected */;
            {
                // find the first ancestor component (if there is one) and register
                // this component as one of the actively loading child components for its ancestor
                let ancestorComponent = elm;
                while ((ancestorComponent = ancestorComponent.parentNode || ancestorComponent.host)) {
                    // climb up the ancestors looking for the first
                    // component that hasn't finished its lifecycle update yet
                    if (
                        ancestorComponent['s-p']) {
                        // we found this components first ancestor component
                        // keep a reference to this component's ancestor component
                        attachToAncestor(hostRef, (hostRef.$ancestorComponent$ = ancestorComponent));
                        break;
                    }
                }
            }
            // Lazy properties
            // https://developers.google.com/web/fundamentals/web-components/best-practices#lazy-properties
            if ( cmpMeta.$members$) {
                Object.entries(cmpMeta.$members$).map(([memberName, [memberFlags]]) => {
                    if (memberFlags & 31 /* Prop */ && elm.hasOwnProperty(memberName)) {
                        const value = elm[memberName];
                        delete elm[memberName];
                        elm[memberName] = value;
                    }
                });
            }
            {
                // connectedCallback, taskQueue, initialLoad
                // angular sets attribute AFTER connectCallback
                // https://github.com/angular/angular/issues/18909
                // https://github.com/angular/angular/issues/19940
                nextTick(() => initializeComponent(elm, hostRef, cmpMeta));
            }
        }
        endConnected();
    }
};
const disconnectedCallback = (elm) => {
    if ((plt.$flags$ & 1 /* isTmpDisconnected */) === 0) {
        const hostRef = getHostRef(elm);
        // clear CSS var-shim tracking
        if ( plt.$cssShim$) {
            plt.$cssShim$.removeHost(elm);
        }
    }
};
const bootstrapLazy = (lazyBundles, options = {}) => {
    const endBootstrap = createTime();
    const cmpTags = [];
    const exclude = options.exclude || [];
    const customElements = win.customElements;
    const head = doc.head;
    const metaCharset = /*@__PURE__*/ head.querySelector('meta[charset]');
    const visibilityStyle = /*@__PURE__*/ doc.createElement('style');
    const deferredConnectedCallbacks = [];
    let appLoadFallback;
    let isBootstrapping = true;
    Object.assign(plt, options);
    plt.$resourcesUrl$ = new URL(options.resourcesUrl || './', doc.baseURI).href;
    lazyBundles.map(lazyBundle => lazyBundle[1].map(compactMeta => {
        const cmpMeta = {
            $flags$: compactMeta[0],
            $tagName$: compactMeta[1],
            $members$: compactMeta[2],
            $listeners$: compactMeta[3],
        };
        {
            cmpMeta.$members$ = compactMeta[2];
        }
        const tagName =  cmpMeta.$tagName$;
        const HostElement = class extends HTMLElement {
            // StencilLazyHost
            constructor(self) {
                // @ts-ignore
                super(self);
                self = this;
                registerHost(self, cmpMeta);
            }
            connectedCallback() {
                if (appLoadFallback) {
                    clearTimeout(appLoadFallback);
                    appLoadFallback = null;
                }
                if (isBootstrapping) {
                    // connectedCallback will be processed once all components have been registered
                    deferredConnectedCallbacks.push(this);
                }
                else {
                    plt.jmp(() => connectedCallback(this));
                }
            }
            disconnectedCallback() {
                plt.jmp(() => disconnectedCallback(this));
            }
            forceUpdate() {
                forceUpdate(this);
            }
            componentOnReady() {
                return getHostRef(this).$onReadyPromise$;
            }
        };
        cmpMeta.$lazyBundleId$ = lazyBundle[0];
        if (!exclude.includes(tagName) && !customElements.get(tagName)) {
            cmpTags.push(tagName);
            customElements.define(tagName, proxyComponent(HostElement, cmpMeta, 1 /* isElementConstructor */));
        }
    }));
    {
        visibilityStyle.innerHTML = cmpTags + HYDRATED_CSS;
        visibilityStyle.setAttribute('data-styles', '');
        head.insertBefore(visibilityStyle, metaCharset ? metaCharset.nextSibling : head.firstChild);
    }
    // Process deferred connectedCallbacks now all components have been registered
    isBootstrapping = false;
    if (deferredConnectedCallbacks.length) {
        deferredConnectedCallbacks.map(host => host.connectedCallback());
    }
    else {
        {
            plt.jmp(() => (appLoadFallback = setTimeout(appDidLoad, 30)));
        }
    }
    // Fallback appLoad event
    endBootstrap();
};
const hostRefs = new WeakMap();
const getHostRef = (ref) => hostRefs.get(ref);
const registerInstance = (lazyInstance, hostRef) => hostRefs.set((hostRef.$lazyInstance$ = lazyInstance), hostRef);
const registerHost = (elm, cmpMeta) => {
    const hostRef = {
        $flags$: 0,
        $hostElement$: elm,
        $cmpMeta$: cmpMeta,
        $instanceValues$: new Map(),
    };
    {
        hostRef.$onReadyPromise$ = new Promise(r => (hostRef.$onReadyResolve$ = r));
        elm['s-p'] = [];
        elm['s-rc'] = [];
    }
    return hostRefs.set(elm, hostRef);
};
const isMemberInElement = (elm, memberName) => memberName in elm;
const consoleError = (e) => console.error(e);
const cmpModules = /*@__PURE__*/ new Map();
const loadModule = (cmpMeta, hostRef, hmrVersionId) => {
    // loadModuleImport
    const exportName = cmpMeta.$tagName$.replace(/-/g, '_');
    const bundleId = cmpMeta.$lazyBundleId$;
    const module =  cmpModules.get(bundleId) ;
    if (module) {
        return module[exportName];
    }
    return __webpack_require__("../../../dist/libs/design/stencil/cnt/bank/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$")(`./${bundleId}.entry.js`).then(importedModule => {
        {
            cmpModules.set(bundleId, importedModule);
        }
        return importedModule[exportName];
    }, consoleError);
};
const styles = new Map();
const queueDomReads = [];
const queueDomWrites = [];
const queueTask = (queue, write) => (cb) => {
    queue.push(cb);
    if (!queuePending) {
        queuePending = true;
        if (write && plt.$flags$ & 4 /* queueSync */) {
            nextTick(flush);
        }
        else {
            plt.raf(flush);
        }
    }
};
const consume = (queue) => {
    for (let i = 0; i < queue.length; i++) {
        try {
            queue[i](performance.now());
        }
        catch (e) {
            consoleError(e);
        }
    }
    queue.length = 0;
};
const flush = () => {
    // always force a bunch of medium callbacks to run, but still have
    // a throttle on how many can run in a certain time
    // DOM READS!!!
    consume(queueDomReads);
    // DOM WRITES!!!
    {
        consume(queueDomWrites);
        if ((queuePending = queueDomReads.length > 0)) {
            // still more to do yet, but we've run out of time
            // let's let this thing cool off and try again in the next tick
            plt.raf(flush);
        }
    }
};
const nextTick = /*@__PURE__*/ (cb) => promiseResolve().then(cb);
const writeTask = /*@__PURE__*/ queueTask(queueDomWrites, true);




/***/ }),

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/loader.mjs":
/*!********************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/loader.mjs ***!
  \********************************************************************************************************************/
/*! exports provided: defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return defineCustomElements; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");
/* harmony import */ var _patch_0fc89114_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patch-0fc89114.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/patch-0fc89114.js");



const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return Object(_patch_0fc89114_js__WEBPACK_IMPORTED_MODULE_1__["a"])().then(() => {
  return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["b"])([["my-component_8",[[2,"my-component"],[2,"s-cnt-bank-history-page"],[2,"s-cnt-bank-history-page-menu",{"payload":[16]}],[2,"s-cnt-bank-history-payment",{"payload":[16]}],[2,"s-cnt-bank-history-page-menu-card",{"payload":[16]}],[2,"s-cnt-bank-history-payment-card",{"payload":[16]}],[2,"s-cnt-bank-mobile-footer",{"payload":[8],"lastClickedItemState":[32],"tabItemTag":[32]}],[2,"s-cnt-bank-mobile-header",{"payload":[16],"theme":[1]}]]],["s-cnt-bank-main-page-wrapper",[[2,"s-cnt-bank-main-page-wrapper"]]],["s-cnt-bank-payment-categories-card",[[2,"s-cnt-bank-payment-categories-card",{"categories":[16]}]]],["s-cnt-bank-additional-options",[[2,"s-cnt-bank-additional-options",{"payload":[16],"openedAdditionalOptions":[8,"opened-additional-options"]}]]],["s-cnt-bank-payment-page-categories_2",[[2,"s-cnt-bank-payment-page-categories",{"payload":[16],"openedAdditionalOptions":[32]}],[2,"s-cnt-bank-payment-page-tabs",{"payload":[16],"cardDisclosure":[32],"taskCardWarp":[32],"checkedTasks":[32]}]]],["s-cnt-bank-payment-page-wrapper",[[2,"s-cnt-bank-payment-page-wrapper"]]],["s-cnt-bank-search-history-card_2",[[2,"s-cnt-bank-search-history-card",{"cardItems":[16]}],[2,"s-cnt-bank-search-history-card-content",{"content":[16]}]]],["s-cnt-bank-search-history-cards-wrapper_2",[[2,"s-cnt-bank-search-history-cards-wrapper",{"payload":[16]}],[2,"s-cnt-bank-search-history-header",{"payload":[16]}]]],["s-cnt-bank-search-history-page",[[2,"s-cnt-bank-search-history-page"]]],["s-cnt-bank-main-carousel-banners_4",[[2,"s-cnt-bank-main-page-categories",{"payload":[8],"openedAdditionalOptions":[32]}],[2,"s-cnt-bank-main-carousel-banners",{"payload":[8]}],[2,"s-cnt-bank-main-page-banner-in-maps",{"payload":[16]}],[2,"s-cnt-bank-main-page-tabs",{"payload":[8],"lastClickedItemState":[32],"tabItemTag":[32]}]]]], options);
  });
};




/***/ }),

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/patch-0fc89114.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/patch-0fc89114.js ***!
  \***************************************************************************************************************************/
/*! exports provided: a, p */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return patchEsm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return patchBrowser; });
/* harmony import */ var _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-42a9f42f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/index-42a9f42f.js");


/*
 Stencil Client Patch v1.17.3 | MIT Licensed | https://stenciljs.com
 */
const noop = () => {
    /* noop*/
};
const IS_DENO_ENV = typeof Deno !== 'undefined';
const IS_NODE_ENV = !IS_DENO_ENV &&
    typeof global !== 'undefined' &&
    "function" === 'function' &&
    !!global.process &&
    typeof __filename === 'string' &&
    (!global.origin || typeof global.origin !== 'string');
const IS_DENO_WINDOWS_ENV = IS_DENO_ENV && Deno.build.os === 'windows';
const getCurrentDirectory = IS_NODE_ENV ? process.cwd : IS_DENO_ENV ? Deno.cwd : () => '/';
const exit = IS_NODE_ENV ? process.exit : IS_DENO_ENV ? Deno.exit : noop;
const getDynamicImportFunction = (namespace) => `__sc_import_${namespace.replace(/\s|-/g, '_')}`;
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["C"] && _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["C"].supports && _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["C"].supports('color', 'var(--c)'))) {
        // @ts-ignore
        return __webpack_require__.e(/*! import() | polyfills-css-shim */ "polyfills-css-shim").then(__webpack_require__.t.bind(null, /*! ./css-shim-a659079f.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/css-shim-a659079f.js", 7)).then(() => {
            if ((_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["p"].$cssShim$ = _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"].__cssshim)) {
                return _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["p"].$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["a"])();
};
const patchBrowser = () => {
    {
        // shim css vars
        _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["p"].$cssShim$ = _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"].__cssshim;
    }
    // @ts-ignore
    const scriptElm =  Array.from(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["d"].querySelectorAll('script')).find(s => new RegExp(`\/${_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["N"]}(\\.esm)?\\.js($|\\?|#)`).test(s.src) || s.getAttribute('data-stencil-namespace') === _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["N"])
        ;
    const opts =  scriptElm['data-opts'] || {} ;
    if ( 'onbeforeload' in scriptElm && !history.scrollRestoration /* IS_ESM_BUILD */) {
        // Safari < v11 support: This IF is true if it's Safari below v11.
        // This fn cannot use async/await since Safari didn't support it until v11,
        // however, Safari 10 did support modules. Safari 10 also didn't support "nomodule",
        // so both the ESM file and nomodule file would get downloaded. Only Safari
        // has 'onbeforeload' in the script, and "history.scrollRestoration" was added
        // to Safari in v11. Return a noop then() so the async/await ESM code doesn't continue.
        // IS_ESM_BUILD is replaced at build time so this check doesn't happen in systemjs builds.
        return {
            then() {
                /* promise noop */
            },
        };
    }
    {
        opts.resourcesUrl = new URL('.', new URL(scriptElm.getAttribute('data-resources-url') || scriptElm.src, _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"].location.href)).href;
        {
            patchDynamicImport(opts.resourcesUrl, scriptElm);
        }
        if ( !_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"].customElements) {
            // module support, but no custom elements support (Old Edge)
            // @ts-ignore
            return __webpack_require__.e(/*! import() | polyfills-dom */ "polyfills-dom").then(__webpack_require__.t.bind(null, /*! ./dom-4061ceba.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/dom-4061ceba.js", 7)).then(() => opts);
        }
    }
    return Object(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["a"])(opts);
};
const patchDynamicImport = (base, orgScriptElm) => {
    const importFunctionName = getDynamicImportFunction(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["N"]);
    try {
        // test if this browser supports dynamic imports
        // There is a caching issue in V8, that breaks using import() in Function
        // By generating a random string, we can workaround it
        // Check https://bugs.chromium.org/p/chromium/issues/detail?id=990810 for more info
        _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"][importFunctionName] = new Function('w', `return import(w);//${Math.random()}`);
    }
    catch (e) {
        // this shim is specifically for browsers that do support "esm" imports
        // however, they do NOT support "dynamic" imports
        // basically this code is for old Edge, v18 and below
        const moduleMap = new Map();
        _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"][importFunctionName] = (src) => {
            const url = new URL(src, base).href;
            let mod = moduleMap.get(url);
            if (!mod) {
                const script = _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["d"].createElement('script');
                script.type = 'module';
                script.crossOrigin = orgScriptElm.crossOrigin;
                script.src = URL.createObjectURL(new Blob([`import * as m from '${url}'; window.${importFunctionName}.m = m;`], { type: 'application/javascript' }));
                mod = new Promise(resolve => {
                    script.onload = () => {
                        resolve(_index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["w"][importFunctionName].m);
                        script.remove();
                    };
                });
                moduleMap.set(url, mod);
                _index_42a9f42f_js__WEBPACK_IMPORTED_MODULE_0__["d"].head.appendChild(script);
            }
            return mod;
        };
    }
};




/***/ }),

/***/ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/polyfills/index.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/dist/esm/polyfills/index.js ***!
  \****************************************************************************************************************************/
/*! exports provided: applyPolyfills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return applyPolyfills; });
function applyPolyfills() {
  var promises = [];
  if (typeof window !== 'undefined') {
    var win = window;

    if (!win.customElements ||
      (win.Element && (!win.Element.prototype.closest || !win.Element.prototype.matches || !win.Element.prototype.remove || !win.Element.prototype.getRootNode))) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-dom */ "polyfills-dom").then(__webpack_require__.t.bind(null, /*! ./dom.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/polyfills/dom.js", 7)));
    }

    function checkIfURLIsSupported() {
      try {
        var u = new URL('b', 'http://a');
        u.pathname = 'c%20d';
        return (u.href === 'http://a/c%20d') && u.searchParams;
      } catch (e) {
        return false;
      }
    }

    if (
      'function' !== typeof Object.assign || !Object.entries ||
      !Array.prototype.find || !Array.prototype.includes ||
      !String.prototype.startsWith || !String.prototype.endsWith ||
      (win.NodeList && !win.NodeList.prototype.forEach) ||
      !win.fetch ||
      !checkIfURLIsSupported() ||
      typeof WeakMap == 'undefined'
    ) {
      promises.push(__webpack_require__.e(/*! import() | polyfills-core-js */ "polyfills-core-js").then(__webpack_require__.t.bind(null, /*! ./core-js.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/polyfills/core-js.js", 7)));
    }
  }
  return Promise.all(promises);
}


/***/ }),

/***/ "../../../dist/libs/design/stencil/cnt/bank/loader/index.es2017.mjs":
/*!************************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/dist/libs/design/stencil/cnt/bank/loader/index.es2017.mjs ***!
  \************************************************************************************************************************/
/*! exports provided: applyPolyfills, defineCustomElements */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dist/esm/polyfills/index.js */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/polyfills/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "applyPolyfills", function() { return _dist_esm_polyfills_index_js__WEBPACK_IMPORTED_MODULE_0__["applyPolyfills"]; });

/* harmony import */ var _dist_esm_loader_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/esm/loader.mjs */ "../../../dist/libs/design/stencil/cnt/bank/dist/esm/loader.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defineCustomElements", function() { return _dist_esm_loader_mjs__WEBPACK_IMPORTED_MODULE_1__["defineCustomElements"]; });






/***/ }),

/***/ "../../../libs/design/stencil/cnt/charts/src/utils/utils.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/libs/design/stencil/cnt/charts/src/utils/utils.ts ***!
  \****************************************************************************************************************/
/*! exports provided: format, getRandomId, toFixed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomId", function() { return getRandomId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toFixed", function() { return toFixed; });
function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function getRandomId(prefix, length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return prefix + result;
}
function toFixed(value, length = 2) {
    return parseFloat(parseFloat(value + '').toFixed(length));
}


/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _ng_cnt_bank_history_page_ng_cnt_bank_history_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ng-cnt-bank-history-page/ng-cnt-bank-history-page.component */ "./src/app/ng-cnt-bank-history-page/ng-cnt-bank-history-page.component.ts");
/* harmony import */ var _ng_cnt_bank_payment_page_wrapper_ng_cnt_bank_payment_page_wrapper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component */ "./src/app/ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component.ts");
/* harmony import */ var _ng_cnt_bank_search_history_page_ng_cnt_bank_search_history_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component */ "./src/app/ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component.ts");
/* harmony import */ var _ng_cnt_bank_product_list_page_ng_cnt_bank_product_list_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component */ "./src/app/ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component.ts");
/* harmony import */ var _ng_cnt_bank_product_single_page_ng_cnt_bank_product_single_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component */ "./src/app/ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component.ts");
/* harmony import */ var _ng_bank_cards_page_ng_bank_cards_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-bank-cards-page/ng-bank-cards-page.component */ "./src/app/ng-bank-cards-page/ng-bank-cards-page.component.ts");
/* harmony import */ var _ng_snt_bank_slider_cards_page_ng_snt_bank_slider_cards_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component */ "./src/app/ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component.ts");
/* harmony import */ var _ng_cnt_bank_scan_code_page_wrapper_ng_cnt_bank_scan_code_page_wrapper_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component */ "./src/app/ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component.ts");













const routes = [
    {
        path: '',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
    },
    {
        path: 'main',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
    },
    {
        path: 'history',
        component: _ng_cnt_bank_history_page_ng_cnt_bank_history_page_component__WEBPACK_IMPORTED_MODULE_3__["NgCntBankHistoryPageComponent"],
    },
    {
        path: 'payments',
        component: _ng_cnt_bank_payment_page_wrapper_ng_cnt_bank_payment_page_wrapper_component__WEBPACK_IMPORTED_MODULE_4__["NgCntBankPaymentPageWrapperComponent"],
    },
    {
        path: 'search',
        component: _ng_cnt_bank_search_history_page_ng_cnt_bank_search_history_page_component__WEBPACK_IMPORTED_MODULE_5__["NgCntBankSearchHistoryPageComponent"],
    },
    {
        path: 'catalog',
        component: _ng_cnt_bank_product_list_page_ng_cnt_bank_product_list_page_component__WEBPACK_IMPORTED_MODULE_6__["NgCntBankProductListPageComponent"],
    },
    {
        path: 'single-page',
        component: _ng_cnt_bank_product_single_page_ng_cnt_bank_product_single_page_component__WEBPACK_IMPORTED_MODULE_7__["NgCntBankProductSinglePageComponent"],
    },
    {
        path: 'my-cards',
        component: _ng_bank_cards_page_ng_bank_cards_page_component__WEBPACK_IMPORTED_MODULE_8__["NgBankCardsPageComponent"],
    },
    {
        path: 'cards',
        component: _ng_snt_bank_slider_cards_page_ng_snt_bank_slider_cards_page_component__WEBPACK_IMPORTED_MODULE_9__["NgSntBankSliderCardsPageComponent"],
    },
    {
        path: 'scan',
        component: _ng_cnt_bank_scan_code_page_wrapper_ng_cnt_bank_scan_code_page_wrapper_component__WEBPACK_IMPORTED_MODULE_10__["NgCntBankScanCodePageWrapperComponent"],
    },
    {
        path: '**',
        component: _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_2__["MainPageComponent"],
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bank.service */ "./src/app/bank.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
        this.title = 'main-cnt-bank';
    }
    getBankFooterMock() {
        return this.StorageBank.getBankFooterMock();
    }
    clickOnFooterItem(id) {
        this.StorageBank.navigateFooterItem(id.detail);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["cnt-nx-workspace-root"]], decls: 3, vars: 1, consts: [[1, "footer-wrap"], [3, "payload", "clickOnFooterItem"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "s-cnt-bank-mobile-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnFooterItem", function AppComponent_Template_s_cnt_bank_mobile_footer_clickOnFooterItem_2_listener($event) { return ctx.clickOnFooterItem($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getBankFooterMock());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".footer-wrap[_ngcontent-%COMP%] {\n  max-width: 1024px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItd3JhcCB7XG4gIG1heC13aWR0aDogMTAyNHB4O1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-page/main-page.component */ "./src/app/main-page/main-page.component.ts");
/* harmony import */ var _ng_cnt_bank_history_page_ng_cnt_bank_history_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ng-cnt-bank-history-page/ng-cnt-bank-history-page.component */ "./src/app/ng-cnt-bank-history-page/ng-cnt-bank-history-page.component.ts");
/* harmony import */ var _ng_cnt_bank_search_history_page_ng_cnt_bank_search_history_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component */ "./src/app/ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component.ts");
/* harmony import */ var _ng_cnt_bank_payment_page_wrapper_ng_cnt_bank_payment_page_wrapper_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component */ "./src/app/ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component.ts");
/* harmony import */ var _ng_cnt_bank_product_list_page_ng_cnt_bank_product_list_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component */ "./src/app/ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component.ts");
/* harmony import */ var _ng_cnt_bank_product_single_page_ng_cnt_bank_product_single_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component */ "./src/app/ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component.ts");
/* harmony import */ var _ng_bank_cards_page_ng_bank_cards_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ng-bank-cards-page/ng-bank-cards-page.component */ "./src/app/ng-bank-cards-page/ng-bank-cards-page.component.ts");
/* harmony import */ var _ng_snt_bank_slider_cards_page_ng_snt_bank_slider_cards_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component */ "./src/app/ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component.ts");
/* harmony import */ var _ng_cnt_bank_scan_code_page_wrapper_ng_cnt_bank_scan_code_page_wrapper_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component */ "./src/app/ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component.ts");














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _ng_cnt_bank_history_page_ng_cnt_bank_history_page_component__WEBPACK_IMPORTED_MODULE_5__["NgCntBankHistoryPageComponent"],
        _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
        _ng_cnt_bank_search_history_page_ng_cnt_bank_search_history_page_component__WEBPACK_IMPORTED_MODULE_6__["NgCntBankSearchHistoryPageComponent"],
        _ng_cnt_bank_payment_page_wrapper_ng_cnt_bank_payment_page_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["NgCntBankPaymentPageWrapperComponent"],
        _ng_cnt_bank_product_list_page_ng_cnt_bank_product_list_page_component__WEBPACK_IMPORTED_MODULE_8__["NgCntBankProductListPageComponent"],
        _ng_cnt_bank_product_single_page_ng_cnt_bank_product_single_page_component__WEBPACK_IMPORTED_MODULE_9__["NgCntBankProductSinglePageComponent"],
        _ng_bank_cards_page_ng_bank_cards_page_component__WEBPACK_IMPORTED_MODULE_10__["NgBankCardsPageComponent"],
        _ng_snt_bank_slider_cards_page_ng_snt_bank_slider_cards_page_component__WEBPACK_IMPORTED_MODULE_11__["NgSntBankSliderCardsPageComponent"],
        _ng_cnt_bank_scan_code_page_wrapper_ng_cnt_bank_scan_code_page_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["NgCntBankScanCodePageWrapperComponent"]], imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _ng_cnt_bank_history_page_ng_cnt_bank_history_page_component__WEBPACK_IMPORTED_MODULE_5__["NgCntBankHistoryPageComponent"],
                    _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"],
                    _ng_cnt_bank_search_history_page_ng_cnt_bank_search_history_page_component__WEBPACK_IMPORTED_MODULE_6__["NgCntBankSearchHistoryPageComponent"],
                    _ng_cnt_bank_payment_page_wrapper_ng_cnt_bank_payment_page_wrapper_component__WEBPACK_IMPORTED_MODULE_7__["NgCntBankPaymentPageWrapperComponent"],
                    _ng_cnt_bank_product_list_page_ng_cnt_bank_product_list_page_component__WEBPACK_IMPORTED_MODULE_8__["NgCntBankProductListPageComponent"],
                    _ng_cnt_bank_product_single_page_ng_cnt_bank_product_single_page_component__WEBPACK_IMPORTED_MODULE_9__["NgCntBankProductSinglePageComponent"],
                    _ng_bank_cards_page_ng_bank_cards_page_component__WEBPACK_IMPORTED_MODULE_10__["NgBankCardsPageComponent"],
                    _ng_snt_bank_slider_cards_page_ng_snt_bank_slider_cards_page_component__WEBPACK_IMPORTED_MODULE_11__["NgSntBankSliderCardsPageComponent"],
                    _ng_cnt_bank_scan_code_page_wrapper_ng_cnt_bank_scan_code_page_wrapper_component__WEBPACK_IMPORTED_MODULE_12__["NgCntBankScanCodePageWrapperComponent"]
                ],
                imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/bank.service.ts":
/*!*********************************!*\
  !*** ./src/app/bank.service.ts ***!
  \*********************************/
/*! exports provided: BankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BankService", function() { return BankService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _mock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mock */ "./src/app/mock.ts");
/* harmony import */ var _libs_design_stencil_cnt_charts_src_utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../libs/design/stencil/cnt/charts/src/utils/utils */ "../../../libs/design/stencil/cnt/charts/src/utils/utils.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class BankService {
    constructor(router) {
        this.router = router;
        this.mainPageCategoriesMock = _mock__WEBPACK_IMPORTED_MODULE_1__["mainPageCategoriesMock"];
        this.headerMock = _mock__WEBPACK_IMPORTED_MODULE_1__["headerMock"];
        this.mainPageTabsMock = _mock__WEBPACK_IMPORTED_MODULE_1__["mainPageTabsMock"];
        this.mainBannerMock = _mock__WEBPACK_IMPORTED_MODULE_1__["mainBannerMock"];
        this.mainCarouselBannersMock = _mock__WEBPACK_IMPORTED_MODULE_1__["mainCarouselBannersMock"];
        this.bankFooterMock = _mock__WEBPACK_IMPORTED_MODULE_1__["bankFooterMock"];
        this.bankProductsListMock = _mock__WEBPACK_IMPORTED_MODULE_1__["bankProductsListMock"];
        this.bankProductListSinglePage = _mock__WEBPACK_IMPORTED_MODULE_1__["bankProductListSinglePage"];
        //  Абдуллах
        this.paymentCategories = _mock__WEBPACK_IMPORTED_MODULE_1__["paymentCategories"];
        this.paymentPageTabs = _mock__WEBPACK_IMPORTED_MODULE_1__["paymentPageTabs"];
        this.scanCodePage = _mock__WEBPACK_IMPORTED_MODULE_1__["scanCodePage"];
        this.scanCodeFooter = _mock__WEBPACK_IMPORTED_MODULE_1__["scanCodeFooter"];
        //Адам
        this.historyPageMenuMock = _mock__WEBPACK_IMPORTED_MODULE_1__["historyPageMenuMock"];
        this.paymentHistoryMock = _mock__WEBPACK_IMPORTED_MODULE_1__["paymentHistoryMock"];
        this.searchHistoryHeader = _mock__WEBPACK_IMPORTED_MODULE_1__["searchHistoryHeader"];
        this.searchHistoryCards = _mock__WEBPACK_IMPORTED_MODULE_1__["searchHistoryCards"];
        this.sliderCardsMock = _mock__WEBPACK_IMPORTED_MODULE_1__["sliderCardsMock"];
        this.myCardsMock = _mock__WEBPACK_IMPORTED_MODULE_1__["myCardsMock"];
        this.cardBonusMock = _mock__WEBPACK_IMPORTED_MODULE_1__["cardBonusMock"];
        this.cardSettings = _mock__WEBPACK_IMPORTED_MODULE_1__["cardSettings"];
        this.sliderCardsHeaderTitle = _mock__WEBPACK_IMPORTED_MODULE_1__["sliderCardsHeaderTitle"];
        this.sliderCardsTransfersText = _mock__WEBPACK_IMPORTED_MODULE_1__["sliderCardsTransfersText"];
        this.myCardsMenuButtonsMock = _mock__WEBPACK_IMPORTED_MODULE_1__["myCardsMenuButtonsMock"];
        this.last_scroll_run_time = 0;
        this.oldScroll = 0;
    }
    getMyCardsMenuButtonsMock() {
        return this.myCardsMenuButtonsMock;
    }
    getSliderCardsMock() {
        return this.sliderCardsMock;
    }
    getMyCardsMock() {
        return this.myCardsMock;
    }
    getCardBonusMock() {
        return this.cardBonusMock;
    }
    getCardSettings() {
        return this.cardSettings;
    }
    getSliderCardsTransfersText() {
        return this.sliderCardsTransfersText;
    }
    getSliderCardsHeaderTitle() {
        return this.sliderCardsHeaderTitle;
    }
    getHistoryPageMenuMock() {
        return this.historyPageMenuMock;
    }
    getBankProductListSinglePage() {
        return this.bankProductListSinglePage;
    }
    getBankProductListPage() {
        return this.bankProductsListMock;
    }
    getPaymentHistoryMock() {
        return this.paymentHistoryMock;
    }
    getSearchHistoryHeader() {
        return this.searchHistoryHeader;
    }
    getSearchHistoryCards() {
        return this.searchHistoryCards;
    }
    // сайхан
    getHeaderContent() {
        return this.bankProductsListMock.productListHeader;
    }
    getFilterItems() {
        return this.bankProductsListMock.filterItems;
    }
    getProductsCards() {
        return this.bankProductsListMock.productsList;
    }
    //навигация по приложению
    navigateFooterItem(id) {
        console.log('navigateFooterItem', id);
        switch (id) {
            case 'main':
                this.router.navigate(['main']);
                break;
            case 'history':
                this.router.navigate(['history']);
                break;
            case 'payments':
                this.router.navigate(['payments']);
                break;
            case 'dialogs':
                this.router.navigate(['dialogs']);
                break;
            case 'catalog':
                this.router.navigate(['catalog']);
                break;
            case 'search':
                this.router.navigate(['search']);
                break;
            case 'single-page':
                this.router.navigate(['single-page']);
                break;
            default:
                this.router.navigate(['main']);
        }
    }
    onAutoScroll(headerWrapper, stickyHeader) {
        // console.log(' START SCROLL ', event.type, event);
        const scrollPos = window.pageYOffset;
        //высота шапки без высоты липкого хедера
        const headerHeight = headerWrapper.offsetHeight - stickyHeader.offsetHeight;
        const valueOpacity = Object(_libs_design_stencil_cnt_charts_src_utils_utils__WEBPACK_IMPORTED_MODULE_2__["toFixed"])(100 - (scrollPos / headerHeight) * 100, 0);
        headerWrapper.style.opacity = `${valueOpacity}%`;
        /* */
        if (Date.now() - this.last_scroll_run_time < 200) {
            return;
        }
        //только при условии что скролл в нужном нам диапазоне
        if (scrollPos >= 0 && scrollPos <= headerHeight) {
            // определяем сторону прокрутки
            if (scrollPos > this.oldScroll) {
                // console.log(' скролл up ');
                window.scroll({
                    top: headerHeight,
                    behavior: 'smooth',
                });
            }
            else {
                // console.log('скролл down ');
                window.scroll({
                    top: 0,
                    behavior: 'smooth',
                });
            }
            this.last_scroll_run_time = Date.now();
        }
        this.oldScroll = scrollPos;
    }
    getMainPageCategoriesMock() {
        return this.mainPageCategoriesMock;
    }
    getHeaderMock() {
        return this.headerMock;
    }
    getMainPageTabsMock() {
        return this.mainPageTabsMock;
    }
    getMainBannerMock() {
        return this.mainBannerMock;
    }
    getMainCarouselBannersMock() {
        return this.mainCarouselBannersMock;
    }
    getBankFooterMock() {
        return this.bankFooterMock;
    }
    //  Абдуллах
    getPaymentCategories() {
        return this.paymentCategories;
    }
    getPaymentPageTabs() {
        return this.paymentPageTabs;
    }
    getScanCodePage() {
        return this.scanCodePage;
    }
    getScanCodeFooter() {
        return this.scanCodeFooter;
    }
}
BankService.ɵfac = function BankService_Factory(t) { return new (t || BankService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BankService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BankService, factory: BankService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BankService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main-page/main-page.component.ts":
/*!**************************************************!*\
  !*** ./src/app/main-page/main-page.component.ts ***!
  \**************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class MainPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
        this.headerBlock = document.getElementById('menu');
        this.header = document.getElementById('header');
    }
    onScroll(event) {
        this.StorageBank.onAutoScroll(this.headerBlock, this.header);
    }
    getHeaderMock() {
        return this.StorageBank.getHeaderMock();
    }
    getMainPageCategoriesMock() {
        return this.StorageBank.getMainPageCategoriesMock();
    }
    getMainPageTabsMock() {
        return this.StorageBank.getMainPageTabsMock();
    }
    getMainBannerMock() {
        return this.StorageBank.getMainBannerMock();
    }
    getMainCarouselBannersMock() {
        return this.StorageBank.getMainCarouselBannersMock();
    }
}
MainPageComponent.ɵfac = function MainPageComponent_Factory(t) { return new (t || MainPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
MainPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainPageComponent, selectors: [["cnt-nx-workspace-main-page"]], hostBindings: function MainPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function MainPageComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 10, vars: 6, consts: [[1, "app"], ["id", "header", 1, "header-wrapper"], ["theme", "main", 3, "payload"], ["id", "menu", 1, "menu"], [3, "payload"], [1, "content-wrapper"]], template: function MainPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-mobile-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-cnt-bank-main-page-categories", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-bank-main-page-tabs", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-cnt-bank-main-page-tabs", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "s-cnt-bank-main-page-banner-in-maps", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "s-cnt-bank-main-carousel-banners", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHeaderMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMainPageCategoriesMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMainPageTabsMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMainPageTabsMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMainBannerMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMainCarouselBannersMock());
    } }, styles: ["#menu[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSx5QkFBQTtBQUxGIiwiZmlsZSI6ImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL21haW4tcGFnZS9tYWluLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi5jb250ZW50LXdyYXBwZXIge1xuICAvL2hlaWdodDogY2FsYygxMDB2aCAtIDIyMHB4KTtcbn1cblxuXG4jbWVudSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-main-page',
                templateUrl: './main-page.component.html',
                styleUrls: ['./main-page.component.scss'],
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/mock.ts":
/*!*************************!*\
  !*** ./src/app/mock.ts ***!
  \*************************/
/*! exports provided: mainPageCategoriesMock, mainPageCategoriesAdditionalMock, mainPageTabsMock, mainBannerMock, mainCarouselBannersMock, bankFooterMock, bankProductsListMock, bankProductListSinglePage, headerMock, historyPageMenuMock, paymentHistoryMock, searchHistoryHeader, searchHistoryCards, paymentCategories, paymentPageTabs, scanCodePage, scanCodeFooter, myCardsMock, sliderCardsMock, cardBonusMock, cardSettings, sliderCardsHeaderTitle, sliderCardsTransfersText, myCardsMenuButtonsMock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPageCategoriesMock", function() { return mainPageCategoriesMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPageCategoriesAdditionalMock", function() { return mainPageCategoriesAdditionalMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainPageTabsMock", function() { return mainPageTabsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainBannerMock", function() { return mainBannerMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainCarouselBannersMock", function() { return mainCarouselBannersMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankFooterMock", function() { return bankFooterMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankProductsListMock", function() { return bankProductsListMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bankProductListSinglePage", function() { return bankProductListSinglePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerMock", function() { return headerMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "historyPageMenuMock", function() { return historyPageMenuMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentHistoryMock", function() { return paymentHistoryMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHistoryHeader", function() { return searchHistoryHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchHistoryCards", function() { return searchHistoryCards; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentCategories", function() { return paymentCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paymentPageTabs", function() { return paymentPageTabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCodePage", function() { return scanCodePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scanCodeFooter", function() { return scanCodeFooter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCardsMock", function() { return myCardsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCardsMock", function() { return sliderCardsMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardBonusMock", function() { return cardBonusMock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardSettings", function() { return cardSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCardsHeaderTitle", function() { return sliderCardsHeaderTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCardsTransfersText", function() { return sliderCardsTransfersText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "myCardsMenuButtonsMock", function() { return myCardsMenuButtonsMock; });
//Сайхан
const mainPageCategoriesMock = {
    categoriesPanelItems: [
        {
            title: 'Действия',
            category: 'action',
        },
        {
            title: 'История',
            category: 'history',
        },
        {
            title: 'Финансы',
            category: 'finance',
        },
    ],
    categoriesItems: [
        {
            category: 'action',
            actionQrIcon: 'fas fa-qrcode',
            actionAddIcon: 'fas fa-plus-circle',
        },
        {
            category: 'history',
            title: 'Единая подписка СберПрайм',
            background: '',
        },
        {
            category: 'history',
            title: 'Собирайте деньги в Диалогах',
            background: '',
        },
        {
            category: 'finance',
            title: 'Ваш бюджет ничтожен',
            background: '#fff',
            btnTitle: 'Показать',
        },
        {
            category: 'finance',
            title: 'Бонусы спасибо',
            background: '#fff',
            btnTitle: 'Показать',
        },
        {
            category: 'finance',
            title: 'Азино три топора',
            background: '#fff',
            btnTitle: 'Показать',
        },
    ],
};
const mainPageCategoriesAdditionalMock = [
    {
        id: 1,
        title: 'Темная тема',
        subtitle: '',
        icon: 'far fa-moon',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 2,
        title: 'Настроить интересы',
        subtitle: 'Выбрать темы для историй и педложений от банка',
        icon: 'fas fa-magic',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 3,
        title: 'Отобажение карт и счетов',
        subtitle: 'Восстановить, если вы их скрыли',
        icon: 'far fa-eye',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 4,
        title: 'Заблокированные карты',
        subtitle: 'Показывать на главном экране',
        icon: 'fas fa-lock',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 5,
        title: 'Разделы на главном',
        subtitle: 'Скрыть, вернуть или поменять местами',
        icon: 'fas fa-eye-slash',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 6,
        title: 'Все насторойки',
        subtitle: 'Скрыть, вернуть или поменять местами',
        icon: 'fas fa-cog',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 4,
        title: 'Заблокированные карты',
        subtitle: 'Показывать на главном экране',
        icon: 'fas fa-lock',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 5,
        title: 'Разделы на главном',
        subtitle: 'Скрыть, вернуть или поменять местами',
        icon: 'fas fa-eye-slash',
        iconNav: 'fas fa-chevron-right',
    },
    {
        id: 6,
        title: 'Все насторойки',
        subtitle: 'Скрыть, вернуть или поменять местами',
        icon: 'fas fa-cog',
        iconNav: 'fas fa-chevron-right',
    },
];
const mainPageTabsMock = [
    {
        id: 1,
        title: 'Карты',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content any content any content any content any content any content any content  any content any content any content any content any content any content',
    },
    {
        id: 2,
        title: 'Вклады и счета',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
    {
        id: 3,
        title: 'Кредиты',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
    {
        id: 4,
        title: 'Цели',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
    {
        id: 5,
        title: 'Инвестиции и пенсии',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
    {
        id: 6,
        title: 'Валюты и металлы',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
    {
        id: 7,
        title: 'Страхование и защита',
        icon: 'fas fa-angle-right',
        btnIcon: 'fas fa-plus',
        content: 'any content',
    },
];
const mainBannerMock = {
    title: 'На карте',
    subtitle: 'Отделения, банкоматы, терминалы',
    icon: 'far fa-map',
};
const mainCarouselBannersMock = [
    {
        id: 1,
        title: 'СберПрайм',
        subtitle: 'Подписка на сервисы для жизни',
        icon: 'https://svgshare.com/i/QXE.svg',
    },
    {
        id: 2,
        title: 'СберАвто',
        subtitle: 'Выбор и покупка авто',
        icon: 'https://svgshare.com/i/QX_.svg',
    },
    {
        id: 3,
        title: 'СберСпасибо',
        subtitle: 'Узнайте все о бонусах',
        icon: 'https://svgshare.com/i/QYF.svg',
    },
    {
        id: 4,
        title: 'Чемпионат',
        subtitle: 'Новости спорта ежедневно',
        icon: 'https://svgshare.com/i/QXX.svg',
    },
];
const bankFooterMock = [
    {
        id: 'main',
        title: 'Главный',
        icon: 'fas fa-home',
    },
    {
        id: 'payments',
        title: 'Платежи',
        icon: 'fas fa-money-check',
    },
    {
        id: 'dialogs',
        title: 'Диалоги',
        icon: 'fas fa-comment-dots',
    },
    {
        id: 'history',
        title: 'История',
        icon: 'fas fa-clock',
    },
    {
        id: 'catalog',
        title: 'Каталог',
        icon: 'fas fa-shopping-cart',
    },
];
const bankProductsListMock = {
    productListHeader: {
        categoryTitle: 'Headphones',
        authorImg: 'https://images.gr-assets.com/authors/1491421438p5/3530.jpg',
    },
    filterItems: [
        {
            id: 'best deal',
            title: 'Best Deal',
        },
        {
            id: 'sale',
            title: 'Sale',
        },
        {
            id: 'other price',
            title: 'Other Price',
        },
    ],
    productsList: [
        {
            id: 1,
            img: 'https://snipstock.com/assets/cdn/png/new/19f6ce9223085e2cf21174f17c9c28f5.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 80,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 2,
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7658.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 30,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 3,
            img: 'https://snipstock.com/assets/cdn/png/new/1e121b09928d5cf1a61960233602c303.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 20,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 4,
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7655.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 20,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 1,
            img: 'https://snipstock.com/assets/cdn/png/new/19f6ce9223085e2cf21174f17c9c28f5.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 80,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 2,
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7658.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 30,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 3,
            img: 'https://snipstock.com/assets/cdn/png/new/1e121b09928d5cf1a61960233602c303.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 20,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
        {
            id: 4,
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7655.png',
            title: 'Bose Soundlink Around Ear Wireless Headphone II - Black',
            sale: 20,
            price: 67.56,
            value: 'fas fa-euro-sign',
        },
    ],
};
const bankProductListSinglePage = {
    title: 'POWMEE M1 Kids Headphones Wired Foldable Adjustable Stereo',
    sale: 76,
    price: 17.89,
    sliderImagesProducts: [
        {
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7655.png',
            alt: 'first',
        },
        {
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7654.png',
            alt: 'first',
        },
        {
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7652.png',
            alt: 'first',
        },
        {
            img: 'http://pngimg.com/uploads/headphones/headphones_PNG7657.png',
            alt: 'first',
        },
    ],
    author: {
        img: 'https://images.gr-assets.com/authors/1491421438p5/3530.jpg',
        name: 'Matheo Momerre',
    },
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, voluptates!',
    btnText: 'Get the Deal',
};
//Адам
const headerMock = {
    userIcon: 'fas fa-user',
    placeholder: 'Поиск',
    bellIcon: 'fas fa-bell',
};
const historyPageMenuMock = [
    {
        id: 1,
        icon: 'fas fa-filter',
        title: 'Фильтры',
        desc: 'Сумма, период,...',
    },
    {
        id: 2,
        icon: 'fas fa-chart-bar',
        title: 'Расходы и зачисления',
    },
    {
        id: 3,
        icon: 'fas fa-file-alt',
        title: 'Выписки и справки',
    },
];
const paymentHistoryMock = [
    {
        id: 1,
        date: '14 октября, ср',
        icon: 'https://svgshare.com/i/QXx.svg',
        category: 'Входящий перевод',
        name: 'Сбербанк Онлайн',
        sum: '+ 5000 ₽',
    },
    {
        id: 2,
        date: '11 октября, вс',
        icon: 'https://svgshare.com/i/QZe.svg',
        category: 'Входящий перевод',
        name: 'Руслан Асланбекович Г.',
        sum: '+ 3000 ₽',
    },
    {
        id: 3,
        date: '9 октября, пт',
        icon: 'https://svgshare.com/i/QZe.svg',
        category: 'Входящий перевод',
        name: 'Залина Нукаевна М.',
        sum: '+ 3000 ₽',
    },
    {
        id: 4,
        date: '8 октября, пт',
        icon: 'https://svgshare.com/i/QZe.svg',
        category: 'Входящий перевод',
        name: 'Тумиш Саидхасановна Ц.',
        sum: '+ 2000 ₽',
    },
    {
        id: 5,
        date: '8 октября, пт',
        icon: 'https://svgshare.com/i/QYR.svg',
        category: 'Перевод клиенту Сбербанка',
        name: 'Тумиш Саидхасановна Ц.',
        sum: '+ 2000 ₽',
    },
];
const searchHistoryHeader = {
    arrowIcon: 'fas fa-arrow-left',
    placeholder: 'Поиск',
    microphoneIcon: 'fas fa-microphone',
};
const searchHistoryCards = [
    {
        caption: 'История поиска',
        links: [
            {
                icon: 'fas fa-search',
                name: 'Вайнах Телеком',
            },
            {
                icon: 'fas fa-search',
                name: 'Выписки и справки',
            },
            {
                icon: 'fas fa-search',
                name: 'Информация о карте',
            },
        ],
    },
    {
        caption: 'Примеры запросов',
        links: [
            {
                icon: 'fas fa-search',
                name: 'МТС',
            },
            {
                icon: 'fas fa-search',
                name: 'Кэшбек за путешествия',
            },
            {
                icon: 'fas fa-search',
                name: 'Штрафы (ГИБДД, МВД, МАДИ, АМПП, Организатор перевозок)',
            },
            {
                icon: 'fas fa-search',
                name: 'Госуслуги',
            },
            {
                icon: 'fas fa-search',
                name: 'Яндекс Деньги',
            },
            {
                icon: 'fas fa-search',
                name: 'Задолженности',
            },
            {
                icon: 'fas fa-search',
                name: 'Собрать деньги',
            },
        ],
    },
];
//Абдуллах
const paymentCategories = {
    categoriesPanel: 'Ваши платежи',
    detailBtn: 'fas fa-ellipsis-v',
    categoriesCard: [
        {
            id: 1,
            img: 'https://www.freepngimg.com/thumb/logo/62809-portable-icons-computer-graphics-logo-network.png',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '80%',
            progressColor: '#428EF2',
        },
        {
            id: 2,
            logo: 'IU',
            logoColor: 'orange',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '70%',
            progressColor: '#CF515B',
        },
        {
            id: 3,
            logoIcon: 'fab fa-apple-pay',
            logoColor: '#CF515B',
            title: 'Learn UX Design',
            subTitle: '3 month left',
            detailBtn: 'fas fa-ellipsis-h',
            dateIcon: 'far fa-calendar-alt',
            date: '01 November 2020',
            importance: 'Priority',
            importanceColor: '#F7D6D9',
            progressTitle: 'Progress',
            progress: '45%',
            progressColor: '#FFC800',
        },
    ],
};
const paymentPageTabs = {
    panelItem: 'Ваши история',
    panelItemIcon: 'fas fa-ellipsis-v',
    cardHeadLogo: 'https://www.freepngimg.com/thumb/logo/62809-portable-icons-computer-graphics-logo-network.png',
    cardHeadTitle: 'Learn UX Design',
    cardHeadCloseIcon: 'fas fa-chevron-up',
    cardHeadOpenIcon: 'fas fa-chevron-down',
    paymentTasks: [
        {
            id: 1,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        },
        {
            id: 2,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        },
        {
            id: 3,
            paymentTask: 'Emphatises',
            paymentTaskTime: '09.00 am - 10.00 am'
        }
    ]
};
const scanCodePage = {
    pageTitle: 'Scan the code',
    scanningText: 'Scanning',
    btnStartScanText: 'Start Scanning',
    btnStopScanText: 'Cancel Scanning'
};
const scanCodeFooter = [
    {
        id: 1,
        item: 'far fa-image',
        type: 'item'
    },
    {
        id: 2,
        item: 'fas fa-qrcode',
        type: 'scan-btn'
    },
    {
        id: 3,
        item: 'fas fa-cog',
        type: 'item'
    },
];
//Абдуллах
const myCardsMock = {
    title: 'Мои карты',
    cards: [
        {
            name: 'Алекс Гарден',
            code: '** 4635',
            sum: '2097',
            currency: '$',
            firstColor: '247,171,36,1',
            secondColor: '228,117,199,0.8',
            thirdColor: '108,154,252,1',
        },
        {
            name: 'Алекс Гарден',
            code: '** 9524',
            sum: '290',
            currency: '$',
            firstColor: '155,129,255,1',
            secondColor: '155,129,255,1',
            thirdColor: '155,129,255,0.4',
        },
        {
            name: 'Алекс Гарден',
            code: '** 3302',
            sum: '305',
            currency: '$',
            firstColor: '239,108,66,1',
            secondColor: '239,108,66,1',
            thirdColor: '239,108,66,0.4',
        },
    ]
};
const sliderCardsMock = [
    {
        paymentSystem: 'Mastercard',
        code: '•• 2130',
        currency: '$',
        sum: '4,600.00',
        icon: 'fab fa-apple-pay',
        bgColor: '#4d6de5',
        leftColBgColor: '#657cff',
    },
    {
        paymentSystem: 'Mastercard',
        code: '•• 0491',
        currency: '$',
        sum: '2,105.00',
        icon: 'fab fa-apple-pay',
        bgColor: '#db72c3',
        leftColBgColor: '#e985ee',
    },
];
const cardBonusMock = {
    title: 'Бонусы',
    sum: '1,405',
    btn: 'Узнать больше',
};
const cardSettings = [
    {
        icon: 'fas fa-lock',
        text: 'Заблокировать карту',
    },
    {
        icon: 'fas fa-sync-alt',
        text: 'Заменить карту',
    },
    {
        icon: 'fas fa-ellipsis-h',
        text: 'Ещё',
    },
];
const sliderCardsHeaderTitle = 'Мои карты';
const sliderCardsTransfersText = {
    receive: 'Принять',
    send: 'Отправить',
};
const myCardsMenuButtonsMock = [
    {
        id: 1,
        text: 'Карты банка',
    },
    {
        id: 2,
        text: 'Виртуальные карты',
    },
];


/***/ }),

/***/ "./src/app/ng-bank-cards-page/ng-bank-cards-page.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/ng-bank-cards-page/ng-bank-cards-page.component.ts ***!
  \********************************************************************/
/*! exports provided: NgBankCardsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgBankCardsPageComponent", function() { return NgBankCardsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgBankCardsPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getMyCardsMock() {
        return this.StorageBank.getMyCardsMock();
    }
    getHeaderMock() {
        return this.StorageBank.getHeaderMock();
    }
    getMyCardsMenuButtonsMock() {
        return this.StorageBank.getMyCardsMenuButtonsMock();
    }
}
NgBankCardsPageComponent.ɵfac = function NgBankCardsPageComponent_Factory(t) { return new (t || NgBankCardsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgBankCardsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgBankCardsPageComponent, selectors: [["cnt-nx-workspace-ng-bank-cards-page"]], decls: 7, vars: 3, consts: [[1, "app"], [1, "header-wrapper"], ["theme", "history", 3, "payload"], [1, "menu", "no-menu"], [1, "content-wrapper"], [3, "payload"]], template: function NgBankCardsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-mobile-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-cnt-bank-cards-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-bank-cards-wrapper", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHeaderMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMyCardsMenuButtonsMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getMyCardsMock());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1iYW5rLWNhcmRzLXBhZ2UvbmctYmFuay1jYXJkcy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgBankCardsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-bank-cards-page',
                templateUrl: './ng-bank-cards-page.component.html',
                styleUrls: ['./ng-bank-cards-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-history-page/ng-cnt-bank-history-page.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-history-page/ng-cnt-bank-history-page.component.ts ***!
  \********************************************************************************/
/*! exports provided: NgCntBankHistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankHistoryPageComponent", function() { return NgCntBankHistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgCntBankHistoryPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
        this.headerBlock = document.getElementById('menu');
        this.header = document.getElementById('header');
    }
    onScroll(event) {
        this.StorageBank.onAutoScroll(this.headerBlock, this.header);
    }
    clickOnFooterItem(id) {
        this.StorageBank.navigateFooterItem(id.detail);
    }
    getHeaderMock() {
        return this.StorageBank.getHeaderMock();
    }
    getHistoryPageMenuMock() {
        return this.StorageBank.getHistoryPageMenuMock();
    }
    getPaymentHistoryMock() {
        return this.StorageBank.getPaymentHistoryMock();
    }
    getBankFooterMock() {
        return this.StorageBank.getBankFooterMock();
    }
}
NgCntBankHistoryPageComponent.ɵfac = function NgCntBankHistoryPageComponent_Factory(t) { return new (t || NgCntBankHistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankHistoryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankHistoryPageComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-history-page"]], hostBindings: function NgCntBankHistoryPageComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function NgCntBankHistoryPageComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 7, vars: 3, consts: [[1, "app"], ["id", "header", 1, "header-wrapper"], ["theme", "main", 3, "payload"], ["id", "menu", 1, "menu"], [3, "payload"], [1, "content-wrapper"]], template: function NgCntBankHistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-mobile-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-cnt-bank-history-page-menu", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-bank-history-payment", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHeaderMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHistoryPageMenuMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPaymentHistoryMock());
    } }, styles: ["#menu[_ngcontent-%COMP%] {\n  transition: all 0.3s ease;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL25nLWNudC1iYW5rLWhpc3RvcnktcGFnZS9uZy1jbnQtYmFuay1oaXN0b3J5LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGIiwiZmlsZSI6ImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL25nLWNudC1iYW5rLWhpc3RvcnktcGFnZS9uZy1jbnQtYmFuay1oaXN0b3J5LXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbWVudSB7XG4gIHRyYW5zaXRpb246IGFsbCAuM3MgZWFzZTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankHistoryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-history-page',
                templateUrl: './ng-cnt-bank-history-page.component.html',
                styleUrls: ['./ng-cnt-bank-history-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, { onScroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:scroll', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-payment-page-wrapper/ng-cnt-bank-payment-page-wrapper.component.ts ***!
  \************************************************************************************************/
/*! exports provided: NgCntBankPaymentPageWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankPaymentPageWrapperComponent", function() { return NgCntBankPaymentPageWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgCntBankPaymentPageWrapperComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getPaymentCategories() {
        return this.StorageBank.getPaymentCategories();
    }
    getPaymentPageTabs() {
        return this.StorageBank.getPaymentPageTabs();
    }
}
NgCntBankPaymentPageWrapperComponent.ɵfac = function NgCntBankPaymentPageWrapperComponent_Factory(t) { return new (t || NgCntBankPaymentPageWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankPaymentPageWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankPaymentPageWrapperComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-payment-page-wrapper"]], decls: 5, vars: 2, consts: [[1, "app"], ["id", "payment-header-wrap", 1, "header-wrapper"], [3, "payload"], [1, "content-wrapper"]], template: function NgCntBankPaymentPageWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-payment-page-categories", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "s-cnt-bank-payment-page-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPaymentCategories());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getPaymentPageTabs());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1jbnQtYmFuay1wYXltZW50LXBhZ2Utd3JhcHBlci9uZy1jbnQtYmFuay1wYXltZW50LXBhZ2Utd3JhcHBlci5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankPaymentPageWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-payment-page-wrapper',
                templateUrl: './ng-cnt-bank-payment-page-wrapper.component.html',
                styleUrls: ['./ng-cnt-bank-payment-page-wrapper.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-product-list-page/ng-cnt-bank-product-list-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgCntBankProductListPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankProductListPageComponent", function() { return NgCntBankProductListPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function NgCntBankProductListPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "s-cnt-bank-product-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnCard", function NgCntBankProductListPageComponent_div_4_Template_s_cnt_bank_product_card_clickOnCard_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onClickOnCard($event.detail); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("product", product_r1);
} }
class NgCntBankProductListPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getBankProductListPage() {
        return this.StorageBank.getBankProductListPage();
    }
    getHeaderContent() {
        return this.StorageBank.getHeaderContent();
    }
    getFilterItems() {
        return this.StorageBank.getFilterItems();
    }
    getProductsCards() {
        return this.StorageBank.getProductsCards();
    }
    onClickOnCard(event) {
        this.StorageBank.navigateFooterItem(event);
    }
}
NgCntBankProductListPageComponent.ɵfac = function NgCntBankProductListPageComponent_Factory(t) { return new (t || NgCntBankProductListPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankProductListPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankProductListPageComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-product-list-page"]], decls: 5, vars: 3, consts: [[1, "product-list-wrapper"], [3, "payload"], [1, "products-content"], ["class", "products-cards-items", 4, "ngFor", "ngForOf"], [1, "products-cards-items"], [3, "product", "clickOnCard"]], template: function NgCntBankProductListPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-cnt-bank-product-list-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-product-list-panel-navigate", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NgCntBankProductListPageComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHeaderContent());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getFilterItems());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getProductsCards());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".product-list-wrapper[_ngcontent-%COMP%] {\n  padding: 15px 15px 15px 15px;\n}\n\n.products-content[_ngcontent-%COMP%] {\n  height: calc(100vh - 160px);\n  overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL25nLWNudC1iYW5rLXByb2R1Y3QtbGlzdC1wYWdlL25nLWNudC1iYW5rLXByb2R1Y3QtbGlzdC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0Esa0JBQUE7QUFDRiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1jbnQtYmFuay1wcm9kdWN0LWxpc3QtcGFnZS9uZy1jbnQtYmFuay1wcm9kdWN0LWxpc3QtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0LWxpc3Qtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAxNXB4IDE1cHg7XG59XG5cbi5wcm9kdWN0cy1jb250ZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTYwcHgpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankProductListPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-product-list-page',
                templateUrl: './ng-cnt-bank-product-list-page.component.html',
                styleUrls: ['./ng-cnt-bank-product-list-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-product-single-page/ng-cnt-bank-product-single-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgCntBankProductSinglePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankProductSinglePageComponent", function() { return NgCntBankProductSinglePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgCntBankProductSinglePageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getBankProductListSinglePage() {
        return this.StorageBank.getBankProductListSinglePage();
    }
    clickOnBackCatalog(event) {
        console.log(event);
        return this.StorageBank.navigateFooterItem(event);
    }
}
NgCntBankProductSinglePageComponent.ɵfac = function NgCntBankProductSinglePageComponent_Factory(t) { return new (t || NgCntBankProductSinglePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankProductSinglePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankProductSinglePageComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-product-single-page"]], decls: 1, vars: 1, consts: [[3, "payload", "clickOnBackCatalog"]], template: function NgCntBankProductSinglePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "s-cnt-bank-product-single-page", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("clickOnBackCatalog", function NgCntBankProductSinglePageComponent_Template_s_cnt_bank_product_single_page_clickOnBackCatalog_0_listener($event) { return ctx.clickOnBackCatalog($event.detail); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getBankProductListSinglePage());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1jbnQtYmFuay1wcm9kdWN0LXNpbmdsZS1wYWdlL25nLWNudC1iYW5rLXByb2R1Y3Qtc2luZ2xlLXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankProductSinglePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-product-single-page',
                templateUrl: './ng-cnt-bank-product-single-page.component.html',
                styleUrls: ['./ng-cnt-bank-product-single-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-scan-code-page-wrapper/ng-cnt-bank-scan-code-page-wrapper.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: NgCntBankScanCodePageWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankScanCodePageWrapperComponent", function() { return NgCntBankScanCodePageWrapperComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgCntBankScanCodePageWrapperComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getScanCodePage() {
        return this.StorageBank.getScanCodePage();
    }
    getScanCodeFooter() {
        return this.StorageBank.getScanCodeFooter();
    }
}
NgCntBankScanCodePageWrapperComponent.ɵfac = function NgCntBankScanCodePageWrapperComponent_Factory(t) { return new (t || NgCntBankScanCodePageWrapperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankScanCodePageWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankScanCodePageWrapperComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-scan-code-page-wrapper"]], decls: 4, vars: 2, consts: [[1, "scan-code-page-wrapper"], [3, "payload"], [1, "footer"]], template: function NgCntBankScanCodePageWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-cnt-bank-scan-code-page", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-cnt-bank-scan-code-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getScanCodePage());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getScanCodeFooter());
    } }, styles: [".scan-code-page-wrapper[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: white;\n  width: 100%;\n  height: 100vh;\n  z-index: 99999;\n}\n\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  \n  position: fixed;\n  bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvbWFpbi9jbnQtYmFuay9zcmMvYXBwL25nLWNudC1iYW5rLXNjYW4tY29kZS1wYWdlLXdyYXBwZXIvbmctY250LWJhbmstc2Nhbi1jb2RlLXBhZ2Utd3JhcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0FBQ0YiLCJmaWxlIjoiYXBwcy9tYWluL2NudC1iYW5rL3NyYy9hcHAvbmctY250LWJhbmstc2Nhbi1jb2RlLXBhZ2Utd3JhcHBlci9uZy1jbnQtYmFuay1zY2FuLWNvZGUtcGFnZS13cmFwcGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjYW4tY29kZS1wYWdlLXdyYXBwZXJ7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZm9vdGVye1xuICB3aWR0aDogMTAwJTtcbiAgLypoZWlnaHQ6IDEwMCU7Ki9cbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankScanCodePageWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-scan-code-page-wrapper',
                templateUrl: './ng-cnt-bank-scan-code-page-wrapper.component.html',
                styleUrls: ['./ng-cnt-bank-scan-code-page-wrapper.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/ng-cnt-bank-search-history-page/ng-cnt-bank-search-history-page.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NgCntBankSearchHistoryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgCntBankSearchHistoryPageComponent", function() { return NgCntBankSearchHistoryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgCntBankSearchHistoryPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getSearchHistoryHeader() {
        return this.StorageBank.getSearchHistoryHeader();
    }
    getSearchHistoryCards() {
        return this.StorageBank.getSearchHistoryCards();
    }
}
NgCntBankSearchHistoryPageComponent.ɵfac = function NgCntBankSearchHistoryPageComponent_Factory(t) { return new (t || NgCntBankSearchHistoryPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgCntBankSearchHistoryPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgCntBankSearchHistoryPageComponent, selectors: [["cnt-nx-workspace-ng-cnt-bank-search-history-page"]], decls: 4, vars: 2, consts: [[1, "app"], [3, "payload"], [1, "content-wrapper"]], template: function NgCntBankSearchHistoryPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "s-cnt-bank-search-history-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "s-cnt-bank-search-history-cards-wrapper", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSearchHistoryHeader());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSearchHistoryCards());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1jbnQtYmFuay1zZWFyY2gtaGlzdG9yeS1wYWdlL25nLWNudC1iYW5rLXNlYXJjaC1oaXN0b3J5LXBhZ2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgCntBankSearchHistoryPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-cnt-bank-search-history-page',
                templateUrl: './ng-cnt-bank-search-history-page.component.html',
                styleUrls: ['./ng-cnt-bank-search-history-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/ng-snt-bank-slider-cards-page/ng-snt-bank-slider-cards-page.component.ts ***!
  \******************************************************************************************/
/*! exports provided: NgSntBankSliderCardsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgSntBankSliderCardsPageComponent", function() { return NgSntBankSliderCardsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _bank_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bank.service */ "./src/app/bank.service.ts");




class NgSntBankSliderCardsPageComponent {
    constructor(StorageBank) {
        this.StorageBank = StorageBank;
    }
    ngOnInit() {
    }
    getSliderCardsHeaderTitle() {
        return this.StorageBank.getSliderCardsHeaderTitle();
    }
    getSliderCardsTransfersText() {
        return this.StorageBank.getSliderCardsTransfersText();
    }
    getCardBonusMock() {
        return this.StorageBank.getCardBonusMock();
    }
    getHeaderMock() {
        return this.StorageBank.getHeaderMock();
    }
    getSliderCardsMock() {
        return this.StorageBank.getSliderCardsMock();
    }
    getCardSettings() {
        return this.StorageBank.getCardSettings();
    }
}
NgSntBankSliderCardsPageComponent.ɵfac = function NgSntBankSliderCardsPageComponent_Factory(t) { return new (t || NgSntBankSliderCardsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"])); };
NgSntBankSliderCardsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgSntBankSliderCardsPageComponent, selectors: [["cnt-nx-workspace-ng-snt-bank-slider-cards-page"]], decls: 9, vars: 6, consts: [[1, "app"], [1, "header-wrapper"], ["theme", "history", 3, "payload"], [1, "menu", "no-menu"], [1, "content-wrapper"], [3, "payload"], [3, "payload", "cardSettings"]], template: function NgSntBankSliderCardsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "s-cnt-bank-mobile-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "s-cnt-bank-slider-cards-header", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "s-cnt-bank-slider-cards-wrapper", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "s-cnt-bank-slider-cards-transfers", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "s-cnt-bank-slider-cards-bonus", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getHeaderMock());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSliderCardsHeaderTitle());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSliderCardsMock())("cardSettings", ctx.getCardSettings());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getSliderCardsTransfersText());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("payload", ctx.getCardBonusMock());
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL21haW4vY250LWJhbmsvc3JjL2FwcC9uZy1zbnQtYmFuay1zbGlkZXItY2FyZHMtcGFnZS9uZy1zbnQtYmFuay1zbGlkZXItY2FyZHMtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgSntBankSliderCardsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'cnt-nx-workspace-ng-snt-bank-slider-cards-page',
                templateUrl: './ng-snt-bank-slider-cards-page.component.html',
                styleUrls: ['./ng-snt-bank-slider-cards-page.component.scss']
            }]
    }], function () { return [{ type: _bank_service__WEBPACK_IMPORTED_MODULE_1__["BankService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _cnt_nx_workspace_design_stencil_cnt_bank_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @cnt-nx-workspace/design/stencil/cnt/bank-loader */ "../../../dist/libs/design/stencil/cnt/bank/loader/index.es2017.mjs");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "../../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");


if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
// import * as cntAirtafaStencil from '@cnt-nx-workspace/design/stencil/airtafa-loader';

_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch((err) => console.error(err));
/* stencil js - add loaders */
// cntAirtafaStencil.applyPolyfills().then(() => {
//   cntAirtafaStencil.defineCustomElements();
// });
_cnt_nx_workspace_design_stencil_cnt_bank_loader__WEBPACK_IMPORTED_MODULE_2__["applyPolyfills"]().then(() => {
    _cnt_nx_workspace_design_stencil_cnt_bank_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"]();
});
// stencil js - source



// stencil js - source
Object(_cnt_nx_workspace_design_stencil_cnt_bank_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/zurabmagomadov/MyWorkspace/cnt/cnt-nx-workspace/apps/main/cnt-bank/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map