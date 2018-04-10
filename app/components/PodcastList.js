import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TextInput,
} from 'react-native';

import ItunesService from './shared/services/itunes';

export default class PodcastList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2,
            }),
        };
    }

    async updatePodcastList() {
        this._podcastList = await ItunesService.fetchPodcastsList(this.state.searchText);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this._podcastList),
            loaded: true,
        });
    }

    render() {
        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderPodcast}
                style={styles.listView}
            />
        );
    }

    renderLoadingView() {
        return (
            <View style={{ flex: 1 }}>
                <TextInput
                    style={{ height: 40, flex: 1 }}
                    placeholder="Search..."
                    onChangeText={searchText => this.setState({ searchText })}
                    onSubmitEditing={() => this.updatePodcastList()}
                />
                <Text style={{ flex: 2 }}>Loading podcast list...</Text>
            </View>
        );
    }

    renderPodcast(podcast) {
        return (
            <View style={styles.container}>
                <Image source={{ uri: podcast.artworkUrl60 }} style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{podcast.collectionName}</Text>
                    <Text style={styles.year}>{podcast.releaseDate}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    listView: {
        paddingTop: 20,
        paddingBottom: 20,
        backgroundColor: '#ccc',
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
