import { Meta, StoryObj } from '@storybook/react';
import Main from '.';

export default {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
} as Meta;

export const Default: StoryObj = {};
