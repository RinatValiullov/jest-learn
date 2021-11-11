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
});
