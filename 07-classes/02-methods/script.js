/* becode/javascript
 *
 * /07-classes/02-methods/script.js - 7.2: méthodes
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    document.getElementById("run").addEventListener('click', function(){
        class Person{
            constructor(_firstname,_lastname){
                this.firstname = _firstname;
                this.lastname = _lastname;
            }
            sayHello(){
                return `Hello, ${this.firstname} ${this.lastname} !` ;
            }
    
        }
    
        
        let person1 = new Person("Johnny","Halladay");

        console.log(person1.sayHello());
    });

    
})();
