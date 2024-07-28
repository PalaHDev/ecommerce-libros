import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import { colors } from '../global/colors'
import { useDispatch, useSelector } from "react-redux";
import { useGetProfileimageQuery } from '../services/shopServices'
import { clearUser } from '../features/User/UserSlice';
import { truncateSessionTable } from '../persistence';
import ThemedButton from '../components/ThemedButton';
import Toast from 'react-native-toast-message';

const MyProfile = ({navigation}) => {

      const dispatch = useDispatch()
      const {imageCamera, localId} = useSelector((state) => state.auth.value)
      const {data: imageFromBase} = useGetProfileimageQuery(localId)
      const launchCamera = async () => {
        navigation.navigate("Image Selector");
      };

      const defaultImageRoute = "../../assets/user.png";

      const signOut = async () => {
        try {
          const response = await truncateSessionTable()
          dispatch(clearUser())
        } catch (error) {
          Toast.show({
            type: 'error',
            text1: 'ha ocurrido un error inesperado',
            position: 'bottom'
          });
        }
      }

  return (
    <View style={styles.container}>
      {imageFromBase || imageCamera ? (
        <Image
          source={{ uri: imageFromBase?.image || imageCamera }}
          style={styles.img}
          resizeMode="cover"
        />
      ) : (
        <Image
          style={styles.img}
          resizeMode="cover"
          source={require(defaultImageRoute)}
        />
      )}
      <ThemedButton
        onPress={launchCamera}
        title={
          imageFromBase || imageCamera
            ? "Modificar foto de perfil"
            : "Agregar foto de perfil"
        }
      />
      <ThemedButton onPress={signOut} title="Salir" />
    </View>
  );
}

export default MyProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 200,
    borderRadius: 100
  },
  btn: {
    marginTop: 10,
    backgroundColor: colors.green700,
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 7,
    borderRadius: 5
  }
})
