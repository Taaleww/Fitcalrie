import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const FoodScreen = () => {
    return (
      <View style={styles.container}>
        <Text>FoodScreen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default FoodScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});