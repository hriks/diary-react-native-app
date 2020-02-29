import React from 'react';
import {
    StyleSheet,
    View,
    Image,
    Text
} from 'react-native';

import Colors from './Colors'


const style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: Colors.baseFontColor
    }
})

export default class Logo extends React.Component<{}> {
    render() {
        return (
            <View style={style.container}>
                <Image
                    style={{height: 130, width: 120}}
                    source={require('../images/logo.png')}
                />
                <Text style={style.logoText}>
                    Welcome to Diary
                </Text>
            </View>
        )
    }
}
