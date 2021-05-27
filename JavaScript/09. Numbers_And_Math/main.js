const NUMBER = 12;
const NEGNUMBER = -12;
const DECIMAL = 12.123456789;

function print(data){
    console.log("\n" + data + "\n")
}

print("ToExponential: " + NUMBER.toExponential(2))

print("ToFixed: " + DECIMAL.toFixed(2))

print("Pi: " + Math.PI)

print("Abs: " + Math.abs(NEGNUMBER))

print("Ceiling: " + Math.ceil(DECIMAL))

print("Floor: " + Math.floor(DECIMAL))

print("Max: " + Math.max(DECIMAL, NEGNUMBER, NUMBER))

print("Min: " + Math.min(DECIMAL, NEGNUMBER, NUMBER))

print("Pow: " + Math.pow(DECIMAL, NUMBER))

print("Random: " + Math.random())