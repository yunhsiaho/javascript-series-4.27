/* becode/javascript
 *
 * /06-objects/04-from-entries/script.js - 6.4: fromEntries
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const keys = ["name", "species", "age", "gender", "color"];
    const values = ["Skitty", "cat", 9, "female", "tabby"];
    


    document.getElementById("run").addEventListener('click', function(){
        
            const entries = new Array();
        for(i=0;i<keys.length;i++){
            entries.push([keys[i],values[i]]);
            
        }
        console.log(entries);

            const obj = Object.fromEntries(entries);
            console.log(obj);            
        
        
    });
    

})();

          
/*const result = new Map();
        entries.set(keys);
        entries.set(values);

        const realResult = Object.fromEntries(result);
        console.log(realResult);

            entries.set(keys[0],values[0]);
            entries.set(keys[1],values[1]);
            entries.set(keys[2],values[2]);
            entries.set(keys[3],values[3]);
            entries.set(keys[4],values[4]);
        
        */