// Assignment 2:Manipulating an Array: Rearranging Words
// Start with scrambled array
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
// Rearrange elements as desired
var reArrangeArray = [
    scrambledArray[7],
    scrambledArray[4],
    scrambledArray[5],
    scrambledArray[0],
    scrambledArray[1],
    scrambledArray[6],
];
// Combine elements back into a single string
var result = reArrangeArray.join(" ");
// Output
console.log("\n".concat(result));
