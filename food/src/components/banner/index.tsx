import { Text, View, Pressable, Image } from 'react-native'
import React, { Component } from 'react'
import PagerView from "react-native-pager-view"

export function Banner() {
    return (
      <View className='w-full h-36 md:h-60 rounded-2xl mt-5 mb-4'>
        <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
            <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="1" onPress={() => console.log("CLICOU NO BANNER 1")}>
                <Image className="w-full h-36 rounded-2xl"source={require("../../assets/banner1.png")}>
                </Image>
            </Pressable>

            <Pressable className="w-full h-36 md:h-60 rounded-2xl" key="2" onPress={() => console.log("CLICOU NO BANNER 2")}>
                <Image className="w-full h-36 md:h-60 rounded-2xl"source={require("../../assets/banner2.png")}>
                </Image>
            </Pressable>
        </PagerView>
      </View>
    );
}