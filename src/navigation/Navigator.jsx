import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTapNavigator from './BottomTapNavigator';
import AuthStackNavigator from './AuthStackNavigator';
import { useDispatch, useSelector } from 'react-redux';
import { getSession } from '../persistence';
import { useEffect } from 'react';
import { setUser } from '../features/User/UserSlice';
import Toast from 'react-native-toast-message';

const Navigator = () => {
  const { user: userRedux } = useSelector((state) => state.auth.value);
  const dispatch = useDispatch();
  
  useEffect(() => {
    (async () => {
      try {
        const response = await getSession();
        if (response.rows.length) {
          const user = response.rows._array[0];
          dispatch(setUser({
            email: user.email,
            localId: user.localId,
            idToken: user.token,
          }));
        }
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Ha ocurrido un error inesperado',
          position: 'bottom'
        });
      }
    })();
  }, [dispatch]);

  return (
    <NavigationContainer>
      {userRedux ? <BottomTapNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({});
