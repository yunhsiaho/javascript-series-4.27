/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const input = document.querySelector("#hero-id");

    document.querySelector("#run").addEventListener("click", async () => {
        const id = +input.value;

        if (isNaN(id) || id === 0) {
            console.error("Invalid id!");
            return;
        }

        try {
            const response = await fetch(`//localhost:3000/heroes/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const deletedHero=await response.json();

            console.log(deletedHero);
        } catch (err) {
            console.error(`Unknown hero with id: ${id}!`);
        }
    });

})();
