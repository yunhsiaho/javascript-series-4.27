/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    // your code here
    document.querySelector("#run").addEventListener("click", function(){
        
        function getRandom(number) {
            return Math.floor(Math.random() * number);
        }

        const adjArray = Array.from(adjectives);
        let x = getRandom(birds.length);
        let y = getRandom(adjArray.length);
        let bird = birds[x];
        let adj = adjArray[y];

        bird.fem ?
            document.querySelector("#target").innerHTML =  `${bird.name} ${adj}e`:
            document.querySelector("#target").innerHTML = `${bird.name} ${adj}`;
        
    });
})();
