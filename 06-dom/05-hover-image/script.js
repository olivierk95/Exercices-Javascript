/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	var attribute = document.querySelector("img").getAttribute("src")
	var newImage = document.querySelector("img").getAttribute("data-hover");
	console.log(attribute);
	console.log(newImage);

    document.querySelector("img").addEventListener("mouseenter", () => {

    	document.querySelector("img").src = newImage ;

    });

    document.querySelector("img").addEventListener("mouseout", () => {

    	document.querySelector("img").src = attribute ;
    });

})();
