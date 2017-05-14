import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
    View,
    Text,
    TextInput,
    TouchableHighlight,
    StyleSheet,
} from 'react-native';

class SearchBar extends Component {
    render() {
        return (
            <View style={styles.searchSection}>
                <TextInput style={styles.searchInput}
                    returnKeyType='search'
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                    onChangeText={this.props.onChangeText}
                    onSubmitEditing={this.props.onSubmit}
                />

                <TouchableHighlight style={styles.searchButton}
                                    onPress={this.props.onSubmit}>
                    <Text style={styles.searchButtonText}>{this.props.buttonText}</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    onChangeText: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
    searchSection: {
        height: 50,
        borderBottomColor: '#aaa',
        borderBottomWidth: 1,
        padding: 5,
        flexDirection: 'row',
    },
    searchInput: {
        flex: 1,
        height: 40,
        backgroundColor: '#dedede',
        marginRight: 5,
    },
    searchButton: {
        height: 40,
        width: 80,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchButtonText: {
        textAlign: 'center',
    },
});

export default SearchBar;