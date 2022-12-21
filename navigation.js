import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import LoginScreen from './screens/LoginScreen';
import NewsScreen from './screens/NewsScreen';
import ImportScreen from './screens/ImportScreen';
import SearchScreen from './screens/SearchScreen';

import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyTabs() {
    return (
        
        <Tab.Navigator
            screenOptions={({ route }) => ({
                
                headerShown: false,

                tabBarActiveTintColor: '#e91e63',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: {
                    backgroundColor: '#000000',
                    borderTopColor: 'transparent',
                    height: 60,
                    paddingTop: 5,
                    paddingBottom: 5,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 10,
                    },
                    shadowOpacity: 0.53,
                    shadowRadius: 13.97,
                },

                tabBarButton: (props) => <TouchableOpacity {...props} />,

                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused
                            ? 'home'
                            : 'home';
                    } else if (route.name === 'News') {
                        iconName = focused ? 'newspaper' : 'newspaper';
                    } else if (route.name === 'Search') {
                        iconName = focused ? 'search' : 'search';
                    } else if (route.name === 'Import') {
                        iconName = focused ? 'file-import' : 'file-import';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'user' : 'user';
                    }

                    // You can return any component that you like here!
                    return <FontAwesome5 name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="News" component={NewsScreen} />
            <Tab.Screen name="Search" component={SearchScreen} />
            <Tab.Screen name="Import" component={ImportScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
        

    );
}


const screenOptions = {
    headerShown: false,
};

const SignedInStack = () => (
    <NavigationContainer>
        <Stack.Navigator 
        screenOptions={screenOptions}
        initialRouteName="Login"
        >
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="DefaultScreen" component={MyTabs} />
        </Stack.Navigator>
    </NavigationContainer>
);

export default SignedInStack;


