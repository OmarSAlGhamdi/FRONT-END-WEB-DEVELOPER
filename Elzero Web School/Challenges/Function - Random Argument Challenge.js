/* 
Function - Random Argument Challenge 

================================

Create Function showDetails
Function Accept 3 Parameters [a, b , c]
Data Type for info IS :
-   String => Name
-   Number => Age
-   Boolean => Status 
Argument is Random 
Data Is Not Sorted Depend On Data Types
-   Use Ternary Conditional Operator 
*/

//name[i] === String ? document.write(name[i]) : ;
/* 
function showDetails(...data) {
  let username, age, status;
  for (let i = 0; i < data.length; i++) {
    typeof data[i] === "string" ? (username = data[i]) : username;
    typeof data[i] === "number" ? (age = data[i]) : age;
    typeof data[i] === "boolean" ? (status = data[i]) : status;
  }
  status ? (status = "Available") : (status = "Not Available");
  document.write(
    `<p>
      Hi, ${username}, Your Age is ${age}, You Are ${status} for hire
    </p>`
  );
}

showDetails("Omar", 31, true);
showDetails(40, "Ahmde", true);
showDetails(true, 27, "Ali");
showDetails(false, "Osama", 38); */

function showDetails(...data) {
  let userName, age, status;
  for (let i = 0; i < data.length; i++) {
    typeof data[i] === "string" ? (userName = data[i]) : userName;
    typeof data[i] === "number" ? (age = data[i]) : age;
    typeof data[i] === "boolean" ? (status = data[i]) : status;

    status ? (status = "Available") : (status = "Not Avilable");
    document.write(
      `<p>Hello, ${userName}. Your Age is ${age}. Your Are ${status} for hiring. </p>`
    );
  }
}

showDetails("Omar", 30, true);
showDetails("Ahmed", 35, false);
