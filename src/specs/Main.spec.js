import React from "react";
import renderer from "react-test-renderer";
import App from "../App";

describe("The application", () => {
  it("should render without crashing", () => {
    renderer.create(<App />);
  });
});
