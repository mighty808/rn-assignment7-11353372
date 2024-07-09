import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Products from '../components/Products';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header />
      <Products />
    </View>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});