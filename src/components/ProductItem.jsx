import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Card from "./Card";
import { colors } from "../global/colors";

import { useDispatch } from "react-redux";
import { setItemSelected } from "../features/Shop/ShopSlice";
import getImage from "../utils/imageUtils";

const ProductItem = ({
  product,
  navigation
}) => {

  const dispatch = useDispatch()

  const handleNavigate = () => {
    dispatch(setItemSelected(product.title))
    navigation.navigate("ItemDetail", { productoId: product.id });
  }

  return (
    <Card style={styles.additionalStylesCard}>
      <Pressable
        style={styles.pressable}
        onPress={handleNavigate}
      >
        <View style={styles.contenedorText}>
          <Text style={styles.textCategory}>{product.title}</Text>
          <Text style={styles.textautor}>{product.author}</Text>
          <Text style={styles.textautor}>${product.price}</Text>
        </View>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={getImage(product.images[0])}
        />
      </Pressable>
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 120,
    width: "30%",
    borderRadius: 8,
  },
  additionalStylesCard: {
    height: 120,
    width: 300,
    margin: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  contenedorText:{
    flexDirection: 'column',
     maxWidth: '70%' 
  },
  textCategory: {
    color: colors.skyBlue700,
  },
  textautor: {
    fontSize:12,
    color: colors.skyBlue900,
  },
  pressable: {
    width: "100%",
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 10,
  }
});
