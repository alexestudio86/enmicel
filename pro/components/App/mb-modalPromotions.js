//MODAL PROMOTIONS TEMPLATE
function modalPromotionsTemplate(){
  let modal = document.getElementById('modal');
  modalContent = document.createElement('div');
  modalContent.classList.add('w3-modal-content', 'w3-center', 'w3-card', 'w3-animate-bottom');
    imgFigure = document.createElement('img');
    imgFigure.setAttribute('alt',this.getAttribute('data-title'));
    imgFigure.setAttribute('src',this.getAttribute('data-img'));
    imgFigure.style = 'width: 100%; height: 17em; object-fit: cover;';
    exitBtn = document.createElement('a');
    exitBtn.classList.add('w3-button', 'w3-large', 'w3-teal', 'w3-display-topright');
    exitBtn.innerHTML = '&times;';
    exitBtn.addEventListener('click', modalGeneral);
    modalTitle = document.createElement('h1')
    modalTitle.classList.add('w3-container', 'w3-teal', 'w3-xlarge', 'w3-padding');
    modalTitle.textContent = this.getAttribute('data-title');
    modalCaption = document.createElement('p');
    modalCaption.classList.add('w3-padding-16');
    modalCaption.style = 'margin:0';
    modalCaption.textContent = this.getAttribute('data-caption');

  modal.appendChild(modalContent)
    modalContent.appendChild(imgFigure);
    modalContent.appendChild(exitBtn);
    modalContent.appendChild(modalTitle);
    modalContent.appendChild(modalCaption);
}


// EVENT PROMOS
function eventsPromotions () {
  let promos = document.querySelectorAll('figure');
  for (let promo of promos){
	promo.addEventListener('click', modalGeneral, true);
	promo.addEventListener('click', modalPromotionsTemplate);
  }
}

eventsPromotions();
