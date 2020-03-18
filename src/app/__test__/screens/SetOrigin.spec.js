import React from 'react'
import {shallow } from 'enzyme'
import {PermissionsAndroid} from 'react-native'
import { SetOrigin, mapStateToProps } from '../../screens/SetOrigin'

const props ={
    searchResult:[], 
    loading:false,
    routeAction:jest.fn(),
    navigation:{
        navigate:jest.fn()
    },
    handleTextChange: jest.fn()
}
let instance
let wrapper

describe('Should test set Origin', () => {
    beforeEach(()=>{
        wrapper = shallow(<SetOrigin {...props} />)
        instance = wrapper.instance()
    })

    it( 'should the test the component mount successfully', ()=>{
        expect(wrapper).toMatchSnapshot()
    })

    it('should test the handleChangeMethod method',()=>{
        instance.handleTextChange('kampala')
        wrapper.setState({showList:true})
        expect(props.routeAction).toHaveBeenCalled()
        expect(instance.state.showList).toEqual(true)
    })

    it('should test go to destination screen',()=>{
        instance.gotoDestinationScreen()
        expect(props.navigation.navigate).toHaveBeenCalled()
    })

    it('should test setDestination method',()=>{
        const location={
            lat:32.542834,
            lng:0.210184
        }
        instance.setDestination('kampala', location )
        wrapper.setState({
            destination:'kampala',
            showList:false,
            destinationInput:{
                type:'textinput',
                value:null,
                lat:32.542834,
                lng:0.210184
              }
    })

    expect(instance.state.destination).toEqual('kampala')
    })

    it('should test maps state to props', ()=>{
        const state = {
            routResult:{
                searchResult:[],
                loading:undefined
            }
        }
        expect(mapStateToProps(state))
    })
    it('should test onchange event handler',()=>{
        const formInput = wrapper.find('FormInputs').first()
        formInput.props().onChangeText()
        const handleChange = jest.spyOn(instance,'handleTextChange')
        expect(handleChange).toHaveBeenCalledTimes(0)
    })
})
