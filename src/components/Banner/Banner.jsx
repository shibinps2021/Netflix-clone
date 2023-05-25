import React, { useEffect, useState } from 'react'
import axios from '../../axios'
import { API_KEY,imageUrl } from '../../Constants/Constants'
import './Banner.css'
import Youtube from 'react-youtube'
function Banner() {
  const [movie,setMovie]= useState()
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      console.log(response.data.results[0]);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length-1)])
    })
  },[])
  const opts = {
    height: '590',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
// console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    // console.log('array empty');
  }
})
  }
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path : ""})`}} className={urlId ? 'popup':'banner'}>
       <div className="content">
        <h1 className='title'>{movie? movie.title : ''}</h1>
       <div className="banner_buttons">
        <button onClick={()=>handleMovie(movie.id)} className='button'>Play</button>
        <button className='button'>My List</button>
       </div>
        <h1 className='description'>{movie? movie.overview : ""}</h1>
       </div>
       <div className="fade_bottom"></div>
       
       

       {urlId && <Youtube videoId={urlId.key} opts={opts} />}
        
       
    </div>
    
  )
}

export default Banner