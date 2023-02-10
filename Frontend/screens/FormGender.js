import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar } from 'react-native-paper';



const FormGender = () => {
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

        <Text style={styles.text_header}>เพศ</Text>


          <View style={styles.MainContainer}>
            <View style={styles.Image}>
              <Image 
                style={{ width: 160, height: 160 }}
                source={require('./male.png')}
              />
            </View>
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
  MainContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 100,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingRight: 50,
    paddingTop: 20

  },
  box: {
    paddingBottom: 13
  },
  Image: {
    height: 200,
    width: 100

  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 110,
    textAlign: 'center',
    paddingBottom: 10
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
    paddingHorizontal: 352,
    paddingTop: 16
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14
  },
});

export default FormGender;