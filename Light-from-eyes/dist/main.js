/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view/styles/index.scss */ \"./view/styles/index.scss\");\n\nvar burgerMenu = document.querySelector('.header__nav-mobile');\nvar burgerBtn = document.querySelector('.header__nav_mobile-menu');\nburgerBtn.addEventListener('click', function (evt) {\n  burgerBtn.classList.toggle('active');\n  burgerMenu.classList.toggle('active');\n});\nvar next = document.querySelectorAll('.intro__next');\nvar prev = document.querySelectorAll('.intro__prev');\nvar container = document.querySelectorAll('.intro__wrapper');\nvar dots = document.querySelectorAll('.dot');\nvar index = 0;\n\nvar slider = function slider() {\n  for (var i = 0; i < container.length; i++) {\n    // console.log(i)\n    container[i].classList.add('active');\n  }\n\n  container[index].classList.remove('active');\n\n  for (var _i = 0; _i < dots.length; _i++) {\n    if (_i === 0 || 3 || 0) {\n      dots[_i].classList.add('active');\n    }\n  }\n}; // dots.forEach((btn) => {\n//   btn.addEventListener('click', () => {\n//     btn.classList.add('active')\n//   })\n//   slider()\n// })\n// dots[i].className = dots[i].className.replace(\" active\", \"\");\n// dots[slideIndex-1].className += \" active\";\n\n\nnext.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    if (index + 1 === container.length) {\n      index = 0;\n    } else {\n      index++;\n    }\n\n    slider();\n  });\n});\nprev.forEach(function (btn) {\n  btn.addEventListener('click', function () {\n    if (index - 1 === -1) {\n      index = container.length - 1;\n    } else {\n      index--;\n    }\n\n    slider();\n  });\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./view/styles/index.scss":
/*!********************************!*\
  !*** ./view/styles/index.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./view/styles/index.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main.js");
/******/ 	
/******/ })()
;