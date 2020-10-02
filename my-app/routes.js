import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/login';
import Home from './src/pages/home';
import Repos from './src/pages/repos';
import Followers from './src/pages/followers';
import Following from './src/pages/following';

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer >
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Repos" component={Repos} options={{ headerShown: false }} />
        <Stack.Screen name="Followers" component={Followers} options={{ headerShown: false }} />
        <Stack.Screen name="Following" component={Following} options={{ headerShown: false }} />
      </Stack.Navigator>

    </NavigationContainer>
  )
}

export default Routes;