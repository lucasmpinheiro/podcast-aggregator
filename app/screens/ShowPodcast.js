import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Content,
    Button,
    Left,
    Body,
    Title,
    Icon,
} from 'native-base';

import PodcastDetails from '../components/podcast/PodcastDetails';

class SearchPodcasts extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Container>
                <Header>
                    <Left>
                        <Button transparent>
                            <Icon
                                active
                                name="arrow-back"
                                onPress={() => this.props.navigation.goBack()}
                            />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Podcast Details</Title>
                    </Body>
                </Header>

                <Content>
                    <PodcastDetails {...this.props.currentPodcast} />
                </Content>
            </Container>
            </Container>
        );
    }
}

SearchPodcasts.propTypes = {
    navigation: PropTypes.any,
    currentPodcast: PropTypes.object,
};

const mapStateToProps = state => ({
    currentPodcast: state.currentPodcast,
});

export default connect(mapStateToProps)(SearchPodcasts);