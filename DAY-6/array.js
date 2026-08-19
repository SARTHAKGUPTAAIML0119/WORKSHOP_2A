console.log("=====STRING OBJECT=====");
let name="SARTHAK , THAKTA , HAI";
console.log(name);

//STRING LENGTH

console.log("Length =",name.length);

console.log("=====STRING METHODS=====");

//To upper case
console.log("Upper Case =", name.toUpperCase());

//2. To lower case
console.log("Lower Case =",name.toLowerCase())

//3. charAt()
console.log("CHARACTER AT INDEX 3=",name.charAt(3));

//4. indexOf() - first occourance of variable
console.log("Index of THAK",name.indexOf("THAK"));

//5. lastIndexOf() - last occourance of variable
console.log("Last Index of THAK",name.lastIndexOf("THAK"));

//6. Slice()

console.log("Slice =",name.slice(0,2));

//7. Split

console.log("Split =",name.split(","));

//8. Replace()
console.log("ORIGINAL =",name)
console.log("Replace HAI WITH NHI =",name.replace("HAI","NHI"));
name = name.replace("HAI","NHI");

//9. concat()
str=" , KABHI";
console.log("Concat str to name =",name.concat(str));


console.log("=====INCLUDES=====");
let course="JavaScript";
console.log(course.includes("Script"));
console.log(course.includes("Python"));

//--------------------------------
//ARRAY OBJECT
//--------------------------------
let nums=[1,2,3,4,5];
// let arr=[{id:1,name:a},{id:2,name:b}];
console.log(nums);

//Access Array Element

console.log(nums[2]);

console.log("=====ARRAY METHODS=====");

//unshift(val) - adds an element at starting
nums.unshift(6);
console.log("AFTER UNSHIFT=",nums);

//shift() - removes starting element
nums.shift();
console.log("AFTER SHIFT =",nums);

console.log("=====DATE OBJECT=====");
let date= new Date();
console.log(date);

//Get Full Year

console.log("YEAR=",date.getFullYear());
// console.log("MONTH=",date.setMonth(12)); //MONTH INDEXING STARTS FROM 0 HENCE RESTARTS FROM 0 AFTER 11.
console.log("MONTH =",date.getMonth()); //SHOWS ONE MONTH BEHIND BECAUSE INDEXING START FROM 0.
console.log("DATE=",date.getDate());
console.log("Milliseconds=",date.getMilliseconds());


console.log("=====MATH OBJECT=====");
console.log("pi=",Math.PI);

// Math Constants
console.log("Math.E (Euler's number):", Math.E);        
console.log("Math.PI (PI):", Math.PI);       
console.log("Math.SQRT2 (Square root of 2):", Math.SQRT2);    
console.log("Math.SQRT1_2 (Square root of 1/2):", Math.SQRT1_2);  
console.log("Math.LN2 (Natural logarithm of 2):", Math.LN2);      
console.log("Math.LN10 (Natural logarithm of 10):", Math.LN10);     
console.log("Math.LOG2E (Base 2 logarithm of E):", Math.LOG2E);    
console.log("Math.LOG10E (Base 10 logarithm of E):", Math.LOG10E);   

// Math Methods
console.log("Math.round(4.6) - Rounds to the nearest integer:", Math.round(4.6));
console.log("Math.ceil(4.9) - Rounds UP to the nearest integer:", Math.ceil(4.9));
console.log("Math.floor(4.2) - Rounds DOWN to the nearest integer:", Math.floor(4.2));
console.log("Math.trunc(-4.2) - Returns only the integer part:", Math.trunc(-4.2));
console.log("Math.sign(-4) - Returns -1, 0, or 1 based on the sign:", Math.sign(-4));
console.log("Math.pow(8, 2) - Returns 8 to the power of 2:", Math.pow(8, 2));
console.log("Math.sqrt(64) - Returns the square root of 64:", Math.sqrt(64));
console.log("Math.abs(-4.7) - Returns the absolute (positive) value:", Math.abs(-4.7));
console.log("minimum of 10,20,30,40,50 = ",Math.min(10,20,30,40,50));




