import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Entypo } from "@expo/vector-icons";
import { colors } from '../global/colors';
import { useDispatch } from 'react-redux';
import { removeCartItem } from '../features/Cart/CartSlice';
import Toast from 'react-native-toast-message';

const CartItem = ({cartItem}) => {
  const dispatch = useDispatch();
  const handleRemoveCart = () => {
    dispatch(removeCartItem({ ...cartItem }));
    Toast.show({
      type: 'info',
      text1: 'Se ha eliminado del carrito!',
      position: 'bottom'
    });
  }
  return (
    <View style={styles.card}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>
          {cartItem.title} {cartItem.quantity}
        </Text>
        <Text>{cartItem.brand}</Text>
        <Text>{cartItem.price}</Text>
      </View>
      <Pressable onPress={handleRemoveCart}>
        <Entypo name="trash" size={30} color="black" />
      </Pressable>
    </View>
  );
}

export default CartItem

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.gray100,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontFamily: "Josefin",
    fontSize: 19,
    color: colors.skyBlue900,
  },
  text2: {
    fontFamily: "Josefin",
    fontSize: 14,
    color: colors.skyBlue700,
  },
});
