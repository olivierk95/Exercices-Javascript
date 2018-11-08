/* becode/javascript
 *
 * /05-arrays/08-array-includes/script.js - 5.8: présence dans un tableau
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var fruits = [
        "pomme",
        "poire",
        "fraise",
        "tomate",
        "kiwi",
        "banane",
        "orange",
        "mandarine",
        "durian",
        "pêche",
        "raisin",
        "cerise",
    ];

    var run = document.getElementById("run");

    run.addEventListener("click", () => {
        fruits.map(function (item) {
            if (item ="pomme") {
                console.log("oui, on a une pomme");
            } else {
                console.log("non, on a pas de pomme");
            }
        });
    });

})();
