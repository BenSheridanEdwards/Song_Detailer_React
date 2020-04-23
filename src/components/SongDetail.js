import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ selectedSong }) => {
  if (!selectedSong) {
    return <div className="ui segment" data-test="component-song-detail">Select a song</div>; 
  };

  return (
    <div className="ui segments" data-test="component-song-detail">
    <h3 className="ui segment"><u>Song Details:</u></h3>
    <p className="ui segment"><b>Title:</b>  {selectedSong.title}</p>
    <p className="ui segment"><b>Artist:</b>  {selectedSong.artist}</p>
    <p className="ui segment"><b>Duration:</b>  {selectedSong.duration}</p>
    </div>
  )};


const mapStateToProps = ({selectedSong}) => {
 return { selectedSong: selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
