import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'react-native';
function Home()
{
  return(
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"}}>
      <Text>Newest</Text>
    </View>
  )
}
function trending()
{
  return(
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"}}>
      <Text>Trendings</Text>
    </View>
  )
}
function newest()
{
  return(
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"}}>
      <Text>MostViewed</Text>
    </View>
  )
}

 const Tab = createMaterialTopTabNavigator();
 function MyTabs() {
    return (
      <Tab.Navigator
      screenOptions={{
        tabBarPressOpacity:'1',
        tabBarPressColor:'#748c94',
        tabBarActiveTintColor:'red',
        tabBarIndicatorStyle:{
          backgroundColor:'red'
        }
      }}
      >
        <Tab.Screen name="Newest" component={Home}
        options={
          {
            tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94", fontFamily:'SpellcasterRegular' }}>
            Newest
          </Text>)
          }
        } />
        <Tab.Screen name="Trendings" component={trending}
         options={
          {
            tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94", fontFamily:'SpellcasterRegular' }}>
            Trendings
          </Text>)
          }
        } />
        <Tab.Screen name="Most Viewed" component={newest} 
         options={
          {
            tabBarLabel:({focused}) => ( <Text style={{color:focused ? "red":"#748c94", fontFamily:'SpellcasterRegular' }}>
            Most viewed
          </Text>)
          }
        }/>    
      </Tab.Navigator>
    );
  }
  export default function TopBarNavigator(){
    return(
      
        <MyTabs/>
 
    )
  };