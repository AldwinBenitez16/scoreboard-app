import React from 'react';
import Header from './Header';
import Player from './Player';
import AddPlayer from './addPlayer';
import '../css/style.css';

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Player />
      <AddPlayer />
    </div>
  );
}

export default App;
