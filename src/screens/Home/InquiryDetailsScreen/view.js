import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from './style';

const checklist = [
    {
        title: '图文咨询',
        prompt: '48小时内可追问'
    },
    {
        title: '建议诊疗方案',
        prompt: '1次'
    },
    {
        title: '用药指导',
        prompt: '1次'
    },
    {
        title: '推荐名医',
        prompt: '1次'
    }
]

export default self => (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.doctorCard}>
                <View style={styles.doctorCardHead}>
                    <Image 
                        style={styles.doctorCardAvatar} 
                        source={{uri: self.state.details.avatar}} />
                    <View>
                        <View style={styles.doctorCardHead}>
                            <Text style={styles.doctorCardName}>
                                {self.state.details.name}
                            </Text>
                            <Text>{self.state.details.level}</Text>
                        </View>
                        <Text style={styles.doctorCardPrompt}>
                            {self.state.details.hospital} {self.state.details.department}
                        </Text>
                    </View>
                </View>
                <Text style={styles.doctorCardIntro}>
                    {self.state.details.introduction}
                </Text>
            </View>
            <View style={styles.inquiryCard}>
                <Text style={styles.inquiryCardTitle}>问诊服务</Text>
                <View style={styles.inquiryCardHead}>
                    <Image 
                        style={styles.inquiryCardIcon} 
                        source={{uri: self.state.details.avatar}} />
                    <View>
                        <View style={styles.priceBox}>
                            <Text style={styles.inquiryCardType}>普通问诊</Text>
                            <Text style={styles.inquiryCardCurrent}>
                                ￥{self.state.details.currentPrice}/次
                                <Text style={styles.inquiryCardOriginal}>
                                    ￥{self.state.details.originalPrice}/次
                                </Text>
                            </Text>
                        </View>
                        <Text style={styles.inquiryCardPrompt}>通过文字、图片咨询医生</Text>
                    </View>
                </View>
                <FlatList
                    data={checklist}
                    renderItem={({item}) => 
                        <View style={styles.checklist}>
                            <Text style={styles.checklistTitle}>{item.title}</Text>
                            <Text style={styles.checklistPrompt}>{item.prompt}</Text>
                        </View>
                    }
                />
            </View>
            <Text style={styles.notes}>您与该医生有未支付的咨询</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.payBtn}>去支付</Text>
            </TouchableOpacity>
        </View>
    </ScrollView>
)