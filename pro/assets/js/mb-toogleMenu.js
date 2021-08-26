function barMenuElements(){
    navBarMobileElements = document.querySelectorAll('#home > div > div > div > div > a');
    for(element of navBarMobileElements){
      element.addEventListener('click', closeBarMenu);
    }
  }
  
  function closeBarMenu(){
    navBarMobileBars = document.querySelector('#menu-bar');
    navBarMobileBars.checked = false;
  }
  
  // BAR MENU ELEMENTS
  barMenuElements();  
