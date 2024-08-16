import React, { Fragment, useEffect, useState } from 'react'
import notFoud from '../../../images/not.jpg'
import './Card.css'
import { useMovie } from '../../../Components/Context/GlobalContext'
import * as actions from '../../../Components/Context/ActionsTypes'
const CardResult = ({ movie }) => {
    const moviesContext = useMovie();
    // const storedMovie = moviesContext.watchedList.find((o)=> o.imdbID === movie.imdbID) // movie.id === movie.id in watchlist return this object
    // const storedMovieWatched = moviesContext.watched.find((o)=> o.imdbID === movie.imdbID)

    // const watchlistDisabled = storedMovie ? true : 
    //       storedMovieWatched ? true : false

    // const watchedDisabled = storedMovieWatched ? true : false   

    const isInwatceh = moviesContext.watched.find((m) => m.imdbID === movie.imdbID);
    const isInWatchlist = moviesContext.watchedList.find((m) => m.imdbID === movie.imdbID)
    const watchedListDisabled = isInWatchlist ? true : isInwatceh ? true : false;
    const watchedDisabled = isInwatceh ? true : false;
    return (
        <Fragment>

            <div className="card-container">
                <div className="card-img">
                    <img src={movie.Poster === "N/A" ? notFoud : movie.Poster} alt={movie.Title} />
                </div>

                <div className="card-information">
                    <div className="card-title">
                        <h4>{movie.Title}</h4>
                        <p> {movie.Year}</p>
                    </div>

                    <div className="card-control">
                        <button className='btn '
                            disabled={watchedDisabled}
                            onClick={() => moviesContext.actionDispath({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                payload: movie
                            })}

                        > Add  To Watched</button>

                        <button
                            disabled={watchedListDisabled}
                            className='btn ' onClick={() => moviesContext.actionDispath(
                                {
                                    type: actions.ADD_MOVIE_TO_WATCHLIST,
                                    payload: movie
                                }
                            )}


                        > Add  To Watched List</button>

                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default CardResult