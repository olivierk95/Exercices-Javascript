/* becode/javascript
 *
 * /07-misc/05-worst-ui-three/script.js - 7.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

//CASE 1
    var i = 460 ;
    var a = true;

    //fonction pour faire tourner en boucle la première case
    function casino1 () {

        if (a==true) {
            if (i < 499) {
                i++;
                document.querySelector("#part-one").value = i ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            } else if (i = 499) {
                i = 460;
                document.querySelector("#part-one").value = i ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            }; 
            setTimeout(casino1, 300); 
        };

        if (a==false) {
            document.querySelector("#part-one").value = i;
            document.querySelector("#target").innerHTML = "+"+i+j+k+l;
        };
    };
    
    //permet de lancer la fonction dès que la page est lancée
    casino1();
    //permet d'entretenir la fonction si l'utilisateur clique sur le bouton "stop!"
    document.querySelector("#fix-part-one").addEventListener ("click", () => {
        a =! a;
        casino1();
    });


//CASE 2
    var j = 0 ;
    var b = true;

    //fonction pour faire tourner en boucle la deuxième case
    function casino2 () {

        if (b==true) {
            if (j < 10) {
                j++;
                document.querySelector("#part-two").value = "0"+j ;
                document.querySelector("#target").innerHTML = "+"+i+"0"+j+k+l;
            } else if (j < 99) {
                j++;
                document.querySelector("#part-two").value = j ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            } else if (j = 99) {
                j = 0;
                document.querySelector("#part-two").value = j ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            }; 
            setTimeout(casino2, 200); 
        };

        if (b==false) {
            if (j < 10) {
                document.querySelector("#part-two").value = "0"+j;
                document.querySelector("#target").innerHTML = "+"+i+"0"+j+k+l;
            } else {
                document.querySelector("#part-two").value = j;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            };
        };
    };
    
    //permet de lancer la fonction dès que la page est lancée
    casino2();
    //permet d'entretenir la fonction si l'utilisateur clique sur le bouton "stop!"
    document.querySelector("#fix-part-two").addEventListener ("click", () => {
        b =! b;
        casino2();
    });

//CASE 3
    var k = 0 ;
    var c = true;

    //fonction pour faire tourner en boucle la deuxième case
    function casino3 () {

        if (c==true) {
            if (k < 10) {
                k++;
                document.querySelector("#part-three").value = "0"+k ;
                document.querySelector("#target").innerHTML = "+"+i+j+"0"+k+l;
            } else if (k < 99) {
                k++;
                document.querySelector("#part-three").value = k ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            } else if (k = 99) {
                k = 0;
                document.querySelector("#part-three").value = k ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            }; 
            setTimeout(casino3, 100); 
        };

        if (c==false) {
            if (k < 10) {
                document.querySelector("#part-three").value = "0"+k;
                document.querySelector("#target").innerHTML = "+"+i+j+"0"+k+l;
            } else {
                document.querySelector("#part-three").value = k;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            };
        };
    };
    
    //permet de lancer la fonction dès que la page est lancée
    casino3();
    //permet d'entretenir la fonction si l'utilisateur clique sur le bouton "stop!"
    document.querySelector("#fix-part-three").addEventListener ("click", () => {
        c =! c;
        casino3();
    });

//CASE 4
    var l = 0 ;
    var d = true;

    //fonction pour faire tourner en boucle la deuxième case
    function casino4 () {

        if (d==true) {
            if (l < 10) {
                l++;
                document.querySelector("#part-four").value = "0"+l ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+"0"+l;
            } else if (l < 99) {
                l++;
                document.querySelector("#part-four").value = l ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            } else if (l = 99) {
                l = 0;
                document.querySelector("#part-four").value = l ;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            }; 
            setTimeout(casino4, 50); 
        };

        if (d==false) {
            if (l < 10) {
                document.querySelector("#part-four").value = "0"+l;
                document.querySelector("#target").innerHTML = "+"+i+j+k+"0"+l;
            } else {
                document.querySelector("#part-four").value = l;
                document.querySelector("#target").innerHTML = "+"+i+j+k+l;
            };
        };
    };
    
    //permet de lancer la fonction dès que la page est lancée
    casino4();
    //permet d'entretenir la fonction si l'utilisateur clique sur le bouton "stop!"
    document.querySelector("#fix-part-four").addEventListener ("click", () => {
        d =! d;
        casino4();
    }); 

})();
