/* becode/javascript
 *
 * /07-misc/07-storage-clicker/script.js - 7.7: jeu : clicker persistant
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    
    // find increment value of localStorage
    let i = localStorage.getItem('increment');

    // for first time i needs to be set to 0;
    if(i == null){
        localStorage.setItem('increment', 0);
    }

    // display increment in html
    document.querySelector('.counter').innerHTML = i;

    // on click 1) increment, 2) display it, 3) store it
    document.querySelector('#increment').addEventListener('click', function(){
        i++;
        document.querySelector('.counter').innerHTML = i;
        localStorage.setItem('increment', i)
    })

    // small reset for tests
    /* let clear = confirm('Do you want to clear ?');
    if(clear == true){
        localStorage.clear();
    } */
})();
