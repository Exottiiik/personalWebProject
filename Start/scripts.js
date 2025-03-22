// Applique un délai d'animation aux éléments .animated-element
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".animated-element").forEach((el, index) => {
        el.style.animationDelay = `${index * 1}s`; // Décale l'animation de chaque élément
    });
});

// Définit l'index de chaque <span> dans les titres animés pour le délai d'animation
document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll('.animated-text');
  
    titles.forEach(title => {
        const spans = title.querySelectorAll('span');
        spans.forEach((span, index) => {
            span.style.setProperty('--index', index + 1); // Associe un délai basé sur l'index
        });
    });
});

// Fonction pour changer de langue (fr <-> en)
function toggleLanguage() {
    const currentURL = window.location.href;

    if (currentURL.includes('main_fr.html')) {
        window.location.href = currentURL.replace('main_fr.html', 'main_en.html');
    } else if (currentURL.includes('main_en.html')) {
        window.location.href = currentURL.replace('main_en.html', 'main_fr.html');
    }
}

// Écoute le clic du bouton pour changer la langue
const languageButton = document.getElementById('language-toggle');
languageButton.addEventListener('click', toggleLanguage);