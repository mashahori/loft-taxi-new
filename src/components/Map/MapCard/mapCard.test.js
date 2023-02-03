import React from 'react';
import { shallow } from 'enzyme';
import MapCard from './MapCard.js';

describe('render MapCard', () => {
  test('render MapCard', () => {
    const wrapper = shallow(<MapCard />);
    expect(wrapper.find('.card')).toHaveLength(1);
  });
});
