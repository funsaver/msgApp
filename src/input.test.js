import React from 'react';
import ReactDOM from 'react-dom';
import { render, shallow } from 'enzyme';
import Input from './input.js';
import ReactTestUtils from 'react-addons-test-utils'; // ES6

describe('Component to test', ()=>{
	it('should do something', () =>  {
		const input = shallow(<Input />);
		console.log(input.debug());
		expect(input.find('div').length).toBe(1);
	});

	it('should test button', () => {
		const btn = shallow(<Input />);
		expect(btn.find('button').length).to.equal(1);
		btn.find('button').simulate('click');
		expect(btn.find('button').length).to.equal(2);
	});
	
});
