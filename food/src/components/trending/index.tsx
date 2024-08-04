import React, { useEffect } from 'react';
import { useState } from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native';
import { CardHorizontalFood } from './food';

export interface FoodProps {
    id: string
    name: string
    price: number
    time: string
    delivery: number
    rating: number
    image: string
    restaurandId: string
}


export function TrendingFoods() {
    const [foods, setFoods] = useState<FoodProps[]>([])

    useEffect( () => {
        async function getFoods(){
            const response = await fetch("http://192.168.0.3:3000/foods")
            const data = await response.json()
            setFoods(data);
        }
        getFoods();
    }, [])

 return (
   <FlatList data={foods} horizontal={true} renderItem={ ({ item }) => <CardHorizontalFood food={item} />}/>
  );
}