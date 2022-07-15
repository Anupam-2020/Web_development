// document.querySelector("h1").innerHTML = "goodBye";

// Entire HTML Webpage is a document object model(DOM). Tags are arranged in hierarchical order. 

// <HTML> is firstChildElement of `document` object. 
// HTML is also called root element.
// HTML has further childElements...... 1.Head   2.Body.
// Likewise the hierarchy keeps on going. The head and body are subdivided among children. 
// We can access all elements and change them using JScript by  below methods...................................


// document.querySelector("h1").innerHTML = "goodBye";
document.firstElementChild             // The output will be whole <HTML>....</HTML>
document.firstElementChild.firstElementChild    // The output will be whole <Head> tag elemets.
document.firstElementChild.lastElementChild     // The output will be whole <Body> tag elemets.
document.firstElementChild.lastElementChild.firstElementChild     // The output will be first tag of <Body> selector/tag.



// To manipulate the value in a particular tag.......................
// var h1Element = document.firstElementChild.lastElementChild.firstElementChild;
// h1Element.innerHTML = "GoodBye" // It changes the h1 element value to "GoodBye".
// h1Element.style.color = "Red"

document.querySelector("input").click();

// Some javaScript terms..... 
// 1. Set property -> Eg. -  h1Element.innerHTML = "GoodBye"
// 2. Get property -> Eg. -  document.firstElementChild.lastElementChild
// 3. Call method  -> Eg. -  calling functions/methods.


// Task...... to change the last element of table to "Anupam"............................................
// document.querySelector("ul").lastElementChild.innerHTML = "Anupam";
// document.getElementsByTagName("li")[2].innerHTML = "Anupam";
// document.getElementsByClassName("btn")[0].style.color = "Green";
// document.getElementById("title").innerHTML = "Hello World!";
// document.querySelector("#title").innerHTML = "Hey you!";
// document.querySelector("li a");
// document.querySelector("li.item");
// document.querySelector("#title");
// document.querySelectorAll("#list .item")[2].style.color = "blue";
// document.querySelectorAll("#list .item a")[0].style.color = "red";
// document.querySelectorAll("#list .item")[0].style.color = "red";
// document.querySelector(".btn").style.backgroundColor = "yellow"
// document.querySelector("button").classList.add("btn2");  // This adds a class `btn2` to the <button> tag/seector.
console.log(document.querySelector('a').getAttribute('href'));
document.querySelector('a').setAttribute('href','https://www.bing.com')