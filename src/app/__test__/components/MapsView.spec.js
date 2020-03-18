import React from 'react'
import { shallow } from 'enzyme'
import MapsView from '../../components/MapsView'

const props={
    coordinates:[], 
    handleRoutes:jest.fn(),
    loading:false,
    destination:'kampala',
    origin:'lira'
}
let wrapper
let instance
describe('MapsView component', () => {
    
    beforeEach(()=>{
        wrapper = shallow(<MapsView {...props}/>)
        instance = wrapper.instance()
    })

    it("should test the component renders without fail", ()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('it should test is loading state', ()=>{
        wrapper.setProps({loading:true})
        expect(props.loading).toEqual(false)
    }),
    it('should test the poyline displayed on the map', ()=>{
        wrapper.setProps({coordinates: [[12457,67848]]})
        wrapper.find('Polyline')
        expect(wrapper).toMatchSnapshot()
    }),
    it(' should test the onpress method', ()=>{
       const onPress0 =  wrapper.find('TouchableHighlight').at(0)
       const onPress1 =  wrapper.find('TouchableHighlight').at(1)
       const onPress2 =  wrapper.find('TouchableHighlight').at(2)
       onPress0.props().onPress()
       onPress1.props().onPress()
       onPress2.props().onPress()
       expect(props.handleRoutes).toHaveBeenCalled()
    }),
    it('should test the is loading state', ()=>{
        wrapper.setProps({loading:true})
        wrapper.find('ActivityIndicator').at(0)
        wrapper.find('ActivityIndicator').at(1)
        wrapper.find('ActivityIndicator').at(2)
        wrapper.setProps({loading:false})
        wrapper.find('Icons').at(0)
        expect(wrapper).toMatchSnapshot()
    })
})
