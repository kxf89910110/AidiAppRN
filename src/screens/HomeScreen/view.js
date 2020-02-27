import React, { Component } from 'react';
import { View, Text, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style.js';
import article from '../../config/article.js';

const imageTab = [
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_08.jpg"},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/zhongliuzixun.png"},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/yizhen/375x210_04.jpg "},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_06.jpg"},
]

const imageHot = [
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_23.jpg"},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_25.jpg"},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/375x210_31.jpg"},
    {src: "https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/hualiao.jpg"},
]

export default self => (
    <ScrollView>
       <View style={{backgroundColor: '#ffffff', paddingBottom: 20}}>
         <View style={styles.header}>
           <Text style={{color: '#9b9b9b', fontSize: 15}}>用户名，欢迎您！</Text>
           <View style={{flexDirection: 'row', alignItems: 'center'}}>
             <Text style={{fontSize: 18}}>联系客服</Text>
             <Ionicons name='ios-contact' size={25} color={'orange'} style={{paddingLeft: 5}} />
           </View>
         </View>
         <View>
           <TouchableOpacity style={styles.searchInput}>
             <Ionicons name='ios-search' size={23} color={'orange'} />
             <Text style={{color: '#aaaaaa'}}>搜索症状/疾病/药品/医生/科室</Text>
           </TouchableOpacity>
         </View>
         <View style={{paddingHorizontal: 33, marginTop: 20}}>
           <FlatList
             contentContainerStyle={styles.tabList}
             numColumns={4}
             data={imageTab}
             renderItem={({item}) => 
               <TouchableOpacity style={styles.tabItem}>
                 <Image source={{uri: item.src}} style={{minWidth: 68, minHeight: 68}}/>
               </TouchableOpacity>}
           />
           <TouchableOpacity>
             <Image 
               source={{uri: 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shouye/guanggao.png'}}
               style={{width: '100%', minHeight: 60}}
             />
           </TouchableOpacity>
         </View>
       </View>

       <View style={{backgroundColor: '#ffffff', paddingVertical: 10, paddingHorizontal: 10, marginTop: 10}}>
         <Text style={styles.title}>肿瘤热点精选</Text>
         <FlatList
             contentContainerStyle={styles.hotList}
             numColumns={2}
             data={imageHot}
             renderItem={({item}) => 
               <TouchableOpacity style={{margin: 5}}>
                 <Image source={{uri: item.src}} style={{minWidth: 160, minHeight: 90}}/>
               </TouchableOpacity>}
           />
       </View>

       <View style={{backgroundColor: '#ffffff', paddingVertical: 10, paddingHorizontal: 10, marginTop: 10}}>
         <Text style={styles.title}>推荐阅读</Text>
         <FlatList
           data={article.list}
           renderItem={({item}) => 
             <TouchableOpacity 
               extralss={({item,index}) => index}
               style={styles.articleList}
               onPress={({item,index}) => self.navigate('Article', {
                 articleId: index
               })}
             >
               <View style={styles.articleBox}>
                 <Text 
                   style={styles.articleTitle} 
                   ellipsizeMode={'tail'}
                   numberOfLines={2}
                 >
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