import { storiesOf } from "@storybook/react";
import centered from "@storybook/addon-centered/react";

import scenarios from "../src/components/**/*.scenario.js";

scenarios.reduce(
  (stories, scenario) => stories.add(scenario.name, scenario.component),
  storiesOf("ui", module).addDecorator(centered)
);
