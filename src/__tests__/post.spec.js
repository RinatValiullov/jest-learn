import React from "react";
import Post from "../Post/Post";

it("should render Post component", () => {
  const component = shallow(<Post />);
  const wrapper = component.find(".post");
  expect(wrapper.length).toBe(1);
  console.log(component.debug());
});
