import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import {getmovie, getpopular} from './Api/api';
import {Search} from './Search/Search';
import recomend from './Components/recomend';
import Movie from './Api/Movie';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";




const FEATURED_API ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=618a4d3048a1a1f797c014affaf110b4&page=1";
const IMAGE_API = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=618a4d3048a1a1f797c014affaf110b4&query=";

export default function App() {
  

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


        <Router>
          <div>
            <div className="Bar">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/Search">Search</Link>
              </nav>
              </div>
              <Routes> 
                <Route path ="/Search" element={<Search/>}/>

                <Route path ="/users" elements={<Users/>}/>
              </Routes>
          </div>
        </Router>
          
   
    </>


   );

  


}

function Home(){
  return <h4>Home</h4>

}
function About(){
  return <h4>About</h4>
}

function Users(){
  return <h4>Users</h4>;
  
}


// export default App;
