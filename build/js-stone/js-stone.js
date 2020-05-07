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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js-stone/js-stone.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js-stone/js-stone.ts":
/*!**********************************!*\
  !*** ./src/js-stone/js-stone.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n;\n\n(function () {\n  var _player1 = document.querySelector('#player1');\n\n  var _player2 = document.querySelector('#player2');\n\n  var opponent = {\n    hero: _player1.querySelector('.card.type_hero'),\n    deck: _player1.querySelector('.deck'),\n    field: _player1.querySelector('.normal-card--wrap'),\n    cost: _player1.querySelector('.cost_remain'),\n    // hero: document.getElementById('rival-hero') as HTMLDivElement,\n    // deck: document.getElementById('rival-deck') as HTMLDivElement,\n    // field: document.getElementById('rival-cards') as HTMLDivElement,\n    // cost: document.getElementById('rival-cost') as HTMLDivElement,\n    deckData: [],\n    heroData: null,\n    fieldData: [],\n    chosenCard: null,\n    chosenCardData: null\n  };\n  var me = {\n    hero: _player2.querySelector('.card.type_hero'),\n    deck: _player2.querySelector('.deck'),\n    field: _player2.querySelector('.normal-card--wrap'),\n    cost: _player2.querySelector('.cost_remain'),\n    // hero: document.getElementById('my-hero') as HTMLDivElement,\n    // deck: document.getElementById('my-deck') as HTMLDivElement,\n    // field: document.getElementById('my-cards') as HTMLDivElement,\n    // cost: document.getElementById('my-cost') as HTMLDivElement,\n    deckData: [],\n    heroData: null,\n    fieldData: [],\n    chosenCard: null,\n    chosenCardData: null\n  };\n\n  var Hero =\n  /** @class */\n  function () {\n    function Hero(mine) {\n      this.att = Math.ceil(Math.random() * 2);\n      this.hp = Math.ceil(Math.random() * 5) + 25;\n      this.mine = mine;\n      this.field = true;\n    }\n\n    return Hero;\n  }();\n\n  var Sub =\n  /** @class */\n  function () {\n    function Sub(mine) {\n      this.att = Math.ceil(Math.random() * 5);\n      this.hp = Math.ceil(Math.random() * 5);\n      this.cost = Math.floor((this.att + this.hp) / 2);\n      this.mine = mine;\n      this.field = false;\n    }\n\n    return Sub;\n  }();\n\n  var isSub = function (data) {\n    if (data.cost) {\n      return true;\n    }\n\n    return false;\n  };\n\n  var turnButton = document.querySelector('.turn-over');\n  var turn = true; // true면 내턴, false면 상대 턴\n\n  function initiate() {\n    ;\n    [opponent, me].forEach(function (item) {\n      item.deckData = [];\n      item.heroData = null;\n      item.fieldData = [];\n      item.chosenCard = null;\n      item.chosenCardData = null;\n    });\n    createDeck({\n      mine: false,\n      count: 5\n    }); // 상대 덱 생성\n\n    createDeck({\n      mine: true,\n      count: 5\n    }); // 내 덱 생성\n\n    createHero({\n      mine: false\n    }); // 상대 영웅 그리기\n\n    createHero({\n      mine: true\n    }); // 내 영웅 그리기\n\n    redrawScreen({\n      mine: false\n    }); // 상대화면\n\n    redrawScreen({\n      mine: true\n    }); // 내화면\n  }\n\n  initiate(); // 진입점\n\n  function createDeck(_a) {\n    var mine = _a.mine,\n        count = _a.count;\n    var player = mine ? me : opponent;\n\n    for (var i = 0; i < count; i++) {\n      player.deckData.push(new Sub(mine));\n    }\n\n    redrawDeck(player);\n  }\n\n  function createHero(_a) {\n    var mine = _a.mine;\n    var player = mine ? me : opponent;\n    player.heroData = new Hero(mine);\n    connectCardDOM(player.heroData, player.hero, true);\n  }\n\n  function redrawScreen(_a) {\n    var mine = _a.mine;\n    var player = mine ? me : opponent;\n    redrawField(player);\n    redrawDeck(player);\n    redrawHero(player);\n  }\n\n  function redrawField(target) {\n    target.field.innerHTML = '';\n    target.fieldData.forEach(function (data) {\n      connectCardDOM(data, target.field);\n    });\n  }\n\n  function redrawDeck(target) {\n    target.deck.innerHTML = '';\n    target.deckData.forEach(function (data) {\n      connectCardDOM(data, target.deck);\n    });\n  }\n\n  function redrawHero(target) {\n    if (!target.heroData) {\n      console.error(target);\n      throw new Error('heroData가 없습니다');\n    }\n\n    target.hero.innerHTML = '';\n    connectCardDOM(target.heroData, target.hero, true);\n  }\n\n  function connectCardDOM(data, DOM, hero) {\n    var cardEl = document.querySelector('.card-hidden .card').cloneNode(true);\n    cardEl.querySelector('.card_att').textContent = String(data.att);\n    cardEl.querySelector('.card_hp').textContent = String(data.hp);\n\n    if (hero) {\n      ;\n      cardEl.querySelector('.card_cost').style.display = 'none';\n      var name_1 = document.createElement('div');\n      name_1.textContent = '영웅';\n      cardEl.appendChild(name_1);\n    } else {\n      cardEl.querySelector('.card_cost').textContent = String(data.cost);\n    }\n\n    cardEl.addEventListener('click', function () {\n      if (isSub(data) && data.mine === turn && !data.field) {\n        // 자신의 덱에 있는 쫄병이면\n        if (!deckToField({\n          data: data\n        })) {\n          // 쫄병을 하나 뽑았으면\n          createDeck({\n            mine: turn,\n            count: 1\n          });\n        }\n      }\n\n      turnAction({\n        cardEl: cardEl,\n        data: data\n      });\n    });\n    DOM.appendChild(cardEl);\n  }\n\n  function deckToField(_a) {\n    var data = _a.data;\n    var target = turn ? me : opponent; // 조건 ? 참 : 거짓;\n\n    var currentCost = Number(target.cost.textContent);\n\n    if (currentCost < data.cost) {\n      // 코스트가 모자르면 종료\n      alert('코스트가 모자릅니다.');\n      return true;\n    }\n\n    data.field = true;\n    var idx = target.deckData.indexOf(data);\n    target.deckData.splice(idx, 1);\n    target.fieldData.push(data);\n    redrawField(target);\n    redrawDeck(target);\n    target.cost.textContent = String(currentCost - data.cost); // 남은 코스트 줄이기\n\n    return false;\n  }\n\n  function turnAction(_a) {\n    var cardEl = _a.cardEl,\n        data = _a.data;\n    var team = turn ? me : opponent; // 지금 턴의 편\n\n    var enemy = turn ? opponent : me; // 그 상대 편\n\n    if (cardEl.classList.contains('card-turnover')) {\n      // 턴이 끝난 카드면 아무일도 일어나지 않음\n      return;\n    }\n\n    var enemyCard = turn ? !data.mine : data.mine;\n\n    if (enemyCard && team.chosenCardData) {\n      // 선택한 카드가 있고 적군 카드를 클릭한 경우 공격 수행\n      data.hp = data.hp - team.chosenCardData.att;\n\n      if (data.hp <= 0) {\n        // 카드가 죽었을 때\n        if (isSub(data)) {\n          // 쫄병이 죽었을 때\n          var index = enemy.fieldData.indexOf(data);\n          enemy.fieldData.splice(index, 1);\n        } else {\n          // 영웅이 죽었을 때\n          alert('승리하셨습니다!');\n          initiate();\n        }\n      }\n\n      redrawScreen({\n        mine: !turn\n      }); // 상대 화면 다시 그리기\n\n      if (team.chosenCard) {\n        // 클릭 해제 후 카드 행동 종료\n        team.chosenCard.classList.remove('card-selected');\n        team.chosenCard.classList.add('card-turnover');\n      }\n\n      team.chosenCard = null;\n      team.chosenCardData = null;\n      return;\n    } else if (enemyCard) {\n      // 상대 카드면\n      return;\n    }\n\n    if (data.field) {\n      // 카드가 필드에 있으면\n      //  영웅 부모와 필드카드의 부모가 다르기때문에 document에서 모든 .card를 검색한다\n      // 카드.parentNode.querySelectorAll('.card').forEach(function (card) {\n      document.querySelectorAll('.card').forEach(function (card) {\n        card.classList.remove('card-selected');\n      });\n      console.log(cardEl);\n      cardEl.classList.add('card-selected');\n      team.chosenCard = cardEl;\n      team.chosenCardData = data;\n    }\n  }\n\n  turnButton.addEventListener('click', function () {\n    var target = turn ? me : opponent;\n\n    _player1.classList.toggle('turn');\n\n    _player2.classList.toggle('turn'); // document.getElementById('rival')!.classList.toggle('turn')\n    // document.getElementById('my')!.classList.toggle('turn')\n\n\n    redrawField(target);\n    redrawHero(target);\n    turn = !turn; // 턴을 넘기는 코드\n\n    if (turn) {\n      me.cost.textContent = '10';\n    } else {\n      opponent.cost.textContent = '10';\n    }\n  });\n})();\n\n//# sourceURL=webpack:///./src/js-stone/js-stone.ts?");

/***/ })

/******/ });