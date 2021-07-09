/* eslint-disable react/prop-types */
import React from 'react';
import { styled } from '@stitches/react';
import CreateStory, { Icon as StoryIcon } from './story';

import Plug from '../collections/plug.json';

const IconWrap = styled('span', {
  display: 'inline-block',
  border: '1px solid rgba(0, 0, 0, 0.2)',
  borderRadius: '8px',
  padding: '12px 12px 6px',
  margin: '6px',
  cursor: 'pointer',
  '&:hover': {
    '& svg': {
      color: 'deepskyblue',
    },
  },

  '& svg': {
    transition: 'color 0.3s',
  },
});

const Column = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  justifyContent: 'center',

  '& span': {
    fontFamily: 'Helvetica, monospace',
    padding: '4px 0',
    fontSize: '12px',
  },
});

const iconNames = Plug.icons.map((obj) => obj.properties.name);

export default CreateStory({
  title: 'Plug',
  iconNames,
});

export const Icon = StoryIcon;

Icon.args = {
  collectionName: 'Plug',
  color: 'black',
  icon: 'home',
  size: '32px',
};

export const Collection = () => (
  <>
    {
      iconNames.map((name) => (
        <IconWrap key={name}>
          <Column>
            <StoryIcon
              collectionName="Plug"
              color="black"
              icon={name}
              size="32px"
            />
            <span>{name}</span>
          </Column>
        </IconWrap>
      ))
    }
  </>
);
