import {
    FlatList,
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { DotIndicator } from 'react-native-indicators';
import LinearGradient from 'react-native-linear-gradient';
import { regularFont, secondaryColor } from '../utils/Styles';
import Entypo from 'react-native-vector-icons/Entypo';
import { useSelector, useDispatch } from 'react-redux'
const Home = ({ navigation }) => {
    useEffect(() => {
        data();
        categoriesData();
    }, []);
  const count = useSelector((state) => state.cart.value)
    const [categories, setCategories] = useState([]);
    const [loader, setLoader] = useState(true);
    const [products, setProducts] = useState([]);
    const data = async () => {
        const fetchData = await fetch('https://fakestoreapi.com/products');
        const json = await fetchData.json();
        console.log('🚀 ~ data ~ json:', json);
        setProducts(json);
        setLoader(false);
    };
    const categoriesData = async () => {
        const fetchCategories = await fetch(
            'https://fakestoreapi.com/products/categories',
        );
        const jsonCategories = await fetchCategories.json();
        setCategories(jsonCategories);
    };
    const showCategory = async categoryName => {
        const newCategory = await fetch(
            `https://fakestoreapi.com/products/category/${categoryName}`,
        );
        const jsonNew = await newCategory.json();
        console.log('🚀 ~ showCategory ~ jsonNew:', jsonNew);
        setProducts(jsonNew);
    };
    return (
        <View style={{ flex: 1 }}>
            {loader ? (
                <View style={styles.loaderContainer}>
                    <LinearGradient
                        colors={['#777764', '#ebebde']}
                        style={styles.loaderGradient}>
                        <DotIndicator color={'#4f4747'} />
                    </LinearGradient>
                </View>
            ) : (
                <View style={{ flex: 1 }}>
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Open Fashion</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <TouchableOpacity onPress={data}>
                            <Text style={styles.categoryText}>All</Text>
                        </TouchableOpacity>
                        <FlatList
                            data={categories}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => (
                                <TouchableOpacity onPress={() => showCategory(item)}>
                                    <Text style={styles.categoryText}>{item.toUpperCase()}</Text>
                                </TouchableOpacity>
                            )}
                            keyExtractor={item => item}
                        />
                    </View>
                    <FlatList
                        data={products}
                        numColumns={2}
                        renderItem={({ item }) => (
                            <View style={styles.FlatListView}>
                                <TouchableOpacity onPress={() => navigation.navigate('Details', { id: item.id})}>
                                    <View style={styles.ProductView}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={{height:150,width:150}}
                                            resizeMode='contain'
                                        />
                                        <Text style={styles.productTitle}>{item.title}</Text>
                                        <Text style={styles.priceText}>${item.price}</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )}
                        keyExtractor={item => item.id.toString()}
                    />
                    <View>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                            <Text style={styles.addNewText}>Show Cart : items :{count}</Text>
                            <Entypo
                                name={'shopping-cart'}
                                size={40}
                                color={secondaryColor}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    loaderContainer: {
        justifyContent: 'center',
        height: '100%',
    },
    loaderGradient: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        marginVertical: 20,
        alignItems: 'center',
    },
    headerText: {
        color: 'black',
        fontFamily: 'Outfit-Bold',
        fontSize: 25,
    },
    categoryText: {
        color: 'black',
        fontFamily: 'Outfit-Medium',
        fontSize: 20,
        margin: 10,
    },
    FlatListView: {
        flex: 1,
        margin: 5,
        padding: 10,
        backgroundColor: 'white',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.5, 
        shadowRadius: 3.9, 
        elevation: 12, 
    },
    ProductView: {
        alignItems: 'center',
    },
    IconView: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        flex: 1,
        width: '100%',
    },
    IconTO: {
        alignSelf: 'center',
        margin: 5,
    },
    productTitle: {
        color: secondaryColor,
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 8,
        fontFamily: 'Outfit-Medium',
    },
    productDescription: {
        color: 'black',
        textAlign: 'left',
        margin: 4,
        fontSize: 14,
        fontFamily: regularFont,
    },
    addNewText: {
        color: 'black',
        fontFamily: 'Outfit-Bold',
        fontSize: 22,
        textAlign: 'center',
        margin: 20,
    },
    priceText: {
        color: 'maroon',
        fontSize: 22,
        fontFamily: regularFont,
        textAlign: 'center',
        marginVertical: 8,
    },
});
export default Home;
