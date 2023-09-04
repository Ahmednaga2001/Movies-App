import React from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

export default function Movies({movies , getPage}) {
  return (
    <section className="movies py-3">
      <div className="container">
        <div className="row">
          {
            movies.length>=1?
            movies.map((mov)=>{
             return <MovieCard mov={mov} key={mov.id}/>
            }) : <h1 className="text-center text-danger m-3">No Movies</h1>
          }
        
      
        </div>        {/* row */}
      </div> {/* container */}
      <Pagination getPage={getPage}/>
    </section>
  );
}
