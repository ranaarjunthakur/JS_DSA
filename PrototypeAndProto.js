// JavaScript prototype ek object hota hai jisme common methods hote hain, 
//   aur objects prototype chain ke through in methods ko access karte hain 
//   using methods like hasOwnProperty, Object.create, instanceof, etc.


// 1️⃣ Constructor Function
function Person(name) {
  this.name = name; // own property
}

// 2️⃣ Add method using prototype
Person.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

// 3️⃣ Add property in prototype
Person.prototype.country = "India";

// 4️⃣ Create object using constructor
const p1 = new Person("Arjun");

// ================== USAGE ==================

// Call prototype method
p1.sayHello(); 
// Hello, my name is Arjun

// Access prototype property
console.log(p1.country); 
// India

// 5️⃣ hasOwnProperty()
console.log(p1.hasOwnProperty("name"));     // true  (own)
console.log(p1.hasOwnProperty("country"));  // false (prototype)

// 6️⃣ getPrototypeOf()
console.log(Object.getPrototypeOf(p1) === Person.prototype);
// true

// 7️⃣ isPrototypeOf()
console.log(Person.prototype.isPrototypeOf(p1));
// true

// 8️⃣ instanceof
console.log(p1 instanceof Person); // true
console.log(p1 instanceof Object); // true

// 9️⃣ __proto__ (internal link)
console.log(p1.__proto__ === Person.prototype);
// true

// 🔟 for...in (shows own + prototype properties)
for (let key in p1) {
  console.log(key);
}
// name
// sayHello
// country

// 1️⃣1️⃣ Object.create()
const employee = Object.create(Person.prototype);
employee.name = "Rahul";

employee.sayHello(); 
// Hello, my name is Rahul

// 1️⃣2️⃣ setPrototypeOf()
const extraSkills = {
  skill: "JavaScript"
};

Object.setPrototypeOf(employee, extraSkills);

console.log(employee.skill); // JavaScript
