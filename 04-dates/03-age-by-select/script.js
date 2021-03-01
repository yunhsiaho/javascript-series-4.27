/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        // User input
        let birthDay = document.getElementById("dob-day").value;
        let birthMonth = document.getElementById("dob-month").value;
        let birthYear = document.getElementById("dob-year").value;


        // Current date
        let d = new Date();
        let currentDay = d.getDate();
        let currentMonth = d.getMonth()+1;
        let currentYear = d.getFullYear();

        let age = currentYear-birthYear;

        if (currentMonth >= birthMonth && currentDay >= birthDay) {
            console.log(age);
        }

        else {
            console.log(age-1);
        }

   });

})();
