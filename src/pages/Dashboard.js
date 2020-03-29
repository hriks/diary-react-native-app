import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { Container, Header, Left, Body, Icon, Button } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import {connect} from 'react-redux'
import { compose } from 'redux'

import {Actions} from 'react-native-router-flux';
import { Field, reduxForm } from 'redux-form'

import { TextButton, RaisedTextButton } from 'react-native-material-buttons';

import { createNewUser } from '../actions/auth.actions'
import Loader from "../components/Loader";
import {ErrorUtils} from "../utils/auth.utils";


import Logo from '../components/Logo'
import InputText from '../components/InputText'
import Colors from '../components/Colors'


const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.backgroundColor,
        flex: 1,
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
        fontSize: 14,
        color: '#093145',
        fontWeight: "600"
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
    },
    errorText: {
        color: Colors.defaultButtonColor,
        fontSize: 12,
        paddingHorizontal: 16,
        paddingBottom: 8,
        paddingTop: 2
    },
    header: {
        backgroundColor: Colors.black,
        fontSize: 14,
        paddingHorizontal: 16,
        paddingTop: 10
    }
})



class Dashboard extends React.Component<{}> {

    goBack() {
        Actions.pop();
    }

    goKeep() {
    }

    render() {
        const {getUser: {userDetails}} = this.props;
        return (
            <Container>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                        <Image
                            source={require('../images/logo_text.png')}
                        />
                    </Body>
                </Header>
                <Grid style={styles.container}>
                    <Col style={{ backgroundColor: Colors.baseFontColor, height: 200 }}></Col>
                    <Col style={{ backgroundColor: '#00CE9F', height: 200 }}></Col>
                </Grid>
            </Container>
        )
    }
}

mapStateToProps = (state) => ({
    getUser: state.userReducer.getUser
})

mapDispatchToProps = (dispatch) => ({
    dispatch
});

export default compose(
    connect(mapStateToProps, mapDispatchToProps)
)(Dashboard);