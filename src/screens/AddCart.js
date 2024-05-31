import React, { useEffect, useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DotIndicator } from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../Redux/cartSlice'

const AddCart = ({ navigation, route }) => {
  const { itemId } = route.params;
  const [loader, setLoader] = useState(true);
  const [newCart, setNewCart] = useState({});
  const [cartData, setCartData] = useState([]);
  const [totalData, setTotal] = useState('');
  const [mainQuantity, setMainQuantity] = useState(1);
  const count = useSelector((state) => state.cart.value)
  const price = useSelector((state) => state.cart.price)
  const dispatch = useDispatch()
  const updateValues = ()=>{
    dispatch(increment())
    dispatch(incrementByAmount(newCart.price))
  }
  const decrementValues =()=>{
   if (count<=0) {
    Alert.alert('Quantity Cannot be Less than Zero')
   }
   else{
    dispatch(decrement())
    dispatch(incrementByAmount(newCart.price))
   }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const cartResponse = await fetch(`https://fakestoreapi.com/carts/${itemId}`);
        const cartData = await cartResponse.json();

        const productResponse = await fetch(`https://fakestoreapi.com/products/${cartData.id}`);
        const productData = await productResponse.json();

        setLoader(false);
        setNewCart(productData);
        setCartData(cartData);

        const total = productData.price * mainQuantity;
        setTotal(total.toFixed(2));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [itemId, mainQuantity]);
   

  if (loader) {
    return (
      <View style={styles.loaderContainer}>
        <LinearGradient colors={['#777764', '#ebebde']} style={styles.gradient}>
          <DotIndicator color="#4f4747" />
        </LinearGradient>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: newCart.image }} style={styles.image} />
        <View style={styles.info}>
          <Text style={styles.title}>{newCart.title}</Text>
          <Text style={styles.price}>${newCart.price}</Text>
          <Text style={styles.total}>Total: ${price}</Text>
          <Text style={styles.quantity}>Quantity: {count}</Text>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={updateValues}>
          <AntDesign name="pluscircle" size={30} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={decrementValues}>
          <AntDesign name="minuscircle" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddCart;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  image: {
    width: 120,
    height: 140,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
  },
  price: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginTop: 20,
  },
  total: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginTop: 20,
  },
  quantity: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Outfit-Medium',
    textAlign: 'center',
    marginTop: 20,
  },
  controls: {
    flexDirection: 'row',
  },
});
