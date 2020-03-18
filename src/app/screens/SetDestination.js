import React, { Component } from 'react'
import { 
    View,
    StyleSheet,
    Text,
    ImageBackground,
    TouchableOpacity
  } from 'react-native'
import { connect } from 'react-redux'
import FormInputs from '../components/FormInputs'
import { routeAction } from '../actions/routeActions'
import ResultList from '../components/ResultList'
import taxiImage from '../assets/taxi.jpg'

export class SetDestination extends Component {
    constructor(props){
        super(props)
        this.state ={
            destination:'',
            showList:true,
            destinationInput:{
              type:'textinput',
              value:null,
              lat:'',
              lng:''
            }
        }
    }

/**
 * @param {name}
 * @param {value}
 * 
 */
 
 handleTextChange=(value)=>{
    this.setState({showList:true})
    const { routeAction } = this.props
    //making call to the route actions
    routeAction(value)
  }
 
  /**
   * navigation to the mapsScreen passing the params 
   */
  goViewMapScreen = () =>{
      const {destination, destinationInput} = this.state
      const { route:{
                    params:{origin,lat,lng}
                },
                navigation:{
                    navigate
                } } = this.props
      navigate("RouteView", {
          originInfo:{
              lat:lat,
              lng:lng
          },
          destinationInfo:{
              lat:destinationInput.lat,
              lng:destinationInput.lng
          }
      })
      
  }

  /**
   * set the current location on the map
   * 
   */
 
  setDestination=(results, location)=>{
    //making various declarations 
     this.setState({destination:results,showList:false, destinationInput:{
       type:'textinput',
       value:null,
       lat:location.lat,
       lng:location.lng
     }})
  }
 
    render() {
        const {destination, destinationInput,showList} = this.state
        const {searchResult, loading}=this.props
         const displayResult = searchResult.map(result=>
         <ResultList 
         results={result} 
         key={result.geometry.lat}
         setDestination={this.setDestination}
         loading={loading}
        />
    )
        return (
            <View>
               <View style={styles.container}>
                <ImageBackground  source={taxiImage} style={styles.image}>
                <Text style={styles.text}>Where do you want to go ?</Text>
                   <FormInputs
                    style={styles.textInput}
                    placeholder="set your current location..."
                    autoCapitalize="none"
                    type={destinationInput.type}
                    value={destination}
                    placeholderTextColor="white"
                    onChangeText={value => {
                      this.handleTextChange( value)
                      this.setState({destination:value})
                    }}
                  />
                  { showList? displayResult: null }
                    <TouchableOpacity style={styles.Button} onPress={()=>this.goViewMapScreen()}>
                      <Text style={styles.buttonText}> View Routes</Text>
                    </TouchableOpacity>
              </ImageBackground>
            </View>
            </View>
          )
        }
      }
      
      export const mapStateToProps = state=>({
        searchResult: state.routResult.searchResult,
        loading:state.routResult.isLoading
      })
      
      // export the component 
      export default connect(mapStateToProps, {routeAction})(SetDestination)
      
      //styles sheet for the android application
      const styles = StyleSheet.create({
        container:{
          height:'100%'
        },
        textInput:{
          borderRadius:10,
          borderColor:'white',
          borderWidth:2,
          padding:10,
          marginLeft:15,
          marginRight: 10,
          marginBottom:5,
          fontSize:18,
          color:'white'
        },
        text:{
          fontSize:25,
          fontWeight:'bold',
          color:'white',
          padding:30,
          marginTop: 200
      
        },
        image:{
          resizeMode:'cover',
          height:'100%',
        },
        Button:{
          backgroundColor: 'white',
          marginLeft:15,
          marginRight: 10,
          marginTop: 15,
          padding:15
      
        },
        buttonText:{
          fontSize: 20,
          color:'#f57b51',
          marginLeft:100
        }
      })
      