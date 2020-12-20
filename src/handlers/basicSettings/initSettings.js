import validationMessages from './validationMessages';

export default {
  /*params section*/
  validateMessages: validationMessages,
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

}