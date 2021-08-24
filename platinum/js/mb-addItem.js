// ADD ITEM

const addItem = (e) => {

  picture = e.currentTarget.getAttribute('data-img');

  // Create new item
  newItem = new carConstructor( picture, title, quantity, price );

  // Find duplicared
  buscaDuplicado = car.indexOf(car.find(indexCarElement));
  function indexCarElement(position){
    return position.titulo == title;
  }
  if(quantity != 0){
    if(buscaDuplicado>=0){
      car[buscaDuplicado].cantidad = quantity;
    }else{
      car.push(newItem);
    }
  }else{
    if(buscaDuplicado >= 0){
      car.splice(buscaDuplicado,1);
    }
  }

  // Update Icon Carrito
  updateIconCarrito();

  // Show Item
  enableShowCar();

  // Render Car
  renderCar();

}


//renderCar();
