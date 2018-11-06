/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var red = document.getElementById("red");
    var green = document.getElementById("green");
    var yellow = document.getElementById("yellow");
    var blue = document.getElementById("blue");

  	var div = document.querySelector("html");

  	red.onclick = function() {
  		div.style.backgroundColor = "red";
  	}

  	green.onclick = function() {
  		div.style.backgroundColor = "green";
  	}

  	yellow.onclick = function() {
  		div.style.backgroundColor = "yellow";
  	}

  	blue.onclick = function() {
  		div.style.backgroundColor = "blue";
  	};

})();
