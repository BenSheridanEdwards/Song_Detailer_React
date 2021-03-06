import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../test/testUtils';

import App from './App';

const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />)
  if (state) wrapper.setState(state)
  return wrapper
}

let wrapper 
beforeAll(() => {
  wrapper = setup()
})

it('renders App component without error', () => {
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});

it('renders the SongList component inside the App component', () => {
  const songListComponent = findByTestAttr(wrapper, 'component-song-list')
  expect(songListComponent.length).toBe(1)
})

it('renders the SongDetail component inside the App component', () => {
  const songDetailComponent = findByTestAttr(wrapper, 'component-song-detail')
  expect(songDetailComponent.length).toBe(1)
})
