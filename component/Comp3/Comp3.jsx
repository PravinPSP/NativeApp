import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const Comp3 = ({navigation}) => {

  return (
    <View>
      <Text>Comp3</Text>
      <Button
        title="logout"
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </View>
  )
}

export default Comp3