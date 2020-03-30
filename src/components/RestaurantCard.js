import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    Platform
} from 'react-native';

//styles
import { globalStyles } from "../styles/globalStyles";



const RestaurantCard = ({ }) => {

    return (
        <View style={styles.container}>
            <View style={[styles.restaurantImageContainer, globalStyles.mainBoxShadow]}>
                <Image style={styles.restaurantImage} source={{ uri: "https://digital.hbs.edu/platform-rctom/wp-content/uploads/sites/4/2015/12/In-N-Out-night-300x268.jpg" }} />
            </View>
            <View style={styles.restaurantInfo}>

                <Text style={[styles.restaurantHeader, globalStyles.mainFont]}>In-N-Out Burger</Text>
                <Text style={[globalStyles.mainFont]}>460 Old Gregory Road test in this</Text>
                <Text style={[globalStyles.mainFont]}>1.2 miles</Text>
                <Button title="test" />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        paddingLeft: 15,
        paddingRight: 15,
        display: "flex",
        flexDirection: "row",
        height: 100
    },
    restaurantImageContainer: {
        width: "50%",
        height: "100%",
    },
    restaurantImage: {
        width: "100%",
        height: "100%"
    },

    restaurantInfo: {
        marginLeft: 20,
        width: "50%",
    },
    restaurantHeader: {
        fontSize: 20
    }
});

export default RestaurantCard;