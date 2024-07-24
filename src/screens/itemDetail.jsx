import React, { useEffect, useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { useDispatch } from "react-redux";
import { useGetProductByIdQuery } from "../services/shopServices";
import Toast from "react-native-toast-message";
import { addCartItem } from "../features/Cart/CartSlice";
import getImage from "../utils/imageUtils";

const ItemDetail = ({ route, navigation }) => {
  const { width, height } = useWindowDimensions();
  const [orientation, setOrientation] = useState("portrait");
  //const [product, setProduct] = useState(null);
  const { productoId: idSelected } = route.params;
  const dispatch = useDispatch()
  const { data: product, error, isLoading } = useGetProductByIdQuery(idSelected);

  console.log("width: " + width);
  console.log("heigth: " + height);

  // Landscape: Horisontal
  // Portraint: Vertical

  useEffect(() => {
    if (width > height) setOrientation("landscape");
    else setOrientation("portrait");
  }, [width, height]);

  useEffect(() => {
    console.log(product, 'product');
  }, [product]);

  const handleAgregarAlCarrito = () => {
    dispatch(addCartItem({ ...product, quantity: 1 }));
    Toast.show({
      type: 'success',
      text1: 'Confirmación',
      text2: 'Se ha agregado al carrito!',
      position: 'bottom'
    });
  }

  return (
    <View>
      {product ? (
        <View
          style={
            orientation === "portrait"
              ? styles.mainContainer
              : styles.mainContainerLandscape
          }
        >
          <Image
             source={getImage(product.images[0])} 
            style={
              orientation === "portrait" ? styles.image : styles.imageLandscape
            }
            resizeMode="contain"
          />
          <View
            style={
              orientation === "portrait"
                ? styles.textContainer
                : styles.textContainerLandscape
            }
          >
            <Text>{product.title}</Text>
            <Text>{product.description}</Text>
            <Text style={styles.price}>${product.price}</Text>
            <Button title="Agregar al carrito" onPress={handleAgregarAlCarrito}></Button>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: 10,
    gap: 10,
  },
  image: {
    width: "100%",
    height: 250,
  },
  imageLandscape: {
    width: "45%",
    height: 200,
  },

  textContainer: {
    flexDirection: "column",
  },
  textContainerLandscape: {
    width: "50%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: 10,
  },
  price: {
    textAlign: "right",
  },
});
