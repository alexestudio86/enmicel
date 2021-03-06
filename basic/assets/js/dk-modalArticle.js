// CONVERT JSON TO JS OBJECT DESKTOP

const dataArticle = (e) => {
  fetch('feeds/posts/summary/' + e.currentTarget.getAttribute('data-ident') + '?alt=json')
  .then(res => res.json())
  .then(baseDeDatos => {
  let modal = document.getElementById('modal');
  modalContent = document.createElement('div');
  modalContent.classList.add('w3-modal-content', 'w3-card', 'w3-animate-top');
    exitBtn = document.createElement('a');
    exitBtn.classList.add('w3-teal', 'w3-button', 'w3-large', 'w3-display-topright');
    exitBtn.innerHTML = '&times;';
    exitBtn.addEventListener('click', modalGeneral);
    divRow = document.createElement('div');
    divRow.classList.add('w3-row', 'w3-padding-16');
      divLeft = document.createElement('div');
      divLeft.classList.add('w3-col', 's7');
        image = document.createElement('img')
        image.classList.add('w3-image');
        image.setAttribute('alt', baseDeDatos.entry.title.$t);
        image.setAttribute('src', (baseDeDatos.entry.media$thumbnail.url).replace('s72-c', 'w720-h480'));
      divRight = document.createElement('div');
      divRight.classList.add('w3-rest', 'w3-container', 'w3-padding-16');
        header = document.createElement('div');
        header.classList.add('w3-padding-16','w3-border-bottom');
          title = document.createElement('h1');
          title.classList.add('w3-xlarge');
          title.textContent = baseDeDatos.entry.title.$t;
          category = document.createElement('span');
          category.classList.add('w3-text-gray');
          category.textContent = baseDeDatos.entry.category[1].term;
      content = document.createElement('p');
      content.textContent = baseDeDatos.entry.summary.$t;
      footer = document.createElement('div');
      footer.classList.add('w3-large', 'price', 'bold', 'w3-text-teal');
      footer.textContent = baseDeDatos.entry.category[0].term;;
  modal.appendChild(modalContent);
    modalContent.appendChild(exitBtn)
    modalContent.appendChild(divRow);
      divRow.appendChild(divLeft);
        divLeft.appendChild(image);
      divRow.appendChild(divRight);
        divRight.appendChild(header);
          header.appendChild(title);
          header.appendChild(category);
        divRight.appendChild(content);
        divRight.appendChild(footer);
  });
}


// Add events to articles
const eventsArticles = () => {
  let articles = document.querySelectorAll('article');
  for (let article of articles){
    article.addEventListener('click', modalGeneral);
    article.addEventListener('click', dataArticle);
  }
}

eventsArticles();
