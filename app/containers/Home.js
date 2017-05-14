import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

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
                <View style={styles.searchSection}>
                    <TextInput style={styles.searchInput}
                        returnKeyType='search'
                        placeholder='Podcast name'
                        onChangeText={ searchTerm => this.setState({ searchTerm }) }
                        onSubmitEditing={() => this.updatePodcastList()}
                        value={this.state.searchTerm}
                    />
                    <TouchableHighlight style={styles.searchButton}
                                        onPress={ () => this.updatePodcastList() }>
                        <Text>Fetch Podcasts</Text>
                    </TouchableHighlight>
                </View>
                <ScrollView style={styles.scrollSection}>
                    {!this.state.searching && this.props.searchedPodcasts.map(this.renderPodcast)}
                    { this.state.searching ? <Text>Searching...</Text> : null }
                </ScrollView>
            </View>
        );
    }

    renderPodcast(podcast) {
        return (
            <View key={podcast.feedUrl} style={styles.container}>
                <Image source={{ uri: podcast.artworkUrl60 }} style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{podcast.collectionName}</Text>
                    <Text style={styles.year}>{podcast.releaseDate}</Text>
                </View>
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
    searchSection: {
        height: 50,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 0.7,
        height: 40,
    },
    searchButton: {
        flex: 0.3,
        height: 40,
    },
    scrollSection: {
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: '#ccc',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding: 5,
        margin: 5,
        marginTop: 0,
    },
    rightContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    thumbnail: {
        width: 60,
        height: 60,
        marginRight: 5,
    },
    title: {
        flex: 1,
        fontSize: 16,
        marginBottom: 8,
        textAlign: 'left',
    },
    year: {
        flex: 2,
        textAlign: 'left',
    },
});

function mapStateToProps(state) {
    return {
        searchedPodcasts: state.searchedPodcasts,
    };
}

export default connect(mapStateToProps)(Home);