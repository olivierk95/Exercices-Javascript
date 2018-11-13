/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	document.getElementById("run").addEventListener("click",()=> {

		var year = document.getElementById("year").value;
		var friday13 = [];

		for (var month =0 ; month<12 ; month++) {
			var nyear = new Date(year, month, 13);
			if (nyear.getDay()==5) {
				friday13.push(month);
				console.log(nyear)
			};
		};

		alert(friday13);

	});

})();
