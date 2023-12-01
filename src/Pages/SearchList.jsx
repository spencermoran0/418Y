
import '../CssStyle/SearchList.css';


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


import { useNavigate } from 'react-router-dom';

/* React imports */
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

/* Supabase Imports */
import supabase from "../Supabase/SupabaseClient";

function SearchList() {

  // useState hook to manage movies state
  const [movies, setMovies] = useState([]);
  // useState hook to manage error state
  const [error, setError] = useState(null);

  // useSearchParams hook to get query parameters from URL
  const [searchParams] = useSearchParams();
  // Extracting 'searchMovie' parameter from URL
  const searchTerm = searchParams.get('searchMovie');

  useEffect(() => {
    const fetchMovies = async () => {
      let { data: Movies, error } = await supabase
      .from('Movies')
      .select('id, title, genre, director, description') // Ensure 'id' is included
      .ilike('title', `%${searchTerm}%`);
    
  
      // ... [error handling remains unchanged]
      setMovies(Movies);
    };
  
    if (searchTerm) {
      fetchMovies();
    }
  }, [searchTerm]);


  const navigate = useNavigate();

  // Handler for movie box click
  const handleMovieClick = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  
  // Display error message if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>
      <Navbar />
      <section className="SearchResults">
        <div className="container">
          <h1 className="searchannouncment">Search Results for: {searchTerm}</h1>
          {movies.length > 0 ? (
            <div className="MovieList" >
              {movies.map((movie, index) => (
                <div key={index} className="movie-box" onClick={() => handleMovieClick(movie.id)}>
                  <h2>{movie.title}</h2>
                  <p>Genre: {movie.genre}</p>
                  <p>Director: {movie.director}</p>
                  <p>Description: {movie.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div>No movies found.</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchList;
