/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	var run =document.getElementById('run');

	run.addEventListener("click", ()=> {
	    var day = document.getElementById('dob-day').value;
	    var month = document.getElementById('dob-month').value;
	    var year = document.getElementById('dob-year').value;

    	var birth = new Date(year+", "+month+", "+day);
    	var now = new Date();
    	var diff = new Date(now.getTime()-birth.getTime());

    	var age = diff.getFullYear() - 1970;

    	alert("Vous avez "+ age + " ans!");
	});

})();
