/* becode/javascript
 *
 * /02-maths/04-sort-numbers/script.js - 2.4: classer des nombres
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var numbers = document.getElementById("numbers").value;
    var numbersToArray = numbers.split(",");

    document.getElementById("run").addEventListener("click", function() {

        numbersToArray.sort(function(a, b) {        
            return a - b;          
        });
        
        alert(numbersToArray);
    });

})();