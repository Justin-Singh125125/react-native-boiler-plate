import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const SavedScreen = props => {

    return (

        //give main view content margin top of the header
        <View style={styles.container}>
            <Text>Saved screen</Text>

        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // we give view margin top because that is how
        //big the transparent header is
        marginTop: 88
    }
});

export default SavedScreen;