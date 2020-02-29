import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

import Colors from './Colors'


const  style = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputBox: {
        width: 300,
        backgroundColor: Colors.inputBoxColor,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        marginVertical: 10
    },
    button: {
        backgroundColor: Colors.defaultButtonColor,
        fontSize: 16,
        width: 300,
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 12,
        height: 45
    },
    buttonTitle: {
        fontWeight: '600'
    }
})

export default class Form extends React.Component<{}> {

    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <View style={style.container}>
                <TextInput
                    style={style.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Username'
                    onSubmitEditing={()=>{this.password.focus()}}
                />

                <TextInput
                    style={style.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Password'
                    secureTextEntry={true}
                    ref={(input) => {this.password = input}}
                />
                <RaisedTextButton title={this.props.type} color={Colors.defaultButtonColor} titleColor='#e7f3fa' style={style.button} titleStyle={style.buttonTitle}/>
            </View>
        )
    }
}
