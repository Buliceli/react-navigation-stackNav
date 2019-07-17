import React, {Component} from 'react'
import {View, Text, Button, TextInput, StyleSheet} from 'react-native'

export default class third extends Component {
    render() {
        const {navigation} = this.props;
        const {state, setParams} = navigation;
        const {params} = state;
        const showText = params.mode === 'edit' ? '正在编辑' : '编辑完成';

        return <View>
            <Text>third</Text>
            <Text style={styles.text1}>{showText}</Text>
            <TextInput style={styles.tf}
                       onChangeText={test => {
                           setParams({title: test})
                       }}
            >
            </TextInput>
        </View>
    }
}
const styles = StyleSheet.create({
    text1: {
        marginTop: 200,
        backgroundColor: 'red',
        fontSize: 20
    },
    tf: {
        marginTop: 50,
        backgroundColor: 'red',
        height:50
    }
});