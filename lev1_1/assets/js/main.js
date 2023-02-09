/* Aufgabenstellung


In dieser Übung werden wir Date() lernen.
Stelle die folgenden Daten im HTML-Dokument mit Hilfe des Befehls new Date() dar.

Speichere die Werte in einer Variable (date1, date2, …)
Nutze innerHTML um das Ergebnis darzustellen.
Teste dann die Werte:
new Date("September 2, 2019 09:00:00")
new Date(0)
new Date(31556908800)
new Date(86400000)
 */

date1 = new Date("September 2, 2019 09:00:00");
date2 = new Date(0);
date3 = new Date(31556908800);
date4 = new Date(86400000);

let dates = [date1, date2, date3, date4];

dates.forEach((date) => {
	document.write(date.toString() + "<br>");
});
