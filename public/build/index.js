/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/hamburger.js":
/*!*****************************!*\
  !*** ./src/js/hamburger.js ***!
  \*****************************/
/***/ (function() {

eval("\n    // Navbar Toggle\n    document.addEventListener('DOMContentLoaded', function () {\n\n        // Get all \"navbar-burger\" elements\n        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);\n    \n        // Check if there are any navbar burgers\n        if ($navbarBurgers.length > 0) {\n    \n        // Add a click event on each of them\n        $navbarBurgers.forEach(function ($el) {\n            $el.addEventListener('click', function () {\n    \n            // Get the \"main-nav\" element\n            var $target = document.getElementById('main-nav');\n\n            // Toggle the class on \"main-nav\"\n            $target.classList.toggle('container-nav');\n    \n            });\n        });\n        }\n    \n    });\n\n//# sourceURL=webpack://test-project/./src/js/hamburger.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hamburger */ \"./src/js/hamburger.js\");\n/* harmony import */ var _hamburger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hamburger__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-bar */ \"./src/js/nav-bar.js\");\n/* harmony import */ var _nav_bar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nav_bar__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n//# sourceURL=webpack://test-project/./src/js/index.js?");

/***/ }),

/***/ "./src/js/nav-bar.js":
/*!***************************!*\
  !*** ./src/js/nav-bar.js ***!
  \***************************/
/***/ (function() {

eval("\n$('.sub-menu ul').hide();\n$(\".sub-menu a\").click(function () {\n    $(this).parent(\".sub-menu\").children(\"ul\").slideToggle(\"200\");\n    $(this).find(\"i.fa\").toggleClass(\"fa-angle-up fa-angle-down\");\n});\n\n//# sourceURL=webpack://test-project/./src/js/nav-bar.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;