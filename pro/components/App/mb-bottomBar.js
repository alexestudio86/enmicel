// BOTTOM BAR

const bottomBar = () => {
 
  const body = document.querySelector('body');
  const fragment = document.createDocumentFragment();
  const bottomBarTemplate = document.getElementById('bottomBarTemplate').content
  const clone = bottomBarTemplate.cloneNode(true);
  fragment.appendChild(clone);

  // Insert Aside
  body.appendChild(fragment);

  // Add event to see car
  document

  // Hide bottomBar
  setTimeout( () => {
    body.removeChild(body.lastElementChild);
  }, 5000 );

  document.querySelector('#bottomBar button').addEventListener('click', toggleAside);

}
