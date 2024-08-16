

import * as actions from './ActionsTypes'

export const reducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return {
                ...state,
                watchedList: [action.payload, ...state.watchedList]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return {
                ...state,
                watchedList: state.watchedList.filter((movie) => {
                    return movie.imdbID !== action.payload
                })
            };
        case actions.MOVE_TO_WATCHLIST:
            return {
                ...state,
                watched: state.watched.filter((movie) => {
                    return movie.imdbID !== action.payload.imdbID
                }),
                watchedList: [action.payload, ...state.watchedList]
            };
        case actions.ADD_MOVIE_TO_WATCHED:
            return {
                ...state,
                watchedList: state.watchedList.filter((movie) => {
                    return movie.imdbID !== action.payload.imdbID
                }),
                watched: [action.payload, ...state.watched]
            };
        case actions.REMOVE_MOVIE_FROM_WATCHED:
            return {
                ...state,
                watched: state.watched.filter((movie) => {
                    return movie.imdbID !== action.payload
                })
            }

        default:
            return state;
    }
}