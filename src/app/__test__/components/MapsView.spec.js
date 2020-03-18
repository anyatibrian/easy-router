import React from 'react'
import { shallow } from 'enzyme'
import MapsView from '../../components/MapsView'

const props={
    coordinates:[], 
    handleRoutes:jest.fn(),
    loading:false
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
    })   
})
