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