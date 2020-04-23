import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import SongDetail from './SongDetail';

const defaultProps = { mySelectedSong: null };

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<SongDetail store={store} />).dive().dive()
  return wrapper

}

describe('when a song has not been selected', () => {
  let wrapper 
  beforeEach(() => {
    const initialState = { selectedSong: null };
    wrapper = setup(initialState)
  })

  it('renders the song detail component without error', () => {
    const songDetailComponent = findByTestAttr(wrapper, 'component-song-detail')
    expect(songDetailComponent.length).toBe(1)
  })

  it("the component contains the text 'Select a song'", () => {
    const songDetailComponent = findByTestAttr(wrapper, 'component-song-detail')
    expect(songDetailComponent.text()).toContain('Select a song')
  })
})

describe('when a song has been selected', () => {
  let wrapper 
  beforeEach(() => {
    const initialState = { selectedSong: { title: "Forever", artist: "Chris Brown", duration: "4:05" } };
    wrapper = setup(initialState)
  })

  it('renders the song detail component without error', () => {
    const songDetailComponent = findByTestAttr(wrapper, 'component-song-detail')
    expect(songDetailComponent.length).toBe(1)
  })

  it("the component contains the information for the selected song", () => {
    const songDetailComponent = findByTestAttr(wrapper, 'component-song-detail')
    expect(songDetailComponent.text()).toContain('Forever')
    expect(songDetailComponent.text()).toContain('Chris Brown')
    expect(songDetailComponent.text()).toContain('4:05')
  })
})


it('does not throw warning with expected props', () => {
  const expectedProps = { mySelectedSong: null };
  checkProps(SongDetail, expectedProps)
})
