import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ mySelectedSong }) => {
  if (!mySelectedSong) {
    return <div className="ui segment">Select a song</div>; 
  };

  return (
    <div className="ui segments">
    <h3 className="ui segment"><u>Song Details:</u></h3>
    <p className="ui segment"><b>Title:</b>  {mySelectedSong.title}</p>
    <p className="ui segment"><b>Artist:</b>  {mySelectedSong.artist}</p>
    <p className="ui segment"><b>Duration:</b>  {mySelectedSong.duration}</p>
    </div>
  )};


const mapStateToProps = (state) => {
 return { mySelectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
