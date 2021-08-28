import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import home from './Talkstack';
import MyTed from './MyTedStack';
import discovery from './discoverystack';
import podcast from './podcastStack';
import bottom from './bottombar';
import list from './MyTed/MyList';
import like from './MyTed/Likes';
import history from './MyTed/History';
import download from './MyTed/Downloads';
import login from './MyTed/login';
import login2 from './MyTed/login2';
import sincerely from '../navigation/podcast/sincerely';
import work from '../navigation/podcast/work';
import Daily from '../navigation/podcast/daily';
import interview from '../navigation/podcast/interview';
import radiohr from '../navigation/podcast/radiohr';
import Espanol from '../navigation/podcast/Espanol';
import Topbar from './Topbar/Hometop';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Stack = createStackNavigator();
const MainStack = ({ navigation }) => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown:false,
        }}
        >
            <Stack.Screen name='bottombar' component={bottom} />
            
            <Stack.Screen name="List" component={list} />
            <Stack.Screen name="Like" component={like} />
            <Stack.Screen name="download" component={download} />
            <Stack.Screen name="History" component={history} />
            <Stack.Screen name="login" component={login} />
            <Stack.Screen name="login2" component={login2} />
            <Stack.Screen name="worklife" component={work} />
            <Stack.Screen name="radiohr" component={radiohr} />
            <Stack.Screen name="daily" component={Daily} />
            <Stack.Screen name="Espanol" component={Espanol} />
            <Stack.Screen name="interview" component={interview} />
            <Stack.Screen name="sincerely" component={sincerely} />
            
            <Stack.Screen name="topbar" component={Topbar} />
            
        </Stack.Navigator>

    );
};
export default MainStack;