import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Movies from "./components/Movies";

import { Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import axios from "axios";
export default function App() {
    const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    setMovies(res.data.results);
  };


  useEffect(() => {
    getMovies();
  }, []);
  const search = async (word) => {
    if(word===""){
      getMovies()
    }
    else{

    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
    );
    setMovies(res.data.results);
  }}
  const getPage= async (page) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar&page=${page}`
    );
    setMovies(res.data.results);
  };
  
 
  return(
      <>
        <Header search={search} />
      <Routes>
        <Route path="/" element={<Movies movies={movies} getPage={getPage}/> }/>
        <Route path="/movie/:id" element={<Details/>}/>

      </Routes>


 

  
  
  </>
  )

}
