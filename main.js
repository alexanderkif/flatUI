/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/decko/dist/decko.js":
/*!******************************************!*\
  !*** ./node_modules/decko/dist/decko.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?\n\t\t\t\t(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { var mod; }})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});\n\n//# sourceMappingURL=decko.js.map\n\n//# sourceURL=webpack:///./node_modules/decko/dist/decko.js?");

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet RippleButton = (_class = class RippleButton {\n    constructor(button) {\n        this.button = button;\n        button.addEventListener('click', this.clickRipple);\n    }\n\n    clickRipple(e) {\n        let X = e.pageX - this.button.offsetLeft;\n        let Y = e.pageY - this.button.offsetTop;\n        let rippleDiv = document.createElement(\"div\");\n        rippleDiv.classList.add('ripple');\n        rippleDiv.setAttribute(\"style\", `top:${Y}px; left:${X}px;`);\n        let customColor = this.button.getAttribute('ripple-color');\n        if (customColor) rippleDiv.style.background = customColor;\n        this.button.appendChild(rippleDiv);\n\n        setTimeout(function () {\n            rippleDiv.parentElement.removeChild(rippleDiv);\n        }, 900);\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, 'clickRipple', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clickRipple'), _class.prototype)), _class);\n\n\n$('.btn').each((index, element) => new RippleButton(element));\n\n//# sourceURL=webpack:///./src/components/button/button.js?");

/***/ }),

/***/ "./src/components/calendar/calendar.js":
/*!*********************************************!*\
  !*** ./src/components/calendar/calendar.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n$.datepicker._gotoToday = function (id) {\n    var target = jQuery(id);\n    var inst = this._getInst(target[0]);\n    if (this._get(inst, 'gotoCurrent') && inst.currentDay) {\n        inst.selectedDay = inst.currentDay;\n        inst.drawMonth = inst.selectedMonth = inst.currentMonth;\n        inst.drawYear = inst.selectedYear = inst.currentYear;\n    } else {\n        var date = new Date();\n        inst.selectedDay = date.getDate();\n        inst.drawMonth = inst.selectedMonth = date.getMonth();\n        inst.drawYear = inst.selectedYear = date.getFullYear();\n        this._setDateDatepicker(target, date);\n        this._selectDate(id, this._getDateDatepicker(target));\n    }\n    this._notifyChange(inst);\n    this._adjustDate(target);\n};\n\nlet Calendar = class Calendar {\n    constructor(mydatepicker) {\n        $(mydatepicker).datepicker({\n            inline: true,\n            firstDay: 1,\n            showOtherMonths: true,\n            showButtonPanel: true,\n            showYear: false,\n            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],\n            onSelect: function () {\n                var day = this.parentElement.getElementsByClassName('calendar__date')[0];\n                day.innerHTML = parseInt($(this).val().split('/')[1]);\n            },\n            onChangeMonthYear: function (y, m, i) {\n                var d = i.selectedDay;\n                $(this).datepicker('setDate', new Date(y, m - 1, d));\n            }\n        }).datepicker(\"setDate\", `${mydatepicker.dataset.month}/${mydatepicker.dataset.date}/${mydatepicker.dataset.year}`);\n    }\n};\n\n\n$('.mydatepicker').each((index, element) => new Calendar(element));\n\n//# sourceURL=webpack:///./src/components/calendar/calendar.js?");

/***/ }),

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet Dropdown = (_class = class Dropdown {\n    constructor(element) {\n        element.addEventListener('click', this.dropdownMenuClick);\n        window.addEventListener('click', this.clickOutside);\n    }\n\n    clickOutside() {\n        for (let dropdown of $('.dropdown__menu')) dropdown.classList.remove('visible');\n    }\n\n    dropdownMenuClick() {\n        this.menu = $('.dropdown__menu', event.currentTarget)[0];\n        this.menu.classList.toggle('visible');\n        event.stopPropagation();\n        this.menu.addEventListener('click', this.chooseClickValue);\n    }\n\n    chooseClickValue() {\n        if (event.target.firstChild.data) {\n            $('.dropdown__input', this.parentElement)[0].value = event.target.firstChild.data;\n        }\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, 'clickOutside', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'clickOutside'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dropdownMenuClick', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'dropdownMenuClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'chooseClickValue', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'chooseClickValue'), _class.prototype)), _class);\n\n\n$('.dropdown').each((index, element) => new Dropdown(element));\n\n//# sourceURL=webpack:///./src/components/dropdown/dropdown.js?");

/***/ }),

/***/ "./src/components/form-input/form-input.js":
/*!*************************************************!*\
  !*** ./src/components/form-input/form-input.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet FormInput = (_class = class FormInput {\n    constructor(element) {\n        this.textDiv = $('.js-form-input__text', element)[0];\n        this.buttonDiv = $('.js-form-input__button', element)[0];\n        this.reg = this.textDiv.dataset.reg;\n        this.success = this.textDiv.dataset.success;\n        this.error = this.textDiv.dataset.error;\n        element.addEventListener('input', this.checkInput);\n    }\n\n    checkInput() {\n        if (this.textDiv.value.length == 0) {\n            this.buttonDiv.classList.remove(\"form-input__button_visible\");\n            return;\n        }\n        this.buttonDiv.classList.add(\"form-input__button_visible\");\n        var regExpToCheck = new RegExp(this.reg);\n        if (regExpToCheck.test(this.textDiv.value)) {\n            this.buttonDiv.classList.remove(\"form-input__button_error\");\n            this.buttonDiv.innerHTML = this.success;\n        } else {\n            this.buttonDiv.classList.add(\"form-input__button_error\");\n            this.buttonDiv.innerHTML = this.error;\n        }\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, 'checkInput', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'checkInput'), _class.prototype)), _class);\n\n\n$('.form-input').each((index, element) => new FormInput(element));\n\n//# sourceURL=webpack:///./src/components/form-input/form-input.js?");

/***/ }),

/***/ "./src/components/form-toggle/form-toggle.js":
/*!***************************************************!*\
  !*** ./src/components/form-toggle/form-toggle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n$(document).ready(function (e) {\n\t$('input').lc_switch();\n});\n\n//# sourceURL=webpack:///./src/components/form-toggle/form-toggle.js?");

/***/ }),

/***/ "./src/components/search/search.js":
/*!*****************************************!*\
  !*** ./src/components/search/search.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet SearchInput = (_class = class SearchInput {\n    constructor(element) {\n        this.input = $('.search__input', element)[0];\n        this.tmp = \"\";\n        this.input.addEventListener('click', this.searchInputClick);\n        $('.search__button', element)[0].addEventListener('click', this.searchInputNotFound);\n    }\n\n    searchInputClick() {\n        this.input.classList.remove('search__input_not-found');\n        this.input.value = this.tmp;\n    }\n\n    searchInputNotFound() {\n        this.input.classList.add('search__input_not-found');\n        this.tmp = this.input.value;\n        this.input.value = this.input.dataset.error;\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, 'searchInputClick', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'searchInputClick'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'searchInputNotFound', [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, 'searchInputNotFound'), _class.prototype)), _class);\n\n\n$('.search').each((index, element) => new SearchInput(element));\n\n//# sourceURL=webpack:///./src/components/search/search.js?");

/***/ }),

/***/ "./src/components/sectors/sectors.js":
/*!*******************************************!*\
  !*** ./src/components/sectors/sectors.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let Sectors = class Sectors {\n        constructor(canvas) {\n                var ctx = canvas.getContext('2d');\n                var sectors = JSON.parse(canvas.getAttribute(\"sectors\"));\n                var r = canvas.getAttribute(\"r\");\n\n                ctx.lineWidth = r * 0.33; // толщина линии\n\n                var start = 4.71;\n\n                for (var i = 0; i < sectors.length; i++) {\n                        var key = Object.keys(sectors[i])[0];\n                        ctx.strokeStyle = key;\n                        var end = start + sectors[i][key] * 2 * Math.PI / 100;\n                        ctx.beginPath();\n                        ctx.arc(r, r, r * 0.7, start, end, false);\n                        ctx.stroke();\n                        start = end;\n                }\n\n                ctx.strokeStyle = \"#e5e5e5\";\n                ctx.beginPath();\n                ctx.arc(r, r, r * 0.7, start, 4.71, false);\n                ctx.stroke();\n        }\n};\n\n\n$('.sectors').each((index, element) => new Sectors(element));\n\n//# sourceURL=webpack:///./src/components/sectors/sectors.js?");

/***/ }),

/***/ "./src/components/sliderm2/sliderm2.js":
/*!*********************************************!*\
  !*** ./src/components/sliderm2/sliderm2.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ \"./node_modules/decko/dist/decko.js\");\n/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);\nvar _desc, _value, _class;\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n    var desc = {};\n    Object['ke' + 'ys'](descriptor).forEach(function (key) {\n        desc[key] = descriptor[key];\n    });\n    desc.enumerable = !!desc.enumerable;\n    desc.configurable = !!desc.configurable;\n\n    if ('value' in desc || desc.initializer) {\n        desc.writable = true;\n    }\n\n    desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n        return decorator(target, property, desc) || desc;\n    }, desc);\n\n    if (context && desc.initializer !== void 0) {\n        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n        desc.initializer = undefined;\n    }\n\n    if (desc.initializer === void 0) {\n        Object['define' + 'Property'](target, property, desc);\n        desc = null;\n    }\n\n    return desc;\n}\n\n\n\nlet Sliderm2Line = class Sliderm2Line {\n    constructor(min, max) {\n        this.min = min;\n        this.max = max;\n        this.range = max - min;\n    }\n\n    drawLine(div, dataset) {\n        var lineDiv = document.createElement(\"div\");\n        lineDiv.className = \"sliderm2__line\";\n        lineDiv.style.height = `${dataset.lineHeight}px`;\n        lineDiv.style.width = '100%';\n        lineDiv.style.borderRadius = `${dataset.lineHeight / 2}px`;\n        lineDiv.style.backgroundColor = dataset.colorLine;\n        var sliderm2body = $('.sliderm2__body', div)[0];\n        sliderm2body.appendChild(lineDiv);\n        sliderm2body.style.position = 'relative';\n        sliderm2body.style.display = 'block';\n        sliderm2body.style.userSelect = 'none';\n        sliderm2body.parentElement.style.width = dataset.length;\n        sliderm2body.style.height = `${dataset.pointSize / 2 + dataset.lineHeight / 2 + 5} px`;\n        sliderm2body.style.alignItems = 'center';\n        if (dataset.vertical) {\n            sliderm2body.style.width = `${dataset.length} px`;\n            sliderm2body.style.transform = `rotate(-90deg) translateX(${-dataset.length / 2}px)`;\n            sliderm2body.parentElement.style.height = dataset.length;\n        } else {\n            sliderm2body.parentElement.style.height = dataset.lineHeight;\n            sliderm2body.style.width = '100%';\n            sliderm2body.style.transform = 'rotate(0deg)';\n        }\n        return lineDiv;\n    }\n\n    createScale(div, line, dataset) {\n        var scaleDiv = document.createElement(\"div\");\n        scaleDiv.className = \"sliderm2__scale\";\n        scaleDiv.style.position = 'absolute';\n        scaleDiv.style.display = 'flex';\n        scaleDiv.style.fontSize = `${dataset.pointSize * 3 / 6}px`;\n        scaleDiv.style.justifyContent = 'space-between';\n        scaleDiv.style.top = `${dataset.pointSize / 2 + dataset.lineHeight / 2 + 5}px`;\n        scaleDiv.style.color = dataset.colorScale;\n        div.appendChild(scaleDiv);\n        scaleDiv.style.width = `calc(100% + ${+dataset.pointSize / 2}px)`;\n        var digit;\n        for (var i = 0; i <= dataset.intervals; i++) {\n            digit = document.createElement('div');\n            digit.innerHTML = Math.round(+line.min + line.range * i / dataset.intervals);\n            if (dataset.vertical) digit.style.transform = 'rotate(90deg)';\n            scaleDiv.appendChild(digit);\n        }\n        div.style.height = `${digit.offsetHeight + dataset.pointSize / 2 + dataset.lineHeight / 2 + 5}px`;\n        if (dataset.vertical) {\n            div.parentElement.style.height = scaleDiv.offsetWidth;\n        }\n        return scaleDiv;\n    }\n};\n;\n\nlet Sliderm2Range = class Sliderm2Range {\n    constructor(value1, value2, line) {\n        this.value1 = value1;\n        this.value2 = value2;\n        this.point1 = new Sliderm2Point(value1, line);\n        this.point2 = new Sliderm2Point(value2, line);\n    }\n\n    drawRange(div, range, colorRange) {\n        var rangeDiv = document.createElement(\"div\");\n        rangeDiv.className = \"sliderm2__range\";\n        rangeDiv.style.height = 'inherit';\n        rangeDiv.style.position = 'absolute';\n        rangeDiv.style.top = '0';\n        rangeDiv.style.left = `${range.point1.value}%`;\n        rangeDiv.style.width = `${range.point2.value - range.point1.value}%`;\n        rangeDiv.style.borderRadius = 'inherit';\n        rangeDiv.style.backgroundColor = colorRange;\n        div.appendChild(rangeDiv);\n        return rangeDiv;\n    }\n\n    drawPoints(div, points, dataset) {\n        var pointDivs = points.map(function (point) {\n            var pointDiv = document.createElement(\"div\");\n            pointDiv.className = \"sliderm2__point\";\n            pointDiv.style.position = 'absolute';\n            pointDiv.style.height = `${pointDiv.style.width = dataset.pointSize}px`;\n            pointDiv.style.borderRadius = '50%';\n            pointDiv.style.top = `${div.offsetHeight / 2 - dataset.pointSize / 2}px`;\n            pointDiv.style.left = `calc(${point.value}% - ${dataset.pointSize / 2}px)`;\n            pointDiv.style.backgroundColor = dataset.colorPoint;\n            div.appendChild(pointDiv);\n            if (dataset.hint) pointDiv.drawHint = this.drawHint(pointDiv, point, dataset);\n            return pointDiv;\n        }.bind(this));\n        return pointDivs;\n    }\n\n    drawHint(div, point, dataset) {\n        var hintDiv = document.createElement(\"div\");\n        hintDiv.className = \"sliderm2__hint\";\n        hintDiv.style.position = 'absolute';\n        hintDiv.style.display = 'flex';\n        hintDiv.style.alignItems = 'center';\n        hintDiv.style.width = 'auto';\n        hintDiv.style.padding = '2px 8px';\n        hintDiv.style.borderRadius = '4px';\n        hintDiv.style.height = `${dataset.pointSize}px`;\n        hintDiv.style.backgroundColor = 'inherit';\n        hintDiv.style.color = dataset.colorText;\n        hintDiv.innerHTML = Math.round(point.inValue * 100) / 100;\n        div.appendChild(hintDiv);\n\n        var arrowDiv = document.createElement(\"div\");\n        arrowDiv.className = \"sliderm2__arrow\";\n        arrowDiv.style.position = 'absolute';\n        arrowDiv.style.content = '';\n        arrowDiv.style.transform = 'rotate(-45deg)';\n        arrowDiv.style.zIndex = '-1';\n        arrowDiv.style.height = `${dataset.pointSize / 3}px`;\n        arrowDiv.style.width = `${dataset.pointSize / 3}px`;\n        arrowDiv.style.backgroundColor = 'inherit';\n        hintDiv.appendChild(arrowDiv);\n\n        if (dataset.vertical) {\n            hintDiv.style.transform = 'rotate(90deg) translateX(0px)';\n            hintDiv.style.top = `${-dataset.pointSize - hintDiv.offsetWidth / 2}px`;\n            hintDiv.style.left = `${dataset.pointSize / 2 - hintDiv.offsetWidth / 2}px`;\n            arrowDiv.style.top = `${hintDiv.offsetHeight / 2 - arrowDiv.offsetHeight / 2}px`;\n            arrowDiv.style.left = `${hintDiv.offsetWidth - arrowDiv.offsetWidth / 2 - 1}px`;\n        } else {\n            hintDiv.style.transform = 'rotate(0deg)';\n            hintDiv.style.top = `${-dataset.pointSize * 3 / 2}px`;\n            hintDiv.style.left = `${dataset.pointSize / 2 - hintDiv.offsetWidth / 2}px`;\n            arrowDiv.style.top = `${hintDiv.offsetHeight - arrowDiv.offsetHeight / 2}px`;\n            arrowDiv.style.left = `${hintDiv.offsetWidth / 2 - arrowDiv.offsetWidth / 2}px`;\n        }\n        return hintDiv;\n    }\n};\n;\n\nlet Sliderm2Point = class Sliderm2Point {\n    constructor(value, line) {\n        this.inValue = value;\n        this.value = (value - line.min) / line.range * 100;\n    }\n};\n;\n\nlet Sliderm2 = (_class = class Sliderm2 {\n    constructor(element) {\n        this.sliderm2div = element;\n        this.sliderm2body = document.createElement(\"div\");\n        this.sliderm2body.className = \"sliderm2__body\";\n        this.sliderm2div.appendChild(this.sliderm2body);\n        this.line = new Sliderm2Line(element.dataset.min, element.dataset.max);\n        this.range = new Sliderm2Range(element.dataset.value1, element.dataset.value2, this.line);\n        this.sliderm2body.oncontextmenu = function () {\n            return false;\n        };\n        this.sliderm2body.ondragstart = function () {\n            return false;\n        };\n        this.sliderm2body.addEventListener('mousedown', this.sliderm2bodyChangeListener);\n        this.draw();\n    }\n\n    draw() {\n        var points = this.checkRange();\n        this.sliderm2div.dataset.value2 = this.range.value2;\n        if (this.sliderm2div.dataset.interval) this.sliderm2div.dataset.value1 = this.range.value1;\n        if (this.sliderm2div) {\n            this.sliderm2ClassRemove(this.sliderm2div, 'sliderm2__line');\n            this.sliderm2ClassRemove(this.sliderm2body, 'sliderm2__scale');\n        }\n        this.drawLine = this.line.drawLine(this.sliderm2div, this.sliderm2div.dataset);\n        this.drawRange = this.range.drawRange(this.drawLine, this.range, this.sliderm2div.dataset.colorRange);\n        this.drawPoints = this.range.drawPoints(this.drawLine, points, this.sliderm2div.dataset);\n        if (this.sliderm2div.dataset.scale) this.drawScale = this.line.createScale(this.sliderm2body, this.line, this.sliderm2div.dataset);else this.sliderm2ClassRemove(this.sliderm2body, 'sliderm2__scale');\n    }\n    checkRange() {\n        if (+this.range.value2 > +this.line.max) this.range.value2 = this.line.max;\n        if (+this.range.value2 < +this.line.min) this.range.value2 = this.line.min;\n        if (+this.range.value1 < +this.line.min) this.range.value1 = this.line.min;\n        var points = [];\n        if (this.sliderm2div.dataset.interval) {\n            this.range = new Sliderm2Range(this.range.value1, this.range.value2, this.line);\n            points = [this.range.point1, this.range.point2];\n        } else {\n            this.range = new Sliderm2Range(this.line.min, this.range.value2, this.line);\n            points = [this.range.point2];\n        }\n        return points;\n    }\n    sliderm2bodyChangeListener(e) {\n        document.addEventListener('mouseup', this.cancelMove);\n        if (this.sliderm2div.dataset.interval && this.getProcent(e) < this.range.value2 - this.line.max * this.sliderm2div.dataset.pointSize / this.drawLine.clientWidth / 2) {\n            this.moveValue1(e);\n            document.addEventListener('mousemove', this.moveValue1);\n        } else {\n            this.moveValue2(e);\n            document.addEventListener('mousemove', this.moveValue2);\n        }\n        return false;\n    }\n\n    cancelMove() {\n        document.removeEventListener('mousemove', this.moveValue2);\n        document.removeEventListener('mousemove', this.moveValue1);\n    }\n\n    moveValue1(e) {\n        this.range.value1 = this.getProcent(e);\n        if (+this.range.value1 >= +this.range.value2) this.range.value1 = this.range.value2;\n        this.draw();\n    }\n\n    moveValue2(e) {\n        this.range.value2 = this.getProcent(e);\n        if (+this.range.value2 <= +this.range.value1 && this.sliderm2div.dataset.interval) this.range.value2 = this.range.value1;\n        this.draw();\n    }\n\n    getProcent(e) {\n        var lineCoords = this.getCoords(this.drawLine);\n        if (this.sliderm2div.dataset.vertical) return this.sliderm2div.dataset.step * Math.round((+this.line.min + (lineCoords.top + this.drawLine.clientWidth - e.pageY) / this.drawLine.clientWidth * this.line.range) / this.sliderm2div.dataset.step);else return this.sliderm2div.dataset.step * Math.round((+this.line.min + (e.pageX - lineCoords.left) / this.drawLine.clientWidth * this.line.range) / this.sliderm2div.dataset.step);\n    }\n\n    getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    sliderm2ClassRemove(div, removingClass) {\n        var elem = div.getElementsByClassName(removingClass)[0];\n        while (elem) {\n            elem.remove();\n            elem = div.getElementsByClassName(removingClass)[0];\n        }\n    }\n}, (_applyDecoratedDescriptor(_class.prototype, \"draw\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"draw\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"checkRange\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"checkRange\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"sliderm2bodyChangeListener\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"sliderm2bodyChangeListener\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"cancelMove\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"cancelMove\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"moveValue1\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"moveValue1\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"moveValue2\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"moveValue2\"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, \"getProcent\", [decko__WEBPACK_IMPORTED_MODULE_0__[\"bind\"]], Object.getOwnPropertyDescriptor(_class.prototype, \"getProcent\"), _class.prototype)), _class);\n\n\n$('.sliderm2').each((index, element) => new Sliderm2(element));\n\n//# sourceURL=webpack:///./src/components/sliderm2/sliderm2.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/button/button */ \"./src/components/button/button.js\");\n/* harmony import */ var _components_form_input_form_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/form-input/form-input */ \"./src/components/form-input/form-input.js\");\n/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dropdown/dropdown */ \"./src/components/dropdown/dropdown.js\");\n/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/search/search */ \"./src/components/search/search.js\");\n/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/calendar/calendar */ \"./src/components/calendar/calendar.js\");\n/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_components_calendar_calendar__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_sectors_sectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sectors/sectors */ \"./src/components/sectors/sectors.js\");\n/* harmony import */ var _components_sectors_sectors__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_components_sectors_sectors__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/sliderm2/sliderm2 */ \"./src/components/sliderm2/sliderm2.js\");\n/* harmony import */ var _components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/form-toggle/form-toggle */ \"./src/components/form-toggle/form-toggle.js\");\n/* harmony import */ var _components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\n\n\nconsole.log(\"Run flatUI...\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });