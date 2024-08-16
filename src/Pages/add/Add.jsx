import React, { useEffect, useState } from 'react'
import './add.css'
import axios from 'axios'
import CardResult from './CardResult/CardResult'
const Add = () => {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?s=${search}&apikey=148f7e34`).then((respone) => {
            if (respone.data.Search) {
                setSearchResults(respone.data.Search)
                console.log(respone.data.Search);

            } else{
                setSearchResults([])
            }


        })
    }, [search])
    return (
        <div className='container-add'>


            <div className="search-header">
                <input placeholder="Search" className="search-header__input" type="text"
                    value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className='add-grid'>
                {
                    searchResults.map((movie) => {
                        return <CardResult key={movie.imdbID} movie={movie} />
                    })
                }
            </div>
        </div>
    )
}

export default Add