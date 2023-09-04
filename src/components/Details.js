import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export default function Details() {
 
  const param = useParams()
  const [movie , setMovie] = useState([])
  const getMovie = async ()=>{
    const res = await axios.get(`https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`)
    setMovie(res.data)
 
  }

  useEffect(()=>{
    getMovie()
  },[])

  return (

   <section className="movies py-3">
  <div className="container">
    <div className="row">
      <div className="col-md-6 mb-1">
        <h4>
        اسم الفيلم
        :
        {movie.title}
         
         </h4>
         <h4>
        تاريخ الفيلم
        :
        {movie.release_date}
         </h4>
         <h4>
        التقيم
        :
        {movie.vote_average}
      
         </h4>
        
      </div>{/* col */}
      <div className="col-md-6 mb-1 text-center">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="w-50 mx-auto" alt=""/> 
      </div>{/* col */}
    </div>{/* row */}
  </div>  {/* container */}
</section>

  )
}
