import React, { FC } from 'react'
import { View, Text, Alert } from 'react-native'
import { Button, Icon } from '@rneui/themed'

import { styleMeal } from '../../style/style' 
import { MealItemProps } from '../../types'
import useFoodStorage from '../../hook/useFoodStorage'


const MealItem: FC<MealItemProps> = ({ 
    calories, 
    portion, 
    name, 
    isAbleToAdd,
    itemPosition,
    onCompleteAddRemove
  }) => {
  const { onSaveTodayFood, onDeleteTodayFood } = useFoodStorage()

  const handleIconPress = async () => {
    try {
      if(isAbleToAdd) {
        await onSaveTodayFood({calories, portion, name})
        Alert.alert('Comida agregada')
      } else {
        await onDeleteTodayFood(itemPosition ?? -1)
        Alert.alert('Comida eliminada')
      }
      onCompleteAddRemove?.()
    } catch(e) {
      console.error(e)
      Alert.alert('Comida no agregada')
    }
  }

  return(
    <View style={styleMeal.container}>
      <View style={styleMeal.leftContainer}>
        <Text style={styleMeal.name}>{name}</Text>
        <Text style={styleMeal.portion}>{portion}</Text>
      </View>
      <View style={styleMeal.rightContainer}>
        <Button 
          icon={<Icon name={isAbleToAdd ? "add-circle-outline" : "close"}/>} 
          type='clear' 
          style={styleMeal.iconButton}
          onPress={handleIconPress}
        />
        <Text style={styleMeal.calories}>{calories} cal</Text>
      </View>
    </View>
  )
}

export default MealItem