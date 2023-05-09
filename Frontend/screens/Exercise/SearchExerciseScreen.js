import React, {useContext, useState, useEffect} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Searchbar, Text, IconButton, Card, Avatar} from 'react-native-paper';

import {useLazyQuery} from '@apollo/client';
import debounce from 'lodash/debounce';
import {SEARCH_EXERCISE} from '../../graphql/query';

const SearchExerciseScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
    handleLoadExercisesData();
  };

  const [loadExercises, {loading, error, data}] = useLazyQuery(
    SEARCH_EXERCISE,
    {
      variables: {Exercise: searchQuery},
    },
  );
  const handleLoadExercisesData = debounce(loadExercises, 200);

  useEffect(() => {
    if (searchQuery) {
      handleLoadExercisesData();
    }
  }, [searchQuery]);

  return (
    <ScrollView style={{backgroundColor: '#F9FBFC'}}>
      <View style={styles.box}>
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
            ออกกำลังกาย
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>
        <View style={{paddingLeft: 18, paddingRight: 18, paddingTop: 24}}>
        <Searchbar
            style={{
              borderRadius: 20,
              height: 42,
              width: 380,
              backgroundColor: '#FBE5E4',
              shadowColor:'transparent',
            }}
            fontSize={15}
            cursorColor='#FD9A86'
            fontFamily= 'NotoSansThai-Regular'
            placeholderTextColor='#FCC3B7'
            iconColor='#FD9A86'
            
            placeholder="ค้นหาจากชื่อ"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </View>
        {/* RESULT SEARCH */}
        {data && (
          <View>
            {data?.findEx?.map((item, index) => (
              <TouchableOpacity
                key={item.exerciseId}
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate({
                    name: 'AddExercise',
                    params: {
                      id: item._id,
                      name: item.name,
                    },
                  })
                }>
                <View style={{paddingTop: 10, paddingHorizontal: 18}}>
                  <Card.Title
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    title={item.name}
                    subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    left={props => (
                      <Avatar.Icon
                        {...props}
                        icon="arm-flex"
                        color="#1A212F"
                        backgroundColor="#E9EFF2"
                      />
                    )}
                  />
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

export default SearchExerciseScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 10,
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
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 18,
    paddingTop: 24,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 18,
    paddingRight: 18,
    paddingTop: 10,
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50,
  },
});
