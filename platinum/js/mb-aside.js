// TOOGLE ASIDE

const toggleAside = () => {
  document.querySelector('aside').classList.toggle('w3-show');
}

// Add event to open aside
document.getElementById('opencar').addEventListener('click', () => {
  toggleAside();
  renderCar();
});


// CREATE ASIDE

const createAside = () => {

  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const asideTemplate = document.getElementById('asideTemplate').content;
  const clone = asideTemplate.cloneNode(true);
  const body = document.querySelector('body');
  fragment.appendChild(clone);

  // Insert Aside
  body.insertBefore(fragment, modal);

  // Add Event to exit button
  document.querySelector('aside button#closeAside').addEventListener('click', toggleAside);

}

// Call create aside
createAside();


// UPDATE TOTAL OF ASIDE

const updateTotalAside = () => {
  totalAside = document.querySelector('aside span#totalAside');
  totalAside.textContent = car.reduce( (sum, value) => (typeof value.precio == 'number' ? sum + (value.cantidad * value.precio) : sum), 0 );
  if( car.length > 0 ){
    totalAside.classList.add('w3-teal');
  }else{
    totalAside.classList.remove('w3-teal');
  }
}

// Update total aside
updateTotalAside();


// SHOW BUTTON CONTINUE

const showContinueButton = () => {

  continueButton = document.getElementById('continuar');
  if( car.length > 0 ){
    continueButton.classList.add('w3-show');
    continueButton.addEventListener('click', showFormData);
  }else{
    continueButton.classList.remove('w3-show');
    continueButton.removeEventListener('click', showFormData);
  }

}

// Show continue button
showContinueButton();
