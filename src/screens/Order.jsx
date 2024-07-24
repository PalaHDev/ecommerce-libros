import { StyleSheet, View, FlatList } from 'react-native'
import OrderItem from "../components/OrderItem";
import { useSelector } from 'react-redux';
import { useGetOrdersByUserQuery } from '../services/shopServices';
import { useEffect } from 'react';

const Order = () => {
  const { items } = useSelector((state) => state.cart.value);
  const { data: OrderData, isLoading, refetch } = useGetOrdersByUserQuery('prueba@gmail.com');
  useEffect(() => {
    if (items.length === 0) {
      refetch();
    }
  }, [items]);
  if(!isLoading){
    console.log(OrderData,'OrderData:::::')
  }
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id.toString()}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
}

export default Order

const styles = StyleSheet.create({})
