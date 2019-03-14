console.log("App.js is running");

// const person = {
//     name: "Haris",
//     age: 24,
//     location:{
//         city:"Karachi",
//         temp: 32
//     }
// };

// const { name, age } = person;
// console.log(`${name} is ${age} year(s) old.`);

// const { temp: temperature, city } = person.location;
// console.log(`It's ${temperature} in ${city}.`);

// const book = {
//     name:"Ego is enemy",
//     author: "Ryan Holiday",
//     publisher:{
//        // name: "Penguin"
//     }
// };

// const { name: publisherName = "Self-Published"} = book.publisher;
// console.log(publisherName);

//
// array destructuribng
//

const item = ['Coffee(Hot)', '$2.00', '$3.00', '$7.50'];
const [coffee, , med] = item;

console.log(`A medium ${coffee} costs ${med}`);