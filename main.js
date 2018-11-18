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

eval("$(\".btn\").click(function (e) {\n\n  // Remove any old one\n  $(\".ripple\").remove();\n\n  // Setup\n  var posX = $(this).offset().left,\n      posY = $(this).offset().top,\n      buttonWidth = $(this).width(),\n      buttonHeight = $(this).height();\n\n  if (!$(this).hasClass('disable')) {\n    // Add the element\n    $(this).prepend(\"<span class='ripple'></span>\");\n  }\n\n  // Make it round!\n  if (buttonWidth >= buttonHeight) {\n    buttonHeight = buttonWidth;\n  } else {\n    buttonWidth = buttonHeight;\n  }\n\n  // Get the center of the element\n  var x = e.pageX - posX - buttonWidth / 2;\n  var y = e.pageY - posY - buttonHeight / 2;\n\n  // Add the ripples CSS and start the animation\n  $(\".ripple\").css({\n    width: buttonWidth,\n    height: buttonHeight,\n    top: y + 'px',\n    left: x + 'px'\n  }).addClass(\"rippleEffect\");\n});\n\n//# sourceURL=webpack:///./src/buttons/buttons.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons/buttons */ \"./src/buttons/buttons.js\");\n/* harmony import */ var _buttons_buttons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_buttons_buttons__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./percentages/percentages */ \"./src/percentages/percentages.js\");\n/* harmony import */ var _percentages_percentages__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_percentages_percentages__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sliderm2/sliderm2 */ \"./src/sliderm2/sliderm2.js\");\n/* harmony import */ var _sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_sliderm2_sliderm2__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _forms_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forms/toggle */ \"./src/forms/toggle.js\");\n/* harmony import */ var _forms_toggle__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_forms_toggle__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconsole.log(\"Run flatUI...\");\n\n//# sourceURL=webpack:///./src/index.js?");

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

/***/ "./src/sliderm2/sliderm2.js":
/*!**********************************!*\
  !*** ./src/sliderm2/sliderm2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var classSliderm2 = 'sliderm2';\n\nvar Sliderm2Line = function (min, max) {\n    this.min = min;\n    this.max = max;\n    this.range = max - min;\n};\n\nvar Sliderm2DrawLine = function (div, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine) {\n    Sliderm2ClassRemove(div, 'sliderm2line');\n    var lineDiv = document.createElement(\"div\");\n    lineDiv.className = \"sliderm2line\";\n    lineDiv.style.height = lineHeight + 'px';\n    lineDiv.style.width = '100%';\n    lineDiv.style.borderRadius = lineHeight / 2 + 'px';\n    lineDiv.style.backgroundColor = colorLine;\n    var sliderm2body = div.getElementsByClassName('sliderm2body')[0];\n    sliderm2body.appendChild(lineDiv);\n    sliderm2body.style.position = 'relative';\n    sliderm2body.style.display = 'block';\n    sliderm2body.style.margin = '0px auto';\n    sliderm2body.style.userSelect = 'none';\n    sliderm2body.style.height = pointHeight / 2 + lineHeight / 2 + 5 + 'px';\n    sliderm2body.style.alignItems = 'center';\n    if (tickVertical) {\n        sliderm2body.style.width = slidermVerticalSize + 'px';\n        sliderm2body.style.transform = 'rotate(-90deg) translateX(' + -slidermVerticalSize / 2 + 'px)';\n        sliderm2body.style.marginBottom = slidermVerticalSize + 'px';\n    } else {\n        sliderm2body.style.width = '100%';\n        sliderm2body.style.transform = 'rotate(0deg)';\n        sliderm2body.style.marginBottom = '0px';\n    }\n    return lineDiv;\n};\n\nvar Sliderm2Range = function (value1, value2, line) {\n    this.value1 = value1;\n    this.value2 = value2;\n    this.point1 = new Sliderm2Point(value1, line);\n    this.point2 = new Sliderm2Point(value2, line);\n};\n\nvar Sliderm2DrawRange = function (div, range, colorPoint) {\n    Sliderm2ClassRemove(div, 'sliderm2range');\n    var rangeDiv = document.createElement(\"div\");\n    rangeDiv.className = \"sliderm2range\";\n    rangeDiv.style.height = 'inherit';\n    rangeDiv.style.position = 'absolute';\n    rangeDiv.style.top = '0';\n    rangeDiv.style.left = range.point1.value + '%';\n    rangeDiv.style.width = range.point2.value - range.point1.value + '%';\n    rangeDiv.style.borderRadius = 'inherit';\n    rangeDiv.style.backgroundColor = colorPoint;\n    div.appendChild(rangeDiv);\n    return rangeDiv;\n};\n\nvar Sliderm2Point = function (value, line) {\n    this.inValue = value;\n    this.value = (value - line.min) / line.range * 100;\n};\n\nvar Sliderm2DrawPoints = function (div, points, pointHeight, tickHint, tickVertical, colorPoint, colorText) {\n    Sliderm2ClassRemove(div, 'sliderm2point');\n    var pointDivs = points.map(function (point) {\n        var pointDiv = document.createElement(\"div\");\n        pointDiv.className = \"sliderm2point\";\n        pointDiv.style.position = 'absolute';\n        pointDiv.style.height = pointDiv.style.width = pointHeight + 'px';\n        pointDiv.style.borderRadius = '50%';\n        pointDiv.style.top = div.offsetHeight / 2 - pointHeight / 2 + 'px';\n        pointDiv.style.left = 'calc(' + point.value + '% - ' + pointHeight / 2 + 'px)';\n        pointDiv.style.backgroundColor = colorPoint;\n        div.appendChild(pointDiv);\n        if (tickHint) pointDiv.drawHint = new Sliderm2DrawHint(pointDiv, point, pointHeight, tickVertical, colorText);\n        return pointDiv;\n    });\n    return pointDivs;\n};\n\nvar Sliderm2DrawHint = function (div, point, pointHeight, tickVertical, colorText) {\n    Sliderm2ClassRemove(div, 'sliderm2hint');\n    var hintDiv = document.createElement(\"div\");\n    hintDiv.className = \"sliderm2hint\";\n    hintDiv.style.position = 'absolute';\n    hintDiv.style.display = 'table-cell';\n    hintDiv.style.verticalAlign = 'middle';\n    hintDiv.style.width = 'auto';\n    hintDiv.style.padding = '2px 8px';\n    hintDiv.style.borderRadius = '4px';\n    hintDiv.style.textAlign = 'center';\n    hintDiv.style.height = pointHeight + 'px';\n    hintDiv.style.fontSize = pointHeight * 0.9;\n    hintDiv.style.backgroundColor = 'inherit';\n    hintDiv.style.color = colorText;\n    hintDiv.innerHTML = Math.round(point.inValue * 100) / 100;\n    div.appendChild(hintDiv);\n\n    var arrowDiv = document.createElement(\"div\");\n    arrowDiv.className = \"sliderm2arrow\";\n    arrowDiv.style.position = 'absolute';\n    arrowDiv.style.content = '';\n    arrowDiv.style.transform = 'rotate(-45deg)';\n    arrowDiv.style.zIndex = '-1';\n    arrowDiv.style.height = pointHeight / 3 + 'px';\n    arrowDiv.style.width = pointHeight / 3 + 'px';\n    arrowDiv.style.backgroundColor = 'inherit';\n    hintDiv.appendChild(arrowDiv);\n\n    if (tickVertical) {\n        hintDiv.style.transform = 'rotate(90deg) translateX(' + 0 + 'px)';\n        hintDiv.style.top = -pointHeight - hintDiv.offsetWidth / 2 + 'px';\n        hintDiv.style.left = pointHeight / 2 - hintDiv.offsetWidth / 2 + 'px';\n        arrowDiv.style.top = hintDiv.offsetHeight / 2 - arrowDiv.offsetHeight / 2 + 'px';\n        arrowDiv.style.left = hintDiv.offsetWidth - arrowDiv.offsetWidth / 2 - 1 + 'px';\n    } else {\n        hintDiv.style.transform = 'rotate(0deg)';\n        hintDiv.style.top = -pointHeight * 3 / 2 + 'px';\n        hintDiv.style.left = pointHeight / 2 - hintDiv.offsetWidth / 2 + 'px';\n        arrowDiv.style.top = hintDiv.offsetHeight - arrowDiv.offsetHeight / 2 + 'px';\n        arrowDiv.style.left = hintDiv.offsetWidth / 2 - arrowDiv.offsetWidth / 2 + 'px';\n    }\n    return hintDiv;\n};\n\nvar Sliderm2ClassRemove = function (div, removingClass) {\n    var elem = div.getElementsByClassName(removingClass)[0];\n    while (elem) {\n        elem.remove();\n        elem = div.getElementsByClassName(removingClass)[0];\n    }\n};\n\nvar Sliderm2createScale = function (div, line, intervals, pointHeight, lineHeight, tickVertical, colorScale) {\n    Sliderm2ClassRemove(div, 'sliderm2scale');\n    var scaleDiv = document.createElement(\"div\");\n    scaleDiv.className = \"sliderm2scale\";\n    scaleDiv.style.position = 'absolute';\n    scaleDiv.style.display = 'flex';\n    scaleDiv.style.left = -pointHeight / 2 + 'px';\n    scaleDiv.style.fontSize = pointHeight * 3 / 5 + 'px';\n    scaleDiv.style.justifyContent = 'space-between';\n    scaleDiv.style.top = pointHeight / 2 + lineHeight / 2 + 5 + 'px';\n    scaleDiv.style.color = colorScale;\n    div.appendChild(scaleDiv);\n    scaleDiv.style.width = 'calc(100% + ' + pointHeight + 'px)';\n    var digit;\n    for (var i = 0; i <= intervals; i++) {\n        digit = document.createElement('div');\n        digit.innerHTML = Math.round(+line.min + line.range * i / intervals);\n        if (tickVertical) digit.style.transform = 'rotate(90deg)';\n        scaleDiv.appendChild(digit);\n    }\n    div.style.height = digit.offsetHeight + pointHeight / 2 + lineHeight / 2 + 5 + 'px';\n    return scaleDiv;\n};\n\nvar chooseColor2color = function (div) {\n    if (div) {\n        var sliders = div.getElementsByClassName('sliderm2');\n        var red = sliders[0].getAttribute('data-value2');\n        var green = sliders[1].getAttribute('data-value2');\n        var blue = sliders[2].getAttribute('data-value2');\n        var opacity = sliders[3].getAttribute('data-value2') / 255;\n        //red, green, blue, opacity\n        return `rgba(${red}, ${green}, ${blue}, ${opacity})`;\n    }\n    return \"gray\";\n};\n\n//Controller\nvar elems2 = document.getElementsByClassName(classSliderm2);\n[].forEach.call(elems2, function (element) {\n    var sliderm2body = document.createElement(\"div\");\n    sliderm2body.className = \"sliderm2body\";\n    element.appendChild(sliderm2body);\n    // var sliderm2body = element.querySelector('.sliderm2body');\n    var tickHint = element.getAttribute('data-hint') == 'active';\n    var tickScale = element.getAttribute('data-scale') == 'active';\n    var tickInterval = element.getAttribute('data-interval') == 'active';\n    var tickVertical = element.getAttribute('data-vertical') == 'active';\n    var slidermVerticalSize = element.getAttribute('data-verticalSize');\n    var slidermValue2 = element.getAttribute('data-value2');\n    var slidermValue1 = element.getAttribute('data-value1');\n    var slidermMin = element.getAttribute('data-min');\n    var slidermMax = element.getAttribute('data-max');\n    var pointHeight = element.getAttribute('data-pointSize');\n    var lineHeight = element.getAttribute('data-lineHeight');\n    var step = element.getAttribute('data-step');\n    var intervals = element.getAttribute('data-intervals');\n    var colorLine = element.getAttribute('data-colorLine');\n    var colorPoint = element.getAttribute('data-colorPoint');\n    var colorScale = element.getAttribute('data-colorScale');\n    var colorText = element.getAttribute('data-colorText');\n\n    var getSliderm2Attributes = function () {\n        tickHint = element.getAttribute('data-hint') == 'active';\n        tickScale = element.getAttribute('data-scale') == 'active';\n        tickInterval = element.getAttribute('data-interval') == 'active';\n        tickVertical = element.getAttribute('data-vertical') == 'active';\n        slidermVerticalSize = element.getAttribute('data-verticalSize');\n        slidermValue2 = element.getAttribute('data-value2');\n        slidermValue1 = element.getAttribute('data-value1');\n        slidermMin = element.getAttribute('data-min');\n        slidermMax = element.getAttribute('data-max');\n        pointHeight = element.getAttribute('data-pointSize');\n        lineHeight = element.getAttribute('data-lineHeight');\n        step = element.getAttribute('data-step');\n        intervals = element.getAttribute('data-intervals');\n        colorLine = element.getAttribute('data-colorLine');\n        colorPoint = element.getAttribute('data-colorPoint');\n        colorScale = element.getAttribute('data-colorScale');\n        colorText = element.getAttribute('data-colorText');\n    };\n\n    var sliderm2pageContent = element.parentElement.parentElement;\n    var inputTickHint = sliderm2pageContent.getElementsByClassName('tick-hint')[0];\n    var inputTickScale = sliderm2pageContent.getElementsByClassName('tick-scale')[0];\n    var inputTickInterval = sliderm2pageContent.getElementsByClassName('tick-interval')[0];\n    var inputTickVertical = sliderm2pageContent.getElementsByClassName('tick-vertical')[0];\n    var inputSlidermVerticalSize = sliderm2pageContent.getElementsByClassName('sliderm-vertical-size')[0];\n    var inputSlidermValue2 = sliderm2pageContent.getElementsByClassName('sliderm-value2')[0];\n    var inputSlidermValue1 = sliderm2pageContent.getElementsByClassName('sliderm-value1')[0];\n    var inputSlidermMin = sliderm2pageContent.getElementsByClassName('sliderm-min')[0];\n    var inputSlidermMax = sliderm2pageContent.getElementsByClassName('sliderm-max')[0];\n    var inputSlidermStep = sliderm2pageContent.getElementsByClassName('sliderm-step')[0];\n    var inputSlidermIntervals = sliderm2pageContent.getElementsByClassName('sliderm-intervals')[0];\n    var inputSlidermResult = sliderm2pageContent.getElementsByClassName('result')[0];\n\n    var line = new Sliderm2Line(slidermMin, slidermMax);\n    var range = new Sliderm2Range(slidermValue1, slidermValue2, line);\n\n    var drawLine;\n    var drawRange;\n    var drawPoints;\n    var drawScale;\n\n    var chooseColorLine;\n    var chooseColorPoint;\n    var chooseColorScale;\n    var chooseColorText;\n\n    var inputs = element.parentElement.parentElement.querySelector('.inputs');\n\n    if (inputs) {\n\n        if (inputs.getElementsByClassName('choose-color').length == 4) {\n            chooseColorLine = inputs.getElementsByClassName('choose-color')[0];\n            chooseColorPoint = inputs.getElementsByClassName('choose-color')[1];\n            chooseColorScale = inputs.getElementsByClassName('choose-color')[2];\n            chooseColorText = inputs.getElementsByClassName('choose-color')[3];\n        }\n\n        var getInputs = function () {\n            tickHint = inputTickHint.classList.contains('active');\n            tickScale = inputTickScale.classList.contains('active');\n            tickInterval = inputTickInterval.classList.contains('active');\n            tickVertical = inputTickVertical.classList.contains('active');\n            slidermVerticalSize = inputSlidermVerticalSize.value || 250;\n            slidermValue2 = inputSlidermValue2.value;\n            if (inputSlidermValue1.value) slidermValue1 = inputSlidermValue1.value;\n            slidermMin = inputSlidermMin.value;\n            slidermMax = inputSlidermMax.value;\n            step = inputSlidermStep.value;\n            intervals = inputSlidermIntervals.value;\n\n            line = new Sliderm2Line(slidermMin, slidermMax);\n            range = new Sliderm2Range(slidermValue1, slidermValue2, line);\n        };\n\n        var setInputs = function () {\n            if (tickInterval) inputSlidermValue1.value = Math.round(range.value1 * 100) / 100;\n            inputSlidermValue2.value = Math.round(range.value2 * 100) / 100;\n            inputSlidermMin.value = line.min;\n            inputSlidermMax.value = line.max;\n            inputSlidermStep.value = step;\n            inputSlidermIntervals.value = intervals;\n            inputSlidermVerticalSize.value = slidermVerticalSize;\n            if (tickHint) inputTickHint.classList.add('active');\n            if (tickScale) inputTickScale.classList.add('active');\n            if (tickInterval) inputTickInterval.classList.add('active');\n            if (tickVertical) inputTickVertical.classList.add('active');\n        };\n\n        inputs.addEventListener('change', function () {\n            getInputs();\n            draw();\n        });\n\n        inputs.addEventListener('click', function () {\n            getInputs();\n            if (tickInterval) range.value1 = range.value1 < +range.value2 ? range.value1 : range.value2;\n            draw();\n        });\n    }\n\n    sliderm2body.oncontextmenu = function () {\n        return false;\n    };\n\n    sliderm2body.ondragstart = function () {\n        return false;\n    };\n\n    function setDivSliderm2() {\n        if (tickHint) element.setAttribute('data-hint', 'active');else element.setAttribute('data-hint', '');\n        if (tickScale) element.setAttribute('data-scale', 'active');else element.setAttribute('data-scale', '');\n        if (tickInterval) element.setAttribute('data-interval', 'active');else element.setAttribute('data-interval', '');\n        if (tickVertical) element.setAttribute('data-vertical', 'active');else element.setAttribute('data-vertical', '');\n        element.setAttribute('data-verticalSize', slidermVerticalSize);\n        element.setAttribute('data-value2', range.value2);\n        if (slidermValue1) element.setAttribute('data-value1', range.value1);\n        element.setAttribute('data-min', line.min);\n        element.setAttribute('data-max', line.max);\n        element.setAttribute('data-pointSize', pointHeight);\n        element.setAttribute('data-lineHeight', lineHeight);\n        element.setAttribute('data-step', step);\n        element.setAttribute('data-intervals', intervals);\n\n        getSliderm2Attributes();\n    }\n\n    if (chooseColorLine) {\n        chooseColorLine.parentElement.addEventListener('mousedown', function () {\n            setResult();\n        });\n        chooseColorLine.parentElement.addEventListener('mousemove', function () {\n            setResult();\n        });\n    }\n\n    var setColors = function () {\n        drawLine.style.backgroundColor = chooseColor2color(chooseColorLine);\n        drawRange.style.backgroundColor = chooseColor2color(chooseColorPoint);\n        drawPoints[0].style.backgroundColor = chooseColor2color(chooseColorPoint);\n        if (drawPoints[1]) drawPoints[1].style.backgroundColor = chooseColor2color(chooseColorPoint);\n        if (tickHint) {\n            drawPoints[0].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);\n            drawPoints[0].drawHint.style.color = chooseColor2color(chooseColorText);\n        }\n        if (tickHint && drawPoints[1]) {\n            drawPoints[1].drawHint.style.backgroundColor = chooseColor2color(chooseColorPoint);\n            drawPoints[1].drawHint.style.color = chooseColor2color(chooseColorText);\n        }\n        if (tickScale) drawScale.style.color = chooseColor2color(chooseColorScale);\n    };\n\n    var setResult = function () {\n        element.setAttribute('data-colorLine', chooseColor2color(chooseColorLine));\n        element.setAttribute('data-colorPoint', chooseColor2color(chooseColorPoint));\n        element.setAttribute('data-colorScale', chooseColor2color(chooseColorScale));\n        element.setAttribute('data-colorText', chooseColor2color(chooseColorText));\n        setColors();\n        inputSlidermResult.value = `<div class=\"sliderm2\" data-min=\"${slidermMin}\" data-max=\"${slidermMax}\" data-value1=\"${range.value1}\" data-value2=\"${range.value2}\" data-step=\"${step}\" data-intervals=\"${intervals}\" data-hint=\"${tickHint ? \"active\" : \"\"}\" data-scale=\"${tickScale ? \"active\" : \"\"}\" data-interval=\"${tickInterval ? \"active\" : \"\"}\" data-vertical=\"${tickVertical ? \"active\" : \"\"}\" data-verticalSize=\"${slidermVerticalSize}\" data-lineHeight=\"15\" data-pointSize=\"30\" data-colorLine=\"${chooseColor2color(chooseColorLine)}\" data-colorPoint=\"${chooseColor2color(chooseColorPoint)}\" data-colorScale=\"${chooseColor2color(chooseColorScale)}\" data-colorText=\"${chooseColor2color(chooseColorText)}\"></div><script src=\"sliderm2.js\"></script>`;\n    };\n\n    var draw = function () {\n        var points = checkRange();\n        if (inputs) setInputs();\n        //Renew sliderm2 in dom\n        setDivSliderm2();\n        drawLine = new Sliderm2DrawLine(element, pointHeight, lineHeight, tickVertical, slidermVerticalSize, colorLine);\n        drawRange = new Sliderm2DrawRange(drawLine, range, colorPoint);\n        drawPoints = new Sliderm2DrawPoints(drawLine, points, pointHeight, tickHint, tickVertical, colorPoint, colorText);\n        if (tickScale) drawScale = new Sliderm2createScale(sliderm2body, line, intervals, pointHeight, lineHeight, tickVertical, colorScale);else Sliderm2ClassRemove(sliderm2body, 'sliderm2scale');\n        if (chooseColorLine) setResult();\n    };\n\n    var checkRange = function () {\n        if (+range.value2 > +line.max) range.value2 = line.max;\n        if (+range.value2 < +line.min) range.value2 = line.min;\n        if (+range.value1 < +line.min) range.value1 = line.min;\n        var points = [];\n        if (tickInterval) {\n            range = new Sliderm2Range(range.value1, range.value2, line);\n            points = [range.point1, range.point2];\n        } else {\n            range = new Sliderm2Range(line.min, range.value2, line);\n            points = [range.point2];\n        }\n        return points;\n    };\n\n    sliderm2body.addEventListener('mousedown', function (e) {\n        drawLine = e.currentTarget.firstChild;\n        if (tickInterval && getProcent(e) < range.value2 - line.max * pointHeight / drawLine.clientWidth / 2) {\n            range.value1 = getProcent(e);\n            if (+range.value1 >= +range.value2) range.value1 = range.value2;\n            draw();\n            document.onmousemove = function (e) {\n                range.value1 = getProcent(e);\n                if (+range.value1 >= +range.value2) range.value1 = range.value2;\n                draw();\n            };\n        } else {\n            range.value2 = getProcent(e);\n            if (+range.value2 <= +range.value1 && tickInterval) range.value2 = range.value1;\n            draw();\n            document.onmousemove = function (e) {\n                range.value2 = getProcent(e);\n                if (+range.value2 <= +range.value1 && tickInterval) range.value2 = range.value1;\n                draw();\n            };\n        }\n        document.onmouseup = function () {\n            document.onmousemove = document.onmouseup = null;\n        };\n        return false; // disable selection start (cursor change)\n    });\n\n    function getProcent(e) {\n        var lineCoords = getCoords(drawLine);\n        if (tickVertical) return step * Math.round((+line.min + (lineCoords.top + drawLine.clientWidth - e.pageY) / drawLine.clientWidth * line.range) / step);else return step * Math.round((+line.min + (e.pageX - lineCoords.left) / drawLine.clientWidth * line.range) / step);\n    }\n\n    function getCoords(elem) {\n        var box = elem.getBoundingClientRect();\n        return {\n            top: box.top + pageYOffset,\n            left: box.left + pageXOffset\n        };\n    }\n\n    draw();\n\n    setTimeout(function () {\n        draw();\n    }, 1000);\n});\n\n//# sourceURL=webpack:///./src/sliderm2/sliderm2.js?");

/***/ })

/******/ });