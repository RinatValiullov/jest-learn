import React from "react";
import ContextComponent from "../Context/Component";
import { AuthProvider } from "../Context/context";

describe("ContextComponent", () => {
  const component = mount(
    <AuthProvider>
      <ContextComponent />
    </AuthProvider>
  );

  it("should toggle login status", () => {
    expect(component.find("div").text()).toBe("false");
    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("true");

    component.find(".btn").simulate("click");
    expect(component.find("div").text()).toBe("false");
  });
});
