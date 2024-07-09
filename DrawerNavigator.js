import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './screens/HomeScreen'; 
import CartScreen from './screens/CartScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cart" component={CartScreen} />
        <Drawer.Screen name="Locations" component={CartScreen} />
        <Drawer.Screen name="Blog" component={CartScreen} />
        <Drawer.Screen name="Jewelery" component={CartScreen} />
        <Drawer.Screen name="Electronic" component={CartScreen} />
        <Drawer.Screen name="Clothing" component={CartScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
