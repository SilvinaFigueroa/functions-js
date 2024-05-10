
// Part 1: Thinking Functionally
// Take an array of numbers and return the sum.

let numbers = [1, 2, 3]

function sumNum(num) {
    let sum = 0;
    num.forEach(num => {
        sum += num;
    });

    return sum;
}
console.log(`Sum : ${sumNum(numbers)}`);


// Take an array of numbers and return the average.

function numAvg(num) {
    return sumNum(num) / num.length;
}

console.log(`Average : ${numAvg(numbers)}`);


// Take an array of strings and return the longest string.

let strs = ["You", "have", "brains", "in", "yourrrrrrrrrrrrrrrr", "head", "longeeeest", "You", "have", "feet", "in", "your", "shoes"];

function longestStr(strs){
    let theLongest = "";
    for (const str in strs){
        if (strs[str].length > theLongest.length)
            theLongest = strs[str];
    }
    return theLongest;
}

console.log(`The longest String on the array is: ${longestStr(strs)}`)


// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

let strsLonger = ['say', 'hello', 'in', 'the', 'morning'];
let number = 3;

function strLongerThan(strs, number){
    let longestThan = number;
    let theLongestThan = [];

    for (const str in strs){
        if (strs[str].length > longestThan)
            theLongestThan.push(strs[str]);
    }
    return theLongestThan;
}

console.log(`The strings longes than ${number} are: ${strLongerThan(strsLonger, number)}`)

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

let num = 10;

function printNum(num){
    num --; // Since we need to print only the numbers in "between", we start decreasing n. 
    if (num > 1){  
        console.log(num);
       return printNum(num); // calling the function recurservely 
    }
}

printNum(num);