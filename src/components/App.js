import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
 
const App = () => {
  return (
    <div className="ui container segment grid" data-test="component-app">
      <div className="ui row">
        <div className="column eight wide">
          <SongList data-test="component-song-list" />
        </div>
        <div className="column eight wide">
          <SongDetail data-test="component-song-detail" /> 
        </div>
      </div>
    </div>
  );
};

export default App;
