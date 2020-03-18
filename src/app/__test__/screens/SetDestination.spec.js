import React from 'react'
import { shallow } from 'enzyme'
import renderer, { act } from 'react-test-renderer';
import { SetDestination, mapStateToProps } from '../../screens/SetDestination'

const props ={
    searchResult:[],
    loading: false,
    routeAction:jest.fn(),
    route:{
        params:{
            origin:'kawempe',
            lat:32.542834,
            lng: 0.210184
        }
    },
    navigation:{
        navigate: jest.fn()
    }
}

let wrapper
let instance
describe('MapsView component', () => {
    beforeEach(()=>{
        wrapper = shallow(<SetDestination {...props}/>)
        instance = wrapper.instance()
    })
    it("should test the component renders without fail", ()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('should test the switch method',()=>{
        instance.handleTextChange('kampala')
        wrapper.setState({showList:true})
        expect(props.routeAction).toHaveBeenCalled()
        expect(instance.state.showList).toEqual(true)
    }),
    it('should test go to the mapView method', ()=>{
        instance.goViewMapScreen()
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

    it('should test the Onchange methods',()=>{
        const instanceOf  = renderer.create(<SetDestination {...props}/>).getInstance()
        instanceOf.handleTextChange('kampala')
        wrapper.setState({destination:'kampala'})
        expect(instance.state.destination).toEqual('kampala')
        const handleChange =  jest.spyOn(instance, 'handleTextChange')
        expect(handleChange).toHaveBeenCalledTimes(0)
    })
    it('should test map state to props', ()=>{
        const state = {
            routResult:{
                searchResult:[],
                isLoading:true
            }
        }
        
        expect(mapStateToProps(state)).toMatchSnapshot()
    })
    it('should handle the ontext change', ()=>{
        const formInput = wrapper.find('FormInputs').first()
        formInput.props().onChangeText()
        expect(wrapper).toMatchSnapshot()
    })
})
