import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const poster = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/service/shiguanlin.jpg';

export default self => (
    <View>
        {/* 海报 */}
        <Image source={{uri: poster}} style={styles.poster} />
        {/* 标签导航 */}
        <FlatList
            showsHorizontalScrollIndicator = {false}
            contentContainerStyle={styles.tabBox}
            horizontal={true}
            keyExtractor={(item, index) => index}
            data={self.state.tabList}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.tab}
                    onPress={() => self.changeTab(item.title, index)}>
                    {/* 判断当前选中标签 */}
                    <Text style={self.state.selected === index 
                        ?styles.active
                        :styles.normal
                    }>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            }
        />
        {/* 招募列表 */}
        <FlatList
            refreshControl={
                <RefreshControl
                    refreshing={self.state.refreshing}
                    onRefresh={self._onRefresh}
                />
            }
            keyExtractor={(item, index) => index}
            data={self.state.showList}
            renderItem={({item}) => 
                <TouchableOpacity style={styles.card}>
                    <Image source={{uri: item.projectPic}} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        {/* 评分（星级） */}
                        <FlatList
                            numColumns={5}
                            keyExtractor={(item, index) => index}
                            data={[1, 2, 3, 4, 5]}
                            renderItem={({index}) =>
                                <Ionicons 
                                    name={index+1 > item.stars 
                                        ?'ios-star-outline'
                                        :'ios-star'} 
                                    color='gold' 
                                    size={15} 
                                    style={styles.star} />
                            }
                        />
                        <Text 
                            style={styles.cardInfo} 
                            ellipsizeMode={'tail'}
                            numberOfLines={2}>
                            {item.baseIntro}
                        </Text>
                    </View>
                </TouchableOpacity>
            }
        />
    </View>
)