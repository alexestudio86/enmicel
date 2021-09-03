// Validate Name

const validateData = () => {
  textInstructions = document.querySelector('#modal p');
  nameToValidate = document.getElementById('customerName');
  nameToReview = /^[A-z ]+$/.test(nameToValidate.value);
  if((nameToValidate.value).length < 4){
    textInstructions.classList.remove('w3-text-gray');
    textInstructions.classList.add('w3-text-red');
    textInstructions.innerText = 'Nombre demasiado corto'
  }else{
    textInstructions.classList.remove('w3-text-red');
    textInstructions.classList.add('w3-text-gray');
    textInstructions.innerText = 'Ingrese su nombre para continuar';
    if(!nameToReview){
      textInstructions.classList.remove('w3-text-gray');
      textInstructions.classList.add('w3-text-red');
      textInstructions.innerText = 'Caracteres no permitidos (1-9,!"·$...)'
    }else{
      textInstructions.classList.remove('w3-text-red');
      textInstructions.classList.add('w3-text-gray');
      textInstructions.classList.add('font-weight-bold');
      textInstructions.innerText = '¡GRACIAS POR SU PREFERENCIA!'
      nameToValidate.classList.add('w3-hide');
      redirect();
    }
  }
}
