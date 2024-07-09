import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products: ", error);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToCart = async (item) => {
    try {
      console.log("Adding to cart:", item);
      const cart = await AsyncStorage.getItem('cart');
      console.log("Current cart:", cart);
      let cartItems = cart ? JSON.parse(cart) : [];
      cartItems.push(item);
      await AsyncStorage.setItem('cart', JSON.stringify(cartItems));
      console.log("Updated cart:", cartItems);
      navigation.navigate('Cart');
    } catch (error) {
      console.error("Error adding to cart: ", error);
    }
  };

  const goToDetails = (item) => {
    navigation.navigate('ProductDetail', { item });
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <TouchableOpacity style={styles.imageContainer} onPress={() => goToDetails(item)}>
              <Image style={styles.productImage} source={{ uri: item.image }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.plusButton} onPress={() => addToCart(item)}>
              <Image style={styles.plusIcon} source={require('../assets/plus.png')} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.title}</Text>
            <Text style={styles.kind}>{item.category}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    padding: 10,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  plusButton: {
    position: 'absolute',
    top: 125,
    right: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
  },
  kind: {
    fontSize: 13,
    color: 'gray',
  },
  price: {
    fontSize: 18,
    color: 'red',
  },
});
