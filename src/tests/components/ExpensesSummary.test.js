import React from 'react';
import { shallow } from 'enzyme';
import ExpensesSummary  from '../../components/ExpenseDashboardPage';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adapter()
})


test('should render ExpensesSummary with 1 expense', () =>{
  const wrapper = shallow(<ExpensesSummary 
                            expenseCount={1} expensesTotal={235}/>);
  expect(wrapper).toMatchSnapshot();                          
});


test('should render ExpensesSummary with multiple expense', () =>{
    const wrapper = shallow(<ExpensesSummary 
                      expenseCount={24} expensesTotal={2351231534}/>);
    expect(wrapper).toMatchSnapshot(); 
});
