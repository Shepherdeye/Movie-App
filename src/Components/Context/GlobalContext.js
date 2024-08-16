import { createContext, useContext, useReducer, useEffect } from "react"
import { reducer } from "./Reducer"
import { json } from "react-router-dom"

const initialize = {
    watched: localStorage.getItem("watched") ? JSON.parse(localStorage.getItem("watched")) : [],
    watchedList: localStorage.getItem("watchedList") ? JSON.parse(localStorage.getItem("watchedList")) : []
}
const ContextGlobal = createContext()
const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialize);
    useEffect(() => {
        localStorage.setItem("watched", JSON.stringify(state.watched));
        localStorage.setItem("watchedList", JSON.stringify(state.watchedList));
    }, [state])
    return (
        <ContextGlobal.Provider value={{
            watched: state.watched,
            watchedList: state.watchedList,
            actionDispath: dispatch
        }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default ContextProvider
export const useMovie = () => {
    return useContext(ContextGlobal)
}