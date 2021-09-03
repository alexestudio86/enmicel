// UPDATE TOTAL ASIDE

const updateTotalsAside = () => {
  asideUpdate = document.getElementById('totalAside');
  asideSuma = car.reduce( (sum, value) => (typeof value.precio == 'number' ? sum + (value.cantidad * value.precio) : sum), 0 );

  if( car.length > 0 ){
    asideUpdate.classList.add('w3-teal');
    asideUpdate.textContent = asideSuma;
  }else{
    asideUpdate.classList.remove('w3-teal');
    asideUpdate.textContent = 0;
  }
}


// SHOW BUTTON CONTINUE

const showContinueButton = () => {

  continueButton = document.getElementById('continuar');
  if( car.length > 0 ){
    continueButton.classList.add('w3-show');
    continueButton.addEventListener('click', createDataForm);
  }else{
    continueButton.classList.remove('w3-show');
    continueButton.removeEventListener('click', createDataForm);
  }

}


// UPDATE TOTAL ICON

const updateTotalsIcon = () => {
  iconUpdate = document.querySelector('nav button span[id=minicart]');
  iconSuma = car.reduce( (sum, value) => (typeof value.cantidad == 'number' ? sum + value.cantidad : sum), 0 );

  if( car.length > 0 ){
    iconUpdate.classList.add('w3-text-red');
    iconUpdate.textContent = iconSuma;
  }else{
    iconUpdate.classList.remove('w3-text-red');
    iconUpdate.textContent = 0;
  }
}


// UPDATE CAR BUTTONS

const updateCarButtons = () => {
  document.querySelectorAll('article button').forEach( e => e.classList.remove('w3-disabled') );
  car.forEach( e => {
    buttonDisable = document.querySelector(`article button[ident='${e.id}']`);
    buttonDisable.classList.add('w3-disabled');
  });
}
