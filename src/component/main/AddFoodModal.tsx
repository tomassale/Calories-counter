import React, { FC, useEffect, useState } from 'react'
import { Modal, Text, View } from 'react-native'
import { Button, Icon, Input } from '@rneui/themed';

import { AddFoodModalProps } from '../../types/index'
import { styleModal } from '../../style/style.tsx';
import useFoodStorage from '../../hook/useFoodStorage.tsx';

const AddFoodModal: FC<AddFoodModalProps> = ({ onClose, visible }) => {

  const [calories, setCalories] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [portion, setPortion] = useState<string>('')
  const { onSaveFood } = useFoodStorage()

  useEffect(() => {
    setCalories('')
    setName('')
    setPortion('')
  }, [visible])

  const handleSubmit = async () => {
    try{
      await onSaveFood({
        calories,
        name,
        portion
      })

      onClose()
    } catch(e){
      console.error(e)
    }
    onClose()
  }

  return (
    <Modal
      visible={visible}
      onRequestClose={() => onClose}
      animationType='slide'
      transparent
    >
      <View style={styleModal.container}>
        <View style={styleModal.content}>
          <View style={styleModal.closeContainer}>
            <Button
              icon={<Icon name="close" size={28} />}
              onPress={() => onClose}
              type='clear'
            />
          </View>
          <View style={styleModal.formItem}>
            <View style={styleModal.inputContainer}>
              <Input 
                value={calories} 
                onChangeText={(text: string) => setCalories(text)} 
              />
            </View>
            <View style={styleModal.legendContainer}>
              <Text style={styleModal.legend}>Kcal</Text>
            </View>
          </View>
          <View style={styleModal.formItem}>
            <View style={styleModal.inputContainer}>
              <Input 
                value={name} 
                onChangeText={(text: string) => setName(text)} 
              />
            </View>
            <View style={styleModal.legendContainer}>
              <Text style={styleModal.legend}>Name</Text>
            </View>
          </View>
          <View style={styleModal.formItem}>
            <View style={styleModal.inputContainer}>
              <Input 
                value={portion} 
                onChangeText={(text: string) => setPortion(text)} 
              />
            </View>
            <View style={styleModal.legendContainer}>
              <Text style={styleModal.legend}>Portion</Text>
            </View>
          </View>
          <View style={styleModal.buttonContainer}>
            <Button
              title='Add'
              icon={<Icon name="add" color='#FFF' />}
              radius='lg'
              color='#4ecb71'
              onPress={handleSubmit}
              disabled={
                calories.trim() === '' ||
                name.trim() === '' || 
                portion.trim() === ''
              }
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AddFoodModal