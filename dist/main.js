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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ \"./src/toast.js\");\n/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal */ \"./src/modal.js\");\n\r\n\r\n// import { Modal, Toast } from 'super-popup';\r\n\r\nconst str40 = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fuga sapiente explicabo obcaecati quidem accusamus tempore, molestias recusandae nemo. Maxime, quod distinctio. Ullam commodi odit impedit, vel culpa beatae fugiat, nulla maiores ea reiciendis nisi dolorem quas autem quisquam quaerat.\";\r\nconst str10 = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, aliquid?';\r\nconst warning = 'Attention, may be something goes wrong!';\r\nconst error = 'Alarm! Alarm! Stack Overflow! Fix it right now!';\r\nconst success = 'All right, you\\'re fine fellow. Keep it up!';\r\nconst info = 'I just want to know that you are fine';\r\nconst test_callback = function(){\r\n    console.log('it works');\r\n}\r\n\r\ndocument.getElementById('1').addEventListener('click', () => {\r\n    new _toast__WEBPACK_IMPORTED_MODULE_0__[\"Toast\"](success, _toast__WEBPACK_IMPORTED_MODULE_0__[\"type\"].SUCCESS, test_callback);\r\n});\r\n\r\ndocument.getElementById('2').addEventListener('click', () => {\r\n    new _toast__WEBPACK_IMPORTED_MODULE_0__[\"Toast\"](error, _toast__WEBPACK_IMPORTED_MODULE_0__[\"type\"].ERROR);\r\n});\r\n\r\ndocument.getElementById('3').addEventListener('click', () => {\r\n    new _toast__WEBPACK_IMPORTED_MODULE_0__[\"Toast\"](warning, _toast__WEBPACK_IMPORTED_MODULE_0__[\"type\"].WARNING, test_callback);\r\n});\r\n\r\ndocument.getElementById('4').addEventListener('click', () => {\r\n    new _toast__WEBPACK_IMPORTED_MODULE_0__[\"Toast\"](info, _toast__WEBPACK_IMPORTED_MODULE_0__[\"type\"].WARNING);\r\n});\r\n\r\ndocument.getElementById('5').addEventListener('click', () => {\r\n    new _modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('close it', str40);\r\n});\r\n\r\ndocument.getElementById('6').addEventListener('click', () => {\r\n    new _modal__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('another modal', str10, test_callback);\r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modal.js":
/*!**********************!*\
  !*** ./src/modal.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Modal; });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/popup.js\");\n\r\n\r\nclass Modal extends _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor (title = 'Modal Window', message = 'Enter smth', callback) {\r\n        super()\r\n        this.title = title;\r\n        this.message = message;\r\n        this.callback = callback; \r\n\r\n        this.createModal();\r\n        this.render();\r\n    }\r\n\r\n    createModal () {\r\n        super.createPopup('modal__shadow');\r\n\r\n        const modalWindow = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'modal');\r\n        const modalHeader = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'modal__header');\r\n        const modalBody = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'modal__body');\r\n        const modalUI = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'modal__ui');\r\n\r\n        const modalH1 = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('h1', 'modal__header__title', this.title);\r\n        modalHeader.appendChild(modalH1);\r\n\r\n        const modalMessage = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'modal__message', this.message)\r\n        modalBody.appendChild(modalMessage);\r\n\r\n        const UIButton1 = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('button', ['modal__ui__button' ,'modal__ui__button--1'], 'Ok');\r\n        const UIButton2 = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('button', ['modal__ui__button', 'modal__ui__button--2'], 'Cancel');\r\n\r\n        modalUI.appendChild(UIButton1);\r\n        modalUI.appendChild(UIButton2);\r\n\r\n        modalWindow.appendChild(modalHeader);\r\n        modalWindow.appendChild(modalBody);\r\n        modalWindow.appendChild(modalUI);\r\n\r\n        super.addChild(modalWindow);\r\n\r\n        modalWindow.addEventListener('click', e => {\r\n            e.stopPropagation();    \r\n        });\r\n\r\n        super.subscribe(this.popup);\r\n        super.subscribe(UIButton2);\r\n    }\r\n\r\n}\r\n\n\n//# sourceURL=webpack:///./src/modal.js?");

/***/ }),

/***/ "./src/popup.js":
/*!**********************!*\
  !*** ./src/popup.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Popup; });\nclass Popup {\r\n    constructor() {\r\n        this.close = this.close.bind(this);\r\n    }\r\n\r\n    createPopup (className) {\r\n        this.popup = Popup.createNode('div', className);\r\n    }\r\n\r\n    addClass (className) {\r\n        this.popup.classList.add(className);\r\n    }\r\n    \r\n    addChild (...childs) {\r\n        childs.forEach(i => this.popup.appendChild(i));\r\n    }\r\n\r\n    render (parent = document.body) {\r\n        parent.appendChild(this.popup);\r\n    }\r\n\r\n    close () {\r\n        this.popup.classList.add('popup__hide');\r\n        setTimeout(() => {\r\n            this.popup.style.display = 'none';\r\n        }, 400);\r\n\r\n        this.callback();\r\n        this.unsubscribe();\r\n    }\r\n\r\n    subscribe (element) {\r\n        this.closeHandler = element;\r\n        this.closeHandler.addEventListener('click', this.close);\r\n    }\r\n\r\n    unsubscribe () {\r\n        this.closeHandler.removeEventListener('click', this.close);\r\n    }\r\n    \r\n    static createNode (tagName, classNames, text) {\r\n        const item = document.createElement(tagName);\r\n        \r\n        if (classNames instanceof Array) {\r\n            classNames.forEach(i => item.classList.add(i));\r\n        }\r\n        else {\r\n            item.classList.add(classNames);\r\n        }\r\n        \r\n        if (text) item.innerText = text;\r\n        \r\n        return item;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/popup.js?");

/***/ }),

/***/ "./src/toast.js":
/*!**********************!*\
  !*** ./src/toast.js ***!
  \**********************/
/*! exports provided: Toast, type */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Toast\", function() { return Toast; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"type\", function() { return type; });\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popup */ \"./src/popup.js\");\n\r\n\r\nconst type = {\r\n    SUCCESS: 'success',\r\n    ERROR: 'error',\r\n    WARNING: 'warning',\r\n    INFO: 'info'\r\n}\r\n\r\nclass Toast extends _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n    constructor (message, status, callback){\r\n        super();\r\n        this.message = message;\r\n        this.status = status;\r\n        this.callback = callback;\r\n\r\n        this.createToast();\r\n        this.render();\r\n        setTimeout(() => { this.close() }, 5000);\r\n    }\r\n\r\n    createToast () {\r\n        super.createPopup('toast');\r\n        super.addClass(`toast__status--${this.status}`);\r\n        // super.addClass('popup__show');\r\n        \r\n        const img = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', ['toast__img', `toast__img--${this.status}`]);\r\n\r\n        const message = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'toast__message');\r\n        const messageTitle = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'toast__message__title', this.status);\r\n        const messageText = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'toast__message__text', this.message);\r\n\r\n        message.appendChild(messageTitle);\r\n        message.appendChild(messageText);\r\n\r\n        const ui = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'toast__ui');\r\n        const uiClose = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'ui__cross');\r\n        ui.appendChild(uiClose);\r\n\r\n        super.addChild(img, message, ui);\r\n\r\n        super.subscribe(uiClose);\r\n    }\r\n\r\n    render () {\r\n        this.container = document.querySelector('.toast__space');\r\n\r\n        if(!this.container) {\r\n            this.container = _popup__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNode('div', 'toast__space');\r\n            document.body.appendChild(this.container); \r\n        }\r\n\r\n        super.render(this.container);\r\n    }\r\n\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/toast.js?");

/***/ })

/******/ });