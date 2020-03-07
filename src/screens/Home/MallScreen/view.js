import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

const poster = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/shangc/750.jpg';

export default self => (
    <ScrollView>
        <Image style={styles.poster} source={{uri: poster}} />

        <FlatList
            data={self.state.productList}
            renderItem={({item}) => 
                <TouchableOpacity style={styles.li}>
                    <Image style={styles.productImage} source={{uri: item.img}} />
                    <View>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text style={styles.prompt}>{item.efficacy}</Text>
                        <Text style={styles.unit}>{item.unit}</Text>
                        <View style={styles.footer}>
                            <Text style={styles.price}>￥{item.price}</Text>
                            <View style={styles.numBox}>
                                <Text style={styles.inventory}>库存：{item.inventory}</Text>
                                <Ionicons name='ios-add-circle' color={'#AAAAAA'} size={23} />
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            }
        />
    </ScrollView>
)