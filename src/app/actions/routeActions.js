import opencage from 'opencage-api-client'
import {IS_LOADING, SEARCH_RESULT,LOAD_ROUTES} from './actionTypes'
import {key,graphopperApiKey,graphopperUrl} from '../utils/contants'
import axios from 'axios'


/**
 * actions responsible for handling routes
 * @param {*} value 
 */
export const routeAction = (value) => async dispatch=>{

    dispatch({
        type:IS_LOADING,
        payload:null
    })

    try{
        const response = await opencage.geocode({key, q:value})
        dispatch({
            type: SEARCH_RESULT,
            payload:response.results
        })
    }catch(error){
        console.log(error.response.status)
    }

}

/**
 * 
 * @param {*} originPoint 
 * @param {*} destinationPoints 
 * @param {*} mode 
 */
export const RoutingPoints = (originPoint,destinationPoints,mode) => async dispatch=> {
    console.log(destinationPoints, originPoint)
    dispatch({
        type: IS_LOADING
    })
    const response = await axios({
        url:`https://graphhopper.com/api/1/route?point=${destinationPoints.lat},${destinationPoints.lng}&point=${originPoint.lat},${originPoint.lng}&vehicle=${mode}&key=${graphopperApiKey}&type=json&points_encoded=false&elevation=true&turn_cost=false&weighting=fastest&locale=en-GB`,
        method:'GET',
        responseType:'json'
    })
    const { paths } = response.data
    const[{points: {coordinates}},] = paths;
    dispatch({
        type: LOAD_ROUTES,
        payload: coordinates
    })
}
