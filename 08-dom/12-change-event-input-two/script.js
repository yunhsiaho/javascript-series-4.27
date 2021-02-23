/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {

    // your code here
    document.getElementById('pass-one').addEventListener('input', function () {

        let typedPassword = document.querySelector('#pass-one').value;
        let regex = ('(?=(.*\\d){2})[a-zA-Z0-9]{8,}');
        let checkPassword = typedPassword.match(regex);
        console.log(checkPassword);

        if (checkPassword == null) {
            document.getElementById('validity').innerHTML = 'Not ok';
        } else {
            document.getElementById('validity').innerHTML = 'Ok';
        }



    });
})();
