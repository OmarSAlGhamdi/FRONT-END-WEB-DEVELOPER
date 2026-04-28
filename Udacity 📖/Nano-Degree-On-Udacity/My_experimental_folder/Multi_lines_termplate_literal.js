let students = {
    name: "Ahmed",
    age: 15, 
    school: "saeed bin zaid middle school",
}

// in template literal the vs code will do as you if you put a newline
// he will make a new line without the need of /n as before
let message = ` the student name is ${students.name} , his age is ${students.age}, he study 
at ${students.school}`;

console.log(message);