import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    mainBoxShadow: {
        ...Platform.select({
            ios: {
                shadowOffset: { width: 0, height: 1 },
                shadowColor: '#000',
                shadowOpacity: .5,
                elevation: 1,
                backgroundColor: "#000"
            },
            android: {
                elevation: 10,
            }
        })
    },
    mainFont: {
        fontFamily: "Roboto-Medium"
    }
})