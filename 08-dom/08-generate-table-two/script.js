/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var t = document.createElement('table');
  t.setAttribute('id', 'newTable');
  document.getElementById('target').appendChild(t);
  var x = 0;
  for (i = 0; i < 10; i++) {
    var r = document.createElement('tr');


    for (n = 1; n <= 10; n++) {
      var c = document.createElement('td');
      x = x + 1;
      z = document.createTextNode(x);
      c.appendChild(z);
      r.appendChild(c);
    }
    document.querySelector('table').appendChild(r);
  }

})();
