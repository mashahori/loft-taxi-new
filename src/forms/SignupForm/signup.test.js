import React from "react";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import createStore from "../../store";
import Signup from "./index.tsx/index.js.js.js";

const store = createStore();
const history = createMemoryHistory();

describe("render Signup", () => {
  test("render Signup", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Signup authed={false} />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Signup)).toHaveLength(1);
  });
});
