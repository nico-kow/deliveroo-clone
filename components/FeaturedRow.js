import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = ({ title, description, id }) => {
    return (
        <View>
            {/** Header */}
            <View className="px-2 flex-row items-center justify-between mt-4">
                <Text className="font-bold text-lg">{title}</Text>
                <ArrowRightIcon color="#00CCBB" />
            </View>

            {/** Description */}
            <Text className="px-2 text-xs text-gray-500">{description}</Text>

            {/** Restaurant Cards */}
            <ScrollView className="p-2"
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Test Title Res"
                    rating={4.6}
                    genre="Japanese"
                    address="blubbuoo"
                    short_description="short desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Test Title Res"
                    rating={4.6}
                    genre="Japanese"
                    address="blubbuoo"
                    short_description="short desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
                <RestaurantCard
                    id={123}
                    imgUrl="https://links.papareact.com/gn7"
                    title="Test Title Res"
                    rating={4.6}
                    genre="Japanese"
                    address="blubbuoo"
                    short_description="short desc"
                    dishes={[]}
                    long={20}
                    lat={0}
                />
            </ScrollView>
        </View>
    )
}

export default FeaturedRow