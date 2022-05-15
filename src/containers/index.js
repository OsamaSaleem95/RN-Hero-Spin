import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home'


function MainStack() {

  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}

export default App;
