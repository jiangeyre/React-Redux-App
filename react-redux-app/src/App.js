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
      <PokeList />
    </div>
  );
}

export default App;