import React from 'react';
import { Alert } from "react-native";
import Loading from "./Loader";
import * as Location from "expo-location";


export default class extends React.Component {
  // react-native 에서 view 는 div 같은 container
  state = {
    isLoading: true,
  };
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      const { coords: { latitude, longitude } } = await Location.getCurrentPositionAsync();
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

