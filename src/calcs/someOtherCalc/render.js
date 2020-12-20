export default function render({textFieldsData}){
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