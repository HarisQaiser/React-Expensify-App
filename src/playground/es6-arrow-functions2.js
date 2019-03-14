const add =  (a,b) => {
   //  console.log(arguments);
    return a + b;

   
}

console.log(add(5,8,16));


// argument objects no longer bound with arrow functions
//this keyword - no longer bound

const user ={
    name:"Haris",
    cities:['Karachi','Lahore','Islamabad'],
    printPlaceslived() {
       // console.log(this.name);
       // console.log(this.cities);
        //const that =this;
      return this.cities.map((city) => this.name + ' has Lived in ' + city);
       

    //     this.cities.forEach((city) => {
    //         console.log(this.name + ' has lived in ' + city);
    // });
     }
};

console.log(user.printPlaceslived()); 

   // Challenge Area

   const multiplier ={
       numbers:['5','2','3'],
       multiplyBy: 2,
       multiply(){
           return this.numbers.map((num) => this.multiplyBy * num);
       }
   };

   console.log(multiplier.multiply()); // [1,2,3] 2[2,4,6]


