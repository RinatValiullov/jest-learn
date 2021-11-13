import React from "react";
import Posts from "../Posts/Posts";

describe("Posts component", () => {
  it("should render Post component", () => {
    const component = shallow(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
