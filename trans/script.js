const translations = {
    en: {
        title: "Welcome to Our Website",
        description: "This is the home page.",
        learnMore: "Learn more about us"
    },
    es: {
        title: "Bienvenidos a Nuestro Sitio Web",
        description: "Esta es la página de inicio.",
        learnMore: "Aprenda más sobre nosotros"
    },
    fr: {
        title: "Bienvenue sur Notre Site Web",
        description: "Ceci est la page d'accueil.",
        learnMore: "En savoir plus sur nous"
    }
};

document.getElementById('en').addEventListener('click', () => setLanguage('en'));
document.getElementById('es').addEventListener('click', () => setLanguage('es'));
document.getElementById('fr').addEventListener('click', () => setLanguage('fr'));

function setLanguage(language) {
    document.getElementById('title').textContent = translations[language].title;
    document.getElementById('description').textContent = translations[language].description;
    document.getElementById('learn-more').textContent = translations[language].learnMore;
}
