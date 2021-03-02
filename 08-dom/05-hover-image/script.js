/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var way = document.querySelector(".material figure img");
    var newImage = way.getAttribute("data-hover");
    var oldImage = way.getAttribute("src");
    
    way.removeAttribute("src")

    way.onmouseover = function() {way.src = newImage;};
    way.onmouseout = function() {way.src = oldImage;};




    //way.innerHTML = `onmouseover="${newImage}"`;



    // your code here

})();
