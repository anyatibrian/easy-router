import React from 'react'
import { shallow } from 'enzyme'
import FormInputs from '../../components/FormInputs'

let wrapper
let instance
describe('MapsView component', () => {
    beforeEach(()=>{
        wrapper = shallow(<FormInputs/>)
        instance = wrapper.instance()
    })
    it("should test the component renders without fail", ()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
