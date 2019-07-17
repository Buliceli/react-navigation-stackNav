import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

export default class second extends Component {
    render() {
        const nav = this.props.navigation;
        return <View>
            <Text style={styles.text1}>First</Text>
            <Button title="返回一级界面"
                    onPress={() => {
                        nav.pop();
                    }}
            >
            </Button>
        </View>
    }
}
const styles = StyleSheet.create({
    text1: {
        marginTop: 180,
        backgroundColor:'pink'
    }
});