
// consts for event listeners/section transition
// landingpage to menu
const landingBtn = document.getElementById('landing-btn');
const sectionLanding = document.getElementById('section-landing');
const sectionMenu = document.getElementById('section-menu');

// menu page menu display
const titleMenu = document.getElementById('title-menu');
const containerMenu = document.getElementById('container-menu');


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