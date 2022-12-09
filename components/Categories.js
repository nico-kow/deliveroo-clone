import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import { DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN } from '@env'
import useCategories from '../hooks/UseCategories';

const Categories = () => {
  const { data, isLoading, isSuccess } = useCategories();

  return (
    <ScrollView
      className="pt-2 px-2"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/** CategoryCards */}
      {
        isSuccess && (
          <>
            {
              data?.map((category) => {
                return <CategoryCard
                  key={category.id}
                  imgUrl={DIRECTUS_BASE_URL + "/assets/" + category.Bild}
                  title={category.Name}
                />
              })
            }
          </>
        )
      }
    </ScrollView>
  )
}

export default Categories