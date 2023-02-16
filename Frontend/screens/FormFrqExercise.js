import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar,Button } from 'react-native-paper';

const FormFrqExercise = ({navigation}) => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.box}>
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

        <View style={{ paddingTop: 70 }}>
          <View style={styles.button}>
            <Button
              style={{ borderRadius: 10, backgroundColor: '#FD9A86' }}
              mode="contained"
             
              onPress={() => navigation.navigate('FormGoal')}
            >
              ถัดไป
            </Button>
          </View>
        </View>




      </View>

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  box: {
    paddingTop: 60
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
  button: {
      flex: 1,
      justifyContent: "center",
      paddingLeft: 18,
      paddingRight: 18,
      paddingBottom: 10
  },
});

export default FormFrqExercise;