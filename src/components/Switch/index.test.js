import React from 'react';
import { shallow } from 'enzyme';
import Switch from './index';

const text = "testTextString";
const params = ["date", "rating"];

describe('Switch renders', () => {

    test('Text in the switch as in passed prop', () => {
        const wrapper = shallow(<Switch text={ text } params={ params } />);

        expect(wrapper.find(".switch__text").text()).toEqual(text);
    });
});

describe('Switch changes', () => {

    test('Switch changes after click #1', () => {
        const wrapper = shallow(<Switch text={ text } params={ params } />);
        
        wrapper.find('.switch__param_1').simulate('click');
        expect(wrapper.find('.switch__param_1').hasClass('switch__param--active')).toBe(true);
        expect(wrapper.find('.switch__param_0').hasClass('switch__param--active')).toBe(false);
    });
    
    test('Switch changes after click #0', () => {
        const wrapper = shallow(<Switch text={ text } params={ params } />);

        wrapper.find('.switch__param_0').simulate('click');
        expect(wrapper.find('.switch__param_1').hasClass('switch__param--active')).toBe(false);
        expect(wrapper.find('.switch__param_0').hasClass('switch__param--active')).toBe(true);
    });
});