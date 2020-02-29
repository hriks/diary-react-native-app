import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../components/Logo'
import Form from '../components/Form'
import Colors from '../components/Colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    signupTextContainer: {
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: Colors.baseFontColor,
        fontSize: 14
    },
    signupButton: {
        color: '#093145',
        fontWeight: "600",
        fontSize: 14
    }
})


export default class Login extends React.Component<{}> {

    signup() {
        Actions.signup()
    }

    render() {
      return (
        <View style={styles.container}>
            <Logo />
            <Form type="Log in"/>
            <View style={styles.signupTextContainer}>
                <Text style={styles.signupText}>Don't have an account yet? </Text>
                <TouchableOpacity onPress={this.signup} >
                    <Text style={styles.signupButton}>Signup</Text>
                </TouchableOpacity>
            </View>
        </View>
      )
    }
}
