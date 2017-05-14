import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
    View,
    ScrollView,
    Text,
    StyleSheet,
} from 'react-native';

import PodcastListItem from '../components/podcast/PodcastListItem';
import SearchBar from '../components/SearchBar';

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
            <View style={styles.scene}>
                <SearchBar
                    placeholder='Podcast name'
                    value={this.state.searchTerm}
                    buttonText='Search'
                    onChangeText={ searchTerm => this.setState({ searchTerm }) }
                    onSubmit={ () => this.updatePodcastList() }
                />
                <ScrollView style={styles.scrollSection}>
                    {!this.state.searching && this.props.searchedPodcasts.map(podcast => {
                        return <PodcastListItem key={podcast.feedUrl} {...podcast} />;
                    })}
                    { this.state.searching ? <Text>Searching...</Text> : null }
                </ScrollView>
            </View>
        );
    }
}

Home.propTypes = {
    fetchPodcasts: PropTypes.func.isRequired,
    searchedPodcasts: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
    scrollSection: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#dedede',
    },
});

const mapStateToProps = state => ({
    searchedPodcasts: state.searchedPodcasts,
});

export default connect(mapStateToProps)(Home);