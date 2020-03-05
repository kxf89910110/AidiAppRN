import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style.js';
import article from '../../../config/article.js';
import Swiper from 'react-native-swiper';

const message = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/xsy/xxx.png';
const contact = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/xsy/kf.png';
const wrapperImg = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/haibao.jpg';
const guanggao = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/guanggao.png';
const imageTab = [
  {
    id: 1,
    title: '免费用药',
    route: '招募中心',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/mf.png"
  },
  {
    id: 2,
    title: '肿瘤咨询',
    route: '肿瘤咨询',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/zl.png"
  },
  {
    id: 3,
    title: '直通名医',
    route: '名医堂',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/my.png"
  },
  {
    id:  4,
    title: '健康商城',
    route: '健康商城',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/sc.png"
  }
]
const imageHot = [
  {
    route: '化疗手册',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/hualiao.jpg"
  },
  {
    route: '肿瘤科普',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_23.jpg"
  },
  {
    route: '抗癌故事',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_25.jpg"
  },
  {
    route: '顶尖咨讯',
    src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_31.jpg"
  }
]

export default self => (
  <ScrollView>
    <View style={styles.container}>
      {/* 页头 */}
      <View style={styles.header}>
        <View style={styles.header_left}>
          <TouchableOpacity>
            <Text style={styles.loginBtn}>登录</Text>
          </TouchableOpacity>
          <Text style={styles.welTitle}>欢迎您！</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {/* <Text style={{fontSize: 18}}>联系客服</Text> */}
          <Ionicons name='ios-contact' size={25} />
          <Ionicons name='ios-contact' size={25} style={{paddingLeft: 12}} />
        </View>
      </View>
      {/* 搜索框 */}
      <TouchableOpacity style={styles.searchInput}>
        <Text></Text>
        <Text style={styles.searchKey}>请输入搜索疾病、药物</Text>
        <Ionicons name='ios-search' size={23} color={'orange'} />
      </TouchableOpacity>
      {/* 标签导航 */}
      {/* <View style={{paddingHorizontal: 33, marginTop: 20}}> */}
        <FlatList
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.tabList}
          numColumns={4}
          data={imageTab}
          renderItem={({item}) => 
            <TouchableOpacity 
              style={styles.tabItem}
              onPress={() => self.navigation.navigate(item.route)}>
              <Image source={{uri: item.src}} style={styles.tabImg}/>
              <Text style={styles.tabTitle}>{item.title}</Text>
            </TouchableOpacity>}
        />
        {/* <TouchableOpacity>
          <Image source={{uri: guanggao}} style={{width: '100%', minHeight: 60}} />
        </TouchableOpacity> */}
      {/* </View> */}
      {/* 轮播图 */}
      <Swiper 
        autoplay={true}
        height={183}>
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
    </View>
    {/* 热点列表 */}
    <View style={styles.listBox}>
      <Text style={styles.title}>肿瘤专栏</Text>
      <FlatList
          keyExtractor={(item, index) => index}
          contentContainerStyle={styles.hotList}
          numColumns={2}
          data={imageHot}
          renderItem={({item}) => 
            <TouchableOpacity onPress={() => self.navigation.nivigate(item.route)}>
              <Image source={{uri: item.src}} style={styles.hotListImg}/>
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