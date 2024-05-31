import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const Stack = createNativeStackNavigator();
const Splash = ({navigation}) => {
  const introSider =[
    {
      key:1,
      title:'Luxury ',
      title2:'Fashion',
      title3:' & Accessories',
      button:'Explore Collection',
      image:require('../assets/images/ImageSlider5.png'),
      color:'#66676a'


    },
    {
      key:2,
      title:'Best ',
      title2:'Articles ',
      title3:' That Can',
      button:'Help You',
      image:require('../assets/images/ImageSlider5.png'),
      backgroundColor:'black',
      color:'#66676a'

    },
    {
      key:3,
      title:'We Welcome ',
      title2:'You To',
      title3:' E Commerce Shop',
      button:'Explore Collection',
      backgroundColor:'skyblue',
      image:require('../assets/images/ImageSlider5.png'),
      color:'#66676a'
      // image:require('./src/images/ImageSlider3.png'),

    },
  ] 
  return (
    <AppIntroSlider onDone={() => { navigation.navigate('Login') } } data={introSider} renderItem={({ item, index }) => {
        return (
          <View style={{
            flex: 1,
            backgroundColor: item.backgroundColor
          }}>
            <ImageBackground source={item.image} style={{
              flex: 1,
              justifyContent: 'center'
            }}>
              <View style={{
                height: '80%', justifyContent: 'flex-end'
              }}>
                <View style={{
                  height: "45%",
                  justifyContent: 'flex-end',
                }}>
                  <Text style={{
                    color: item.color,
                    fontSize: 45,
                    fontFamily: 'BodoniModa_28pt-BoldItalic',
                    textAlign: 'left',
                    marginLeft: 30,
                  }}>
                    {item.title}
  
                  </Text>
                  <Text style={{
                    color: item.color,
                    fontSize: 45,
                    fontFamily: 'BodoniModa_28pt-BoldItalic',
                    textAlign: 'left',
                    marginLeft: 30,
                  }}>
                    {item.title2}
                  </Text>
                  <Text style={{
                    color: item.color,
                    fontSize: 45,
                    fontFamily: 'BodoniModa_28pt-BoldItalic',
                    textAlign: 'left',
                    marginLeft: 12,
                  }}>
                    {item.title3}
                  </Text>
                </View>
                <View style={{
                  height: '40%',
                  justifyContent: 'flex-end'
                }}>
                  <TouchableOpacity style={{
                    width: '70%',
                    alignSelf: "center",
                    borderWidth: 2,
                    borderColor: '#66676a',
                    borderRadius: 450,
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    backgroundColor: '#66676a',
                  }}>
                    <Text style={{
                      color: "white",
                      fontSize: 20,
                      fontFamily: 'TenorSans-Regular',
                      textAlign: 'center'
                    }}>
                      {item.button}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
  
            </ImageBackground>
          </View>
        )
      } } />
  )
}

export default Splash

const styles = StyleSheet.create({})