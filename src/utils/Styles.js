import { StyleSheet } from "react-native"
const primaryColor = '#ebebde'
const secondaryColor = '#777764'
const secondary = 'white'
const black = 'black'
const charcoal ='#36454F'
const regularFont = 'Outfit-Medium'
const Styles = StyleSheet.create({
        viewOne:{
            backgroundColor: primaryColor,
            borderRadius: 500,
            height: 200,
            width: 200,
            position: 'absolute',
            top: -100,
            left: -100,
            opacity: 0.5
        },
       viewTwo: {
            backgroundColor: primaryColor,
            borderRadius: 500,
            height: 200,
            width: 200,
            position: 'absolute',
            top: -130,
            left: -30,
            opacity: 0.5
        },
        mainImage:{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 0.9,
            justifyContent:'center',
            alignItems:'center',
            position:'relative',
            top:40,
            marginTop:20
        },
        mainTitle:{
            fontSize: 25,
            fontFamily: 'Outfit-Medium',
            color: 'black',
            textAlign: 'center', 
        },
        subTitle:{
            fontSize:14,
            fontFamily:'Poppins-Medium',
            color:'black',
            textAlign:'center',
        },
        purpose:{
            fontFamily:'Poppins-Medium',
            fontSize:14,
            textAlign:'center',
            color:primaryColor
        }
     })
export { primaryColor, secondary, regularFont, black ,Styles,secondaryColor,charcoal }