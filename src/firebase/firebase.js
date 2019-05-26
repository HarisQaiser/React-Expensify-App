import * as firebase from "firebase";

// import * as expenseActions from '../actions/expenses';

// process.env.NODE_ENV

//let firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG);

const config = {
  // Initialize Firebase
  apiKey: "AIzaSyCAUWWgYfPMHc5kPqeAi3rd-6EkIdb4N7I",
  authDomain: "expensify-a0d21.firebaseapp.com",
  databaseURL: "https://expensify-a0d21.firebaseio.com",
  projectId: "expensify-a0d21",
  storageBucket: "expensify-a0d21.appspot.com",
  messagingSenderId: "781218189330",
  appId: "1:781218189330:web:b7fcd7cce95b1801"
};

firebase.initializeApp(config);

console.log(config.databaseURL);

const database = firebase.database();
export { firebase, database as default };

// console.log(`Database url is :${process.env.DATABASE_URL}`);
//console.log("process_env", process.env.FIREBASE_DATABASE_URL);

// child _removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//    console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').orderByChild('amount')
//    .on('child_added', (snapshot) => {
//       console.log(snapshot.key + ' has ' + snapshot.val().amount + ' in Rupees');
//    });
// database.ref('expenses')
//    .once('value')
//    .then((snapshot) => {
//       const expenses = [];

//       snapshot.forEach((childSnapshot) =>{
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });
//       console.log(expenses);
//    });

// database.ref('expenses')
//    .on('value', (snapshot) => {
//       const expenses = [];
//       snapshot.forEach((childSnapshot) => {
//          expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//          });
//       });
//       console.log(expenses);
//    });

// database.ref('expenses').push({
//    description: 'expenses 1',
//    amount: 12500,
//    note: 'Hello there? How are you?',
//    createdAt: 'june-20-1957'
// });

//database.ref('notes/-LbDgWn8TF4VL1cC6uJD').remove();
// database.ref('notes').push({
//    title: 'Course Topic',
//    body: 'React-Native, Angular, Python, Java'
// });

// database.ref().on('value', (snapshot) => {
//    const val = snapshot.val();
//    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// const onValueChange = database.ref().on('value', (snapshot) => {
//    console.log(snapshot.val());
// }, (e) => {
//    console.log("Error with data fetching", e);
// });

// setTimeout(() => {
//    database.ref('age').set(24);
// }, 3500);

// setTimeout(() => {
//    database.ref().off(onValueChange);
// }, 7000);

// setTimeout(() => {
//    database.ref('age').set(27);
// }, 10500);
// // database.ref('location/city')
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
