// TOOGLE ASIDE

const toggleAside = () => {
  document.querySelector('aside').classList.toggle('w3-show');
}

// Add event to open aside
document.getElementById('opencart').addEventListener('click', toggleAside );
