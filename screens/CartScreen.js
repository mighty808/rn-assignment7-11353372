import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

const CartScreen = ({ navigation }) => {
    const [cartItems, setCartItems] = useState([]);
    const isFocused = useIsFocused();

    useEffect(() => {
        const loadCartItems = async () => {
            const items = await AsyncStorage.getItem('cart');
            if (items) setCartItems(JSON.parse(items));
        };
        if (isFocused) {
            loadCartItems();
        }
    }, [isFocused]);

    const removeFromCart = async (id) => {
        const updatedCart = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCart);
        await AsyncStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    return (
        <View>
            <View style={{ margin: 20, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../assets/Logo.png')} />
            </View>
            <Text style={[styles.underline, { fontSize: 24, textAlign: 'center', marginVertical: 10, fontWeight: 'bold' }]}>CHECKOUT</Text>

            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ margin: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flex: 1 }}>
                            <Image source={item.image} style={{ width: 110, height: 150 }} />
                        </View>
                        <View style={{ flex: 2, marginLeft: 10 }}>
                            <Text>{item.name}</Text>
                            <Text>{item.kind}</Text>
                            <Text style={{ color: "red", fontSize: 18 }}>{item.price}</Text>
                            <TouchableOpacity onPress={() => removeFromCart(item.id)} style={{ alignSelf: 'flex-end' }}>
                                <Image source={require('../assets/remove.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 10 }}>
                <Text style={{ fontSize: 24 }}>EST. TOTAL</Text>
                <Text style={{ fontSize: 24, color: "red" }}>$360</Text>
            </View>
            <View style={{ backgroundColor: 'black', padding: 15, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Ionicons name="bag" size={24} color="white" />
                    <Text style={{ color: 'white', fontSize: 18, marginLeft: 10 }}>CHECKOUT</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    underline: {
        textDecorationLine: 'underline',
    },
});

export default CartScreen;
