import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, { history } from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { login, logout } from "./actions/auth";
import getVisibleExpenses from "./selectors/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";

// import './playground/promise';

const store = configureStore();

// store.dispatch(setTextFilter('water'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("log in");
    store.dispatch(login(user.uid));
    console.log("uid =>", user.uid);
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if (history.location.pathname === "/") {
        history.push("/dashboard");
      }
    });
  } else {
     console.log("log out");
    store.dispatch(logout());
    renderApp();
    history.push("/");
  }
});
//ReactDOM.render(jsx, document.getElementById("app"));

// const Layout = (props) =>{
//     return(
//         <div>
//         <p>Header</p>
//         {props.children}
//         <p>Footer</p>
//         </div>
//     );
// };

// ReactDOM.render((
//     <Layout>
//       <div>
//         <h1>Page title</h1>
//         <h2>This is my page.</h2>
//       </div>
//     </Layout>
// ), document.getElementById('app'));

// class OldSyntax {
//     constructor() {
//         this.name = 'Mike';
//         this.getGreeting = this.getGreeting.bind(this);

//     }
//     getGreeting(){
//         return `Hi.My name is ${this.name}.`;
//     }
// }
// const oldSyntax = new OldSyntax();
// const getGreeting = oldSyntax.getGreeting;
// console.log(getGreeting());

// class NewSyntax {
//    name = "Jen";
//    getGreeting = () =>{
//        return `Hi.My name is ${this.name}.`;
//    }
// }

// const newSyntax = new NewSyntax();
// const GETGreeting = newSyntax.getGreeting;
// console.log(GETGreeting());

// const jsx =(
//     <div>
//         <Header />
//         <Action />
//         <Option />
//         <AddOption />
//     </div>
// );

// import "./utils.js";
//import subtract ,{ square, add, } from './utils.js';

//import isSenior, { isAdult, canDrink} from './person.js'

// console.log("app.js is running!");
// console.log(square(4));
// console.log(add(5,4));
// console.log(subtract (100,10));

// console.log(isAdult(18));
// console.log(canDrink(23));
// console.log(isSenior(58));
