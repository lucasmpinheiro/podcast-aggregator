import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Content,
    Body,
    Title,
    Text,
    Left,
    Button,
    Icon,
} from 'native-base';

class Home extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent>
                        <Icon
                            active
                            name="menu"
                            onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Podding</Title>
                    </Body>
                </Header>

                <Content>
                    <Text>Welcome to Podding!</Text>
                </Content>
            </Container>
        );
    }
}

Home.propTypes = {
    navigation: PropTypes.any,
};

export default Home;