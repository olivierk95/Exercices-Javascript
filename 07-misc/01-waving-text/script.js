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

    var stringText = document.querySelector("#target").innerHTML;   
    var textArray = stringText.split("");

    function wrap (item) {
        return "<span>" + item + "</span>";
    };

    wrappedArray = textArray.map(wrap);

    var newString = wrappedArray.join("");

    document.querySelector("#target").innerHTML = newString;

    for (var i = 1 ; i < stringText.length ; i = i +5) {
        document.getElementsByTagName('span')[i].style.fontSize = "15px";
    };

    for (var i = 2 ; i < stringText.length ; i = i +5) {
        document.getElementsByTagName('span')[i].style.fontSize = "25px";
    };

    for (var i = 3 ; i < stringText.length ; i = i +5) {
        document.getElementsByTagName('span')[i].style.fontSize = "40px";
    };

    for (var i = 4 ; i < stringText.length ; i = i +5) {
        document.getElementsByTagName('span')[i].style.fontSize = "30px";
    };

    for (var i = 5 ; i < stringText.length ; i = i +5) {
        document.getElementsByTagName('span')[i].style.fontSize = "20px";
    };


    //Pour faire un effet dynamique de vague:
    /*let i = 0;

    function moveText() {

        i++

        document.getElementsByTagName('span')[i].style.fontSize = "25px";
        document.getElementsByTagName('span')[i-1].style.fontSize = "35px";
        if (i > 2 ) {document.getElementsByTagName('span')[i-2].style.fontSize = "45px";}
        if (i > 3 ) {document.getElementsByTagName('span')[i-3].style.fontSize = "55px";}
        if (i > 4 ) {document.getElementsByTagName('span')[i-4].style.fontSize = "65px";}
        if (i > 5 ) {document.getElementsByTagName('span')[i-5].style.fontSize = "75px";}
        if (i > 6 ) {document.getElementsByTagName('span')[i-6].style.fontSize = "65px";}
        if (i > 7 ) {document.getElementsByTagName('span')[i-7].style.fontSize = "55px";}        
        if (i > 8 ) {document.getElementsByTagName('span')[i-8].style.fontSize = "45px";}
        if (i > 9 ) {document.getElementsByTagName('span')[i-9].style.fontSize = "35px";}
        if (i > 10 ) {document.getElementsByTagName('span')[i-10].style.fontSize = "25px";}        



        if (i < textArray.length) {
        
            setTimeout (function () {
            
                moveText();

            }, 150);
        }


        
    }

    moveText();*/
    
})();
