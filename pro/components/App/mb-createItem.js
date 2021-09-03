// CREATE LI ITEM
const createItem = () => {

  const ulContainer = document.querySelector('aside ul');
  ulContainer.innerHTML = '';

  // map con index
  car.map( (c, index) => {

    const fragment = document.createDocumentFragment();
    const itemTemplate = document.getElementById('itemTemplate').content;

    // Replace img
    itemTemplate.querySelector('img').setAttribute('src', c.imagen);

    // Replace title
    itemTemplate.querySelector('h1').textContent = c.titulo;

    // Replace cantidad + precio
    itemTemplate.querySelector('p[name=itemPrice]').textContent = `${c.cantidad} x $ ${c.precio} mxn`;

    // Replace price
    itemTemplate.querySelector('div[name=totalItemPrice]').textContent = c.precio * c.cantidad;

    // Insert ID to delete
    itemTemplate.querySelector('button[name=deleteButton]').setAttribute('data-index', index);

    // Insert ID to substraction
    itemTemplate.querySelector('button[name=substraction]').setAttribute('data-index', index);

    // Replace quantity
    itemTemplate.querySelector('div[name=quantity]').textContent = c.cantidad;

    // Insert ID to addition
    itemTemplate.querySelector('button[name=addition]').setAttribute('data-index', index);

    // Clone
    const clone = itemTemplate.cloneNode(true);

    // Insert fragmen
    fragment.appendChild(clone);

    // Insert Li
    ulContainer.appendChild(fragment);

  });

  // Delete confirmation event to button
  ulContainer.querySelectorAll('li button[name=deleteButton]').forEach( e => e.addEventListener('click', deleteItemConfirmation) );

  // Substraction Event to Button
  ulContainer.querySelectorAll('li button[name=substraction]').forEach( e => e.addEventListener('click', itemSubstraction) );

  // Add Event to Button
  ulContainer.querySelectorAll('li button[name=addition]').forEach( e => e.addEventListener('click', itemAddition) );

}
