import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { ListItem, Thumbnail, Body, Text } from 'native-base';

class PodcastListItem extends Component {
    render() {
        return (
            <ListItem>
                <Thumbnail square size={60} source={{ uri: this.props.artworkUrl60 }} />
                <Body>
                    <Text>{this.props.collectionName}</Text>
                    <Text>
                        {this.props.trackCount === 1
                            ? '1 Episode'
                            : `${this.props.trackCount} Episodes`}
                    </Text>
                </Body>
            </ListItem>
        );
    }
}

PodcastListItem.propTypes = {
    artworkUrl60: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
};

export default PodcastListItem;