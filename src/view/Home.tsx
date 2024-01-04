import React, {useState, useCallback} from 'react'
import { View, Text }from 'react-native'
import { Button, Icon } from '@rneui/themed'
import { useFocusEffect, useNavigation } from '@react-navigation/native' 
import { StackNavigationProp } from '@react-navigation/stack'

import Header from '../component/header/Header'
import { RootStackParamList, Meal, TodayCaloriesProps } from '../types/index.d'
import { styleHome } from '../style/style'
import useFoodStorage from '../hook/useFoodStorage'
import TodayCalories from '../component/main/TodayCalories'
import TodayMeals from '../component/main/TodayMeals'

const totalCaloriesPerDay = 2000

const Home = () => {
  const [todayFood, setTodayFood] = useState<Meal[]>([])
  const [todayStatistics, setTodayStatistics] = useState<TodayCaloriesProps>({
    consumed: 0,
    percentage: 0,
    remaining: 0,
    total: totalCaloriesPerDay
  }
  )
  const {onGetTodayFood} = useFoodStorage()
  const {navigate} = 
    useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>()

  const calculateTodayStatistics = (meals: Meal[]) => {
    try{
      const caloriesConsumed = meals.reduce(
        (acum, curr) => acum + Number(curr.calories),
        0
      )
      const remainingCalories = totalCaloriesPerDay - caloriesConsumed
      const percentage = (caloriesConsumed / totalCaloriesPerDay) * 100
      setTodayStatistics({
        consumed: caloriesConsumed,
        percentage,
        remaining: remainingCalories,
        total: totalCaloriesPerDay
      })
    } catch(e) {
      console.error(e)
    }
  }

  const loadTodayFood = useCallback(async () => {
    try {
      const todayFoodResponse = (await onGetTodayFood()) as Meal[]
      calculateTodayStatistics(todayFoodResponse)
      setTodayFood(todayFoodResponse)
    } catch(e){
      setTodayFood([])
      console.error(e)
    }
  }, [])

  useFocusEffect(
    useCallback(() => {
      loadTodayFood().catch(null)
    }, [loadTodayFood])
  )

  const handleAddCaloriesPress = () => {
    navigate('AddFood')
  }
  
  return(
    <View style={styleHome.container}>
      <Header/>
      <View style={styleHome.caloriesContainer}>
        <View style={styleHome.leftContainer}>
          <Text style={styleHome.caloriesLegend}>Calories</Text>
        </View>
        <View style={styleHome.rightContainer}>
          <Button 
            icon={<Icon name="add-circle-outline" color='#FFF'/>} 
            radius='lg' 
            color='#4ecb71'
            onPress={handleAddCaloriesPress}
          />
        </View>
      </View>
      <TodayCalories {...todayStatistics} />
      <TodayMeals 
        foods={todayFood} 
        onCompleteAddRemove={() => loadTodayFood()}
      />
    </View>
  )
}

export default Home