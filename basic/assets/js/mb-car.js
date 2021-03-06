

const car = JSON.parse(localStorage.getItem('car')) || [];


  function cantidad (){
    currentValue = document.querySelector('div [val="'+this.getAttribute('ident')+'"]');
    valueString = currentValue.innerHTML;
    valueConverted = parseInt(valueString);

    if(this.getAttribute('oper')=='mas'){
      if(valueConverted<9){
        valueConverted+=1;
        currentValue.innerHTML = valueConverted;
      }
    }else if (this.getAttribute('oper')=='menos'){
      if(valueConverted>0){
        valueConverted-=1;
        currentValue.innerHTML = valueConverted;
      }
    }
  }


  function carCounter(){

    if(this.getAttribute('deleteThis')){
      fullInfo = this;
      auxiliarQuantity = '0';
      auxiliarPrice = this.getAttribute('data-price');
    }else{
      fullInfo = document.querySelector('span[data-ident="'+this.getAttribute('ident')+'"]');
      auxiliarQuantity = parseInt(document.querySelector('div [val="'+this.getAttribute('ident')+'"]').innerHTML);
      auxiliarPrice = parseInt(fullInfo.getAttribute('data-price'));
    }

    productID = this.getAttribute('ident');
    quantity = auxiliarQuantity;
    price = auxiliarPrice;
    title = fullInfo.getAttribute('data-title');
    stotal = auxiliarPrice*auxiliarQuantity;
	nuevoElemento = new carConstructor(productID, quantity, price, title, stotal);
    buscaDuplicado = car.indexOf(car.find(indexCarElement));

    function carConstructor(identificador, cantidad, precio, titulo, subtotal){
      this.identificador	=	identificador;
      this.cantidad			=	cantidad;
      this.precio			=	precio;
      this.titulo			=	titulo;
      this.subtotal			=	subtotal;
    }

    function indexCarElement(position){
      return position.identificador == productID;
    }

    if(quantity != 0){
      if(buscaDuplicado>=0){
        car[buscaDuplicado].cantidad = quantity;
        car[buscaDuplicado].subtotal = stotal
      }else{
        car.push(nuevoElemento);
        renderCar;
      }
    }else{
      if(buscaDuplicado >= 0){
        car.splice(buscaDuplicado,1);
      }
    }

    const carString = JSON.stringify(car);
    localStorage.setItem('car', carString);
    renderCar();
  }


  // RENDERIZAR CARRITO
  function renderCar () {

    ulAside = document.querySelector('aside ul');
	ulAside.innerHTML = '';
    totalCarrito = document.querySelector('#opencart span');
	totalAside = document.querySelector('#totalAside');
    articulos = 0;
    dinero = 0;

    totalArticle = document.querySelectorAll('div[val]');
	for (let tArticle of totalArticle){
      tArticle.innerHTML = '0';
    }

    for (let c of car){
      listElement = document.createElement('li');
      listElement.classList.add('w3-right-align', 'w3-border', 'w3-white', 'w3-row');
        listElementLeft = document.createElement('div');
        listElementLeft.classList.add('w3-col', 's10');
          elementDescription = document.createElement('span');
          elementDescription.textContent = c.cantidad + ' x ' + '$' + c.precio + ' - ' + c.titulo + ' | $' + c.subtotal;
        listElementRight = document.createElement('div');
        listElementRight.classList.add('w3-rest')
          deleteElement = document.createElement('a');
          deleteElement.classList.add('w3-button', 'w3-red', 'w3-small', 'bold');
          deleteElement.innerHTML = '&times;';
          deleteElement.setAttribute('ident', c.identificador);
          deleteElement.setAttribute('deleteThis', 'true');
          deleteElement.setAttribute('data-price', c.cantidad);
          deleteElement.setAttribute('data-title', c.titulo);
          deleteElement.addEventListener('click', carCounter);

      ulAside.appendChild(listElement);
        listElement.appendChild(listElementLeft);
          listElementLeft.appendChild(elementDescription);
        listElement.appendChild(listElementRight);
          listElementRight.appendChild(deleteElement);

      // Total de artículos
      articulos += c.cantidad;

      // Total dinero
      dinero += c.subtotal;

      actualizarCampo = document.querySelector('div[val="'+c.identificador+'"]');
      if(actualizarCampo){
        actualizarCampo.innerHTML = c.cantidad;
      }
    }

    let vaciar = document.getElementById('vaciar');
    continuar = document.getElementById('continuar');
    if(car.length <= 0){
      vaciar.classList.remove('w3-show');
      continuar.classList.remove('w3-show');
    }else{
      vaciar.classList.add('w3-show');
      continuar.classList.add('w3-show');
    }

    totalCarrito.innerHTML = articulos;
    totalAside.innerHTML = dinero;

    if(parseInt(totalCarrito.innerHTML) != 0){
      totalCarrito.classList.add('w3-text-red');
    }else{
      totalCarrito.classList.remove('w3-text-red');
    }

  };


  // MODAL OF NAME
  function modalName(){

    let modal = document.getElementById('modal');
    modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content', 'w3-animate-top', 'w3-center', 'w3-card', 'w3-padding');
      modalTitle = document.createElement('p');
      modalTitle.setAttribute('id', 'textoNombre');
      modalTitle.textContent = 'Ingresa tu nombre para continuar';
      inputName = document.createElement('input');
      inputName.setAttribute('type', 'text');
      inputName.setAttribute('id', 'nombre');
      inputName.style = 'width:100%';
      divRow = document.createElement('div');
      divRow.classList.add('w3-row');
      divRow.style = 'margin: 15px 0 0 0'
        divLeft = document.createElement('div');
        divLeft.classList.add('w3-col', 's6', 'w3-center');
          cancelar = document.createElement('a');
          cancelar.classList.add('w3-button', 'w3-border', 'w3-border', 'w3-border-red', 'w3-left');
          cancelar.textContent = 'Cancelar';
	  cancelar.style='width:90%';
          cancelar.addEventListener('click', modalGeneral);
        divRight = document.createElement('div');
        divRight.classList.add('w3-col', 's6', 'w3-center');
          aceptar = document.createElement('a');
          aceptar.classList.add('w3-button', 'w3-border', 'w3-border', 'w3-border-green', 'w3-right');
	  aceptar.id = 'finalMessage'
          aceptar.textContent = 'Aceptar';
          aceptar.addEventListener('click', validateName);
	  aceptar.style='width:90%';

    modal.appendChild(modalContent);
      modalContent.appendChild(modalTitle);
      modalContent.appendChild(inputName);
      modalContent.appendChild(divRow);
        divRow.appendChild(divLeft);
          divLeft.appendChild(cancelar);
        divRow.appendChild(divRight);
          divRight.appendChild(aceptar);
	  
	  focus();
  }

// FOCUS
function focus(){
  focus = document.querySelector('#nombre');
  focus.focus();
}



  // MODAL VACIAR CARRITO
  function vaciarCarrito(){

    let modal = document.getElementById('modal');
    modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content', 'w3-animate-top', 'w3-center', 'w3-light-gray', 'w3-padding');
      modalContainer = document.createElement('div');
      modalContainer.classList.add('w3-padding');
        signal = document.createElement('i');
        signal.classList.add('fas', 'fa-exclamation-circle', 'w3-text-red');
        signal.style = 'margin: 0 4px 0 0';
        content = document.createElement('span')
        content.classList.add('uppercase', 'bold');
        content.textContent = '¿Deseas limpiar el carrito?';
      divRow = document.createElement('div');
      divRow.classList.add('w3-row', 'w3-padding');
        divLeft = document.createElement('div');
        divLeft.classList.add('w3-col', 's6', 'w3-center');
          cancelar = document.createElement('a');
          cancelar.classList.add('w3-button', 'w3-border');
          cancelar.addEventListener('click', modalGeneral);
            cancelSymbol = document.createElement('i');
            cancelSymbol.classList.add('far', 'fa-times-circle', 'w3-text-red');
        divRight = document.createElement('div');
        divRight.classList.add('w3-col', 's6', 'w3-center');
          aceptar = document.createElement('a');
          aceptar.classList.add('w3-button', 'w3-border');
          aceptar.addEventListener('click', function(){
            car.splice(0,car.length);
            localStorage.removeItem('car');
          });
          aceptar.addEventListener('click', modalGeneral);
          aceptar.addEventListener('click', renderCar);
            aceptSymbol = document.createElement('i');
            aceptSymbol.classList.add('fas', 'fa-check', 'w3-text-green');

    modal.appendChild(modalContent);
      modalContent.appendChild(modalContainer);
        modalContainer.appendChild(signal);
        modalContainer.appendChild(content);
      modalContent.appendChild(divRow);
        divRow.appendChild(divLeft);
          divLeft.appendChild(cancelar);
            cancelar.appendChild(cancelSymbol);
        divRow.appendChild(divRight);
          divRight.appendChild(aceptar);
            aceptar.appendChild(aceptSymbol);

  }


  // EVENT OF ASIDE FOOTER
  let vaciar = document.getElementById('vaciar');
  continuar = document.getElementById('continuar');
  // Terminar declaración de variables
  vaciar.addEventListener('click', modalGeneral);
  vaciar.addEventListener('click', vaciarCarrito);
  continuar.addEventListener('click', modalGeneral);
  continuar.addEventListener('click', modalName);


  //EVENT TO SUMAS
  sumaButtons = document.querySelectorAll('a[oper="mas"]');
  for (sumaButton of sumaButtons){
    sumaButton.addEventListener('click', cantidad);
    sumaButton.addEventListener('click', carCounter);
  }

  //EVENT TO RESTAS
  restaButtons = document.querySelectorAll('a[oper="menos"]');
  for (restaButton of restaButtons){
    restaButton.addEventListener('click', cantidad);
    restaButton.addEventListener('click', carCounter);
  }

  renderCar();
