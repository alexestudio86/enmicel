// Delete item
const continueDelete = (e) => {
  car.splice( parseInt(e.currentTarget.getAttribute('data-i')),1 );
  renderCar();
  generalModal();
}
