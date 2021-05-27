import React,{createContext,useReducer,useEffect} from "react";

import {AppReducer} from './AppReducer'

// initial state
const initialState = {
    watched:[],
    watchList:[],
}

// create context
export const GlobalContext = createContext(initialState)


// actions
const addMovieToWatchList =(movie) =>{
    dispatch({type: "ADD_MOVIE_TO_WATCHLIST",payload: movie})
}

// provider components
export const GlobalProvider = props => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    return(
        <GlobalContext.Provider value={{watchList: state.watchList , watched: state.watch}}>
            {props.children}
        </GlobalContext.Provider>
    )
}