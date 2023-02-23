import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [user, setUser] = useState('');
  const [username, setUsername] = useState('');

  const login = async payload => {
    setIsLoading(true);
    setUserToken(payload.access_token);
    setUser(JSON.parse(JSON.stringify(payload.user)));
    const newUser = String(payload.user.username)
    setUsername(newUser);
    await AsyncStorage.setItem('userToken', payload.access_token);
    await AsyncStorage.setItem('user', JSON.stringify(payload.user));
    await AsyncStorage.setItem('username', payload.user.username);
    console.log('userToken',userToken);
    console.log('payload.user',payload.user);
    setIsLoading(false);
    console.log('user checked',newUser);
    console.log('user check',username);
  };

  const getTokenData = () => {
    const decoded = jwt_decode(userToken);
    return decoded;
  };

  const checkExpired = () => {
    const decoded = jwt_decode(userToken);
    const expired = new Date(decoded.exp * 1000);
    const today = new Date();
    return today > expired;
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    setUsername('');
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('username');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      let username = await AsyncStorage.getItem('username');
      setUserToken(userToken);
      setUsername(username);
      setIsLoading(false);
    } catch (e) {
      console.log(`is logged in error ${e}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, checkExpired, getTokenData, isLoading, userToken, user, username, setUser}}>
      {children}
    </AuthContext.Provider>
  );
};
