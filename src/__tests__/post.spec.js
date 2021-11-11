import React from "react";
import Post from "../Post/Post";

const setupComponent = (props) => shallow(<Post {...props} />);

describe("Should render Post component", () => {
  let component;
  beforeEach(() => {
    component = setupComponent();
  });

  it("should contain .post wrapper", () => {
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  });

  it("should contain link", () => {
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });

  it("should render created date", () => {
    const created_at = "11-11-2021";
    component = setupComponent({ created_at });
    const date = component.find(".date");
    expect(date.text()).toBe(new Date(created_at).toLocaleDateString());
  });
});
