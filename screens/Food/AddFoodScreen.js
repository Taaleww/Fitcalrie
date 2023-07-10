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

const AddFood = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [nutrition, setNutrition] = useState('');
  const context = useContext(AuthContext);
  const ID = context.user._id;
  const [count, setCount] = useState(1);
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
      navigation.navigate('Food');
      console.log('Add Food success');
    },
    onError(error) {
      console.error(error);
    },
  });

  return (
    <Provider>
      <ScrollView style={{backgroundColor: '#F9FBFC'}}>
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
                fontSize: 16,
                fontFamily: 'NotoSansThai-SemiBold',
              }}>
              {nutrition.name ? `${nutrition.name} (${count})` : 'อาหาร'}
            </Text>

            <Text
              style={{
                width: 32,
              }}></Text>
          </View>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 16,
              fontFamily: 'NotoSansThai-SemiBold',
              color: '#FD9A86',
            }}>
              {nutrition.calories ? `${nutrition.calories * count} kcal` : 'kcal'}
          </Text>
          <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

          <ListInformation
            kcal={
              isNaN(nutrition.calories * count)
                ? '-'
                : nutrition.calories * count
            }
            protein={
              isNaN((nutrition.protein * count).toFixed(0))
                ? '-'
                : (nutrition.protein * count).toFixed(0)
            }
            carbo={
              isNaN((nutrition.carbohydrate * count).toFixed(0))
                ? '-'
                : (nutrition.protein * count).toFixed(0)
            }
            fat={
              isNaN((nutrition.fat * count).toFixed(0))
                ? '-'
                : (nutrition.protein * count).toFixed(0)
            }
            vitaminc={
              isNaN((nutrition.vitaminc * count).toFixed(0))
                ? '-'
                : (nutrition.protein * count).toFixed(0)
            }
          />

          {/* Counter button */}
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 120,
                paddingTop: 24,
                alignItems: 'center',
              }}>
              <View style={{paddingTop: 10, paddingHorizontal: 10}}>
                <Text
                  style={{
                    fontFamily: 'NotoSansThai-SemiBold',
                    fontSize: 12,
                    color: '#FD9A86',
                  }}>
                  จำนวนหน่วยบริโภค:
                </Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Button
                  style={{backgroundColor: '#F5ECDE', borderRadius: 10}}
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
                  paddingHorizontal: 10,
                }}>
                <Text
                  style={{fontFamily: 'NotoSansThai-SemiBold', fontSize: 12}}>
                  {count}
                </Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Button
                  style={{backgroundColor: '#F5ECDE', borderRadius: 10}}
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
          </View>

          <View style={{paddingTop: 10}}>
            <View style={styles.button}>
              <Button
                style={{backgroundColor: '#FD9A86', borderRadius: 10}}
                labelStyle={{
                  fontFamily: 'NotoSansThai-Regular',
                  fontSize: 12,
                }}
                textColor="white"
                mode="contained"
                onPress={() => {
                  showDialog();
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
                    fontSize: 14,
                    textAlign: 'center',
                    fontFamily: 'NotoSansThai-SemiBold',
                  }}>
                  เพิ่มรายการใหม่สำเร็จ
                </Dialog.Title>
                <Dialog.Actions>
                  <Button
                    labelStyle={{
                      fontFamily: 'NotoSansThai-Regular',
                      fontSize: 12,
                    }}
                    textColor="white"
                    buttonColor="#FD9A86"
                    onPress={() => {
                      addFood({
                        variables: {
                          createNutritionOfUserInput: {
                            userId: ID,
                            nutritionId: nutrtionId,
                            servingSize: count,
                            date: new Date(),
                          },
                        },
                      });
                    }}>
                    {'                           '}ยืนยัน
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
    fontSize: 12,
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
