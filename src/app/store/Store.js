import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from  'redux-thunk'
import rootReducer from '../reducers'

const middlerWare = [thunk]
const initialState ={}

// creating the store 
export default createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(...middlerWare))
    )
    