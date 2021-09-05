import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
    Haze: {
        iconName: "weather-fog",
        gradient: ['#ad5389', '#1b0953'],
        title: "안개",
        subTitle: "잘 안보여"
    },
    Clouds: {
        iconName: "cloud-outline",
        gradient: ['#bdc3c7', '#2c3e50'],
        title: "흐림",
        subTitle: "꾸덕꾸덕"
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "번개",
        subTitle: "쾅쾅"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "부슬비",
        subTitle: "부슬부슬"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00d2ff", "#928DAB"],
        title: "비",
        subTitle: "우산을 잊지마"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "눈",
        subTitle: "눈이와요"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Atmosphere",
        subTitle: "?"
    },
    Clear: {
        iconName: "thumb-up-outline",
        gradient: ["#2980B9", "#ACB6E5"],
        title: "청명",
        subTitle: "기분좋은날씨"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#ADA996", "#EAEAEA"],
        title: "안개",
        subTitle: "안보여 잘"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "미세먼지",
        subTitle: "가득"
    },
};

export default function Weather({ temp, condition }) {
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons name={weatherOptions[condition].iconName} size={100} color="white" />
                <Text style={styles.temp}>{temp}˚C</Text>
            </View>
            <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
            </View>
        </ LinearGradient >
    );
};
Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 200
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    temp: {
        fontSize: 36,
        color: "white",
        marginTop: 20,
        fontWeight: "200"
    },
    title: {
        color: "white",
        fontSize: 50,
        fontWeight: "100",
        marginBottom: 30
    },
    subTitle: {
        color: "white",
        fontWeight: "100",
        fontSize: 24
    },
    textContainer: {
    }
});