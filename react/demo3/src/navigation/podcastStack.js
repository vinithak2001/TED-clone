import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import sincerely from '../navigation/podcast/sincerely';
import work from '../navigation/podcast/work';
import Daily from '../navigation/podcast/daily';
import interview from '../navigation/podcast/interview';
import radiohr from '../navigation/podcast/radiohr';
import Espanol from '../navigation/podcast/Espanol';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={{
        flexDirection: 'row'
      }} >

        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('worklife') }} underlayColor='white' >
            <Image source={require('../assets/images/1.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            WorkLife with Adam Grant{'\n'}
            Jul 27,2021
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('radiohr') }} underlayColor='white' >
            <Image source={require('../assets/images/2.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            TED Radio Hour{'\n'}
            Friday
          </Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row'
      }} >
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('daily') }} underlayColor='white' >
            <Image source={require('../assets/images/3.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            TED talks Daily{'\n'}
            Yesterday
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('Espanol') }} underlayColor='white' >
            <Image source={require('../assets/images/4.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            TED en Espanol{'\n'}
            Thursday
          </Text>
        </View>
      </View>
      <View style={{
        flexDirection: 'row'
      }} >
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('interview') }} underlayColor='white' >
            <Image source={require('../assets/images/5.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            The TED interview{'\n'}
            Jun 26,2021
          </Text>
        </View>
        <View>
          <TouchableOpacity onPress={() => { navigation.navigate('sincerely') }} underlayColor='white' >
            <Image source={require('../assets/images/6.jpg')} style={style.imagestyle} />
          </TouchableOpacity>
          <Text style={style.Textstyle}>
            Sinerely, X
            May 19,2021
          </Text>
        </View>
      </View>
    </ScrollView>

  );
}

const App = () => {
  return (

    <Stack.Navigator>
      <Stack.Screen name="Podcast" component={HomeScreen} options={{
        headerTitle: () => (
          <View style={{ flexDirection: 'row' }} >
            <Text style={style.headermain} >
              Podcasts
            </Text>
          </View>
        ),
        headerRight: () => (
          <View padding={16} >
            <SimpleLineIcons name={'options-vertical'} size={20} color={'#748c94'} />
          </View>
        ),

      }} />
      </Stack.Navigator>

  )
}
export default App;

const style = StyleSheet.create({
  imagestyle: {
    width: 200,
    height: 200,
    margin: 3
  },
  Textstyle: {
    margin: 2,
    fontSize: 20,
    color: 'black',
    fontFamily: 'SpellcasterRegular'
  },
  header: {
    fontSize: 21,
    color: 'white',
    fontFamily: 'SpellcasterRegular'
  },
  headermain: {
    fontSize: 21,
    color: '#e62b24',
    fontFamily: 'SpellcasterRegular'
  }
},


)