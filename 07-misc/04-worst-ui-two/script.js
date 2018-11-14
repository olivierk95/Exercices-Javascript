/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

	var partOne = document.querySelector("#part-one");
	var data1 = partOne.getAttribute("data-min");

	var partTwo = document.querySelector("#part-two");
	var data2 = partTwo.getAttribute("data-min");

	var partThree = document.querySelector("#part-three");
	var data3 = partThree.getAttribute("data-min");

	var partFour = document.querySelector("#part-four");
	var data4 = partFour.getAttribute("data-min");


    partOne.addEventListener("click", ()=> {
   
    	if (partOne.getAttribute("data-min") <= data1 && data1 < partOne.getAttribute("data-max")) {
    		data1++;  
    	} else if (data1 = partOne.getAttribute("data-max")) {
			data1 = partOne.getAttribute("data-min");  
    	}
    	partOne.innerHTML = data1;

    	document.querySelector("#target").innerHTML = "+"+partOne.innerHTML+partTwo.innerHTML+partThree.innerHTML+partFour.innerHTML;
	
    });


    partTwo.addEventListener("click", ()=> {
   
    	if (partTwo.getAttribute("data-min") <= data2 && data2 < partTwo.getAttribute("data-max")) {
    		data2++;  
    	} else if (data2 = partTwo.getAttribute("data-max")) {
			data2 = partTwo.getAttribute("data-min");  
    	}

    	partTwo.innerHTML = data2;

    	if (data2 <10) {
    		partTwo.innerHTML = "0"+data2;
    	};

       	document.querySelector("#target").innerHTML = "+"+partOne.innerHTML+partTwo.innerHTML+partThree.innerHTML+partFour.innerHTML;

    });


    partThree.addEventListener("click", ()=> {
   
    	if (partThree.getAttribute("data-min") <= data3 && data3 < partThree.getAttribute("data-max")) {
    		data3++;  
    	} else if (data3 = partThree.getAttribute("data-max")) {
			data3 = partThree.getAttribute("data-min");  
    	};

    	partThree.innerHTML = data3;

    	if (data3 <10) {
    		partThree.innerHTML = "0"+data3;
    	};

    	document.querySelector("#target").innerHTML = "+"+partOne.innerHTML+partTwo.innerHTML+partThree.innerHTML+partFour.innerHTML;
	
    });


    partFour.addEventListener("click", ()=> {
   
    	if (partFour.getAttribute("data-min") <= data4 && data4 < partFour.getAttribute("data-max")) {
    		data4++;  
    	} else if (data4 = partFour.getAttribute("data-max")) {
			data4 = partFour.getAttribute("data-min");  
    	}

    	partFour.innerHTML = data4;

    	if (data4 <10) {
    		partFour.innerHTML = "0"+data4;
    	};

    	document.querySelector("#target").innerHTML = "+"+partOne.innerHTML+partTwo.innerHTML+partThree.innerHTML+partFour.innerHTML;
	
    });


})();
