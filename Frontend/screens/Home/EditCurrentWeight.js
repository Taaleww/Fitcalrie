import React from 'react';
import { View, StyleSheet, ScrollView, Image, TextInput, SafeAreaView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { Formik } from 'formik';
import * as Yup from 'yup';

const EditWeightSchema = Yup.object().shape({
    weight: Yup.number()
        .min(20, 'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
        .max(299,'ต้องเป็นตัวเลขระหว่าง 20 ถึง 299')
        .required('กรุณากรอกน้ำหนัก')
});

const EditCurrrentWeight = () => {
    // const [number, onChangeNumber] = React.useState('');

    return (
        <ScrollView>
            <Formik initialValues={{
                weight: ''
            }}
                validationSchema={EditWeightSchema}
                onSubmit={values => Alert.alert(JSON.stringify(values))}
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
                                source={require('./personalweight.png')}
                            />

                            <SafeAreaView >
                                <TextInput
                                    style={styles.input}
                                    value={values.weight}
                                    onChangeText={handleChange('weight')}
                                    onBlur={() => setFieldTouched('weight')}
                                    placeholder="น้ำหนัก"
                                    keyboardType="numeric"
                                />
                                 {touched.weight && errors.weight && (
                                    <Text style={styles.errorTxt}>{errors.weight}</Text>
                                )}
                            </SafeAreaView>
                        </View>

                        <View style={{ paddingTop: 130 }}>
                            <View style={styles.button}>
                                <Button
                                    style={{ borderRadius: 10, backgroundColor: isValid ? '#FD9A86' : '#F2B5AA' }}
                                    labelStyle={{
                                        fontFamily: 'NotoSansThai-Regular',
                                      }}
                                    textColor="white"
                                    mode="contained"
                                    disabled={!isValid}
                                    onPress={handleSubmit}
                                >
                                    บันทึก
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
        borderRadius: 10,
        fontFamily: 'NotoSansThai-Regular'

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
      fontFamily: 'NotoSansThai-Regular'
  
    }
});

export default EditCurrrentWeight;