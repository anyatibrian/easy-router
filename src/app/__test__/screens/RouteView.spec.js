import React from 'react'
import { shallow } from 'enzyme'
import { RouteView, mapStateToProps } from '../../screens/RouteView'

let wrapper
let instance
const props = {
    route: {
        params:{
            originInfo: '',
            destinationInfo:''
        }
    },
    RoutingPoints: jest.fn()
}
jest.mock('../../__mocks__/@react-native-community/geolocation')
describe('RouteView', () => {
    beforeEach(()=>{
        wrapper = shallow(<RouteView { ...props}/>)
        instance = wrapper.instance()  
    })
    
    it('Should render the component properly',()=>{
        expect(wrapper).toMatchSnapshot()
    })
    it('Should test the handleRoutes function',()=>{
        instance.handleRoutes('car')
        expect(props.RoutingPoints).toHaveBeenCalled()
    })
    it('should test map state to props', ()=>{
        const state = {
            routResult:{
                coordinatePoints:[],
                isLoading: false
            }
        }
        expect(mapStateToProps(state)).toMatchSnapshot()
    })
})
