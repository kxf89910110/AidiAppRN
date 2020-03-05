import React, { Component } from 'react';
import { View, Text, Button, FlatList, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style';

export default self => (
    <ScrollView style={styles.container}>
        <Text style={styles.title}>{self.state.details.baseIntro}</Text>
        {/* 入选标准和排除标准 */}
        <FlatList
            data={self.state.details.matchStandards}
            renderItem={({item}) => 
                <View>
                    <Text style={styles.subtitle}>{item.standardType}</Text>
                    <FlatList
                        data={item.details}
                        renderItem={({item}) => 
                            <Text style={styles.content}>{item}</Text>
                        }
                    />
                </View>
            }
        />
        {/* 全国入主中心 */}
        <FlatList
            data={self.state.details.hospitals}
            renderItem={({item}) => 
                <View>
                    <Text style={styles.subtitle}>{item.region}</Text>
                    <FlatList
                        data={item.hospitalList}
                        renderItem={({item}) => 
                            <Text style={styles.content}>{item}</Text>
                        }
                    />
                </View>
            }
        />
        <View style={styles.footer}>
            <View style={styles.webView}>
                <View style={styles.agree}>
                    <Ionicons name='ios-radio-button-off' />
                    <Text>我已确认服务条款</Text>
                </View>
                <Text>阅读服务协议</Text>
            </View>
            <View style={styles.btn}>
                <Button title='电话报名' color='orange'></Button>
                <Button title='在线报名' color='orange'></Button>
            </View>
        </View>
    </ScrollView>
)