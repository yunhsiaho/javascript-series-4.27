/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let d = new Date();
    //console.log(d);

    let x = d.getHours()*60;
    //console.log(x);
    let y = d.getMinutes();
    //console.log(x + y);

    if ((x+y) < 1050) {
        document.getElementById("target").innerHTML = "Hello";
    }

    else if ((x+y) >= 1050) {
        document.getElementById("target").innerHTML = "Good evening";
    }

})();
