import React from 'react'
import { View, StyleSheet, Text, TouchableHighlight,ActivityIndicator} from 'react-native'
import MapView,{PROVIDER_GOOGLE,Marker, Polyline} from 'react-native-maps'
import Icons from './Icons'

const MapsView = ({coordinates, handleRoutes,loading}) => {
    const coords = coordinates.map(([longitude, latitude])=>{
        return { latitude, longitude}
    })
    return (
        <View>
             <MapView
             style={styles.container}
             provider={PROVIDER_GOOGLE}
             showsUserLocation={true}
             region={{
             latitude:0.318522,
             longitude:32.586076,
             latitudeDelta:0.20,
             longitudeDelta:0.20
             }}>
             { coords.length !==0?
                <Polyline
                 coordinates={[...coords]}
                 strokeWidth={4}
                 strokeColor="black"
                 />:null
            }
            {
              coords[coords.length-1]? <Marker
              coordinate={ coords[coords.length-1]}
              /> : null
            }
            
            {
               coords[0]? <Marker
               coordinate={ coords[0]}
               pinColor="green"
               />:null
            }
            </MapView>
            <View style={styles.rtContainer}>
                <TouchableHighlight onPress={()=>handleRoutes('car')} style={styles.touchables} >
                    {loading ? <ActivityIndicator size="large" color="#ffff" style={styles.indication}/>:<Icons 
                        style={styles.Icons}
                        name="directions-car" 
                        size={40}/> 
                    }
                </TouchableHighlight>
                <TouchableHighlight style={styles.touchables} onPress={()=>handleRoutes('bike')}>
                    {loading ? <ActivityIndicator size="large" color="#ffff" style={styles.indication}/>:
                        <Icons 
                        style={styles.Icons}
                        name="motorcycle" 
                        size={40}/>
                    }
                </TouchableHighlight>
                <TouchableHighlight style={styles.touchables} onPress={()=>handleRoutes('foot')}>
                    {loading ? <ActivityIndicator size="large" color="#ffff" style={styles.indication}/>:
                        <Icons 
                        style={styles.Icons}
                        name="directions-walk" 
                        size={40}/> 
                    }
                </TouchableHighlight>
            </View>
        </View>
    )
}

export default MapsView

const styles = StyleSheet.create({
    container: {
        height:'100%',
        width:'100%',
        zIndex:-1
      },
      map: {
         ...StyleSheet.absoluteFillObject
      },
      rtContainer:{
          flexDirection:"row",
          marginTop:'130%',
          position:'absolute',
          margin:40
      },
      Icons:{
          color:'white',
          padding:20
      },
      touchables:{
          display:'flex',
          borderColor:'#f57b51',
          backgroundColor:'#f57b51',
          height:80,
          width: 80,
          marginLeft:20,
          borderRadius:100
      },
      indication:{
          padding:20
      }
})
