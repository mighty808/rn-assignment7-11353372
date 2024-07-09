import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const ProductDetailScreen = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

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

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
        <Text style={styles.name}>{item.title}</Text>
        <Text style={styles.desc}>Recycle Boucle Knit Cardigan Pink</Text>
        <Text style={styles.price}>${item.price}</Text>

        <Text style={styles.material}>MATERIALS</Text>
        <Text style={styles.kind}>We work with monitoring programmes to ensure compliance with safety, health and quality standards for our products.</Text>

        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image source={require('../assets/Do Not Bleach.png')} />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>Do not use bleach</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image source={require('../assets/Do Not Tumble Dry.png')} />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>Do not tumble dry</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Image source={require('../assets/Do Not Wash.png')} />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>Dry clean with tetrachloroethylene</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 50 }}>
            <Image source={require('../assets/Iron Low Temperature.png')} />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>Iron at a maximum of 110ºC/230ºF</Text>
          </View>

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={require('../assets/Shipping.png')} />
            <Text style={{ marginLeft: 20, fontSize: 20 }}>Free Flat Rate Shipping</Text>
          </View>

          <View style={{ marginBottom: 100, marginLeft: 45 }}>
            <Text style={{ fontSize: 18, color: '#808080' }}>Estimated to be delivered on</Text>
            <Text style={{ fontSize: 18, color: '#808080' }}>09/11/2021 - 12/11/2021.</Text>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.addToBasketContainer} onPress={() => addToCart(item)}>
        <Image style={styles.whiteIcon} source={require('../assets/Plus2 (1).png')} />
        <Text style={{ color: 'white', fontSize: 18 }}>Add to basket</Text>
        <Image style={styles.whiteIcon} source={require('../assets/Plus2 (2).png')} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
  },
  desc: {
    color: '#808080',
    fontSize: 17,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
    textAlign: 'left',
  },
  kind: {
    fontSize: 18,
    color: 'gray',
    marginVertical: 5,
  },
  price: {
    fontSize: 24,
    color: 'red',
    marginVertical: 5,
  },
  material: {
    marginTop: 25,
    fontWeight: 'bold',
    fontSize: 22,
  },
  icon: {
    tintColor: 'white',
  },
  whiteIcon: {
    tintColor: 'white',
    width: 24,
    height: 24,
  },
  addToBasketContainer: {
    backgroundColor: 'black',
    height: 50,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});

export default ProductDetailScreen;
