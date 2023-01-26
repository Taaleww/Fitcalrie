import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, IconButton, Text, ProgressBar, Button } from 'react-native-paper';

const DeleteFoodScreen = () => (
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

      <Text style={styles.text_header}>อาหารกลางวัน</Text>
      <Text style={styles.text_detail}>120 Kcal</Text>
      <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="แคลอรี่ (kcal)"
          left={(props) => <Avatar.Icon {...props} icon="food" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="โปรตีน (g)"
          left={(props) => <Avatar.Icon {...props} icon="egg" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="คาร์โบไฮเดรต (g)"
          left={(props) => <Avatar.Icon {...props} icon="hamburger" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="ไขมันทั้งหมด (g)"
          left={(props) => <Avatar.Icon {...props} icon="water" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
      </View>

      <View style={styles.container}>
        <Card.Title
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          titleStyle={{ color: "#1A212F" }}
          title="น้ำตาล (g)"
          left={(props) => <Avatar.Icon {...props} icon="spoon-sugar" color='#1A212F' backgroundColor='#E9EFF2' />}
          right={(props) => <Text style={styles.text_details}>500</Text>}
        />
      </View>

      <View style={{ paddingTop: 120 }}>
        <View style={styles.button}>
          <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
            ลบเมนูอาหาร
          </Button>
        </View>

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
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center'
  },
  text_detail: {
    color: '#FD9A86',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
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
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50
  }
});