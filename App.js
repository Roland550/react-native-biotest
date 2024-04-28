import { StatusBar } from "expo-status-bar";
import { Stack } from "expo-router";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  TouchableHighlight,
} from "react-native";

import { COLORS, icons, images, SIZES } from "../constants";
import {
  Welcome,
  Nearbyjobs,
  Popularjobs,
  ScreenHearderBtn,
  Biometric,
  FormHeader
} from "../components";

import React, { useState, useEffect } from "react";
import * as LocalAuthentication from "expo-local-authentication";

const Data = [leftHeading='Welcome',rightHeading="Back",
subHeading="To our project bf system"]

export default function App() {
  return (
    <View style={{ flex: 1, paddingTop: 120 }}>
    <View style={{ height: 100 }}>
      {/* <FormHeader
       leftHeading= {Data.leftHeading}
        rightHeading={Data.rightHeading}
        subHeading={Data.subHeading}
      /> */}
    </View>
  </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: StatusBar.currentHeight,
//   },
// });
