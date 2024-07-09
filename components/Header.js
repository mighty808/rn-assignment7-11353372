import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Header() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <Image source={require('../assets/Menu.png')} />
        </TouchableOpacity>

        <View style={styles.centeredLogo}>
          <Image source={require('../assets/Logo.png')} />
        </View>

        <View style={styles.iconRow}>
          <Image source={require('../assets/Search.png')} />
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={require('../assets/shoppingBag.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.storyRow}>
        <Text style={styles.storyText}>OUR STORY</Text>

        <View style={styles.filterRow}>
          <Image source={require('../assets/Listview.png')} />
          <Image source={require('../assets/Filter.png')} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop: 30
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  centeredLogo: {
    alignItems: 'center',
  },
  iconRow: {
    flexDirection: 'row',
    columnGap: 10,
  },
  storyRow: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  storyText: {
    fontSize: 23,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
});
