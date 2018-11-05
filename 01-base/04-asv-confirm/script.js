/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    function questions() { 
    	var age = prompt("Quel est votre âge?", "Votre âge en chiffre");
    	var sexe = prompt("Quel est votre sexe?", "masculin ou féminin");
    	var ville = prompt("D'où venez-vous?", "Votre ville");
		var agree = confirm("Vous avez " + age + " ans, vous êtes de sexe " + sexe +" et vous venez de " + ville + ".");

    	if (agree == true) {
    		alert("Merci!");
   		} else {
    		questions();
    	}
    }

    questions();

})();
