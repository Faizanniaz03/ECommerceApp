import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
// import ResetMedics from './ResetMedics'
// import SignUpMedics from './SignUpMedics'



const Login = ({navigation}) => {
  const [secure, showSecure] = useState(true)
  const toggle = () => {
    showSecure(!secure)
  }
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const Login = ()=>{
    if (!email.includes('@gmail.com')) {
      Alert.alert('Email is invalid')
    }
    else if(password.length<8){
      Alert.alert('Password cant be less than 8')
    }
    else(navigation.navigate('Home'))
  }
   return (
    <View style={{
      flex: 1
    }}>
      <View style={{
        height:'8%',
        justifyContent: 'flex-end',

      }}>
        <View>
          <Text style={{
            fontSize: 20,
            color: 'black',
            fontFamily: 'Poppins-Medium',
            textAlign: 'center',
            alignItems: 'center'
          }}>

            Login
          </Text>
        </View>
        <View style={{
          position: "absolute",
          left: 20,
          top: 30
        }}>
          <TouchableOpacity onPress={()=>navigation.navigate('Splash')}>
            <AntDesign name={'left'} size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{
        height:'15%',
        justifyContent: 'flex-end'
      }}>
        <View style={{
          backgroundColor: '#E8EAEE',
          borderRadius: 30,
          flexDirection: 'row',
          borderColor: 'black',
          paddingVertical: 7,
          paddingHorizontal: 30,
          marginHorizontal: 20,
          borderColor: '#B8BCC0',
          borderWidth: 1,
          marginVertical:20,
        }}>
          <View style={{
            justifyContent: 'center'
          }}>
            <AntDesign name={'mail'} size={20} />
          </View>
          <View style={{
            marginLeft: 20
          }}>
            <TextInput style={{
              fontSize: 18
            }} placeholder='Enter Your email' placeholderTextColor={'grey'}
            onChangeText={(val)=>setEmail(val)}
            value={email} />
          </View>
        </View>
      </View>
      <View style={{
        // flex: 0.11,
        height:'8%',
        justifyContent: 'flex-end'
      }}>
        <View style={{
          backgroundColor: '#E8EAEE',
          borderRadius: 30,
          flexDirection: 'row',
          borderColor: 'black',
          paddingVertical: 7,
          paddingHorizontal: 30,
          marginHorizontal: 20,
          borderColor: '#B8BCC0',
          borderWidth: 1,
          justifyContent: 'space-between'
        }}>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              justifyContent: 'center'
            }}>
              <Feather name={'lock'} size={20} />
            </View>
            <View style={{
              marginLeft: 20
            }}>
              <TextInput style={{
                fontSize: 18
              }} placeholder='Enter Password' placeholderTextColor={'grey'} secureTextEntry={secure}
              onChangeText={(val)=>setPassword(val)}
              value={password} />
            </View>
          </View>

          <View style={{
            justifyContent: 'center',
            marginLeft: 30
          }}>
            <TouchableOpacity onPress={toggle}>
              {secure ? <Feather name={'eye-off'} size={20} />
                : <Feather name={'eye'} size={20} />}
            </TouchableOpacity>

          </View>
        </View>
      </View>
      <View style={{
        marginVertical: 15
      }}>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={{
            marginRight: 20,
            color: '#777764',
            fontSize: 17,
            textAlign: 'right'
          }}>
            Forgot Password?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        marginHorizontal: 20,
        flex: 0.12,
        justifyContent: 'flex-end',
      }}>
        <TouchableOpacity style={{
          backgroundColor: '#777764',
          paddingVertical: 20,
          borderRadius: 30
        }} onPress={Login}>
          <Text style={{
            textAlign: 'center',
            fontSize: 18,
            color: 'white'
          }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.1
      }}>
        <Text style={{
          fontSize: 18,
        }}>
          Dont have an account?
        </Text>
        <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
          <Text style={{
            marginRight: 20,
            color: '#777764',
            fontSize: 17,
            textAlign: 'right',
            marginLeft: 8
          }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <View style={{
          width: 150,
          backgroundColor: 'grey',
          height: 1,
          marginLeft: 20
        }}></View>
        <Text style={{
          fontSize: 18,
          fontFamily: 'Poppins-Regular',
          textAlign: 'center'
        }}>OR</Text>
        <View style={{
          width: 150,
          backgroundColor: 'grey',
          height: 1,
          marginRight: 20
        }}></View>
      </View>
      <View style={{
        flex:0.12,
        justifyContent:'flex-end'
      }}>
        <View style={{
          borderRadius: 30,
          flexDirection: 'row',
          borderColor: 'black',
          paddingVertical: 18,
          marginHorizontal: 20,
          borderColor: '#D4D6DB',
          borderWidth: 1,
          paddingLeft: 30,

        }}>
          <View>
            <Image source={require('../assets/images/google.png')} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 40
          }}>
            <Text style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Outfit-Medium'
            }}>
              Sign in with Google
            </Text>
          </View>
        </View>
      </View>
      <View style={{
        flex:0.12,
        justifyContent:'flex-end'
      }}>
        <View style={{
          borderRadius: 30,
          flexDirection: 'row',
          borderColor: 'black',
          paddingVertical: 18,
          marginHorizontal: 20,
          borderColor: '#D4D6DB',
          borderWidth: 1,
          paddingLeft: 30,

        }}>
          <View>
            <Image source={require('../assets/images/apple.png')} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 40
          }}>
            <Text style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Outfit-Medium'
            }}>
              Sign in with Apple
            </Text>
          </View>
        </View>
      </View>
      <View style={{
        flex:0.12,
        justifyContent:'flex-end'
      }}>
        <View style={{
          borderRadius: 30,
          flexDirection: 'row',
          borderColor: 'black',
          paddingVertical: 18,
          marginHorizontal: 20,
          borderColor: '#D4D6DB',
          borderWidth: 1,
          paddingLeft: 30,

        }}>
          <View>
            <Image source={require('../assets/images/facebook.png')} />
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 40
          }}>
            <Text style={{
              color: 'black',
              fontSize: 20,
              fontFamily: 'Outfit-Medium'
            }}>
              Sign in with Facebook
            </Text>
          </View>
        </View>
      </View>
    </View>

  )
}

export default Login;

const styles = StyleSheet.create({})