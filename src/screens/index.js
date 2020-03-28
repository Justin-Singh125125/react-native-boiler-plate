import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    SafeAreaViewComponent
} from 'react-native';

//allows for us to put content below the header when transparent, since the header is being floated
import { useHeaderHeight } from 'react-navigation-stack';



const IndexScreen = props => {

    //get the height of the header
    const headerHeight = useHeaderHeight();

    return (

        //give main view content margin top of the header
        <View style={styles.container, { marginTop: headerHeight }} >
            <Text>This is the index</Text>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});



export default IndexScreen;