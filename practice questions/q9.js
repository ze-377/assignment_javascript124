var fruits = ['Banana','Orange','Apple','Mango']

fruits.push('Guava');// adding element at the end;
console.log(fruits);
 
fruits.unshift('Pomagranate');
console.log(fruits);// adding element at the start;

fruits.splice(0,1);
console.log(fruits);  //o is the index or "from" and next number represents the "to" for removal in splice function 

console.log(Array.isArray(fruits)); // pass the name of var in this function to check if its an array or not 
console.log(fruits)

fruits.splice(0,2,'WaterMelon');
console.log(fruits);// has removed Banana and Orange and added WaterMelon in place of it

fruits[2] = 'Orange';
console.log(fruits); // Mango is replaced by 

console.log(fruits.toString()); // fruits acts as object here used to convert the array toString

