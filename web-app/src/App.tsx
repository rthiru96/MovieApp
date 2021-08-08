import React, { useState, useEffect } from 'react'
import './App.css'
import MoviesList from './components/MoviesList';
import { useStore, State } from "./MovieStore";
import { debounce } from 'lodash'

function App() {
  const [moviesCount, setMoviesCount] = useState(0)
  const { movies, setMovies } = useStore();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const getMovies = async () => {
      const dataFromServer = await fetchMovies();
      setMovies(dataFromServer);
      setMoviesCount(dataFromServer.length);
    }

    getMovies()
  }, [])

  const fetchMovies = async () => {
    const res = await fetch('http://localhost:4000/api/movies');

    const data = await res.json();

    if (data.success) {
      return data.data;
    }
  }

  const onSearchType = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setSearchValue(e.target.value);
  }

  return (
    <>
      <div className="container">
        <div className="border border-gray-300 shadow-sm mx-auto max-w-xl my-5 min-h-500 rounded">
          {/* Header */}
          <header className="border border-gray-300 shadow-m p-5" style={{ backgroundColor: "#728C9B" }}>
            <div className="max-w-2 flex p-3 shadow-m">
              <h3 className="text-3xl font-sans m-3 font-bold text-white">
                Movies
            </h3>
              <div className="w-8 h-8 mt-5 mx-3">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="white">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input className="flex-1 appearance-none rounded-3xl shadow p-3 text-grey-dark m-3 focus:outline-none"
                placeholder="Search Movie..." value={searchValue}
                onChange={(e) => onSearchType(e)} />
            </div>
          </header>
          {/* Movie List */}
          <MoviesList movies={movies.filter((movie: Movie) => movie.name.toLowerCase().includes(searchValue.toLowerCase()))} />

          <footer className="text-right border border-gray-300 shadow-m p-5 text-white" style={{ backgroundColor: "#728C9B" }}>
            <p style={{ color: "##e8e8e8" }}> Number of movies: {moviesCount} </p>
          </footer>
        </div>
      </div>
    </>
  )
}

interface Movie {
  id: number;
  name: string;
  year: number;
  description: string;
}

export default App