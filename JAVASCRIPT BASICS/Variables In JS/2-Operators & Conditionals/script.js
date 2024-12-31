// OPERATORS & CONDITIONALS

//1. Arithmetic Operators:

//i-binary operators [+, -, *, /, %]
//ii-unary operators [++, --]


//1.Addition

let a = 20;
let b = 10;

console.log(a + b); //30

//2.Subtraction

console.log(a - b); //10

//3.Multiplication

console.log(a * b); //200

//4.Division

console.log(a / b); //2

//5.Modulus

console.log(a % b); //0

//6.Increment

console.log(a++); //20
console.log(a); //21

//7.Decrement

console.log(b--); //10
console.log(b); //9

console.log(a**b); //794280046581

//Unary Operators
//1. Pre-increment[First increment then use]
let x = 10;
console.log(++x);   //11
console.log(x);     //11

//2. Post-increment[First use then increment]
let y = 10;
console.log(y++);   //10
console.log(y);     //11

//3. Pre-decrement[First decrement then use]
let z = 10;
console.log(--z);   //9
console.log(z);     //9

//4. Post-decrement[First use then decrement]
let w = 10;
console.log(w--);   //10
console.log(w);     //9 

//__________________________________________________________________________________________

//2. Assignment Operators: [+=, -=, *=, /=, %=]

let num = 5;
let num1 = 10;

num = num + 10;     // num += 10;
console.log(num);  //15

num = num - 5;      // num -= 5;
console.log(num);  //10

num = num * 2;      // num *= 2;
console.log(num);  //20

num = num / 4;      // num /= 4;
console.log(num);  //5

num = num % 2;      // num %= 2;
console.log(num);  //1

//__________________________________________________________________________________________

//3. Comparison Operators: [==, ===, !=, !==, >, <, >=, <=]

/* Comparison operators, such as greater then (>), less than (<), 
greater than or equal (>=), less than or equal (<=), equal to (==), 
not equal to (!=) are used to compare values and determine the relationship between them.
These return a boolean value in the output. */

console.log(5 == 5);    //true  

console.log(5 == '5');  //true  //Loose Equality just check the value

console.log(5 === '5'); //false //Strict Equality check the value and type of data both 

console.log(5 != 5);    //false 

console.log(5 !== '5'); //true  

console.log(5 > 5);     //false 

console.log(5 < 5);     //false 

console.log(5 >= 5);    //true  

console.log(5 <= 5);    //true  

// Strict Equality v/s Loose Equality:

//Strict Equality: It checks the value and type of data both. 
//It is denoted by '==='

//Loose Equality: It just checks the value.
//It is denoted by '=='

let num2 = "5";
console.log(typeof num2); //string

let num3 = 5;
console.log(typeof num3); //number

console.log(num2 == num3);  //true because  Loose Equality just check the value 

console.log(num2 === num3); //false because Strict Equality check the value and type of data both

/* Ternary Operator:

Syntax: condition ? expression1 : expression2

let age = 20;
let check = age > 18 ? 'I can vote' : 'I cannot vote';
console.log(check); 

Output: I can vote
 */
//__________________________________________________________________________________________

/* 4. Logical Operators: [&&, ||, !]:

1. Logical AND (&&):

=> It returns true if all the conditions are true.
=> If any one of the conditions is false, it returns false.
=> It is denoted by '&&'
=> Syntax: condition1 && condition2

2. Logical OR (||): 

=> It returns true if any one of the conditions is true.
=> If all the conditions are false, it returns false.
=> It is denoted by '||'
=> Syntax: condition1 || condition2

3. Logical NOT (!): 

=> It returns the opposite of the condition.
=> If the condition is true, it returns false.
=> If the condition is false, it returns true.
=> It is denoted by '!'
=> Syntax: !condition */

let ans = (true && true && true); 
console.log(ans);                //It will return 'true' because all the conditions are true.

let ans1 = (true && true && false); 
console.log(ans1);               //It will return 'false' because one of the conditions is false.

let ans2 = (true || false || false); 
console.log(ans2);               //It will return 'true' because one of the conditions is true.

let ans3 = (false || false || false); 
console.log(ans3);               //It will return 'false' because all the conditions are false.

let ans4 = !(true); 
console.log(ans4);              //false

let ans5 = !(false);
console.log(ans5);              //true

//AND Operator:

let alert1 = true;
let alert2 = false;
let alert3 = true;

console.log(alert1 && alert2); //false
console.log(alert2 && alert3); //false
console.log(alert1 && alert3); //true

let Num = 10;
let Num1 = 20;
let Num2 = 30;

console.log(num1 && num2); //20
console.log(num2 && num1); //30
console.log(num1 && num2 && num3); //30

//OR Operator:

let Alert1 = false;
let Alert2 = false;
let Alert3 = true;

console.log(Alert1 || Alert2); //false
console.log(Alert2 || Alert3); //true
console.log(Alert1 || Alert3); //true

let Num4 = 10;
let Num5 = 20;
let Num6 = 30;

console.log(num4 || num5); //10
console.log(num5 || num4); //20
console.log(num4 || num5 || num6); //10

//NOT Operator:

let check1 = false;
let check2;
let check3 = NaN;
let nUm = 10;
let gone = false;
let isFirst = true;

console.log(!check1); //true    //It will return true because the value of check1 is false
console.log(!check2); //true    //It will return true because the value of check2 is undefined
console.log(!check3); //true    //It will return true because the value of check3 is NaN
console.log(!nUm);    //false   //It will return false because 10 is a truthy value
console.log(!gone);   //true    //It will return true because the value of gone is false
console.log(!isFirst); //false  //It will return false because the value of isFirst is true


// Truthy and Falsy values:

//Truthy values: A value is considered truthy if it is not false.
//Falsy values: A value is considered falsy if it is false, [null, undefined, 0, NaN, or an empty string].

console.log(false || 'Balaram');     //Balaram 
console.log(false || 7);            //7 
console.log(false || 7 || 8 || 9); //7 //It will return the first truthy value it encounters 

