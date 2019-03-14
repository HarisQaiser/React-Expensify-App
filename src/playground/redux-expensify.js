import {  combineReducers, createStore } from 'redux';
import uuid from 'uuid';

// ADD EXPENSE 
const addExpense = ( 
    { 
       description = '',
       note = '',
       amount = 0, 
       createdAt = 0
     } = {}
    ) => ({
    type:'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    },
});

// Remove expense

const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// Edit Expense
const editExpense = ( id, updates ) => ({
   type:'EDIT_EXPENSE',
   id,
   updates
});

// SET TEXT_FILTER
const setTextFilter = ( text = '' ) => ({
    type:'SET_TEXT_FILTER',
    text
});

// SORT_BY_DATE
const sortByDate = () =>({
    type:'SORT_BY_DATE'
});

// SORT_BY_AMOUNT
const sortByAmount = () =>({
    type:'SORT_BY_AMOUNT'
});

// SET_START_DATE
const setStartDate = ( startDate ) =>({
    type:'SET_START_DATE',
    startDate
});

// SET_END_DATE
const setEndDate = ( endDate ) =>({
    type: 'SET_END_DATE',
    endDate
});

// filter array nh change karta balke new array ko le ata hai.

const expenseReducerDefaultState = [];

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type){
      case 'ADD_EXPENSE':
         return [
             ...state,
             action.expense
        ];
       case 'REMOVE_EXPENSE':
        return state.filter(({ id }) => id !== action.id);
       case 'EDIT_EXPENSE':
        return state.map((expense) =>{
            if(expense.id === action.id){
              return{
                  ...expense,
                  ...action.updates
              }
            } else{
                return expense;
            }
        }) 
      default:{
         return state;
    }
  }
};

const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state= filterReducerDefaultState, action ) => {
   switch(action.type){
       case 'SET_TEXT_FILTER':
         return{
           ...state,
          text: action.text
        };
       case 'SORT_BY_DATE':
         return{
           ...state,
           sortBy:'date'
       };
       case 'SORT_BY_AMOUNT':
         return{
           ...state,
           sortBy:'amount'
       };
       case 'SET_START_DATE':
         return{
           ...state,
           startDate: action.startDate
         };
       case 'SET_END_DATE':
         return{
           ...state,
           endDate: action.endDate
         };
       default:{
        return state;
       }
   }
}

// Visible Expense
const getVisibleExpenses = ( expenses, { text, sortBy, startDate, endDate} )=>{
   return expenses.filter(( expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDataMatch = typeof endDate !== 'number' || expense.createdAt <+ endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())

    return startDateMatch && endDataMatch && textMatch;
   }).sort((a,b) =>{
      if( sortBy === 'date'){
          return a.createdAt < b.createdAt ? 1 : -1;
      }
      else if( sortBy === 'amount'){
          return a.amount < b.amount ? 1 : -1;
      }
   });
};

const store = createStore(
    combineReducers({
      expenses: expenseReducer,
      filters: filterReducer
   })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);

});

 const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 500, createdAt: -21000 }));
 const expenseTwo = store.dispatch(addExpense({ description: 'IceCream', amount: 800 , createdAt: -1000}));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense( expenseTwo.expense.id, {amount: 500}));
//store.dispatch(setTextFilter('nt'));
// store.dispatch(setTextFilter());
 store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0)); // startdate 120
// store.dispatch(setStartDate()); // startDate undefined
// store.dispatch(setEndDate(999)); // enddate 1250

const demoState = {
    expenses:[{
        id:'dgfdgfh',
        description: 'febrauary Rent',
        note:'This was the final paymount from this address',
        amount: 6500,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount',     // Date or amount
        startDate: undefined,
        endDate: undefined
    }
};

const user = {
    name: 'adnan',
    age: 23
};

console.log({
    age:25,
    ...user,
    location: 'karachi'
})