import fetch from 'fetch';

// Itunes search URL.
const itunesUrl = 'https://itunes.apple.com/search';

// Search parameters.
const searchParams = 'media=podcast&attribute=titleTerm&entity=podcast';

export default {
    fetchPodcastsList: async term => {
        let queryUrl = `${itunesUrl}?${searchParams}&term=${term}`;

        try {
            const res = await fetch(queryUrl);
            const resJson = await res.json();
            return resJson.results;
        } catch (error) {
            console.error(error);
        }
    },
};
