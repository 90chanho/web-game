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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/rps/rps.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/rps/rps.ts":
/*!************************!*\
  !*** ./src/rps/rps.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var imgCoords = '0';\n  var rsp = {\n    ROCK: '0',\n    SCISSORS: '-142px',\n    PAPER: '-284px'\n  };\n  var score = {\n    ROCK: 0,\n    SCISSORS: 1,\n    PAPER: -1\n  };\n\n  function computerChoice(imgCoords) {\n    return Object.keys(rsp).find(function (k) {\n      return rsp[k] === imgCoords;\n    });\n  }\n\n  var interval;\n\n  function intervalMaker() {\n    interval = setInterval(function () {\n      if (imgCoords === rsp.ROCK) {\n        imgCoords = rsp.SCISSORS;\n      } else if (imgCoords === rsp.SCISSORS) {\n        imgCoords = rsp.PAPER;\n      } else {\n        imgCoords = rsp.ROCK;\n      }\n\n      if (document.querySelector('#computer')) {\n        ;\n        document.querySelector('#computer').style.background = 'url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ' + imgCoords + ' 0';\n      }\n    }, 100);\n  }\n\n  intervalMaker();\n  document.querySelectorAll('.rock-paper-scissors .btn').forEach(function (btn) {\n    btn.addEventListener('click', function () {\n      clearInterval(interval);\n      setTimeout(intervalMaker, 1000);\n      var myChoice = this.textContent;\n      var myScore = score[myChoice];\n      var computerScore = score[computerChoice(imgCoords)];\n      var diff = myScore - computerScore;\n\n      if (diff === 0) {\n        console.log('비겻다');\n      } else if ([-1, 2].includes(diff)) {\n        console.log('이겼다');\n      } else {\n        console.log('졌다');\n      }\n    });\n  });\n})();\n\n//# sourceURL=webpack:///./src/rps/rps.ts?");

/***/ })

/******/ });