/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];

    var i = 1

	document.querySelector("#next").addEventListener("click", ()=> {
		if (i<gallery.length) {
    		document.querySelector("img").src = gallery[i];
    		i = i + 1;
    	} else {
    		i = 0;
    		document.querySelector("img").src = gallery[i];
    		i = i + 1;
    	};

    });

    //autre solution:

    /*var i = 0, c = gallery.length - 1;

    document.getElementById('next').addEventListener('click', function() {
    
        if (i < c) {
            i++
        } else {
            i = 0
        }

        document.getElementsByTagName('img')[0].src = gallery[i];

    });*/

})();
