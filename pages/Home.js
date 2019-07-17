import React from 'react'
import {
    createStackNavigator,
    createAppContainer
} from 'react-navigation'
import {View, Text, Button} from 'react-native'
import first from './first'
import second from './second'
import third from './third'

const nav = createStackNavigator({
    first: {
        screen: first,   //必选 指定一个React组件作为屏幕主要显示内容 当这个组件被createStackNavigator加载时会被分配一个
        //navigation prop
        //path 可选 用来设置支持schema跳转时使用
        navigationOptions: { //可选 用于配置全局的屏幕导航选项 如title  headerRight headerLeft等
            title: 'First',
        }
    },
    second: {
        screen: second,
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`,
            //header: null    //自定义导航条 设置null则隐藏导航条
            //headerTitle:`二级页面的itemTitle`,
            //headerBackTitle:'666' //没软用
            headerRight: (
                <Button title="rightItem">

                </Button>
            ),
            // headerLeft: (
            //     <Text>leftItem</Text>
            // )

        })
    },
    third: {
        screen: third,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is page3',
                headerRight: (
                    <Button title={params.mode === 'edit' ? '保存' : '编辑'}
                            onPress={() => {
                                setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                            }}
                    >
                    </Button>
                )

            }
        }
    }
    //
});
export default Home = createAppContainer(nav);