// script.js

function checkOrientation() {
    const warning = document.getElementById('orientation-warning');
    if (window.innerHeight > window.innerWidth) {
        // Portrait orientation
        warning.classList.add('active');
        warning.classList.remove('inactive');
    } else {
        // Landscape orientation
        warning.classList.remove('active');
        warning.classList.add('inactive');
    }
}

// Verifica a orientação ao carregar a página
window.addEventListener('load', checkOrientation);
// Verifica a orientação quando a janela é redimensionada
window.addEventListener('resize', checkOrientation);
