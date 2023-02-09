/* Aufgabenstellung


Schreibe eine Funktion, um AM und PM zu erhalten.
Wenn die Uhrzeit kleiner als 12 Uhr ist, wird AM angezeigt.
Wenn die Uhrzeit größer als 12 Uhr ist, wird PM angezeigt.
Die Funktion enthält:
Ein Parameter
Ternary Operator oder if
getHours()
Überprüfe deine Funktion in der Konsole.
Teste sie mit folgenden Argumenten:
date1 = new Date(1999, 10, 5, 15) //PM
date2 = new Date()
date3 = new Date(2019, 12, 3, 12) //PM
date4 = new Date(2000, 1, 1, 11) //AM
 */

let date1 = new Date(1999, 10, 5, 15); //PM
let date2 = new Date();
let date3 = new Date(2019, 12, 3, 12); //PM
let date4 = new Date(2000, 1, 1, 11); //AM

function getTime(date) {
	if (date.getHours() <= 12) {
		return "AM";
	} else {
		return "PM";
	}
}

getTime(date1);
console.log("💡 ~ getTime(date1)", getTime(date1));
getTime(date2);
console.log("💡 ~ getTime(date1)", getTime(date2));
getTime(date3);
console.log("💡 ~ getTime(date1)", getTime(date3));
getTime(date4);
console.log("💡 ~ getTime(date1)", getTime(date4));
