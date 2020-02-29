import React from 'react';
import { View, Text, TextInput, Picker, Button, FlatList, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './style.js';

export default self => (
    <View style={styles.container}>
        {/* <View style={styles.textInput}>
          <Text>
            头像上传：
          </Text>
          <Image
            style={{
              width: 100,
              height: 100,
              margin: 5
            }}
            source={{uri: this.state.avatar}} />
          <Button title="上传图片" onPress={this._handleButtonPress} />
        </View> */}

        <View style={styles.textInput}>
            <Text style={styles.title}>手机号：</Text>
            <TextInput
                style={styles.input}
                maxLength={11}
                keyboardType={'numeric'}
                placeholder="请输入手机号"
                onChangeText={(phone) => self.setState({phone})} />
        </View>

        <View style={styles.textInput}>
            {/* <Ionicons name='ios-medical' color='red'/> */}
            <Text style={styles.title}>姓名：</Text>
            <TextInput
                style={styles.input}
                maxLength={5}
                placeholder="请输入真实姓名"
                onChangeText={(name) => self.setState({name})} />
        </View>

        <View style={styles.textInput}>
          <Text style={styles.title}>性别：</Text>
          <Picker
            selectedValue={self.state.gender}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) => 
                self.setState({gender: itemValue})
            }>
            <Picker.Item label="男" value="1" />
            <Picker.Item label="女" value="2" />
          </Picker>
        </View>

        <View style={styles.textInput}>
            <Text style={styles.title}>出生日期：</Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{fontSize: 20, marginRight: 10}}>{self.state.date}</Text>
                <Button 
                    title='选择日期'
                    onPress={() => self.showDatePicker()} />
            </View>
        </View>

        <View style={styles.textInput}>
          <Text  style={styles.title}>所在城市：{self.state.region}</Text>
          <Button title='选择城市' />
          
        </View>

        <TouchableOpacity
            style={styles.registerBtn}
            onPress={() => self.register()}>
            <Text style={styles.btnTitle}>立即注册</Text>
        </TouchableOpacity>
    </View>
)