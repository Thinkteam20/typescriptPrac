// const message: string = "hello world!";
// console.log(message);

let count = 0; // 숫자 
count += 1;
// count = "suddenly string";
// error;

// adding Type on JS //

// string && string arr
const message: string = " hello world! ";
console.log(message)
const messages: string[] = ["hello","world!"];
console.log(messages)
// boolean
const done: boolean = true; 
console.log(done)
// number && number arr 
const number: number = 1;
console.log(number)
const numbers: number[] = [1,2,3]
console.log(numbers)

// can not assign number type on string arr 
// messages.push(1);


// can be either string or undefined
let mightBeUndefined: string | undefined = undefined;
console.log(mightBeUndefined);

// number 일수도 있고 null 일수도 있음
let nullableNumber: number | null = null;
console.log(nullableNumber)

// red, orange, yellow 중 하나임
// let color: 'red' | 'orange' | 'yellow' = "red";
let color: 'red' | 'orange' | 'yellow' = 'red'; // red, orange, yellow 중 하나임
color = "yellow"

console.log(color)