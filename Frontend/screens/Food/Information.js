import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {
  Text,
  Provider,
  IconButton,
} from 'react-native-paper';
import ListInformation from '../../components/ListInformation';
import {useQuery} from '@apollo/client';
import {NUTRITION} from '../../graphql/query';

const InformationScreen = ({navigation, route}) => {
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
            {nutrition.name+ " (" + route.params?.servingSize+ ")"}
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
          {route.params?.totalCalories + ' kcal'}
        </Text>
        <Text style={styles.text_Regular}>ข้อมูลโภชนาการ</Text>

        {/* Information */}
        <ListInformation
          kcal={route.params?.totalCalories.toFixed(0)}
          protein={(nutrition.protein*route.params?.servingSize)?.toFixed(0)}
          carbo={(nutrition.carbohydrate*route.params?.servingSize)?.toFixed(0)}
          fat={(nutrition.fat*route.params?.servingSize)?.toFixed(0)}
          vitaminc={(nutrition.vitaminc*route.params?.servingSize)?.toFixed(0)}
        />
      </ScrollView>
    </Provider>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  text_Regular: {
    color: '#1A212F',
    fontSize: 14,
    paddingLeft: 18,
    paddingTop: 24,
    fontFamily: 'NotoSansThai-SemiBold',
  }
});
