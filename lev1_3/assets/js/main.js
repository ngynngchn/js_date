/* JS Vertiefung
CodeFlow Übung lev1_3: SET Date Methods

Aufgabenstellung


In dieser Übung lernen wir SET Date Methods.
Zeige die Daten wie auf dem Screenshot auf und nutze die Set Date Methode.
In der letzten Zeile wurden 30 Tage auf das damals aktuelle Datum addiert.
Denkt dran, dass euer Ergebnis sich aufgrund des Datums von dem Screenshot unterscheiden wird.
Nutzt Google, falls ihr nicht weiterkommt. :) 


 */

let date1 = new Date();

date1.setFullYear(2222);
date1.setMonth(9);
date1.setDate(23);
date1.setHours(13);
date1.setMinutes(25);
date1.setSeconds(11);

document.write(date1.toString() + "<br>");

let date2 = date1;

date2.setFullYear(2123);
date2.setMonth(1);
date2.setDate(24);

document.write(date2.toString() + "<br>");

let date3 = date2;
date3.setMonth(2);

document.write(date3.toString() + "<br>");
let date4 = date3;
date4.setDate(3);
document.write(date4.toString() + "<br>");

let date5 = date3;
date5.setFullYear(2019);
date5.setDate(22);
date5.setMonth(10);
document.write(date5.toString() + "<br>");
