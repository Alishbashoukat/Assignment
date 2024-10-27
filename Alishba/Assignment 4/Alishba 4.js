let var1, var2, var3;

let legal1 = "variable1";
let legal2 = "_variable";
let legal3 = "$variable";
let legal4 = "variableName";
let legal5 = "myVariable";

let illegal1 = "1variable";
let illegal2 = "-variable";
let illegal3 = "var 1";
let illegal4 = "my-variable";
let illegal5 = "var@name";

document.write("<h1>Rules for naming JS variables</h1>");
document.write("Variable names can only contain letters, numbers, $, and _. For example: $my_1stVariable.<br>");
document.write("Variables must begin with a letter, $, or _. For example: $name, _name, or name.<br>");
document.write("Variable names are case sensitive.<br>");
document.write("Variable names should not be JS keywords.");
