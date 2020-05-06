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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pair-card/pair-card.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pair-card/pair-card.ts":
/*!************************************!*\
  !*** ./src/pair-card/pair-card.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var pair = {\n    horizontal: 4,\n    vertical: 3,\n    colors: ['red', 'red', 'orange', 'orange', 'green', 'green', 'yellow', 'yellow', 'white', 'white', 'black', 'black']\n  };\n  var colorCandidate = pair.colors.slice();\n  var color = [];\n  var clickFlag = true;\n  var clickCard = [];\n  var completeCard = [];\n  var startTime = new Date().getTime();\n\n  function shuffle() {\n    for (var i = 0; colorCandidate.length > 0; ++i) {\n      color = color.concat(colorCandidate.splice(Math.floor(Math.random() * colorCandidate.length), 1));\n    }\n  }\n\n  function setCard(horizontal, vertical) {\n    clickFlag = false;\n\n    for (var i = 0; i < horizontal * vertical; ++i) {\n      var card = document.createElement('div');\n      card.className = 'card';\n      var cardInner = document.createElement('div');\n      cardInner.className = 'card-inner';\n      var cardFront = document.createElement('div');\n      cardFront.className = 'card-front';\n      var cardBack = document.createElement('div');\n      cardBack.className = 'card-back';\n      cardBack.style.backgroundColor = color[i];\n      cardInner.appendChild(cardFront);\n      cardInner.appendChild(cardBack);\n      card.appendChild(cardInner);\n      card.addEventListener('click', function () {\n        console.log(this);\n\n        if (clickFlag && !completeCard.includes(this)) {\n          console.log('what');\n          this.classList.toggle('flipped');\n          clickCard.push(this);\n\n          if (clickCard.length === 2) {\n            var firstBackground = clickCard[0].querySelector('.card-back').style.backgroundColor;\n            var secondBackground = clickCard[1].querySelector('.card-back').style.backgroundColor;\n\n            if (firstBackground === secondBackground) {\n              completeCard.push(clickCard[0]);\n              completeCard.push(clickCard[1]);\n              clickCard = [];\n\n              if (completeCard.length === horizontal * vertical) {\n                var endTime = new Date().getTime();\n                alert(\"\\uCD95\\uD558\\uD569\\uB2C8\\uB2E4 \" + (endTime - startTime) / 1000 + \"\\uCD08 \\uAC78\\uB838\\uC2B5\\uB2C8\\uB2E4\");\n                document.querySelector('.card--wrap').innerHTML = '';\n                colorCandidate = color.slice();\n                color = [];\n                completeCard = [];\n                startTime = null;\n                shuffle();\n                setCard(horizontal, vertical);\n              }\n            } else {\n              clickFlag = false;\n              setTimeout(function () {\n                clickCard[0].classList.remove('flipped');\n                clickCard[1].classList.remove('flipped');\n                clickFlag = true;\n                clickCard = [];\n              }, 1000);\n            }\n          }\n        }\n      });\n      document.querySelector('.content.pair .card--wrap').appendChild(card);\n    }\n\n    document.querySelectorAll('.pair .card').forEach(function (item, index) {\n      setTimeout(function () {\n        item.classList.add('flipped');\n      }, 1000 + 100 * index);\n    });\n    setTimeout(function () {\n      document.querySelectorAll('.pair .card').forEach(function (item, index) {\n        item.classList.remove('flipped');\n      });\n    }, 5000);\n    clickFlag = true;\n  }\n\n  var reGameButton = document.querySelector('.content.pair button');\n  reGameButton.addEventListener('click', function () {\n    setCard(pair.horizontal, pair.vertical);\n  });\n  shuffle();\n  setCard(pair.horizontal, pair.vertical);\n})();\n\n//# sourceURL=webpack:///./src/pair-card/pair-card.ts?");

/***/ })

/******/ });