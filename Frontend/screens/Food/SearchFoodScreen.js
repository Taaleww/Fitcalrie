import React, {useContext, useState, useEffect, useCallback} from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Searchbar, Text, IconButton, Card, Avatar} from 'react-native-paper';
import {SEARCH_FOOD} from '../../graphql/query';
import {useLazyQuery} from '@apollo/client';
import debounce from 'lodash/debounce';

const SearchFoodScreen = ({navigation}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
    handleLoadFoodData();
  };
  const [loadFoods, {loading, error, data}] = useLazyQuery(SEARCH_FOOD, {
    variables: {Food: searchQuery},
  });
  const handleLoadFoodData = debounce(loadFoods, 200);

  useEffect(() => {
    if (searchQuery) {
      handleLoadFoodData();
    }
  }, [searchQuery]);

  return (
    <ScrollView>
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
            อาหาร
          </Text>
          <Text
            style={{
              width: 32,
            }}></Text>
        </View>
        <View style={{paddingLeft: 18, paddingRight: 18, paddingTop: 24}}>
          <Searchbar
            style={{
              borderRadius: 10,
              height: 48,
              width: 380,
              backgroundColor: 'white',
            }}
            placeholder="ค้นหาเมนูอาหาร"
            onChangeText={onChangeSearch}
            placeholderTextColor="#E0E0E0"
            value={searchQuery}
          />
        </View>

        {data && (
          <View>
            {data?.findFood?.map((item, index) => (
              <TouchableOpacity
                key={item._id}
                activeOpacity={0.5}
                onPress={() =>
                  navigation.navigate({
                    name: 'AddFood',
                    params: {foodId: item._id},
                  })
                }>
                <View style={{paddingTop: 10, paddingHorizontal: 18}}>
                  <Card.Title
                    style={{backgroundColor: 'white', borderRadius: 10}}
                    titleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    title={item.name ? String(item.name) : ' '}
                    subtitleStyle={{fontFamily: 'NotoSansThai-Regular'}}
                    // subtitle={String(item.name)}
                    left={props => (
                      <Avatar.Icon
                        {...props}
                        icon="food"
                        color="#1A212F"
                        backgroundColor="#E9EFF2"
                      />
                    )}
                    right={props => (
                      <Text style={styles.text_details}>
                        {String(item?.calories) + ' kcal'}
                      </Text>
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

export default SearchFoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13,
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
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 10,
    paddingLeft: 18,
    paddingRight: 18,
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50,
  },
  text_details: {
    paddingRight: 10,
    fontSize: 14,
    fontFamily: 'NotoSansThai-SemiBold',
    color: '#FD9A86',
  },
});
