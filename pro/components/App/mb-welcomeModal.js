// CREATE WELCOME MODAL

const createWelcome = () => {

  generalModal();
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
    generalModal();
    localStorage.advice = 'true';
  });

}


if( localStorage.advice === undefined ){
  createWelcome();
}
