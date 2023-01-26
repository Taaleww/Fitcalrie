import React from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const FormWeight = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.box}>
        <View style={styles.iconbutton}>
          <IconButton
            icon="chevron-left"
            iconColor="#1A212F"
            size={36}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <Text style={styles.text_header}>น้ำหนัก (กิโลกรัม)</Text>
        <View style={styles.container}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require('./personalweight.png')}
          />

          <SafeAreaView >
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="น้ำหนัก"
              keyboardType="numeric"
            />
          </SafeAreaView>
        </View>

        <View style={styles.button_next} >
          <IconButton
            icon="chevron-right"
            iconColor="white"
            backgroundColor='#FD9A86'
            size={20}
            onPress={() => console.log('Pressed')}
          />
        </View>




      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  container: {
    paddingTop: 40,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 161,
    textAlign: 'center'
  },
  iconbutton: {
    top: 50
  },
  input: {
    width: 360,
    height: 40,
    margin: 12,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10

  },
  button_next: {
    paddingTop: 20,
    paddingHorizontal: 345
  }
});

export default FormWeight;