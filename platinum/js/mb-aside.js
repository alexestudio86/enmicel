// CREATE ASIDE

const createAside = () => {

  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const asideTemplate = document.getElementById('asideTemplate').content;
  const clone = asideTemplate.cloneNode(true);
  const body = document.querySelector('body');
  fragment.appendChild(clone);

  // Insert Aside
  body.insertBefore(fragment, modal);

  // Add Event to exit button
  document.querySelector('aside button#closeAside').addEventListener('click', toggleAside);

}

createAside();


// TOOGLE ASIDE

const toggleAside = () => {
  document.querySelector('aside').classList.toggle('w3-show');
}

// Add event to open aside
document.getElementById('opencart').addEventListener('click', toggleAside );
