'use strict';

// OPERATORS

function print(data) {
    console.log(data + "\n");
}

// BASIC

// Addition
print(10 + 10)

// Substraction
print(10 - 20)

// Multiplication
print(10 * 10)

// Division
print(10 / 2)

// Grouping
print(10 * (20 + 20))

// Modulus
print(11 % 2)

// Increment
let data = 100;
print(data++)

// Decremenmt
data = 100
print(data--)

// COMPARISON

// Equal to (value)
print("100" == 100)

// Equal to (value and type)
print("100" === 100)

// Not equal to (value)
print("100" != 100)

// Not equal to (value and type)
print("100" !== 100)

// Greater than
print(100 > 99)

// Less than
print(100 < 99)

// Greater than or equal to
print(100 >= 100)

// Less than or equal to
print(100 <= 99)

// Ternary
print(100 === "100" ? "It is true" : "It is not true")

// LOGICAL

// And
print(100 && 100)

// Or
print(100 || 100)

// Not
print(!100)