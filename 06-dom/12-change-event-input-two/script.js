/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.querySelector("#pass-one").addEventListener("input", () => {
    	
    	var password = document.querySelector("#pass-one").value;

    	var character = password.split("");

    	var numbers = ["0","1","2","3","4","5","6","7","8","9"];

    	var count = 0;

    	for (var j=0; j<numbers.length; j++) {
    		for (var i=0; i<character.length; i++) {
    			if (character[i]===numbers[j]) {
    				count++;
    			};
    		};
    	};

    	if (password.length > 7 && count > 1) {
    		document.querySelector("#validity").innerHTML = "ok";
    	} else {
    		document.querySelector("#validity").innerHTML = "Pas ok";
    	};
    	
    });

})();
