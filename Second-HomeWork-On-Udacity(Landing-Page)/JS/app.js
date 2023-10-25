// console.log("test")


/*      Linking      */
/* link this file to the HTML files */


/*   Performance Or Clarity  */
/* How are you going to add each navigation item to your menu? 
(Hint: there are several ways to do this. Do some research to figure out which makes the most sense for your situation. Performance? Clarity?). */


/*    Scrolling    */
/*
use the JavaScript scrolling method 
choose the simple one from them
*/


/*     performance     */
/*          
Check the performance of the code 
before it starts and after it ends
*/


/* This is the bug who prevent the code 
from excuting */
/* VideoFrame
fvfv */

/* Make the page usable to all devices */

/* Navigation to all across devices */

/* Check the resposivness by Google Chrome Developer Tools */



/* Change the highlight of the selected section */



/* Create Ul in a dynimc way */

// var navbar_list = document.getElementById('navbar__list');


// getBoundingClientRect for all section : 

let section1New = document.getElementById('section1');
let section2New = document.getElementById('section2');
let section3New = document.getElementById('section3');
let section4New = document.getElementById('section4');

if (section1New) {
    let rect1 = section1New.getBoundingClientRect();
    window.scrollTo({
        top: rect1.top + windows.scrollY,
        left: rect1.left + windows.scrollX,
        behavior: "smooth"
    });

} else if (section2New) {

    let rect2 = section2New.getBoundingClientRect();
    windows.scrollTo({
        top: rect2.top + windows.scrollY,
        let: rect2.left + windows.scrollX,
        behavior: "smooth"
    });

} else if (section3New) {

    let rect3 = section3New.getBoundingClientRect();
    windows.scrollTo({
        top: rect3.top + windows.scrollY,
        left: rect3.left + windows.scrollX,
        behavior: "smooth"
    });


} else if (section4New) {

    let rect4 = section.getBoundingClientRect();
    windows.scrollTo({
        top: rect4.top + windows.scrollY,
        left: rect4.left + windows.scrollY,
        behavior : "smooth"
    });
}





addEventListener('click' , ){
    preventde
}
// For test purpos only 

/* var footer = document.querySelectorAll(".page_footer");
footer.style.color = "red"; */

// for (let i = 0; i < heading.length; i++) {
//      heading[i].style.backgroundcolor ="red";

// }

/* for(let i = 0; i < heading.length; i++) {
    heading[i].style.color = "red";

} */
// heading_color.style.color = red;

/* console.log('test'); */

