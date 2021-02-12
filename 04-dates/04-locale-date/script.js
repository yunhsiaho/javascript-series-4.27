/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"

    // your code here
    let d = new Date();
    let date= d.toDateString();

    let hour = d.getHours() +':'+(d.getMinutes());

    document.getElementById("target").innerHTML = "Hello, today it is " + date +" , "+ hour;
    

    /*

   let today = new Date();         
   let day = today.toLocaleString('en-EN', {weekday: "long"}); 
   let date= today.getDate();  
   let month =today.toLocaleDateString('en-En', {month: "long"});         
   let year =today.getFullYear();         
   
   let hour = today.getHours();         
   let min =today.getMinutes();                        
   
   document.getElementById("target").innerHTML = "Hello, today it is " + day + " " + date + " " + month + " " + year + ","  + " " + hour +"h"+ min;
   */
})();
