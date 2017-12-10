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

import { fetchPodcasts } from '../actions/podcasts';

import PodcastListItem from '../components/podcast/PodcastListItem';

class Home extends Component {
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

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    {/* <Body>
                        <Title>Podding</Title>
                    </Body> */}
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
                                renderRow={podcast => <PodcastListItem {...podcast} />} />
                    }
                </Content>
            </Container>
        );
    }
}

Home.propTypes = {
    fetchPodcasts: PropTypes.func.isRequired,
    searchedPodcasts: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
    searchedPodcasts: state.searchedPodcasts,
});

const mapDispatchToProps = dispatch => ({
    fetchPodcasts: terms => dispatch(fetchPodcasts(terms)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);