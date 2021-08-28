import React from 'react'
import { Text, View,style,Image } from 'react-native';
import {Icon} from 'react-native-elements';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import home from './Talkstack'
import MyTed from './MyTedStack'
import discovery from './discoverystack'
import podcast from './podcastStack'


const Tab = createBottomTabNavigator();

const  Tabs =()=> {
  return (
   
    <Tab.Navigator
        screenOptions={{
        headerShown:false
    }}
    >
      <Tab.Screen name="Talks" component={home} options={{

        tabBarIcon:( {focused} )=>(
          
            <Image source={require('../assets/icons/homeicon.png')} style={{ 
              width:25,
              height:60,
              tintColor:focused ? 'red' : '#748c94'
             }}  />
         
        ),
        tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94", fontFamily:'SpellcasterRegular' }}>
          Talks
        </Text>)
      }} />
      <Tab.Screen name="discovery" component={discovery} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Icon name={'search'} color={ focused ? 'red' : '#748c94'} size={25} />
          </View>
        ),
        tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94",fontFamily:'SpellcasterRegular' }}>
          Discovery
        </Text>)
      }} />
      <Tab.Screen name="podcast" component={podcast} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Icon name={'headset'} size={25} color={ focused ? 'red' : '#748c94'}/>
          </View>
        ),
        tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94",fontFamily:'SpellcasterRegular' }}>
          Podcasts
        </Text>)
      }} />
      <Tab.Screen name="MyTed" component={MyTed} options={{
        tabBarIcon:({focused})=>(
          <View>
            <Icon name={'person'} size={25} color={ focused ? 'red' : '#748c94'} />
          </View>
        ),
        tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94", fontFamily:'SpellcasterRegular' }}>
          My TED
        </Text>)
      }} />
    </Tab.Navigator>
   );
}
export default Tabs;
