import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Expo from 'expo';

import { Container, Header, Title, Content, Body } from 'native-base';

import { ActionCreators } from '../actions/index';
import Home from './Home';

class AppContainer extends Component {
    state = {
        fontLoaded: false,
    };

    async componentWillMount() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({ fontLoaded: true });
    }

    render() {
        // return <Home {...this.props} />;
        return this.state.fontLoaded ? (
            <Home {...this.props} />
        ) : null;
    }
}

const mapDispatchToProps = dispatch => bindActionCreators(ActionCreators, dispatch);

export default connect(null, mapDispatchToProps)(AppContainer);