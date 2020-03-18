import React from 'react'
import { shallow } from 'enzyme'
import ResultList from '../../components/ResultList'

let wrapper
let instance
const props = {
    results:{
        formatted:"kampala, Uganda",
        geometry:{
            lat:12345,
            lng:53434
        }
    }, 
    setDestination:jest.fn(),
    loading:false
}
describe('MapsView component', () => {
    beforeEach(()=>{
        wrapper = shallow(<ResultList {...props}/>)
        instance = wrapper.instance()
    })
    it("should test the component renders without fail", ()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it("should test the onpress methods", ()=>{
        const onPress = wrapper.find('TouchableHighlight').first()
        onPress.props().onPress()
        expect(props.setDestination).toHaveBeenCalled()
    })
    it('should test the isloading branch', ()=>{
        wrapper.setProps({loading:true})
        wrapper.find('ActivityIndicator')
        expect(wrapper).toMatchSnapshot()
    })
})
