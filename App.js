/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  ImageBackground,
  FlatList,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ViewPager from '@react-native-community/viewpager';
import Swiper from 'react-native-swiper';

function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor: '#ffffff'}}>
        <View style={styles.header}>
          <Text>用户名，欢迎您！</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>联系客服</Text>
            <Ionicons name='ios-contact' size={23} color={'orange'} style={{paddingLeft: 5}} />
          </View>
        </View>
        <View>
          <TouchableOpacity style={styles.searchInput}>
            <Ionicons name='ios-search' size={23} color={'orange'} />
            <Text style={{color: '#aaaaaa'}}>搜索症状/疾病/药品/医生/科室</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function UserScreen() {
  const orderStatus = [
    {
      id: '1',
      img: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/gerenzhongxin/fukuan.png',
      status: '待付款'
    },
    {
      id: '2',
      img: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/gerenzhongxin/fahuo.png',
      status: '待发货'
    },
    {
      id: '3',
      img: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/gerenzhongxin/shouhuo.png',
      status: '待收货'
    },
    {
      id: '4',
      img: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/gerenzhongxin/tui.png',
      status: '退款/售后'
    },
  ]

  return (
    <View>
      <ImageBackground 
        source={{uri: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/gerenzhongxin/BG.jpg'}}
        style={styles.imageBackground}
      >
        <Text style={{color: '#ffffff', fontSize: 25}}>请先登录/注册</Text>
      </ImageBackground>
      <View style={styles.formTitle}>
        <Text style={styles.formText}>联系我们</Text>
        <Ionicons name={'ios-contact'} size={23} />
      </View>
      <View style={styles.formBox}>
        <View style={{
          paddingBottom: 10,
          borderBottomColor: '#f0f0f0',
          borderBottomWidth: 1,
          flexDirection: 'row', 
          justifyContent: 'space-between'
        }}>
          <Text style={styles.formText}>我的订单</Text>
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.formText}>更多订单</Text>
            <Ionicons name={'ios-arrow-dropright'} size={23} style={{paddingLeft: 5}} />
          </View>
        </View>
        
        <FlatList
          horizontal={true}
          data={orderStatus}
          renderItem={({item}) => 
            <TouchableOpacity>
              <View style={styles.orderItem}>
                <Image source={{uri: item.img}} style={{width: 30, height: 30}}/>
                <Text>{item.status}</Text>
              </View>
            </TouchableOpacity>
          }
        />
      </View>
    </View>
  );
}

const App: () => React$Node = () => {
  const Tab = createBottomTabNavigator();

  return (
    <>
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
          <Tab.Screen name="首页" component={HomeScreen} />
          <Tab.Screen name="个人中心" component={UserScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  // home styles
  header: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  searchInput: {
    marginTop: 15,
    marginHorizontal: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  // user styles
  imageBackground: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  formBox: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
  },
  formTitle: {
    backgroundColor: '#ffffff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  formText: {
    fontSize: 18
  },
  orderItem: {
    width: 85,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
