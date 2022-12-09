import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({imgUrl, title}) => {


  if(title.length > 11) {
    title = title.substring(0,7)+'...'
  }

  return (
    <TouchableOpacity className="relative mr-2">
      <View className="h-20 w-20 rounded bg-slate-800">
        <Image
            source= {{
                uri: imgUrl,
            }}
            className="h-20 w-20 rounded opacity-60"
        />

      </View>
      <Text className="text-white absolute bottom-1 left-1 font-bold truncate">{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard