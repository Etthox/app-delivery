import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Header } from "../components/header";
import { Banner } from "../components/banner";

import Constants from 'expo-constants'
import { Search } from "../components/search";
import Section from "../components/section";


const statusBarheight = Constants.statusBarHeight;

export default function Index() {
  return (
    <ScrollView style={{ flex: 1 }} className="bg-slate-200" showsVerticalScrollIndicator={false}>
      <View className="w-full px-4" style={{ marginTop: statusBarheight + 8 }}>
        <Header></Header>
        <Banner></Banner>
        <Search></Search>
        <Section name="Comidas em alta" 
        label="Veja mais" 
        action={ () => console.log("CLICOU NO VEJA MAIS") } 
        size="text-2xl">

        </Section>
      </View>
    </ScrollView>
  );
}
