
const boxOne = document.getElementById('box-one');
const boxTwo = document.getElementById('box-two');
const sectionOne = document.getElementById('section-one');
const sectionTwo = document.getElementById('section-two');
const sectionThree = document.getElementById('section-three');
const sectionTwoReturn = document.getElementById('section-two-return-one');
const sectionThreeReturn = document.getElementById('section-three-return-one');

boxOne.addEventListener('click', function() {
    sectionOne.classList.remove('visible');
    sectionOne.classList.add('hidden');
    sectionTwo.classList.remove('hidden');
    sectionTwo.classList.add('visible');
});

boxTwo.addEventListener('click', function() {
    sectionOne.classList.remove('visible');
    sectionOne.classList.add('hidden');
    sectionThree.classList.remove('hidden');
    sectionThree.classList.add('visible');
});

sectionTwoReturn.addEventListener('click', function() {
    sectionTwo.classList.remove('visible');
    sectionTwo.classList.add('hidden');
    sectionOne.classList.remove('hidden');
    sectionOne.classList.add('visible');
});

sectionThreeReturn.addEventListener('click', function() {
    sectionThree.classList.remove('visible');
    sectionThree.classList.add('hidden');
    sectionOne.classList.remove('hidden');
    sectionOne.classList.add('visible');
});




