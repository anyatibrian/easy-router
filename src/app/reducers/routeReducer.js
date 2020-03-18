import {IS_LOADING,SEARCH_RESULT,LOAD_ROUTES } from '../actions/actionTypes'

const initialState = {
    searchResult:[],
    isLoading:false,
    coordinatePoints: []
}

export const routeReducer = (state=initialState, actions) => {
    switch(actions.type){
        case SEARCH_RESULT:
            return{
                ...state,
                searchResult:actions.payload,
                isLoading:false
            }
        case IS_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case LOAD_ROUTES:
            return{
                ...state,
                coordinatePoints: actions.payload,
                isLoading: false
            }
        default:
            return state
    }
}