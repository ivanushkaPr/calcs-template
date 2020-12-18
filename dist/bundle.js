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
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _templates_mainData_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/mainData.js */ "./src/templates/mainData.js");


/***/ }),

/***/ "./src/templates/basicSettings/initSettings.js":
/*!*****************************************************!*\
  !*** ./src/templates/basicSettings/initSettings.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationMessages */ "./src/templates/basicSettings/validationMessages.js");


/* harmony default export */ __webpack_exports__["default"] = ({
  /*params section*/
  validateMessages: _validationMessages__WEBPACK_IMPORTED_MODULE_0__["default"],
  activeElement: null,
  /*end params*/
  submit: function(event, elem) {
    console.log('submit', this.isValid());
    if(this.isValid()){
      let results = this.calculate({
        "tfArray": Array.from(this.getViewport().querySelectorAll("[data-required]")),
      });
      this.render({
        "textFieldsData": results,
      });
    }
    else{
      return;
    }
  },
  reset: function(event, elem) {
    console.log('reset', elem);
    //this.getForm().reset();
    Array.from(this.getViewport().querySelectorAll("[data-required]")).forEach( (domElem) => {
      domElem.dataset.required = 0;
      domElem.value = "";
    } );
    Array.from(this.getViewport().querySelectorAll(".invalidate")).forEach( (invalid) => {
      invalid.classList.remove("invalidate");
      if(invalid.tagName.toLowerCase() === "span") {invalid.remove();}
    } );
    this.getViewport().querySelector(".active-positive").classList.add("inactive");
    this.getViewport().querySelector(".helpinfo").classList.remove("nodisplay");
    this.getViewport().querySelector("p.info").classList.remove("nodisplay");
    if(this.getViewport().querySelector("div.calculated")) this.getViewport().querySelector("div.calculated").remove();

  },
  onFocus(event, elem){
    this.activeElement = elem;
  },
  onBlur(event, elem){
    this.activeElement = null;
  },
  /** Create fake input paste result text in it and copy to clipboard */
  copyToClipboard: function(event, elem){
    let inp = document.createElement('input');
    inp.type= "text";
    inp.value = elem.previousElementSibling.textContent;
    console.log(inp.value, elem, elem.previousElementSibling);
    inp.style.opacity = 0;
    this.getViewport().querySelector(".frame.active").insertAdjacentElement("beforeend", inp);
    inp.select();
    document.execCommand("copy");
    inp.remove();
  },
  checkFloatValue(elem) {
    const userInput = elem.value;
    if(!userInput.match(/^\d*[.,]?\d{0,2}$/)) {
      elem.value = userInput.slice(0, userInput.length - 1);
    }

    let value = (parseFloat(elem.value)).toString();
    let validateStatus = !!value && (/^\d{0,8}[.,]?\d{0,2}?$/).test(value);
    let validateMessage = !!value ? ( (/^\d{0,8}[.,]?\d{0,2}?$/).test(value) ? null : this.validateMessages.number ) : this.validateMessages.empty
    this.toggleValidateMessage(validateStatus, elem, validateMessage);
    if(validateStatus){
      elem.dataset.required = 1;
    }
    else {
      elem.dataset.required = 0;
    }
    this.checkAllFilledFields();
    return validateStatus;
  },
  toggleValidateMessage(validateStatus, elem, message){
    let fieldset = elem.closest("fieldset");
    if(validateStatus){
      if (fieldset.nextElementSibling && fieldset.nextElementSibling.classList.contains("invalidate")) {
        fieldset.nextElementSibling.remove();
        fieldset.classList.remove("invalidate");
        elem.previousElementSibling.classList.remove("invalidate");
      }
    }
    else{
      if (!fieldset.nextElementSibling || !fieldset.nextElementSibling.classList.contains("invalidate")) {
        fieldset.insertAdjacentHTML("afterEnd", `
                          <span class="invalidate">${message}</span>
                      `);
        elem.previousElementSibling.classList.add("invalidate");
        elem.closest("fieldset").classList.add("invalidate");
      }
    }
  },
  checkAllFilledFields(){
    let viewPort = this.getViewport();
    let nonFilledInputs = Array.from(viewPort.querySelectorAll("[data-required]"))
      .filter((elem) => +elem.dataset.required !== 1);
    if (nonFilledInputs.length) {
      this.getForm().calculate.classList.add("inactive");
      this.getForm().calculate.disabled = true;
      viewPort.querySelector(".helpinfo").classList.remove("nodisplay");
      viewPort.querySelector("[data-calculate]").dataset.calculate = 0;
    } else {
      this.getForm().calculate.classList.remove("inactive");
      this.getForm().calculate.disabled = false;
      viewPort.querySelector(".helpinfo").classList.add("nodisplay");
      viewPort.querySelector("[data-calculate]").dataset.calculate = 1;
    }
  },
  /**
  * расчёт
  */
  calculate({tfArray}){
    const [
      {value: initialСost},
      {value: modernizationCosts},
      {value: usefulLife},
    ] = tfArray;
    console.log(initialСost, modernizationCosts, usefulLife);
    console.log((initialСost + modernizationCosts) / usefulLife);
    const result = (Number(initialСost) + Number(modernizationCosts)) / usefulLife;
    return result;
  },
  /**
  * вывод рез-тов
  */
  render({textFieldsData}){
    this.getViewport().querySelector("p.info").classList.add("nodisplay");
    
    if(this.getViewport().querySelector("div.calculated ")){
      this.getViewport().querySelector("div.calculated").remove();
    }

    const resultHTML = `
    <div class="calculated">    
      <div class="data-block flexed align-end">
          <p class="inputlabel result">
              Ежемесячная сумма амортизации в целях налогового учета модернизированного ОС (А<sub>мес нал</sub>):
          </p>
          <p class="text-for-copy-result">
            <a>${textFieldsData.toFixed(2)}</a><span data-copyclipboard="1" onclick-function="copyToClipboard"></span>
          </p>
        </div>
        <br>
  
        <div class="data-block flexed align-end helpinfo topborder-gray">
          <p>
            Все результаты расчётов носят ознакомительный характер.
          </p>
        </div>
      </div>
      `;
    
      this.getViewport().querySelector("p.info").insertAdjacentHTML('afterend',  resultHTML);
  }
});

/***/ }),

/***/ "./src/templates/basicSettings/validationMessages.js":
/*!***********************************************************!*\
  !*** ./src/templates/basicSettings/validationMessages.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "empty": "Поле не заполнено",
  "number": "Введите число",
});

/***/ }),

/***/ "./src/templates/mainData.js":
/*!***********************************!*\
  !*** ./src/templates/mainData.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basicSettings/initSettings */ "./src/templates/basicSettings/initSettings.js");


Internet.Interactive.init(_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvYmFzaWNTZXR0aW5ncy9pbml0U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RlbXBsYXRlcy9iYXNpY1NldHRpbmdzL3ZhbGlkYXRpb25NZXNzYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGVtcGxhdGVzL21haW5EYXRhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBc0Q7O0FBRXZDO0FBQ2Y7QUFDQSxvQkFBb0IsMkRBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscUNBQXFDLElBQUk7QUFDekM7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxJQUFJLFFBQVEsSUFBSTtBQUMxRCw0Q0FBNEMsSUFBSSxRQUFRLElBQUk7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxRQUFRO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsYUFBYSxRQUFRO0FBQ3JCO0FBQ0EsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTywwQkFBMEI7QUFDakMsT0FBTyxrQkFBa0I7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxVQUFVLGVBQWU7QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDBCQUEwQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzVKQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBa0U7O0FBRWxFLDBCQUEwQixtRUFBc0IsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBtYWluIGZyb20gJy4vdGVtcGxhdGVzL21haW5EYXRhLmpzJzsiLCJpbXBvcnQgdmFsaWRhdGlvbk1lc3NhZ2VzIGZyb20gJy4vdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKnBhcmFtcyBzZWN0aW9uKi9cclxuICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0aW9uTWVzc2FnZXMsXHJcbiAgYWN0aXZlRWxlbWVudDogbnVsbCxcclxuICAvKmVuZCBwYXJhbXMqL1xyXG4gIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQsIGVsZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCB0aGlzLmlzVmFsaWQoKSk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5jYWxjdWxhdGUoe1xyXG4gICAgICAgIFwidGZBcnJheVwiOiBBcnJheS5mcm9tKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKHtcclxuICAgICAgICBcInRleHRGaWVsZHNEYXRhXCI6IHJlc3VsdHMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzZXQnLCBlbGVtKTtcclxuICAgIC8vdGhpcy5nZXRGb3JtKCkucmVzZXQoKTtcclxuICAgIEFycmF5LmZyb20odGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpLmZvckVhY2goIChkb21FbGVtKSA9PiB7XHJcbiAgICAgIGRvbUVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgICAgIGRvbUVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgfSApO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvckFsbChcIi5pbnZhbGlkYXRlXCIpKS5mb3JFYWNoKCAoaW52YWxpZCkgPT4ge1xyXG4gICAgICBpbnZhbGlkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICBpZihpbnZhbGlkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzcGFuXCIpIHtpbnZhbGlkLnJlbW92ZSgpO31cclxuICAgIH0gKTtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wb3NpdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikpIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikucmVtb3ZlKCk7XHJcblxyXG4gIH0sXHJcbiAgb25Gb2N1cyhldmVudCwgZWxlbSl7XHJcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBlbGVtO1xyXG4gIH0sXHJcbiAgb25CbHVyKGV2ZW50LCBlbGVtKXtcclxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGw7XHJcbiAgfSxcclxuICAvKiogQ3JlYXRlIGZha2UgaW5wdXQgcGFzdGUgcmVzdWx0IHRleHQgaW4gaXQgYW5kIGNvcHkgdG8gY2xpcGJvYXJkICovXHJcbiAgY29weVRvQ2xpcGJvYXJkOiBmdW5jdGlvbihldmVudCwgZWxlbSl7XHJcbiAgICBsZXQgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucC50eXBlPSBcInRleHRcIjtcclxuICAgIGlucC52YWx1ZSA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGNvbnNvbGUubG9nKGlucC52YWx1ZSwgZWxlbSwgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgIGlucC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lLmFjdGl2ZVwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wKTtcclxuICAgIGlucC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGlucC5yZW1vdmUoKTtcclxuICB9LFxyXG4gIGNoZWNrRmxvYXRWYWx1ZShlbGVtKSB7XHJcbiAgICBjb25zdCB1c2VySW5wdXQgPSBlbGVtLnZhbHVlO1xyXG4gICAgaWYoIXVzZXJJbnB1dC5tYXRjaCgvXlxcZCpbLixdP1xcZHswLDJ9JC8pKSB7XHJcbiAgICAgIGVsZW0udmFsdWUgPSB1c2VySW5wdXQuc2xpY2UoMCwgdXNlcklucHV0Lmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9IChwYXJzZUZsb2F0KGVsZW0udmFsdWUpKS50b1N0cmluZygpO1xyXG4gICAgbGV0IHZhbGlkYXRlU3RhdHVzID0gISF2YWx1ZSAmJiAoL15cXGR7MCw4fVsuLF0/XFxkezAsMn0/JC8pLnRlc3QodmFsdWUpO1xyXG4gICAgbGV0IHZhbGlkYXRlTWVzc2FnZSA9ICEhdmFsdWUgPyAoICgvXlxcZHswLDh9Wy4sXT9cXGR7MCwyfT8kLykudGVzdCh2YWx1ZSkgPyBudWxsIDogdGhpcy52YWxpZGF0ZU1lc3NhZ2VzLm51bWJlciApIDogdGhpcy52YWxpZGF0ZU1lc3NhZ2VzLmVtcHR5XHJcbiAgICB0aGlzLnRvZ2dsZVZhbGlkYXRlTWVzc2FnZSh2YWxpZGF0ZVN0YXR1cywgZWxlbSwgdmFsaWRhdGVNZXNzYWdlKTtcclxuICAgIGlmKHZhbGlkYXRlU3RhdHVzKXtcclxuICAgICAgZWxlbS5kYXRhc2V0LnJlcXVpcmVkID0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBlbGVtLmRhdGFzZXQucmVxdWlyZWQgPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0FsbEZpbGxlZEZpZWxkcygpO1xyXG4gICAgcmV0dXJuIHZhbGlkYXRlU3RhdHVzO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVmFsaWRhdGVNZXNzYWdlKHZhbGlkYXRlU3RhdHVzLCBlbGVtLCBtZXNzYWdlKXtcclxuICAgIGxldCBmaWVsZHNldCA9IGVsZW0uY2xvc2VzdChcImZpZWxkc2V0XCIpO1xyXG4gICAgaWYodmFsaWRhdGVTdGF0dXMpe1xyXG4gICAgICBpZiAoZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nICYmIGZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnZhbGlkYXRlXCIpKSB7XHJcbiAgICAgICAgZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xyXG4gICAgICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgaWYgKCFmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgIWZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnZhbGlkYXRlXCIpKSB7XHJcbiAgICAgICAgZmllbGRzZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJFbmRcIiwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZGF0ZVwiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgICBlbGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImludmFsaWRhdGVcIik7XHJcbiAgICAgICAgZWxlbS5jbG9zZXN0KFwiZmllbGRzZXRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRhdGVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNoZWNrQWxsRmlsbGVkRmllbGRzKCl7XHJcbiAgICBsZXQgdmlld1BvcnQgPSB0aGlzLmdldFZpZXdwb3J0KCk7XHJcbiAgICBsZXQgbm9uRmlsbGVkSW5wdXRzID0gQXJyYXkuZnJvbSh2aWV3UG9ydC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKVxyXG4gICAgICAuZmlsdGVyKChlbGVtKSA9PiArZWxlbS5kYXRhc2V0LnJlcXVpcmVkICE9PSAxKTtcclxuICAgIGlmIChub25GaWxsZWRJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNhbGN1bGF0ZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNhbGN1bGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscGluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNhbGN1bGF0ZV1cIikuZGF0YXNldC5jYWxjdWxhdGUgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscGluZm9cIikuY2xhc3NMaXN0LmFkZChcIm5vZGlzcGxheVwiKTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNhbGN1bGF0ZV1cIikuZGF0YXNldC5jYWxjdWxhdGUgPSAxO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDRgNCw0YHRh9GR0YJcclxuICAqL1xyXG4gIGNhbGN1bGF0ZSh7dGZBcnJheX0pe1xyXG4gICAgY29uc3QgW1xyXG4gICAgICB7dmFsdWU6IGluaXRpYWzQoW9zdH0sXHJcbiAgICAgIHt2YWx1ZTogbW9kZXJuaXphdGlvbkNvc3RzfSxcclxuICAgICAge3ZhbHVlOiB1c2VmdWxMaWZlfSxcclxuICAgIF0gPSB0ZkFycmF5O1xyXG4gICAgY29uc29sZS5sb2coaW5pdGlhbNChb3N0LCBtb2Rlcm5pemF0aW9uQ29zdHMsIHVzZWZ1bExpZmUpO1xyXG4gICAgY29uc29sZS5sb2coKGluaXRpYWzQoW9zdCArIG1vZGVybml6YXRpb25Db3N0cykgLyB1c2VmdWxMaWZlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IChOdW1iZXIoaW5pdGlhbNChb3N0KSArIE51bWJlcihtb2Rlcm5pemF0aW9uQ29zdHMpKSAvIHVzZWZ1bExpZmU7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDQstGL0LLQvtC0INGA0LXQty3RgtC+0LJcclxuICAqL1xyXG4gIHJlbmRlcih7dGV4dEZpZWxkc0RhdGF9KXtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmNsYXNzTGlzdC5hZGQoXCJub2Rpc3BsYXlcIik7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWQgXCIpKXtcclxuICAgICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2FsY3VsYXRlZFwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHRIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0ZWRcIj4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJsb2NrIGZsZXhlZCBhbGlnbi1lbmRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5wdXRsYWJlbCByZXN1bHRcIj5cclxuICAgICAgICAgICAgICDQldC20LXQvNC10YHRj9GH0L3QsNGPINGB0YPQvNC80LAg0LDQvNC+0YDRgtC40LfQsNGG0LjQuCDQsiDRhtC10LvRj9GFINC90LDQu9C+0LPQvtCy0L7Qs9C+INGD0YfQtdGC0LAg0LzQvtC00LXRgNC90LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INCe0KEgKNCQPHN1Yj7QvNC10YEg0L3QsNC7PC9zdWI+KTpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1mb3ItY29weS1yZXN1bHRcIj5cclxuICAgICAgICAgICAgPGE+JHt0ZXh0RmllbGRzRGF0YS50b0ZpeGVkKDIpfTwvYT48c3BhbiBkYXRhLWNvcHljbGlwYm9hcmQ9XCIxXCIgb25jbGljay1mdW5jdGlvbj1cImNvcHlUb0NsaXBib2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYmxvY2sgZmxleGVkIGFsaWduLWVuZCBoZWxwaW5mbyB0b3Bib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgINCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDRgNCw0YHRh9GR0YLQvtCyINC90L7RgdGP0YIg0L7Qt9C90LDQutC+0LzQuNGC0LXQu9GM0L3Ri9C5INGF0LDRgNCw0LrRgtC10YAuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgXHJcbiAgICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAgcmVzdWx0SFRNTCk7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIFwiZW1wdHlcIjogXCLQn9C+0LvQtSDQvdC1INC30LDQv9C+0LvQvdC10L3QvlwiLFxyXG4gIFwibnVtYmVyXCI6IFwi0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQvlwiLFxyXG59IiwiaW1wb3J0IGluaXRpYWxpemF0aW9uU2V0dGluZ3MgZnJvbSAnLi9iYXNpY1NldHRpbmdzL2luaXRTZXR0aW5ncyc7XHJcblxyXG5JbnRlcm5ldC5JbnRlcmFjdGl2ZS5pbml0KGluaXRpYWxpemF0aW9uU2V0dGluZ3MpOyJdLCJzb3VyY2VSb290IjoiIn0=