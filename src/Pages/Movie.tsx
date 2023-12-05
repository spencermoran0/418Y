"use client";
import React, { useState } from "react";

import supabase from "../Supabase/SupabaseClient";


import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';


export default function MoviePage() {
    //the following was created by Bret Jempty but heavily refined and reworked by Spencer Moran
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [director, setDirector] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    const [isMovieExisting, setIsMovieExisting] = useState(false);
    const [hasEnteredTitle, setHasEnteredTitle] = useState(false);
    const [isMovieButtonVisible, setIsMovieButtonVisible] = useState(true);

    //checkMovie searches for title in the movie table.
    const checkMovie = async () => {
        try {
            const { data, error } = await supabase
                .from("Movies")
                .select('title')
                .eq('title', title);
    
            if (error) {
                console.error("Error checking for existing movie:", error);
                return;
            }
    
            const movieExists = data !== null && data.length > 0;
            //updating useStates to change the page appearance
            setIsMovieExisting(movieExists);
            setHasEnteredTitle(!movieExists);
            setIsMovieButtonVisible(false);

        } catch (error) {
            console.error("Error checking for existing movie:", error);
        }

    };

    //add movie adds the
    const addMovie = async () => {
        const { data, error } = await supabase
            .from("Movies")
            .upsert([{ title, genre, director, description}]);

        if (error) {
            console.error("Error inserting the movie:", error);
        } else {
            console.log("Movie inserted successfully:", data);
            // You can reset the form or perform any other action as needed
        }
        setIsMovieExisting(false);
        setHasEnteredTitle(false);
    };

    const addReview = async () =>{
        const {data, error} = await supabase
            .from('reviews').insert({title, rating, review});
        if (error) {
            console.error("Error inserting the review:", error);
        } else {
            console.log("Review inserted successfully:", data);
            // You can reset the form or perform any other action as needed
        }
        setIsMovieExisting(false);
        setHasEnteredTitle(false);
    }


    /* Styling functions */
    // Define styles
    const containerStyle = {
        maxWidth: '100%',
        margin: 'auto',
        backgroundColor: '#1F2937', // bg-gray-800
        borderRadius: '8px', // rounded
        padding: '32px', // p-8
        color: 'white', // text-white
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.875rem', // text-sm
        fontWeight: '500', // font-medium
    };

    const inputStyle = {
        width: '100%', // w-full
        borderColor: '#4B5563', // border-gray-600
        borderRadius: '0.375rem', // rounded-md
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
        padding: '0.5rem', // py-2 px-4
        color: 'black', // text-black
        margin: '0.5rem 0', // my-2
    };

    const buttonStyle = {
        backgroundColor: '#3B82F6', // A shade of blue
        color: 'white',
        padding: '10px 20px', // Adjust padding as needed
        borderRadius: '4px',
        border: 'none', // Remove default border
        cursor: 'pointer', // Change cursor to pointer on hover
        fontSize: '16px', // Adjust font size as needed
        margin: '10px 0', // Add some margin
    };

    const mainContainerStyle = {
        minHeight: '850px',
        backgroundColor: '#BFC0C0', // bg-gray-800
    };
    //The following html was made by Bret Jempty
    return (
        <div>
             <Navbar />

             <div style={mainContainerStyle}>
        <div style={containerStyle}>
            {/*The input for getting the title*/}
            <h1 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>Enter Movie Name</h1>
            <form style={{ margin: '1rem' }}>
                <div>
                    <label htmlFor="title" style={labelStyle}>Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={inputStyle}
                    />
                </div>
                {/*The button for inputting the title*/}
                <div>
                    <input
                        value="Check Movie"
                        type="button"
                        id="checkMovieButton"
                        name="checkMovieButton"
                        onClick={() => checkMovie()}
                        style={buttonStyle}
                    />
                </div>
                {/*If the movie doesn't exist and the user has tried clicking the check movie button, they are
                prompted to input the details of the movie into the database before they can review it*/}
                {!isMovieExisting && hasEnteredTitle && (
                    <div>
                        <label htmlFor="director" style={labelStyle}>Director</label>
                        <input
                            type="text"
                            id="director"
                            name="director"
                            onChange={(e) => setDirector(e.target.value)}
                            style={inputStyle}
                        />
                        <label htmlFor="genre" style={labelStyle}>Genre</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            onChange={(e) => setGenre(e.target.value)}
                            style={inputStyle}
                        />
                        <label htmlFor="description" style={labelStyle}>Description</label>
                        <input
                            type="text"
                            id="description"
                            name="description"
                            onChange={(e) => setDescription(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            value="Add Movie"
                            type="button"
                            id="addMovieButton"
                            name="addMovieButton"
                            onClick={() => addMovie()}
                            style={buttonStyle}
                        />
                    </div>
                )}
                {/*If the movie does exist, allow the user to create a rating and review with the associated movie*/}
                {isMovieExisting && (
                    <div>
                        <label htmlFor="rating" style={labelStyle}>Rating (1-5)</label>
                        <input
                            type="range"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            onChange={(e) => setRating(e.target.value)}
                            style={{ ...inputStyle, width: '66%' }} // Adjust width for range input
                        />
                        <label htmlFor="review" style={labelStyle}>Review</label>
                        <input
                            type="text"
                            id="review"
                            name="review"
                            onChange={(e) => setReview(e.target.value)}
                            style={inputStyle}
                        />
                        <input
                            value="Add Review"
                            type="button"
                            id="addReviewButton"
                            name="addReviewButton"
                            onClick={() => addReview()}
                            style={buttonStyle}
                        />
                    </div>
                )}
            </form>
        </div>
        </div>
        <Footer />
        </div>
    );
}