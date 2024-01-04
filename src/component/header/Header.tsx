import React from 'react'
import { View, Text, Image } from "react-native"
import { Button, Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'

import { styleHeader } from '../../style/style'

const staticInfo = {
  name:'Tomás Sale',
  uri:'https://avatars.githubusercontent.com/u/89428280?s=48&v=4'
}

const Header = () => {
  const { canGoBack, goBack } = useNavigation()
  return(
    <View style={styleHeader.container}>
      {canGoBack() ? (
        <View style={styleHeader.arrowContainer}>
          <Button icon ={<Icon name="arrow-back" size={24}/>} type='clear' onPress={() => goBack()}/>
        </View>
      ): undefined}
      <View style={styleHeader.leftContainer}>
        <Text style={styleHeader.name}>{`Hello ${staticInfo.name}`}</Text>
        <Text style={styleHeader.subtitle}>Welcome back to your goal</Text>
      </View>
      <View style={styleHeader.rightContainer}>
        <Image source={{ uri: staticInfo.uri}} style={styleHeader.profileImage}/>
      </View>
    </View>
  )
}

export default Header