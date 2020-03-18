import React from 'react'
import {TextInput } from 'react-native'

const FormInputs = (props) => {
    let userInput = null
    switch(props.type){
        case 'textinput':
            userInput = <TextInput {...props} />
            break
        default:
            return userInput
    }
    return userInput
}

export default FormInputs
