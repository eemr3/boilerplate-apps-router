import React from 'react';
import GlobalStyle from '../src/styles/global';

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle />
      <Story />
    </>
  ),
];
