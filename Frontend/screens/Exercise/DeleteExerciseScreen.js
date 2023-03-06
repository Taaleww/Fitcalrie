import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Avatar,
  Card,
  Text,
  Button,
  Dialog,
  Portal,
  Provider,
  IconButton,
} from 'react-native-paper';

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
            วิ่ง
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>
        <Text
          style={{
            textAlign: 'center',
            paddingTop: 50,
            fontWeight: 'bold',
            fontSize: 60,
            color: '#FD9A86',
            fontFamily: 'NotoSansThai-Regular',
          }}>
          300
        </Text>
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'NotoSansThai-Regular',
            size: 14,
          }}>
          kcal
        </Text>
        <View style={styles.container}>
          <Card.Title
            style={{backgroundColor: 'white', borderRadius: 10}}
            titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
            title="ระยะเวลา (นาที)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="history"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => <Text style={styles.text_details}>120</Text>}
          />
        </View>

        <View style={{paddingTop: 280}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',
              }}
              textColor="white"
              mode="contained"
              onPress={showDialog}>
              ลบรายการการออกกำลังกาย
            </Button>
          </View>
        </View>
        <Portal>
          <Dialog
            visible={visible}
            onDismiss={hideDialog}
            style={{backgroundColor: 'white', borderRadius: 10}}>
            <Dialog.Icon color="#EF4444" icon="alert-circle" size={30} />
            <Dialog.Title
              style={{
                fontSize: 16,
                textAlign: 'center',
                fontFamily: 'NotoSansThai-SemiBold',
              }}>
              คุณต้องการลบรายการ "วิ่ง" ?
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
      </ScrollView>
    </Provider>
  );
};

export default DeleteFoodScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: 36,
    paddingLeft: 18,
    paddingRight: 18,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-Regular',
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
