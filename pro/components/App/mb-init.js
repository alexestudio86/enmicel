// Add Events to all buttons
const addButton = () => {
  addButtons = document.querySelectorAll('#Blog1 article button[ident]');
  for(let addButton of addButtons ){
    addButton.addEventListener( 'click', makeProduct );
  }
}
addButton();

// Render Car beginning
renderCar();
