import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {getmovie, getpopular} from './Api/api';
import recomend from './Components/recomend';


function App() {
  

const fetchmovie = async() => {
  const movie = await getmovie(550);
  const popular = await getpopular();
  console.log(movie);
  console.log() 
  
}


useEffect(()=>{
fetchmovie();

},[])

  return (
    <div className="App">
      <p> <img src="https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"></img></p>
      </div>
  
  );
}

export default App;
