// Variable & Datatypes

// var, let & const

//var:- var is function scoped. It is used to declare a variable that is limited to the scope of a function, or if defined outside of a function, to the global context.

//var age = 20;  //global scoped

// if(true){
//     console.log(age);  //output : 20
// }

// function myFunction(){
//    var age = 30;       //local scoped
//  console.log(age);  //output : 30
//}

//myFunction();
//console.log(age);  // Throws error age is not defined. Because age is local scoped.

//var x = 20;
//console.log(x); //output : 20
                                //Reassignment of variable
//x = "Balaram";
//console.log(x); //output : Balaram


//var x = 30;
//console.log(x); //output : 30 
                                //Redefination of variable
//var x = "Balaram";
//console.log(x); //output : Balaram

____________________________________________________________________________________________________________________________________________________________________________________

//let:- let is block scoped. It is used to declare a variable that is limited to the scope of a block statement, or expression on which it is used.

/* let x = 20;
console.log(x); //output : 20

{
    let a = 30;
    console.log(a); //output : 30
}

{
    let b = 30;
}
console.log(b); //Throws error b is not defined. Because b is block scoped. */


//Reassignment using let

/* let x = 20;
console.log(x); //output : 20

x = "Balaram";
console.log(x); //output : Balaram

//Redefination using let

let y = 30;

let y = "Balaram";
console.log(y); */ //Throws error Identifier 'y' has already been declared. Because let does not allow redefination of variable.

____________________________________________________________________________________________________________________________________________________________________________________

//const:- const is block scoped. It is used to declare a variable that cannot be reassigned or redeclared.

/* const a = 10;
console.log(a); //output : 10

a = 30;
console.log(a); //Throws error Assignment to constant variable. Because const does not allow reassignment of variable.

const b = 20;
console.log(b); //output : 20

const b = 30;
console.log(b); */ //Throws error Identifier 'b' has already been declared. Because const does not allow redefination of variable.

/* let x;

var y;

const z; */ //Throws error Missing initializer in const declaration. Because const requires initialization.

/* const person = {
    name: "Balaram",
    age: 20
};

console.log(person.name); //output : Balaram

//Reassignment | Modifying of object property:- It is allowed in const.

person.name = "Obito";
console.log(person.name); //output : Obito

person = {}; */ //Throws error Assignment to constant variable. Because const does not allow reassignment of variable.


/* const numbers = [1, 2, 3, 4, 5];
console.log(numbers); //output : [1, 2, 3, 4, 5]

//Reassignment | Modifying of array element:- It is allowed in const.

numbers.push(6);
console.log(numbers); //output : [1, 2, 3, 4, 5, 6]

numbers = []; */ //Throws error Assignment to constant variable. Because const does not allow reassignment of variable.
__________________________________________________________________________________________________________________________________________________________________________________

