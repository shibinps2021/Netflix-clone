import Result from "./Result";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import './Search.css'
import { useNavigate } from "react-router-dom";

const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
function Search() {
  const navigate=useNavigate()
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");

  const changeTheSearch = (event) => {
    // console.log(event.target.value);
    setSearch(event.target.value);
  }

  // const getAllMovies = () => {
  //   axios.get(APIURL)
  //     .then(
  //       (response) => {
  //         console.log(response.data.results)
  //         setMovies(response.data.results);
  //       }
  //     )
  //     .catch(
  //       (error) => {
  //         console.log(error)
  //       }
  //     )
  // }

  const getSearchedMovies = () => {
    // console.log(SEARCHAPI + search)
    axios.get(
      SEARCHAPI + search
    )
      .then(
        (response) => {
          console.log(response.data.results)
          setMovies(response.data.results);
        }
      )
      .catch(
        (error) => { 
          console.log(error);
        }
      )
  }

  useEffect(
    () => {
      setMovies([]);
      // console.log("Hello");
      if (search === "") {
        // <Content/>
        // getAllMovies()
      } else {
        getSearchedMovies();
      }
    },
    [search]
  )

  return (
    <div className="max-w-[1240px] shadow-xl min-h-[400px] mx-auto p-3">
      <input className='searchbar' type="search" value={search} onChange={changeTheSearch}  />
      {
        movies.length === 0
          ?
          <div className="text-3xl text-center mt-2"> Loading... </div>
          :
          navigate('/result')

      }
    </div>
  );
}

export default Search;