// Enable show car button in post
const enableShowCar = () => {
  showCarButton = document.getElementById('showCar');
  if(car.length > 0){
    showCarButton.classList.remove('w3-disabled');
    showCarButton.addEventListener('click', showCar);
  }else{
    showCarButton.classList.add('w3-disabled');
    showCarButton.removeEventListener('click', showCar);
  }
}

// Show car aside in post
const showCar = () => {
  setTimeout( () => {
    document.getElementById('opencar').click();
  }, 200 );
  setTimeout( () => {
    document.getElementById('exitModal').click();
  }, 100 );
}


// GET POST AJAX

const getAjax = async(e) => {
  try {
    const res = await fetch('https://titbit.alexestudio86.com/'+'feeds/posts/full/' + e.currentTarget.getAttribute('data-ident') + '?alt=json');
		const data = await res.json()

      modalGeneral();
      const modal = document.getElementById('modal');
      const fragment = document.createDocumentFragment();
      const postTemplate = document.getElementById('postTemplate').content

      // Post Title
      postTemplate.querySelector('header h1 b').textContent = data.entry.title.$t;

      // Post Image
      postTemplate.querySelector('img').setAttribute('src', data.entry.media$thumbnail.url.replace('s72-c-d','w400-h200-p-k-no-nu') );
    
      // Post Content
      postTemplate.querySelector('div#bodyPost').innerHTML = data.entry.content.$t;

      // Post Button
      postTemplate.querySelector('footer button').setAttribute('data-img', data.entry.media$thumbnail.url);

      // Label Post and Post Price
      if(data.entry.category.length > 1) {
        postTemplate.querySelector('footer div#pricePost').textContent = data.entry.category[0].term;
      }else{
        postTemplate.querySelector('footer div#pricePost').textContent = 1000;
      }

      const clone = postTemplate.cloneNode(true);
      fragment.appendChild(clone);
      modal.appendChild(fragment);

      // Add Event to exit button
      document.querySelector('#modal button[id="exitModal"]').addEventListener('click', modalGeneral);

      // Add Event to change options
      document.querySelectorAll('form').forEach(e => e.addEventListener('change', () => {
        // Update Subtotal
        makeProduct();
      }));
      makeProduct();

      // Add Event to add product
      document.getElementById('addCartBtn').addEventListener('click', (e) => {
        addItem(e);
        // Show bottom bar
        bottomBar();
        // Reset input checked
        resetInputs = document.querySelectorAll('form');
        resetInputs.forEach( i => i.querySelectorAll('input:checked').forEach( e => e.checked=false ) );
        resetInputs[0].querySelector('input').checked = true;
        document.querySelector('form#formSelect select#quantity').value = 1;
      });

      // Enable show car
      enableShowCar();

  } catch (error) {
    console.log(error);
  }
}


// ADD EVENT TO ARTICLES
const getArticles = () => {
  let articles = document.querySelectorAll('#Blog1 article a[data-ident]');
  for (let article of articles){
    article.addEventListener('click', getAjax);
  }
}
getArticles();
