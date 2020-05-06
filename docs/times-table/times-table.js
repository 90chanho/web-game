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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/times-table/times-table.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/times-table/times-table.ts":
/*!****************************************!*\
  !*** ./src/times-table/times-table.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var numberOne = Math.ceil(Math.random() * 9);\n  var numberTwo = Math.ceil(Math.random() * 9);\n  var result = numberOne * numberTwo;\n\n  var _main = document.querySelector('.content.times-table');\n\n  var question = document.createElement('div');\n  question.textContent = numberOne + \" \\uACF1\\uD558\\uAE30 \" + numberTwo + \"\\uB294??\";\n\n  _main.append(question);\n\n  var form = document.createElement('form');\n\n  _main.append(form);\n\n  var input = document.createElement('input');\n  input.type = 'number';\n  form.append(input);\n  var button = document.createElement('button');\n  button.textContent = '입력';\n  form.append(button);\n  var resultDiv = document.createElement('div');\n\n  _main.append(resultDiv);\n\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n\n    if (result === Number(input.value)) {\n      numberOne = Math.ceil(Math.random() * 9);\n      numberTwo = Math.ceil(Math.random() * 9);\n      result = numberOne * numberTwo;\n      question.textContent = numberOne + \" \\uACF1\\uD558\\uAE30 \" + numberTwo + \"\\uB294??\";\n      resultDiv.textContent = '딩동댕';\n      input.value = '';\n      input.focus();\n    } else {\n      resultDiv.textContent = '땡';\n      input.value = '';\n      input.focus();\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/times-table/times-table.ts?");

/***/ })

/******/ });