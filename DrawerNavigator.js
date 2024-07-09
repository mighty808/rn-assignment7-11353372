import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; 
import CartScreen from './screens/CartScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ title: "Product Details" }} />
  </Stack.Navigator>
);

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="HomeDrawer">
        <Drawer.Screen name="HomeDrawer" component={HomeStack} options={{ headerShown: false, title: 'Home' }} />
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
