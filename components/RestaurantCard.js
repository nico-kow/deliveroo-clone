import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {
    return (

        <TouchableOpacity className="bg-white mr-3 mb-1.5 ml-1 shadow shadow-slate-600 rounded-sm">
            {/** Header */}
            <Image
                className="h-36 w-64 rounded-t-sm"
                source={{
                    uri: imgUrl
                }}
            />

            {/** Body */}
            <View className="px-3 pb-4">

                {/** Title */}
                <Text className="font-bold text-lg pt-2">{title}</Text>

                {/** Rating */}
                <View className="flex-row items-center space-x-1">
                    <StarIcon color="green" size={22} opacity={0.5} />
                    <Text className="text-xs text-gray-500">
                        <Text className="text-green-600">{rating}</Text>
                        │{genre}
                    </Text>
                </View>

                {/** Location */}

            </View>
        </TouchableOpacity>
    )
}

export default RestaurantCard