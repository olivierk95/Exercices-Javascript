/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //créer la table 
    var tbl = document.createElement("table");

    //créer toutes les cellules (lignes(row) et colonnes(column))
    for (var i = 0; i < 10; i++) {

    	var row = document.createElement("tr");

    	for (var j = 0; j < 10; j++) {

    		var cell = document.createElement("td");
    		var texte = document.createTextNode((i+1)*(j+1));
    		cell.appendChild(texte);
    		row.appendChild(cell);

    	};

    	tbl.appendChild(row);
    };

    document.querySelector("#target").appendChild(tbl);

})();
