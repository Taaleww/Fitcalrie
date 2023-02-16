import React from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EditHeightSchema = Yup.object().shape({
    height: Yup.number()
        .min(1, 'ต้องเป็นตัวเลขระหว่าง 1 ถึง 299')
        .max(299, 'ต้องเป็นตัวเลขระหว่าง 1 ถึง 299')
        .required('กรุณากรอกส่วนสูง')
});

const FormHeight = ({ navigation }) => {

    return (
        <ScrollView>
            <Formik initialValues={{
                height: ''
            }}
                validationSchema={EditHeightSchema}
                onSubmit={() => navigation.navigate('FormFrqExercise')}
                
            >

                {({ values,
                    errors,
                    isValid,
                    touched,
                    handleChange,
                    setFieldTouched,
                    handleSubmit
                }) => (
                    <View style={styles.box}>
                        <View style={styles.container}>
                            <Image
                                style={{ width: 300, height: 300 }}
                                source={require('./personalheight.png')}
                            />

                            <SafeAreaView >
                                <TextInput
                                    style={styles.input}
                                    value={values.height}
                                    onChangeText={handleChange('height')}
                                    onBlur={() => setFieldTouched('height')}
                                    placeholder="ส่วนสูง"
                                    keyboardType="numeric"
                                />
                                {touched.height && errors.height && (
                                    <Text style={styles.errorTxt}>{errors.height}</Text>
                                )}
                            </SafeAreaView>
                        </View>

                        <View style={{ paddingTop: 130 }}>
                            <View style={styles.button}>
                                <Button
                                    style={{ borderRadius: 10, backgroundColor: isValid ? '#FD9A86' : '#F2B5AA' }}
                                    textColor="white"
                                    mode="contained"
                                    disabled={!isValid}
                                    onPress={handleSubmit}
                                >
                                    ถัดไป
                                </Button>
                            </View>

                        </View>

                    </View>
                )}
            </Formik>
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
    errorTxt: {
        color: '#FD9A86',
        paddingLeft: 16,

    }
});

export default FormHeight;