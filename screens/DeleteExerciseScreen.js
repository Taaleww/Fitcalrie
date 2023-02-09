import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Avatar, Card, Text, Button, Dialog, Portal, Provider } from 'react-native-paper';

const DeleteFoodScreen = ({ navigation }) => {

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);


  return (
    <Provider>
      <ScrollView>
       
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


          <View style={{ paddingTop: 420 }}>
            <View style={styles.button}>
              <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={showDialog}>
                ลบรายการการออกกำลังกาย
              </Button>
            </View>
          </View>
          <Portal>
            <Dialog visible={visible} onDismiss={hideDialog} style={{ backgroundColor: 'white', borderRadius: 10 }} >
              <Dialog.Icon color='#EF4444' icon="alert-circle" size={30} />
              <Dialog.Title style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>คุณต้องการลบรายการ "วิ่ง" ?</Dialog.Title>
              <Dialog.Actions>
                <Button
                  textColor="#FD9A86"
                  onPress={hideDialog}>              ยกเลิก              </Button>

                <Button textColor="white" buttonColor='#FD9A86' onPress={() => console.log('Ok')}>              ยืนยัน              </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        

      </ScrollView>
    </Provider>

  );
};

export default DeleteFoodScreen;

const styles = StyleSheet.create({
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