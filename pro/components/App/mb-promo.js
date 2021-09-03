// CREATE PROMO

const createPromo = (e) => {

  generalModal();
  const modal = document.getElementById('modal');
  const fragment = document.createDocumentFragment();
  const promoTemplate = document.getElementById('promoTemplate').content;

  // Replace img
  promoTemplate.querySelector('img').setAttribute('src', e.currentTarget.getAttribute('data-img') );

  // Replace title
  promoTemplate.querySelector('h1').textContent = e.currentTarget.getAttribute('data-title');

  // Replace content
  promoTemplate.querySelector('p').textContent = e.currentTarget.getAttribute('data-caption');

  // Clone
  const clone = promoTemplate.cloneNode(true);

  // Insert fragmen
  fragment.appendChild(clone);

  // Insert Promo
  modal.appendChild(fragment);

  // Add Event to exit button
  modal.querySelector('button#closeAside').addEventListener('click', generalModal);

}

// Add event to figure
figurePromos = document.querySelectorAll('#promotions figure');
for(const figurePromo of figurePromos){
  figurePromo.addEventListener('click', createPromo);
}
