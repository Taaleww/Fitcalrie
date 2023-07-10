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
import {useQuery} from '@apollo/client';
import {useMutation} from '@apollo/client';
import {NUTRITION} from '../../graphql/query';
import {DELTE_FOOD} from '../../graphql/mutation';

const DeleteFoodScreen = ({navigation, route}) => {
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [nutrition, setNutrition] = useState('');

  const {data} = useQuery(NUTRITION, {
    variables: {id: String(route.params?.nutritionID)},
  });


  useEffect(() => {
    // Handle Nutrtion data when data was fetch
    if (data) {
      // - Set Nutrtion
      const Newnutrition = JSON.parse(JSON.stringify(data.nutrition));
      setNutrition(Newnutrition);
    }
  }, [data]);

  const [deleteFood] = useMutation(DELTE_FOOD, {
    onCompleted(data) {
      navigation.navigate('Food');
      console.log('Delete Food success');
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
            {nutrition.name
              ? `${nutrition.name} (${route.params?.servingSize})`
              : 'อาหาร'}
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
          {route.params?.totalCalories + ' kcal'}
        </Text>
        <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

        {/* Information */}
        <ListInformation
          kcal={
            isNaN(route.params.totalCalories.toFixed(0))
              ? '-'
              : route.params.totalCalories.toFixed(0)
          }
          protein={
            isNaN((nutrition.protein * route.params?.servingSize)?.toFixed(0))
              ? '-'
              : (nutrition.protein * route.params?.servingSize)?.toFixed(0)
          }
          carbo={
            isNaN(
              (nutrition.carbohydrate * route.params?.servingSize)?.toFixed(0),
            )
              ? '-'
              : (nutrition.carbohydrate * route.params?.servingSize)?.toFixed(0)
          }
          fat={
            isNaN((nutrition.fat * route.params?.servingSize)?.toFixed(0))
              ? '-'
              : (nutrition.fat * route.params?.servingSize)?.toFixed(0)
          }
          vitaminc={
            isNaN((nutrition.vitaminc * route.params?.servingSize)?.toFixed(0))
              ? '-'
              : (nutrition.vitaminc * route.params?.servingSize)?.toFixed(0)
          }
        />

        <View>
          <View style={{paddingTop: 40}}>
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
                style={{
                  fontSize: 16,
                  textAlign: 'center',
                  fontFamily: 'NotoSansThai-SemiBold',
                }}>
                {' คุณต้องการลบ ' + nutrition.name + ' ?'}
              </Dialog.Title>
              <Dialog.Actions>
                <Button
                  textColor="#FD9A86"
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                  }}
                  onPress={hideDialog}>
                  {'        '}
                  ยกเลิก{'        '}
                </Button>

                <Button
                  textColor="white"
                  labelStyle={{
                    fontFamily: 'NotoSansThai-Regular',
                  }}
                  buttonColor="#FD9A86"
                  onPress={() => {
                    deleteFood({
                      variables: {
                        delete: String(route.params?.id),
                      },
                    });
                  }}>
                  {'        '}
                  ยืนยัน{'        '}
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
    fontSize: 12,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
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
