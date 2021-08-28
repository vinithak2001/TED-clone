import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'; 

import Home from './Topbar/Hometop';

import { View, Text, TouchableOpacity } from 'react-native';

const Stack = createStackNavigator();

 const App =()=>{
   return(
     
     <Stack.Navigator>
      <Stack.Screen name="Ted" component={Home} options={{
        headerTitle:()=>(
          <View style={{ flexDirection:'row' }} >
            <Text style={{ fontSize:22,margin:3 , color: 'red',fontFamily:'IntegralCF-ExtraBold' }} >
              TED
            </Text>
            <Text style={{ fontSize:21, color: 'red',fontFamily:'SpellcasterRegular', padding:6 }} >
               Talks
            </Text>
          </View>
        ),
        headerRight:()=>(
          <TouchableOpacity  >
            <View padding={16} >
            <SimpleLineIcons name={'options-vertical'} size={19} color={'#748c94'} />
          </View>
          </TouchableOpacity>
          
        ),
      }} />
    </Stack.Navigator>
    
   )
 }
 export default App;