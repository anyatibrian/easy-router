import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  PermissionsAndroid,
  Platform,
  Text,
  ImageBackground,
  TouchableOpacity, 
} from 'react-native'
import { connect} from 'react-redux'
import FormInputs from '../components/FormInputs'
import {routeAction} from '../actions/routeActions'
import ResultList from '../components/ResultList'
import taxiImage from '../assets/taxi.jpg'

export class SetOrigin extends Component {
  constructor(props){
    super(props)
    this.state ={
      origin:'',
      showList:true,
      originInput:{
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
 */
 
 handleTextChange=(value)=>{
   this.setState({showList:true})
   const { routeAction } = this.props
   //making call to the route actions
   routeAction(value)
 }

 gotoDestinationScreen = () =>{
   const { origin, originInput } = this.state
   this.props.navigation.navigate("SetDestination",{
     lat: originInput.lat,
     lng: originInput.lng,
     origin: origin
   })
 }
 /**
  * set the current location on the map
  * 
  */

 setDestination=(results, location)=>{
   //making various declarations 
    this.setState({origin:results,showList:false, originInput:{
      type:'textinput',
      value:null,
      lat:location.lat,
      lng:location.lng
    }})
 }

 /**
  * the component did mount elements
  */
  async componentDidMount(){
     await this.allowMapToAccessLocation()
  }
  /*ask for user permissions to access their
    particular localtion 
  */

  allowMapToAccessLocation = async()=>{
    try{
      if(Platform.OS === 'ios'){
        return true
      }else{
        const granted = PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        if( granted === PermissionsAndroid.RESULTS.GRANTED){
          return true
        }else{
          return false
        }
      }
    }catch(error){
      console.warn(error)
    }
  }

  render() {
    const {
        originInput,
        showList,
        origin,
    } = this.state
    const { searchResult, loading }=this.props
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
          <Text style={styles.text}>Where are you located at ?</Text>
             <FormInputs
              style={styles.textInput}
              placeholder="set your current location..."
              autoCapitalize="none"
              type={originInput.type}
              value={origin}
              placeholderTextColor="white"
              onChangeText={value => {
                this.handleTextChange( value)
                this.setState({origin:value})
              }}
            />
            { showList? displayResult: null }
              <TouchableOpacity style={styles.Button} onPress={()=>this.gotoDestinationScreen()}>
                <Text style={styles.buttonText}> Set Destination</Text>
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
export default connect(mapStateToProps, {routeAction})(SetOrigin)

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
