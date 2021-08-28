import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Linking } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { createStackNavigator } from '@react-navigation/stack';
import { Kohana } from 'react-native-textinput-effects';
import { Hoshi } from 'react-native-textinput-effects';

const Stack = createStackNavigator();
const App = () => {
    return (
        <View  >
            <View alignItems='center' backgroundColor="white" >
                <Text style={{ fontSize: 35, color: 'red', fontFamily: 'normal', fontWeight: 'bold' }} >TED</Text>
            </View>

            <View margin={18}  >
                <View>
                    <TouchableOpacity>
                    <Text style={style.heading} >
                        Log in.
                    </Text>
                    </TouchableOpacity>
                    <View flexDirection="row" >
                        <Text style={{ fontSize: 17 }} >
                            Don't have a TED Account?
                        </Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 17,  textDecorationLine: 'underline' }} onPress={() => Linking.openURL('http://google.com')} >
                            {'\t'}Sign up
                        </Text>
                    </View>
                    <Text style={{ color: 'red', fontSize: 17, marginTop: 12, fontWeight: 'bold' }} >
                        The password you entered is incorrect.
                    </Text>
                    <View   >
                        <Hoshi
                            label="Email"

                        />
                    </View>
                    <View   >
                        <Hoshi
                            label="Password"

                        />
                    </View>
                    <TouchableOpacity  >
                    <View style={style.btncontainer}  >
                        <Text style={style.loginbtn} >Log in</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <Text style={{ fontWeight: 'bold', fontSize: 17, textDecorationLine: 'underline' }} >Need help logging in? </Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={style.loginfb}  >
                        <Entypo name="facebook" color='white' padding={12} size={23} />
                        <View flex={1} alignItems="center" >
                            <Text style={style.loginbtn} >Log in with facebook</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                    
                </View>
            </View>

        </View>

    )
}
const log = ({ navigation }) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="log2" component={App} options={{
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
        header: {
            fontSize: 20,
            color: 'white',
            fontFamily: 'SpellcasterRegular'
        },
        Scontainer: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        TextStyle: {
            fontSize: 17,
            padding: 11,
            backgroundColor: '#776',
            fontWeight: 'bold',
            alignItems: 'center',
        },
        heading: {
            fontSize: 25,
            color: 'black',
            fontFamily: 'normal',
            fontWeight: 'bold',

        },
        loginbtn: {
            fontSize: 17,
            fontWeight: 'bold',
            color: 'white',
        },
        btncontainer: {
            marginTop: 19,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#4c4c4c',
            padding: 11,
            elevation: 5
        },
        loginfb: {
            marginTop: 19,

            backgroundColor: '#2a57a3',
            padding: 11,
            elevation: 5,
            flexDirection: 'row',

        }
    }
)