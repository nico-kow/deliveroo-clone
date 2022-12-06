import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <ScrollView 
    className= "pt-2 px-2"
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/** CategoryCards */}
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="Testing"/>
    </ScrollView>
  )
}

export default Categories