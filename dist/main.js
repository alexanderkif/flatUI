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

/***/ "./src/forms/toggle.js":
/*!*****************************!*\
  !*** ./src/forms/toggle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n$(document).ready(function (e) {\n\t$('input').lc_switch();\n});\n\n//# sourceURL=webpack:///./src/forms/toggle.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./percentages/percentages */ \"./src/percentages/percentages.js\");\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_percentages_percentages__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sliders_sliders__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliders/sliders */ \"./src/sliders/sliders.js\");\n/* harmony import */ var _sliders_sliders__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sliders_sliders__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sliderm_sliderm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sliderm/sliderm */ \"./src/sliderm/sliderm.js\");\n/* harmony import */ var _sliderm_sliderm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_sliderm_sliderm__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sliderm2/sliderm2 */ \"./src/sliderm2/sliderm2.js\");\n/* harmony import */ var _sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _forms_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forms/toggle */ \"./src/forms/toggle.js\");\n/* harmony import */ var _forms_toggle__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_forms_toggle__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\n\nconsole.log(\"Run flatUI...\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/percentages/percentages.js":
/*!****************************************!*\
  !*** ./src/percentages/percentages.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function () {\n        if (document.getElementById('cnvs')) {\n                var canvas = document.getElementById('cnvs');\n                var ctx = canvas.getContext('2d');\n                var p1 = canvas.getAttribute(\"p1\");\n                var p2 = canvas.getAttribute(\"p2\");\n                var p3 = canvas.getAttribute(\"p3\");\n                var r = canvas.getAttribute(\"r\");\n                var a1 = 4.71 + p1 * 2 * Math.PI / 100;\n                var a2 = a1 + p2 * 2 * Math.PI / 100;\n                var a3 = a2 + p3 * 2 * Math.PI / 100;\n\n                ctx.lineWidth = r * 0.33; // толщина линии\n\n                ctx.strokeStyle = \"#747474\";\n                ctx.beginPath();\n                ctx.arc(r, r, r * 0.7, 4.71, a1, false);\n                ctx.stroke();\n\n                ctx.strokeStyle = \"#e75735\";\n                ctx.beginPath();\n                ctx.arc(r, r, r * 0.7, a1, a2, false);\n                ctx.stroke();\n\n                ctx.strokeStyle = \"#4eb7a8\";\n                ctx.beginPath();\n                ctx.arc(r, r, r * 0.7, a2, a3, false);\n                ctx.stroke();\n\n                ctx.strokeStyle = \"#e5e5e5\";\n                ctx.beginPath();\n                ctx.arc(r, r, r * 0.7, a3, 4.71, false);\n                ctx.stroke();\n        }\n});\n\n//# sourceURL=webpack:///./src/percentages/percentages.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ }),

/***/ "./src/sliderm/sliderm.js":
/*!********************************!*\
  !*** ./src/sliderm/sliderm.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var elems = document.getElementsByClassName('sliderm');\n[].forEach.call(elems, function (element) {\n\n    var slbody = element.querySelector('.sliderm-body');\n    var hint = element.querySelector('.sliderm-hint');\n    var starthint = element.querySelector('.sliderm-starthint');\n    var hintArrow = element.querySelector('.sliderm-hint-arrow');\n    var starthintArrow = element.querySelector('.sliderm-starthint-arrow');\n    var point = element.querySelector('.sliderm-point');\n    var startpoint = element.querySelector('.sliderm-startpoint');\n    var lineActive = element.querySelector('.sliderm-line-active');\n    var line = element.querySelector('.sliderm-line');\n    var scale = element.querySelector('.sliderm-scale');\n    var text = element.querySelector('.sliderm-hint-text');\n    var starttext = element.querySelector('.sliderm-starthint-text');\n    var inputs = element.querySelector('.inputs');\n    var interval = element.querySelector('.interval');\n    var tickHint = element.getElementsByClassName('tick-hint')[0];\n    var tickScale = element.getElementsByClassName('tick-scale')[0];\n    var tickInterval = element.getElementsByClassName('tick-interval')[0];\n    var tickVertical = element.getElementsByClassName('tick-vertical')[0];\n    var slidermValue = element.querySelector('.sliderm-value');\n    var slidermStart = element.querySelector('.sliderm-start');\n    var slidermMin = element.querySelector('.sliderm-min');\n    var slidermMax = element.querySelector('.sliderm-max');\n    var slidermStep = element.querySelector('.sliderm-step');\n    var slidermIntervals = element.querySelector('.sliderm-intervals');\n    var value;\n    var min;\n    var max;\n    var step;\n    var intervals;\n    var start;\n\n    var getInputs = function () {\n        value = slidermValue.value;\n        start = slidermStart.value;\n        min = slidermMin.value;\n        max = slidermMax.value;\n        step = slidermStep.value;\n        intervals = slidermIntervals.value;\n    };\n\n    getInputs();\n\n    var createScale = function () {\n        while (scale.firstChild) {\n            scale.removeChild(scale.firstChild);\n        }\n        scale.style.width = '100%';\n        for (var i = 0; i <= intervals; i++) {\n            var digit = document.createElement('div');\n            digit.innerHTML = Math.round(+min + (max - min) * i / intervals);\n            scale.appendChild(digit);\n            if (i == intervals) {\n                scale.style.width = scale.offsetWidth + digit.offsetWidth + \"px\";\n            }\n        }\n    };\n\n    createScale();\n\n    var drawHint = function (h, ha, p, text, value) {\n        text.innerHTML = '' + step * Math.round(value / step);\n\n        if (slbody.classList.contains('vertical')) {\n            ha.style.top = h.clientHeight / 2 - ha.clientHeight / 2 + \"px\";\n            ha.style.left = h.clientWidth - ha.clientHeight / 2 + \"px\";\n            h.style.top = -h.clientWidth / 2 - Math.sqrt(ha.clientHeight * ha.clientHeight / 2) - p.clientWidth / 2 - 3 + \"px\";\n            h.style.left = p.clientHeight / 2 - h.clientWidth / 2 + \"px\";\n        } else {\n            ha.style.top = h.clientHeight - ha.clientHeight / 2 + \"px\";\n            ha.style.left = h.clientWidth / 2 - ha.clientHeight / 2 + \"px\";\n            h.style.top = -h.clientHeight - Math.sqrt(ha.clientHeight * ha.clientHeight / 2) - 3 + \"px\";\n            h.style.left = p.clientWidth / 2 - h.clientWidth / 2 + \"px\";\n        }\n    };\n\n    var draw = function () {\n\n        if (tickHint.classList.contains('active')) {\n            hint.style.visibility = \"visible\";\n            starthint.style.visibility = \"visible\";\n        } else {\n            hint.style.visibility = \"hidden\";\n            starthint.style.visibility = \"hidden\";\n        }\n\n        if (tickScale.classList.contains('active')) {\n            scale.style.visibility = \"visible\";\n        } else {\n            scale.style.visibility = \"hidden\";\n        }\n\n        if (tickInterval.classList.contains('active')) {\n            startpoint.style.visibility = \"visible\";\n            if (tickHint.classList.contains('active')) starthint.style.visibility = \"visible\";\n            interval.style.display = \"inherit\";\n            var leftpoint = line.clientWidth * (start - min) / (max - min) - startpoint.clientWidth / 2;\n            var rightpoint = line.clientWidth * (value - min) / (max - min) - point.clientWidth / 2;\n            lineActive.style.left = leftpoint + startpoint.clientWidth / 2 + \"px\";\n            lineActive.style.width = rightpoint - leftpoint + \"px\";\n            startpoint.style.left = leftpoint + \"px\";\n            point.style.left = rightpoint + \"px\";\n        } else {\n            startpoint.style.visibility = \"hidden\";\n            starthint.style.visibility = \"hidden\";\n            interval.style.display = \"none\";\n            lineActive.style.left = 0 + \"px\";\n            lineActive.style.width = line.clientWidth * (value - min) / (max - min) + \"px\";\n            point.style.left = line.clientWidth * (value - min) / (max - min) - point.clientWidth / 2 + \"px\";\n        }\n\n        if (tickVertical.classList.contains('active')) {\n            slbody.classList.add('vertical');\n        } else {\n            slbody.classList.remove('vertical');\n        }\n\n        drawHint(hint, hintArrow, point, text, value);\n        drawHint(starthint, starthintArrow, startpoint, starttext, start);\n    };\n\n    var checkRange = function () {\n        if (+value > +max) value = max;\n        if (+value < +min) value = min;\n        if (+start < +min) start = min;\n    };\n\n    slbody.onmousedown = function (e) {\n\n        var lineCoords = getCoords(line);\n        var shiftX;\n        if (slbody.classList.contains('vertical')) shiftX = line.clientWidth + lineCoords.top - e.pageY;else shiftX = e.pageX - lineCoords.left;\n        var pointCoords;\n        var startpointCoords;\n        var elementCoords = getCoords(element);\n        var lefter = step * Math.round((+min + shiftX / line.clientWidth * (max - min)) / step);\n\n        if (tickInterval.classList.contains('active') && lefter < value - max * point.clientWidth / line.clientWidth / 2) {\n\n            start = step * Math.round((+min + shiftX / line.clientWidth * (max - min)) / step);\n\n            if (+start >= +value) start = value;\n            checkRange();\n            draw();\n\n            startpointCoords = getCoords(startpoint);\n            if (slbody.classList.contains('vertical')) shiftX = e.pageY - startpointCoords.top;else shiftX = e.pageX - startpointCoords.left;\n\n            document.onmousemove = function (e) {\n                var newLeft;\n                if (slbody.classList.contains('vertical')) newLeft = elementCoords.top + line.clientWidth - e.pageY;else newLeft = e.pageX - shiftX - elementCoords.left;\n                if (newLeft < -startpoint.clientWidth / 2) newLeft = -startpoint.clientWidth / 2;\n\n                start = step * Math.round((+min + (newLeft + startpoint.clientWidth / 2) * (max - min) / line.clientWidth) / step);\n\n                if (+start >= +value) start = value;\n                checkRange();\n                draw();\n            };\n        } else {\n\n            value = step * Math.round((+min + shiftX / line.clientWidth * (max - min)) / step);\n\n            if (+value <= +start && tickInterval.classList.contains('active')) value = start;\n            checkRange();\n            draw();\n\n            pointCoords = getCoords(point);\n            if (slbody.classList.contains('vertical')) shiftX = e.pageY - pointCoords.top;else shiftX = e.pageX - pointCoords.left;\n\n            document.onmousemove = function (e) {\n                var newLeft;\n                if (slbody.classList.contains('vertical')) newLeft = elementCoords.top + line.clientWidth - e.pageY;else newLeft = e.pageX - shiftX - elementCoords.left;\n                var rightEdge = line.clientWidth - point.clientWidth / 2;\n                if (newLeft > rightEdge) newLeft = rightEdge;\n\n                value = step * Math.round((+min + (newLeft + point.clientWidth / 2) * (max - min) / line.clientWidth) / step);\n\n                if (+value <= +start && tickInterval.classList.contains('active')) value = start;\n                checkRange();\n                draw();\n            };\n        }\n\n        document.onmouseup = function () {\n            document.onmousemove = document.onmouseup = null;\n        };\n\n        return false; // disable selection start (cursor change)\n    };\n\n    function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    slbody.ondragstart = function () {\n        return false;\n    };\n\n    inputs.addEventListener('change', function () {\n        getInputs();\n        draw();\n        createScale();\n    });\n\n    inputs.addEventListener('click', function () {\n        draw();\n    });\n\n    slbody.oncontextmenu = function () {\n        return false;\n    };\n\n    draw();\n\n    setTimeout(function () {\n        inputs.click();\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./src/sliderm/sliderm.js?");

/***/ }),

/***/ "./src/sliderm2/sliderm2.js":
/*!**********************************!*\
  !*** ./src/sliderm2/sliderm2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var classSliderm2 = 'sliderm2';\n\nvar Line = function (min, max) {\n    this.min = min;\n    this.max = max;\n    this.range = max - min;\n};\n\nvar DrawLine = function (div, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine) {\n    Sliderm2ClassRemove(div, 'sliderm2line');\n    var lineDiv = document.createElement(\"div\");\n    lineDiv.className = \"sliderm2line\";\n    lineDiv.style.height = lineHeight + 'px';\n    lineDiv.style.width = '100%';\n    lineDiv.style.borderRadius = lineHeight / 2 + 'px';\n    lineDiv.style.backgroundColor = colorLine;\n    var sliderm2body = div.getElementsByClassName('sliderm2body')[0];\n    sliderm2body.appendChild(lineDiv);\n    sliderm2body.style.position = 'relative';\n    sliderm2body.style.display = 'block';\n    sliderm2body.style.margin = '0px auto';\n    sliderm2body.style.userSelect = 'none';\n    sliderm2body.style.height = pointHeight / 2 + lineHeight / 2 + 20 + 'px';\n    if (tickVertical.classList.contains('active')) {\n        sliderm2body.style.width = slidermVerticalSize + 'px';\n        sliderm2body.style.transform = 'rotate(-90deg) translateX(' + -slidermVerticalSize / 2 + 'px)';\n        sliderm2body.style.marginBottom = slidermVerticalSize + 'px';\n    } else {\n        sliderm2body.style.width = '100%';\n        sliderm2body.style.transform = 'rotate(0deg)';\n        sliderm2body.style.marginBottom = '0px';\n    }\n    return lineDiv;\n};\n\nvar Range = function (value1, value2, line) {\n    this.value1 = value1;\n    this.value2 = value2;\n    this.point1 = new Point(value1, line);\n    this.point2 = new Point(value2, line);\n};\n\nvar DrawRange = function (div, range, colorPoint) {\n    Sliderm2ClassRemove(div, 'sliderm2range');\n    var rangeDiv = document.createElement(\"div\");\n    rangeDiv.className = \"sliderm2range\";\n    rangeDiv.style.height = 'inherit';\n    rangeDiv.style.position = 'absolute';\n    rangeDiv.style.top = '0';\n    rangeDiv.style.left = range.point1.value + '%';\n    rangeDiv.style.width = range.point2.value - range.point1.value + '%';\n    rangeDiv.style.borderRadius = 'inherit';\n    rangeDiv.style.backgroundColor = colorPoint;\n    div.appendChild(rangeDiv);\n    return rangeDiv;\n};\n\nvar Point = function (value, line) {\n    this.inValue = value;\n    this.value = (value - line.min) / line.range * 100;\n};\n\nvar DrawPoints = function (div, points, pointHeight, tickHint, tickVertical, colorPoint, colorText) {\n    Sliderm2ClassRemove(div, 'sliderm2point');\n    var pointDivs = points.map(function (point) {\n        var pointDiv = document.createElement(\"div\");\n        pointDiv.className = \"sliderm2point\";\n        pointDiv.style.position = 'absolute';\n        pointDiv.style.height = pointDiv.style.width = pointHeight + 'px';\n        pointDiv.style.borderRadius = '50%';\n        pointDiv.style.top = div.offsetHeight / 2 - pointHeight / 2 + 'px';\n        pointDiv.style.left = 'calc(' + point.value + '% - ' + pointHeight / 2 + 'px)';\n        pointDiv.style.backgroundColor = colorPoint;\n        div.appendChild(pointDiv);\n        if (tickHint.classList.contains('active')) point.drawHint = new DrawHint(pointDiv, point, pointHeight, tickVertical, colorText);\n        return pointDiv;\n    });\n    return pointDivs;\n};\n\nvar DrawHint = function (div, point, pointHeight, tickVertical, colorText) {\n    Sliderm2ClassRemove(div, 'sliderm2hint');\n    var hintDiv = document.createElement(\"div\");\n    hintDiv.className = \"sliderm2hint\";\n    hintDiv.style.position = 'absolute';\n    hintDiv.style.display = 'table-cell';\n    hintDiv.style.verticalAlign = 'middle';\n    hintDiv.style.width = 'auto';\n    hintDiv.style.padding = '2px 8px';\n    hintDiv.style.borderRadius = '4px';\n    hintDiv.style.textAlign = 'center';\n    hintDiv.style.height = pointHeight + 'px';\n    hintDiv.style.fontSize = pointHeight * 0.9;\n    hintDiv.style.backgroundColor = 'inherit';\n    hintDiv.style.color = colorText;\n    hintDiv.innerHTML = Math.round(point.inValue * 100) / 100;\n    div.appendChild(hintDiv);\n\n    var arrowDiv = document.createElement(\"div\");\n    arrowDiv.className = \"sliderm2arrow\";\n    arrowDiv.style.position = 'absolute';\n    arrowDiv.style.content = '';\n    arrowDiv.style.transform = 'rotate(-45deg)';\n    arrowDiv.style.zIndex = '-1';\n    arrowDiv.style.height = pointHeight / 3 + 'px';\n    arrowDiv.style.width = pointHeight / 3 + 'px';\n    arrowDiv.style.backgroundColor = 'inherit';\n    hintDiv.appendChild(arrowDiv);\n\n    if (tickVertical.classList.contains('active')) {\n        hintDiv.style.transform = 'rotate(90deg) translateX(' + 0 + 'px)';\n        hintDiv.style.top = -pointHeight - hintDiv.offsetWidth / 2 + 'px';\n        hintDiv.style.left = pointHeight / 2 - hintDiv.offsetWidth / 2 + 'px';\n        arrowDiv.style.top = hintDiv.offsetHeight / 2 - arrowDiv.offsetHeight / 2 + 'px';\n        arrowDiv.style.left = hintDiv.offsetWidth - arrowDiv.offsetWidth / 2 + 'px';\n    } else {\n        hintDiv.style.transform = 'rotate(0deg)';\n        hintDiv.style.top = -pointHeight * 3 / 2 + 'px';\n        hintDiv.style.left = pointHeight / 2 - hintDiv.offsetWidth / 2 + 'px';\n        arrowDiv.style.top = hintDiv.offsetHeight - arrowDiv.offsetHeight / 2 + 'px';\n        arrowDiv.style.left = hintDiv.offsetWidth / 2 - arrowDiv.offsetWidth / 2 + 'px';\n    }\n};\n\nvar Sliderm2ClassRemove = function (div, removingClass) {\n    var elem = div.getElementsByClassName(removingClass)[0];\n    while (elem) {\n        elem.remove();\n        elem = div.getElementsByClassName(removingClass)[0];\n    }\n};\n\nvar createScale = function (div, line, intervals, pointHeight, lineHeight, tickVertical, colorScale) {\n    Sliderm2ClassRemove(div, 'sliderm2scale');\n    var scaleDiv = document.createElement(\"div\");\n    scaleDiv.className = \"sliderm2scale\";\n    scaleDiv.style.position = 'absolute';\n    scaleDiv.style.display = 'flex';\n    scaleDiv.style.left = -pointHeight / 2 + 'px';\n    scaleDiv.style.fontSize = pointHeight * 3 / 5 + 'px';\n    scaleDiv.style.justifyContent = 'space-between';\n    scaleDiv.style.top = pointHeight / 2 + lineHeight / 2 + 5 + 'px';\n    scaleDiv.style.color = colorScale;\n    div.appendChild(scaleDiv);\n    scaleDiv.style.width = 'calc(100% + ' + pointHeight + 'px)';\n    var digit;\n    for (var i = 0; i <= intervals; i++) {\n        digit = document.createElement('div');\n        digit.innerHTML = Math.round(+line.min + line.range * i / intervals);\n        if (tickVertical.classList.contains('active')) digit.style.transform = 'rotate(90deg)';\n        scaleDiv.appendChild(digit);\n    }\n    scaleDiv.style.height = digit.offsetWidth + 'px';\n};\n\n//Controller\nvar elems2 = document.getElementsByClassName(classSliderm2);\n[].forEach.call(elems2, function (element) {\n    var sliderm2body = element.querySelector('.sliderm2body');\n    var tickHint = element.getElementsByClassName('tick-hint')[0];\n    var tickScale = element.getElementsByClassName('tick-scale')[0];\n    var tickInterval = element.getElementsByClassName('tick-interval')[0];\n    var tickVertical = element.getElementsByClassName('tick-vertical')[0];\n    var slidermVerticalSize = element.querySelector('.sliderm-vertical-size');\n    var slidermValue2 = element.querySelector('.sliderm-value2');\n    var slidermValue1 = element.querySelector('.sliderm-value1');\n    var slidermMin = element.querySelector('.sliderm-min');\n    var slidermMax = element.querySelector('.sliderm-max');\n    var slidermStep = element.querySelector('.sliderm-step');\n    var slidermIntervals = element.querySelector('.sliderm-intervals');\n\n    var pointHeight = element.getAttribute('pointSize');\n    var lineHeight = element.getAttribute('lineHeight');\n    var step = element.getAttribute('step');\n    var intervals = element.getAttribute('intervals');\n    var colorLine = element.getAttribute('colorLine');\n    var colorPoint = element.getAttribute('colorPoint');\n    var colorScale = element.getAttribute('colorScale');\n    var colorText = element.getAttribute('colorText');\n\n    var line = new Line(element.getAttribute('min'), element.getAttribute('max'));\n    var drawLine = new DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize.value, colorLine);\n\n    var range = new Range(element.getAttribute('value1'), element.getAttribute('value2'), line);\n    var drawRange = new DrawRange(drawLine, range, colorPoint);\n\n    var drawPoints = new DrawPoints(drawLine, [range.point1, range.point2], pointHeight, tickHint, tickVertical, colorPoint, colorText);\n\n    var getInputs = function () {\n        line = new Line(slidermMin.value, slidermMax.value);\n        range = new Range(slidermValue1.value, slidermValue2.value, line);\n        step = slidermStep.value;\n        intervals = slidermIntervals.value;\n    };\n\n    var setInputs = function () {\n        if (tickInterval.classList.contains('active')) slidermValue1.value = Math.round(range.value1 * 100) / 100;\n        slidermValue2.value = Math.round(range.value2 * 100) / 100;\n        slidermMin.value = line.min;\n        slidermMax.value = line.max;\n        slidermStep.value = step;\n        slidermIntervals.value = intervals;\n    };\n\n    var inputs = element.querySelector('.inputs');\n\n    inputs.addEventListener('change', function () {\n        getInputs();\n        draw();\n    });\n\n    inputs.addEventListener('click', function () {\n        if (tickInterval.classList.contains('active')) range.value1 = +slidermValue1.value < +range.value2 ? slidermValue1.value : range.value2;\n        draw();\n    });\n\n    sliderm2body.oncontextmenu = function () {\n        return false;\n    };\n\n    sliderm2body.ondragstart = function () {\n        return false;\n    };\n\n    var draw = function () {\n        var points = checkRange();\n        setInputs();\n        drawLine = new DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize.value, colorLine);\n        drawRange = new DrawRange(drawLine, range, colorPoint);\n        drawPoints = new DrawPoints(drawLine, points, pointHeight, tickHint, tickVertical, colorPoint, colorText);\n        if (tickScale.classList.contains('active')) createScale(sliderm2body, line, intervals, pointHeight, lineHeight, tickVertical, colorScale);else Sliderm2ClassRemove(sliderm2body, 'sliderm2scale');\n    };\n\n    var checkRange = function () {\n        if (+range.value2 > +line.max) range.value2 = line.max;\n        if (+range.value2 < +line.min) range.value2 = line.min;\n        if (+range.value1 < +line.min) range.value1 = line.min;\n        var points = [];\n        if (tickInterval.classList.contains('active')) {\n            range = new Range(range.value1, range.value2, line);\n            points = [range.point1, range.point2];\n        } else {\n            range = new Range(line.min, range.value2, line);\n            points = [range.point2];\n        }\n        return points;\n    };\n\n    sliderm2body.addEventListener('mousedown', function (e) {\n        if (tickInterval.classList.contains('active') && getProcent(e) < range.value2 - line.max * pointHeight / drawLine.clientWidth / 2) {\n            range.value1 = getProcent(e);\n            if (+range.value1 >= +range.value2) range.value1 = range.value2;\n            draw();\n            document.onmousemove = function (e) {\n                range.value1 = getProcent(e);\n                if (+range.value1 >= +range.value2) range.value1 = range.value2;\n                draw();\n            };\n        } else {\n            range.value2 = getProcent(e);\n            if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) range.value2 = range.value1;\n            draw();\n            document.onmousemove = function (e) {\n                range.value2 = getProcent(e);\n                if (+range.value2 <= +range.value1 && tickInterval.classList.contains('active')) range.value2 = range.value1;\n                draw();\n            };\n        }\n        document.onmouseup = function () {\n            document.onmousemove = document.onmouseup = null;\n        };\n        return false; // disable selection start (cursor change)\n    });\n\n    function getProcent(e) {\n        var lineCoords = getCoords(drawLine);\n        if (tickVertical.classList.contains('active')) return step * Math.round((+line.min + (lineCoords.top + drawLine.clientWidth - e.pageY) / drawLine.clientWidth * line.range) / step);else return step * Math.round((+line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);\n    }\n\n    function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    draw();\n\n    setTimeout(function () {\n        draw();\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./src/sliderm2/sliderm2.js?");

/***/ }),

/***/ "./src/sliders/sliders.js":
/*!********************************!*\
  !*** ./src/sliders/sliders.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// $(\".range-example-input\").asRange({});\n\n//# sourceURL=webpack:///./src/sliders/sliders.js?");

/***/ })

/******/ });