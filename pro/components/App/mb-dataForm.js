// CREATE DATA FORM

const createDataForm = (e) => {
  generalModal();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const formDataTemplate = document.getElementById('formDataTemplate').content;
  const clone = formDataTemplate.cloneNode(true);
  fragment.appendChild(clone);

  // Insert Aside
  modal.appendChild(fragment);

  // Add event to cancel
  modal.querySelector('button[name=btnCancel]').addEventListener('click', generalModal );

  // Add event to cotinue
  modal.querySelector('a[name=btnContinue]').addEventListener('click', validateData );
}
