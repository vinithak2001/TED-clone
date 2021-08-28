import * as React from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { Searchbar } from 'react-native-paper';
import { Text, View, ScrollView, Image,TouchableOpacity, StyleSheet } from 'react-native';
const MyComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView
    showsVerticalScrollIndicator ={false}
    showsHorizontalScrollIndicator={false}
      style={{ backgroundColor: 'white', borderRadius: 30 }}
    >
      <Searchbar
        placeholder="Search TED talks"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{
          padding: 2,
          borderColor: '#000',
          margin: 13,
          borderRadius: 13
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 3,
          padding: 9
        }}>
        <Text style={{ fontSize: 21, color: 'black', fontFamily: 'SpellcasterRegular', letterSpacing:0 }} >Topics</Text>
        <Text style={{ fontSize: 20, color: 'red', fontFamily: 'SpellcasterRegular' }}>
          See all
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View>
          <Image source={require('../assets/images/brain.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2 }} > Psychology</Text>
        </View>

        <View>
          <Image source={require('../assets/images/handheart.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Social change</Text>
        </View>
        <View>
          <Image source={require('../assets/images/heart.jpg')}
            style={{ width: 120, height: 130, margin: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2 }}>Health</Text>
        </View>
        <View>
          <Image source={require('../assets/images/cup.jpg')}
            style={{ width: 120, height: 130, margin: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2  }}>Personal growth</Text>
        </View>
        <View>
          <Image source={require('../assets/images/ic.jpg')}
            style={{ width: 120, height: 130, margin: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>Technology</Text>
        </View>

        <View>
          <Image source={require('../assets/images/tv.jpg')}
            style={{ width: 120, height: 130, margin: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>Bussiness</Text>
        </View>
        <View>
          <Image source={require('../assets/images/book.jpg')}
            style={{ width: 120, height: 130, margin: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>Education</Text>
        </View>
        <View>
          <Image source={require('../assets/images/react.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Science</Text>
        </View>
        <View>
          <Image source={require('../assets/images/combus.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Design</Text>
        </View>
        <View>
          <Image source={require('../assets/images/glob.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Politics</Text>
        </View>
        <View>
          <Image source={require('../assets/images/paint.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Art</Text>
        </View>
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          margin: 3,
          padding: 9
        }}>
        <Text style={{ fontSize: 21, color: 'black', fontFamily: 'SpellcasterRegular' }} >Playlist</Text>
        <Text style={{ fontSize: 20, color: 'red', fontFamily: 'SpellcasterRegular' }}>
          See all
        </Text>
      </View >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View
        style={{
           color: 'black',
            fontFamily: 'SpellcasterRegular',
            justifyContent:'center',   
            borderColor:'black',
            margin:2,
            padding:2
        }}>
          <Image source={require('../assets/images/coding.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text
             style={{ fontSize: 18, color: 'black', fontFamily: 'SpellcasterRegular' }}  >
            Harnessing the future of data </Text>
        </View>

        <View  style={{
            color: 'black',
            fontFamily: 'SpellcasterRegular',
            justifyContent:'center',
            borderColor:'black',
            padding:2
        }}>
          <Image source={require('../assets/images/books.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 18, color: 'black', fontFamily: 'SpellcasterRegular' }} >Why do we tell stories</Text>
        </View>
        <View  style={{
           color: 'black',
           fontFamily: 'SpellcasterRegular',
           justifyContent:'center',
           borderColor:'black',
           padding:2
           
        }}>
          <Image source={require('../assets/images/icecream.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>A simple guide to forming {'\n'}healthy habits</Text>
        </View>
        <View  style={{
          color: 'black',
          fontFamily: 'SpellcasterRegular',
          justifyContent:'center',
          borderColor:'black',
          padding:2
           
        }}>
          <Image source={require('../assets/images/women.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>How to run a company like a{'\n'} visionary</Text>
        </View>
        <View  style={{
         color: 'black',
         fontFamily: 'SpellcasterRegular',
         justifyContent:'center',
        
         borderColor:'black',
         padding:2
        }}>
          <Image source={require('../assets/images/ppl.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>A playbook for finding the{'\n'}ideal employee</Text>
        </View>

        <View  style={{
         color: 'black',
         fontFamily: 'SpellcasterRegular',
         justifyContent:'center',
         borderColor:'black',
         padding:2
        }}>
          <Image source={require('../assets/images/srk.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>8 TED talks selected by Shah{'\n'}Rukh khan</Text>
        </View>
        <View  style={{
          color: 'black',
          fontFamily: 'SpellcasterRegular',
          justifyContent:'center',
          borderColor:'black',
          padding:2
        }}>
          <Image source={require('../assets/images/discuss.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>How to innovate for{'\n'}collaboration and sucess</Text>
        </View>
        <View  style={{
          color: 'black',
          fontFamily: 'SpellcasterRegular',
          justifyContent:'center',

          borderColor:'black',
          padding:2
        }}>
          <Image source={require('../assets/images/flyjoy.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >How to love work again</Text>
        </View>
        <View  style={{
         color: 'black',
         fontFamily: 'SpellcasterRegular',
         justifyContent:'center',
         borderColor:'black',
         padding:2
        }}>
          <Image source={require('../assets/images/count.jpg')}
            style={{ width: 190, height: 190, margin: 3, marginLeft: 3 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Countdown Session 1:{'\n'}Urgency</Text>
        </View>
       
    
      </ScrollView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 9,
          marginTop:20
        }}>
        <Text style={{ fontSize: 25, color: 'black', fontFamily: 'SpellcasterRegular' }} >Speakers</Text>
        <Text style={{ fontSize: 20, color: 'red', fontFamily: 'SpellcasterRegular' }}>
          See all
        </Text>
      </View >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
        <View alignItems='center'>
          <Image source={require('../assets/images/srk1.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3, borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2 }} > Shah Rukh Khan</Text>
        </View>

        <View alignItems='center'>
          <Image source={require('../assets/images/bill.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 ,borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Bill Gates</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/kelly.jpg')}
            style={{ width: 120, height: 130, margin: 3 ,borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2 }}>Kelly McGonigal</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/adam.jpg')}
            style={{ width: 120, height: 130, margin: 3 ,borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular', marginLeft:2  }}>Adam Grant</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Yuval.jpg')}
            style={{ width: 120, height: 130, margin: 3, borderRadius:100  }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>Yuval Noah Harari</Text>
        </View>

        <View alignItems='center'>
          <Image source={require('../assets/images/hans.jpg')}
            style={{ width: 120, height: 130, margin: 3,borderRadius:100   }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }}>Hans Rosling</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Adichie.jpg')}
            style={{ width: 120, height: 130, margin: 3, borderRadius:100  }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular',justifyContent:'center' }}>Chimamanda NgoZi</Text><Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular',justifyContent:'center' }}>Adichie</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/simon.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3, borderRadius:100  }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Simon Sinek</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Brene.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Brene Brown</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/elon.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3, borderRadius:100  }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Elon Musk</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/esther.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Esther Perel</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Angela.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Angela Lee Duckworth</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Acuddy.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Amy Cuddy</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/barry.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Barry SchwartZ</Text>
        </View>
        <View alignItems='center'>
          <Image source={require('../assets/images/Sir.jpg')}
            style={{ width: 120, height: 130, margin: 3, marginLeft: 3 , borderRadius:100 }} />
          <Text style={{ fontSize: 15, color: 'black', fontFamily: 'SpellcasterRegular' }} >Sir Ken Robinson</Text>
        </View>
      </ScrollView>
      <View
      style={{
        marginLeft:0,
        marginTop:25
      }}
      >
        <Text style={{ fontSize: 22, color: 'black', fontFamily: 'SpellcasterRegular',marginLeft:0 }} > Languages </Text>
        
      </View >
      <View alignItems='center'  justifyContent='center' marginTop={12}>
      <Text style={{ fontSize: 17, color: 'black', fontFamily: 'SpellcasterRegular',alignItems:'center',justifyContent:'center' , padding:4 }}>
          TED Talks are translated into over</Text><Text style={{fontSize:17, color: 'black', fontFamily: 'SpellcasterRegular',alignItems:'center',justifyContent:'center' ,marginTop:0 }}>110 subtitle languages!</Text>
        <View margin={20} marginBotton={22} backgroundColor='red' padding={14}  borderRadius={25}  >
          <Text style={{ color:'white', fontFamily:'SpellcasterRegular', fontSize:15 , elevation:5 }} >
            ALL LANGUAGES
          </Text>
        </View>
      </View>
    </ScrollView>

  );
};

export default MyComponent;