import React, {Component} from 'react'
import {View, Text, Button} from 'react-native'

export default class first extends Component {
    // static navigationOptions = {
    //   title:"9999"
    // };
    //在这里定义每个页面的导航属性
    static navigationOptions = {
        title: 'First',
        headerBackTitle:'返回哈哈',//设置返回此页面的返回按钮文案，有长度限制

    };
    render() {
       // const nav = this.props.navigation;  //写法一
        const {navigation} = this.props;
        return <View>
            <Text>First</Text>
            <Button title='跳转二级界面'
                    onPress={() => {
                       // nav.push('second') //写法一
                        //navigation.push('second');
                        navigation.navigate('second',{name:'动态设置'})
                    }}
            >
            </Button>
            <Button title='跳转界面3'
                    onPress={()=>{
                        navigation.navigate('third',{title:'666'})
                    }}
            >
            </Button>
        </View>
    }
}