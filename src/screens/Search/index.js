import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

//components
import MainHeader from "../../components/MainHeader";
import RestaurantCard from "../../components/RestaurantCard";

const SearchScreen = props => {

    return (

        //give main view content margin top of the header
        <View style={styles.container}>
            <MainHeader title="Deals Near You" />
            <RestaurantCard />
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // we give view margin top because that is how
        //big the transparent header is
        marginTop: 88,
    },
    text: {
        fontFamily: "Roboto-Medium",
        fontSize: 30
    }
});

export default SearchScreen;