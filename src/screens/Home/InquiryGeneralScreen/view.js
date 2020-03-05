import React, { Component } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

const poster = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/putongwenzhen1.jpg';

export default self => (
    <View>
        <Image source={{uri: poster}} style={styles.poster}/>
        <FlatList
            data={self.state.doctorList}
            renderItem={({item}) => 
                <View style={styles.card}>
                    <View style={styles.head}>
                        <Image source={{uri: item.avatar}} style={styles.avatar} />
                        <View>
                            <View style={styles.titleBox}>
                                <Text style={styles.title}>{item.name}</Text>
                                <Text style={styles.subtitle}>{item.level}</Text>
                            </View>
                            <Text style={styles.prompt}>{item.hospital} {item.department}</Text>
                        </View>
                    </View>
                    <Text style={styles.intro}>{item.introduction}</Text>
                    <View style={styles.footer}>
                        <View style={styles.price}>
                            <Text style={styles.current}>￥{item.currentPrice}/次</Text>
                            <Text style={styles.original}>￥{item.originalPrice}/次</Text>
                        </View>
                        <TouchableOpacity 
                            style={styles.btn} 
                            onPress={() => self.navigation.navigate('就诊人列表', { doctorID: item.id })}>
                            <Text style={styles.btnTitle}>问医生</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
        />
    </View>
)