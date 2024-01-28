import { StorybookConfig } from "@storybook/react-vite";

const storybookConfig: StorybookConfig = {
  framework: "@storybook/react-vite",
  addons: [
    // "trial-storybook-addon",
  ],
  stories: ["../stories/**/*.stories.tsx"],
};

export default storybookConfig;
