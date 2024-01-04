import React, {FC} from 'react'
import { Text, View, ScrollView } from 'react-native'

import MealItem from './MealItem'
import { TodayMealsProps, Meal } from '../../types/index'
import { styleTodayMeal } from '../../style/style'

const TodayMeals: FC<TodayMealsProps> = ({ foods, onCompleteAddRemove }) => {
  return(
    <View style={styleTodayMeal.container}>
      <Text style={styleTodayMeal.title}>Comidas</Text>
      <ScrollView style={styleTodayMeal.content}>
        {foods?.map((meal: Meal, index) =>
          <MealItem 
            key={`today-meal-item-${meal.name}-${index}`} 
            {...meal} 
            onCompleteAddRemove={onCompleteAddRemove}
            itemPosition={index}
          />
        )}
      </ScrollView>
    </View>
  )
}

export default TodayMeals