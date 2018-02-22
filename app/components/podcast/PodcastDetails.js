import React from 'react';
import PropTypes from 'prop-types';

import { Image } from 'react-native';

import {
    Body,
    Card,
    CardItem,
    Text,
    Icon,
} from 'native-base';

const genresToString = genres => genres.filter(x => x !== 'Podcasts').join(', ');

const PodcastDetails = ({
    collectionName, trackCount, feedUrl,
    artworkUrl600 = '',
    genres = [],
}) => (
    <Card>
        <CardItem header>
            <Body>
                <Text>{collectionName}</Text>
                <Text note>
                    {trackCount === 1
                        ? '1 Episode'
                        : `${trackCount} Episodes`}
                </Text>
            </Body>
        </CardItem>

        <CardItem cardBody>
            <Image source={{ uri: artworkUrl600 }} style={{ height: 300, width: null, flex: 1 }} />
        </CardItem>

        <CardItem>
            <Icon name="pricetags" />
            <Text>{genresToString(genres)}</Text>
        </CardItem>

        <CardItem>
            <Icon name="link" />
            <Text>{feedUrl}</Text>
        </CardItem>
    </Card>
);

PodcastDetails.propTypes = {
    collectionName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
    feedUrl: PropTypes.string.isRequired,
    artworkUrl600: PropTypes.string,
    genres: PropTypes.array,
};

export default PodcastDetails;