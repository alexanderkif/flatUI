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

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { var mod; }})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});

//# sourceMappingURL=decko.js.map

/***/ }),

/***/ "./node_modules/lc-switch/lc_switch.css":
/*!**********************************************!*\
  !*** ./node_modules/lc-switch/lc_switch.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/lc-switch/lc_switch.min.js":
/*!*************************************************!*\
  !*** ./node_modules/lc-switch/lc_switch.min.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* ------------------------------------------------------------------------
	* LC Switch
	* superlight jQuery plugin improving forms look and functionality
	*
	* @version: 	1.1
	* @requires:	jQuery v1.7 or later
	* @author:		Luca Montanari (LCweb)
	* @website:		https://lcweb.it
	
	* Licensed under the MIT license
------------------------------------------------------------------------- */

(function(a){if("undefined"!=typeof a.fn.lc_switch)return!1;a.fn.lc_switch=function(f,g){a.fn.lcs_destroy=function(){a(this).each(function(){a(this).parents(".lcs_wrap").children().not("input").remove();a(this).unwrap()});return!0};a.fn.lcs_on=function(){a(this).each(function(b,c){var e=a(this).parents(".lcs_wrap"),d=e.find("input");if(e.find(".lcs_on").length)return!0;"function"==typeof a.fn.prop?d.prop("checked",!0):d.attr("checked",!0);d.trigger("lcs-on");d.trigger("lcs-statuschange");e.find(".lcs_switch").removeClass("lcs_off").addClass("lcs_on");
if(e.find(".lcs_switch").hasClass("lcs_radio_switch")){var f=d.attr("name");e.parents("form").find("input[name="+f+"]").not(d).lcs_off()}});return!0};a.fn.lcs_off=function(){a(this).each(function(){var b=a(this).parents(".lcs_wrap"),c=b.find("input");if(!b.find(".lcs_on").length)return!0;"function"==typeof a.fn.prop?c.prop("checked",!1):c.attr("checked",!1);c.trigger("lcs-off");c.trigger("lcs-statuschange");b.find(".lcs_switch").removeClass("lcs_on").addClass("lcs_off")});return!0};a.fn.lcs_toggle=
function(){a(this).each(function(){if(a(this).hasClass("lcs_radio_switch"))return!0;a(this).is(":checked")?a(this).lcs_off():a(this).lcs_on()});return!0};return this.each(function(){if(!a(this).parent().hasClass("lcs_wrap")){var b="undefined"==typeof f?"ON":f,c="undefined"==typeof g?"OFF":g;b=b?'<div class="lcs_label lcs_label_on">'+b+"</div>":"";c=c?'<div class="lcs_label lcs_label_off">'+c+"</div>":"";var e=a(this).is(":disabled")?!0:!1;var d=a(this).is(":checked")?" lcs_on":" lcs_off";e&&(d+=" lcs_disabled");
b='<div class="lcs_switch '+d+'"><div class="lcs_cursor"></div>'+b+c+"</div>";!a(this).is(":input")||"checkbox"!=a(this).attr("type")&&"radio"!=a(this).attr("type")||(a(this).wrap('<div class="lcs_wrap"></div>'),a(this).parent().append(b),a(this).parent().find(".lcs_switch").addClass("lcs_"+a(this).attr("type")+"_switch"))}})};a(document).ready(function(){a(document).on("click tap",".lcs_switch:not(.lcs_disabled)",function(f){a(this).hasClass("lcs_on")?a(this).hasClass("lcs_radio_switch")||a(this).lcs_off():
a(this).lcs_on()});a(document).on("change",".lcs_wrap input",function(){a(this).is(":checked")?a(this).lcs_on():a(this).lcs_off()})})})(jQuery);


/***/ }),

/***/ "./node_modules/modifiable-slider/dist/main.js":
/*!*****************************************************!*\
  !*** ./node_modules/modifiable-slider/dist/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

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
/******/ 	return __webpack_require__(__webpack_require__.s = "./demo/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./demo/constructor/constructor.js":
/*!*****************************************!*\
  !*** ./demo/constructor/constructor.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constructor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructor.scss */ "./demo/constructor/constructor.scss");
/* harmony import */ var _constructor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_constructor_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tick_tick_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tick/tick.scss */ "./demo/tick/tick.scss");
/* harmony import */ var _tick_tick_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tick_tick_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/Slider */ "./src/Slider.js");
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }






var dataJson = __webpack_require__(/*! ../data.json */ "./demo/data.json");

var PageContent = (_class =
/*#__PURE__*/
function () {
  function PageContent(element) {
    _classCallCheck(this, PageContent);

    this.div = element.querySelector(".".concat(dataJson.sliderClass));
    this.pageInput = element.querySelector('.page__inputs');
    this.inputTickHint = this.pageInput.querySelector('.tick-hint');
    this.inputTickScale = this.pageInput.querySelector('.tick-scale');
    this.inputTickInterval = this.pageInput.querySelector('.tick-interval');
    this.inputTickVertical = this.pageInput.querySelector('.tick-vertical');
    this.inputSlidermLength = this.pageInput.querySelector('.sliderm-length');
    this.inputSlidermLineHeight = this.pageInput.querySelector('.sliderm-line-height');
    this.inputSlidermPointSize = this.pageInput.querySelector('.sliderm-point-size');
    this.inputEndRange = this.pageInput.querySelector('.sliderm-end-range');
    this.inputStartRange = this.pageInput.querySelector('.sliderm-start-range');
    this.inputSlidermMin = this.pageInput.querySelector('.sliderm-min');
    this.inputSlidermMax = this.pageInput.querySelector('.sliderm-max');
    this.inputSlidermStep = this.pageInput.querySelector('.sliderm-step');
    this.inputSlidermIntervals = this.pageInput.querySelector('.sliderm-intervals');
    this.inputSlidermResult = element.querySelector('.page__result');
    this.chooseColorLine = element.querySelectorAll('.chooseColor__item')[0];
    this.chooseColorRange = element.querySelectorAll('.chooseColor__item')[1];
    this.chooseColorPoint = element.querySelectorAll('.chooseColor__item')[2];
    this.chooseColorScale = element.querySelectorAll('.chooseColor__item')[3];
    this.chooseColorText = element.querySelectorAll('.chooseColor__item')[4];
    this.chooseColors = this.chooseColorLine.closest('.chooseColor');
    this.setInputs();
    $(this.inputSlidermResult).on('click', this.copyResult);
    $(this.pageInput).on('change', this.inputsChange);
    $(this.pageInput).on('click', this.inputsClick);
    $(this.div).on('mousedown', this.sliderMouseDown);
    $(this.chooseColors).on("mousedown", this.chooseColorMouseDown);
    $(document).on("mouseup", this.cancelMove);
  }

  _createClass(PageContent, [{
    key: "chooseColorMouseDown",
    value: function chooseColorMouseDown() {
      this.setResult();
      $(document).on("mousemove", this.chooseColorMouseMove);
    }
  }, {
    key: "chooseColorMouseMove",
    value: function chooseColorMouseMove() {
      this.setResult();
    }
  }, {
    key: "cancelMove",
    value: function cancelMove() {
      $(document).off("mousemove", this.chooseColorMouseMove);
      $(document).off("mousemove", this.sliderMouseMove);
    }
  }, {
    key: "sliderMouseDown",
    value: function sliderMouseDown() {
      this.change();
      $(document).on("mousemove", this.sliderMouseMove);
    }
  }, {
    key: "sliderMouseMove",
    value: function sliderMouseMove() {
      this.change();
    }
  }, {
    key: "change",
    value: function change() {
      this.setInputs();
      this.inputSlidermResult.innerHTML = "".concat(this.div.outerHTML.split('>')[0], "></div>");
    }
  }, {
    key: "inputsChange",
    value: function inputsChange() {
      this.getInputs();
      this.refreshElement();
    }
  }, {
    key: "inputsClick",
    value: function inputsClick() {
      this.getInputs();
      this.setInputs();
      this.refreshElement();
    }
  }, {
    key: "setResult",
    value: function setResult() {
      this.div.dataset.colorLine = this.chooseColor2color(this.chooseColorLine);
      this.div.dataset.colorRange = this.chooseColor2color(this.chooseColorRange);
      this.div.dataset.colorPoint = this.chooseColor2color(this.chooseColorPoint);
      this.div.dataset.colorScale = this.chooseColor2color(this.chooseColorScale);
      this.div.dataset.colorText = this.chooseColor2color(this.chooseColorText);
      this.refreshElement();
      this.inputSlidermResult.innerHTML = "".concat(this.div.outerHTML.split('>')[0], "></div>");
    }
  }, {
    key: "chooseColor2color",
    value: function chooseColor2color(div) {
      if (div) {
        var sliders = div.getElementsByClassName('sliderm3');
        var red = sliders[0].getAttribute('data-end-range');
        var green = sliders[1].getAttribute('data-end-range');
        var blue = sliders[2].getAttribute('data-end-range');
        var opacity = sliders[3].getAttribute('data-end-range') / 255; //red, green, blue, opacity

        return "rgba(".concat(red, ", ").concat(green, ", ").concat(blue, ", ").concat(opacity, ")");
      }

      return "gray";
    }
  }, {
    key: "getInputs",
    value: function getInputs() {
      this.div.dataset.hint = this.inputTickHint.classList.contains('true') ? 'true' : '';
      this.div.dataset.scale = this.inputTickScale.classList.contains('true') ? 'true' : '';
      this.div.dataset.interval = this.inputTickInterval.classList.contains('true') ? 'true' : '';
      this.div.dataset.vertical = this.inputTickVertical.classList.contains('true') ? 'true' : '';
      this.div.dataset.length = this.inputSlidermLength.value || "100%";
      this.div.dataset.lineHeight = this.inputSlidermLineHeight.value || 10;
      this.div.dataset.pointSize = this.inputSlidermPointSize.value || 20;
      this.div.dataset.endRange = this.inputEndRange.value;

      if (this.inputStartRange.value) {
        this.div.dataset.startRange = this.inputStartRange.value;
      }

      this.div.dataset.min = this.inputSlidermMin.value;
      this.div.dataset.max = this.inputSlidermMax.value;
      this.div.dataset.step = this.inputSlidermStep.value;
      this.div.dataset.intervals = this.inputSlidermIntervals.value;
      this.inputSlidermResult.innerHTML = "".concat(this.div.outerHTML.split('>')[0], "></div>");
    }
  }, {
    key: "setInputs",
    value: function setInputs() {
      if (this.div.dataset.interval) {
        this.inputStartRange.value = Math.round(this.div.dataset.startRange * 100) / 100;
      } else {
        this.inputStartRange.value = "";
      }

      this.inputEndRange.value = Math.round(this.div.dataset.endRange * 100) / 100;
      this.inputSlidermMin.value = this.div.dataset.min;
      this.inputSlidermMax.value = this.div.dataset.max;
      this.inputSlidermStep.value = this.div.dataset.step;
      this.inputSlidermIntervals.value = this.div.dataset.intervals;
      this.inputSlidermLength.value = this.div.dataset.length;
      this.inputSlidermLineHeight.value = this.div.dataset.lineHeight;
      this.inputSlidermPointSize.value = this.div.dataset.pointSize;

      if (this.div.dataset.hint) {
        $(this.inputTickHint).addClass('true');
      }

      if (this.div.dataset.scale) {
        $(this.inputTickScale).addClass('true');
      }

      if (this.div.dataset.interval) {
        $(this.inputTickInterval).addClass('true');
      }

      if (this.div.dataset.vertical) {
        $(this.inputTickVertical).addClass('true');
      }
    }
  }, {
    key: "refreshElement",
    value: function refreshElement() {
      var newElem = document.createElement("div");
      newElem.className = this.div.className;
      Object.assign(newElem.dataset, this.div.dataset);
      var parentPageSlider = this.div.closest('.page__slider');
      parentPageSlider.replaceChild(newElem, this.div);
      this.div = newElem;
      new _src_Slider__WEBPACK_IMPORTED_MODULE_3__["default"](newElem);
      $(this.div).on('mousedown', this.sliderMouseDown);
    }
  }, {
    key: "copyResult",
    value: function copyResult() {
      this.select();
      document.execCommand("copy");
      alert("Copied the text: " + this.value);
    }
  }]);

  return PageContent;
}(), (_applyDecoratedDescriptor(_class.prototype, "chooseColorMouseDown", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "chooseColorMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chooseColorMouseMove", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "chooseColorMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelMove", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "cancelMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sliderMouseDown", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "sliderMouseDown"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "sliderMouseMove", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "sliderMouseMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "change", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "change"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "inputsChange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "inputsChange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "inputsClick", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "inputsClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setResult", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setResult"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chooseColor2color", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "chooseColor2color"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "getInputs", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "getInputs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setInputs", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setInputs"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "refreshElement", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "refreshElement"), _class.prototype)), _class);
$('.page__content').each(function (index, element) {
  return new PageContent(element);
});

/***/ }),

/***/ "./demo/constructor/constructor.scss":
/*!*******************************************!*\
  !*** ./demo/constructor/constructor.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./demo/data.json":
/*!************************!*\
  !*** ./demo/data.json ***!
  \************************/
/*! exports provided: sliderClass, sliders, default */
/***/ (function(module) {

module.exports = {"sliderClass":"my-awesome-slider-1234","sliders":[{"min":20,"max":120,"startRange":20,"endRange":70,"step":1,"intervals":3,"hint":"true","scale":"true","interval":"true","vertical":"true","length":300,"lineHeight":25,"pointSize":50,"colorLine":"rgba(230, 230, 230, 1)","colorRange":"rgba(231, 87, 53, 1)","colorPoint":"rgba(231, 87, 53, 1)","colorScale":"rgba(231, 87, 53, 1)","colorText":"rgba(255, 255, 255, 0.8)"},{"min":0,"max":100,"startRange":0,"endRange":75,"step":25,"intervals":4,"hint":"","scale":"true","interval":"","vertical":"","length":260,"lineHeight":5,"pointSize":20,"colorLine":"#e6e6e6","colorRange":"#4eb7a8","colorPoint":"#4eb7a8","colorScale":"lightgrey","colorText":"white"},{"min":0,"max":100,"startRange":30,"endRange":80,"step":10,"intervals":3,"hint":"true","scale":"","interval":"true","vertical":"","length":260,"lineHeight":22,"pointSize":20,"colorLine":"rgba(50, 153, 181, 0.3)","colorRange":"rgba(50, 153, 181, 0)","colorPoint":"rgba(50, 153, 181, 1)","colorScale":"lightgrey","colorText":"white"},{"min":100,"max":300,"startRange":130,"endRange":180,"step":2,"intervals":4,"hint":"true","scale":"true","interval":"","vertical":"true","length":300,"lineHeight":36,"pointSize":36,"colorLine":"rgba(255, 223, 85, 0.3)","colorRange":"rgba(255, 223, 85, 1)","colorPoint":"rgba(255, 223, 85, 1)","colorScale":"rgba(255, 223, 85, 1)","colorText":"white"},{"min":1,"max":3,"startRange":1,"endRange":2,"step":1,"intervals":2,"hint":"","scale":"true","interval":"","vertical":"true","length":220,"lineHeight":100,"pointSize":80,"colorLine":"lightgrey","colorRange":"lightgrey","colorPoint":"#33bb33","colorScale":"#33bb33","colorText":"white"},{"min":0,"max":1,"startRange":0,"endRange":0,"step":1,"intervals":1,"hint":"","scale":"","interval":"","vertical":"","length":220,"lineHeight":100,"pointSize":80,"colorLine":"lightgrey","colorRange":"#3333bb","colorPoint":"lightgrey","colorScale":"#3333bb","colorText":"white"}]};

/***/ }),

/***/ "./demo/favicon.ico":
/*!**************************!*\
  !*** ./demo/favicon.ico ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "/favicon.ico";

/***/ }),

/***/ "./demo/index.js":
/*!***********************!*\
  !*** ./demo/index.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./demo/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favicon.ico */ "./demo/favicon.ico");
/* harmony import */ var _favicon_ico__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_favicon_ico__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constructor_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructor/constructor */ "./demo/constructor/constructor.js");
/* harmony import */ var _src_Slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/Slider */ "./src/Slider.js");





var dataJson = __webpack_require__(/*! ./data.json */ "./demo/data.json");

[].forEach.call(document.getElementsByClassName(dataJson.sliderClass), function (element) {
  new _src_Slider__WEBPACK_IMPORTED_MODULE_3__["default"](element);
});

/***/ }),

/***/ "./demo/scss/main.scss":
/*!*****************************!*\
  !*** ./demo/scss/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./demo/tick/tick.scss":
/*!*****************************!*\
  !*** ./demo/tick/tick.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./node_modules/decko/dist/decko.js":
/*!******************************************!*\
  !*** ./node_modules/decko/dist/decko.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(global,factory){if(true){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));}else { var mod; }})(this,function(exports){'use strict';exports.__esModule = true;var EMPTY={};var HOP=Object.prototype.hasOwnProperty;var fns={memoize:function memoize(fn){var opt=arguments.length <= 1 || arguments[1] === undefined?EMPTY:arguments[1];var cache=opt.cache || {};return function(){for(var _len=arguments.length,a=Array(_len),_key=0;_key < _len;_key++) {a[_key] = arguments[_key];}var k=String(a[0]);if(opt.caseSensitive === false)k = k.toLowerCase();return HOP.call(cache,k)?cache[k]:cache[k] = fn.apply(this,a);};},debounce:function debounce(fn,opts){if(typeof opts === 'function'){var p=fn;fn = opts;opts = p;}var delay=opts && opts.delay || opts || 0,args=undefined,context=undefined,timer=undefined;return function(){for(var _len2=arguments.length,a=Array(_len2),_key2=0;_key2 < _len2;_key2++) {a[_key2] = arguments[_key2];}args = a;context = this;if(!timer)timer = setTimeout(function(){fn.apply(context,args);args = context = timer = null;},delay);};},bind:function bind(target,key,_ref){var fn=_ref.value;return {configurable:true,get:function get(){var value=fn.bind(this);Object.defineProperty(this,key,{value:value,configurable:true,writable:true});return value;}};}};var memoize=multiMethod(fns.memoize),debounce=multiMethod(fns.debounce),bind=multiMethod(function(f,c){return f.bind(c);},function(){return fns.bind;});exports.memoize = memoize;exports.debounce = debounce;exports.bind = bind;exports['default'] = {memoize:memoize,debounce:debounce,bind:bind};function multiMethod(inner,deco){deco = deco || inner.decorate || decorator(inner);var d=deco();return function(){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3 < _len3;_key3++) {args[_key3] = arguments[_key3];}var l=args.length;return (l < 2?deco:l > 2?d:inner).apply(undefined,args);};}function decorator(fn){return function(opt){return typeof opt === 'function'?fn(opt):function(target,key,desc){desc.value = fn(desc.value,opt,target,key,desc);};};}});

//# sourceMappingURL=decko.js.map

/***/ }),

/***/ "./src/Config.js":
/*!***********************!*\
  !*** ./src/Config.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Config; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Config = function Config(dataset) {
  _classCallCheck(this, Config);

  if (!dataset.min) {
    dataset.min = 0;
  }

  if (!dataset.max || +dataset.max < +dataset.min) {
    dataset.max = +dataset.min + 100;
  }

  if (!dataset.endRange) {
    dataset.endRange = (+dataset.max - +dataset.min) / 2 + +dataset.min;
  }

  if (+dataset.endRange > +dataset.max) {
    dataset.endRange = +dataset.max;
  }

  if (+dataset.endRange < +dataset.min) {
    dataset.endRange = +dataset.min;
  }

  if (!dataset.startRange || +dataset.startRange < +dataset.min) {
    dataset.startRange = +dataset.min;
  }

  if (+dataset.startRange > +dataset.endRange) {
    dataset.startRange = +dataset.endRange;
  }

  if (!dataset.step) {
    dataset.step = 1;
  }

  if (!dataset.intervals) {
    dataset.intervals = 3;
  }

  if (!dataset.length) {
    dataset.length = 300;
  }

  if (!dataset.lineHeight) {
    dataset.lineHeight = 25;
  }

  if (!dataset.pointSize) {
    dataset.pointSize = 50;
  }

  if (!dataset.colorLine) {
    dataset.colorLine = "rgba(230, 230, 230, 1)";
  }

  if (!dataset.colorRange) {
    dataset.colorRange = "rgba(231, 87, 53, 1)";
  }

  if (!dataset.colorPoint) {
    dataset.colorPoint = "rgba(231, 87, 53, 1)";
  }

  if (!dataset.colorScale) {
    dataset.colorScale = "rgba(231, 87, 53, 1)";
  }

  if (!dataset.colorText) {
    dataset.colorText = "rgba(255, 255, 255, 0.8";
  }

  return dataset;
};



/***/ }),

/***/ "./src/Controller.js":
/*!***************************!*\
  !*** ./src/Controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Controller; });
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Controller = function Controller(model, view) {
  var _this = this;

  _classCallCheck(this, Controller);

  this.model = model;
  this.view = view;
  this.view.subscribe(function (data) {
    if (data.startRange) {
      _this.model.setStartRange(data.startRange);
    }

    if (data.endRange) {
      _this.model.setEndRange(data.endRange);
    }
  });
  this.model.subscribe(function (data) {
    Object.assign(_this.view.element.dataset, data.model);

    if (data.description) {
      if (data.description == 'changedStartRange') {
        _this.view.changeStartRange();
      }

      if (data.description == 'changedEndRange') {
        _this.view.changeEndRange();
      }

      if (data.description == 'changedSlider') {
        _this.view.refreshSlider();
      }
    }
  });
};



/***/ }),

/***/ "./src/EventObserver.js":
/*!******************************!*\
  !*** ./src/EventObserver.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventObserver; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EventObserver =
/*#__PURE__*/
function () {
  function EventObserver() {
    _classCallCheck(this, EventObserver);

    this.observers = [];
  }

  _createClass(EventObserver, [{
    key: "subscribe",
    value: function subscribe(fn) {
      this.observers.push(fn);
    }
  }, {
    key: "unsubscribe",
    value: function unsubscribe(fn) {
      this.observers = this.observers.filter(function (subscriber) {
        return subscriber !== fn;
      });
    }
  }, {
    key: "broadcast",
    value: function broadcast(data) {
      this.observers.forEach(function (subscriber) {
        return subscriber(data);
      });
    }
  }]);

  return EventObserver;
}();



/***/ }),

/***/ "./src/Model.js":
/*!**********************!*\
  !*** ./src/Model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Model; });
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventObserver */ "./src/EventObserver.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Config */ "./src/Config.js");
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }




var Model = (_class =
/*#__PURE__*/
function (_EventObserver) {
  _inherits(Model, _EventObserver);

  function Model(model) {
    var _this;

    _classCallCheck(this, Model);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Model).call(this));

    _this.setModel(model);

    return _this;
  }

  _createClass(Model, [{
    key: "setModel",
    value: function setModel(model) {
      var normalizedModel = new _Config__WEBPACK_IMPORTED_MODULE_2__["default"](model);
      Object.assign(this, normalizedModel);
      this.broadcastModelChanged('changedSlider');
    }
  }, {
    key: "setStartRange",
    value: function setStartRange(newValue) {
      this.startRange = newValue;
      this.checkStartRange();
      this.broadcastModelChanged('changedStartRange');
    }
  }, {
    key: "checkStartRange",
    value: function checkStartRange() {
      if (+this.startRange > +this.endRange) {
        this.startRange = this.endRange;
      }

      if (+this.startRange < +this.min) {
        this.startRange = this.min;
      }
    }
  }, {
    key: "setEndRange",
    value: function setEndRange(newValue) {
      this.endRange = newValue;
      this.checkEndRange();
      this.broadcastModelChanged('changedEndRange');
    }
  }, {
    key: "checkEndRange",
    value: function checkEndRange() {
      if (this.interval && +this.endRange < +this.startRange) {
        this.endRange = this.startRange;
      }

      if (!this.interval && +this.endRange < +this.min) {
        this.endRange = this.min;
      }

      if (+this.endRange > +this.max) {
        this.endRange = this.max;
      }
    }
  }, {
    key: "broadcastModelChanged",
    value: function broadcastModelChanged(description) {
      var model = Object.assign({}, this);
      delete model.observers;
      this.broadcast({
        description: description,
        model: model
      });
    }
  }]);

  return Model;
}(_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "setModel", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setModel"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setStartRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setStartRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkStartRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "checkStartRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setEndRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setEndRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "checkEndRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "checkEndRange"), _class.prototype)), _class);


/***/ }),

/***/ "./src/Slider.js":
/*!***********************!*\
  !*** ./src/Slider.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Slider; });
/* harmony import */ var _sliderm3_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sliderm3.scss */ "./src/sliderm3.scss");
/* harmony import */ var _sliderm3_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sliderm3_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Model */ "./src/Model.js");
/* harmony import */ var _View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./View */ "./src/View.js");
/* harmony import */ var _Controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Controller */ "./src/Controller.js");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Config */ "./src/Config.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }







var Slider = function Slider(element) {
  _classCallCheck(this, Slider);

  element.classList.add("sliderm3");
  var normalizedModel = new _Config__WEBPACK_IMPORTED_MODULE_4__["default"](element.dataset);
  var model = new _Model__WEBPACK_IMPORTED_MODULE_1__["default"](normalizedModel);
  var view = new _View__WEBPACK_IMPORTED_MODULE_2__["default"](element);
  new _Controller__WEBPACK_IMPORTED_MODULE_3__["default"](model, view);
};



/***/ }),

/***/ "./src/View.js":
/*!*********************!*\
  !*** ./src/View.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return View; });
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _EventObserver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventObserver */ "./src/EventObserver.js");
var _class;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }



var THROTTLE_THRESHOLD = 50;
var MIN_DISTANCE_SLIDER_SCALE = 5;
var View = (_class =
/*#__PURE__*/
function (_EventObserver) {
  _inherits(View, _EventObserver);

  function View(element) {
    var _this;

    _classCallCheck(this, View);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this));
    _this.element = element;

    _this.element.oncontextmenu = function () {
      return false;
    };

    _this.element.ondragstart = function () {
      return false;
    };

    _this.element.onselectstart = function () {
      return false;
    };

    _this.refreshSlider();

    document.addEventListener('mouseup', _this.cancelMove);
    _this.activePoint = "no";
    window.addEventListener('resize', _this.resizeThrottler);
    return _this;
  }

  _createClass(View, [{
    key: "mouseDownListener",
    value: function mouseDownListener(e) {
      var lessThanEndPoint = this.isEventPositionLessThenEndPoint(e);

      if (this.element.dataset.interval && lessThanEndPoint) {
        this.activePoint = "startPoint";
      } else {
        this.activePoint = "endPoint";
      }

      this.setDatasetFromEvent(e);
      document.addEventListener('mousemove', this.mouseMoveListener);
      this.broadcastChangedPoint();
    }
  }, {
    key: "isEventPositionLessThenEndPoint",
    value: function isEventPositionLessThenEndPoint(e) {
      if (this.element.dataset.vertical) {
        return e.clientY > this.getCoords(this.endPointElement).top + +this.element.dataset.pointSize;
      } else {
        return e.clientX < this.getCoords(this.endPointElement).left;
      }
    }
  }, {
    key: "getCoords",
    value: function getCoords(elem) {
      var box = elem.getBoundingClientRect();
      return {
        top: box.top,
        left: box.left
      };
    }
  }, {
    key: "setDatasetFromEvent",
    value: function setDatasetFromEvent(e) {
      if (this.activePoint == "startPoint") {
        this.element.dataset.startRange = this.getNewValueFromEvent(e);
      } else {
        this.element.dataset.endRange = this.getNewValueFromEvent(e);
      }
    }
  }, {
    key: "getNewValueFromEvent",
    value: function getNewValueFromEvent(e) {
      var differenceInPixels;

      if (this.element.dataset.vertical) {
        differenceInPixels = this.lineElement.offsetHeight - (e.clientY - this.getCoords(this.lineElement).top + +this.element.dataset.lineHeight / 2);
      } else {
        differenceInPixels = e.clientX - this.getCoords(this.lineElement).left - +this.element.dataset.lineHeight / 2;
      }

      return this.element.dataset.step * Math.round((+this.element.dataset.min + differenceInPixels * this.range / this.rangeMaxWidth) / this.element.dataset.step);
    }
  }, {
    key: "mouseMoveListener",
    value: function mouseMoveListener(e) {
      if (this.activePoint != "no") {
        this.setDatasetFromEvent(e);
        this.broadcastChangedPoint();
      }
    }
  }, {
    key: "broadcastChangedPoint",
    value: function broadcastChangedPoint() {
      if (this.activePoint == "startPoint") {
        this.broadcast({
          startRange: this.element.dataset.startRange
        });
      }

      if (this.activePoint == "endPoint") {
        this.broadcast({
          endRange: this.element.dataset.endRange
        });
      }
    }
  }, {
    key: "cancelMove",
    value: function cancelMove() {
      this.activePoint = "no";
      document.removeEventListener('mousemove', this.mouseMoveListener);
    }
  }, {
    key: "resizeThrottler",
    value: function resizeThrottler() {
      if (!this.resizeTimeout) {
        this.resizeTimeout = setTimeout(function () {
          this.resizeTimeout = null;
          this.refreshSlider();
        }.bind(this), THROTTLE_THRESHOLD);
      }
    }
  }, {
    key: "refreshSlider",
    value: function refreshSlider() {
      if (this.lineElement) {
        this.lineElement.remove();
      }

      this.drawLine();
      this.lineElement.addEventListener('mousedown', this.mouseDownListener);

      if (this.element.dataset.scale) {
        this.drawScale();
      }

      this.drawRange();

      if (this.element.dataset.interval) {
        this.drawStartPoint();
      }

      this.drawEndPoint();
    }
  }, {
    key: "changeStartRange",
    value: function changeStartRange() {
      this.changeRange();
      this.countStartPointElementTop();
      this.countStartPointElementLeft();

      if (this.startHintArrow) {
        this.startHintArrow[0].childNodes[0].nodeValue = Math.round(this.element.dataset.startRange * 100) / 100;
        this.setHintPosition(this.startHintArrow[0], this.startHintArrow[1]);
      }
    }
  }, {
    key: "changeEndRange",
    value: function changeEndRange() {
      this.changeRange();
      this.countEndPointElementTop();
      this.countEndPointElementLeft();

      if (this.endHintArrow) {
        this.endHintArrow[0].childNodes[0].nodeValue = Math.round(this.element.dataset.endRange * 100) / 100;
        this.setHintPosition(this.endHintArrow[0], this.endHintArrow[1]);
      }
    }
  }, {
    key: "changeRange",
    value: function changeRange() {
      this.countRangeElementBandAndIndent();
      this.countPointRangeElement();
    }
  }, {
    key: "drawLine",
    value: function drawLine() {
      this.lineElement = document.createElement("div");
      this.lineElement.className = "sliderm3__line";

      if (this.element.dataset.vertical) {
        this.lineElement.style.height = this.element.dataset.length;
        this.element.style.maxWidth = "".concat(this.element.dataset.lineHeight, "px");
      } else {
        this.lineElement.style.height = "".concat(this.element.dataset.lineHeight, "px");
        this.element.style.maxWidth = this.element.dataset.length;
      }

      this.lineElement.style.borderRadius = "".concat(this.element.dataset.lineHeight / 2, "px");
      this.lineElement.style.backgroundColor = this.element.dataset.colorLine;
      this.element.appendChild(this.lineElement);
    }
  }, {
    key: "drawScale",
    value: function drawScale() {
      this.scaleElement = document.createElement("ul");
      this.scaleElement.className = "sliderm3__scale";
      this.scaleElement.style.fontSize = "".concat(this.element.dataset.pointSize * 3 / 6, "px");
      this.scaleElement.style.color = this.element.dataset.colorScale;
      this.lineElement.appendChild(this.scaleElement);

      if (this.element.dataset.vertical) {
        this.scaleElement.style.flexDirection = 'column-reverse';
        this.scaleElement.style.left = "".concat(+this.element.dataset.pointSize > +this.element.dataset.lineHeight ? +this.element.dataset.lineHeight + (+this.element.dataset.pointSize - +this.element.dataset.lineHeight) / 2 + MIN_DISTANCE_SLIDER_SCALE : +this.element.dataset.lineHeight + MIN_DISTANCE_SLIDER_SCALE, "px");
        this.scaleElement.style.height = "".concat(+this.lineElement.offsetHeight, "px");
      } else {
        this.scaleElement.style.top = "".concat(+this.element.dataset.pointSize > +this.element.dataset.lineHeight ? +this.element.dataset.lineHeight + (+this.element.dataset.pointSize - +this.element.dataset.lineHeight) / 2 + MIN_DISTANCE_SLIDER_SCALE : +this.element.dataset.lineHeight + MIN_DISTANCE_SLIDER_SCALE, "px");
        this.scaleElement.style.width = "".concat(+this.lineElement.offsetWidth, "px");
      }

      var digit;

      for (var i = 0; i <= this.element.dataset.intervals; i++) {
        digit = document.createElement('li');
        digit.style.listStyleType = 'none';
        digit.innerHTML = Math.round(+this.element.dataset.min + (this.element.dataset.max - this.element.dataset.min) * i / this.element.dataset.intervals);
        this.scaleElement.appendChild(digit);
      }
    }
  }, {
    key: "drawRange",
    value: function drawRange() {
      if (this.element.dataset.vertical) {
        this.rangeMaxWidth = this.lineElement.offsetHeight - this.element.dataset.lineHeight;
      } else {
        this.rangeMaxWidth = this.lineElement.offsetWidth - this.element.dataset.lineHeight;
      }

      this.range = this.element.dataset.max - this.element.dataset.min;
      this.rangeElement = document.createElement("div");
      this.rangeElement.className = "sliderm3__range";
      this.countRangeElementBandAndIndent();
      this.lineElement.appendChild(this.rangeElement);
      this.pointRange = document.createElement("div");
      this.pointRange.className = "sliderm3__point-range";
      this.countPointRangeElement();
      this.pointRange.style.borderRadius = "".concat(this.element.dataset.lineHeight / 2, "px");
      this.pointRange.style.backgroundColor = this.element.dataset.colorRange;
      this.rangeElement.appendChild(this.pointRange);
    }
  }, {
    key: "countRangeElementBandAndIndent",
    value: function countRangeElementBandAndIndent() {
      if (this.element.dataset.interval) {
        var rangeBand = (this.element.dataset.endRange - this.element.dataset.startRange) * this.rangeMaxWidth / this.range;
      } else {
        var rangeBand = (this.element.dataset.endRange - this.element.dataset.min) * this.rangeMaxWidth / this.range;
      }

      var rangeIndent = (this.element.dataset.startRange - this.element.dataset.min) * this.rangeMaxWidth / this.range;

      if (this.element.dataset.vertical) {
        this.setRangeElementTop(rangeBand, rangeIndent);
        this.rangeElement.style.height = "".concat(rangeBand, "px");
      } else {
        this.setRangeElementLeft(rangeIndent);
        this.rangeElement.style.width = "".concat(rangeBand, "px");
      }
    }
  }, {
    key: "setRangeElementTop",
    value: function setRangeElementTop(rangeBand, rangeIndent) {
      var top = this.rangeMaxWidth - rangeBand + this.element.dataset.lineHeight / 2;

      if (this.element.dataset.interval) {
        this.rangeElement.style.top = "".concat(top - rangeIndent, "px");
      } else {
        this.rangeElement.style.top = "".concat(top, "px");
      }
    }
  }, {
    key: "setRangeElementLeft",
    value: function setRangeElementLeft(rangeIndent) {
      if (this.element.dataset.interval) {
        this.rangeElement.style.left = "".concat(rangeIndent + this.element.dataset.lineHeight / 2, "px");
      } else {
        this.rangeElement.style.left = "".concat(this.element.dataset.lineHeight / 2, "px");
      }
    }
  }, {
    key: "countPointRangeElement",
    value: function countPointRangeElement() {
      if (this.element.dataset.vertical) {
        this.pointRange.style.width = "".concat(this.element.dataset.lineHeight, "px");
        var height = +this.rangeElement.offsetHeight + +this.element.dataset.lineHeight;
        this.pointRange.style.height = "".concat(height, "px");
        this.pointRange.style.top = "".concat(-this.element.dataset.lineHeight / 2, "px");
      } else {
        this.pointRange.style.height = "".concat(this.element.dataset.lineHeight, "px");
        this.pointRange.style.width = "".concat(+this.rangeElement.offsetWidth + +this.element.dataset.lineHeight, "px");
        this.pointRange.style.left = "".concat(-this.element.dataset.lineHeight / 2, "px");
      }
    }
  }, {
    key: "drawStartPoint",
    value: function drawStartPoint() {
      this.startPointElement = document.createElement("div");
      this.startPointElement.className = "sliderm3__point";
      this.startPointElement.style.height = this.startPointElement.style.width = "".concat(this.element.dataset.pointSize, "px");
      this.countStartPointElementTop();
      this.countStartPointElementLeft();
      this.startPointElement.style.backgroundColor = this.element.dataset.colorPoint;
      this.lineElement.appendChild(this.startPointElement);

      if (this.element.dataset.hint) {
        this.startHintArrow = this.drawHint(this.startPointElement, this.element.dataset.startRange);
      }
    }
  }, {
    key: "countStartPointElementTop",
    value: function countStartPointElementTop() {
      if (this.element.dataset.vertical) {
        this.startPointElement.style.top = "".concat(this.rangeElement.offsetTop + this.rangeElement.offsetHeight - this.element.dataset.pointSize / 2, "px");
      } else {
        this.startPointElement.style.top = "".concat(this.lineElement.offsetHeight / 2 - this.element.dataset.pointSize / 2, "px");
      }
    }
  }, {
    key: "countStartPointElementLeft",
    value: function countStartPointElementLeft() {
      if (this.element.dataset.vertical) {
        this.startPointElement.style.left = "".concat(this.element.dataset.lineHeight / 2 - this.element.dataset.pointSize / 2, "px");
      } else {
        this.startPointElement.style.left = "".concat(this.rangeElement.offsetLeft - this.element.dataset.pointSize / 2, "px");
      }
    }
  }, {
    key: "drawEndPoint",
    value: function drawEndPoint() {
      this.endPointElement = document.createElement("div");
      this.endPointElement.className = "sliderm3__point";
      this.endPointElement.style.height = this.endPointElement.style.width = "".concat(this.element.dataset.pointSize, "px");
      this.countEndPointElementTop();
      this.countEndPointElementLeft();
      this.endPointElement.style.backgroundColor = this.element.dataset.colorPoint;
      this.lineElement.appendChild(this.endPointElement);

      if (this.element.dataset.hint) {
        this.endHintArrow = this.drawHint(this.endPointElement, this.element.dataset.endRange);
      }
    }
  }, {
    key: "countEndPointElementTop",
    value: function countEndPointElementTop() {
      if (this.element.dataset.vertical) {
        this.endPointElement.style.top = "".concat(this.rangeElement.offsetTop - this.element.dataset.pointSize / 2, "px");
      } else {
        this.endPointElement.style.top = "".concat(this.lineElement.offsetHeight / 2 - this.element.dataset.pointSize / 2, "px");
      }
    }
  }, {
    key: "countEndPointElementLeft",
    value: function countEndPointElementLeft() {
      if (this.element.dataset.vertical) {
        this.endPointElement.style.left = "".concat(this.element.dataset.lineHeight / 2 - this.element.dataset.pointSize / 2, "px");
      } else {
        this.endPointElement.style.left = "".concat(this.rangeElement.offsetLeft + this.rangeElement.offsetWidth - this.element.dataset.pointSize / 2, "px");
      }
    }
  }, {
    key: "drawHint",
    value: function drawHint(div, value) {
      var hintElement = document.createElement("div");
      hintElement.className = "sliderm3__hint";
      hintElement.style.height = "".concat(this.element.dataset.pointSize, "px");
      hintElement.style.fontSize = "".concat(this.element.dataset.pointSize * 4 / 6, "px");
      hintElement.style.color = this.element.dataset.colorText;
      hintElement.innerHTML = Math.round(value * 100) / 100;
      div.appendChild(hintElement);
      var arrowElement = document.createElement("div");
      arrowElement.className = "sliderm3__arrow";
      arrowElement.style.height = "".concat(this.element.dataset.pointSize / 3, "px");
      arrowElement.style.width = "".concat(this.element.dataset.pointSize / 3, "px");
      hintElement.appendChild(arrowElement);
      this.setHintPosition(hintElement, arrowElement);
      return [hintElement, arrowElement];
    }
  }, {
    key: "setHintPosition",
    value: function setHintPosition(hintElement, arrowElement) {
      if (this.element.dataset.vertical) {
        hintElement.style.left = "".concat(-this.element.dataset.pointSize / 2 - hintElement.offsetWidth, "px");
        hintElement.style.top = "".concat(this.element.dataset.pointSize / 2 - hintElement.offsetHeight / 2, "px");
        arrowElement.style.top = "".concat(hintElement.offsetHeight / 2 - arrowElement.offsetHeight / 2, "px");
        arrowElement.style.left = "".concat(hintElement.offsetWidth - arrowElement.offsetWidth / 2 - 1, "px");
      } else {
        hintElement.style.top = "".concat(-this.element.dataset.pointSize / 2 - hintElement.offsetHeight, "px");
        hintElement.style.left = "".concat(this.element.dataset.pointSize / 2 - hintElement.offsetWidth / 2, "px");
        arrowElement.style.top = "".concat(hintElement.offsetHeight - arrowElement.offsetHeight / 2 - 1, "px");
        arrowElement.style.left = "".concat(hintElement.offsetWidth / 2 - arrowElement.offsetWidth / 2, "px");
      }
    }
  }]);

  return View;
}(_EventObserver__WEBPACK_IMPORTED_MODULE_1__["default"]), (_applyDecoratedDescriptor(_class.prototype, "mouseDownListener", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "mouseDownListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "mouseMoveListener", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "mouseMoveListener"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "cancelMove", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "cancelMove"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "resizeThrottler", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "resizeThrottler"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "refreshSlider", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "refreshSlider"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeStartRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeStartRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeEndRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeEndRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawLine", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawLine"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawScale", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawScale"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawRange", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawRange"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countRangeElementBandAndIndent", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countRangeElementBandAndIndent"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countPointRangeElement", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countPointRangeElement"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawStartPoint", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawStartPoint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countStartPointElementTop", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countStartPointElementTop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countStartPointElementLeft", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countStartPointElementLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawEndPoint", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawEndPoint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countEndPointElementTop", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countEndPointElementTop"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "countEndPointElementLeft", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "countEndPointElementLeft"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "drawHint", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "drawHint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setHintPosition", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setHintPosition"), _class.prototype)), _class);


/***/ }),

/***/ "./src/sliderm3.scss":
/*!***************************!*\
  !*** ./src/sliderm3.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "./node_modules/modifiable-slider/dist/sliderm3.css":
/*!**********************************************************!*\
  !*** ./node_modules/modifiable-slider/dist/sliderm3.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/button/button.js":
/*!*****************************************!*\
  !*** ./src/components/button/button.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


var RippleButton = (_class =
/*#__PURE__*/
function () {
  function RippleButton(button) {
    _classCallCheck(this, RippleButton);

    this.button = button;
    $(button).click(this.clickRipple);
  }

  _createClass(RippleButton, [{
    key: "clickRipple",
    value: function clickRipple(e) {
      var X = e.pageX - this.button.offsetLeft;
      var Y = e.pageY - this.button.offsetTop;
      var rippleDiv = document.createElement('div');
      $(rippleDiv).addClass('ripple').css({
        top: "".concat(Y, "px"),
        left: "".concat(X, "px")
      });
      this.button.appendChild(rippleDiv);
      setTimeout(function () {
        rippleDiv.parentElement.removeChild(rippleDiv);
      }, 900);
    }
  }]);

  return RippleButton;
}(), (_applyDecoratedDescriptor(_class.prototype, "clickRipple", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "clickRipple"), _class.prototype)), _class);
$('.btn').each(function (index, element) {
  return new RippleButton(element);
});

/***/ }),

/***/ "./src/components/calendar/calendar.js":
/*!*********************************************!*\
  !*** ./src/components/calendar/calendar.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }

/* eslint-disable no-underscore-dangle */


$.datepicker._gotoToday = function (id) {
  var target = jQuery(id);

  var inst = this._getInst(target[0]);

  if (this._get(inst, 'gotoCurrent') && inst.currentDay) {
    inst.selectedDay = inst.currentDay;
    inst.drawMonth = inst.currentMonth;
    inst.selectedMonth = inst.currentMonth;
    inst.drawYear = inst.currentYear;
    inst.selectedYear = inst.currentYear;
  } else {
    var date = new Date();
    inst.selectedDay = date.getDate();
    inst.drawMonth = date.getMonth();
    inst.selectedMonth = date.getMonth();
    inst.drawYear = date.getFullYear();
    inst.selectedYear = date.getFullYear();

    this._setDateDatepicker(target, date);

    this._selectDate(id, this._getDateDatepicker(target));
  }

  this._notifyChange(inst);

  this._adjustDate(target);
};

var Calendar = (_class =
/*#__PURE__*/
function () {
  function Calendar(mydatepicker) {
    _classCallCheck(this, Calendar);

    this.mdpicker = $(mydatepicker);
    this.mdpicker.datepicker({
      inline: true,
      firstDay: 1,
      showOtherMonths: true,
      showButtonPanel: true,
      showYear: false,
      dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      onSelect: this.setDay,
      onChangeMonthYear: this.changeMonthHoldDay
    }).datepicker('setDate', "".concat(mydatepicker.dataset.month, "/").concat(mydatepicker.dataset.date, "/").concat(mydatepicker.dataset.year));
  }

  _createClass(Calendar, [{
    key: "setDay",
    value: function setDay(e) {
      $('.calendar__date', this.parentElement).html(parseInt(e.split('/')[1], 10));
    }
  }, {
    key: "changeMonthHoldDay",
    value: function changeMonthHoldDay(y, m, i) {
      this.mdpicker.datepicker('setDate', new Date(y, m - 1, i.selectedDay));
    }
  }]);

  return Calendar;
}(), (_applyDecoratedDescriptor(_class.prototype, "setDay", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "setDay"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "changeMonthHoldDay", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "changeMonthHoldDay"), _class.prototype)), _class);
$('.mydatepicker').each(function (index, element) {
  return new Calendar(element);
});

/***/ }),

/***/ "./src/components/dropdown/dropdown.js":
/*!*********************************************!*\
  !*** ./src/components/dropdown/dropdown.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


var Dropdown = (_class =
/*#__PURE__*/
function () {
  function Dropdown(element) {
    _classCallCheck(this, Dropdown);

    $(element).click(this.dropdownMenuClick);
    $(window).click(this.clickOutside);
  } // eslint-disable-next-line class-methods-use-this


  _createClass(Dropdown, [{
    key: "clickOutside",
    value: function clickOutside() {
      $('.dropdown__menu').removeClass('dropdown__menu_visible');
    }
  }, {
    key: "dropdownMenuClick",
    value: function dropdownMenuClick(event) {
      $('.dropdown__menu', event.currentTarget).toggleClass('dropdown__menu_visible').click(this.chooseClickValue);
      event.stopPropagation();
    }
  }, {
    key: "chooseClickValue",
    value: function chooseClickValue(event) {
      if (event.target.firstChild.data) {
        $('.dropdown__input', this.parentElement).val(event.target.firstChild.data);
      }
    }
  }]);

  return Dropdown;
}(), (_applyDecoratedDescriptor(_class.prototype, "dropdownMenuClick", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "dropdownMenuClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "chooseClickValue", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "chooseClickValue"), _class.prototype)), _class);
$('.dropdown').each(function (index, element) {
  return new Dropdown(element);
});

/***/ }),

/***/ "./src/components/form-input/form-input.js":
/*!*************************************************!*\
  !*** ./src/components/form-input/form-input.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


var FormInput = (_class =
/*#__PURE__*/
function () {
  function FormInput(element) {
    _classCallCheck(this, FormInput);

    this.textDiv = element.querySelector('.js-form-input__text');
    this.buttonDiv = $('.js-form-input__button', element);

    if (this.textDiv.dataset.reg === 'username') {
      this.reg = new RegExp('^([a-zA-Z_-]){3,10}$');
    }

    if (this.textDiv.dataset.reg === 'email') {
      this.reg = new RegExp("^(([^<>()[\\]\\\\.,;:\\s@\\']+(\\.[^<>()[\\]\\\\.,;:\\s@\\']+)*)|(\\'.+\\'))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$");
    }

    this.success = this.textDiv.dataset.success;
    this.error = this.textDiv.dataset.error;
    $(element).keyup(this.checkInput);
  }

  _createClass(FormInput, [{
    key: "checkInput",
    value: function checkInput() {
      if (this.textDiv.value.length === 0) {
        this.buttonDiv.removeClass('form-input__button_visible');
        return;
      }

      this.buttonDiv.addClass('form-input__button_visible');
      var regExpToCheck = new RegExp(this.reg);

      if (regExpToCheck.test(this.textDiv.value)) {
        this.buttonDiv.removeClass('form-input__button_error').html(this.success);
      } else {
        this.buttonDiv.addClass('form-input__button_error').html(this.error);
      }
    }
  }]);

  return FormInput;
}(), (_applyDecoratedDescriptor(_class.prototype, "checkInput", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "checkInput"), _class.prototype)), _class);
$('.form-input').each(function (index, element) {
  return new FormInput(element);
});

/***/ }),

/***/ "./src/components/form-toggle/form-toggle.js":
/*!***************************************************!*\
  !*** ./src/components/form-toggle/form-toggle.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(document).ready(function () {
  $('input').lc_switch();
});

/***/ }),

/***/ "./src/components/search/search.js":
/*!*****************************************!*\
  !*** ./src/components/search/search.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! decko */ "./node_modules/decko/dist/decko.js");
/* harmony import */ var decko__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(decko__WEBPACK_IMPORTED_MODULE_0__);
var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object['ke' + 'ys'](descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object['define' + 'Property'](target, property, desc); desc = null; } return desc; }


var SearchInput = (_class =
/*#__PURE__*/
function () {
  function SearchInput(element) {
    _classCallCheck(this, SearchInput);

    this.input = $('.search__input', element);
    this.tmp = '';
    this.input.click(this.searchInputClick);
    $('.search__button', element).click(this.searchInputNotFound);
  }

  _createClass(SearchInput, [{
    key: "searchInputClick",
    value: function searchInputClick() {
      this.input.removeClass('search__input_not-found').val(this.tmp);
    }
  }, {
    key: "searchInputNotFound",
    value: function searchInputNotFound() {
      this.tmp = this.input.val();
      this.input.addClass('search__input_not-found').val(this.input[0].dataset.error);
    }
  }]);

  return SearchInput;
}(), (_applyDecoratedDescriptor(_class.prototype, "searchInputClick", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchInputClick"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "searchInputNotFound", [decko__WEBPACK_IMPORTED_MODULE_0__["bind"]], Object.getOwnPropertyDescriptor(_class.prototype, "searchInputNotFound"), _class.prototype)), _class);
$('.search').each(function (index, element) {
  return new SearchInput(element);
});

/***/ }),

/***/ "./src/components/sectors/sectors.js":
/*!*******************************************!*\
  !*** ./src/components/sectors/sectors.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sectors = function Sectors(canvas) {
  _classCallCheck(this, Sectors);

  var ctx = canvas.getContext('2d');
  var sectors = JSON.parse(canvas.getAttribute('sectors'));
  var r = canvas.getAttribute('r');
  ctx.lineWidth = r * 0.33; // толщина линии

  var start = 4.71;

  for (var i = 0; i < sectors.length; i += 1) {
    var key = Object.keys(sectors[i])[0];
    ctx.strokeStyle = key;
    var end = start + sectors[i][key] * 2 * Math.PI / 100;
    ctx.beginPath();
    ctx.arc(r, r, r * 0.7, start, end, false);
    ctx.stroke();
    start = end;
  }

  ctx.strokeStyle = '#e5e5e5';
  ctx.beginPath();
  ctx.arc(r, r, r * 0.7, start, 4.71, false);
  ctx.stroke();
};

$('.sectors').each(function (index, element) {
  return new Sectors(element);
});

/***/ }),

/***/ "./src/img/arrow.png":
/*!***************************!*\
  !*** ./src/img/arrow.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/arrow.png";

/***/ }),

/***/ "./src/img/city.png":
/*!**************************!*\
  !*** ./src/img/city.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/city.png";

/***/ }),

/***/ "./src/img/favicon.ico":
/*!*****************************!*\
  !*** ./src/img/favicon.ico ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/favicon.ico";

/***/ }),

/***/ "./src/img/john.png":
/*!**************************!*\
  !*** ./src/img/john.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/john.png";

/***/ }),

/***/ "./src/img/sarah.png":
/*!***************************!*\
  !*** ./src/img/sarah.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sarah.png";

/***/ }),

/***/ "./src/img/velo.png":
/*!**************************!*\
  !*** ./src/img/velo.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/velo.png";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _img_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/arrow.png */ "./src/img/arrow.png");
/* harmony import */ var _img_arrow_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_img_arrow_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_city_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/city.png */ "./src/img/city.png");
/* harmony import */ var _img_city_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_city_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_john_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/john.png */ "./src/img/john.png");
/* harmony import */ var _img_john_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_john_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_sarah_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/sarah.png */ "./src/img/sarah.png");
/* harmony import */ var _img_sarah_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_sarah_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_velo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/velo.png */ "./src/img/velo.png");
/* harmony import */ var _img_velo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_velo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/favicon.ico */ "./src/img/favicon.ico");
/* harmony import */ var _img_favicon_ico__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_img_favicon_ico__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lc_switch_lc_switch_min__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! lc-switch/lc_switch.min */ "./node_modules/lc-switch/lc_switch.min.js");
/* harmony import */ var lc_switch_lc_switch_min__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lc_switch_lc_switch_min__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lc_switch_lc_switch_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lc-switch/lc_switch.css */ "./node_modules/lc-switch/lc_switch.css");
/* harmony import */ var lc_switch_lc_switch_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lc_switch_lc_switch_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_button_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/button/button */ "./src/components/button/button.js");
/* harmony import */ var _components_form_input_form_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form-input/form-input */ "./src/components/form-input/form-input.js");
/* harmony import */ var _components_dropdown_dropdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/dropdown/dropdown */ "./src/components/dropdown/dropdown.js");
/* harmony import */ var _components_search_search__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/search/search */ "./src/components/search/search.js");
/* harmony import */ var _components_calendar_calendar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/calendar/calendar */ "./src/components/calendar/calendar.js");
/* harmony import */ var _components_sectors_sectors__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/sectors/sectors */ "./src/components/sectors/sectors.js");
/* harmony import */ var _components_sectors_sectors__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_components_sectors_sectors__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var modifiable_slider_dist_main__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! modifiable-slider/dist/main */ "./node_modules/modifiable-slider/dist/main.js");
/* harmony import */ var modifiable_slider_dist_main__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(modifiable_slider_dist_main__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var modifiable_slider_dist_sliderm3_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! modifiable-slider/dist/sliderm3.css */ "./node_modules/modifiable-slider/dist/sliderm3.css");
/* harmony import */ var modifiable_slider_dist_sliderm3_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(modifiable_slider_dist_sliderm3_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/form-toggle/form-toggle */ "./src/components/form-toggle/form-toggle.js");
/* harmony import */ var _components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_components_form_toggle_form_toggle__WEBPACK_IMPORTED_MODULE_17__);



















/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=main.js.map