import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    Container,
    Header,
    Content,
    Item,
    Icon,
    Input,
    Button,
    Text,
    Spinner,
    List,
} from 'native-base';

import { fetchPodcasts, setCurrentPodcast } from '../actions/podcasts';

import PodcastListItem from '../components/podcast/PodcastListItem';

class SearchPodcasts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searching: false,
            searchTerm: '',
        };
    }

    async updatePodcastList() {
        this.setState({ searching: true });
        await this.props.fetchPodcasts(this.state.searchTerm);
        this.setState({ searching: false });
    }

    showPodcastDetails(podcast) {
        this.props.setCurrentPodcast({ podcast });
        this.props.navigation.navigate('ShowPodcast');
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search"
                               value={this.state.searchTerm}
                               onChangeText={searchTerm => this.setState({ searchTerm })}
                               onSubmitEditing={() => this.updatePodcastList()} />
                    </Item>

                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>

                <Content>
                    {this.state.searching
                        ? <Spinner />
                        : <List dataArray={this.props.searchedPodcasts}
                                renderRow={podcast =>
                                    <PodcastListItem
                                        {...podcast}
                                        onPress={() => this.showPodcastDetails(podcast)}
                                    />}
                            />
                    }
                </Content>
            </Container>
        );
    }
}

SearchPodcasts.propTypes = {
    fetchPodcasts: PropTypes.func.isRequired,
    setCurrentPodcast: PropTypes.func.isRequired,
    searchedPodcasts: PropTypes.array.isRequired,
    navigation: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    searchedPodcasts: state.searchedPodcasts,
});

export default connect(mapStateToProps, {
    fetchPodcasts,
    setCurrentPodcast,
})(SearchPodcasts);