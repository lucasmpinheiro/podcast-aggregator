import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import { Root } from 'native-base';

import Home from './screens/Home';
import SearchPodcasts from './screens/SearchPodcasts';
import ShowPodcast from './screens/ShowPodcast';
import Sidebar from './components/Sidebar';

const Drawer = DrawerNavigator({
    Home: { screen: Home },
    SearchPodcasts: { screen: SearchPodcasts },
    ShowPodcast: { screen: ShowPodcast },
}, {
    initialRouteName: 'Home',
    contentComponent: props => <Sidebar {...props} />,
});

const App = () => (
    <Root>
        <Drawer />
    </Root>
);

export default App;