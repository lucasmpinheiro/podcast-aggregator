import React, { Component } from 'react';
import { Text, Container, List, ListItem, Content } from 'native-base';
import PropTypes from 'prop-types';

const routes = [{
    route: 'Home',
    caption: 'Home',
}, {
    route: 'SearchPodcasts',
    caption: 'Search',
}];

class Sidebar extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List
                        style={{ marginTop: 10 }}
                        dataArray={routes}
                        renderRow={data => (
                            <ListItem
                                button
                                onPress={() => this.props.navigation.navigate(data.route)}
                            >
                                <Text>{data.caption}</Text>
                            </ListItem>
                        )}
                    />
                </Content>
            </Container>
        );
    }
}

Sidebar.propTypes = {
    navigation: PropTypes.any,
};

export default Sidebar;