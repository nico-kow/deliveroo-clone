import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import { ArrowRightIcon } from 'react-native-heroicons/outline'
import RestaurantCard from './RestaurantCard'
import {DIRECTUS_BASE_URL} from '@env'

const FeaturedRow = ({ title, description, id, restaurants }) => {

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
                {
                    restaurants?.map((restaurantId) =>{
                        const restaurant = restaurantId.Restaurants_id;
                        return <RestaurantCard 
                            key={restaurant.id}
                            id={restaurant.id}
                            title={restaurant.Name}
                            rating={restaurant.Bewertung}
                            genre={restaurant.Kategorien[0].Kategorien_id.Name}
                            imgUrl={DIRECTUS_BASE_URL+"/assets/"+restaurant.Bild}
                        />

                    })
                }
            </ScrollView>
        </View>
    )
}

export default FeaturedRow