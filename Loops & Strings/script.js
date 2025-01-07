//Loops

//Loops are a way to repeat the same code multiple times. 
// There are several types of loops in JavaScript, but the most common one is the for loop.

//1. For loop
//2. While loop
//3. Do while loop


//4. For in loop
//5. For of loop
//6. For each loop


//1. For loop:

//Syntax:

// for (initialization; condition; increment/decrement) {
        // code to be executed
// }

//Example:

for (let i = 0; i < 5; i++) {
    console.log(i);
}
//Output: 0 1 2 3 4

for(let i = 5; i > 0; i--){ //reverse order
    console.log(i);
}

//Output: 5 4 3 2 1

for(let i = 1; i <= 6; i++){
    if(i == 4)
        break;
    else
        console.log(i);
}

//Output: 1 2 3

for(let i = 1; i<=4; i++){
    if(i == 2)
        continue;
    else
        console.log(i);
}

//output: 1 3 4


//2. While loop:

//Syntax:

// while (condition) {
    // code to be executed
// }

//Example:

let i = 0;
while(i < 5){
    console.log(i);
    i++;
}

//Output: 0 1 2 3 4

let j = 5;
while(j > 0){
    console.log(j);
    j--;
}

//Output: 5 4 3 2 1

//3. Do while loop:

//Syntax:

// do {
    // code to be executed
// } while (condition);

//Example:

let k = 1;
do{
    console.log("Balaram");
    k++;
}while(k <= 10);

//Output: Balaram 10 times

//Strings

//Strings are used to store text. Strings must be inside of either single or double quotes.

//Example:

let firstName = "Balaram";
let lastName = 'Das';

let name = `Obito
Uchiha`;

console.log(typeof(firstName)); //Output: string
console.log(typeof(lastName));  //Output: string

console.log(typeof(name));  //Output: string

let myName = new String("Balaram Das");
console.log(myName);    //Output: [String: 'Balaram Das'] => object type string 

//String Methods

//1. Concatenation
//2. Length
//3. Uppercase & lowercase
//4. Substring

//1. Concatenation:

let op1 = 'English ';
let op2 = 'Hindi';

let ans = op1 + op2;
console.log(ans); //Output: English Hindi

let finalANs = `${op1}${op2}`;
console.log(finalANs);  //Output: English Hindi

//2. Length:

let str = 'Balaram Das';
console.log(str.length);    //Output: 11

//3. Uppercaase & Lowercase:

let str1 = 'Balaram Das';
console.log(str1.toUpperCase());    //Output: BALARAM DAS

let str2 = 'OBITO UCHIHA';
console.log(str2.toLowerCase());    //Output: obito uchiha

//4. Substring:


