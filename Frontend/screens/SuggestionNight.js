import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Dialog, Portal, Provider} from 'react-native-paper';
import ListNutrition from '../components/ListNutrition';

const SuggestionNight = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <Provider>
      <ScrollView>
        <View>
          {/* <Text style={styles.text_header}>ข้าวกระเพราไก่</Text>
      <Text style={styles.text_detail}>120 Kcal</Text> */}
          <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

          <ListNutrition
            kcal={20}
            protein={20}
            carbo={20}
            fat={20}
            sugar={20}
          />

          <View style={{paddingTop: 90}}>
            <View style={styles.button}>
              <Button
                style={{backgroundColor: '#FD9A86', borderRadius: 10}}
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                textColor="white"
                mode="contained"
                onPress={showDialog}>
                บันทึกเมนูอาหาร
              </Button>
            </View>
            <Portal>
              <Dialog
                visible={visible}
                onDismiss={hideDialog}
                style={{backgroundColor: 'white', borderRadius: 10}}>
                <Dialog.Icon color="#42DCAE" icon="check-circle" size={30} />
                <Dialog.Title
                  style={{
                    fontSize: 16,
                    textAlign: 'center',
                    fontFamily: 'NotoSansThai-SemiBold',
                  }}>
                  เพิ่มรายการใหม่สำเร็จ
                </Dialog.Title>
                <Dialog.Actions>
                  <Button
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                    }}
                    textColor="white"
                    buttonColor="#FD9A86"
                    onPress={hideDialog}>
                    {'                                '}ยืนยัน
                    {'                                   '}
                  </Button>
                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>
        </View>
      </ScrollView>
    </Provider>
  );
};

export default SuggestionNight;

const styles = StyleSheet.create({
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
    fontFamily: 'NotoSansThai-Regular',
  },
  text_detail: {
    color: '#FD9A86',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
  },
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-Regular',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
});
