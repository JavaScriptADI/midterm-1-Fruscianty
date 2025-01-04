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

//6th
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true; 
  }
  return false; 
}

const year = parseInt(prompt("Enter a year to check:")); 
if (isLeapYear(year)) {
  console.log(`${year} is a leap year.`);
} else {
  console.log(`${year} is not a leap year.`);
}

//7th
for (let year = 2014; year <= 2050; year++) {
  const date = new Date(year, 0, 1); 
  if (date.getDay() === 0) { 
    console.log(`1st January ${year} is a Sunday.`);
  }
}

//9th
function daysUntilChristmas() {
  const today = new Date(); 
  const currentYear = today.getFullYear();
  const christmas = new Date(currentYear, 11, 25);

  if (today > christmas) {
    christmas.setFullYear(currentYear + 1); 
  }

  const oneDay = 24 * 60 * 60 * 1000; 
  const daysLeft = Math.ceil((christmas - today) / oneDay);

  console.log(`There are ${daysLeft} days left until Christmas!`);
}

daysUntilChristmas();

//10th
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));

if (isNaN(num1) || isNaN(num2)) {
  console.log("Please enter valid numbers.");
} else {
  const multiplication = num1 * num2;
  const division = num2 !== 0 ? num1 / num2 : "Division by zero is not allowed.";

  console.log(`Multiplication: ${multiplication}`);
  console.log(`Division: ${division}`);
}

//11th
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

const choice = prompt(
  "Enter 'C' to convert Celsius to Fahrenheit or 'F' to convert Fahrenheit to Celsius:"
).toUpperCase();

if (choice === "C") {
  const celsius = parseFloat(prompt("Enter the temperature in Celsius:"));
  if (!isNaN(celsius)) {
    const fahrenheit = celsiusToFahrenheit(celsius);
    console.log(`${celsius}°C is ${fahrenheit}°F`);
  } else {
    console.log("Please enter a valid number.");
  }
} else if (choice === "F") {
  const fahrenheit = parseFloat(prompt("Enter the temperature in Fahrenheit:"));
  if (!isNaN(fahrenheit)) {
    const celsius = fahrenheitToCelsius(fahrenheit);
    console.log(`${fahrenheit}°F is ${celsius}°C`);
  } else {
    console.log("Please enter a valid number.");
  }
} else {
  console.log("Invalid choice. Please enter 'C' or 'F'.");
}

//12th
console.log(window.location.href);


