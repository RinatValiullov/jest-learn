import { shallow } from "enzyme";
import React from "react";
import Pagination from "../Pagination/Pagination";

const setupComponent = (props) =>
  shallow(<Pagination {...props} lastPage={20} />);

describe("Pagination component", () => {
  it("should render Pagination without props", () => {
    const component = shallow(<Pagination />);
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination with props", () => {
    const component = setupComponent();
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination for last pages", () => {
    const component = setupComponent({ page: 15 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination without dots in the middle", () => {
    const component = setupComponent({ page: 16 });
    expect(component).toMatchSnapshot();
  });

  it("should render Pagination with dots and 3 buttons in the end", () => {
    const component = setupComponent({ page: 19 });
    expect(component).toMatchSnapshot();
  });

  describe("defaultProps", () => {
    it("should use default onClick", () => {
      const result = Pagination.defaultProps.onClick();
      expect(result).toBe(undefined);
    });
  });
});
