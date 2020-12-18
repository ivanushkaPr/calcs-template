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