import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';

const MainScreen = () => {
  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.container}>
          <Image
            style={{ width: 160, height: 160 }}
            source={require('./Logo_FITCLRIE.png')}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
    padding: 18

  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 200
  }
});

export default MainScreen;