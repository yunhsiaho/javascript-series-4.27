/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let textTarget = document.querySelector("#target").textContent;
    document.querySelector("#target").textContent = "";
    let i= 0;

    function writter (){
        if (i <= textTarget.length) 
            document.querySelector("#target").textContent += textTarget.charAt(i);
            i++;
            setTimeout(writter, 50);
    }
    writter();

})();
