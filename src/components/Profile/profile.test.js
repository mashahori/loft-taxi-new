import React from 'react';
import { Router } from 'react-router-dom';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import createStore from '../../store';
import Profile from './Profile.js';

const store = createStore();
const history = createMemoryHistory();

describe('render Profile', () => {
  test('render Profile', () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Profile />
        </Router>
      </Provider>,
    );
    expect(wrapper.find(Profile)).toHaveLength(1);
  });
});
