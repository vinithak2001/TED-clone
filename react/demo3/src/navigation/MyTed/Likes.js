import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    }}>
      <Text>like</Text>
    </View>
  )
}

const log = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="log" component={App} options={{
        headerTitle: () => (
          <View style={{ flexDirection: 'row' }} >
            <Text style={style.header} >
             Likes
            </Text>
          </View>
        ),
        headerStyle: {
          backgroundColor: '#e62b24'
        },
        headerTintColor: 'white',
        headerRight: () => (
          <View padding={16} >
            <SimpleLineIcons name={'options-vertical'} size={20} color={'white'} />
          </View>
        ),
        


      }} />
    </Stack.Navigator>

  )
}

export default log

const style = StyleSheet.create(
  {
    Scontainer: {

      flexDirection: 'row',
      marginTop: 19,
      alignItems: 'center',
      justifyContent: 'center',
      marginStart: 65,
      marginEnd: 65
    },
    TextStyle: {
      fontSize: 17,
      padding: 11,
      backgroundColor: '#4444',
      flex: 1,
      fontWeight: 'bold'
    },
    header: {
      fontSize: 21,
      color: 'white',
      fontFamily: 'SpellcasterRegular'
    },
  }
)