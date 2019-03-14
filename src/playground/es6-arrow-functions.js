const square = function(x){
    return x*x;
}

console.log(square(8));

const squareArrow = (x) => {
    return x*x;
}

console.log(squareArrow(10));

// const fullName = "John Mead";
// let firstName;

// if(fullName){
//     firstName = fullName.split(' ')[0];
//     console.log(firstName);
// }

// console.log(firstName);

const getFirstName = (fullName) => fullName.split(' ')[0];

console.log(getFirstName("Haris Qaiser"));
