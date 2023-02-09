/* JS Vertiefung
CodeFlow Übung lev1_5: Monatsname

Aufgabenstellung


Schreibe eine Funktion, die den Monatsnamen anhand eines bestimmten Datums ermittelt.
Verwende den Code aus dem Kommentar.
Nutze getMonth() um die Aufgabe zu lösen.
Überprüfe deine Funktion mit folgenden Argumenten in der Konsole:
console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli

1
 */

let list = [
	"Januar",
	"Februar",
	"März",
	"April",
	"Mai",
	"Juni",
	"Juli",
	"August",
	"September",
	"Oktober",
	"November",
	"Dezember",
];

function monatsName(str) {
	let date = new Date(str);
	return list[date.getMonth()];
}

console.log(monatsName("2001,3,4")); //März
console.log(monatsName("2019,12,24")); //Dezember
console.log(monatsName("1410,07,15")); //Juli
