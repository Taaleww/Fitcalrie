import React, {useState} from 'react';
import {View, StyleSheet, ScrollView, Text} from 'react-native';
import {IconButton} from 'react-native-paper';
import Register from './RegisterScreen';
import FormGender from './FormGender';
import FormBirth from './FormBirth';
import FormHeight from './FormHeight';
import FormWeight from './FormWeight';
import FormFrq from './FormFrqExercise';
import FormGoal from './FormGoal';
import {useMutation} from '@apollo/client';
import {CREATE_USER} from '../../graphql/mutation';
import CustomModal from '../../components/ModalSuccess';
import CustomModalError from '../../components/ModalFail';

const RegisterModule = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisibleError, setModalVisibleError] = useState(false);
  // Pass mutation to useMutation
  const [createUser] = useMutation(CREATE_USER, {
    async onCompleted(data) {
      // Todo: call login automatically
      // for now use only navigate to login page
      console.log('COMPLETE DATA: ', data);
      setModalVisible(true);
      await setTimeout(() => {
        setModalVisible(false);
        navigation.navigate('Login');
      }, 2000);
    },
    onError(error) {
      setModalVisibleError(true);
      setTimeout(() => {
        setModalVisibleError(false);
      }, 2000);
      console.error('Can not create user : ', error);
    },
  });

  const [step, setStep] = useState(1);
  const [state, setState] = useState({
    username: '',
    password: '',
    confirmpassword: '',
    gender: 'male',
    dateOfbirth: '',
    height: '',
    weight: '',
    frq_excercise: '',
    goal: '',
  });

  const getTabName = step => {
    return {
      1: '',
      2: 'เพศ',
      3: 'วันเกิด',
      4: 'น้ำหนัก',
      5: 'ส่วนสูง',
      6: 'คุณออกกำลังกายบ่อยครั้งแค่ไหน',
      7: 'เป้าหมายการลดน้ำหนักของคุณ',
    }[step];
  };

  console.log('step', step);

  const nextStep = () => {
    setStep(step + 1);
  };

  const previousStep = () => {
    setStep(step - 1);
  };

  const onUpdateState = payload => {
    setState({
      ...state,
      ...payload,
    });
  };

  const onSubmitRegister = async () => {
    // create user
    const createUserInput = {
      username: state.username,
      password: state.password,
      gender: state.gender,
      dateOfbirth: state.dateOfbirth.toISOString(),
      height: state.height,
      weight: state.weight,
      frq_excercise: state.frq_excercise,
      goal: state.goal,
    };
    console.log(' KP KP ', createUserInput);
    await createUser({variables: {createUserInput}});
  };

  console.log(state);
  return (
    <ScrollView>
      <View style={styles.box}>
        {step !== 1 && (
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
              onPress={previousStep}
            />
            <Text
              style={{
                color: 'black',
                fontSize: 20,
                fontFamily: 'NotoSansThai-SemiBold',
              }}>
              {getTabName(step)}
            </Text>
            <Text
              style={{
                width: 32,
              }}></Text>
          </View>
        )}
        {(() => {
          switch (step) {
            case 1:
              return (
                <Register
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                  navigation={navigation}
                />
              );
            case 2:
              return (
                <FormGender
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                />
              );
            case 3:
              return (
                <FormBirth
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                />
              );
            case 4:
              return (
                <FormWeight
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                />
              );
            case 5:
              return (
                <FormHeight
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                />
              );
            case 6:
              return (
                <FormFrq
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                />
              );
            case 7:
              return (
                <FormGoal
                  nextStep={nextStep}
                  previousStep={previousStep}
                  onUpdateState={onUpdateState}
                  state={state}
                  onSubmitRegister={onSubmitRegister}
                />
              );

            default:
              break;
          }
        })()}
        <CustomModal title="สมัครสำเร็จ" isVisible={isModalVisible} />
        <CustomModalError title="สมัครไม่สำเร็จ" isVisible={isModalVisibleError} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  box: {},
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 110,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: 10,
  },
  errorTxt: {
    color: '#FD9A86',
    paddingTop: 8,
  },
});

export default RegisterModule;
