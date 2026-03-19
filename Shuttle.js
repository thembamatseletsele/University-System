function showSchedule(){

let departure = document.getElementById("departure").value.trim().toLowerCase();
let destination = document.getElementById("destination").value.trim().toLowerCase();

let scheduleDiv = document.getElementById("schedule");

if(departure === "" || destination === ""){
alert("Please enter both departure and destination");
return;
}

/* Valid routes */

if(
(departure === "bellville campus" && destination === "dgh") ||
(departure === "dgh" && destination === "bellville campus")
){

let table = `
<h2>${departure.toUpperCase()} → ${destination.toUpperCase()}</h2>

<table>
<tr>
<th>Departure</th>
<th>Arrival</th>
</tr>
`;

for(let hour = 7; hour <= 22; hour++){

let dep = hour.toString().padStart(2,'0') + ":00";
let arr = hour.toString().padStart(2,'0') + ":30";

table += `
<tr>
<td>${dep}</td>
<td>${arr}</td>
</tr>
`;
}

table += "</table>";

scheduleDiv.innerHTML = table;

}else{

scheduleDiv.innerHTML = `
<p style="color:red; font-weight:bold;">
Route not available. Please enter:
<br>
Bellville Campus → DGH
<br>
or
<br>
DGH → Bellville Campus
</p>
`;

}

}