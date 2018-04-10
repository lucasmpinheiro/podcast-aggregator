import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Card, CardItem, Thumbnail, Body, Text, Left } from 'native-base';

class PodcastListItem extends Component {
    render() {
        return (
            <Card>
                <CardItem
                    cardBody
                    button
                    onPress={() => this.props.onPress && this.props.onPress()}>
                    <Left>
                        <Thumbnail square large source={{ uri: this.props.artworkUrl100 }} />
                        <Body>
                            <Text>{this.props.collectionName}</Text>
                            <Text note>
                                {this.props.trackCount === 1
                                    ? '1 Episode'
                                    : `${this.props.trackCount} Episodes`}
                            </Text>
                        </Body>
                    </Left>
                </CardItem>
            </Card>
        );
    }
}

PodcastListItem.propTypes = {
    artworkUrl100: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    onPress: PropTypes.func,
};

export default PodcastListItem;