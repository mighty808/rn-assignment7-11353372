import { FlatList, Image, StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

export default function Products() {
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={wear}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <View style={styles.imageContainer}>
              <Image style={styles.productImage} source={item.image} />
              <TouchableOpacity style={styles.plusButton} onPress={() => addToCart(item)}>
                <Image style={styles.plusIcon} source={require('../assets/plus.png')} />
              </TouchableOpacity>
            </View>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.kind}>{item.kind}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

const wear = [
  { id: 1, image: require('../assets/dress1.png'), name: 'Office Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 2, image: require('../assets/dress2.png'), name: 'Black Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 3, image: require('../assets/dress3.png'), name: 'Church Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 4, image: require('../assets/dress4.png'), name: 'Lamerei Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 5, image: require('../assets/dress5.png'), name: '21WN Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 6, image: require('../assets/dress6.png'), name: 'Lopo Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 7, image: require('../assets/dress7.png'), name: '21WNT Wear', kind: 'reversible angora cardigan', price: '$120' },
  { id: 8, image: require('../assets/dress1.png'), name: 'Lame Wear', kind: 'reversible angora cardigan', price: '$120' },
];

const styles = StyleSheet.create({
  container: {
    flex: 5,
    backgroundColor: '#fff',
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
    position: 'relative',
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
    top: 10,
    right: 10,
  },
  plusIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 18,
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
