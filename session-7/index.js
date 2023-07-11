// ****************************************************TASK 1****************************************************

let fruits = ['mango', 'strawberry', 'pear', 'apple'];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits.slice(-1));
fruits.push("watermelon");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.sort();
console.log(fruits);

// ****************************************************TASK 2****************************************************


let names = ["Harjeet", "Tash", "Lotanna", "Steffi", "Fummi", "Victoria","Sundus", "Monaire" , "Tabitha", "Judith"];

console.log(names.length);
console.log(names.sort());
console.log(names.sort().reverse());

let numbers = [ 5, 325, 67, 100000, 150];
console.log(numbers.sort());

// ****************************************************TASK 3****************************************************

// Notice the backticks enclosing t'challa. Read https://www.javascripttutorial.net/es6/javascript-template-literals/ for an explanation on template literals
const people = [
  { name: `t'challa`, age: 37 },
  { name: 'shuri', age: 16 },
  { name: 'killmonger', age: 32 },
];

// This is a helper function that should be used in the final task of the session.
// You should pass this function to the sort method to sort the ages of each individiual in the people array of objects
function compare(a, b) {
  return a.age - b.age;
}

for (let index = 0; index < people.length - 1; index++){
   let person_a = people[index];
   let person_b = people[index+1];

   let difference = compare(person_a, person_b);

   if (difference > 0){
    people[index] = person_b;
    people[index+1] = person_a;
   };
  
};

const names_in_order_age = people.map((person) => person.name);


console.log(names_in_order_age);