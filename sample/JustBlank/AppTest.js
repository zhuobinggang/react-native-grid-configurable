import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from 'react-native-grid-configurable';

console.log(require('./assets/icon.png'));

export default function App() {
  return (
    <View style={styles.container}>

    </View>
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
