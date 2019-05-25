import * as firebase from 'firebase';
import * as expenseActions from '../actions/expenses';


const config = {
   // Initialize Firebase
   apiKey: "AIzaSyCAUWWgYfPMHc5kPqeAi3rd-6EkIdb4N7I",
   authDomain: "expensify-a0d21.firebaseapp.com",
   databaseURL: "https://expensify-a0d21.firebaseio.com",
   projectId: "expensify-a0d21",
   storageBucket: "expensify-a0d21.appspot.com",
   messagingSenderId: "781218189330"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().on('value', (snaopshot) => {
   console.log(snaopshot.val());
});

setTimeout(() => {
   database.ref('age').set(24);
}, 3500);


setTimeout(() => {
   database.ref().off();
}, 7000);


setTimeout(() => {
   database.ref('age').set(28);
}, 10500);
// database.ref('location/city')
//    .once('value')
//    .then((snapshot) => {
//       const val = snapshot.val();
//       console.log(val);
//    }).catch((e) => {
//       console.log("error fetching data!", e);
//    });

// database.ref().set({
//    name: 'Haris Qaiser',
//    age: 21,
//    stressLevel: 6,
//    job: {
//       title: 'Software Developer',
//       company: 'Google'
//    },
//    location: {
//       city: 'Karachi',
//       country: 'Pakistan'
//    }
// }).then(() => {
//    console.log('Data is saved');
// }).catch((err) => {
//    console.log("This Failed!", err);
// });


// database.ref().update({
//    stressLevel: 9,
//    'job/company': 'Amazon',
//    'location/city': 'Seattle'
// });


// database.ref('isSingle')
// .remove()
//   .then(() =>{
//      console.log('Remove succeeded');
//   }).catch((err) =>{
//      console.log('Remove failed',err);
//   });



// database.ref().set('This is my data.');

//database.ref('age').set(22);

// database.ref('attributes').set({
//    height: '180',
//    weight: '120'
// }).then(() =>{
//    console.log('Second set call worked');
//   }).catch((err) => {
//      console.log("Second set failed!",err);
//   });

