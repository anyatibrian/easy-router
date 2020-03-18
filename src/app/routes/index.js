import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SetOrigin from '../screens/SetOrigin'
import SetDestination from '../screens/SetDestination'
import RouteView from '../screens/RouteView'
import { Provider } from 'react-redux'
import  store  from '../store/Store'
const Stack = createStackNavigator()
const AppNavigatior = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="SetOrigin">
                    <Stack.Screen
                        name="SetOrigin"
                        component={SetOrigin}
                        options={{
                            headerStyle: {
                                backgroundColor: '#17408b',
                                display: 'none'
                            },
                            headerTintColor: '#ffff',
                            headerTitleStyle: {
                                fontWeight: '900'
                            },
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="SetDestination"
                        component={SetDestination}
                        options={{
                            headerStyle: {
                                backgroundColor: '#17408b',
                                display: 'none'
                            },
                            headerTintColor: '#ffff',
                            headerTitleStyle: {
                                fontWeight: '900'
                            },
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="RouteView"
                        component={RouteView}
                        options={{
                            headerStyle: {
                                backgroundColor: '#17408b',
                                display: 'none'
                            },
                            headerTintColor: '#ffff',
                            headerTitleStyle: {
                                fontWeight: '900'
                            },
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default AppNavigatior