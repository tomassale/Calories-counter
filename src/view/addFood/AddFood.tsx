import React, {useEffect, useState} from 'react'
import { View, Text, Alert, ScrollView } from 'react-native'
import { Button, Icon, Input } from '@rneui/themed'

import Header from '../../component/header/Header'
import AddFoodModal from '../../component/main/AddFoodModal'
import { styleFood } from '../../style/style' 
import useFoodStorage from '../../hook/useFoodStorage'
import { Meal } from '../../types/index.d'
import MealItem from '../../component/main/MealItem'

const AddFood = () => {

  const [visible, setVisible] = useState<boolean>(false)
  const [foods, setFoods] = useState<Meal[]>([])
  const [search, setSearch] = useState<string>('')
  const { onGetFoods } = useFoodStorage()
  
  const loadFoods = async () => {
    try{
      const foodsResponse = await onGetFoods()
      setFoods(foodsResponse)
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadFoods().catch(null)
  }, [])

  const handleModalClose = async (shouldUpdate?: boolean) => {
    if(shouldUpdate) {
      Alert.alert('Food saved')
      loadFoods()
    }
    setVisible(false)
  }

  const handleSearchPress = async () => {
    try{
      const result = await onGetFoods()
      setFoods(
        result.filter((item: Meal) => 
        item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        )
      )
    } catch(e) {
      setFoods([])
    }
  }

  return(
    <View style={styleFood.container}>
      <Header/>
      <View style={styleFood.addFoodContainer}>
        <View style={styleFood.legendContainer}>
          <Text style={styleFood.addFoodLegend}>Add Food</Text>
        </View>
        <View style={styleFood.addFoodBtnContainer}>
          <Button 
            icon={<Icon name="add-circle-outline" color='#FFF'/>}
            radius='lg'
            color='#4ecb71'
            onPress={()=> setVisible(true)}
          />
        </View>
      </View>
      <View style={styleFood.searchContainer}>
        <View style={styleFood.inputContainer}>
          <Input placeholder='apples, fries, soda...' onChangeText={(text: string) => setSearch(text)}/>
        </View>
        <View>
          <Button 
            title='Search' 
            color='#ade8af'
            titleStyle={styleFood.searchBtnTitle}
            radius='lg'
            onPress={handleSearchPress}
          />
        </View>
      </View>
      <ScrollView style={styleFood.content}>
        {foods?.map(meal => (
          <MealItem 
            key={`my-meal-item-${meal.name}`} 
            {...meal} 
            isAbleToAdd
          />
        ))}
      </ScrollView>
      <AddFoodModal visible={visible} onClose={handleModalClose}/>
    </View>
  )
}

export default AddFood