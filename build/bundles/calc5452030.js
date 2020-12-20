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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/calcs/5452030/calc5452030.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/calcs/5452030/calc5452030.js":
/*!******************************************!*\
  !*** ./src/calcs/5452030/calc5452030.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _handlers_validators_checkFloatValue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../handlers/validators/checkFloatValue */ "./src/handlers/validators/checkFloatValue.js");
/* harmony import */ var _handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../handlers/basicSettings/initSettings */ "./src/handlers/basicSettings/initSettings.js");
/* harmony import */ var _calculate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calculate.js */ "./src/calcs/5452030/calculate.js");
/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./render.js */ "./src/calcs/5452030/render.js");





_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].checkFloatValue = _handlers_validators_checkFloatValue__WEBPACK_IMPORTED_MODULE_0__["default"];
_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].calculate = _calculate_js__WEBPACK_IMPORTED_MODULE_2__["default"];
_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"].render = _render_js__WEBPACK_IMPORTED_MODULE_3__["default"];

Internet.Interactive.init(_handlers_basicSettings_initSettings__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/calcs/5452030/calculate.js":
/*!****************************************!*\
  !*** ./src/calcs/5452030/calculate.js ***!
  \****************************************/
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

/***/ "./src/calcs/5452030/render.js":
/*!*************************************!*\
  !*** ./src/calcs/5452030/render.js ***!
  \*************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGNzLzU0NTIwMzAvY2FsYzU0NTIwMzAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NhbGNzLzU0NTIwMzAvY2FsY3VsYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9jYWxjcy81NDUyMDMwL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaGFuZGxlcnMvYmFzaWNTZXR0aW5ncy9pbml0U2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hhbmRsZXJzL2Jhc2ljU2V0dGluZ3MvdmFsaWRhdGlvbk1lc3NhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9oYW5kbGVycy92YWxpZGF0b3JzL2NoZWNrRmxvYXRWYWx1ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0U7QUFDSDtBQUM5QjtBQUNOOztBQUVqQyw0RUFBWSxtQkFBbUIsNEVBQWU7QUFDOUMsNEVBQVksYUFBYSxxREFBUztBQUNsQyw0RUFBWSxVQUFVLGtEQUFNOztBQUU1QiwwQkFBMEIsNEVBQVksRTs7Ozs7Ozs7Ozs7O0FDVHRDO0FBQUE7QUFBZSxvQkFBb0IsUUFBUTtBQUMzQztBQUNBLEtBQUssbUJBQW1CO0FBQ3hCLEtBQUssMEJBQTBCO0FBQy9CLEtBQUssa0JBQWtCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBZSxpQkFBaUIsZUFBZTtBQUMvQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLDBCQUEwQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDMUJBO0FBQUE7QUFBc0Q7O0FBRXZDO0FBQ2Y7QUFDQSxvQkFBb0IsMkRBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELFFBQVE7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgsQzs7Ozs7Ozs7Ozs7O0FDN0ZBO0FBQWU7QUFDZjtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQSxtQ0FBbUMsSUFBSTtBQUN2QztBQUNBOztBQUVBO0FBQ0Esd0NBQXdDLElBQUksUUFBUSxJQUFJO0FBQ3hELDBDQUEwQyxJQUFJLFFBQVEsSUFBSTtBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImJ1bmRsZXMvY2FsYzU0NTIwMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jYWxjcy81NDUyMDMwL2NhbGM1NDUyMDMwLmpzXCIpO1xuIiwiaW1wb3J0IGNoZWNrRmxvYXRWYWx1ZSBmcm9tICcuLi8uLi9oYW5kbGVycy92YWxpZGF0b3JzL2NoZWNrRmxvYXRWYWx1ZSc7XHJcbmltcG9ydCBpbml0U2V0dGluZ3MgZnJvbSAnLi4vLi4vaGFuZGxlcnMvYmFzaWNTZXR0aW5ncy9pbml0U2V0dGluZ3MnO1xyXG5pbXBvcnQgY2FsY3VsYXRlIGZyb20gJy4vY2FsY3VsYXRlLmpzJztcclxuaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlci5qcyc7XHJcblxyXG5pbml0U2V0dGluZ3MuY2hlY2tGbG9hdFZhbHVlID0gY2hlY2tGbG9hdFZhbHVlO1xyXG5pbml0U2V0dGluZ3MuY2FsY3VsYXRlID0gY2FsY3VsYXRlO1xyXG5pbml0U2V0dGluZ3MucmVuZGVyID0gcmVuZGVyO1xyXG5cclxuSW50ZXJuZXQuSW50ZXJhY3RpdmUuaW5pdChpbml0U2V0dGluZ3MpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGF0ZSh7dGZBcnJheX0pe1xyXG4gIGNvbnN0IFtcclxuICAgIHt2YWx1ZTogaW5pdGlhbNChb3N0fSxcclxuICAgIHt2YWx1ZTogbW9kZXJuaXphdGlvbkNvc3RzfSxcclxuICAgIHt2YWx1ZTogdXNlZnVsTGlmZX0sXHJcbiAgXSA9IHRmQXJyYXk7XHJcbiAgY29uc3QgcmVzdWx0ID0gKE51bWJlcihpbml0aWFs0KFvc3QpICsgTnVtYmVyKG1vZGVybml6YXRpb25Db3N0cykpIC8gTnVtYmVyKHVzZWZ1bExpZmUpO1xyXG4gIHJldHVybiByZXN1bHQ7XHJcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyKHt0ZXh0RmllbGRzRGF0YX0pe1xyXG4gIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmNsYXNzTGlzdC5hZGQoXCJub2Rpc3BsYXlcIik7XHJcbiAgXHJcbiAgaWYodGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2FsY3VsYXRlZCBcIikpe1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJkaXYuY2FsY3VsYXRlZFwiKS5yZW1vdmUoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHJlc3VsdEhUTUwgPSBgXHJcbiAgPGRpdiBjbGFzcz1cImNhbGN1bGF0ZWRcIj4gICAgXHJcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS1ibG9jayBmbGV4ZWQgYWxpZ24tZW5kXCI+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJpbnB1dGxhYmVsIHJlc3VsdFwiPlxyXG4gICAgICAgICAgICDQldC20LXQvNC10YHRj9GH0L3QsNGPINGB0YPQvNC80LAg0LDQvNC+0YDRgtC40LfQsNGG0LjQuCDQsiDRhtC10LvRj9GFINC90LDQu9C+0LPQvtCy0L7Qs9C+INGD0YfQtdGC0LAg0LzQvtC00LXRgNC90LjQt9C40YDQvtCy0LDQvdC90L7Qs9C+INCe0KEgKNCQPHN1Yj7QvNC10YEg0L3QsNC7PC9zdWI+KTpcclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWZvci1jb3B5LXJlc3VsdFwiPlxyXG4gICAgICAgICAgPGE+JHt0ZXh0RmllbGRzRGF0YS50b0ZpeGVkKDIpfTwvYT48c3BhbiBkYXRhLWNvcHljbGlwYm9hcmQ9XCIxXCIgb25jbGljay1mdW5jdGlvbj1cImNvcHlUb0NsaXBib2FyZFwiPjwvc3Bhbj5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8YnI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWJsb2NrIGZsZXhlZCBhbGlnbi1lbmQgaGVscGluZm8gdG9wYm9yZGVyLWdyYXlcIj5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgINCS0YHQtSDRgNC10LfRg9C70YzRgtCw0YLRiyDRgNCw0YHRh9GR0YLQvtCyINC90L7RgdGP0YIg0L7Qt9C90LDQutC+0LzQuNGC0LXQu9GM0L3Ri9C5INGF0LDRgNCw0LrRgtC10YAuXHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwicC5pbmZvXCIpLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCAgcmVzdWx0SFRNTCk7XHJcbn0iLCJpbXBvcnQgdmFsaWRhdGlvbk1lc3NhZ2VzIGZyb20gJy4vdmFsaWRhdGlvbk1lc3NhZ2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKnBhcmFtcyBzZWN0aW9uKi9cclxuICB2YWxpZGF0ZU1lc3NhZ2VzOiB2YWxpZGF0aW9uTWVzc2FnZXMsXHJcbiAgYWN0aXZlRWxlbWVudDogbnVsbCxcclxuICAvKmVuZCBwYXJhbXMqL1xyXG4gIHN1Ym1pdDogZnVuY3Rpb24oZXZlbnQsIGVsZW0pIHtcclxuICAgIGNvbnNvbGUubG9nKCdzdWJtaXQnLCB0aGlzLmlzVmFsaWQoKSk7XHJcbiAgICBpZih0aGlzLmlzVmFsaWQoKSl7XHJcbiAgICAgIGxldCByZXN1bHRzID0gdGhpcy5jYWxjdWxhdGUoe1xyXG4gICAgICAgIFwidGZBcnJheVwiOiBBcnJheS5mcm9tKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtcmVxdWlyZWRdXCIpKSxcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKHtcclxuICAgICAgICBcInRleHRGaWVsZHNEYXRhXCI6IHJlc3VsdHMsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVzZXQ6IGZ1bmN0aW9uKGV2ZW50LCBlbGVtKSB7XHJcbiAgICBjb25zb2xlLmxvZygncmVzZXQnLCBlbGVtKTtcclxuICAgIC8vdGhpcy5nZXRGb3JtKCkucmVzZXQoKTtcclxuICAgIEFycmF5LmZyb20odGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpLmZvckVhY2goIChkb21FbGVtKSA9PiB7XHJcbiAgICAgIGRvbUVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgICAgIGRvbUVsZW0udmFsdWUgPSBcIlwiO1xyXG4gICAgfSApO1xyXG4gICAgQXJyYXkuZnJvbSh0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvckFsbChcIi5pbnZhbGlkYXRlXCIpKS5mb3JFYWNoKCAoaW52YWxpZCkgPT4ge1xyXG4gICAgICBpbnZhbGlkLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICBpZihpbnZhbGlkLnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJzcGFuXCIpIHtpbnZhbGlkLnJlbW92ZSgpO31cclxuICAgIH0gKTtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmFjdGl2ZS1wb3NpdGl2ZVwiKS5jbGFzc0xpc3QuYWRkKFwiaW5hY3RpdmVcIik7XHJcbiAgICB0aGlzLmdldFZpZXdwb3J0KCkucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgdGhpcy5nZXRWaWV3cG9ydCgpLnF1ZXJ5U2VsZWN0b3IoXCJwLmluZm9cIikuY2xhc3NMaXN0LnJlbW92ZShcIm5vZGlzcGxheVwiKTtcclxuICAgIGlmKHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikpIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiZGl2LmNhbGN1bGF0ZWRcIikucmVtb3ZlKCk7XHJcblxyXG4gIH0sXHJcbiAgb25Gb2N1cyhldmVudCwgZWxlbSl7XHJcbiAgICB0aGlzLmFjdGl2ZUVsZW1lbnQgPSBlbGVtO1xyXG4gIH0sXHJcbiAgb25CbHVyKGV2ZW50LCBlbGVtKXtcclxuICAgIHRoaXMuYWN0aXZlRWxlbWVudCA9IG51bGw7XHJcbiAgfSxcclxuICAvKiogQ3JlYXRlIGZha2UgaW5wdXQgcGFzdGUgcmVzdWx0IHRleHQgaW4gaXQgYW5kIGNvcHkgdG8gY2xpcGJvYXJkICovXHJcbiAgY29weVRvQ2xpcGJvYXJkOiBmdW5jdGlvbihldmVudCwgZWxlbSl7XHJcbiAgICBsZXQgaW5wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGlucC50eXBlPSBcInRleHRcIjtcclxuICAgIGlucC52YWx1ZSA9IGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy50ZXh0Q29udGVudDtcclxuICAgIGNvbnNvbGUubG9nKGlucC52YWx1ZSwgZWxlbSwgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nKTtcclxuICAgIGlucC5zdHlsZS5vcGFjaXR5ID0gMDtcclxuICAgIHRoaXMuZ2V0Vmlld3BvcnQoKS5xdWVyeVNlbGVjdG9yKFwiLmZyYW1lLmFjdGl2ZVwiKS5pbnNlcnRBZGphY2VudEVsZW1lbnQoXCJiZWZvcmVlbmRcIiwgaW5wKTtcclxuICAgIGlucC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIGlucC5yZW1vdmUoKTtcclxuICB9LFxyXG5cclxuICB0b2dnbGVWYWxpZGF0ZU1lc3NhZ2UodmFsaWRhdGVTdGF0dXMsIGVsZW0sIG1lc3NhZ2Upe1xyXG4gICAgbGV0IGZpZWxkc2V0ID0gZWxlbS5jbG9zZXN0KFwiZmllbGRzZXRcIik7XHJcbiAgICBpZih2YWxpZGF0ZVN0YXR1cyl7XHJcbiAgICAgIGlmIChmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcgJiYgZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcImludmFsaWRhdGVcIikpIHtcclxuICAgICAgICBmaWVsZHNldC5uZXh0RWxlbWVudFNpYmxpbmcucmVtb3ZlKCk7XHJcbiAgICAgICAgZmllbGRzZXQuY2xhc3NMaXN0LnJlbW92ZShcImludmFsaWRhdGVcIik7XHJcbiAgICAgICAgZWxlbS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnZhbGlkYXRlXCIpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBpZiAoIWZpZWxkc2V0Lm5leHRFbGVtZW50U2libGluZyB8fCAhZmllbGRzZXQubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5jb250YWlucyhcImludmFsaWRhdGVcIikpIHtcclxuICAgICAgICBmaWVsZHNldC5pbnNlcnRBZGphY2VudEhUTUwoXCJhZnRlckVuZFwiLCBgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnZhbGlkYXRlXCI+JHttZXNzYWdlfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIGApO1xyXG4gICAgICAgIGVsZW0ucHJldmlvdXNFbGVtZW50U2libGluZy5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgICBlbGVtLmNsb3Nlc3QoXCJmaWVsZHNldFwiKS5jbGFzc0xpc3QuYWRkKFwiaW52YWxpZGF0ZVwiKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY2hlY2tBbGxGaWxsZWRGaWVsZHMoKXtcclxuICAgIGxldCB2aWV3UG9ydCA9IHRoaXMuZ2V0Vmlld3BvcnQoKTtcclxuICAgIGxldCBub25GaWxsZWRJbnB1dHMgPSBBcnJheS5mcm9tKHZpZXdQb3J0LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1yZXF1aXJlZF1cIikpXHJcbiAgICAgIC5maWx0ZXIoKGVsZW0pID0+ICtlbGVtLmRhdGFzZXQucmVxdWlyZWQgIT09IDEpO1xyXG4gICAgaWYgKG5vbkZpbGxlZElucHV0cy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmNsYXNzTGlzdC5hZGQoXCJpbmFjdGl2ZVwiKTtcclxuICAgICAgdGhpcy5nZXRGb3JtKCkuY2FsY3VsYXRlLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QucmVtb3ZlKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgICB2aWV3UG9ydC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2FsY3VsYXRlXVwiKS5kYXRhc2V0LmNhbGN1bGF0ZSA9IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmdldEZvcm0oKS5jYWxjdWxhdGUuY2xhc3NMaXN0LnJlbW92ZShcImluYWN0aXZlXCIpO1xyXG4gICAgICB0aGlzLmdldEZvcm0oKS5jYWxjdWxhdGUuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdmlld1BvcnQucXVlcnlTZWxlY3RvcihcIi5oZWxwaW5mb1wiKS5jbGFzc0xpc3QuYWRkKFwibm9kaXNwbGF5XCIpO1xyXG4gICAgICB2aWV3UG9ydC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY2FsY3VsYXRlXVwiKS5kYXRhc2V0LmNhbGN1bGF0ZSA9IDE7XHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgXCJlbXB0eVwiOiBcItCf0L7Qu9C1INC90LUg0LfQsNC/0L7Qu9C90LXQvdC+XCIsXHJcbiAgXCJudW1iZXJcIjogXCLQktCy0LXQtNC40YLQtSDRh9C40YHQu9C+XCIsXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja0Zsb2F0VmFsdWUoZWxlbSkge1xyXG4gIGNvbnN0IHVzZXJJbnB1dCA9IGVsZW0udmFsdWU7XHJcbiAgaWYoIXVzZXJJbnB1dC5tYXRjaCgvXlxcZCpbLixdP1xcZHswLDJ9JC8pKSB7XHJcbiAgICBlbGVtLnZhbHVlID0gdXNlcklucHV0LnNsaWNlKDAsIHVzZXJJbnB1dC5sZW5ndGggLSAxKTtcclxuICB9XHJcblxyXG4gIGxldCB2YWx1ZSA9IChwYXJzZUZsb2F0KGVsZW0udmFsdWUpKS50b1N0cmluZygpO1xyXG4gIGxldCB2YWxpZGF0ZVN0YXR1cyA9ICEhdmFsdWUgJiYgKC9eXFxkezAsOH1bLixdP1xcZHswLDJ9PyQvKS50ZXN0KHZhbHVlKTtcclxuICBsZXQgdmFsaWRhdGVNZXNzYWdlID0gISF2YWx1ZSA/ICggKC9eXFxkezAsOH1bLixdP1xcZHswLDJ9PyQvKS50ZXN0KHZhbHVlKSA/IG51bGwgOiB0aGlzLnZhbGlkYXRlTWVzc2FnZXMubnVtYmVyICkgOiB0aGlzLnZhbGlkYXRlTWVzc2FnZXMuZW1wdHlcclxuICB0aGlzLnRvZ2dsZVZhbGlkYXRlTWVzc2FnZSh2YWxpZGF0ZVN0YXR1cywgZWxlbSwgdmFsaWRhdGVNZXNzYWdlKTtcclxuICBpZih2YWxpZGF0ZVN0YXR1cyl7XHJcbiAgICBlbGVtLmRhdGFzZXQucmVxdWlyZWQgPSAxO1xyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIGVsZW0uZGF0YXNldC5yZXF1aXJlZCA9IDA7XHJcbiAgfVxyXG4gIHRoaXMuY2hlY2tBbGxGaWxsZWRGaWVsZHMoKTtcclxuICByZXR1cm4gdmFsaWRhdGVTdGF0dXM7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9