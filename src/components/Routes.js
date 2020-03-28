import React from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Dashboard from '../pages/Dashboard';

export default class Routes extends React.Component<{}> {

    render() {
        return(
            <Router>
                <Scene>
                    <Scene key="root" hideNavBar={true} initial={!this.props.isLoggedIn}>
                        <Scene key="login" component={Login} title="Login" initial={true} />
                        <Scene key="signup" component={Signup} title="Signup" />
                    </Scene>
                    <Scene key="app" hideNavBar={true} initial={this.props.isLoggedIn}>
                        <Scene key="dashboard" component={Dashboard} title="Dashboard" initial={true} />
                    </Scene>
                </Scene>
            </Router>
        )
    }
}