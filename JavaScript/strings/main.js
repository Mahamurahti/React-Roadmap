'use strict';

function print(data) {
    console.log("\n" + data + "\n");
}

// STRINGS

let name = "John Doe";
let hobbies = "Football";

// In order: double quotes, single quotes, backspace, from feed, new line, carriage return, hor. tab, ver. tab
let escapeCharacters = "\" \' \b \f \n \r \t \v";

print(name.charAt(0))

print(name.charCodeAt(0))

print(name.concat(hobbies))

print(name.indexOf("Doe"))

print(name.lastIndexOf("Doe"))

print(name.match("Doe"))

print(name.replace("Doe", "Moe"))

print(name.search("Doe"))

print(name.slice(0, 4))

print(name.split(" "))

print(name.substring(0, 4))

print(name.toUpperCase())

print(name.toLowerCase())