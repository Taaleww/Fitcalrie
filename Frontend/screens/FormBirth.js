import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import DateField from 'react-native-datefield'

const FormBirth = ({ navigation }) => {
    const [date, setDate] = useState(null)
    let newdate = new Date(date).toLocaleDateString("th");

    console.log("dateOfBirth", newdate); // Format : "MM/DD/YY"
    return (
        <ScrollView>
            <View style={styles.box}>
                <View style={styles.container}>
                    <Image
                        style={{ width: 300, height: 300 }}
                        source={require('./personalname.png')}
                    />
                    <DateField
                        styleInput={{ fontSize: 15, width: '27%', borderRadius: 10, borderColor: '#cacaca', backgroundColor: 'white', marginHorizontal: 10 }}
                        disabled
                        labelDate='วัน'
                        labelMonth='เดือน'
                        labelYear='ปี'
                        onSubmit={(value) => {
                            let today = value;
                            today.setDate(today.getDate());
                            setDate(new Date(today))
                        }}
                    />
                </View>

                <View style={{ paddingTop: 120 }}>
                    <View style={{ paddingLeft: 18, paddingBottom: 16, flexDirection: 'row', justifyContent: 'center' }}>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#FD9A86', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                        <View style={{ paddingRight: 10 }}>
                            <View style={{ backgroundColor: '#D9D9D9', borderRadius: 10, width: 12, height: 12 }}>
                                <Text></Text>
                                <Text></Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.button}>
                        <Button
                            style={{ backgroundColor: '#FD9A86', borderRadius: 10 }}
                            textColor="white"
                            mode="contained"
                            disabled={date === null}
                            onPress={() => navigation.navigate('FormWeight')}
                        >
                            ถัดไป
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

export default FormBirth;