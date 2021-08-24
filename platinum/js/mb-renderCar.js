// RENDER CAR

const renderCar = () => {

  const asideContainer = document.querySelector('aside ul');
  asideContainer.innerHTML = '';
  for( let [index, item] of car.entries() ){
    const fragment = document.createDocumentFragment();
    const itemTemplate = document.getElementById('itemTemplate').content;

    // Ittem close button
    itemTemplate.querySelector('button[name=deleteButton]').setAttribute('data-index', index);

    // Item image
    itemTemplate.querySelector('img').setAttribute('src', item.imagen);

    // Item title
    itemTemplate.querySelector('p').innerText = item.titulo;

    // Item individual price
    itemTemplate.querySelector('div.w3-rest div span').innerText = item.precio;

    // Item Substraction
    itemTemplate.querySelector('button[name=substraction]').setAttribute('data-index', index);

    // Item price
    itemTemplate.querySelector('span#itemPrice').innerText = item.precio*item.cantidad;

    // Item addition
    itemTemplate.querySelector('button[name=addition]').setAttribute('data-index', index);

    // Item quantity
    itemTemplate.querySelector('div[name=quantity]').innerText = item.cantidad;

    // Item name quantity
    itemTemplate.querySelector('div[name=quantity]').setAttribute('data-index', index);

    // Clone node
    const clone = itemTemplate.cloneNode(true);

    // Insert fragment
    fragment.appendChild(clone);

    // Insert Aside
    asideContainer.appendChild(fragment);

  }

  // Update Icon Carrito
  updateIconCarrito();

  // Update total aside
  updateTotalAside();

  // Show continue button
  showContinueButton();

  // Add events / Close button
  document.querySelectorAll('aside button[name=deleteButton]').forEach( e => e.addEventListener('click', deleteConfirmation) );

  // Add event to substraction
  document.querySelectorAll('aside button[name=substraction]').forEach( e => e.addEventListener('click', (e) => {
    let itemIndex = parseInt(e.target.getAttribute('data-index'));
      itemQuantity = car[itemIndex].cantidad;
    if(itemQuantity > 1){
      car[itemIndex].cantidad -= 1;
      renderCar();
    }
  }) );

  // Add event to addition
  document.querySelectorAll('aside button[name=addition]').forEach( e => e.addEventListener('click', (e) => {
    let itemIndex = parseInt(e.target.getAttribute('data-index'));
      itemQuantity = car[itemIndex].cantidad;
    if(itemQuantity < 9){
      car[itemIndex].cantidad += 1;
      renderCar();
    }
  }) );

  // Set car to local storage
  setCarLocal();

}


// Render Car
renderCar();
