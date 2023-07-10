// CustomModal.js
import React from 'react';
import {Modal, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const CustomModal = ({title, isVisible}) => {
  return (
    <View style={styles.modalContainer}>
      <Modal animationType="fade" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Ionicons
              name= 'checkmark-circle-outline'
              size={26}
              color="#6FB565"
              style={{marginLeft: 10}}
            />
            <Text style={styles.textStyle}>{title}</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    alignItems: 'center',
    position: 'absolute',
    height: '100%',
    width: '100%',
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    top: 526,
    width: '91%',
    height: 40,
    backgroundColor: '#EFF7ED',
    borderRadius: 8
  },
  textStyle: {
    color: '#4F694B',
    textAlign: 'center',
    fontSize: 14,
    marginLeft: 20,
    fontFamily: 'NotoSansThai-Regular'
  },
});
export default CustomModal;
