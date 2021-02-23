/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    // set random and counter
    let number = Math.floor(Math.random()*100);
    console.log(number);
    let i = 1;
    let guess = prompt('A guess ?');
    
    // loop till the guess is correct (additional statement, guess is a number)
    while(number != guess && isNaN(guess) == false){
        if(number > guess){
            alert("Higher !");
            i++;
            guess = prompt('A guess ?');
        }else if (number < guess) {
            alert("Lower !");
            i++;
            guess = prompt('A guess ?');
        }
    }
    
    // display message for good guess or NaN
    if (guess == number){
        alert(`that's it!\n you needed ${i} guesses`);
    }
    if (isNaN(guess)){
        alert(`'${guess}' is not even a number asshole...`);
    }

})();
