// function decleration Example
function greetCustomer(customerName, bankName) {
    console.log(`merry christmas from ${customerName}, ${bankName}`);
}
greetCustomer("John", 'First Bank');
greetCustomer("Samuel", 'GT Bank');
greetCustomer("Peter", 'Access Bank');
greetCustomer("Amadi", 'UBA Bank');





function sum(num1, num2) {
    return num1 + num2;
    console.log("The sum of " + num1 + num2);
    num1 + num2;
}
console.log(sum(5, 4));




function convertUsdToAud (number1, number2)   {
return(number1 * number2);
}
console.log( convertUsdToAud(3000, 1.5));

function convertUsdToAud(dollar){
    return dollar * 1.5;
}
console.log(convertUsdToAud(3000));


// function expression
let showText = function() {
    console.log("Hello customer !");
    return "Hello customer !";
}
console.log(showText());

// showText() is different from showText.

 let newText = showText; // it is storing the function  showText in a  variable called newText
 console.log(newText());
 let oldText = newText; // execute  the function showText()and assign the return value a variable called oldText
    console.log(newText());
    console.log(oldText);