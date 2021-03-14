// ARTICLE TEMPLATE
function modalArticleTemplate () {
  let modal = document.getElementById('modal');

    modalContent = document.createElement('div');
    modalContent.classList.add('w3-modal-content', 'w3-center', 'w3-card', 'w3-animate-bottom');
      image = document.createElement('img')
      image.setAttribute('alt', this.getAttribute('data-title'));
      image.setAttribute('src', this.getAttribute('data-src'));
      image.style = 'width: 100%; height: 17em; object-fit: cover;';
      exitBtn = document.createElement('a');
      exitBtn.classList.add('w3-teal', 'w3-button', 'w3-large', 'w3-display-topright');
      exitBtn.innerHTML = '&times;';
      exitBtn.addEventListener('click', modalGeneral);
      header = document.createElement('h1');
      header.classList.add('w3-container', 'w3-teal', 'w3-xlarge', 'w3-padding');
      header.textContent = this.getAttribute('data-title');
      content = document.createElement('p');
      content.textContent = this.getAttribute('data-content');
      footer = document.createElement('div');
      footer.classList.add('w3-large', 'w3-teal', 'w3-padding', 'price', 'bold');
      footer.textContent = this.getAttribute('data-price');

    modal.appendChild(modalContent);
      modalContent.appendChild(image);
      modalContent.appendChild(exitBtn)
      modalContent.appendChild(header);
      modalContent.appendChild(content);
      modalContent.appendChild(footer);

}

function visitCounter () {

  // CONVERTIR JSON A OBJETO PARA MOBIL
  fetch('https://propuesta01.alexestudio86.com/feeds/posts/default/'+this.getAttribute('data-ident')+'?alt=json')
    .then(res => res.json())
    .then(json => {
      //printMessage(json);
  });

  //function printMessage(obj){
    //console.log(obj.entry.title.$t);
  //}

  /*
  // CONVERTIR JSON A OBJETO PARA MOVIL
  fetch("https://propuesta01.alexestudio86.com/feeds/posts/default/6670250570598804562?alt=json")
  .then(res => res.json())
  .then(baseDeDatos => {
  console.log(baseDeDatos)
  });


  // CONVERTIR JSON A OBJETO PARA DESKTOP
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        // Convertir json a objeto
        articlesJSON = JSON.parse(this.responseText);
        // Enviar objeto a función
  printArticle (articlesJSON);
      }
    };
    xmlhttp.open("GET", "https://propuesta01.alexestudio86.com/feeds/posts/default/6670250570598804562?alt=json", true);
    xmlhttp.send();
  */

}

// EVENT ARTICLES
function eventsArticles () {
  let articles = document.querySelectorAll('article span[detalles]');
  for (let article of articles){
	article.addEventListener('click', modalGeneral);
	article.addEventListener('click', modalArticleTemplate);
	article.addEventListener('click', visitCounter);
  }
}

eventsArticles();
