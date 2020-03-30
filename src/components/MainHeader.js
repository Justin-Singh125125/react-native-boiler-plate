import React from 'react';
import {
    Text,
    StyleSheet,
} from 'react-native';

const MainHeader = ({ title }) => {
    return (
        <Text style={styles.mainHeader}>{title}</Text>
    );
};


const styles = StyleSheet.create({
    mainHeader: {
        fontFamily: "Roboto-Bold",
        fontSize: 32,
        color: "#333",
        paddingLeft: 15,
        marginBottom: 10
    }
});

export default MainHeader;