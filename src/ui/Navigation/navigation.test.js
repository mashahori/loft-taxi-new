import React from "react";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import createStore from "../../store";
import Navigation from "./index.js";

const store = createStore();
const history = createMemoryHistory();

describe("render Navigation", () => {
  test("render Navigation", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Navigation />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Navigation)).toHaveLength(1);
  });
});
