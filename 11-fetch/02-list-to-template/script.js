/* becode/javascript
 *
 * /09-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const tpl = document.querySelector("#tpl-hero");
    const target = document.querySelector("#target");

    document.querySelector("#run").addEventListener("click", async () => {
        const response = await fetch("http://localhost:3000/heroes");
        const heroes = await response.json();

        heroes.forEach(({name, alterEgo, abilities}) => {
            const elt = tpl.cloneNode(true).content;

            elt.querySelector(".name").innerText = name;
            elt.querySelector(".alter-ego").innerText = alterEgo;
            elt.querySelector(".powers").innerText = abilities.join(", ");

            target.appendChild(elt);
        });
    });
})();
