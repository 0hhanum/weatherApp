import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
    return (
        <LinearGradient colors={['#E0EAFC', '#83a4d4']} style={styles.container}>
            <Text style={styles.text}>비가   오고   있나요?</Text>
        </LinearGradient>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingVertical: 180,
        paddingHorizontal: 50,
        // backgroundColor: "#2b5970",

    },
    text: {
        color: "black",
        fontSize: 40,
        transform: [{ rotate: '90deg' }],
        left: 100,
        bottom: 100,
        fontWeight: "100",
    }

});