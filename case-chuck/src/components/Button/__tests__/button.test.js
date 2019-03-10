import React from "react";
import renderer from "react-test-renderer";

import { applyTheme } from "../../../utils/test-utils";
import Button from "../Button";

describe("Button Component", () => {
  let button = null;
  const handleClick = jest.fn();
  beforeEach(() => {
    button = applyTheme(<Button handleClick={handleClick}>Button Text</Button>);
  });

  test("basic render", () => {
    const component = renderer.create(button);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test("handleClick called with an event", () => {
    const component = renderer.create(button);
    const tree = component.toJSON();
    tree.props.onClick();
    expect(handleClick).toHaveBeenCalled();
  });
});
