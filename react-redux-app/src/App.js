import React from 'react';
import './App.css';

import axios from 'axios';
import PokeList from './components/PokeList';

function App() {
  axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((res) => {
      console.log(res);
    });

  return (
    <div className="App">
      <div>
        <header style={{margin: '2% auto', fontSize: '2.5rem', fontWeight: 900}}>Welcome to the SHINY PokéDex!</header>
        <PokeList />
      </div>
    </div>
  );
}

export default App;