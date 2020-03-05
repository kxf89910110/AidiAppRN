import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

const poster = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/putongwenzhen.jpg';
const icon = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/ptwz/tw.png';

export default self => (
    <View>
        <Image source={{uri: poster}} style={styles.poster} />
        <TouchableOpacity style={styles.inquiryCard}>
            <View style={styles.inquiryContent}>
                <Image source={{uri: icon}} style={styles.inquiryIcon} />
                <View>
                    <Text style={styles.inquiryType}>普通问诊</Text>
                    <Text style={styles.inquiryPrompt}>通过文字、图片咨询医生</Text>
                    <Text style={styles.inquiryPrompt}>24小时内不限次提问</Text>
                </View>
                <View style={styles.inquiryPrice}>
                    <Text style={styles.discount}>推广优惠</Text>
                    <View style={styles.priceBox}>
                        <Text style={styles.currentPrice}>￥3</Text>
                        <Text style={styles.originalPrice}>￥29</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.inquiryFooter}>医生给出具体建议后结束咨询</Text>
        </TouchableOpacity>
        <View>
            <View style={styles.doctorHead}>
                <Text style={styles.doctorTitle}>在线医生团队</Text>
                <Text style={styles.doctorSubtitle}>更多</Text>
            </View>
            <FlatList
                data={self.state.doctorList}
                numColumns={2}
                renderItem={({item}) => 
                    <TouchableOpacity style={styles.doctorCard}>
                        <View style={styles.doctorCardHead}>
                            <Image style={styles.doctorAvatar} source={{uri: item.avatar}} />
                            <View>
                                <Text style={styles.doctorName}>{item.name}</Text>
                                <Text style={styles.doctorNormal}>{item.level}</Text>
                                <Text style={styles.doctorNormal}>{item.department}</Text>
                            </View>
                        </View>
                        <Text style={styles.inquiryPrompt}>{item.occupation}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    </View>
)