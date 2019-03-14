import expenseReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',() =>{
    const state = expenseReducers(undefined, { type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[1].id
    };
    const state = expenseReducers(expenses ,action);
    expect(state).toEqual([expenses[0], expenses[2]])
});

test('should not remove expense if id not found',() =>{
    const action = {
        type:'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expenseReducers(expenses ,action);
    expect(state).toEqual(expenses)
});

test('should add an expense',() =>{
    const expense = {
        id:'109',
        description:'adnan aslam',
        note: '',
        createdAt:2000,
        amount: 295000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    }
    const state = expenseReducers(expenses,action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit an expense',() =>{
    const amount = 1250;
    const action ={
        type:'EDIT_EXPENSE',
        id: expenses[1].id,
        updates:{
           amount
        }
    };
    const state = expenseReducers(expenses,action);
    expect(state[1].amount).toEqual(amount);
});

test('should not edit expense if expense not found',() =>{
    const amount = 124000;
    const action ={
        type:'EDIT_EXPENSE',
        id: '-1',
        updates:{
           amount
        }
    };
    const state = expenseReducers(expenses,action);
    expect(state).toEqual(expenses);
});

