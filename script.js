// Get references to buttons and sections
const landingContainer = document.querySelector('.landing-container');
const landingPhoto = document.getElementById('landing-photo');

const mainWebsite = document.getElementById('main-website');
const aboutButton = document.getElementById('about-button');
const experienceButton = document.getElementById('experience-button');
const skillsButton = document.getElementById('skills-button');
const portfolioButton = document.getElementById('portfolio-button');
const contactButton = document.getElementById('contact-button');

const aboutSection = document.getElementById('about');
const experienceSection = document.getElementById('experience');
const skillsSection = document.getElementById('skills');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

// Hide all sections except the first one
aboutSection.style.display = 'block';
experienceSection.style.display = 'none';
skillsSection.style.display = 'none';
portfolioSection.style.display = 'none';
contactSection.style.display = 'none';

// Add event listeners to buttons
landingPhoto.addEventListener('click', () => {
    landingContainer.style.display = 'none';
    mainWebsite.style.display = 'block';
});

aboutButton.addEventListener('click', () => {
    aboutSection.style.display = 'block';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

experienceButton.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    experienceSection.style.display = 'block';
    skillsSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

skillsButton.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'block';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'none';
});

portfolioButton.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    portfolioSection.style.display = 'block';
    contactSection.style.display = 'none';
});

contactButton.addEventListener('click', () => {
    aboutSection.style.display = 'none';
    experienceSection.style.display = 'none';
    skillsSection.style.display = 'none';
    portfolioSection.style.display = 'none';
    contactSection.style.display = 'block';
});
