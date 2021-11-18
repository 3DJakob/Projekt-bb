import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {getmovie, getpopular} from './Api/api';
import recomend from './Components/recomend';
import Movie from './Api/Movie';




const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";

function App() {
  
  const [ movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm]= useState(' ');
  
  useEffect(() =>{
    getMovies(FEATURED_API);
  
  },[]);

    const getMovies = (API) => {
      fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
    }

  const handleOnSubmit= (e) => {
    e.preventDefault();

    if(searchTerm){
      getMovies(SEARCH_API+searchTerm);
    // fetch(SEARCH_API + searchTerm)
    // .then((res) => res.json())
    // .then((data) => {
    //   setMovies(data.results);
    // });

    setSearchTerm(''); 
    }
  };
  
  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  }
   return (
    <>
        <header>
        <form onSubmit= {handleOnSubmit}>
          <input className="search" type="search" placeholder="Search..." value={searchTerm} onChange={handleOnChange} />
          </form>
        </header><div className="movie-container">

          {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />
          )}

        </div>
      </>
   );


  // const fetchmovie = async() => {
  //   const movie = await getmovie(550);
  //   const popular = await getpopular();
  //   const moviename = movie.title;
  //   console.log(moviename);
  
  // }

  // const API = 

  // useEffect(()=>{
  // fetchmovie();

  // },[])

  //   return (
  //     <div className="App">
  //       </div>
    
  //   );
}

export default App;
