//1st 
let currentDay = "Tuesday";
let currentTime = "10 PM : 30 : 38";

console.log(`Today is: ${currentDay}. Current time is: ${currentTime} `);

//2nd
window.print();

//3rd
function getCurrentDate() {
  const now = new Date(); 

  const day = String(now.getDate()).padStart(2, '0'); 
  const month = String(now.getMonth() + 1).padStart(2, '0'); 
  const year = now.getFullYear(); 

  const format1 = `${month}-${day}-${year}`;
  const format2 = `${month}/${day}/${year}`;
  const format3 = `${day}-${month}-${year}`;
  const format4 = `${day}/${month}/${year}`;

  console.log("Format 1 (mm-dd-yyyy):", format1);
  console.log("Format 2 (mm/dd/yyyy):", format2);
  console.log("Format 3 (dd-mm-yyyy):", format3);
  console.log("Format 4 (dd/mm/yyyy):", format4);
}

getCurrentDate();

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

