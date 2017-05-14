import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    Image,
    StyleSheet,
} from 'react-native';

class PodcastListItem extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.artworkUrl60 }} style={styles.thumbnail} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{this.props.collectionName}</Text>
                    <Text style={styles.year}>
                        {this.props.trackCount === 1
                            ? '1 Episode' : `${this.props.trackCount} Episodes`}
                    </Text>
                </View>
            </View>
        );
    }
}

PodcastListItem.propTypes = {
    artworkUrl60: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
};

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

export default PodcastListItem;