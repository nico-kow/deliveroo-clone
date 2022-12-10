import { View, Text, Animated } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const OrderingScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Delivery');
        }, 4000);
    }, [])
    

  return (
    <View className="flex-1 items-center justify-center bg-[#00CCBB]">
        <Animated.Image
        className ="h-52 w-52"
        source={require('../assets/food-order-being-prepared.gif')}
        />
        <Text className="text-white text-xl font-bold">Dein Essen wird jetzt zubereitet</Text>

    </View>
  )
}

export default OrderingScreen