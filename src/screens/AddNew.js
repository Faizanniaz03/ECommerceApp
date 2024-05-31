import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomTI from '../Components/CustomTI'
import CustomTO from '../Components/CustomTO'
import CustomButton from '../Components/CustomButton'

const AddNew = () => {
    
    const [title,setTitle] = useState('')
    const [des,setDes] = useState('')
    const[price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const newProduct=async ()=>{
        data =await fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: title,
                    price: price,
                    description: des,
                    category: category
                }
                    
            )
        })
        conJson = await data.json()
        console.log("🚀 ~ newProduct ~ conJson:", JSON.stringify(conJson))
        
    }
  return (
    <View style={{
        height:'100%'
    }}>
      <View>
        <View style={{
            height:'15%',
            justifyContent:'center'
        }}>
        <CustomTI title={'Add Name of New Product'} onChange={(val)=>setTitle(val)} val={title} />
        </View>
        <View style={{
            height:'15%',
            justifyContent:'center'
        }}><CustomTI title={'Add Price '} onChange={(val)=>setPrice(val)} val={price} /></View>
        <View style={{
            height:'15%',
            justifyContent:'center'
        }}><CustomTI title={'Set Description'} onChange={(val)=>setDes(val)} val={des} /></View>
        <View style={{
            height:'15%',
            justifyContent:'center'
        }}><CustomTI title={'Set '} onChange={(val)=>setCategory(val)} val={category} /></View>
        

      </View>
      <View style={{
        alignSelf:'center'
      }}>
      <CustomButton action={newProduct} title={'Add New'} />
      </View>
    </View>
  )
}

export default AddNew

const styles = StyleSheet.create({})