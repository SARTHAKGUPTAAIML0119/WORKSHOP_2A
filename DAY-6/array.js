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
