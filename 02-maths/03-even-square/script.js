/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {

        var numbers = [2,4,6,8,10,12,14,16,18,20];
        var num = [];
        var square = 0;

        for(var i = 0 ; i<numbers.length ; i++) {
        	square += Math.pow(numbers[i], 2);
        	num.push(square);
        	var square = 0;
        };

        alert(num);

    });

})();
