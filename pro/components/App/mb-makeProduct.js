// MAKE PRODUCT

const makeProduct = (e) => {

  selector	= document.querySelector( 'article[name="'+e.currentTarget.getAttribute('ident')+'"]' );
  id		= e.currentTarget.getAttribute('ident');
  picture	= selector.getAttribute('data-img');
  title		= selector.getAttribute('data-title');
  quantity	= 1;
  price		= parseInt( selector.getAttribute('data-price') );
  newItem	= new carConstructor( id, picture, title, quantity, price );;

  // Find duplicaded
  const indexCarElement = (position) => position.titulo == title;
  findProduct = car.indexOf( car.find(indexCarElement) );


  if(findProduct >= 0){
    console.log(car);
  }else{
    bottomBar();
    car.push(newItem);
  }

  // Render Car
  renderCar();
}
