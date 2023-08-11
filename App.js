import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage/LoginPage';
import Homepage from './pages/Homepage/Homepage';

export default function App() {
  const Tab = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({headerShown: false })}
      >
        <Tab.Screen name="Login" component={LoginPage} />
        <Tab.Screen name="Home" component={Homepage}
        />
      </Tab.Navigator>
    </NavigationContainer>

  );
}

