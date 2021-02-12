/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var year = document.getElementById("year").value;
        var date = new Date(year);
        date.setDate(13);
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

        for (var i = 0; i <= 11; i++) {
            date.setMonth(i);
            let day = date.getDay();

            if(day == 5){
                alert(date.toLocaleDateString("en-GB", options));
            }
        }
    });

})();
