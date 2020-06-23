import React from 'react';
import './App.css';
import SearchBar  from '../SearchBar/SearchBar';
// import image from './background_search_desktop.jpg';
import Topics from '../Topics/Topics';
import { TopicsList } from '../TopicsList/TopicsList';

function App() {
  return (
    <div>
      {/* <SearchBar/> */}
      <header className="App-header">
        <h1> Keyboard Shortcuts | At Your Fingertips</h1>
        <p>
          Ready to become a keyboard shortcut Wizard?! <br/>
          Take a look at the different topics related to keyboard shortcuts below ✨
        </p>
      </header>
      {/* <Topics/> */}
      <TopicsList/>
    </div>
  );
}

export default App;

