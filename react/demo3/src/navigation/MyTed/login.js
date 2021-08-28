import React, { useState }  from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert,Modal } from 'react-native';
import { Hoshi } from 'react-native-textinput-effects';
import { color } from 'react-native-elements/dist/helpers';

const Stack = createStackNavigator();

const App = ({navigation}) => {
    const showConfirmpop = ()=>{
        Alert.alert(
            "Reset password",
            "you will be taken to ted.com to reset your password.",
            [
                {
                    text:'cancel'
                },
                {
                    text:'GO TO TED.COM', onPress:()=>navigation.navigate('login2'),
                }
            ]
        );
     };
     
     
  
    return (
        <View backgroundColor='white' flex={1} >
            <View style={style.Scontainer}>
                <View backgroundColor='blue' padding={7} >
                    <Entypo name={'facebook'} size={30} color='white' />
                </View>
                <View>
                <Text style={style.TextStyle} >Log in with Facebook</Text>
                </View>
            </View>
            <View style={style.Scontainer}>
                <View backgroundColor='blue' padding={7} >
                    <Entypo name={'google-'} size={30} color='white' />
                </View>
                <View  >
                <Text style={style.TextStyle} >  Log in with Google  </Text>
                </View>
                
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', margin:14 }} >
                <View style={{ flex: 1, height: 1, backgroundColor: '#748c94' }} />
                <View margin={10} >
                    <Text>OR</Text>
                </View>
                <View style={{ flex: 1, height: 1, backgroundColor: '#748c94' }} />
            </View>
            <View style={{ margin:15 ,marginTop:0 }} >
              <Hoshi
              label="Email" 
          
              />
               <Hoshi
              label="Password" 
      
            
              />
            </View>
           
            <View style={style.button} >
                <TouchableOpacity onPress={() => { navigation.navigate('login2') }}  >
                    <Text style={{ color:'white', fontSize:19, padding:6 }} > LOG IN</Text>
                    </TouchableOpacity>
                
            </View>
            <View margin={11} >
                <TouchableOpacity onPress={() => showConfirmpop()}>
                <Text style={ style.impText } >
                    Forgot password?
                </Text>
                </TouchableOpacity>
               
                <View flexDirection='row' >
                <Text style={ {color:'#777'} } >
                    Don't have an account ?
                </Text>
                <TouchableOpacity onPress={() => { navigation.navigate('login2') }} >
                <Text style={ style.impText } >
                  {'\t'}Sign Up
                </Text>
               </TouchableOpacity>
               
                </View>
            </View>
        </View>
    )
}

const log = ({navigation}) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="log" component={App} options={{
                headerTitle: () => (
                    <View style={{ flexDirection: 'row' }} >
                        <Text style={style.header} >
                            Log in
                        </Text>
                    </View>
                ),
                headerStyle: {
                    backgroundColor: '#e62b24'
                },
                headerTintColor: 'white',
                headerLeft: () =>
                (
                    <TouchableOpacity onPress={() => { navigation.navigate('MyTedhome') }} >
                        <View margin={5} >
                            <Entypo name={'cross'} color='white' size={25} />
                        </View>
                    </TouchableOpacity>

                )
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
            justifyContent: 'center',
            marginStart: 75,
            marginEnd: 75
        },
        TextStyle: {
            fontSize: 17,
            padding: 11,
            backgroundColor:'#eeeeee',
            flex: 1,
            fontWeight: 'bold',
            alignItems:'center'
        
        },
        header: {
            fontSize: 20,
            color: 'white',
            fontFamily: 'SpellcasterRegular'
        },
        TextInput:{
            height: 40,
            borderBottomColor:'#748c94',
            borderBottomWidth:1,
            margin:18,
        },
        button:{
            backgroundColor:'#e62b24',
            alignItems:'center',
            margin:18
        },
        impText:{
            color:'red',
            fontSize:14
        }
    }
)