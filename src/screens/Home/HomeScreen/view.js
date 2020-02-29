import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style.js';
import article from '../../../config/article.js';
import Swiper from 'react-native-swiper';

const wrapperImg = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/haibao.jpg';
const guanggao = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/guanggao.png';
const imageTab = [
  {
    id: 1,
    route: '招募中心',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_08.jpg"
  },
  {
    id: 2,
    route: '肿瘤咨询',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/zhongliuzixun.png"
  },
  {
    id: 3,
    route: '名医堂',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/yizhen/375x210_04.jpg"
  },
  {
    id:  4,
    route: '健康商城',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_06.jpg"
  }
]
const imageHot = [
  {
    id: 1,
    route: '肿瘤科普',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_23.jpg"
  },
  {
    id: 1,
    route: '抗癌故事',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_25.jpg"
  },
  {
    id: 1,
    route: '顶尖咨询',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_31.jpg"
  },
  {
    id: 1,
    route: '化疗手册',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/hualiao.jpg"
  }
]

export default self => (
  <ScrollView>
    <View style={{backgroundColor: '#ffffff', paddingBottom: 20}}>
      {/* 页头 */}
      <View style={styles.header}>
        <Text style={{color: '#9b9b9b', fontSize: 15}}>用户名，欢迎您！</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontSize: 18}}>联系客服</Text>
          <Ionicons name='ios-contact' size={25} color={'orange'} style={{paddingLeft: 5}} />
        </View>
      </View>
      {/* 搜索框 */}
      <View>
        <TouchableOpacity style={styles.searchInput}>
          <Ionicons name='ios-search' size={23} color={'orange'} />
          <Text style={{color: '#aaaaaa'}}>搜索症状/疾病/药品/医生/科室</Text>
        </TouchableOpacity>
      </View>
      {/* 轮播图 */}
      <Swiper 
        style={styles.wrapper} 
        autoplay={true}
        height={225}>
        <TouchableOpacity onPress={() => self.navigation.navigate('')}>
          <Image source={{uri: wrapperImg}} style={{height: '100%', width: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => self.navigation.navigate('')}>
          <Image source={{uri: wrapperImg}} style={{height: '100%', width: '100%'}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => self.navigation.navigate('')}>
          <Image source={{uri: wrapperImg}} style={{height: '100%', width: '100%'}} />
        </TouchableOpacity>
      </Swiper>
      {/* 标签导航 */}
      <View style={{paddingHorizontal: 33, marginTop: 20}}>
        <FlatList
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.tabList}
          numColumns={4}
          data={imageTab}
          renderItem={({item}) => 
            <TouchableOpacity 
              style={styles.tabItem}
              onPress={() => self.navigation.navigate(item.route)}>
              <Image source={{uri: item.src}} style={{minWidth: 68, minHeight: 68}}/>
            </TouchableOpacity>}
        />
        <TouchableOpacity>
          <Image source={{uri: guanggao}} style={{width: '100%', minHeight: 60}} />
        </TouchableOpacity>
      </View>
    </View>
    {/* 热点列表 */}
    <View style={styles.listBox}>
      <Text style={styles.title}>肿瘤热点精选</Text>
      <FlatList
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.hotList}
          numColumns={2}
          data={imageHot}
          renderItem={({item}) => 
            <TouchableOpacity 
              style={{margin: 5}} 
              onPress={() => self.navigation.nivigate(item.route)}>
              <Image source={{uri: item.src}} style={{minWidth: 160, minHeight: 90}}/>
            </TouchableOpacity>}
        />
    </View>
    {/* 文章列表 */}
    <View style={styles.listBox}>
      <Text style={styles.title}>推荐阅读</Text>
      <FlatList
        keyExtractor={(item, index) => index}
        data={article.list}
        renderItem={({item}) => 
          <TouchableOpacity 
            extralss={({item,index}) => index}
            style={styles.articleList}
            onPress={() => self.navigation.navigate('文章详情', {
              title: item.title
            })}
          >
            <View style={styles.articleBox}>
              <Text 
                style={styles.articleTitle} 
                ellipsizeMode={'tail'}
                numberOfLines={2}>
                {item.title}
              </Text>
              <Image source={{uri: item.img}} style={styles.articleImage} />
            </View>
            <View style={styles.articleBox2}>
              <Text style={{color: '#8C8C8C'}}>{item.author} {item.source}</Text>
              <Text style={styles.articleTab}>{item.type}</Text>
            </View>
          </TouchableOpacity>}
        />
    </View>
  </ScrollView>
);