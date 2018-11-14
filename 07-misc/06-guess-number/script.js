/* becode/javascript
 *
 * /07-misc/06-guess-number/script.js - 7.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var tryToFind = Math.floor(Math.random()*(100-1))+1;

    console.log(tryToFind);

    var proposition = prompt("Essaie de deviner le nombre entre 1 et 100!");

    while (parseInt(proposition) !== tryToFind) {

	    if (parseInt(proposition) > tryToFind && 0<parseInt(proposition)<101) {
	    	var proposition = prompt("Plus petit, try again");
	    } else if (parseInt(proposition) < tryToFind && 0<parseInt(proposition)<101) {
	    	var proposition = prompt("Plus grand, try again");
	    } else {
	    	var proposition = prompt("Merci de bien vouloir rentrer un nombre entre 1 et 100!")
	    };

	};

	if (parseInt(proposition) == tryToFind) {
	    alert("Bravo, vous êtes un winner!");
	};

})();
