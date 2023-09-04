import React from "react";


import { Link} from "react-router-dom";

export default function MovieCard({mov}) {
 
  return (
    <div className="col-md-4 col-sm-6 mb-1">
      <div className="card p-3 text-center">
      <img src={`https://image.tmdb.org/t/p/w500/${mov.poster_path}`} alt=""/> 
        <h3>{mov.title}</h3>
        <h3>{mov.vote_average}</h3>
        
        <Link to={`/details/${mov.id}`} className="btn btn-danger">
          اقرأ اكتر
        </Link>
      </div>   {/*card*/}
   
    </div>
  );
}
