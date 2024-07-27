import { object, string, ref } from "yup";

export const signupSchema = object().shape({
  email: string().required("Correo electrónico es requerido").email("Correo electrónico no válido"),
  password: string()
    .required("Contraseña es requerida")
    .min(6, "Contraseña debe tener al menos 6 caracteres"),
  confirmPassword: string()
    .oneOf([ref("password"), null], "Las contraseñas deben coincidir")
    .required("Confirmar contraseña es requerida"),
});

export const loginSchema = object().shape({
    email: string().required("Correo electrónico es requerido").email("Correo electrónico no válido"),
    password: string()
      .required("Contraseña es requerida")
      .min(6, "Contraseña debe tener al menos 6 caracteres"),
  });
  