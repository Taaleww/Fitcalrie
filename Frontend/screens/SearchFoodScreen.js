import * as React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Searchbar, Text, IconButton } from 'react-native-paper';

const SearchFoodScreen = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <ScrollView>
      <View style={styles.box}>

        {/* <View style={styles.iconbutton}>
          <IconButton
            icon="chevron-left"
            iconColor="#1A212F"
            size={36}
            onPress={() => console.log('Pressed')}
          />
        </View>

        <Text style={styles.text_header}>อาหาร</Text> */}
        <View style={{ paddingLeft: 18, paddingRight: 18, paddingTop: 24 }}>
          <Searchbar
            style={{ borderRadius: 10, height: 48, width: 380, backgroundColor:'white' }}
            placeholder="ค้นหาเมนูอาหาร"
            onChangeText={onChangeSearch}
            placeholderTextColor='#E0E0E0'
            value={searchQuery}
          />
        </View>
      </View>

    </ScrollView>

  );
};

export default SearchFoodScreen;

const styles = StyleSheet.create({
  box: {
    paddingBottom: 13
  },
  text_header: {
    color: '#1A212F',
    fontWeight: 'bold',
    fontSize: 20,
    paddingHorizontal: 116,
    textAlign: 'center'
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
    justifyContent: "center",
    paddingLeft: 18,
    paddingRight: 18,
    paddingBottom: 10
  },
  iconbutton: {
    paddingLeft: 3,
    top: 50
  }
});