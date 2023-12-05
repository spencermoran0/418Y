import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import supabase from '../Supabase/SupabaseClient'; // Import your Supabase client
import "../CssStyle/MovieProfile.css";

function MovieProfile() {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        let { data, error } = await supabase
          .from('Movies')
          .select('*') // Select all fields, or specify fields you need
          .eq('id', movieId) // Filter to get the movie with the provided ID
          .single(); // Assuming ID is unique and returns a single record

        if (error) {
          throw error;
        }

        setMovie(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (movieId) {
      fetchMovie();
    }
  }, [movieId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!movie) {
    return <div>Movie not found.</div>;
  }

  return (
    <>
      <Navbar />
      <div className="movie-profile">
        <h1>{movie.title}</h1>
        <p><strong>Genre:</strong> {movie.genre}</p>
        <p><strong>Director:</strong> {movie.director}</p>
        <p><strong>Description:</strong> {movie.description}</p>
        {/* Add more movie details as needed */}
      </div>
      <Footer />
    </>
  );
}

export default MovieProfile;
