// Assignment 4: Student List Organizer
// Define an array of students
var students = [
    {
        name: "Shaheer",
        isSenior: false,
        completedAssignment: true
    },
    {
        name: "Hussain",
        isSenior: true,
        completedAssignment: true
    },
    {
        name: "Maaz",
        isSenior: true,
        completedAssignment: false
    },
    {
        name: "Laraib",
        isSenior: true,
        completedAssignment: true
    }
];
// Print total number of students
console.log("\nTotal students: ", students);
// Function to find senior students with completed assignments
function findSeniorStudentsWithAssignments(students) {
    return students.filter(function (student) { return student.isSenior && student.completedAssignment; });
}
;
var seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("\nSenior students with completed assignments: ", seniorStudentsWithAssignments);
// function to remove students with incomplete assignments from the list
function removeStudentsWithIncompleteAssignments(students) {
    return students.filter(function (student) { return !(student.isSenior && !student.completedAssignment); });
}
;
var updatedClassList = removeStudentsWithIncompleteAssignments(students);
// Output
console.log("\nUpdated class list: ", updatedClassList);
