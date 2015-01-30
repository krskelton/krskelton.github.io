
// Kristin Skelton 1/29/15 
// This javascript will create the header and footer for each page of the website

//Create header elements
var myNameElement = document.createElement('h1');
var myTitleElement = document.createElement('h3');


//Set attributes for header elements
myNameElement.setAttribute('class', 'myName');
myTitleElement.setAttribute('class', 'myTitle');

//Set text for element
myNameElement.textContent = 'Kristin Skelton';
myTitleElement.textContent = 'Web Developer';

//Use the query selector to get a handle on the 
//header section of html document and append the elements to it
document.querySelector('.header').appendChild(myNameElement);
document.querySelector('.header').appendChild(myTitleElement);






//Create footer element
var myCopyrightElement = document.createElement('footer');

//Set text for element
myCopyrightElement.textContent = "@2015 Kristin Skelton";

//Use the query selector to get a handle on the 
//footer sections of html documents and append the elements to it
document.querySelector('.footer').appendChild(myCopyrightElement);



















