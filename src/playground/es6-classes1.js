
class Person {
   constructor(name = "Anonymous",age = 0){
    this.name = name;
    this.age = age;
   }
   getGreeting(){
      // return 'Hi I am '+ this.name + '!';
      return `Hi I am ${this.name},`;
   }
   getValue(){
    return `${this.name} is ${this.age} year(s) old.`;
   }
}

 class Student extends Person{
   constructor(name,age,major){
       super(name,age);
      this.major = major;
   }
   hasMajor(){
       return !!this.major;
   }
   getValue(){
       let description = super.getValue();

       if(this.hasMajor()){
           description += `Their Major is ${this.major}.`;
       }

       return description;
   }
 }

 class Traveller extends Person{
     constructor(name,age,home){
         super(name,age);
         this.home = home;
     }
     hasHomeLocation(){
         return !! this.home;
     }
     getGreeting(){
         let homeLocation = super.getGreeting();
         if(this.hasHomeLocation()){
            homeLocation +=
             `My age is ${this.age} year(s) old,I am visiting fron ${this.home}`;
         }
         return homeLocation;
     }
 }




const me = new Traveller('Haris Qaiser',21,"karachi");
console.log(me.getGreeting());

const other = new Traveller(undefined,undefined,"Lahore");
console.log(other.getGreeting());













// class Challenge{
//     constructor(name="Anonymous",age="0"){
//        this.name = name;
//        this.age = age;
//     }
//     getValue(){
//        return `${this.name} is ${this.age} year(s) old`;
//     }
// }

// const meHere = new Challenge("Adnan",22);
// console.log(meHere.getValue());

