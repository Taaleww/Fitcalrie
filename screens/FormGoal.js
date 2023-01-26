import React from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const FormGoal = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <ScrollView>
        <View style={styles.iconbutton}>
          <IconButton
            icon="chevron-left"
            iconColor="#1A212F"
            size={36}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <Text style={styles.text_header}>เป้าหมายการลดน้ำหนักของคุณ (กิโลกรัม)</Text>
        <View style={styles.container}>
          <Image
            style={{ width: 300, height: 300 }}
            source={require('./personalgoal.png')}
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


    </ScrollView>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 32,
    justifyContent: 'center',
    alignItems: 'center',

  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 120,
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
    paddingTop: 10,
    paddingHorizontal: 345
  }
});

export default FormGoal;