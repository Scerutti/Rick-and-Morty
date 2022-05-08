import imageHome from "./img/rick-morty.png"
import axios from 'axios'
import './App.css';
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters,setCharacters] = useState(null);

  const handdleSelect = async () =>{
    const infoApi = await axios ("https://rickandmortyapi.com/api/character/")
    const character = infoApi.data
    
    setCharacters(character.results)
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Rick & Morty</h1>
        {characters? 
          <Characters characters={characters} setCharacters={setCharacters}/>
          :<>
            <img src={imageHome} alt="Rcik & Morty" className='img-home'/>
            <button onClick={handdleSelect} className="btn-search"> List of Characters </button>
          </> }
      </header>
    </div>
  );
}

export default App;
