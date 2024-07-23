import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../global/colors';
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const Header = ({ title, isVolver = false }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {isVolver &&
        <Pressable onPress={() => navigation.goBack()} style={styles.iconContainer}>
          <FontAwesome5 name="chevron-left" size={24} color="black" />
        </Pressable>
      }
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
        <Image
        resizeMode="cover"
        style={{width: 80,
          height: 80,}}
        source={require('../../assets/logo7_20_224920.png')}
      />
      </View>
      
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: colors.skyBlue700,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 15, // Espacio entre el ícono y el borde izquierdo
  },
  textContainer: {
    flex: 25, // Da más espacio al contenedor del texto
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row'
  },
  text: {
    color: colors.skyBlue300,
    fontSize: 22,
    fontFamily: 'Josefin',
  },
});
