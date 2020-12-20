export default function checkFloatValue(elem) {
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