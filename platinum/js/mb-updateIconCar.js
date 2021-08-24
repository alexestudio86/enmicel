// MB-UPDATE ICON CAR

const updateIconCarrito = () => {
  totalIconCarrito = document.getElementById('minicart');
  totalIconCarrito.textContent = car.reduce( (sum, value) => (typeof value.cantidad == 'number' ? sum + value.cantidad : sum), 0 );
  if( car.length > 0 ){
    totalIconCarrito.classList.add('w3-text-red');
  }else{
    totalIconCarrito.classList.remove('w3-text-red');
  }
}
