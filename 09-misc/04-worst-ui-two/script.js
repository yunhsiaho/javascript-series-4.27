/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    let numbers = [460, 0, 0, 0];
    
    const increment = (i, min, max) =>{
        numbers[i]++;
        if(numbers[i] > max)
            numbers[i] = min;
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

    Array.from(document.querySelectorAll('button')).forEach((btn,i) =>
        btn.addEventListener('click', () => {
            const min = btn.getAttribute('data-min');
            const max = btn.getAttribute('data-max');
            increment(i, min, max);
            btn.innerHTML = numbers[i].toLocaleString('en-US', {
                minimumIntegerDigits : 2
            });
        })
    );

})();
