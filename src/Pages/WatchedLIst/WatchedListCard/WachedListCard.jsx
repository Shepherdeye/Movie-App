import React from 'react'
import './WatchedListCard.css'
import { useMovie } from '../../../Components/Context/GlobalContext'

import * as actions from '../../../Components/Context/ActionsTypes'
const WatchedListCard = ({ movie }) => {
    const moviesContext = useMovie()
    return (
        <div className="card">
            <img src={movie.Poster} alt={movie.Title} />
            <b></b>
            <div className="content" >

                <p className="title">{movie.Title}<br /><span>{movie.Year}</span></p>

                <ul className="sci">
                    <li >
                      
                            <button className='btnControl' onClick={() => moviesContext.actionDispath({
                                type: actions.ADD_MOVIE_TO_WATCHED,
                                payload: movie
                            })}>👁</button>
                        
                    </li>

                    <li >
                   
                            <button className='btnControl' onClick={()=>{moviesContext.actionDispath({
                                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                                payload: movie.imdbID
                            })}} >✖</button>
                        
                    </li>



                </ul>
            </div>
        </div>
    )
}

export default WatchedListCard