import React, { Fragment } from 'react'
import './WatchedList.css'
import WatchedListCard from './WatchedListCard/WachedListCard'
import { useMovie } from '../../Components/Context/GlobalContext'
const WatchedList = () => {
    const moviesContext = useMovie()
    return (
        <Fragment>
            <div className='container-watchedList'>
                <div className='head-watchedList'>
                    <div className='title-head-watchlist'>
                        <h2>My WatchedList </h2>
                    </div>
                    <div className='count-watchlist'>
                        <button className="Btn">
                            <span className="leftContainer">
                                <span className="like">results</span>
                            </span>
                            <span className="likeCount">
                               {moviesContext.watchedList.length}
                            </span>
                        </button>
                    </div>
                </div>

                {moviesContext.watchedList.length > 0 ? <div className="watch-list-body">

                    {moviesContext.watchedList.map((movie) => {
                        return <WatchedListCard key={movie.imdbID} movie={movie}/>
                    })}


                </div> : <h2 style={{color: "gray",margin:"50px auto"}}> There is no movie in our watchedList !</h2>}

            </div>
        </Fragment>
    )
}

export default WatchedList