import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import { DotIndicator } from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import { black, charcoal, regularFont, secondaryColor } from '../utils/Styles';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../Redux/cartSlice';
import { useGetDataQuery } from '../Redux/services/GetApiCall';

const ProductDetails = ({ navigation, route }) => {
  const { id } = route.params;
  const count = useSelector((state) => state.cart.value);
  const dispatch = useDispatch();
  const { data, isFetching } = useGetDataQuery(id);

  const newValue = () => {
    dispatch(increment());
    navigation.navigate('Cart', { itemId: id });
  };

  if (isFetching) {
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
      <View style={styles.header}>
        <Text style={styles.headerText}>Open Fashion</Text>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={25} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: data.image }} style={styles.productImage} />
        </View>
        <View style={styles.detailsContainer}>
          <Text style={styles.productTitle}>{data.title}</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.priceLabel}>Price: </Text>
            <Text style={styles.priceValue}>{data.price}$</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionLabel}>Description:</Text>
            <Text style={styles.descriptionText}>{data.description}</Text>
          </View>
        </View>
      </View>
      <View style={{ width: '40%', alignSelf: 'center', alignItems: 'center' }}>
        <TouchableOpacity
          style={{ flexDirection: 'row', padding: 10, backgroundColor: secondaryColor, borderRadius: 10 }}
          onPress={newValue}
        >
          <Text style={{ color: 'white', fontSize: 16, fontFamily: regularFont, marginHorizontal: 5 }}>
            Add To Cart
          </Text>
          <Entypo name="shopping-cart" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    height: '100%',
  },
  gradient: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    color: 'black',
    fontFamily: 'Outfit-Bold',
    fontSize: 26,
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    left: 20,
    top: 25,
  },
  content: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 6,
    marginBottom: 20,
    borderRadius: 10,
  },
  imageContainer: {
    alignSelf: 'center',
    marginVertical: 20,
    borderColor: 'black',
    padding: 32,
  },
  productImage: {
    width: 135,
    height: 170,
    alignSelf: 'center',
  },
  productTitle: {
    fontFamily: 'Outfit-Bold',
    fontWeight: '500',
    color: secondaryColor,
    fontSize: 18,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  priceContainer: {
    width: '60%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 16,
    textAlign: 'center',
    color: 'maroon',
    fontFamily: regularFont,
  },
  priceValue: {
    color: 'maroon',
    fontSize: 24,
    textAlign: 'center',
    fontFamily: regularFont,
  },
  descriptionContainer: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: 10,
    marginBottom: 20,
  },
  descriptionLabel: {
    color: charcoal,
    fontSize: 22,
    fontFamily: 'Outfit-Bold',
    textAlign: 'left',
  },
  descriptionText: {
    color: charcoal,
    fontSize: 14,
    marginHorizontal: 2,
    fontFamily: 'Outfit-Medium',
  },
});

export default ProductDetails;
