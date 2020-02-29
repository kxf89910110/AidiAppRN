import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const poster = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/service/shiguanlin.jpg';

export default self => (
    <View>
        <Image source={{uri: poster}} style={styles.poster} />
        <FlatList
            showsHorizontalScrollIndicator = {false}
            contentContainerStyle={styles.tabBox}
            horizontal={true}
            data={self.state.tabList}
            renderItem={({item, index}) => 
                <TouchableOpacity 
                    style={styles.tab}
                    onPress={() => self.changeTab(item.title, index)}>
                    <Text style={self.state.selected === item.title 
                        ?styles.active
                        :styles.normal
                    }>
                        {item.title}
                    </Text>
                </TouchableOpacity>
            }
        />
        <FlatList
            data={self.state.enlist}
            renderItem={({item}) => 
                <TouchableOpacity style={styles.card}>
                    <Image source={{uri: item.projectPic}} style={styles.cardImage} />
                    <View style={styles.cardContent}>
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        {/* <FlatList
                            data={[1, 2, 3, 4]}
                            renderItem={({star}) =>
                                <View style={{flexDirection: 'row'}}>
                                    <Ionicons name='ios-star' color='gold' size={15} />
                                </View>
                            }
                        /> */}
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