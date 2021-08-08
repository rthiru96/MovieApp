import React, { useState, useEffect } from 'react'
import MovieReel from '../images/popcorn.png';

function MovieItem(props: any) {
    console.log("movie Item: ", props.movie)
    return (
        <>
            <div className="max-w-2xl bg-white border-2 border-gray-300 p-5 rounded-md tracking-wide m-6 hover:bg-indigo-100 hover:shadow-xl cursor-pointer">
                <div id="header" className="flex">
                    <img alt="popcorn" className="w-45 rounded-md border-2 border-gray-300 w-16 h-16 my-auto mx-3" style={{ backgroundColor: "#334D5C" }} src={MovieReel} />
                    <div id="body" className="flex flex-col ml-5">
                        <h4 id="name" className="text-xl font-semibold mb-1">{props.movie.name} ({props.movie.year})</h4>
                        <p id="job" className="text-gray-800 mt-1">{props.movie.description}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MovieItem;
