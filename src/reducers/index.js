import { combineReducers } from 'redux'

const songsReducer = () => {
  return [
    { title: 'Forever', artist: 'Chris Brown', duration: '4:05' },
    { title: 'Low', artist: 'Flo Rida', duration: '3:50' },
    { title: 'Stronger', artist: 'Kayne West', duration: '5:11' },
    { title: 'Crank That', artist: 'Soulja Boy', duration: '3:42' }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});