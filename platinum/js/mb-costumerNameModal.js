// CREATE TEMPLATE

const showFormData = () => {

  modalGeneral();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const formDataTemplate = document.getElementById('formDataTemplate').content;
  const clone = formDataTemplate.cloneNode(true);
  fragment.appendChild(clone);

  // Insert Aside
  modal.appendChild(fragment);

  // Add event to cancel
  modal.querySelector('button[name=btnCancel]').addEventListener('click', modalGeneral );

  // Add event to cotinue
  modal.querySelector('a[name=btnContinue]').addEventListener('click', validateInput );

  // Remove default
  modal.querySelector('form').addEventListener('submit', (e) => e.preventDefault() );

}
