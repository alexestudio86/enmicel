// SHOW BOTTOM BAR

const bottomBar = () => {
 
  const body = document.querySelector('body');
  const fragment = document.createDocumentFragment();
  const bottomBarTemplate = document.getElementById('bottomBarTemplate').content
  const clone = bottomBarTemplate.cloneNode(true);
  fragment.appendChild(clone);

  // Insert Aside
  body.appendChild(fragment);

  // Hide bottomBar
  setTimeout( () => {
    body.removeChild(body.lastElementChild);
  }, 2000 );

}
