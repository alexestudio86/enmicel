// SHOW CAR
function showCar(){
  let opencart = document.getElementById('opencart');
  closecart = document.querySelector('#aside a');
  opencart.addEventListener('click', toggleAside);
  closecart.addEventListener('click', toggleAside);
}

function toggleAside(){
  let aside = document.getElementById('aside');
  aside.classList.toggle('w3-show');
}

// ADD EVENT SHOWCAR
showCar();
