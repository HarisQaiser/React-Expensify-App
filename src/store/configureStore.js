import {  combineReducers, createStore } from 'redux';
import expenseReducer from '../reducers/expenses';
import filterReducer from '../reducers/filter';

// store creation
export default  () =>{
   const store = createStore(
        combineReducers({
          expenses: expenseReducer,
          filters: filterReducer
       }),
       window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}
