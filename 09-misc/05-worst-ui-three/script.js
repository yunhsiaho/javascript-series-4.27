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
    const target = document.querySelector('#target')
    const input = Array.from(document.querySelectorAll("input"))
    const numbers = new Array()

    
    input.forEach(item => {
        numbers.push(parseInt(item.getAttribute('data-min')))
    })
    
    function getRandom(min, max){
        return Math.floor(Math.random() *((max+1) - min) + min)
    }
    
    function setInput(i){
        const minData = parseInt(input[i].getAttribute('data-min'))
        const maxData = parseInt(input[i].getAttribute('data-max'))
        numbers[i] =  getRandom(minData, maxData, i)
        input[i].value = numbers[i].toLocaleString('en-US', {
            minimumIntegerDigits : 2,
        })
        print()
    }
    
    function print(){
        let result = '+'
        for (i=0; i<4; i++) {
            result += numbers[i].toLocaleString('en-US', {
                minimumIntegerDigits : 2
            })
        }
        target.innerHTML = result
    }
    
    const start = new Array()
    Array.from(document.querySelectorAll("button")).forEach((btn, index) =>
    btn.addEventListener(
        "click",() => {
            btn.classList.toggle('on')
            if(btn.className == 'on'){
                start[index] = setInterval(setInput, 50, index)
                btn.innerHTML = "Stop"
            }else{
                clearInterval(start[index])
                btn.innerHTML = "Start"
            }   
        }),

    )

    );
    
    
    
    // COMPLETE SOLUTION 
    // const target = document.getElementById("target");
    // const buttons = Array.from(document.querySelectorAll("button"));
    // const inputs = Array.from(document.querySelectorAll("input"));

    // const DELAY = 125;

    // buttons.forEach((button, i) => {
    //     const interval = () => {
    //         const input = inputs[i];

    //         let value = parseFloat(input.value);

    //         if (++value > parseFloat(input.getAttribute("data-max"))) {
    //             value = input.getAttribute("data-min");
    //         }

    //         input.value = `${value}`.padStart(2, "0");

    //         target.innerText = `+${inputs.map(inp => inp.value).join("")}`;
    //     };

    //     let intervalID = setInterval(interval, DELAY);

    //     button.addEventListener("click", () => {
    //         if (intervalID) {
    //             clearInterval(intervalID);
    //             intervalID = null;
    //             button.innerText = "Start";
    //         } else {
    //             intervalID = setInterval(interval, DELAY);
    //             button.innerText = "Stop";
    //         }
    //     });
    // });


})();
