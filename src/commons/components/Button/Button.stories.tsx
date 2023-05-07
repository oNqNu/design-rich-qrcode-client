import React from 'react';
import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'commons/Button',
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  render: () => <Button variant="primary">ボタン</Button>,
};

export const Secondary: Story = {
  render: () => <Button variant="secondary">ボタン</Button>,
};

export const Danger: Story = {
  render: () => <Button variant="danger">ボタン</Button>,
};
