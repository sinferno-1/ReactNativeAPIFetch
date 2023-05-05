import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  navigate,
} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Home } from "./components/Home";
import { Details } from "./components/Details";



const Stack = createNativeStackNavigator();

export default function App() {



  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name = 'Home' component={Home}/>
        <Stack.Screen name = 'Details' component={Details}/>

      </Stack.Navigator>

    </NavigationContainer>
  )

}
