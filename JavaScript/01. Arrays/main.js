'use strict';

// ARRAYS

function print(data) {
    console.log(data + "\n");
}

// Array declaring
let months = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];
print("Months: " + months);

// Add month to the end of array
months.push("imaginary month");
print("Added new month to the end: " + months);

// Get the index of the newly added month
print("Index of the newly added month: " + months.indexOf("imaginary month"));

// Join the array elements into a string (parameter is the separator)
print("Joined months: " + months.join("- + -"));

// Remove the last element from the array
months.pop();
print("Last month deleted: " + months);

// Remove the first element from the array
months.shift();
print("First month deleted: " + months);

// Add month to the front of the array
months.unshift("January");
print("Added new month to the front: " + months);

// Reverse the sorting of the array
print("Months reversed: " + months.reverse())

// Reverse again to gain the original array
print("Months reversed again: " + months.reverse())

// Sort the months alphabetically
let sortedMonths = [...months];
print("Months alphabetically: " + sortedMonths.sort())

// Cut a piece away from the array (doesn't delete)
let middleMonths = months.slice(4, 7);
print("Middle months: " + middleMonths)

// Delete a piece away from the array (deletes)
months.splice(4, 3);
print("The rest of the months: " + months)

// Add deleted months back
months.splice(months.length / 2, 0, ...middleMonths)
print("Deleted months added back: " + months)