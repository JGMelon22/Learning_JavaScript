// Used package: cli-color
// Develop a program which judges if a student is approved or not.
// For it, use an student object and store his grades inside 
// an array of 2 elements;
// The school avg mean is 6;
// Display grades like:
// Green: 8 < 10;
// Yellow: 6 < 7.9
// Red: 0 <  5.9
var clc = require("cli-color");
var printStudents = [];

let student = {
    firstName: "João Gabriel",
    lastName: "V. Melão",
    age: 20,
    enrollment: 20201102196,
    gradeOne: 9.8,
    gradeTwo: 7.25,

    finalGrade: function () {
        return (this.gradeOne + this.gradeTwo) / 2;
    },

    isApproved: function () {

        if (this.finalGrade() <= 10 && this.finalGrade() >= 8) {
            return clc.green("Approved");
        }

        else if (this.finalGrade() <= 7.9 && this.finalGrade() >= 6) {
            return clc.yellow("Approved");
        }

        else {
            return clc.red("Flunked");
        }
    }
};

function studentInfoPrinter() {
    printStudents.push(
        `Full Name: ${student.firstName} ${student.lastName}\n`,
        `Age: ${student.age}\n`,
        `Enrollment Number: ${student.enrollment}\n`,
        `Grade One: ${student.gradeOne}\n`,
        `Grade Two: ${student.gradeTwo}\n`,
        `Final grade and status: ${parseFloat(student.finalGrade().toFixed(2))}\n`,
        `Is approved: ${student.isApproved()}`
    );

    return printStudents.join("");
};

console.log(studentInfoPrinter());