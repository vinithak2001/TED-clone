import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { MenuProvider } from 'react-native-popup-menu';

import {
  Menu,
  MenuItem,
  MenuDivider,
  Position,
} from 'react-native-enhanced-popup-menu';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation}) => {
  
  return (

    <View
      style={style.Allscreen}>
        <Menu
        visible={visible}
        anchor={<Text onPress={showMenu}>Show menu</Text>}
        onRequestClose={hideMenu}
      >
        <MenuItem onPress={hideMenu}>Menu item 1</MenuItem>
        <MenuItem onPress={hideMenu}>Menu item 2</MenuItem>
        <MenuItem disabled>Disabled item</MenuItem>
        <MenuDivider />
        <MenuItem onPress={hideMenu}>Menu item 4</MenuItem>
      </Menu>
      <View style={style.Viewcontainer}>
        <View
          style={style.MainOptionIcon}>

          <Ionicons name={'person-circle'} size={51} color={'red'} />

          <View style={style.OptionText}>
            <Text style={{ fontSize: 19, color: '#333', fontFamily: 'SpellcasterRegular', marginTop: 5 }} >
              Log in to your TED account</Text>
            <Text style={{
              fontSize: 12,
              color: '#777'
            }} >
              Sync My List,Likes, and History
            </Text>
            <TouchableOpacity onPress={() => { navigation.navigate('login') }} >
              <Text style={style.TextStyle} >
                LOG IN
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('List') }} >
        <View style={style.OptionIcon}>
          <MaterialCommunityIcons name={'playlist-play'} size={22} color={'red'} />
          <View style={style.OptionText}>
            <Text style={style.OptiionSub}   >
              My List
            </Text>
            <Text style={style.miniText}>
              No talks
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('Like') }} >
        <View style={style.OptionIcon}>
          <MaterialCommunityIcons name={'heart-outline'} size={22} color={'red'} />
          <View style={style.OptionText}>
            <Text style={style.OptiionSub}   >
              Likes
            </Text>
            <Text style={style.miniText}>
              No talks
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('download') }} >
        <View style={style.OptionIcon}>
          <MaterialCommunityIcons name={'download'} size={22} color={'red'} />
          <View style={style.OptionText}>
            <Text style={style.OptiionSub}   >
              Downloads
            </Text>
            <Text style={style.miniText}>
              No talks
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => { navigation.navigate('History') }} >
        <View style={style.OptionIcon}>
          <MaterialCommunityIcons name={'history'} size={22} color={'red'} />
          <View style={style.OptionText}>
            <Text style={style.OptiionSub}   >
              History
            </Text>
            <Text style={style.miniText}>
              No talks
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>

  );
}

const App = ({ navigation }) => {
    return (

    <Stack.Navigator>
      <Stack.Screen name="MyTedhome" component={HomeScreen} options={{
        headerTitle: () => (
          <View style={{ flexDirection: 'row' }} >
            <Text style={{ fontSize: 21, color: 'red', fontFamily: 'SpellcasterRegular' }} >
              My TED
            </Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity  >
            <View padding={16} >
              <SimpleLineIcons name={'options-vertical'} size={15} color={'#748c94'} />
            </View>
          </TouchableOpacity>
        ),
      }} />
     
    </Stack.Navigator>

  )
}
export default App;



const style = StyleSheet.create({
  Textcontainer: {
    backgroundColor: '#e62b24',
    padding: 10,
    borderRadius: 25,
    right: 0,

  },
  TextStyle: {
    color: 'white',
    backgroundColor: '#e00',
    right: 0,
    bottom: 0,
    padding: 11,
    justifyContent: 'center',
    fontFamily: 'SpellcasterRegular',
    alignSelf: 'flex-end'
  },
  Allscreen: {
    flexDirection: 'column',
    backgroundColor: 'white',
    flex: 1
  },
  Viewcontainer: {
    backgroundColor: '#f0f0f0',
    height: 130,
  },
  OptionIcon: {
    color: '#e62b24',
    flexDirection: 'row',
    padding: 5,
    margin: 5,
    marginLeft: 9
  },
  OptionText: { flexDirection: 'column', flex: 1, marginLeft: 12 },
  MainOptionIcon: {
    color: '#e62b24',
    flexDirection: 'row',
    padding: 15,
    flex: 1,

  },
  OptiionSub: { fontSize: 19, color: '#333', fontFamily: 'SpellcasterRegular' },
  miniText: {
    color: '#748c94',
    fontSize: 12
  },
  header: {
    fontSize: 21,
    color: 'white',
    fontFamily: 'SpellcasterRegular'
  },
})

