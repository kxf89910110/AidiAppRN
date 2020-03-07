import React, { Component } from 'react';
import { View, Text, Image, FlatList, ImageBackground, TouchableOpacity } from 'react-native';
import doctorsList from '../../../config/doctorsList';
import styles from './style';

const backcImage = 'https://aidi-1300131487.cos.ap-guangzhou.myqcloud.com/aidi-resource/xiaochengxu/mingyitang/beijing.png';

export default self => (
    <View style={styles.container}>
        <FlatList
            data={doctorsList.list}
            renderItem={({item}) => 
            <ImageBackground source={{uri: backcImage}} style={styles.card}>
                <View style={styles.head}>
                    <View>
                        <View style={styles.intro}>
                            <Text style={styles.name}>{item.doctor_name}</Text>
                            <Text style={styles.department}>{item.department}</Text>
                        </View>
                        <Text style={styles.prompt}>{item.hospital}</Text>
                    </View>
                    <Image style={styles.avatar} source={{uri: item.image_url}} />
                </View>
                <Text style={styles.expertise}>{item.expertise||item.background}</Text>
                <View style={styles.footer}>
                    <View style={styles.reading}>
                        <Text>{item.articlenum}</Text>
                        <Text style={{color: '#B7B7B7'}}>文章</Text>
                    </View>
                    <TouchableOpacity style={styles.readBtn}>
                        <Text style={styles.readBtnText}>咨询</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        }
        />
    </View>
)