import react,{useState,useEffect} from 'react';
import './App.css';
import logo from './skywalker.jpg';

function App() {
  const[characterName,setCharacterName]=useState();
useEffect(() => {
  fetch('https://swapi.dev/api/people/1/')
      .then((res) => res.json())
      .then((json) => setCharacterName(json.name))
}, [])
  return (
    <div className="App">
      <h1>Star Wars</h1>
      <img src={logo} height='200px' width='150px' alt='skywalkerPicture'></img>
        <h2>{characterName}</h2>
      
    </div>
  );
}

export default App;
