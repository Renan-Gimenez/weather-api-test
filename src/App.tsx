import React from 'react';
import './App.css';

// Components
import Header from './components/Header';
import Search from './components/Search';

// Icons
import { MdLocationOn } from 'react-icons/md';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header>Confira o clima de uma cidade:</Header>
        <Search />
        <div className="line"></div>
        <img src="https://countryflagsapi.com/png/BR" alt="country-icon" />
      </div>
    </div>
  );
}

export default App;
