/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



(function() {
    // to get the value of an input: document.getElementById("element-id").value

    let operandOne = document.getElementById("op-one");
    let operandTwo = document.getElementById("op-two");

    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition
        alert(parseInt(operandOne.value) + parseInt(operandTwo.value));
    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction
        alert(parseInt(operandOne.value) - parseInt(operandTwo.value));
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication
        alert(parseInt(operandOne.value) * parseInt(operandTwo.value));
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division
        alert(parseInt(operandOne.value) / parseInt(operandTwo.value));
    });
})();
