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

/***/ "./src/buttons/buttons.js":
/*!********************************!*\
  !*** ./src/buttons/buttons.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".btn\").click(function (e) {\n\n  // Remove any old one\n  $(\".ripple\").remove();\n\n  // Setup\n  var posX = $(this).offset().left,\n      posY = $(this).offset().top,\n      buttonWidth = $(this).width(),\n      buttonHeight = $(this).height();\n\n  // Add the element\n  $(this).prepend(\"<span class='ripple'></span>\");\n\n  // Make it round!\n  if (buttonWidth >= buttonHeight) {\n    buttonHeight = buttonWidth;\n  } else {\n    buttonWidth = buttonHeight;\n  }\n\n  // Get the center of the element\n  var x = e.pageX - posX - buttonWidth / 2;\n  var y = e.pageY - posY - buttonHeight / 2;\n\n  // Add the ripples CSS and start the animation\n  $(\".ripple\").css({\n    width: buttonWidth,\n    height: buttonHeight,\n    top: y + 'px',\n    left: x + 'px'\n  }).addClass(\"rippleEffect\");\n});\n\n//# sourceURL=webpack:///./src/buttons/buttons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./percentages/percentages */ \"./src/percentages/percentages.js\");\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_percentages_percentages__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sliders_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders/sliders */ \"./src/sliders/sliders.js\");\n/* harmony import */ var _sliders_sliders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sliders_sliders__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nconsole.log(\"Run flatUI...\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/percentages/percentages.js":
/*!****************************************!*\
  !*** ./src/percentages/percentages.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var canvas = document.getElementById('cnvs');\nvar ctx = canvas.getContext('2d');\nvar p1 = canvas.getAttribute(\"p1\");\nvar p2 = canvas.getAttribute(\"p2\");\nvar p3 = canvas.getAttribute(\"p3\");\nvar a1 = 4.71 + p1 * 2 * Math.PI / 100;\nvar a2 = a1 + p2 * 2 * Math.PI / 100;\nvar a3 = a2 + p3 * 2 * Math.PI / 100;\n\nctx.lineWidth = 65; // толщина линии\n\nctx.strokeStyle = \"#747474\";\nctx.beginPath();\nctx.arc(200, 200, 140, 4.71, a1, false);\nctx.stroke();\n\nctx.strokeStyle = \"#e75735\";\nctx.beginPath();\nctx.arc(200, 200, 140, a1, a2, false);\nctx.stroke();\n\nctx.strokeStyle = \"#4eb7a8\";\nctx.beginPath();\nctx.arc(200, 200, 140, a2, a3, false);\nctx.stroke();\n\nctx.strokeStyle = \"#e5e5e5\";\nctx.beginPath();\nctx.arc(200, 200, 140, a3, 4.71, false);\nctx.stroke();\n\n//# sourceURL=webpack:///./src/percentages/percentages.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/sliders/sliders.js":
/*!********************************!*\
  !*** ./src/sliders/sliders.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(\".range-example-input\").asRange({});\n\n//# sourceURL=webpack:///./src/sliders/sliders.js?");

/***/ })

/******/ });