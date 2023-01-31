import * as React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Avatar, Card, Text, Button } from 'react-native-paper';

const CalculationExercise = () => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <ScrollView>
            <View style={styles.box}>
                <Text style={{textAlign: 'center', paddingTop: 50, fontWeight:"bold", fontSize: 60, color: '#FD9A86' }}>300</Text>
                <Text style={{ textAlign: 'center'}}>Kcal</Text>
                {/* <Text style={styles.text_Regular}>กรุณาระบุระยะเวลาและระยะทาง</Text> */}
                {/* 
            <View style={styles.container}>
                <Card.Title
                    style={{ backgroundColor: 'white', borderRadius: 10 }}
                    titleStyle={{ color: "#1A212F" }}
                    title="เผาผลาญ (kcal)"
                    left={(props) => <Avatar.Icon {...props} icon="fire" color='#1A212F' backgroundColor='#E9EFF2' />}
                    right={(props) => <Text style={styles.text_details}>120</Text>}
                />
            </View> */}

            </View>

            <View style={{ paddingTop: 100, alignItems: 'center' }}>
                <SafeAreaView >
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="นาที"
                        keyboardType="numeric"
                    />
                </SafeAreaView>

                <SafeAreaView >
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeNumber}
                        value={number}
                        placeholder="กิโลเมตร"
                        keyboardType="numeric"
                    />
                </SafeAreaView>


            </View>


            <View style={{ paddingTop: 130 }}>
                <View style={styles.button}>
                    <Button style={{ backgroundColor: 'white', borderRadius: 10 }} textColor="#FD9A86" mode="contained" onPress={() => console.log('Pressed')}>
                        คำนวณการเผาผลาญจากการวิ่ง
                    </Button>
                </View>
                <View style={styles.button}>
                    <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={() => console.log('Pressed')}>
                        บันทึก
                    </Button>
                </View>
            </View>


        </ScrollView>

    );
};
export default CalculationExercise;

const styles = StyleSheet.create({
    box: {
        paddingBottom: 13
    },
    container: {
        paddingTop: 10,
        paddingLeft: 18,
        paddingRight: 18,
    },
    text_details: {
        paddingRight: 10,
        fontSize: 14
    },
    text_Regular: {
        color: '#1A212F',
        fontSize: 18,
        paddingLeft: 18,
        paddingTop: 24,
        fontWeight: 'bold'
    },
    button: {
        flex: 1,
        justifyContent: "center",
        paddingLeft: 18,
        paddingRight: 18,
        paddingBottom: 10
    },
    input: {
        width: 380,
        height: 40,
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        marginBottom: 10

    }
});