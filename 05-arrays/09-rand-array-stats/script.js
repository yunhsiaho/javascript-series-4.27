/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var tab = []; 

    function getRandom(){

        return Math.floor(Math.random()*101);
    }

    var stock = 0; 

    var min = 101;
    var max = 0;

    

    document.getElementById("run").addEventListener("click", function() {

       
        for (var i = 0; i < 10; i++) {
        
            tab.push(getRandom() );
            document.getElementById("n-"+ (i + 1) ).innerHTML =tab[i] ;
    
            stock += tab[i] ;
    
            if (tab[i] < min){
                min = tab[i];
            }
    
            if (tab[i]> max){
                max = tab[i];
            }
       
        }

        var sum = tab.reduce( (a,b) => { return a + b;} );
        var average = sum / tab.length ;

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = sum;
        document.getElementById("average").innerHTML = average ;
        


       

    });

})();
