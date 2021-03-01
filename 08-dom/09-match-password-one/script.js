/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  document.getElementById('run').addEventListener('click', () => {
    if (
      document
        .querySelector('#pass-one')
        .value.match(document.querySelector('#pass-two').value)
    ) {
      alert('OK');
    } else {
      var inp = document.querySelectorAll('input');
      for (var i = 0; i < inp.length; i++) {
        inp[i].style.borderColor = 'red';
      }
    }
  });

})();
