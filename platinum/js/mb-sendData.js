// MB-SENDDATA

// Send data
const sendData = () => {
  // Phone number
  whatsappNumber = '+5215510698215';
  // Intro
  introText = '%5F'+encodeURIComponent('Hola, me gustaría ordenar')+'%5F%0A%0A';
  // Body
  bodyText = car.map( e => {
    body = e.cantidad+'%20x%20'+encodeURIComponent(e.titulo)+'%0A';
    return body;
  }).join('');
  // At name of
  finalText = '%0A'+encodeURIComponent('A nombre de: ');
  // Name validated
  nameValidated = '%2A'+encodeURIComponent( document.getElementById('customerName').value )+'%2A';
  sendMessage = modal.querySelector('a[name=btnContinue]');
  sendMessage.setAttribute('target', '_blank');
  sendMessage.href = 'https://wa.me/'+whatsappNumber+'/?text='+introText+bodyText+finalText+nameValidated;
  // Clean all
  setTimeout( () => {
    car.splice(0,car.length);
    localStorage.removeItem('car');
    modalGeneral();
    renderCar();
    location.reload(true);
    }, 1000
  );
}
