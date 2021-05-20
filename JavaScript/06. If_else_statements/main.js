'use strict';

let person = {
    name: "John",
    isWalking: true
}

// IF ELSE STATEMENTS
function main(){

    if(person.name === "John"){
        console.log(person.name)
        if(person.isWalking){
            console.log("is walking.")
        }else{
            console.log("is standing still.")
        }
    }else {
        console.log("Stranger")
        if(person.isWalking){
            console.log("is walking.")
        }else{
            console.log("is standing still.")
        }
    }
}

main();

// SWITCH
function main2(){
    switch (person.name){
        case "John":
            console.log(person.name)
            break;
        case "Anastasia":
            console.log("Anastasia")
            break;
        default:
            console.log("Stranger")
            break;
    }
}

main2();