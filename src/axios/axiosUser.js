import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const createUser = async (name, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/register`, {
      name,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return alert("Ocurrió un error");
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/auth/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return alert(error.response.data.msg);
  }
};
