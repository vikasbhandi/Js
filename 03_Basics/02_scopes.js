//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}



addTwo(5)
const addTwo = function(num){
    return num + 2
}

//Hoisting
//Variable Hoisting with var:
console.log(aa); // Output: undefined
var aa = 5;
console.log(aa); // Output: 5
//Variable Hoisting with let and const:
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10;
//Function Hoisting:
greet(); // Output: Hello!
function greet() {
    console.log("Hello!");
}
//Function Expression Hoisting:
console.log(sayHi); // Output: undefined
var sayHi = function() {
    console.log("Hi!");
};
sayHi(); // Output: Hi!
//Class Hoisting:
const obj = new MyClass(); // ReferenceError: Cannot access 'MyClass' before initialization
class MyClass {
    constructor() {
        this.name = "Example";
    }
}

// How to Avoid Issues with Hoisting
// Use let and const instead of var to avoid unintentional bugs caused by hoisting.
// Declare variables and functions at the top of their scope to make the code more predictable and readable.
// Be cautious with function expressions and arrow functions, as they are not hoisted like function declarations.