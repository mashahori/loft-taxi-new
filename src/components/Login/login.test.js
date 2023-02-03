import React from "react";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import createStore from "../../store";
import Login from "./index.js";

const store = createStore();
const history = createMemoryHistory();

describe("render Login", () => {
  test("render Login", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Login authed={false} />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Login)).toHaveLength(1);
  });
});
