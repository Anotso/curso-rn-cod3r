import React from "react"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';

import TelaA from "../views/TelaA"
import TelaB from "../views/TelaB"
import TelaC from "../views/TelaC"
import PassoStack from "../components/PassoStack"

const Tab = createBottomTabNavigator()

export default props => (
    <Tab.Navigator tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
        labelStyle: {
            showLabel: false,
            fontSize: 15,
        }
    }}>
        <Tab.Screen name="TelaA" component={TelaA}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
        />
        <Tab.Screen name="TelaB" component={TelaB}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="book" color={color} size={size} />
                ),
            }}
        />
        <Tab.Screen name="TelaC" component={TelaC}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <Ionicons name="exit" color={color} size={size} />
                ),
            }}
        />
    </Tab.Navigator>
)