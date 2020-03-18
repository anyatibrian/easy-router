import {combineReducers} from 'redux'
import {routeReducer} from './routeReducer'

// the combine reducer  
export default combineReducers({
    routResult:routeReducer
})