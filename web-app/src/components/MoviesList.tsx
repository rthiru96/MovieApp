import React, { useState, useEffect } from 'react'
import MovieItem from './MovieItem'

function MoviesList(props: any) {

    console.log("Movie list props: ", props)

    return (
        <>
            {props.movies.length > 0 ? props.movies.map((movie: { id: any }) => <MovieItem movie={movie} key={movie.id} />) : <h1 className="m-10 text-base "> No Movies Found....... </h1>}
        </>
    )
}

export default MoviesList