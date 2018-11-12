/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#run").addEventListener("click", () => {

    	var passOne = document.querySelector("#pass-one").value;
    	var passTwo = document.querySelector("#pass-two").value;

    	if (passOne !== passTwo) {
    		document.querySelector("#pass-one").classList.add("error");
    		document.querySelector("#pass-two").classList.add("error");
    	} else {
    		alert("Mot-de-passe correct!");
    	}
    });

})();
