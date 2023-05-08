import React from 'react';
import LinkIcon from './LinkIcon';
import { GithubIcon } from '../icons/icons/GithubIcon/GithubIcon';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof LinkIcon> = {
  title: 'commons/LinkIcon',
  component: LinkIcon,
};

export default meta;

type Story = StoryObj<typeof LinkIcon>;

export const GitHub: Story = {
  render: () => (
    <LinkIcon href="https://github.com/oNqNu" isExternalLink={true}>
      <GithubIcon />
    </LinkIcon>
  ),
};
