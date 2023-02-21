import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Text, Button, Dialog, Portal, Provider,IconButton} from 'react-native-paper';
import ListNutrition from '../../components/ListNutrition';

const DeleteFoodScreen = ({navigation}) => {
  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => setVisible(false);

  return (
    <Provider>
      <ScrollView>
      <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: 8,
              }}>
              <IconButton
                style={{width: 32}}
                icon="chevron-left"
                iconColor="#1A212F"
                size={32}
                onPress={() => navigation.goBack()}
              />
              <Text
                style={{
                  color: 'black',
                  fontSize: 20,
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                กระเพราไก่
              </Text>
              <Text
                style={{
                  width: 32,
                }}></Text>
            </View>
        <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

        {/* Information */}
        <ListNutrition kcal={20} protein={20} carbo={20} fat={20} sugar={20} />

        <View>
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
                ลบเมนูอาหาร
              </Button>
            </View>
          </View>

          {/* Show Model */}
          <Portal>
            <Dialog
              visible={visible}
              onDismiss={hideDialog}
              style={{backgroundColor: 'white', borderRadius: 10}}>
              <Dialog.Icon color="#EF4444" icon="alert-circle" size={30} />
              <Dialog.Title
                style={{fontSize: 16, textAlign: 'center', fontFamily: 'NotoSansThai-SemiBold'}}>
                คุณต้องการลบ "ข้าวกระเพราไก่" ?
              </Dialog.Title>
              <Dialog.Actions>
              <Button
                textColor="#FD9A86"
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                onPress={hideDialog}>
                {'            '}
                ยกเลิก{'            '}
              </Button>

              <Button
                textColor="white"
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                buttonColor="#FD9A86"
                onPress={() => console.log('Ok')}>
                {'            '}
                ยืนยัน{'            '}
              </Button>
              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>
      </ScrollView>
    </Provider>
  );
};

export default DeleteFoodScreen;

const styles = StyleSheet.create({
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center',
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
    fontFamily: 'NotoSansThai-SemiBold'
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50,
  },
});