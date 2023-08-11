import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Comp2 from '../../component/Comp2/Comp2';
import Comp3 from '../../component/Comp3/Comp3';
import Comp1 from '../../component/comp1/comp1';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const Homepage = () => {
    const screenOptions = (route, color) => {
        let iconName;

        switch (route.name) {
            case 'comp2':
                iconName = 'home';
                break;
            case 'comp1':
                iconName = 'ios-list';
                break;
            case 'comp3':
                iconName = 'wallet';
                break;
            case 'comp4':
                iconName = 'cash';
                break;
            case 'comp5':
                iconName = 'ios-grid-sharp';
                break;
            default:
                break;
        }

        return <Ionicons name={iconName} color={color} size={24} />
    };
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => screenOptions(route, color),
            })}
        >
            <Tab.Screen
                name="comp2"
                component={Comp2}
            />
            <Tab.Screen
                name="comp1"
                component={Comp1}
            />
            <Tab.Screen
                name="comp3"
                component={Comp3}
            />
            <Tab.Screen
                name="comp4"
                component={Comp3}
            />
            <Tab.Screen
                name="comp5"
                component={Comp3}
            />

        </Tab.Navigator>
    )
}

export default Homepage