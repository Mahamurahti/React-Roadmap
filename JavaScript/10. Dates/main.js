const TODAY = new Date(); // Current date

function print(data){
    console.log("\n" + data + "\n")
}

print("Year: " + TODAY.getFullYear())

print("Month: " + (TODAY.getMonth() + 1)) // Returns 0-11

print("Date: " + TODAY.getDate())

print("Day: " + TODAY.getDay()) // Day of the week

print("Time: " + TODAY.getTime()) // Milliseconds since January 1, 1970

print("Hours: " + TODAY.getHours())

print("Milliseconds: " + TODAY.getMilliseconds())

print("Seconds: " + TODAY.getSeconds())

print("Minutes: " + TODAY.getMinutes())

// There is also setters for each of these methods to set the Date