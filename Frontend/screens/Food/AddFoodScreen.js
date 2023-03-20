import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  Button,
  Dialog,
  Portal,
  Provider,
  IconButton,
} from 'react-native-paper';
import ListInformation from '../../components/ListInformation';
import {AuthContext} from '../../context/AuthContext';
import {useQuery} from '@apollo/client';
import {useMutation} from '@apollo/client';
import {NUTRITION} from '../../graphql/query';
import {ADD_FOOD} from '../../graphql/mutation';

const AddFood = ({navigation,route}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [nutrition, setNutrition] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const [count, setCount] = useState(1);
  //TODO: ID from FoodScreen or username to query
  const nutrtionId = route.params?.foodId;
  const {data} = useQuery(NUTRITION, {
    variables: {id: nutrtionId},
  });

  useEffect(() => {
    // Handle Nutrtion data when data was fetch
    if (data) {
      // - Set Nutrtion
      const Newnutrition = JSON.parse(JSON.stringify(data.nutrition));
      setNutrition(Newnutrition);
    }
  }, [data]);

  const [addFood] = useMutation(ADD_FOOD, {
    onCompleted(data) {
      showDialog();
      console.log('Add Food success');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <Provider>
      <ScrollView>
        <View>
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
              {nutrition.name}
            </Text>

            <Text
              style={{
                width: 32,
              }}></Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 20,
              fontFamily: 'NotoSansThai-SemiBold',
              color: '#FD9A86',
            }}>
            {nutrition.calories * count + ' kcal'}{' '}
          </Text>
          <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

          <ListInformation
            kcal={nutrition.calories * count}
            protein={(nutrition.protein * count).toFixed(0)}
            carbo={(nutrition.carbohydrate * count).toFixed(0)}
            fat={(nutrition.fat * count).toFixed(0)}
            vitaminc={(nutrition.vitaminc * count).toFixed(0)}
          />

          {/* Counter button */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 120,
              paddingTop: 24,
            }}>
            <View style={{}}>
              <Button
                style={{backgroundColor: 'white', borderRadius: 10}}
                labelStyle={{
                  fontFamily: 'NotoSansThai-SemiBold',
                  fontSize: 16,
                }}
                textColor="#FD9A86"
                mode="contained"
                disabled={count == 1}
                onPress={() => {
                  setCount(count - 1);
                }}>
                -
              </Button>
            </View>
            <View
              style={{
                justifyContent: 'center',
              }}>
              <Text>{count}</Text>
            </View>
            <View style={{}}>
              <Button
                style={{backgroundColor: 'white', borderRadius: 10}}
                labelStyle={{
                  fontFamily: 'NotoSansThai-SemiBold',
                  fontSize: 16,
                }}
                textColor="#FD9A86"
                mode="contained"
                onPress={() => {
                  setCount(count + 1);
                }}>
                +
              </Button>
            </View>
          </View>

          <View style={{paddingTop: 10}}>
            <View style={styles.button}>
              <Button
                style={{backgroundColor: '#FD9A86', borderRadius: 10}}
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                }}
                textColor="white"
                mode="contained"
                onPress={() => {
                  addFood({
                    variables: {
                      createNutritionOfUserInput: {
                        userId: ID,
                        nutritionId: nutrtionId,
                        servingSize: count,
                        date: new Date()
                      },
                    },
                  });
                }}>
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
                    onPress={() => navigation.navigate('Food')}>
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

export default AddFood;

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
    paddingTop: 16,
    fontFamily: 'NotoSansThai-SemiBold',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10,
  },
});
