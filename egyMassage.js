
// start slide
// get slider items - array from [ es6 feature ] 
let sliderImages = Array.from (document.querySelectorAll('.slider-container img'));

// get numbers of slider
let slidesCount = sliderImages.length;

// set current slide
let currentSlide = 1;

//slide number element
let slidNumberElement = document.getElementById('slide-number');

// previous and next buttons 
let nextButton = document.getElementById('next');
let prevButton = document.getElementById('prev');

// handel click on previous and next buttons
nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

// creat the main ul element
let paginationElement = document.createElement('ul');

// set id on created ul element 
paginationElement.setAttribute('id', 'pagination-ul');

// creat list items based on slides count 
for (let i = 1; i <= slidesCount; i++) {

// creat the li 
let paginationItem = document.createElement('li');

// set custom attribute 
paginationItem.setAttribute('data-index', i);

// set item content 
paginationItem.appendChild(document.createTextNode(i));

// add items to the main ul 
paginationElement.appendChild(paginationItem);
}

// add the created ul element to the page 
document.getElementById('indicators').appendChild(paginationElement);

//get the new created ul 
var paginationCreatedUL = document.getElementById('pagination-ul');

// get pagination items - array from [ es6 feature ] 
var paginationBullets = Array.from (document.querySelectorAll('#pagination-ul li'));

	for (var i = 0; i < paginationBullets.length; i++) {

        paginationBullets[i].onclick= function() {

        currentSlide = parseInt(this.getAttribute('data-index'));

        theChecker();
}
}
// trigger the checker function 
theChecker();

// next slide function 
function nextSlide () {
	if (nextButton.classList.contains('disabled')) {
        // do nothing
        return false;
	} else {
        currentSlide++;
	theChecker();
}
}

// previous slide function 
function prevSlide () {
	if (prevButton.classList.contains('disabled')) {
        // do nothing
        return false;
	} else {
        currentSlide--;
	theChecker();
}
}

// create the checker function 
function theChecker() {


    // remove all active class
	removeAllActive()

    // set active class on current slide
	sliderImages[ currentSlide - 1].classList.add('active')

    // set active class on current pagination item 
	paginationCreatedUL.children[currentSlide - 1].classList.add('active');

    // check if current slide is the first 
	if (currentSlide == 1) {

        // add disabled class on previous button
        prevButton.classList.add('disabled');
	} else {
        // remove disabled class from previous button
        prevButton.classList.remove('disabled');
	}
     // check if current slide is the last
	if (currentSlide == slidesCount) {

        // add disabled class on next button
        nextButton.classList.add('disabled');
	} else {
        // remove disabled class from next button
        nextButton.classList.remove('disabled');
	}
}

// remove all active classes from images and pagination bullets
function removeAllActive() {

    // loop through images
	sliderImages.forEach(function(img) {

        img.classList.remove('active');

	});

    // loop through bullets
	paginationBullets.forEach(function (bullet) {
        bullet.classList.remove('active');
	});
};
//end slide
// toggle menu
let toggleBtn = document.querySelector('.toggle-menu');
let tLinks = document.querySelector('.links');

toggleBtn.onclick = function (e) {

	// stop propagation
	e.stopPropagation();

	// toggle class menu active to button
	this.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks.classList.toggle("open");
};

// click anywhere outside menu and toggle button 
document.addEventListener("click", (e) => {

	if (e.target !== toggleBtn && e.target !== tLinks) {
		
// check if menu is open 
if (tLinks.classList.contains("open")) {

	// toggle class menu active to button
	toggleBtn.classList.toggle("menu-active");

	// toggle class open on links 
	tLinks.classList.toggle("open");// togg
}
	}
});

// stop propagation pn menu
tLinks.onclick = function (e) {

e.stopPropagation();
};

