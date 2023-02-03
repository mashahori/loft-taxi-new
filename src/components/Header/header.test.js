import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { shallow } from 'enzyme';
import Header from './Header.js';

describe('render a header', () => {
  const routes = ['a', 'b', 'c'];

  test('render <ul/>', () => {
    const header = shallow(<Header routes={routes} />);
    expect(header.find('ul')).toHaveLength(1);
  });

  test('not render <ul/>', () => {
    const routes = [];

    const header = shallow(<Header routes={routes} />);
    expect(header.find('ul')).toHaveLength(0);
  });

  test('render <li/> 3 times', () => {
    const header = shallow(<Header routes={routes} />);
    expect(header.find('li')).toHaveLength(3);
  });
});
