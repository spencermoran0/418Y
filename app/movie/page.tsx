"use client";
import React, { useState } from "react";
import { createClient } from "@supabase/supabase-js";


const supabaseUrl = 'https://hohfglmwtxowakbhumgj.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhvaGZnbG13dHhvd2FrYmh1bWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwNjExMTYsImV4cCI6MjAxNDYzNzExNn0.43T-tx3DSYlOaJzjoAxw6zXY_IjcbHEv5RsOu98x8NQ"
const supabase = createClient(supabaseUrl, supabaseKey);

export default function MoviePage() {
    const [title, setTitle] = useState("");
    const [genre, setGenre] = useState("");
    const [director, setDirector] = useState("");
    const [description, setDescription] = useState("");
    const [rating, setRating] = useState("");
    const [review, setReview] = useState("");

    const [isMovieExisting, setIsMovieExisting] = useState(false);
    const [hasEnteredTitle, setHasEnteredTitle] = useState(false);

    const checkMovie = async () => {
        // const { data, error } = await supabase
        //     .from("movies")
        //     .select()
        //     .eq("title", title);
        //
        // if (error) {
        //     console.error("Error checking for existing movie:", error);
        //     return;
        // }
        if(title == "Iron Man") {
            setIsMovieExisting(true);
        } else {
            setIsMovieExisting(false);
            setHasEnteredTitle(true);
        }
        //setIsMovieExisting(data.length > 0);
    };

    const addMovie = async () => {
        const { data, error } = await supabase
            .from("movies")
            .upsert([{ title, genre, director }]);

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



    return (
        <div className="max-w-md mx-auto bg-gray-800 rounded p-8 text-white">
            <h1 className="text-2xl font-semibold mb-4">
             Enter Movie Name
            </h1>
            <form className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium">
                        Title
                    </label>
                    <input
                        type={"text"}
                        id={"title"}
                        name={"title"}
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border-gray-600 rounded-md shadow-sm text-black"
                    />
                </div>
                <div className="space-y-2">
                    <input
                        value={"Check Movie"}
                        type={"button"}
                        id={"checkMovieButton"}
                        name={"checkMovieButton"}
                        onClick={() => checkMovie()}
                        className="text-right bg-blue-500 text-white py-2 px-4 rounded-md w-32"
                    />
                    <div className=" space-x-10" >
                        {!isMovieExisting && hasEnteredTitle && (
                            <div className="space-y-2">
                                <label htmlFor={"director"} className="block text-sm font-medium"> Director</label>
                                <input
                                    type = {"text"}
                                    id={"director"}
                                    name={"director"}
                                    onChange ={(e) => setDirector(e.target.value)}
                                    className="w-full border-gray-600 rounded-md shadow-sm text-black"
                                />
                                <br></br>
                                <label htmlFor={"genre"} className="block text-sm font-medium"> Genre</label>
                                <input
                                    type={"text"}
                                    id={"genre"}
                                    name={"genre"}
                                    onChange ={(e) => setGenre(e.target.value)}
                                    className="w-full border-gray-600 rounded-md shadow-sm text-black"
                                />
                                <br></br>
                                <label htmlFor={"description"} className="block text-sm font-medium"> Description</label>
                                <input
                                    type={"text"}
                                    id={"description"}
                                    name={"description"}
                                    onChange ={(e) => setDescription(e.target.value)}
                                    className="w-full border-gray-600 rounded-md shadow-sm text-black"
                                />
                                <br></br>
                                <input
                                    value={"Add Movie"}
                                    type={"button"}
                                    id={"addMovieButton"}
                                    name={"addMovieButton"}
                                    onClick={() => addMovie()}
                                    className="text-right bg-blue-500 text-white py-2 px-4 rounded-md w-32"
                                />
                            </div>
                        )}
                        {isMovieExisting && (
                            <div className=" space-y-5 space-x-3">
                                <label htmlFor={"rating"}> Rating (1-5)</label>
                                <input
                                    type={"range"}
                                    id={"rating"}
                                    name={"rating"}
                                    min={"1"}
                                    max={"5"}
                                    onChange={(e)=> setRating(e.target.value)}
                                    className="w-2/3 border-gray-300 rounded-md shadow-sm text-black px-3"
                                />
                                <br></br>
                                <label htmlFor={"Review"}> Review </label>
                                <input
                                    type={"text"}
                                    id={"review"}
                                    name={"review"}
                                    onChange={(e)=> setReview(e.target.value)}
                                    className="w-full border-gray-600 rounded-md shadow-sm text-black"
                                />
                                <br></br>
                                <input
                                    value={"Add Review"}
                                    type={"button"}
                                    id={"addReviewButton"}
                                    name={"addReviewButton"}
                                    onClick={() => addReview()}
                                    className="text-right bg-blue-500 text-white py-2 px-4 rounded-md w-32"
                                />
                            </div>
                        )}
                    </div>
                </div>
            </form>
        </div>
    );
}