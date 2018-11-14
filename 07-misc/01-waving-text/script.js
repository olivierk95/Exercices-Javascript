/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var text = document.querySelector("#target").innerHTML;   
    var character = text.split(""); //tous les caractères sont mis dans un tableau

    var timeline = new TimelineMax({
        repeat : 1,
        repeatDelay : 0.4,
        yoyo : true
    });
 
    text.html("");
 
    $.each(character, function(index, val) {
        if (val == " ") {
            val = " ";
        }
        var letter = $("", {
            id : "txt" + index
        }).html(val).appendTo(text);
        timeline.to(letter, 1, {
            rotationY : 360,
            rotationX : 360,
            textShadow : "0px 0px 0px white",
            color : "none",
            autoAlpha : 1,
            ease : Back.easeOut,
            transformOrigin : "50% 50% -20"
        }, index * 0.05);
    });


})();
