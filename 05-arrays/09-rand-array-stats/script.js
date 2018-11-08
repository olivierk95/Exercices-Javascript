/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", () => {
    	var numbers = [];
    	var sum = 0;

    	for (var i=1; i<11; i++) {
    		document.getElementById("n-"+i).innerHTML = parseInt((Math.random() * 100) +1);

    		numbers.push(document.getElementById("n-"+i).innerHTML);

    		sum += parseInt(document.getElementById("n-"+i).innerHTML);
    	};

    	document.getElementById("min").innerHTML = Math.min(...numbers);
		document.getElementById("max").innerHTML = Math.max(...numbers);
		document.getElementById("sum").innerHTML = sum;
		document.getElementById("average").innerHTML = sum/10;
    });

})();
