import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { colors } from "../global/colors";
import { useState } from "react";

import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Search = ({ onSearch = () => { }, error = '', goBack = () => { } }) => {
  const [keyword, setKeyword] = useState('');

  //buscar de forma inmediata los libros
  const handleChangeText = (text) => {
    setKeyword(text);
    onSearch(text);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Buscar libro..."
          value={keyword}
          onChangeText={handleChangeText}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>

      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome5 name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => handleChangeText("")}>
        <FontAwesome6 name="eraser" size={24} color="black" />
      </Pressable>     
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 18,
  },
  inputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 4,
    width: "65%",
  },
  input: {
    width: 250,
    padding: 8,
    fontSize: 18,
    backgroundColor: colors.skyBlue700,
    color: colors.gray100,
    borderRadius: 10,
  },
  errorText: {
    color: colors.white,
    fontSize: 16,
    fontFamily: "Josefin",
  },
});
