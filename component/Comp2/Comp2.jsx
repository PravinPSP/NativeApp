import React from 'react'
import { StyleSheet, View, Text, Button, Image, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Comp2 = () => {
  return (
    <View style={styles.comp2}>
      <View style={styles.comp2Header}>
        <View style={styles.comp2data}>
          <Image
            source={require('../../assets/manImage.png')}
            style={{ width: 40, height: 40 }}
          />
          <Text style={styles.hometext} >Home,</Text>
          <Text style={styles.viewtext}>Viewer!</Text>
        </View>
        <Image
          source={require('../../assets/notification.png')}
          style={{ width: 20, height: 20 }}
        />
      </View>

      <View>
      <Ionicons 
       style={styles.searchbox} 
      name='search-circle' color='blue' size={34} />

        <TextInput style={styles.input} 
        />
      </View>
      <View style={styles.bigBox}>

</View>

      <View style={styles.plusBox}>
        <Ionicons name='add' color='white' size={24} />
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  comp2: {
    height: '100vh',
  },

  comp2Header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '15px',
    marginTop: '25px',
    justifyContent: 'space-between',
    paddingLeft: '20px',
    paddingRight: '20px',
  },
  comp2data: {
    display: 'flex',
    flexDirection: 'row',
  },
  hometext: {
    marginLeft: '15px',
    fontSize: '25px',
    fontWeight: "600",
  },
  viewtext: {
    fontSize: '25px',

  },
  plusBox: {
    position: 'absolute',
    height: '30px',
    width: '30px',
    backgroundColor: 'gray',
    borderRadius: "50%",
    display: 'flex',
    alignItems: 'center',
    bottom: "70px",
    right: '20px',

  },
  input: {
    height: '35px',
    borderWidth: '1px',
    marginBottom: "20px",
    borderRadius: '5px',
    marginLeft: '20px',
    marginRight: '20px',
    paddingLeft:'20px',
    paddingRight:'20px',
  },
  bigBox: {
    height: '250px',
    width: "90%",
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'gray',
    borderRadius: '5px',
    marginBottom: "20px",
  },
  searchbox: {
    position:'absolute',
    right:'30px',
  }
})

export default Comp2