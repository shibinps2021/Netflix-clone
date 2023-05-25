import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {imageUrl,API_KEY} from '../../Constants/Constants'
import Youtube from 'react-youtube'
import './RowPost.css'
function RowPost(props) {
  const [movies, setmovies] = useState([])
  const [urlId, setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data);
      setmovies(response.data.results )
    })
  })
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const handleMovie=(id)=>{
console.log(id);
axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
  if(response.data.results.length!==0){
    setUrlId(response.data.results[0])
  }else{
    console.log('array empty');
  }
})
  }
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img onClick={()=>handleMovie(obj.id)} className={ props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="posters" />
          )

          }
          
          </div>
         {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  )
}

export default RowPost