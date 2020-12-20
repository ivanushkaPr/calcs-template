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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/calcs/someOtherCalc/someOtherCalc.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calcs/someOtherCalc/calculate.js":
/*!**********************************************!*\
  !*** ./src/calcs/someOtherCalc/calculate.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calculate; });
function calculate({tfArray}){
  const [
    {value: initialСost},
    {value: modernizationCosts},
    {value: usefulLife},
  ] = tfArray;
  const result = (Number(initialСost) + Number(modernizationCosts)) / Number(usefulLife);
  return result;
};

/***/ }),

/***/ "./src/calcs/someOtherCalc/render.js":
/*!*******************************************!*\
  !*** ./src/calcs/someOtherCalc/render.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
function render({textFieldsData}){
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

/***/ }),

/***/ "./src/calcs/someOtherCalc/someOtherCalc.js":
/*!**************************************************!*\
  !*** ./src/calcs/someOtherCalc/someOtherCalc.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_validators_checkFloatValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handlers/validators/checkFloatValue */ "./src/handlers/validators/checkFloatValue.js");
/* harmony import */ var _handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handlers/basicSettings/initSettings */ "./src/handlers/basicSettings/initSettings.js");
/* harmony import */ var _calculate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate.js */ "./src/calcs/someOtherCalc/calculate.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.js */ "./src/calcs/someOtherCalc/render.js");





_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].checkFloatValue = _handlers_validators_checkFloatValue__WEBPACK_IMPORTED_MODULE_0__["default"];
_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].calculate = _calculate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].render = _render_js__WEBPACK_IMPORTED_MODULE_3__["default"];

Internet.Interactive.init(_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/handlers/basicSettings/initSettings.js":
/*!****************************************************!*\
  !*** ./src/handlers/basicSettings/initSettings.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validationMessages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validationMessages */ "./src/handlers/basicSettings/validationMessages.js");


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

});

/***/ }),

/***/ "./src/handlers/basicSettings/validationMessages.js":
/*!**********************************************************!*\
  !*** ./src/handlers/basicSettings/validationMessages.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  "empty": "Поле не заполнено",
  "number": "Введите число",
});

/***/ }),

/***/ "./src/handlers/validators/checkFloatValue.js":
/*!****************************************************!*\
  !*** ./src/handlers/validators/checkFloatValue.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkFloatValue; });
function checkFloatValue(elem) {
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
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGNzL3NvbWVPdGhlckNhbGMvY2FsY3VsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxjcy9zb21lT3RoZXJDYWxjL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2FsY3Mvc29tZU90aGVyQ2FsYy9zb21lT3RoZXJDYWxjLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy9iYXNpY1NldHRpbmdzL2luaXRTZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvYmFzaWNTZXR0aW5ncy92YWxpZGF0aW9uTWVzc2FnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL3ZhbGlkYXRvcnMvY2hlY2tGbG9hdFZhbHVlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLG9CQUFvQixRQUFRO0FBQzNDO0FBQ0EsS0FBSyxtQkFBbUI7QUFDeEIsS0FBSywwQkFBMEI7QUFDL0IsS0FBSyxrQkFBa0I7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFlLGlCQUFpQixlQUFlO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsMEJBQTBCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RTtBQUNIO0FBQzlCO0FBQ047O0FBRWpDLDRFQUFZLG1CQUFtQiw0RUFBZTtBQUM5Qyw0RUFBWSxhQUFhLHFEQUFTO0FBQ2xDLDRFQUFZLFVBQVUsa0RBQU07O0FBRTVCLDBCQUEwQiw0RUFBWSxFOzs7Ozs7Ozs7Ozs7QUNUdEM7QUFBQTtBQUFzRDs7QUFFdkM7QUFDZjtBQUNBLG9CQUFvQiwyREFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsUUFBUTtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCxDOzs7Ozs7Ozs7Ozs7QUM3RkE7QUFBZTtBQUNmO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQWU7QUFDZjtBQUNBLG1DQUFtQyxJQUFJO0FBQ3ZDO0FBQ0E7O0FBRUE7QUFDQSx3Q0FBd0MsSUFBSSxRQUFRLElBQUk7QUFDeEQsMENBQTBDLElBQUksUUFBUSxJQUFJO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiYnVuZGxlcy9zb21lT3RoZXJDYWxjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY2FsY3Mvc29tZU90aGVyQ2FsYy9zb21lT3RoZXJDYWxjLmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXRlKHt0ZkFycmF5fSl7XHJcbiAgY29uc3QgW1xyXG4gICAge3ZhbHVlOiBpbml0aWFs0KFvc3R9LFxyXG4gICAge3ZhbHVlOiBtb2Rlcm5pemF0aW9uQ29zdHN9LFxyXG4gICAge3ZhbHVlOiB1c2VmdWxMaWZlfSxcclxuICBdID0gdGZBcnJheTtcclxuICBjb25zdCByZXN1bHQgPSAoTnVtYmVyKGluaXRpYWzQoW9zdCkgKyBOdW1iZXIobW9kZXJuaXphdGlvbkNvc3RzKSkgLyBOdW1iZXIodXNlZnVsTGlmZSk7XHJcbiAgcmV0dXJuIHJlc3VsdDtcclxufTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXIoe3RleHRGaWVsZHNEYXRhfSl7XHJcbiAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuY2xhc3NMaXN0LmFkZChcIm5vZGlzcGxheVwiKTtcclxuICBcclxuICBpZih0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcImRpdi5jYWxjdWxhdGVkIFwiKSl7XHJcbiAgICB0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcImRpdi5jYWxjdWxhdGVkXCIpLnJlbW92ZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcmVzdWx0SFRNTCA9IGBcclxuICA8ZGl2IGNsYXNzPVwiY2FsY3VsYXRlZFwiPiAgICBcclxuICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJsb2NrIGZsZXhlZCBhbGlnbi1lbmRcIj5cclxuICAgICAgICA8cCBjbGFzcz1cImlucHV0bGFiZWwgcmVzdWx0XCI+XHJcbiAgICAgICAgICAgINCV0LbQtdC80LXRgdGP0YfQvdCw0Y8g0YHRg9C80LzQsCDQsNC80L7RgNGC0LjQt9Cw0YbQuNC4INCyINGG0LXQu9GP0YUg0L3QsNC70L7Qs9C+0LLQvtCz0L4g0YPRh9C10YLQsCDQvNC+0LTQtdGA0L3QuNC30LjRgNC+0LLQsNC90L3QvtCz0L4g0J7QoSAo0JA8c3ViPtC80LXRgSDQvdCw0Ls8L3N1Yj4pOlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8cCBjbGFzcz1cInRleHQtZm9yLWNvcHktcmVzdWx0XCI+XHJcbiAgICAgICAgICA8YT4ke3RleHRGaWVsZHNEYXRhLnRvRml4ZWQoMil9PC9hPjxzcGFuIGRhdGEtY29weWNsaXBib2FyZD1cIjFcIiBvbmNsaWNrLWZ1bmN0aW9uPVwiY29weVRvQ2xpcGJvYXJkXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxicj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRhdGEtYmxvY2sgZmxleGVkIGFsaWduLWVuZCBoZWxwaW5mbyB0b3Bib3JkZXItZ3JheVwiPlxyXG4gICAgICAgIDxwPlxyXG4gICAgICAgICAg0JLRgdC1INGA0LXQt9GD0LvRjNGC0LDRgtGLINGA0LDRgdGH0ZHRgtC+0LIg0L3QvtGB0Y/RgiDQvtC30L3QsNC60L7QvNC40YLQtdC70YzQvdGL0Lkg0YXQsNGA0LDQutGC0LXRgC5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICBgO1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsICByZXN1bHRIVE1MKTtcclxufSIsImltcG9ydCBjaGVja0Zsb2F0VmFsdWUgZnJvbSAnLi4vLi4vaGFuZGxlcnMvdmFsaWRhdG9ycy9jaGVja0Zsb2F0VmFsdWUnO1xyXG5pbXBvcnQgaW5pdFNldHRpbmdzIGZyb20gJy4uLy4uL2hhbmRsZXJzL2Jhc2ljU2V0dGluZ3MvaW5pdFNldHRpbmdzJztcclxuaW1wb3J0IGNhbGN1bGF0ZSBmcm9tICcuL2NhbGN1bGF0ZS5qcyc7XHJcbmltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXIuanMnO1xyXG5cclxuaW5pdFNldHRpbmdzLmNoZWNrRmxvYXRWYWx1ZSA9IGNoZWNrRmxvYXRWYWx1ZTtcclxuaW5pdFNldHRpbmdzLmNhbGN1bGF0ZSA9IGNhbGN1bGF0ZTtcclxuaW5pdFNldHRpbmdzLnJlbmRlciA9IHJlbmRlcjtcclxuXHJcbkludGVybmV0LkludGVyYWN0aXZlLmluaXQoaW5pdFNldHRpbmdzKTsiLCJpbXBvcnQgdmFsaWRhdGlvbk1lc3NhZ2VzIGZyb20gJy4vdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKnBhcmFtcyBzZWN0aW9uKi9cclxuICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0aW9uTWVzc2FnZXMsXHJcbiAgYWN0aXZlRWxlbWVudDogbnVsbCxcclxuICAvKmVuZCBwYXJhbXMqL1xyXG4gIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQsIGVsZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCB0aGlzLmlzVmFsaWQoKSk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5jYWxjdWxhdGUoe1xyXG4gICAgICAgIFwidGZBcnJheVwiOiBBcnJheS5mcm9tKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKHtcclxuICAgICAgICBcInRleHRGaWVsZHNEYXRhXCI6IHJlc3VsdHMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzZXQnLCBlbGVtKTtcclxuICAgIC8vdGhpcy5nZXRGb3JtKCkucmVzZXQoKTtcclxuICAgIEFycmF5LmZyb20odGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpLmZvckVhY2goIChkb21FbGVtKSA9PiB7XHJcbiAgICAgIGRvbUVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgICAgIGRvbUVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgfSApO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvckFsbChcIi5pbnZhbGlkYXRlXCIpKS5mb3JFYWNoKCAoaW52YWxpZCkgPT4ge1xyXG4gICAgICBpbnZhbGlkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICBpZihpbnZhbGlkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzcGFuXCIpIHtpbnZhbGlkLnJlbW92ZSgpO31cclxuICAgIH0gKTtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wb3NpdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikpIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikucmVtb3ZlKCk7XHJcblxyXG4gIH0sXHJcbiAgb25Gb2N1cyhldmVudCwgZWxlbSl7XHJcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBlbGVtO1xyXG4gIH0sXHJcbiAgb25CbHVyKGV2ZW50LCBlbGVtKXtcclxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGw7XHJcbiAgfSxcclxuICAvKiogQ3JlYXRlIGZha2UgaW5wdXQgcGFzdGUgcmVzdWx0IHRleHQgaW4gaXQgYW5kIGNvcHkgdG8gY2xpcGJvYXJkICovXHJcbiAgY29weVRvQ2xpcGJvYXJkOiBmdW5jdGlvbihldmVudCwgZWxlbSl7XHJcbiAgICBsZXQgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucC50eXBlPSBcInRleHRcIjtcclxuICAgIGlucC52YWx1ZSA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGNvbnNvbGUubG9nKGlucC52YWx1ZSwgZWxlbSwgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgIGlucC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lLmFjdGl2ZVwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wKTtcclxuICAgIGlucC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGlucC5yZW1vdmUoKTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVWYWxpZGF0ZU1lc3NhZ2UodmFsaWRhdGVTdGF0dXMsIGVsZW0sIG1lc3NhZ2Upe1xyXG4gICAgbGV0IGZpZWxkc2V0ID0gZWxlbS5jbG9zZXN0KFwiZmllbGRzZXRcIik7XHJcbiAgICBpZih2YWxpZGF0ZVN0YXR1cyl7XHJcbiAgICAgIGlmIChmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcImludmFsaWRhdGVcIikpIHtcclxuICAgICAgICBmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICAgICAgZmllbGRzZXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRhdGVcIik7XHJcbiAgICAgICAgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBpZiAoIWZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZyB8fCAhZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcImludmFsaWRhdGVcIikpIHtcclxuICAgICAgICBmaWVsZHNldC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckVuZFwiLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkYXRlXCI+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgICBlbGVtLmNsb3Nlc3QoXCJmaWVsZHNldFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hlY2tBbGxGaWxsZWRGaWVsZHMoKXtcclxuICAgIGxldCB2aWV3UG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcclxuICAgIGxldCBub25GaWxsZWRJbnB1dHMgPSBBcnJheS5mcm9tKHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpXHJcbiAgICAgIC5maWx0ZXIoKGVsZW0pID0+ICtlbGVtLmRhdGFzZXQucmVxdWlyZWQgIT09IDEpO1xyXG4gICAgaWYgKG5vbkZpbGxlZElucHV0cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgICB2aWV3UG9ydC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2FsY3VsYXRlXVwiKS5kYXRhc2V0LmNhbGN1bGF0ZSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldEZvcm0oKS5jYWxjdWxhdGUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG4gICAgICB0aGlzLmdldEZvcm0oKS5jYWxjdWxhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QuYWRkKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgICB2aWV3UG9ydC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2FsY3VsYXRlXVwiKS5kYXRhc2V0LmNhbGN1bGF0ZSA9IDE7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgXCJlbXB0eVwiOiBcItCf0L7Qu9C1INC90LUg0LfQsNC/0L7Qu9C90LXQvdC+XCIsXHJcbiAgXCJudW1iZXJcIjogXCLQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+XCIsXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0Zsb2F0VmFsdWUoZWxlbSkge1xyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGVsZW0udmFsdWU7XHJcbiAgaWYoIXVzZXJJbnB1dC5tYXRjaCgvXlxcZCpbLixdP1xcZHswLDJ9JC8pKSB7XHJcbiAgICBlbGVtLnZhbHVlID0gdXNlcklucHV0LnNsaWNlKDAsIHVzZXJJbnB1dC5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IChwYXJzZUZsb2F0KGVsZW0udmFsdWUpKS50b1N0cmluZygpO1xyXG4gIGxldCB2YWxpZGF0ZVN0YXR1cyA9ICEhdmFsdWUgJiYgKC9eXFxkezAsOH1bLixdP1xcZHswLDJ9PyQvKS50ZXN0KHZhbHVlKTtcclxuICBsZXQgdmFsaWRhdGVNZXNzYWdlID0gISF2YWx1ZSA/ICggKC9eXFxkezAsOH1bLixdP1xcZHswLDJ9PyQvKS50ZXN0KHZhbHVlKSA/IG51bGwgOiB0aGlzLnZhbGlkYXRlTWVzc2FnZXMubnVtYmVyICkgOiB0aGlzLnZhbGlkYXRlTWVzc2FnZXMuZW1wdHlcclxuICB0aGlzLnRvZ2dsZVZhbGlkYXRlTWVzc2FnZSh2YWxpZGF0ZVN0YXR1cywgZWxlbSwgdmFsaWRhdGVNZXNzYWdlKTtcclxuICBpZih2YWxpZGF0ZVN0YXR1cyl7XHJcbiAgICBlbGVtLmRhdGFzZXQucmVxdWlyZWQgPSAxO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgfVxyXG4gIHRoaXMuY2hlY2tBbGxGaWxsZWRGaWVsZHMoKTtcclxuICByZXR1cm4gdmFsaWRhdGVTdGF0dXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9