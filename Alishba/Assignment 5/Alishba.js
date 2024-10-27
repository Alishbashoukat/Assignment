let num1 = 5;
let num2 = 10;
let sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

let subtraction = num1 - num2;
document.write("Subtraction: " + subtraction + "<br>");

let multiplication = num1 * num2;
document.write("Multiplication: " + multiplication + "<br>");

let division = num1 / num2;
document.write("Division: " + division + "<br>");

let modulus = num1 % num2;
document.write("Modulus: " + modulus + "<br>");

let variable;
document.write("Value after variable declaration is: " + variable + "<br>");

variable = 5;
document.write("Initial value: " + variable + "<br>");

variable++;
document.write("Value after increment is: " + variable + "<br>");

variable += 7;
document.write("Value after addition is: " + variable + "<br>");

variable--;
document.write("Value after decrement is: " + variable + "<br>");

let remainder = variable % 3;
document.write("The remainder is : " + remainder + "<br>");

let ticketPrice = 600;
let cost = ticketPrice * 5;
document.write("Cost of buying 5 tickets: " + cost + "<br>");

let tableNum = 4;
for (let i = 1; i <= 10; i++) {
    document.write(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

let celsius = 25;
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

fahrenheit = 70;
celsius = (fahrenheit - 32) * 5/9;
document.write(fahrenheit + "°F is " + celsius + "°C<br>");

let price1 = 650;
let price2 = 100;
let quantity1 = 3;
let quantity2 = 7;
let shippingCharges = 100;
let totalCost = (price1 * quantity1) + (price2 * quantity2) + shippingCharges;
document.write("Total cost: " + totalCost + "<br>");

let totalMarks = 980;
let marksObtained = 804;
let percentage = (marksObtained / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

let dollars = 10;
let riyals = 25;
let pkr = (dollars * 104.80) + (riyals * 28);
document.write("Total currency in PKR: " + pkr + "<br>");

let num = 5;
let result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

let currentYear = 2023;
let birthYear = 1990;
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old.<br>");

let radius = 20;
let circumference = 2 * 3.142 * radius;
let area = 3.142 * radius * radius;
document.write("The circumference is " + circumference + "<br>");
document.write("The area is " + area + "<br>");

let favoriteSnack = "chocolate";
let currentAge = 25;
let maxAge = 80;
let amountPerDay = 3;
let totalSnacks = (maxAge - currentAge) * amountPerDay * 365;
document.write("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + "<br>");
