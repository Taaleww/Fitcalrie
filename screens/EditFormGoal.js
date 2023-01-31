import React from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

const EditFormWeight = () => {
    const [number, onChangeNumber] = React.useState('');

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

        <Text style={styles.text_header}>น้ำหนัก (กิโลกรัม)</Text> */}
                <View style={styles.container}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={require('./personalgoal.png')}
                    />

                    <SafeAreaView >
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeNumber}
                            value={number}
                            placeholder="เป้าหมายน้ำหนัก"
                            keyboardType="numeric"
                        />
                    </SafeAreaView>
                </View>

                <View style={{ paddingTop: 140 }}>
                    <View style={styles.button}>
                        <Button
                            style={{ backgroundColor: '#FD9A86', borderRadius: 10 }}
                            textColor="white"
                            mode="contained"
                        >
                            บันทึก
                        </Button>
                    </View>

                </View>





            </View>

        </ScrollView>

    );
};

const styles = StyleSheet.create({
    box: {
        paddingBottom: 13
    },
    container: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text_header: {
        color: '#1A212F',
        fontWeight: 'bold',
        fontSize: 20,
        paddingHorizontal: 161,
        textAlign: 'center'
    },
    iconbutton: {
        top: 50
    },
    input: {
        width: 380,
        height: 40,
        margin: 12,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10

    },
    button: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 10
    },
});

export default EditFormWeight;