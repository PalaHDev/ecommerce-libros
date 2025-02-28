import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { colors } from "../global/colors";
import Search from "../components/Search";
import ProductItem from "../components/ProductItem.jsx";
import { useGetProductsByCategoryQuery } from "../services/shopServices.js";
import NoSearchResultComponent from "../components/NoSearchResultComponent.jsx";

const ItemListCategory = ({ navigation, route }) => {
  const [keyWord, setKeyword] = useState("");
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [error, setError] = useState("");

  const { category: categorySelected } = route.params;

  const { data: productsFetched, error: errorFetched, isLoading } = useGetProductsByCategoryQuery(categorySelected);

  useEffect(() => {
    if (!isLoading) {
      const productsFiter = productsFetched.filter((product) =>
        product.title.toLocaleLowerCase().includes(keyWord.toLocaleLowerCase())
      );
      setProductsFiltered(productsFiter);
      setError("");
    }

  }, [keyWord, categorySelected, productsFetched, isLoading]);

  return (
    <View style={styles.flatListContainer}>
      <Search
        error={error}
        onSearch={setKeyword}
        goBack={() => navigation.goBack()}
      />
      <FlatList
        data={productsFiltered}
        renderItem={({ item }) => (
          <ProductItem product={item} navigation={navigation} />
        )}
        keyExtractor={(producto) => producto.id}
      />
      {productsFiltered.length === 0 &&
        <NoSearchResultComponent descripcion="No hay resultados que coincidan con tu búsqueda"/>
        }
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  flatListContainer: {
    width: "100%",
    backgroundColor: colors.skyBlue300,
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
});
