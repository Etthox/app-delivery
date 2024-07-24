import React from "react";
import { ScrollView, Text, View } from "react-native";
import Header from "../components/header";

import Constants from 'expo-constants'

const statusBarheight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarheight + 8 }}>
        <Header></Header>
      </View>
    </ScrollView>
  );
}
