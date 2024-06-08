// Assignment 1: Building Your Friend List
// Step 1: Define the people Object
var people = {
    friends: []
};
// Step 2: Create three friends objects
var friend1 = {
    firstName: "Hafsa",
    lastName: "Tahir",
    id: 1
};
var friend2 = {
    firstName: "Tayyaba",
    lastName: "Amir",
    id: 2
};
var friend3 = {
    firstName: "Marwa",
    lastName: "Irshad",
    id: 3
};
// Step 3: Adding friend objects to friends array within the people object
people.friends.push(friend1, friend2, friend3);
// Step 4: Output the entire people object to the console
console.log(people);
