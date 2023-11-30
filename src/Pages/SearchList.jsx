
import '../CssStyle/SearchList.css';


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
    // Function to fetch movies from Supabase
    const fetchMovies = async () => {
      // Querying Supabase
      let { data: Movies, error } = await supabase
        .from('Movies') // Specifies the 'Movies' table in Supabase
        .select('title') // Selects the 'title' column
        // Searches for titles that contain the search term, case-insensitive
        .ilike('title', `%${searchTerm}%`);

      if (error) {
        // If there's an error, set it in state
        setError(error);
      } else {
        // If no error, set the fetched movies in state
        setMovies(Movies);
      }
    };

    // Call fetchMovies if searchTerm is available
    if (searchTerm) {
      fetchMovies();
    }
  }, [searchTerm]); // useEffect dependency array - re-run when searchTerm changes

  // Display error message if there's an error
  if (error) {
    return <div>Error: {error.message}</div>;
  }



  return (
    <div>
      <Navbar />
      {/* Search Results */}
      <section className="SearchResults">
        <div className="container">
          <h1>Search Results for: {searchTerm}</h1>
          {movies.length > 0 ? (
            // Map over the movies array to display each movie
            <ul>
              {movies.map((movie, index) => (
                <li key={index}>{movie.title}</li>
              ))}
            </ul>
          ) : (
            // Display message if no movies found
            <div>No movies found.</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default SearchList;
