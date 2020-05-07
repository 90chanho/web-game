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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/tic-tac-toe/tic-tac-toe.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/tic-tac-toe/tic-tac-toe.ts":
/*!****************************************!*\
  !*** ./src/tic-tac-toe/tic-tac-toe.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var table = document.createElement('table');\n  var rows = [];\n  var cells = [];\n  var t3Turn = 'X';\n  var t3Result = document.createElement('div');\n  var count = 0;\n\n  function callback(event) {\n    var rowIndex = rows.indexOf(event.currentTarget.parentNode);\n    var cellIndex = cells[rowIndex].indexOf(event.currentTarget);\n    count++;\n\n    if (cells[rowIndex][cellIndex].textContent !== '') {\n      console.log('빈 칸이 아닙니다.');\n    } else {\n      cells[rowIndex][cellIndex].textContent = t3Turn;\n      var full = false;\n\n      if (cells[rowIndex][0].textContent === t3Turn && cells[rowIndex][1].textContent === t3Turn && cells[rowIndex][2].textContent === t3Turn) {\n        full = true;\n      }\n\n      if (cells[0][cellIndex].textContent === t3Turn && cells[1][cellIndex].textContent === t3Turn && cells[2][cellIndex].textContent === t3Turn) {\n        full = true;\n      }\n\n      if (cells[0][0].textContent === t3Turn && cells[1][1].textContent === t3Turn && cells[2][2].textContent === t3Turn) {\n        full = true;\n      }\n\n      if (cells[0][2].textContent === t3Turn && cells[1][1].textContent === t3Turn && cells[2][0].textContent === t3Turn) {\n        full = true;\n      }\n\n      if (full) {\n        t3Result.textContent = t3Turn + \"\\uB2D8\\uC774 \\uC2B9\\uB9AC!\";\n        t3Turn = 'X';\n        cells.forEach(function (row) {\n          row.forEach(function (cell) {\n            cell.textContent = '';\n          });\n        });\n      } else if (count === 9) {\n        t3Result.textContent = \"\\uBB34\\uC2B9\\uBD80!!\";\n        t3Turn = 'X';\n        cells.forEach(function (row) {\n          row.forEach(function (cell) {\n            cell.textContent = '';\n          });\n        });\n      } else {\n        t3Turn = t3Turn === 'O' ? 'X' : 'O';\n      }\n    }\n  }\n\n  for (var i = 1; i <= 3; i++) {\n    var row = document.createElement('tr');\n    rows.push(row);\n    cells.push([]);\n\n    for (var j = 1; j <= 3; j++) {\n      var cell = document.createElement('td');\n      cell.addEventListener('click', callback);\n      cells[i - 1].push(cell);\n      row.appendChild(cell);\n    }\n\n    table.appendChild(row);\n  }\n\n  var contentWrap = document.querySelector('.content.tic-tac-toe > div');\n  contentWrap.appendChild(table);\n  contentWrap.appendChild(t3Result);\n})();\n\n//# sourceURL=webpack:///./src/tic-tac-toe/tic-tac-toe.ts?");

/***/ })

/******/ });