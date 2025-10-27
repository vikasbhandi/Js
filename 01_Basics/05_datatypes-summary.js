//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3
// https://www.w3schools.com/js/js_typeof.asp

//Primitive (Stack),Non Primitive (Heap)
let Username = "Vikas"
let Second = Username
Second = "Bhandi"
console.log(Username);
console.log(Second);

const User ={
    email:"Abc@gmail.com"
}
let userr = User
userr.email = "Vikas@gmqil.com"
console.log(User.email)
