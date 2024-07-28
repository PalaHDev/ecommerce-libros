import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text } from "react-native";
import { useFonts } from "expo-font";
import { colors } from "./src/global/colors";

import Navigator from "./src/navigation/Navigator";

import { Provider } from "react-redux";
import store from "./src/store";

import { initSQLiteDB } from "./src/persistence"; 
import Toast from 'react-native-toast-message';
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    (async () => {
      try {
        const response = await initSQLiteDB();
      } catch (error) {
        Toast.show({
          type: 'error',
          text1: 'Ha ocurrido un error inesperado',
          position: 'bottom'
        });
      }
    })();
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    Josefin: require("./assets/JosefinSans-Regular.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
        <Navigator />
        <Toast />
      </Provider>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    backgroundColor: colors.lightGray,
  },
});
