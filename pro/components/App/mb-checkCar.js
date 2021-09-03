// CHECK CAR
const car = JSON.parse(localStorage.getItem('car')) || [];


// SET CAR TO LOCALSTORAGE
const setCarLocal = () => {
  carString = JSON.stringify(car);
  localStorage.setItem('car', carString);
}


// Set car to local storage
setCarLocal();
