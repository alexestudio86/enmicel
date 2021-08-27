// CREATE WELCOME WINDOW

const createWelcome = () => {

  modalGeneral();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const welcomeTemplate = document.getElementById('welcomeTemplate').content;
  const clone = welcomeTemplate.cloneNode(true);

  // Insert Fragment
  fragment.appendChild(clone);

  // Insert in modal
  modal.appendChild(fragment);

  // Add evento to close modal
  modal.querySelector('button').addEventListener('click', () => {
    modalGeneral();
    localStorage.advice = 'true';
  });

}

// Inicialice
if( localStorage.advice === undefined ){
  createWelcome();
}
