import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from '../screens/HomeScreen/HomeScreen'
import AboutScreen from '../screens/AboutScreen/AboutScreen'
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen'

export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
                <Drawer.Screen name="Comments" component={CommentsScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}