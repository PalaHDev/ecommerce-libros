import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyProfile from "../screens/MyProfile";
import ImageSelector from "../screens/ImageSelector";
import Header from "../components/Header";

const Stack = createNativeStackNavigator()

const MyProfileStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Mi Perfil"
      screenOptions={{
        headerShown:false,
      }}
    >
      <Stack.Screen name="Mi Perfil" component={MyProfile} options={{
        headerShown:true,
        header: () => {
          return <Header title="Mi Perfil" />;
        },
      }} />
      <Stack.Screen name="Image Selector" component={ImageSelector} options={{
        headerShown:true,
        header: () => {
          return <Header title="Selección imagen" isVolver={true} />;
        },
      }} />
    </Stack.Navigator>
  );
}

export default MyProfileStackNavigator
