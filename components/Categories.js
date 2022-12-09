import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from './CategoryCard'
import axios from 'axios';
import {DIRECTUS_BASE_URL, DIRECTUS_JWT_TOKEN} from '@env'

const Categories = () => {
  const [categories, setCategories] = useState([]);

  function getAllCategories() {
    return axios.get(DIRECTUS_BASE_URL+'/items/Kategorien', {
            headers: {
                "Authorization": "Bearer "+DIRECTUS_JWT_TOKEN
            }
        });
  }

  useEffect(() => {
    getAllCategories().then((response) => {
      setCategories(response.data.data);
    });
  }, []);

  return (
    <ScrollView
      className="pt-2 px-2"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/** CategoryCards */}
      {
        categories?.map((category) => {
          return <CategoryCard
            key={category.id}
            imgUrl={DIRECTUS_BASE_URL+"/assets/"+category.Bild}
            title={category.Name}
          />
        })
      }
    </ScrollView>
  )
}

export default Categories