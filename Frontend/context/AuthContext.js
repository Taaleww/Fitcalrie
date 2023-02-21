import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);

  const login = async token => {
    setIsLoading(true);
    setUserToken(token);
    await AsyncStorage.setItem('userToken', token);
    setIsLoading(false);
  };

  const getTokenData = async () => {
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
    AsyncStorage.removeItem('userToken');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userToken = await AsyncStorage.getItem('userToken');
      setUserToken(userToken);
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
      value={{login, logout, checkExpired, getTokenData, isLoading, userToken}}>
      {children}
    </AuthContext.Provider>
  );
};
