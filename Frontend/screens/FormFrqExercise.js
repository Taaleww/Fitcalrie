import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';

const FormFrqExercise = ({ navigation }) => {
  const [frq, setFrq] = React.useState('');
  console.log(frq);
  return (
    <ScrollView>
      <View style={styles.box}>
        <TouchableOpacity activeOpacity={0.5} onPress={() => { setFrq(1) }} >
          <View style={styles.container}>
            <Card.Title
              style={frq !== 1 ? styles.defaultButtonTab : styles.buttonTab}
              titleStyle={{ color: "#1A212F" }}
              title="ไม่เคย "
              left={(props) => <Avatar.Icon {...props} icon="human-white-cane" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>0 ครั้งต่อสัปดาห์</Text>}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() => { setFrq(2) }}>
          <View style={styles.container}>
            <Card.Title
              style={frq !== 2 ? styles.defaultButtonTab : styles.buttonTab}
              titleStyle={{ color: "#1A212F" }}
              title="น้อย"
              left={(props) => <Avatar.Icon {...props} icon="human-handsup" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>1-2 ครั้งต่อสัปดาห์</Text>}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() => { setFrq(3) }}>
          <View style={styles.container}>
            <Card.Title
              style={frq !== 3 ? styles.defaultButtonTab : styles.buttonTab}
              titleStyle={{ color: "#1A212F" }}
              title="ปานกลาง "
              left={(props) => <Avatar.Icon {...props} icon="walk" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>3-5 ครั้งต่อสัปดาห์</Text>}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() => { setFrq(4) }}>
          <View style={styles.container}>
            <Card.Title
              style={frq !== 4 ? styles.defaultButtonTab : styles.buttonTab}
              titleStyle={{ color: "#1A212F" }}
              title="บ่อยครั้ง"
              left={(props) => <Avatar.Icon {...props} icon="run" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>6-7 ครั้งต่อสัปดาห์</Text>}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.5} onPress={() => { setFrq(5) }}>
          <View style={styles.container}>
            <Card.Title
              style={frq !== 5 ? styles.defaultButtonTab : styles.buttonTab}
              titleStyle={{ color: "#1A212F" }}
              title="เป็นประจำ"
              left={(props) => <Avatar.Icon {...props} icon="run-fast" color='#1A212F' backgroundColor='#E9EFF2' />}
              right={(props) => <Text style={styles.text_details}>วันละ 2 ครั้ง</Text>}
            />
          </View>
        </TouchableOpacity>

        <View style={{ paddingTop: 40 }}>
          <View style={{ paddingLeft: 18, paddingBottom: 16, flexDirection: 'row', justifyContent: 'center' }}>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
              </View>
            </View>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
              </View>
            </View>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#FD9A86', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
            <View style={{ paddingRight: 10 }}>
              <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                <Text></Text>
                <Text></Text>
              </View>
            </View>
          </View>
          <View style={styles.button}>
            <Button
              style={{ borderRadius: 10, backgroundColor: '#FD9A86' }}
              mode="contained"
              disabled={frq === ''}
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
    paddingTop: 10,
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
  defaultButtonTab: {
    backgroundColor: 'white',
    borderRadius: 10
  },
  buttonTab: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderRadius: 10,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#FD9A86"
  },
});

export default FormFrqExercise;