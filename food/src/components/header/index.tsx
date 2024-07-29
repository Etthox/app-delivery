import { View, Text, Pressable } from 'react-native'
import React from 'react'
import {Ionicons, Feather} from '@expo/vector-icons'

export function Header() {
  return (
    <View className='w-full flex justify-between flex-row items-center'>
        <Pressable className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
            <Ionicons name="menu" size={20} color="#121212"/>
        </Pressable>

        <View className='flex-col items-center justify-center'>
            <Text className='text-center text-sm text-slate-800'> Localização</Text>

            <View className='flex-row items-center justify-center gap-1'>
                <Feather name="map-pin" size={14} color="#FF0000"></Feather>
                <Text className='text-lg font-bold'> São Paulo</Text>
            </View>

        </View>

        <Pressable className="w-10 h-10 rounded-full bg-white flex justify-center items-center">
            <Feather name="bell" size={20} color="#121212"/>
        </Pressable>
    </View>
  )
}