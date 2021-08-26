// SEND DATA
function sendData(){
  whatsappNumber = '+5215562848048';
  textIntro = '%5F'+encodeURIComponent('Hola, me gustaría ordenar')+'%5F%0A%0A';
  carCompleto = car.map(carComplete).join('');
  function carComplete(elemnt){
    let elemento =  elemnt.cantidad+'%20x%20'+encodeURIComponent(elemnt.titulo)+'%0A';
    return elemento;
  };
  finalText = '%0A'+encodeURIComponent('A nombre de: ');
  nameValidated = document.querySelector('#nombre').value;
  nameCleaned = '%2A'+encodeURIComponent(nameValidated)+'%2A';
  finalMessage = document.querySelector('#finalMessage');

  finalMessage.href = 'https://wa.me/'+whatsappNumber+'/?text='+textIntro+carCompleto+finalText+nameCleaned;
  finalMessage.setAttribute('target', '_blank');
  // Limpiar todo
  setInterval(function(){
    car.splice(0,car.length);
    localStorage.removeItem('car');
    modalGeneral();
    renderCar();
    location.reload(true);
  },1000);

}



// VALIDATE NAME
function validateName(){

  textoNombre = document.querySelector('#textoNombre');
  nameToValidate = document.querySelector('#nombre');
  nameToReview = /^[A-z ]+$/.test(nameToValidate.value);

  if((nameToValidate.value).length < 4){
    textoNombre.classList.add('w3-text-red');
    textoNombre.innerText = 'Nombre demasiado corto'
  }else{
    textoNombre.innerText = 'Ingresa tu nombre para continuar';
    textoNombre.classList.remove('w3-text-red');
    if(!nameToReview){
      textoNombre.classList.add('w3-text-red');
      textoNombre.innerText = 'Caracteres no permitidos (1-9,!"·$...)'
    }else{
      textoNombre.classList.remove('w3-text-red');
      textoNombre.innerText = 'Gracias por su preferencia'
      sendData();
    }
  }
}
