// VARIABLES GLOBALES

const individualTitles	=	[];
let title               =	'.';
let quantity            =	1;
const individualPrices  =	[];
let price               =	1000;


// MAKE PRODUCT

const makeProduct = () => {

  const modal = document.getElementById('modal');
  individualTitles.splice(0,individualTitles.length);
  individualPrices.splice(0,individualPrices.length);
  let getPrice = document.getElementById('pricePost');

  // Select all forms
  const formularios = modal.querySelectorAll('form');

  // Select single form
  for ( const [ind, val] of formularios.entries() ) {
    if(val.id != 'formSelect'){
      const subTotal = new FormData(val);
      // Get global price
      for (const [index, value] of subTotal.entries()) {
        if(!isNaN(value)){
          individualPrices.push(parseInt(value));
        }
      }
      // Get titles
      if(ind==0){
        individualTitles.push( document.querySelector('#modal header h1 b').innerHTML+', '+val.querySelector('input:checked').getAttribute('data-text') );
      }else{
        inputs = val.querySelectorAll('input:checked');
        for(const input of inputs){
          individualTitles.push(input.getAttribute('data-text'));
        }
      }
    }else{
      quantity = parseInt(modal.querySelector('#quantity').value);
    }
  };

  // Get global price
  price = individualPrices.reduce( (total, num) => total+num,0 );

  // Get total price
  getPrice.textContent = price*quantity;

  // Get Titles
  title = individualTitles.map( e => e ).join(', ');

}
