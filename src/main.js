//1st 
let currentDay = "Tuesday";
let currentTime = "10 PM : 30 : 38";

console.log(`Today is: ${currentDay}. Current time is: ${currentTime} `);

//2nd
window.print();

//3rd
let month = 12;
let day = 27;
let year = 2024;

console.log(`${month}/${day}/${year}`);

//4th
const a = 5;
const b = 6;
const c = 7;

//formula of P = (a+b+c)/2;
//formula of S = √(P*(P-a)(P-b)(P-c));

const P = (a+b+c)/2;
const S = Math.sqrt(P*(P-a)*(P-b)*(P-c));

console.log(S);

//5th
const str = 'w3resource';
const arr = [];

for (let i = str.length - 1; i >= 0; i--) {
  arr.push(str[i]);
}

const newStr = arr.join('');
console.log(newStr);

//8th 
const game = function () {
  const p = prompt('Insert a number between 1 and 10:');
  const answer = Math.trunc(Math.random() * 10) + 1; 
  Number(p) === answer
    ? console.log('Good Work!')
    : console.log(`Not matched. The correct number was ${answer}.`);
};

game();

