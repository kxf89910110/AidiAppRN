import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
// 引入页面
import HomeScreen from "../screens/Home/HomeScreen";
import EnlistScreen from "../screens/Home/EnlistScreen";
import EnlistDetailsScreen from '../screens/Home/EnlistDetailsScreen';
import InquiryScreen from '../screens/Home/InquiryScreen';
import InquiryGeneralScreen from '../screens/Home/InquiryGeneralScreen';
import PatientScreen from '../screens/Home/PatientScreen';
import AddPatientScreen from '../screens/Home/AddPatientScreen';
import InquiryDetailsScreen from '../screens/Home/InquiryDetailsScreen';
import DoctorScreen from "../screens/Home/DoctorScreen";
import MallScreen from "../screens/Home/MallScreen";
import ArticleScreen from "../screens/Home/ArticleScreen";

import UserScreen from "../screens/User/UserScreen";
import RegisterScreen  from "../screens/User/RegisterScreen";

// 配置路由
const HomeStack = createStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="首页" component={HomeScreen} />
      <HomeStack.Screen name="招募中心" component={EnlistScreen} />
      <HomeStack.Screen name="招募详情" component={EnlistDetailsScreen} />
      <HomeStack.Screen name="肿瘤咨询" component={InquiryScreen} />
      <HomeStack.Screen name="普通问诊" component={InquiryGeneralScreen} />
      <HomeStack.Screen name="就诊人列表" component={PatientScreen} />
      <HomeStack.Screen name="添加就诊人" component={AddPatientScreen} />
      <HomeStack.Screen name="问诊详情" component={InquiryDetailsScreen} />
      <HomeStack.Screen name="名医堂" component={DoctorScreen} />
      <HomeStack.Screen name="健康商城" component={MallScreen} />
      <HomeStack.Screen name="文章详情" component={ArticleScreen} />
    </HomeStack.Navigator>
  );
}

const UserStack = createStackNavigator();

function UserStackScreen() {
  return (
    <UserStack.Navigator>
      <UserStack.Screen name="个人中心" component={UserScreen} />
      <UserStack.Screen name="注册" component={RegisterScreen} />
    </UserStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTab: () => React$Node = () => {
  return (
      <NavigationContainer>
          {/* 底部标签导航 */}
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