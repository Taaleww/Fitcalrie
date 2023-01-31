import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';

const DeleteFoodScreen = () => (
  <ScrollView>
    <View style={styles.box}>
      <Text style={styles.text_Regular}>ข้อมูลการเผาผลาญ</Text>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="เผาผลาญ (kcal)"
          left={(props) => <Avatar.Icon {...props} icon="fire" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>120</Text>}
        />
      </View>
    </View>

    <View style={{ paddingTop: 400 }}>
        <View style={styles.button}>
          <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
            ลบรายการการออกกำลังกาย
          </Button>
        </View>
      </View>


  </ScrollView>

);

export default DeleteFoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  container: {
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24
  },
  button: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10
  }
});