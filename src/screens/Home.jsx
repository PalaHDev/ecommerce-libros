import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import CategoryItem from "../components/CategoryItem";
import { colors } from "../global/colors";
import { useGetCategoriesQuery } from "../services/shopServices";


const Home = ({ navigation, route }) => {
  const {data: categories} = useGetCategoriesQuery();
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(category) => category}
        data={categories}
        renderItem={({ item }) => (
          <CategoryItem category={item} navigation={navigation} />
        )}
        numColumns={2} 
        contentContainerStyle={styles.flatListContent}
        key={(2).toString()} 
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.skyBlue300,
    flex: 1,
    padding: 10,
  },
  flatListContent: {
    justifyContent: "space-between",
  },
});
