// WELCOME MODAL
const popWindow = localStorage.getItem('popWindow');
if(!popWindow){

  modalGeneral();

  let modal = document.getElementById('modal');

    modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content', 'w3-animate-left');

      exitBtn = document.createElement('a');
      exitBtn.classList.add('w3-white', 'w3-button', 'w3-xlarge', 'w3-display-topright');
      exitBtn.innerHTML = '&times;';
      exitBtn.addEventListener('click', modalGeneral);
      titleContainer = document.createElement('div');
      titleContainer.classList.add('w3-large', 'w3-padding');
        titleIconLeft = document.createElement('i');
        titleIconLeft.classList.add('far', 'fa-star');
        titleIconLeft.style = 'margin: 0 4px 0 0';
        titleContent = document.createElement('span');
        titleContent.textContent = 'Novedades';
        titleIconRight = document.createElement('i');
        titleIconRight.classList.add('far', 'fa-star');
        titleIconRight.style = 'margin: 0 0 0 4px';

      divContainer = document.createElement('div');
      divContainer.classList.add('w3-container');
        bulletsContainer = document.createElement('ul');
        bulletsContainer.classList.add('w3-padding', 'w3-black');
          firstContent = document.createElement('li');
          firstContent.classList.add('w3-padding');
          firstContent.textContent = 'Ahora tu carrito se guarda automáticamente para retomar tu pedido mas tarde';
          secondContent = document.createElement('li');
          secondContent.classList.add('w3-padding');
          secondContent.textContent = 'Ya puedes compartir en tus redes sociales nuestros productos';
          thirdContent = document.createElement('li');
          thirdContent.classList.add('w3-padding');
          thirdContent.textContent = 'Implementamos una barra de búsqueda para que encuentres lo que buscas';
          fourthContent = document.createElement('li');
          fourthContent.classList.add('w3-padding');
          fourthContent.textContent = 'Mejoramos el diseño del sitio optando por un estilo mas limpio';
          fifthContent = document.createElement('li');
          fifthContent.classList.add('w3-padding');
          fifthContent.textContent = 'Optimizamos el sitio para que nos encuentres mas rápido en google';

    modal.appendChild(modalContent);
      modalContent.appendChild(exitBtn);
      modalContent.appendChild(titleContainer);
        titleContainer.appendChild(titleIconLeft);
        titleContainer.appendChild(titleContent);
        titleContainer.appendChild(titleIconRight);
      modalContent.appendChild(divContainer);
        divContainer.appendChild(bulletsContainer);
          bulletsContainer.appendChild(firstContent);
          bulletsContainer.appendChild(secondContent);
          bulletsContainer.appendChild(thirdContent);
          bulletsContainer.appendChild(fourthContent);
          bulletsContainer.appendChild(fifthContent);

  localStorage.setItem('popWindow', 'welcome');

}
