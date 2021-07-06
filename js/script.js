
// consts for event listeners/section transition
// landingpage to menu
const landingBtn = document.getElementById('landing-btn');
const sectionLanding = document.getElementById('section-landing');


// menu page menu display menu items
const sectionMenu = document.getElementById('section-menu');
const titleMenu = document.getElementById('title-menu');
const containerMenu = document.getElementById('container-menu');
const menuItemOne = document.getElementById('menu-item-one');
const menuItemTwo = document.getElementById('menu-item-two');
const menuItemThree = document.getElementById('menu-item-three');

// about section
const sectionAbout = document.getElementById('section-about');
const sectionTitle = document.getElementById('section-title');
const aboutContainer = document.getElementById('about-container');
const titleAbout = document.getElementById('title-about');

// project section
const sectionProjects = document.getElementById('section-projects');
const titleProjects = document.getElementById('title-projects');
const projectsContainer = document.getElementById('projects-container');

// eventlistener landing page to menu 

landingBtn.addEventListener('click', function(){
    sectionLanding.classList.remove('section--visible');
    sectionLanding.classList.add('section--hidden');
    sectionMenu.classList.remove('section--hidden')
    sectionMenu.classList.add('section--visible');
});

// eventlistener menu

titleMenu.addEventListener('click', function() {
    titleMenu.classList.remove('section--visible');
    titleMenu.classList.add('section--hidden');
    containerMenu.classList.remove('section--hidden');
    containerMenu.classList.add('section-visible');
});

// eventlisteners menu items
// about

menuItemOne.addEventListener('click', function() {
    sectionMenu.classList.remove('section--visible');
    sectionMenu.classList.add('section--hidden');
    sectionAbout.classList.remove('section--hidden');
    sectionAbout.classList.add('section--visible');
});

// projects

menuItemTwo.addEventListener('click', function() {
    sectionMenu.classList.remove('section--visible');
    sectionMenu.classList.add('section--hidden');
    sectionProjects.classList.remove('section--hidden');
    sectionProjects.classList.add('section--visible');
});

// about title eventlistener

titleAbout.addEventListener('click', function() {
    titleAbout.classList.remove('section--visible');
    titleAbout.classList.add('section--hidden');
    aboutContainer.classList.remove('section--hidden');
    aboutContainer.classList.add('section--visible');
});

// projects title eventlistener

titleProjects.addEventListener('click', function() {
    titleProjects.classList.remove('section--visible');
    titleProjects.classList.add('section--hidden');
    projectsContainer.classList.remove('section--hidden');
    projectsContainer.classList.add('section--visible');
});