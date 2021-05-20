'use strict';

// LOOPS

function print(data){
    console.log("\n" + data + "\n");
}

let names = ["Laura", "Micky", "Sebastian", "Anastasia", "Michael", "Gordon", "Roderick", "Saul", "Gabriella"]
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 10,
    isOfLegalAge: false
}

// For
print("For loop")
for(let i = 0; i <= names.length - 1; i++){
    console.log(names[i])
}

// For / in
print("For in loop")
for (let key in person){
    console.log(person[key])
}

// For / of
print("For of loop")
for (let name of names){
    console.log(name)
}

// While
print("While loop")
let number = 0;
while(number !== names.length){
    console.log(names[number])
    number++;
}

// Do / while
print("Do while loop")
let number2 = 0;
do{
    console.log(names[number2])
    number2++;
}while (number2 !== names.length)

// Break
print("Break")
for (let name of names){
    if(name === "Anastasia"){
        break;
    }else {
        console.log(name)
    }
}

// Continue
print("Continue")
for (let name of names){
    if(name === "Anastasia"){
        continue;
    }else {
        console.log(name)
    }
}