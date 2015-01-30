
// Kristin Skelton 1/29/15 
// This javascript will collapse a section of the resume page

var collapseEl = document.querySelector('div.collapse');
var collapseIcon = document.querySelector('img.icon');

var isVisible = true;

collapseEl.classList.add('hidden');

collapseIcon.addEventListener('click', function(evt) {
	if(isVisible) {
		collapseIcon.setAttribute('src', 'images/blue-minus-sign.png');
		collapseEl.classList.remove('hidden');
		collapseEl.classList.add('show');
		isVisible = false;
	}
	else {
		collapseIcon.setAttribute('src', 'images/blue-plus-sign2.png');
		collapseEl.classList.add('hidden');
		collapseEl.classList.remove('show');
		isVisible = true;

	}
});



var educationCollapseEl = document.querySelector('div.educationCollapse');
var educationIcon = document.querySelector('img.educationIcon');

var isVisible2 = true;

educationCollapseEl.classList.add('hidden');


educationIcon.addEventListener('click', function(evt) {
	if(isVisible2) {
		educationIcon.setAttribute('src', 'images/blue-minus-sign.png');
		educationCollapseEl.classList.remove('hidden');
		educationCollapseEl.classList.add('show');
		isVisible2 = false;
	}
	else {
		educationIcon.setAttribute('src', 'images/blue-plus-sign2.png');
		educationCollapseEl.classList.add('hidden');
		educationCollapseEl.classList.remove('show');
		isVisible2 = true;

	}
 });




