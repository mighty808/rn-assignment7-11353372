import 'react-native-gesture-handler'; // Ensure this is at the top of the file
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import DrawerNavigator from './DrawerNavigator'; // Adjust the path as necessary

const App = () => {
  return (
    <SafeAreaProvider>
        <DrawerNavigator />
    </SafeAreaProvider> 
  );
};

export default App;
