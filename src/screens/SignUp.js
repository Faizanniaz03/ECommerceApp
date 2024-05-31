import { Button,Alert, StyleSheet, Text, TextInput, TouchableOpacity, View, ImageBackground } from 'react-native'
import React, { useState } from 'react'
import Home from './Home'
import Feather from 'react-native-vector-icons/Feather'


const SignUp = ({navigation}) => {
    const [name,setName]= useState('')
    const [password,setPassword] = useState('')
    const [email,setEmail]= useState('')
    const Login = ()=>{
        if(name == ''){
            Alert.alert('Please Enter name')
        }
        else if(!email.includes('@gmail.com')){
            Alert.alert('Email Not Valid')
        }
        else if(password.length < 8){
            Alert.alert('Password cant be less then 8')
        }
        else{
            navigation.navigate('Login')
        }}
  return (
    <View style={{
        flex:1,
    }}>
         <View style={{
                backgroundColor: '#777764',
                borderRadius: 500,
                height: 200,
                width: 200,
                position: 'absolute',
                top: -100,
                left: -100,
                opacity: 0.5
            }}></View>
            <View style={{
                backgroundColor: '#777764',
                borderRadius: 500,
                height: 200,
                width: 200,
                position: 'absolute',
                top: -160,
                left: -10,
                opacity: 0.5
            }}></View>
        <View style={{
            marginLeft:20,
            flex:0.25,
            justifyContent:'center'
        }}>
            
            <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
        <Feather name={'arrow-left-circle'} size={30} color={'black'}/>
        {/* <Text>Hello</Text> */}
        </TouchableOpacity>
    </View>
    <View style={{
        justifyContent:'flex-end',
        flex:0.4
    }}>
        <Text style={{
            fontFamily:'Poppins-Medium',
            fontSize:23,
            color:'black',
            textAlign:'center',
        }}>
        Welcome Onboard!
        </Text>
    </View>
    <View style={{
        flex:0.25,
        justifyContent:'flex-start',
        marginTop:20
    }}>
        <Text style={{
            fontFamily:'Poppins-Medium',
            fontSize:14,
            textAlign:'center',
            color:'#777764'
        }}>
            Sign Up to Get access to E Commerce Website
        </Text>
    </View>
    
        <View style={{
            flex:0.2,
            justifyContent:"center"
        }}> 
            <TextInput placeholder='Enter your Full Name ' style={{
                // borderWidth:1,
                borderRadius:10,
                backgroundColor:'white',
                marginHorizontal:15,
                paddingLeft:20,
                fontFamily:'Poppins-Medium'
            }} placeholderTextColor={'black'}
            onChangeText={(val)=>setName(val)}
            value={name}
            />
        </View>
        <View style={{
            flex:0.2,
            justifyContent:"center"
        }}> 
            <TextInput placeholder='Enter your Email address ' style={{
                // borderWidth:1,
                borderRadius:10,
                backgroundColor:'white',
                marginHorizontal:15,
                paddingLeft:20,
                fontFamily:'Poppins-Medium'
            }} placeholderTextColor={'black'}
            onChangeText={(val)=>setEmail(val)}
            value={email}
            
            
            />
        </View>
        <View style={{
            flex:0.2,
            justifyContent:"center"
        }}> 
            <TextInput placeholder='Create a Password ' style={{
                // borderWidth:1,
                borderRadius:10,
                backgroundColor:'white',
                marginHorizontal:15,
                paddingLeft:20,
                fontFamily:'Poppins-Medium'
            }} placeholderTextColor={'black'} secureTextEntry={true}
            onChangeText={(val)=>setPassword(val)}
            value={password}
            />
        </View>
        <View style={{
            flex:0.2,
            justifyContent:"center"
        }}> 
            <TextInput placeholder='Confirm Password ' style={{
                // borderWidth:1,
                borderRadius:10,
                backgroundColor:'white',
                marginHorizontal:15,
                paddingLeft:20,
                fontFamily:'Poppins-Medium'
            }} placeholderTextColor={'black'} secureTextEntry={true}/>
        </View>
        <View style={{
                flex:0.4,
                alignItems:'center',
                justifyContent:'flex-end'
}}>
                <TouchableOpacity style={{
                    borderWidth:2,
                    backgroundColor:'#777764',
                    borderColor:'#777764',
                    paddingVertical:10,
                    width:240,
                }}
                onPress={()=>navigation.navigate('Login')}
                activeOpacity={0.5}
                >
                    <Text style={{
                        fontFamily:'Poppins-Medium',
                        color:'white',
                        textAlign:'center'
                    }}>
                        Get Started
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection:'row',
                justifyContent:'center',
                alignItems:'center',
                flex:0.2
            }}>
                <Text style={{
                    fontFamily:'Poppins-Medium',
                    color:'black'
                }}>Already have an account ?</Text>
                <TouchableOpacity activeOpacity={0.4} onPress={()=>navigation.navigate('Login')}>
                    <Text style={{
                        color:'#777764',
                        fontFamily:'Poppins-Medium',
                    }}> Sign In</Text>
                </TouchableOpacity>
            </View>
    </View>
  )
}
export default SignUp

const styles = StyleSheet.create({})