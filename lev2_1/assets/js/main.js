/* Aufgabenstellung


Schreibe eine Funktion, die das aktuelle Datum anzeigt.
Erwartete Ergebnisse: tt-mm-jjjj oder tt/mm/jjjj. (Tag, Monat, Jahr)
Nutze Befehle:
getDate(), getMonth(), getFullYear()
Ternary Operator 
getElementById
Lass Dir das Ergebnis im HTML-Dokument anzeigen.
 */

let date = document.getElementById("date");

const getTodaysDate = () => {
	let today = new Date();
	let day = today.getDate();
	let month = today.getMonth() + 1;
	month < 10 ? (month = "0" + month) : month;
	let year = today.getFullYear();

	date.innerHTML = `${day}-${month}-${year}`;
};

getTodaysDate();
