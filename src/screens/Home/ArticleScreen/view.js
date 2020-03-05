import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
import styles from './style.js';

export default self => (
    <ScrollView>
        <View style={styles.articleBox}>
            <Text style={styles.title}>{self.state.article.title}</Text>
            <Text style={styles.subtitle}>作者：{self.state.article.author}   {self.state.article.time}</Text>
            {/* 内容简介 */}
            <FlatList 
                data={self.state.article.head}
                renderItem = {({item}) => 
                    <Text style={styles.content}>{item}</Text>
                }
            />
            {/* 作者简介 */}
            <FlatList
                data={self.state.article.imglegendlist}
                renderItem = {({item}) =>
                    <>
                        <Image source={{uri: item.img}} style={styles.card} />
                        <Text style={styles.cardInfo}>▲{item.legend}</Text>
                    </>
                }
            />
            {/* 问答 */}
            <FlatList
                data={self.state.article.content}
                renderItem = {({item}) =>
                    <>
                        <Text style={styles.question}>{item.issue}</Text>
                        <Text style={styles.answer}>{item.answer}</Text>
                    </>
                }
            />
            {/* 结尾 */}
            <Text style={styles.total}>{self.state.article.finally}</Text>
        </View>
        <View>
            <Text style={styles.warning}>本站内容仅供癌症科普使用不能代替执业医师当面诊断，请谨慎参阅</Text>
        </View>
        <View class="foot_view">
             
        </View>
    </ScrollView>
)