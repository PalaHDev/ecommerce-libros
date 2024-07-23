import { View, Text } from 'react-native'
import React from 'react'

export default function NoSearchResultComponent({descripcion}) {
  return (
    <View>
       <Text textAlign='center'>{descripcion}</Text>
       {/* No hay resultados que coincidan con tu búsqueda */}
    </View>
  )
}