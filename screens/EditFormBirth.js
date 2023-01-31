import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView } from 'react-native';
import { Button } from 'react-native-paper';
import DateField from 'react-native-datefield'
import DatePicker from 'react-native-date-picker'

const EditFormWeight = () => {
    const [date, setDate] = useState(new Date())
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
                        source={require('./personalname.png')}
                    />

                    {/* <SafeAreaView >
                        <TextInput
                            style={styles.input}
                            onChangeText={onChangeDate}
                            value={birthdate-day}
                            placeholder="วันเกิด"
                        />
                    </SafeAreaView> */}
                    <DateField
                        styleInput={{ fontSize: 15, width: '27%', borderRadius:10, borderColor:'#cacaca', backgroundColor: 'white', marginHorizontal: 10 }}
                        disabled
                        labelDate='วัน'
                        labelMonth='เดือน'
                        labelYear='ปี'
                        defaultValue={new Date()}
                        onSubmit={(value) => console.log(value)}
                    />

                    {/* <DatePicker mode='date' date={date} onDateChange={setDate} /> */}
                </View>

                <View style={{ paddingTop: 150 }}>
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