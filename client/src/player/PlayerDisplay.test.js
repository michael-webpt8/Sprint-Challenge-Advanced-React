import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import PlayerDisplay from './PlayerDisplay';
import Player from './Player';

afterEach(cleanup);

/**
 * Test Display
 */

test('if no players Loading Appears', () => {
  const { getByText } = rtl.render(<PlayerDisplay />);
  expect(getByText(/loading/i)).toHaveTextContent('Loading...');
});

/**
 *  1st test player
 * name = michael
 * country = usa
 * searches = 1
 */

test('1 Player name is michael ', async () => {
  const { queryByTestId } = rtl.render(<Player name='michael' />);
  const name = 'michael';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(name);
});

test('Player country is usa', async () => {
  const { queryByTestId } = rtl.render(<Player country='usa' />);
  const country = 'usa';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(country);
});

test('Search result equal to 1', () => {
  const { queryByTestId } = rtl.render(<Player searches='1' />);
  const search = '1';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(search);
});

/**
 * test 2 of Player with data
 * name = Fred
 * country = Austria
 * searches = 88
 */

test('Player name is Fred', async () => {
  const { queryByTestId } = rtl.render(<Player name='Fred' />);
  const name = 'Fred';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(name);
});

test('Player country is Austria', async () => {
  const { queryByTestId } = rtl.render(<Player country='Austria' />);
  const expected = 'Austria';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(expected);
});

test('Player Search result equal to 88', () => {
  const { queryByTestId } = rtl.render(<Player searches='88' />);
  const search = '88';

  expect(queryByTestId(/player-data/i)).toHaveTextContent(search);
});

/**
 * test 3 all data at once player check
 * name = mikey
 * country = Colombia
 * searches = 67
 */

test('Player results expected passed in at once', async () => {
  const { queryByTestId } = rtl.render(
    <Player name='Mikey' country='Colombia' searches='67' />
  );
  expect(queryByTestId(/player-data/i)).toHaveTextContent('Mikey');
  expect(queryByTestId(/player-data/i)).toHaveTextContent('Colombia');
  expect(queryByTestId(/player-data/i)).toHaveTextContent('67');
});
