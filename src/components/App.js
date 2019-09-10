import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './AddPlayer';
import '../css/style.css';

const App = () => {
  return (
    <div className='app-container'>
      <Header />

      <Player />
      
      <AddPlayer />
    </div>
  );
}

export default App;
