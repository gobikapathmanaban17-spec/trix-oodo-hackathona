
function login() {
 let username =
 document.getElementById("username").value;
 let password =
 document.getElementById("password").value;
 if(username === "admin" &&
 password === "1234") {
 window.location.href =
 "dashboard.html";
 } else {
 alert("Invalid Login");
 }
}
function addPatient() {
 let name =
 document.getElementById("pname").value;
 let age =
 document.getElementById("page").value;
 let disease =
 document.getElementById("disease").value;
 let patient = {
 name,
 age,
 disease
 };
 let patients =
 JSON.parse(localStorage.getItem("patients"))
 || [];
 patients.push(patient);
 localStorage.setItem(
 "patients",
 JSON.stringify(patients)
 );
 alert("Patient Added Successfully");
}
function showPatients() {
 let patients =
 JSON.parse(localStorage.getItem("patients"))
 || [];
 let output = "";
 patients.forEach((p) => {
 output += `
 <tr>
 <td>${p.name}</td>
 <td>${p.age}</td>
 <td>${p.disease}</td>
 </tr>`;
 });
 document.getElementById("patientData")
