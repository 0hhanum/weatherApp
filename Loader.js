import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Loading() {
    return <View style={styles.container}>
        <Text style={styles.text}>비가 오고 있나요?</Text>
    </View>;
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 180,
        paddingHorizontal: 50,
        backgroundColor: "#000000",

    },
    text: {
        color: "white",
        fontSize: 30,
        transform: [{ rotate: '90deg' }],
    }

});