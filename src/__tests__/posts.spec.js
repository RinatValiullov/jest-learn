import React from "react";
import Posts from "../Posts/Posts";

describe("Posts component", () => {
  it("should render Post component", () => {
    const component = render(<Posts />);
    expect(component).toMatchSnapshot();
  });
});
