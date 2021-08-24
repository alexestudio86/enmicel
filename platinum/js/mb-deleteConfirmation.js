// DELETE CONFIRM

// Delete item
const continueDelete = (e) => {
  car.splice( parseInt(e.currentTarget.getAttribute('data-i')),1 );
  renderCar();
  modalGeneral();
}


// Create Delete confirmation

const deleteConfirmation = (e) => {

  modalGeneral();
  const dataIndex = parseInt( e.currentTarget.getAttribute('data-index') );
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const deleteTemplate = document.getElementById('deleteTemplate').content;
  const clone = deleteTemplate.cloneNode(true);
  fragment.appendChild(clone);
  modal.appendChild(fragment);

  // Add event to cancel
  modal.querySelector('button[name=btnLeft]').addEventListener('click', modalGeneral );

  // Asign index to btn
  document.querySelector('#modal button[name=btnRight]').setAttribute('data-i', dataIndex);

  // Add event to continue
  modal.querySelector('button[name=btnRight]').addEventListener('click', continueDelete );

}
