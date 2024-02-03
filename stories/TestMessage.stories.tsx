import { Meta, StoryObj } from "@storybook/react";

import { TestMessage } from "./TestMessage";
import {
  useMyAddonState,
  createAssignableParametersForMyAddon,
} from "trial-storybook-addon";
import {
  useMyAddonState as useMyAddonStateLegacy,
  createAssignableParametersForMyAddon as createAssignableParametersForMyAddonLegacy,
} from "trial-storybook-addon-legacy";

type Story = StoryObj<typeof TestMessage>;

const Template: Story["render"] = (args) => {
  const myAddonState = useMyAddonState();
  const myAddonStateLegacy = useMyAddonStateLegacy();

  return (
    <div>
      <TestMessage {...args} />
      <div>myAddonState: {JSON.stringify(myAddonState)}</div>
      <div>myAddonStateLegacy: {JSON.stringify(myAddonStateLegacy)}</div>
    </div>
  );
};

const meta: Meta<typeof TestMessage> = {
  title: "TestMessage",
  render: Template,
  component: TestMessage,
  args: {
    message: "Hello World",
  },
};

export default meta;

export const Default: Story = {};

export const Text: Story = {
  args: {
    message: "こんにちは！",
  },
};

export const DefaultWithParams: Story = {
  parameters: {
    ...createAssignableParametersForMyAddon({
      num: 10,
    }),
    ...createAssignableParametersForMyAddonLegacy({
      num: 10,
    }),
  },
};

export const TextWithParams: Story = {
  args: {
    message: "こんにちは！",
  },
  parameters: {
    ...createAssignableParametersForMyAddon({
      flag: true,
      num: 10,
    }),
    ...createAssignableParametersForMyAddonLegacy({
      flag: true,
      num: 10,
    }),
  },
};
