// SUBSTRACT ITEM
const itemSubstraction = (e) => {
  dataIndex = e.currentTarget.getAttribute('data-index');
  if( car[dataIndex].cantidad > 1 ){
    car[dataIndex].cantidad -= 1;
  }
  renderCar();
}


// ADD ITEM
const itemAddition = (e) => {
  dataIndex = e.currentTarget.getAttribute('data-index');
  if( car[dataIndex].cantidad < 9 ){
    car[dataIndex].cantidad += 1;
  }
  renderCar();
}
