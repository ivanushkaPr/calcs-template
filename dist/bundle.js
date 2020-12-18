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
/* harmony import */ var _templates_some_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./templates/some.js */ "./src/templates/some.js");
/* harmony import */ var _templates_some_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_some_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/templates/some.js":
/*!*******************************!*\
  !*** ./src/templates/some.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

Internet.Interactive.init({
  /*params section*/
  validateMessages: {
    "empty": "Поле не заполнено",
    "number": "Введите число",
  },
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZW1wbGF0ZXMvc29tZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFDQUFxQyxJQUFJO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMsSUFBSSxRQUFRLElBQUk7QUFDMUQsNENBQTRDLElBQUksUUFBUSxJQUFJO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGFBQWEsUUFBUTtBQUNyQjtBQUNBLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sa0JBQWtCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsVUFBVSxlQUFlO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwwQkFBMEI7QUFDM0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDLEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgc29tZSBmcm9tICcuL3RlbXBsYXRlcy9zb21lLmpzJzsiLCJJbnRlcm5ldC5JbnRlcmFjdGl2ZS5pbml0KHtcclxuICAvKnBhcmFtcyBzZWN0aW9uKi9cclxuICB2YWxpZGF0ZU1lc3NhZ2VzOiB7XHJcbiAgICBcImVtcHR5XCI6IFwi0J/QvtC70LUg0L3QtSDQt9Cw0L/QvtC70L3QtdC90L5cIixcclxuICAgIFwibnVtYmVyXCI6IFwi0JLQstC10LTQuNGC0LUg0YfQuNGB0LvQvlwiLFxyXG4gIH0sXHJcbiAgYWN0aXZlRWxlbWVudDogbnVsbCxcclxuICAvKmVuZCBwYXJhbXMqL1xyXG4gIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQsIGVsZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCB0aGlzLmlzVmFsaWQoKSk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5jYWxjdWxhdGUoe1xyXG4gICAgICAgIFwidGZBcnJheVwiOiBBcnJheS5mcm9tKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKHtcclxuICAgICAgICBcInRleHRGaWVsZHNEYXRhXCI6IHJlc3VsdHMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzZXQnLCBlbGVtKTtcclxuICAgIC8vdGhpcy5nZXRGb3JtKCkucmVzZXQoKTtcclxuICAgIEFycmF5LmZyb20odGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpLmZvckVhY2goIChkb21FbGVtKSA9PiB7XHJcbiAgICAgIGRvbUVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgICAgIGRvbUVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgfSApO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvckFsbChcIi5pbnZhbGlkYXRlXCIpKS5mb3JFYWNoKCAoaW52YWxpZCkgPT4ge1xyXG4gICAgICBpbnZhbGlkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICBpZihpbnZhbGlkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzcGFuXCIpIHtpbnZhbGlkLnJlbW92ZSgpO31cclxuICAgIH0gKTtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wb3NpdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikpIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikucmVtb3ZlKCk7XHJcblxyXG4gIH0sXHJcbiAgb25Gb2N1cyhldmVudCwgZWxlbSl7XHJcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBlbGVtO1xyXG4gIH0sXHJcbiAgb25CbHVyKGV2ZW50LCBlbGVtKXtcclxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGw7XHJcbiAgfSxcclxuICAvKiogQ3JlYXRlIGZha2UgaW5wdXQgcGFzdGUgcmVzdWx0IHRleHQgaW4gaXQgYW5kIGNvcHkgdG8gY2xpcGJvYXJkICovXHJcbiAgY29weVRvQ2xpcGJvYXJkOiBmdW5jdGlvbihldmVudCwgZWxlbSl7XHJcbiAgICBsZXQgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucC50eXBlPSBcInRleHRcIjtcclxuICAgIGlucC52YWx1ZSA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGNvbnNvbGUubG9nKGlucC52YWx1ZSwgZWxlbSwgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgIGlucC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lLmFjdGl2ZVwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wKTtcclxuICAgIGlucC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGlucC5yZW1vdmUoKTtcclxuICB9LFxyXG4gIGNoZWNrRmxvYXRWYWx1ZShlbGVtKSB7XHJcbiAgICBjb25zdCB1c2VySW5wdXQgPSBlbGVtLnZhbHVlO1xyXG4gICAgaWYoIXVzZXJJbnB1dC5tYXRjaCgvXlxcZCpbLixdP1xcZHswLDJ9JC8pKSB7XHJcbiAgICAgIGVsZW0udmFsdWUgPSB1c2VySW5wdXQuc2xpY2UoMCwgdXNlcklucHV0Lmxlbmd0aCAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCB2YWx1ZSA9IChwYXJzZUZsb2F0KGVsZW0udmFsdWUpKS50b1N0cmluZygpO1xyXG4gICAgbGV0IHZhbGlkYXRlU3RhdHVzID0gISF2YWx1ZSAmJiAoL15cXGR7MCw4fVsuLF0/XFxkezAsMn0/JC8pLnRlc3QodmFsdWUpO1xyXG4gICAgbGV0IHZhbGlkYXRlTWVzc2FnZSA9ICEhdmFsdWUgPyAoICgvXlxcZHswLDh9Wy4sXT9cXGR7MCwyfT8kLykudGVzdCh2YWx1ZSkgPyBudWxsIDogdGhpcy52YWxpZGF0ZU1lc3NhZ2VzLm51bWJlciApIDogdGhpcy52YWxpZGF0ZU1lc3NhZ2VzLmVtcHR5XHJcbiAgICB0aGlzLnRvZ2dsZVZhbGlkYXRlTWVzc2FnZSh2YWxpZGF0ZVN0YXR1cywgZWxlbSwgdmFsaWRhdGVNZXNzYWdlKTtcclxuICAgIGlmKHZhbGlkYXRlU3RhdHVzKXtcclxuICAgICAgZWxlbS5kYXRhc2V0LnJlcXVpcmVkID0gMTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICBlbGVtLmRhdGFzZXQucmVxdWlyZWQgPSAwO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jaGVja0FsbEZpbGxlZEZpZWxkcygpO1xyXG4gICAgcmV0dXJuIHZhbGlkYXRlU3RhdHVzO1xyXG4gIH0sXHJcbiAgdG9nZ2xlVmFsaWRhdGVNZXNzYWdlKHZhbGlkYXRlU3RhdHVzLCBlbGVtLCBtZXNzYWdlKXtcclxuICAgIGxldCBmaWVsZHNldCA9IGVsZW0uY2xvc2VzdChcImZpZWxkc2V0XCIpO1xyXG4gICAgaWYodmFsaWRhdGVTdGF0dXMpe1xyXG4gICAgICBpZiAoZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nICYmIGZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnZhbGlkYXRlXCIpKSB7XHJcbiAgICAgICAgZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLnJlbW92ZSgpO1xyXG4gICAgICAgIGZpZWxkc2V0LmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICAgIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QucmVtb3ZlKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgaWYgKCFmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcgfHwgIWZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZy5jbGFzc0xpc3QuY29udGFpbnMoXCJpbnZhbGlkYXRlXCIpKSB7XHJcbiAgICAgICAgZmllbGRzZXQuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJFbmRcIiwgYFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW52YWxpZGF0ZVwiPiR7bWVzc2FnZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBgKTtcclxuICAgICAgICBlbGVtLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuY2xhc3NMaXN0LmFkZChcImludmFsaWRhdGVcIik7XHJcbiAgICAgICAgZWxlbS5jbG9zZXN0KFwiZmllbGRzZXRcIikuY2xhc3NMaXN0LmFkZChcImludmFsaWRhdGVcIik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNoZWNrQWxsRmlsbGVkRmllbGRzKCl7XHJcbiAgICBsZXQgdmlld1BvcnQgPSB0aGlzLmdldFZpZXdwb3J0KCk7XHJcbiAgICBsZXQgbm9uRmlsbGVkSW5wdXRzID0gQXJyYXkuZnJvbSh2aWV3UG9ydC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKVxyXG4gICAgICAuZmlsdGVyKChlbGVtKSA9PiArZWxlbS5kYXRhc2V0LnJlcXVpcmVkICE9PSAxKTtcclxuICAgIGlmIChub25GaWxsZWRJbnB1dHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNhbGN1bGF0ZS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICAgIHRoaXMuZ2V0Rm9ybSgpLmNhbGN1bGF0ZS5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscGluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNhbGN1bGF0ZV1cIikuZGF0YXNldC5jYWxjdWxhdGUgPSAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmNsYXNzTGlzdC5yZW1vdmUoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgIHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3IoXCIuaGVscGluZm9cIikuY2xhc3NMaXN0LmFkZChcIm5vZGlzcGxheVwiKTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNhbGN1bGF0ZV1cIikuZGF0YXNldC5jYWxjdWxhdGUgPSAxO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDRgNCw0YHRh9GR0YJcclxuICAqL1xyXG4gIGNhbGN1bGF0ZSh7dGZBcnJheX0pe1xyXG4gICAgY29uc3QgW1xyXG4gICAgICB7dmFsdWU6IGluaXRpYWzQoW9zdH0sXHJcbiAgICAgIHt2YWx1ZTogbW9kZXJuaXphdGlvbkNvc3RzfSxcclxuICAgICAge3ZhbHVlOiB1c2VmdWxMaWZlfSxcclxuICAgIF0gPSB0ZkFycmF5O1xyXG4gICAgY29uc29sZS5sb2coaW5pdGlhbNChb3N0LCBtb2Rlcm5pemF0aW9uQ29zdHMsIHVzZWZ1bExpZmUpO1xyXG4gICAgY29uc29sZS5sb2coKGluaXRpYWzQoW9zdCArIG1vZGVybml6YXRpb25Db3N0cykgLyB1c2VmdWxMaWZlKTtcclxuICAgIGNvbnN0IHJlc3VsdCA9IChOdW1iZXIoaW5pdGlhbNChb3N0KSArIE51bWJlcihtb2Rlcm5pemF0aW9uQ29zdHMpKSAvIHVzZWZ1bExpZmU7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG4gIH0sXHJcbiAgLyoqXHJcbiAgKiDQstGL0LLQvtC0INGA0LXQty3RgtC+0LJcclxuICAqL1xyXG4gIHJlbmRlcih7dGV4dEZpZWxkc0RhdGF9KXtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmNsYXNzTGlzdC5hZGQoXCJub2Rpc3BsYXlcIik7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWQgXCIpKXtcclxuICAgICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2FsY3VsYXRlZFwiKS5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZXN1bHRIVE1MID0gYFxyXG4gICAgPGRpdiBjbGFzcz1cImNhbGN1bGF0ZWRcIj4gICAgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJsb2NrIGZsZXhlZCBhbGlnbi1lbmRcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5wdXRsYWJlbCByZXN1bHRcIj5cclxuICAgICAgICAgICAgICDQldC20LXQvNC10YHRj9GH0L3QsNGPINGB0YPQvNC80LAg0LDQvNC+0YDRgtC40LfQsNGG0LjQuCDQsiDRhtC10LvRj9GFINC90LDQu9C+0LPQvtCy0L7Qs9C+INGD0YfQtdGC0LAg0LzQvtC00LXRgNC90LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INCe0KEgKNCQPHN1Yj7QvNC10YEg0L3QsNC7PC9zdWI+KTpcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1mb3ItY29weS1yZXN1bHRcIj5cclxuICAgICAgICAgICAgPGE+JHt0ZXh0RmllbGRzRGF0YS50b0ZpeGVkKDIpfTwvYT48c3BhbiBkYXRhLWNvcHljbGlwYm9hcmQ9XCIxXCIgb25jbGljay1mdW5jdGlvbj1cImNvcHlUb0NsaXBib2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnI+XHJcbiAgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYmxvY2sgZmxleGVkIGFsaWduLWVuZCBoZWxwaW5mbyB0b3Bib3JkZXItZ3JheVwiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgINCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDRgNCw0YHRh9GR0YLQvtCyINC90L7RgdGP0YIg0L7Qt9C90LDQutC+0LzQuNGC0LXQu9GM0L3Ri9C5INGF0LDRgNCw0LrRgtC10YAuXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgXHJcbiAgICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAgcmVzdWx0SFRNTCk7XHJcbiAgfVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9