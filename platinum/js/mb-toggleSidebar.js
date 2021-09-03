// TOOGLE SIDEBAR

const toggleSidebar = () => {
  document.querySelector('#home label[for=menu-bar]').click();
  console.log('yes');
}


// Add event to sidebar links
document.querySelectorAll('#home div.w3-sidebar a.w3-bar-item').forEach( e => e.addEventListener('click', toggleSidebar) );
