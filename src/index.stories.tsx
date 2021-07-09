/* eslint-disable react/prop-types */
import React from 'react';

import { Story, Meta } from '@storybook/react';

import Fleekon, { FleekonProps } from '.';

export default {
  component: Fleekon,
  title: 'Fleekon',
  argTypes: {
    collectionName: {
      options: ['Plug'],
      control: {
        type: 'select',
      },
    },
    icon: {
      options: ['home', 'newspaper', 'pen', 'pencil'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

const Template: Story<FleekonProps> = ({
  collectionName,
  color,
  icon,
  size,
}) => (
  <Fleekon
    collectionName={collectionName}
    color={color}
    icon={icon}
    size={size}
  />
);

export const Icon = Template.bind({});

Icon.args = {
  collectionName: 'Plug',
  color: 'black',
  icon: 'home',
  size: '32px',
};
