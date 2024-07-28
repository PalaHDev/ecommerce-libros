# E-commerce React Native App with Expo
Este proyecto es una plataforma de eCommerce dedicada a la venta de libros. Los usuarios pueden explorar una amplia variedad de libros, agregar productos a su carrito de compras y generar órdenes de compra. Además, la aplicación incluye funcionalidades de login y registro, así como la configuración del perfil de usuario con la posibilidad de añadir una foto de perfil.

## :hammer:Funcionalidades del proyecto
- `Catálogo de Libros`: Los usuarios pueden explorar una variedad de libros disponibles para la venta.
- `Carrito de Compras`: Los usuarios pueden agregar libros a su carrito y proceder a la compra.
- `Órdenes de Compra`: Los usuarios pueden generar y visualizar sus órdenes de compra.
- `Login y Registro`: Funcionalidades de autenticación para que los usuarios puedan crear una cuenta y acceder a la plataforma.
- `Perfil de Usuario`: Los usuarios pueden configurar su perfil y añadir una foto.

## Estructura del Proyecto

```plaintext
ECOMMERCE-LIBROS/
├── assets/                   # Recursos estáticos (imágenes, fuentes, etc.)
├── src/                      # Carpeta principal del proyecto
│   ├── components/           # Componentes de UI reutilizables
│   ├── databases/            # Configuración de la base de datos en Firebase
│   ├── features/             # Slices de Redux y lógica relacionada
│   ├── global/               # Estilos globales, colores, etc.
│   ├── navigation/           # Configuración de la navegación de la aplicación
│   ├── persistence/          # Funciones para manejar la persistencia de datos con SQLite
│   ├── screens/              # Pantallas de la aplicación
│   ├── services/             # Servicios API
│   ├── store/                # Configuración de la tienda de Redux
│   ├── utils/                # Funciones utilitarias y esquemas de validación
├── App.js                    # Archivo principal de la aplicación
├── package.json              # Dependencias y scripts del proyecto
└── README.md                 # Documentación del proyecto
```

## Requisitos Previos
Asegúrate de tener instalados los siguientes requisitos en tu sistema:
- Node.js (versión 14 o superior)
- npm (versión 6 o superior)
- Expo CLI (puedes instalarlo globalmente con 'npm install -g expo-cli')

## Dependencias del Proyecto
Este proyecto utiliza las siguientes dependencias:
- @expo/metro-runtime: "~3.2.1"
- @hookform/resolvers: "^3.9.0"
- @react-navigation/bottom-tabs: "^6.5.20"
- @react-navigation/native: "^6.1.17"
- @react-navigation/native-stack: "^6.9.26"
- @reduxjs/toolkit: "^2.2.5"
- expo: "~51.0.9"
- expo-font: "~12.0.6"
- expo-splash-screen: "~0.27.4"
- expo-status-bar: "~1.12.1"
- react: "18.2.0"
- react-dom: "18.2.0"
- react-hook-form: "^7.52.1"
- react-native: "0.74.1"
- react-native-safe-area-context: "4.10.1"
- react-native-screens: "3.31.1"
- react-native-toast-message: "^2.2.0"
- react-native-web: "~0.19.10"
- react-redux: "^9.1.2"
- yup: "^1.4.0"
- expo-sqlite: "~13.4.0"
- expo-image-picker: "~15.0.6"
- expo-file-system: "~17.0.1"

## 📁 Acceso al proyecto
```plaintext
git clone https://github.com/PalaHDev/ecommerce-libros.git
```
## 🛠️ Abre y ejecuta el proyecto
- Instala las dependencias
```plaintext
npm install
```
- Inicia el proyecto
```plaintext
npx expo start
```
## :smile: Autor
| [<img src="https://avatars.githubusercontent.com/u/165714147?s=400&u=0ab21839c3de487a8327e71cb743e1555daa675c&v=4" width=115><br><sub>Paula Herrera Contreras</sub>](https://github.com/PalaHDev) |  
| :---: | 

## Información Adicional
- Documentación de Expo: https://docs.expo.dev/
- Documentación de React Native: https://reactnative.dev/docs/getting-started
- Documentación de React Navigation: https://reactnavigation.org/docs/getting-started/
- Documentación de Redux Toolkit: https://redux-toolkit.js.org/introduction/getting-started
