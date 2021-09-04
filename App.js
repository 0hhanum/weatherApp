import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loader";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "14934827b82e3dd644968d2ad7342ca8";

export default class extends React.Component {
  // react-native 에서 view 는 div 같은 container
  state = {
    isLoading: true
  };
  getWeather = async (latitude, longitude) => {
    const { data } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
    console.log(data);
  };

  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      this.setState({ isLoading: false });
    } catch (error) {
      Alert.alert("Can't find you", "So sad");
    };
  }
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Loading /> : null;
  }
};

