import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View } from 'react-native';
import Campobase from "./Componentes/Campobase/Campobase";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyleSheet } from 'react-native';


export default function App() {
  return (
    <SafeAreaProvider>
      <View>
        <Campobase/>    
        <StatusBar style="auto" />
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
