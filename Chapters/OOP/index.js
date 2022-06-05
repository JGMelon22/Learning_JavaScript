let student = {
    firstName: "João",
    lastName: "Melão",
    age: 20,
    height: 1.74,

    studentInfo: function(){
        return this.firstName + " " + this.lastName;
    }

};

var studentObj = [];

function printStudentObj() {
    studentObj.push(
        `Full name: ${student.firstName} ${student.lastName}\n`,
        `Age: ${student.age}\n`,
        `Height: ${student.height}`,
    );
    return studentObj.join("");
};

console.log(printStudentObj());

student.firstName = "Pedro";
student.lastName = "Enrique";

console.log(`\nFull Name after changing the name: ${student.firstName} ${student.lastName}`);

// IS possible to increment a value too
student.age++;

console.log(`Student age after increment: ${student.age}`);

// Working with a function inside a object 
console.log(`StudentInfo inside Object: ${student.studentInfo()}`);