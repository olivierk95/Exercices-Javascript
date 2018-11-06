/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var click = document.getElementById("run");

    click.addEventListener("click", () => {
    	var red = Math.round(Math.random()*255);
    	var green = Math.round(Math.random()*255);
    	var blue = Math.round(Math.random()*255);
    	document.querySelector("html").style.backgroundColor = "rgb("+red+","+green+","+blue+")";
    });  

})();
