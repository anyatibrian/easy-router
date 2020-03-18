import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import { RoutingPoints } from '../actions/routeActions/'
import MapsView from '../components/MapsView'

export class RouteView extends Component {
    constructor(props){
        super(props)
        this.state={
            userLatitude:'',
            userLongitude:'',
        }
    }
    
    /**
     * handlingcyclingRoutes
     */
    handleRoutes=(mode)=>{
        const{RoutingPoints, route:{params:{originInfo, destinationInfo}}} = this.props
        RoutingPoints(originInfo,destinationInfo, mode)
    }
    componentDidMount(){
        const { originInfo, destinationInfo} =this.props.route.params
        const { RoutingPoints }= this.props
        RoutingPoints(originInfo, destinationInfo, 'car')
    }
    render() {
        const {userLatitude, userLongitude} = this.state
        const { coordinates, loading, route:{params:{originInfo, destinationInfo}}} = this.props
        return (
            <View>
                <MapsView coordinates={coordinates}
                userLatitude={userLatitude}
                userLongitude={userLongitude}
                routingPoint={RoutingPoints}
                handleRoutes={this.handleRoutes}
                destination={destinationInfo.destination}
                origin={originInfo.origin}
                loading={loading}
                />
            </View>
        )
    }
}

export const mapStateToProps = state=>({
    coordinates: state.routResult.coordinatePoints,
    loading:state.routResult.isLoading
  })
export default  connect(mapStateToProps, { RoutingPoints })(RouteView)
