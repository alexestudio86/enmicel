// SHOW BOTTOM BAR

const showFormData = () => {
  modalGeneral();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const formDataTemplate = document.getElementById('formDataTemplate').content;
  const clone = formDataTemplate.cloneNode(true);
  fragment.appendChild(clone);

  // Insert Aside
  modal.appendChild(fragment);

  // Focus input
  modal.querySelector('input#customerName').focus();

  // Prevent default
  modal.querySelector('form').addEventListener('submit', (e) => e.preventDefault() );
  modal.querySelector('form').addEventListener('submit', validateInput );

  // Add evento cancel button
  modal.querySelector('button[name=btnCancel]').addEventListener('click', modalGeneral);

  // Add evento continue button
  modal.querySelector('a[name=btnContinue]').addEventListener('click', validateInput);

}
