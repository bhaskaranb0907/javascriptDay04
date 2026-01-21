let age =18;

if (age >= 18) {
    console.log
}

let day = "Monday";

switch (day) {
   case "monday":
       console.log("It's the start of the week.");
       break;
   default:
       console.log("It's a normal day.");
}

// the output will be "It's a normal day because the M in day is capital and the case has a lowercase m"

//Build an ATM Cash Withdrawal System

let money = 100;

if (money % 100 === 0) {
    console.log("Succesful")
} else {
    console.log("Failed")
}

// Build a Calculator with switch-case

let  operator ="/"
let num1 = 5;
let num2 = 6;
switch (operator) {
    case "+":
        console.log( num1 + num2)
        break;
    case "-":
        console.log( num1 - num2)
        break;
    case "*":
        console.log( num1 * num2)
        break;
     case "/":
        console.log( num1 / num2)
        break;
    default:
        break;
}


//Inox

let ageAgain = 66;

if(ageAgain < 18){
    console.log('your ticket is $3')
} else if (ageAgain < 60) {
    console.log('Your ticket is $10')
} else if (ageAgain > 60) {
    console.log('your ticktes is $8')
}


let month = "March"; 
let sign;

switch (month) {
  case "March":
  case "April":
    sign = "Aries";
    break;

  case "May":
    sign = "Taurus";
    break;

  case "June":
    sign = "Gemini";
    break;

  case "July":
    sign = "Cancer";
    break;

  case "August":
    sign = "Leo";
    break;

  case "September":
    sign = "Virgo";
    break;

  case "October":
    sign = "Libra";
    break;

  case "November":
    sign = "Scorpio";
    break;

  case "December":
    sign = "Sagittarius";
    break;

  case "January":
    sign = "Capricorn";
    break;

  case "February":
    sign = "Aquarius";
    break;

  default:
    sign = "Invalid month";
}

console.log(sign);


