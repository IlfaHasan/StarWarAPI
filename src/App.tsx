import react,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const[characterName,setCharacterName]=useState();
useEffect(() => {
  fetch('https://swapi.dev/api/people/1/')
      .then((res) => res.json())
      .then((json) => setCharacterName(json.name))
}, [])
  return (
    <div className="App">
      <h1>Star War</h1>
        <h2>{characterName}</h2>
      
    </div>
  );
}

export default App;
