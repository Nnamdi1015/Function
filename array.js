// methods are functions assigned or executed by a particular object
// objects(data type) are stored in pairs (property and value)
//array methods
// Array.push adds an element to the end of an array (array method)
// Array.length returns the number of elements in an array (array property)
// Array.splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (array method)
// Array.forEach executes a provided function once for each array element (array method)
// modifying arrays



let name = ["amadi", "precious", "samuel", "john"];
console.log(name[2]); 

console.log(name[name.length -1]); // to access the last element of an array

name.push("peter"); // to add an element to the end of an array
console.log(name);


//Accessing and iterating methods
// Array.indexOf returns the index of a specified element in an array (array method)
// Array.forEach executes a provided function once for each array element (array method)
//map() creates a new array with functions results
//concat() merges two or more arrays
//reduce() executes a reducer function on each element of the array, resulting in a single output value
//includes() checks for value presence

// Array.push adds an element to the end of an array (array method)
let cars = ["bmw", "audi", "mercedes", "toyota"];
cars.push("honda", "lexus");
console.log(cars);

// Array.pop removes the last element from an array (array method)
const removedCar = cars.pop();
console.log(cars);
console.log('removedCars');


// Array.shift removes the first element from an array (array method)
let removedCar1 = cars.shift();
console.log(cars);
console.log(removedCar1);

// Array.unshift adds an element to the beginning of an array (array method)
cars.unshift("ferrari");
console.log(cars);

// Array.slice returns a shallow copy of a portion of an array into a new array object (array method)
const numbs = [1, 2, 3, 4, 5, 6, 7, 8 ];
const slicedNumbs = numbs.slice(1, 4);
console.log(slicedNumbs);
console.log(numbs); 

// Array.splice changes the contents of an array by removing or replacing existing elements and/or adding new elements in place (array method)
const splicedNumbs = numbs.splice(0, 3);
console.log(splicedNumbs);
console.log(numbs);


//sort () arrange elements in an arrayorder
const integers = [3, 7, 4, 45, 0, 23, 48, 2, 9];
integers.sort((a, b) => a - b); 
console.log(integers);

// reverse() method reverses the order of the elements in an array
integers.reverse();
console.log(integers);

//concat() merges two or more arrays
const webStudents = ["charles", "ifeanyi", "austine", "victor", "frank"];
const designStudents = ["nancy", "faruk", "bob", "nk"];
const allStudents = webStudents.concat(designStudents);
console.log(allStudents);


//includes() checks for value presence -checks if an array contains a specified element returning true or false 
console.log(allStudents.includes("silas"));
console.log(allStudents.includes("bob"));

//find() method returns the value of the first element that passes a test or satisfies a provided testing function.
//find(callback function)
const found1 = allStudents.find((element) => element === "victor");
console.log(found1);

const found2 = integers.find((element) => element > 40);
console.log(found2);


// Array.forEach executes a provided function once for each array element (array method)
// forEach(callback function) forEach ((element) => { ... })
const numbers = [1, 3, 5, 7, 9];
numbers.forEach((num) => {
    console.log(num * 3);
}
);


//map() creates a new array with functions results
const evenNumbers = [2, 4, 6, 8, 10];
const multiplyby2 = evenNumbers.map((elem) => elem * 2);
console.log(multiplyby2);   //[4, 8, 12, 16, 20]
console.log(evenNumbers);  //[2, 4, 6, 8, 10]

//filter() creates a new array with all elements that pass the test implemented by the provided function
// const filterEvenNumbers = reverseIntegers.filter((elem) => elem  % 2 === 0);
// console.log(filterEvenNumbers);


const filterStudents = allStudents.filter((elem) => elem.startsWith("b"));
console.log(filterStudents);

const longStudentsNames = allStudents.filter((name) => name.length > 3);
console.log(longStudentsNames);

const flterBySearch = allStudents.filter((word) => word.toLocaleLowerCase());
console.log(flterBySearch);


