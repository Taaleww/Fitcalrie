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
import {useMutation} from '@apollo/client';
import {DELETE_EXERCISE} from '../../graphql/mutation';

const DeleteFoodScreen = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [deleteExercise] = useMutation(DELETE_EXERCISE, {
    onCompleted(data) {
      navigation.navigate('Exercise');
      console.log('Delete Exercise success');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <Provider>
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
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
              fontSize: 16,
              fontFamily: 'NotoSansThai-SemiBold',
            }}>
            {route.params?.name}
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
          {(route.params?.total_calories_burned).toFixed(0)}
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
            titleStyle={{fontFamily: 'NotoSansThai-Regular',fontSize:12}}
            title="ระยะเวลา (นาที)"
            left={props => (
              <Avatar.Icon
                {...props}
                icon="history"
                color="#1A212F"
                backgroundColor="#E9EFF2"
              />
            )}
            right={props => (
              <Text style={styles.text_details}>
                {(route.params?.time).toFixed(0)}
              </Text>
            )}
          />
        </View>

        <View style={{paddingTop: 210}}>
          <View style={styles.button}>
            <Button
              style={{backgroundColor: '#FD9A86', borderRadius: 10}}
              labelStyle={{
                fontFamily: 'NotoSansThai-Regular',fontSize:12
              }}
              textColor="white"
              mode="contained"
              onPress={() => {
                showDialog();
              }}>
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
                fontSize: 14,
                textAlign: 'center',
                fontFamily: 'NotoSansThai-SemiBold',
              }}>
              {"คุณต้องการลบรายการ" + "  "+ route.params?.name + " ? "} 
            </Dialog.Title>
            <Dialog.Actions>
              <Button
                textColor="#FD9A86"
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',fontSize:12
                }}
                onPress={hideDialog}>
                {'       '}
                ยกเลิก{'       '}
              </Button>

              <Button
                textColor="white"
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',fontSize:12
                }}
                buttonColor="#FD9A86"
                onPress={() => {
                  deleteExercise({
                    variables: {
                      delete: route.params?.id,
                    },
                  });
                }}>
                {'       '}
                ยืนยัน{'       '}
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
    fontSize: 12,
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
