import React from 'react';
import {render} from 'enzyme';
import Switch from './index';

const text = "testTextString";
const params = ["date", "rating"];

test('Switch changes the text after click', () => {
    const wrapper = render(<Switch text={ text } params={ params } />);

    expect(wrapper.find(".switch__text").text()).toEqual(text);
    
    wrapper.find('.switch__param_1').simulate('click');
    
    expect(wrapper.find('.switch__param_1')).hasClass('switch__param--active');
});
  