import React from 'react'
import { shallow } from 'enzyme'
import Icons from '../../components/Icons'

let wrapper
let instance
describe('MapsView component', () => {
    
    beforeEach(()=>{
        wrapper = shallow(<Icons />)
        instance = wrapper.instance()
    })

    it("should test the component renders without fail", ()=>{
        expect(wrapper).toMatchSnapshot()
    })
})
