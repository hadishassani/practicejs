
const people = [
    { name: "Ali", diplomacode: "0", age: 20, stringcode: 24, gender: "man" },
    { name: "hadis", diplomacode: "1", age: 25, stringcode: 24, gender: "woman" },
    { name: "sam", diplomacode: "0", age: 17, stringcode: 24, gender: "man"},
    { name: "Maryam", diplomacode: "2", age: 30, stringcode: 24, gender: "woman" },
    { name: "mammad", diplomacode: "0", age: 20, stringcode: 3, gender: "man" },
];
  
let manstringcode24= 0;
let ageunder18 = 0;
let percentstringcode24 = 0;
  
for (let i = 0; i < people.length; i++) {
    const person = people[i];
  
    if (person.gender === "man" && person.stringcode === 24) {
        manstringcode24++;
    
    }
  
    if (person.age < 18) {
        ageunder18++;
    }
}
  
percentstringcode24= (manstringcode24 / people.length) * 100;
  

console.log(manstringcode24);
console.log(ageunder18 );
console.log(percentstringcode24 );
