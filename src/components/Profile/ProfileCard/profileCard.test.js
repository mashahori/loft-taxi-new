import React from 'react';
import { shallow } from 'enzyme';
import ProfileCard from './ProfileCard.js';

describe('render ProfileCard', () => {
  test('render ProfileCard', () => {
    const wrapper = shallow(<ProfileCard />);
    expect(wrapper.find('.form')).toHaveLength(1);
  });
});
