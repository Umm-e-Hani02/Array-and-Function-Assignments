// Assignment 4: Student List Organizer

// Define the Student interface
interface Student {
    name: string,
    isSenior: boolean,
    completedAssignment: boolean
}

// Define an array of students
let students: Student[] = [
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
]

// Print total number of students
console.log("\nTotal students: ", students);

// Function to find senior students with completed assignments
function findSeniorStudentsWithAssignments (students: Student[]): Student[] {
    return students.filter(student=> student.isSenior && student.completedAssignment);
};
let seniorStudentsWithAssignments = findSeniorStudentsWithAssignments(students);
console.log("\nSenior students with completed assignments: ",seniorStudentsWithAssignments);

// function to remove students with incomplete assignments from the list
function removeStudentsWithIncompleteAssignments(students: Student[]): Student[] {
    return students.filter(student=> !(student.isSenior && !student.completedAssignment))
};
let updatedClassList = removeStudentsWithIncompleteAssignments(students);
// Output
console.log("\nUpdated class list: ", updatedClassList);