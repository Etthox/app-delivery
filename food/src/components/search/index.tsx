import React from 'react';
import { View, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';

export function Search() {
 return (
   <View className='w-full h-14 flex flex-row border border-slate-500 rounded-full items-center gap-2 px-4 bg-transparent'>
        <Feather name='search' size={24} color="#64748b">

        </Feather>
        <TextInput placeholder='Procure sua comida...' className='w-full h-full flex-1 bg-transparent'>
            
        </TextInput>
   </View>
  );
} 