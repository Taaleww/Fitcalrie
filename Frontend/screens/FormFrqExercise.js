import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar } from 'react-native-paper';

const FormFrqExercise = () => {
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

        <Text style={styles.text_header}>คุณออกกำลังกายบ่อยครั้งแค่ไหน ?</Text>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="ไม่เคย "
              left={(props) => <Avatar.Icon {...props} icon="human-white-cane" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>0 ครั้งต่อสัปดาห์</Text>}
            />
            <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="น้อย "
              left={(props) => <Avatar.Icon {...props} icon="human-handsup" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>1-2 ครั้งต่อสัปดาห์</Text>}
            />
            <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="ปานกลาง "
              left={(props) => <Avatar.Icon {...props} icon="walk" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>3-5 ครั้งต่อสัปดาห์</Text>}
            />
            <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="บ่อยครั้ง "
              left={(props) => <Avatar.Icon {...props} icon="run" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>6-7 ครั้งต่อสัปดาห์</Text>}
            />
            <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.container}>
            <Card.Title
              style={{ backgroundColor: 'white', borderRadius: 10 }}
              titleStyle={{ color: "#1A212F" }}
              title="เป็นประจำ "
              left={(props) => <Avatar.Icon {...props} icon="run-fast" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>วันละ 2 ครั้ง</Text>}
            />
            <ProgressBar progress={0.5} color="#FD9A86" style={styles.progress} />
          </View>
        </TouchableOpacity>

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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 4,
    paddingLeft: 18,
    paddingRight: 18,

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

export default FormFrqExercise;