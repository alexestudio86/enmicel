      // CONVERT JSON TO JS OBJECT MOBILE
      function modalArticleTemplate () {

        fetch('<data:blog.homepageUrl.canonical/>' + 'feeds/posts/summary/' + this.getAttribute('data-ident') + '?alt=json')
          .then(res => res.json())
          .then(baseDeDatos => {

          let modal = document.getElementById('modal');
            modalContent = document.createElement('div');
            modalContent.classList.add('w3-modal-content', 'w3-center', 'w3-card', 'w3-animate-bottom');
              image = document.createElement('img')
              image.setAttribute('alt', baseDeDatos.entry.title.$t);
              image.setAttribute('src', (baseDeDatos.entry.media$thumbnail.url).replace('s72-c', 'w350-h250'));
              image.style = 'width: 100%; height: 17em; object-fit: cover;';
              exitBtn = document.createElement('a');
              exitBtn.classList.add('w3-teal', 'w3-button', 'w3-large', 'w3-display-topright');
              exitBtn.innerHTML = 'X';
              exitBtn.addEventListener('click', modalGeneral);
              header = document.createElement('h1');
              header.classList.add('w3-container', 'w3-teal', 'w3-xlarge', 'w3-padding');
              header.textContent = baseDeDatos.entry.title.$t;
              content = document.createElement('p');
              content.textContent = baseDeDatos.entry.summary.$t;
              footer = document.createElement('div');
              footer.classList.add('w3-large', 'w3-teal', 'w3-padding', 'price', 'bold');
              footer.textContent = baseDeDatos.entry.category[0].term;

            modal.appendChild(modalContent);
              modalContent.appendChild(image);
              modalContent.appendChild(exitBtn)
              modalContent.appendChild(header);
              modalContent.appendChild(content);
              modalContent.appendChild(footer);

        });
      
      }


      // EVENT ARTICLES
      function eventsArticles () {
        let articles = document.querySelectorAll('a[data-ident]');
        for (let article of articles){
          article.addEventListener('click', modalGeneral);
          article.addEventListener('click', modalArticleTemplate);
        }
      }

      eventsArticles();
