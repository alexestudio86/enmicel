// DELETE ITEM CONFIRMATION

const deleteItemConfirmation = (e) => {

  generalModal();
  const dataIndex = parseInt( e.currentTarget.getAttribute('data-index') );
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const deleteTemplate = document.getElementById('deleteItemTemplate').content;
  const clone = deleteTemplate.cloneNode(true);
  fragment.appendChild(clone);
  modal.appendChild(fragment);

  // Add event to cancel
  modal.querySelector('button[name=btnLeft]').addEventListener('click', generalModal );

  // Asign index to btn
  modal.querySelector('button[name=btnRight]').setAttribute('data-i', dataIndex);

  // Add event to continue
  modal.querySelector('button[name=btnRight]').addEventListener('click', continueDelete );
}
