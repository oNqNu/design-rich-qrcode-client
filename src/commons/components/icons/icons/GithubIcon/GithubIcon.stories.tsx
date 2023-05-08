import React from 'react';
import { GithubIcon } from './GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof GithubIcon> = {
  title: 'commons/icons/GithubIcon',
  component: GithubIcon,
};

export default meta;

type Story = StoryObj<typeof GithubIcon>;

export const Primary: Story = {
  render: () => <GithubIcon />,
};
