import React from 'react'
import { View, Text, StyleSheet,TouchableHighlight, ActivityIndicator } from 'react-native'
import Icons from './Icons'

const ResultList = ({results, setDestination,loading}) => {
    return (
        <TouchableHighlight 
        onPress={()=>setDestination(results.formatted,results.geometry)} 
        >
             <View style={styles.textView}>
             <Icons 
                name="location-on" 
                size={30}
                 color="#f57b51"/> 
            {loading?<ActivityIndicator size="small" color="#f57b51" />:
            <Text > 
                 { results.formatted } 
            </Text>}
        </View>
        </TouchableHighlight>
    )
}

export default ResultList

const styles = StyleSheet.create({
    listContainer:{
        marginTop: 30
    },
    textView:{
        marginLeft:18,
        marginRight:15,
        padding:15,
        fontSize:18,
        paddingBottom:15,
        backgroundColor:'#ffff',
        borderBottomColor:'#e3e3e3',
        borderBottomWidth: 1,
        flexDirection: 'row'
    }
})