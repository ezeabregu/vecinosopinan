import * as Yup from "yup";

export const validationLogin = Yup.object({
  email: Yup.string()
    .email("El correo debe ser válido")
    .required("Campo requerido"),
  password: Yup.string().required("Campo requerido"),
});
