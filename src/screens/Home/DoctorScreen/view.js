import React, { Component } from 'react';
import { View, Text, Image, FlatList } from 'react-native';
import doctorsList from '../../../config/doctorsList';
import styles from './style';

export default self => (
    <View>
        <FlatList
            data={doctorsList.list}
            renderItem={({item}) => 
            <View>
                <View>
                    <View>
                        <Text>{item.doctor_name}</Text>
                    </View>
                    <Image source={{uri: item.image_url}} />
                </View>
                <View>
                    <Text>{item.expertise||item.background}</Text>
                </View>
                <View></View>
            </View>
        }
        />
    </View>
)