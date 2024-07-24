import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native'
import CartItem from '../components/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { usePostOrderMutation } from '../services/shopServices';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { clearCart } from '../features/Cart/CartSlice';
import Toast from 'react-native-toast-message';
import { colors } from '../global/colors';
import NoSearchResultComponent from '../components/NoSearchResultComponent';


const Cart = () => {
  const { items: CartData, total, updatedAt } = useSelector((state) => state.cart.value)
  const dispatch = useDispatch();
  const [triggerPostOrder, result] = usePostOrderMutation()
  const navigation = useNavigation();
  const onConfirmarOrden = () => {
    // logica de confirmacion de orden
    console.log(CartData, 'CartData::::::');
    triggerPostOrder({ items: CartData, user: 'prueba@gmail.com', total, createdAt: updatedAt })
  }
  useEffect(() => {
    if (result.isSuccess) {
      // Vaciar el carrito después de crear la orden
      dispatch(clearCart());
      Toast.show({
        type: 'success',
        text1: 'Confirmación',
        text2: 'Se ha generado la orden correctamente!',
        position: 'bottom'
      });
      navigation.navigate('Ordenes', { screen: 'OrderScreen' });
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <FlatList
        data={CartData}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
        keyExtractor={(producto) => producto.id}
      />
      {CartData.length === 0 ?
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <NoSearchResultComponent descripcion="Ups! no hay items en tu carrito." />
        </View>
        :
        <View style={styles.totalContainer}>
          <Pressable style={styles.confirmar} onPress={onConfirmarOrden}>
            <Text>Confirmar Orden</Text>
            <Text>Total: $ {total}</Text>
          </Pressable>
        </View>
      }


    </View>
  );
}

export default Cart

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    flex: 1,
    marginBottom: 100,
  },
  confirmar: {
    backgroundColor: colors.skyBlue300,
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    width: 200,
    justifyContent: 'center',
    borderRadius: 15
  },
  totalContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
    marginHorizontal:15
  },
});
