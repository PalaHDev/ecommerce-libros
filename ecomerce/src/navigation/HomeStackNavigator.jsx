
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../screens/Home";
import ItemListCategory from "../screens/ItemListCategory";
import ItemDetail from "../screens/itemDetail";
import Header from "../components/Header";

const Stack = createNativeStackNavigator();

export default function HomeStackNavigator() {
  return (
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{headerShown: false}}
          >
            <Stack.Screen
             options={{
              headerShown: true,
              header: () => {
                return <Header title="Categorías"/>;
              },
            }}
            name="Home" component={Home} />
            <Stack.Screen
            options={{
              headerShown: true,
              header: () => {
                return <Header title="Categorías" isVolver={true} />;
              },
            }}
              name="ItemListCategory"
              component={ItemListCategory}
            />
            <Stack.Screen 
             options={{
              headerShown: true,
              header: () => {
                return <Header title="Detalle" isVolver={true} />;
              },
            }}
            name="ItemDetail" component={ItemDetail} />
          </Stack.Navigator>
  );
}
