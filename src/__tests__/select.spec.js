import React from "react";
import Select from "./../Select/Select";

const props = {
  options: [
    { value: "prop_1", label: "Test 1" },
    { value: "prop_2", label: "Test 2" },
  ],
  value: 0,
  handleChange: () => {},
};

const setupComponent = (props) => shallow(<Select {...props} />);

describe("Select component", () => {
  describe("Has props", () => {
    const component = setupComponent(props);

    it("should render select element", () => {
      const select = component.find("select");
      expect(select).toHaveLength(1);
    });

    it("should render 2 options", () => {
      const option = component.find("option");
      expect(option).toHaveLength(2);
    });
  });

  describe("Has no props", () => {
    it("should render placeholder", () => {
      const component = shallow(<Select />);
      const placeholder = component.find(".placeholder");
      expect(placeholder).toHaveLength(1);
    });
  });

  describe("defaultProps", () => {
    it("should use default handleChange", () => {
      const result = Select.defaultProps.handleChange();
      expect(result).toBe("Test");
    });
  });
});
