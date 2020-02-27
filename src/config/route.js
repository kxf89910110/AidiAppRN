import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// 引入页面
import HomeScreen from "../screens/HomeScreen";
import UserScreen from "../screens/UserScreen/index.js";

// 配置路由
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="首页" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}

const UserStack = createStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="个人中心" component={UserScreen} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTab: () => React$Node = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    
                    if (route.name === '首页') {
                        iconName = `ios-home`;
                    } else if (route.name === '个人中心') {
                        iconName = `ios-person`;
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray',
                }}
            >
                <Tab.Screen name="首页" component={HomeStackScreen} />
                <Tab.Screen name="个人中心" component={UserStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default () => <BottomTab />;