/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = document.querySelector("#target").innerHTML;
    document.querySelector("#target").innerHTML = "";
    var letterArray = text.split("");
    var i = 0;

    function typing (item){
        if (i < text.length) {
            document.querySelector("#target").innerHTML += letterArray[i];
            i++;
            setTimeout(typing, ((Math.random())*(400-10)));
        };
    }

    typing();

})();
