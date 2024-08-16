import React, { Fragment } from 'react'
import './Watched.css'
import WatchedCard from './WatchedCard'
import { useMovie } from '../../Components/Context/GlobalContext'
const Watchhed = () => {
    const moviesContext = useMovie()
    return (
        <Fragment>
        <div className='container-watched'>
            <div className='head-watched'>
                <div className='title-head-watchlist'>
                    <h2>My watched </h2>
                </div>
                <div className='count-watchlist'>
                    <button className="Btn">
                        <span className="leftContainer">
                            <span className="like">results</span>
                        </span>
                        <span className="likeCount">
                           {moviesContext.watched.length}
                        </span>
                    </button>
                </div>
            </div>

            {moviesContext.watched.length > 0 ? <div className="watch-list-body">

                {moviesContext.watched.map((movie) => {
                    return <WatchedCard key={movie.imdbID} movie={movie}/>
                })}


            </div> : <h2 style={{color: "gray",margin:"50px auto"}}> There is no movie in our watched !</h2>}

        </div>
    </Fragment>
    )
}

export default Watchhed