import React, { Component } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import styles from './style';

export default self => (
    <View style={styles.container}>
        <View>
            <FlatList
                data={self.state.patientList}
                renderItem={({item}) => 
                    <TouchableOpacity 
                        onPress={() => self.navigation.navigate('问诊详情')}
                        style={item.isDefault
                                ? styles.defaultCard
                                : styles.patientCard }>
                        <View style={styles.head}>
                            <Text style={item.isDefault
                                        ? styles.defaultName
                                        : styles.name}>
                                {item.name}
                            </Text> 
                            <Text style={item.isDefault
                                        ? styles.defaultFont
                                        : styles.normalFont}>
                                {item.sex === 1 ? '男' : '女'}
                            </Text>
                            <Text style={item.isDefault
                                        ? styles.defaultAge
                                        : styles.age}>
                                {item.age}岁{item.isDefault?'[默认]':''}
                            </Text>
                        </View>
                        <View style={styles.footer}>
                            <Text style={item.isDefault
                                        ? styles.defaultFont
                                        : styles.normalFont}>
                                {item.cardID}
                            </Text>
                            <Text style={item.isDefault
                                        ? styles.defaultFont
                                        : styles.normalFont}>
                                {item.phone}
                            </Text>
                        </View>
                    </TouchableOpacity>
                }
            />
            <Text style={styles.prompt}>已添加{self.state.patientList.length}位联系人，还能添加{3-self.state.patientList.length}位联系人</Text>
        </View>
        <TouchableOpacity>
            <Text style={styles.bottomBtn}>添加就诊人</Text>
        </TouchableOpacity>
    </View>
)