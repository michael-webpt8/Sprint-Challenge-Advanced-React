import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Player from './Player';

afterEach(rtl.cleanup);

test('Player exists', () => {
  const { queryByTestId, queryByText } = rtl.render(<Player />);

  expect(queryByTestId(/player-data/i)).toBeTruthy();
});
