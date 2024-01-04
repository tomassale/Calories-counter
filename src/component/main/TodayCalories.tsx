import React, {FC} from 'react'
import { View, Text } from 'react-native'
import CircularProgress from 'react-native-circular-progress-indicator'

import { styleCalories } from '../../style/style'
import { TodayCaloriesProps } from '../../types'

const TodayCalories: FC<TodayCaloriesProps> = ({
    total = 2000, 
    consumed = 0, 
    remaining = 0,
    percentage = 0
  }) => {
  return(
    <View style={styleCalories.container}>
      <View style={styleCalories.leftContainer}>
        <CircularProgress 
          value={percentage}
          valueSuffix='%'
        />
      </View>
      <View style={styleCalories.rightContainer}>
        <Text style={styleCalories.today}>Today</Text>
        <View style={styleCalories.rightItem}>
          <Text style={styleCalories.rightItemLegend}>Consumed</Text>
          <Text style={styleCalories.rightItemValue}>{total}</Text>
        </View>
        <View style={styleCalories.rightItem}>
          <Text style={styleCalories.rightItemLegend}>Total</Text>
          <Text style={styleCalories.rightItemValue}>{consumed}</Text>
        </View>
        <View style={styleCalories.rightItem}>
          <Text style={styleCalories.rightItemLegend}>Remaining</Text>
          <Text style={styleCalories.rightItemValue}>{remaining}</Text>
        </View>
      </View>
    </View>
  )
}

export default TodayCalories