import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MinusCircleIcon, PlusCircleIcon } from 'react-native-heroicons/solid';
import { useDispatch, useSelector } from 'react-redux';
import { addToBasket, removeFromBasket, selectedBasketItems, selectedBasketItemsWithId } from '../features/basketSlice';

const DishRow = ({ id, name, shortDescription, imgUrl, price }) => {

    const [isPressed, setIsPressed] = useState(false);

    const items = useSelector((state) => selectedBasketItemsWithId(state, id));
    const dispatch = useDispatch();

    const handlePressPlus = () => {
        dispatch(addToBasket({id, name, shortDescription, imgUrl, price}));
    }

    const handlePressMinus = () => {
        if (items.length > 0) {
            dispatch(removeFromBasket({id, name, shortDescription, imgUrl, price}));
        }
    }

    return (
        <>
            <TouchableOpacity
                className={`bg-white w-full px-2 py-4 border-b border-gray-200 ${isPressed && "border-b-0"}`}
                onPress={() => { setIsPressed(!isPressed) }}
            >


                {/** Content 2 rows*/}
                <View className="flex-row items-start justify-between">

                    {/** Text */}
                    <View className="space-y-2">
                        <Text className="text-xl">{name}</Text>
                        <Text className="text-gray-500">{shortDescription}</Text>
                        <Text className="text-gray-500">{price + ' €'}</Text>
                    </View>

                    {/** Image */}
                    <Image
                        className="h-20 w-20 rounded-sm"
                        source={{
                            uri: imgUrl
                        }}
                    />
                </View>

                {/** Buttons */}
                {
                    isPressed &&
                    <View className="flex-row items-center space-x-3 mt-4">
                        <TouchableOpacity
                            onPress={() => handlePressMinus()}
                            disabled={items.length < 1}
                        >
                            <MinusCircleIcon size={40} color={items.length > 0 ? "#00CCBB" : "gray"} />
                        </TouchableOpacity>
                        <Text>{items.length}</Text>
                        <TouchableOpacity
                            onPress={() => handlePressPlus()}
                        >
                            <PlusCircleIcon size={40} color="#00CCBB" />
                        </TouchableOpacity>
                    </View>
                }
            </TouchableOpacity>
        </>
    )
}

export default DishRow