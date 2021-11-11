import React from "react";
import Post from "../Post/Post";

describe("Should render Post component", () => {
  it("should contain .post wrapper", () => {
    const component = shallow(<Post />);
    const wrapper = component.find(".post");
    expect(wrapper.length).toBe(1);
  });

  it("should contain link", () => {
    const component = shallow(<Post />);
    const wrapper = component.find("a");
    expect(wrapper.length).toBe(1);
  });
});
