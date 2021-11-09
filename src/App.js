import logo from './logo.svg';
import './App.css';
import {useEffect} from 'react';
import {getmovie, getpopular} from './Api/api';
import recomend from './Components/recomend';


function App() {

const fetchmovie = async() => {
  const movie = await getmovie(550);
  const popular = await getpopular();
  console.log(popular);
}

useEffect(()=>{
fetchmovie();

},[])

  return (
    <div className="App">

    </div>
  );
}

export default App;
