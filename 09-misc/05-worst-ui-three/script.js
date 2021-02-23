/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    //CODE A AMELIORER
    let numbers =  [460, 0, 0, 0];
    let inputId = ['part-one', 'part-two', 'part-three', 'part-four']

    function getRandom(){
        return Math.floor(Math.random() * 99) + 1;
    }
    
    function getRandom460(){
        return Math.floor(Math.random() *(500 - 460) + 460);
    }

    function getInput(i){
        if (numbers[i] == numbers[0])
            numbers[i] =  getRandom460();
        else
            numbers[i] =  getRandom();
            
        document.getElementById((inputId[i])).value = numbers[i].toLocaleString('en-US', {
            minimumIntegerDigits : 2,
        });
        print();
    }

    function print(){
        const target = document.querySelector('#target');
        let result = '+'
        for (i=0; i<4; i++) {
            result += numbers[i].toLocaleString('en-US', {
                minimumIntegerDigits : 2
            });
        };
        target.innerHTML = result;
    }
   
    Array.from(document.querySelectorAll("button")).forEach((btn, i) =>
    btn.addEventListener(
        "click",() => {
            getInput(i);
        }),
    );

})();
