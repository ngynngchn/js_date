/* Aufgabenstellung


In dieser Übung lernen wir die Date Methods
Zeige die Daten wie auf dem Screenshot an.
Verwende den Code aus dem Kommentarbereich, um den Wochentag und Monat anzuzeigen.
Nutze Google, wenn du nicht weiterkommst
Hinweis: du siehst hier das aktuelle Datum des Screenshots! Dein Ergebnis orientiert sich an dem aktuellen Datum.

 */
let monate = [
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

let wochenTag = [
	"Sonntag",
	"Montag",
	"Dienstag",
	"Mittwoch",
	"Donnerstag",
	"Freitag",
	"Samstag",
];

let date1 = new Date();

let year = date1.getFullYear();

let monthNum = date1.getMonth();

let day = date1.getDay();

let hour = date1.getHours();

let minute = date1.getMinutes();

let weekday = wochenTag[day];

let month = monate[monthNum];

let dates = [
	date1.toString(),
	year.toString(),
	monthNum.toString() + " Monat",
	day.toString() + " Tag",
	hour.toString() + " Stunde",
	minute + " Minute",
	weekday,
	month,
];

dates.forEach((date) => {
	document.write(date + "<br>");
});
