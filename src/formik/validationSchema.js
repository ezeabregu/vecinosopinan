import * as Yup from "yup";

export const validationLogin = Yup.object({
  email: Yup.string()
    .email("El correo debe ser válido")
    .required("Debes ingresar el email"),
  password: Yup.string().required("Debes ingresar la contraseña"),
});

export const validationSingup = Yup.object({
  name: Yup.string().trim().required("Debes colocar un nombre"),
  email: Yup.string()
    .email("El correo debe ser válido")
    .required("Debes ingresar el email"),
  password: Yup.string().required("Debes ingresar la contraseña"),
});
