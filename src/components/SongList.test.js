import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr, checkProps, storeFactory } from '../test/testUtils';
import SongList from './SongList';

const defaultProps = { songs: [] };

const setup = (initialState={}) => {
  const store = storeFactory(initialState)
  const wrapper = shallow(<SongList store={store} />).dive().dive()
  return wrapper

}

describe('when the component has a list of songs', () => {
  let wrapper 
  beforeEach(() => {
    const initialState = { songs: [{ title: "Forever", artist: "Chris Brown", duration: "4:05" }] };
    wrapper = setup(initialState)
  })

  it('renders the song list component without error', () => {
    const songListComponent = findByTestAttr(wrapper, 'component-song-list')
    expect(songListComponent.length).toBe(1)
  })

  it("the component contains the song title 'Forever'", () => {
    const songDetailComponent = findByTestAttr(wrapper, 'component-song-list')
    expect(songDetailComponent.text()).toContain('Forever')
  })

  it('the component contains a button for each song', () => {
    const selectButton = findByTestAttr(wrapper, 'select-button').at(1)
    expect(selectButton.length).toBe(1)
  })
})

describe('when a user selects a song and clicks the select button', () => {
  let wrapper 
  beforeEach(() => {
    const initialState = { songs: [{ title: "Forever", artist: "Chris Brown", duration: "4:05" }] };
    wrapper = setup(initialState)
  })

  it('produces a callback', () => {
    const selectButton = findByTestAttr(wrapper, 'select-button').at(1)
    selectButton.simulate('click')
    wrapper.update()
    // expect(this.props.selectSong).toHaveBeenCalled()
  })
})

it('does not throw warning with expected props', () => {
  const expectedProps = { songs: [] };
  checkProps(SongList, expectedProps)
})
