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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/number-baseball/number-baseball.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/number-baseball/number-baseball.ts":
/*!************************************************!*\
  !*** ./src/number-baseball/number-baseball.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var body = document.body;\n  var candidate;\n  var selectNumbers;\n  var strike;\n  var ball;\n  var contentBody = body.querySelector('.content.number-baseball');\n  var buttonSendNumber = contentBody.querySelector('.button.send-number');\n  var baseballGameResult = contentBody.querySelector('.result');\n\n  function chooseNumber() {\n    candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];\n    selectNumbers = [];\n    strike = 0;\n    ball = 0;\n\n    for (var i = 0; i < 4; i++) {\n      var item = candidate.splice(Math.floor(Math.random() * 9 - i), 1)[0];\n      selectNumbers.push(item);\n    }\n\n    console.log('정답kkkkkk =', selectNumbers);\n  }\n\n  chooseNumber();\n  buttonSendNumber.addEventListener('click', function (event) {\n    event.preventDefault();\n    var answer = document.querySelector('#inputNumber');\n\n    if (answer.value === selectNumbers.join('')) {\n      baseballGameResult.textContent = '정답';\n      chooseNumber();\n    } else {\n      strike = 0;\n      ball = 0;\n      var answerNumber = answer.value.split('');\n      console.log('answerNumber =', answerNumber);\n      console.log('answerNumber =', answerNumber[1]);\n      console.log('selectNumbers =', selectNumbers.join(''));\n\n      for (var i = 0; i < 4; i++) {\n        if (selectNumbers[i] === Number(answerNumber[i])) {\n          strike += 1;\n        } else if (selectNumbers.join('').indexOf(answerNumber[i]) > -1) {\n          ball += 1;\n        }\n      }\n\n      baseballGameResult.textContent = \"\\uC624\\uB2F5 \" + strike + \" Strike & \" + ball + \" Ball \\uC785\\uB2C8\\uB2E4.\";\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/number-baseball/number-baseball.ts?");

/***/ })

/******/ });