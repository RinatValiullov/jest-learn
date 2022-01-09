import React from "react";
import Counter from "../Counter/Counter";

const setupComponent = () => shallow(<Counter />);

describe("Count component", () => {
  let component;
  let instance;
  beforeEach(() => {
    component = setupComponent();
    instance = component.instance();
  });

  it("should render Counter component", () => {
    expect(component).toMatchSnapshot();
  });

  describe("Counter handlers", () => {
    it("should increase count value by 1", () => {
      const btn = component.find(".plusOneBtn");
      btn.simulate("click");
      // Большие компоненты тестировать неудобно
      /* expect(component).toMatchSnapshot(); */
      expect(component.state().count).toBe(1);
    });
  });
});
