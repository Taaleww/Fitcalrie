import * as React from 'react';
import { View, StyleSheet, ScrollView, SafeAreaView, TextInput } from 'react-native';
import { Text, Button, Dialog, Portal, Provider } from 'react-native-paper';

const CalculationExercise = () => {
    const [number, onChangeNumber] = React.useState('');
    const [visible, setVisible] = React.useState(false);
    const showDialog = () => setVisible(true);
    const hideDialog = () => setVisible(false);

    return (
        <Provider>
            <ScrollView>
                <View style={styles.box}>
                    <Text style={{ textAlign: 'center', paddingTop: 50, fontWeight: "bold", fontSize: 60, color: '#FD9A86' }}>300</Text>
                    <Text style={{ textAlign: 'center' }}>Kcal</Text>
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
                        <Button style={{ backgroundColor: '#FD9A86', borderRadius: 10 }} textColor="white" mode="contained" onPress={showDialog}>
                            บันทึก
                        </Button>
                    </View>
                </View>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog} style={{ backgroundColor: 'white', borderRadius: 10 }} >
                        <Dialog.Icon color='#42DCAE' icon="check-circle" size={30} />
                        <Dialog.Title style={{ fontSize: 16, textAlign: 'center', fontWeight: 'bold' }}>เพิ่มรายการใหม่สำเร็จ</Dialog.Title>
                        <Dialog.Actions>
                            <Button textColor="white" buttonColor='#FD9A86' onPress={hideDialog}>                                   ยืนยัน                                       </Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>


            </ScrollView>
        </Provider>

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