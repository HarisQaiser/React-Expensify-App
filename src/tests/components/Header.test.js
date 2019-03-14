import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow'; // ES6
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({
    adapter: new Adapter()
});


test('should render header correctly',() =>{
    const wrapper = shallow(<Header />);
    expect(wrapper).toMatchSnapshot();

    //expect(wrapper.find('h1').text()).toBe('Expensify');
    // const renderer = new ShallowRenderer();
    // renderer.render(<Header />);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
});

