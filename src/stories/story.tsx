/* eslint-disable react/prop-types */
import React from 'react';

import { Story, Meta } from '@storybook/react';
import Fleekon, { FleekonProps } from '..';

export default ({
  title,
  iconNames,
}: {
  title: string,
  iconNames: string[],
}) => ({
  component: Fleekon,
  title,
  argTypes: {
    icon: {
      options: [...iconNames],
      control: {
        type: 'select',
      },
    },
  },
} as Meta);

const Template: Story<FleekonProps> = ({
  collection,
  color,
  icon,
  size,
}) => (
  <Fleekon
    collection={collection}
    color={color}
    icon={icon}
    size={size}
  />
);

export const Icon = Template.bind({});
