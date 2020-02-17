import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Grid from 'react-native-grid-configurable';

export default function App() {
  return (
    <View style={styles.container}>

      <Grid 
        cols={3} 
        height={70}  
        imgSrcs={[
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYgfWkrCbzDqbzU4oqjwEQENrh_tQoVZMeUrfryEeogVZRq8OI',
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYgfWkrCbzDqbzU4oqjwEQENrh_tQoVZMeUrfryEeogVZRq8OI',
          require('./assets/icon.png'),
          'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTzuQ-sFEF-UBhdL-sDzaVXgs1hD1kmDdX4rKX0RflFmSB1rjK',
          'https://facebook.github.io/react-native/img/tiny_logo.png',
        ]} 
        titles={['A ','bb','cc','dd','ee']} 
        // imgSrcs={[
        //   'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYgfWkrCbzDqbzU4oqjwEQENrh_tQoVZMeUrfryEeogVZRq8OI',
        // ]} 
        // titles={['A']} 
        paddingBetweenRows={16}>
      </Grid>

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
