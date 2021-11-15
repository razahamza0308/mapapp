import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ImagePickerExample from "./src/components/ImagePicker";
import MyMap from "./src/components/Map";
export default function App() {
  return (
    <MyMap
      initialRegion={{
        latitude: 24.92583259570467,
        longitude: 67.08996124654924,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
}
