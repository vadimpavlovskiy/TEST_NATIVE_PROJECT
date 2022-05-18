import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Main from './src/pages/main';
import DetailsScreen from './src/pages/photo';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName='Main'>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};



export default App;
