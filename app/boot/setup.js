import * as Expo from 'expo';
import React, { Component } from 'react';
import { StyleProvider } from 'native-base';
import { Provider } from 'react-redux';

import App from '../App';

import configureStore from './configureStore';
import getTheme from '../theme/components';
import variables from '../theme/variables/platform';

class Setup extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            store: configureStore(() => this.setState({ isLoading: false })),
            isReady: false,
        };
    }

    componentWillMount() {
        this.loadFonts();
    }

    async loadFonts() {
        await Expo.Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });

        this.setState({ isReady: true });
    }

    render() {
        return (!this.state.isReady || this.state.isLoading)
            ? <Expo.AppLoading />
            : (
			<StyleProvider style={getTheme(variables)}>
				<Provider store={this.state.store}>
					<App />
				</Provider>
			</StyleProvider>
		);
    }
}

export default Setup;