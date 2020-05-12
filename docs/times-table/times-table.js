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

/***/ "./src/common.scss":
/*!*************************!*\
  !*** ./src/common.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/common.scss?");

/***/ }),

/***/ "./src/nomalize.scss":
/*!***************************!*\
  !*** ./src/nomalize.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/nomalize.scss?");

/***/ }),

/***/ "./src/times-table/times-table.scss":
/*!******************************************!*\
  !*** ./src/times-table/times-table.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/times-table/times-table.scss?");

/***/ }),

/***/ "./src/times-table/times-table.ts":
/*!****************************************!*\
  !*** ./src/times-table/times-table.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nexports.__esModule = true;\n\n__webpack_require__(/*! ../common.scss */ \"./src/common.scss\");\n\n__webpack_require__(/*! ../nomalize.scss */ \"./src/nomalize.scss\");\n\n__webpack_require__(/*! ./times-table.scss */ \"./src/times-table/times-table.scss\");\n\nvar step1Element = document.querySelector(\".step.step1\");\nvar step2Element = document.querySelector(\".step.step2\");\nvar step3Element = document.querySelector(\".step.step3\");\nvar prevStepButton = document.querySelector(\".button-prev-step\");\nvar nextStepButton = document.querySelector(\".button-next-step\");\nvar playGround = document.querySelector(\".play-game\");\nvar selectedDifficulty = playGround.querySelector(\".selectedDifficulty span\");\nvar selectedType = playGround.querySelector(\".selectedType span\");\nvar questionElement = playGround.querySelector(\".play-game .question\");\nvar formElement = playGround.querySelector(\"form\");\nvar resultElement = playGround.querySelector(\".result\");\nvar answerTypeForm = formElement.querySelector(\".answer\");\nvar multipleTypeForm = formElement.querySelector(\".multiple\");\nvar submitButtonElment = formElement.querySelector(\".multiple\");\nvar currentStep = 1;\nvar currentOptions = {\n  difficulty: \"beginner\",\n  type: \"answer\"\n};\nvar numberOne, numberTwo, options, result;\nprevStepButton.addEventListener(\"click\", function () {\n  switch (currentStep) {\n    case 2:\n      currentStep = 1;\n      step1Element.hidden = false;\n      step2Element.hidden = true;\n      prevStepButton.disabled = true;\n      nextStepButton.textContent = \"다음\";\n      break;\n\n    case 3:\n      currentStep = 2;\n      step2Element.hidden = false;\n      step3Element.hidden = true;\n      nextStepButton.disabled = false;\n      formElement.removeEventListener(\"submit\", submitAction);\n      break;\n  }\n});\nnextStepButton.addEventListener(\"click\", function () {\n  switch (currentStep) {\n    case 1:\n      currentStep = 2;\n      step1Element.hidden = true;\n      step2Element.hidden = false;\n      prevStepButton.disabled = false;\n      nextStepButton.textContent = \"시작\";\n      break;\n\n    case 2:\n      currentStep = 3;\n      step2Element.hidden = true;\n      step3Element.hidden = false;\n      nextStepButton.disabled = true;\n      currentOptions = checkStepOptions();\n      startGame();\n      formElement.addEventListener(\"submit\", submitAction);\n      break;\n  }\n});\n\nvar setQuestion = function () {\n  numberOne = Math.ceil(Math.random() * 9);\n  numberTwo = Math.ceil(Math.random() * 9);\n  result = numberOne * numberTwo;\n  options = createOptions(result);\n  currentOptions.type === \"multiple\" ? options = createOptions(result) : options = [];\n  questionElement.textContent = numberOne + \" \\uACF1\\uD558\\uAE30 \" + numberTwo + \"\\uB294 ?\";\n};\n\nvar submitAction = function (event) {\n  var input;\n  event.preventDefault();\n\n  if (currentOptions.type === \"answer\") {\n    input = answerTypeForm.querySelector(\"input\");\n  } else {\n    input = multipleTypeForm.querySelector(\"input[type=radio]:checked\");\n  }\n\n  checkAnswer(input);\n};\n\nvar startGame = function () {\n  selectedDifficulty.textContent = currentOptions.difficulty;\n  selectedType.textContent = currentOptions.type;\n\n  if (currentOptions.type === \"answer\") {\n    formElement.classList.remove(\"type-multiple\");\n    formElement.classList.add(\"type-answer\");\n  } else {\n    formElement.classList.remove(\"type-answer\");\n    formElement.classList.add(\"type-multiple\");\n  }\n\n  setQuestion();\n};\n\nvar checkAnswer = function (input) {\n  if (result === Number(input.value)) {\n    resultElement.textContent = \"딩동댕\";\n    resetInput(input);\n    setQuestion();\n  } else {\n    resultElement.textContent = \"땡\";\n    resetInput(input);\n  }\n};\n\nvar resetInput = function (input) {\n  if (currentOptions.type === \"answer\") {\n    input.value = \"\";\n    input.focus();\n  } else {\n    input.checked = false;\n  }\n};\n\nvar checkStepOptions = function () {\n  var difficulty = document.querySelector(\"input[name=difficulty]:checked\").value;\n  var type = document.querySelector(\"input[name=type]:checked\").value;\n  return {\n    difficulty: difficulty,\n    type: type\n  };\n};\n\nvar createOptions = function (result) {\n  var optionsCandidate = [];\n  var order = [0, 1, 2, 3, 4];\n  order.reduce(function (accumulator, current) {\n    optionsCandidate.push(accumulator + current);\n    return accumulator + current;\n  }, result);\n  var options = [];\n\n  for (var i = 0; optionsCandidate.length > 0; i++) {\n    options = options.concat(optionsCandidate.splice(Math.floor(Math.random() * optionsCandidate.length), 1));\n  }\n\n  var optionsElements = multipleTypeForm.querySelectorAll(\"li\");\n  optionsElements.forEach(function (optionElement, index) {\n    var labelElement = optionElement.querySelector(\"label\");\n    var inputElement = optionElement.querySelector(\"input\");\n    labelElement.textContent = String(options[index]);\n    inputElement.value = String(options[index]);\n  });\n  return options;\n};\n\n//# sourceURL=webpack:///./src/times-table/times-table.ts?");

/***/ })

/******/ });