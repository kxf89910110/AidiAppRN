import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground } from 'react-native';
import styles from './style.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

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

export default self => {
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
          showsHorizontalScrollIndicator = {false}
          horizontal={true}
          data={orderStatus}
          renderItem={({item}) => 
            <TouchableOpacity
              onPress={({item,index}) => self.navigate('Article', {
                articleId: index
              })}
            >
              <View style={styles.orderItem}>
                <Image source={{uri: item.img}} style={{width: 30, height: 30}} />
                <Text>{item.status}</Text>
              </View>
            </TouchableOpacity>}
        />
      </View>
    </View>
};