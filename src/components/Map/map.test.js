import React from "react";
import { Router } from "react-router-dom";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { createMemoryHistory } from "history";
import createStore from "../../store";
import Map from "./index.js";

const store = createStore();
const history = createMemoryHistory();

describe("render Map", () => {
  test("render Map", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <Router history={history}>
          <Map />
        </Router>
      </Provider>
    );
    expect(wrapper.find(Map)).toHaveLength(1);
  });
});
