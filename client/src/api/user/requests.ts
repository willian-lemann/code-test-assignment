import axios from "axios";
import { API_BASE_URL } from "./constants";
import { User } from "./types";

const URL = `${API_BASE_URL}/users`;
console.log(URL);

export const fetchUsers = async () => {
  const response = await axios.get(URL);
  return response.data as User[];
};

export const fetchUserById = async (id: string) => {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
};

export const createUser = async (newUser: User) => {
  const response = await axios.post(`${URL}`, newUser);
  return response.data;
};

export const updateUser = async (id: string, updatedUser: User) => {
  console.log("Updating user with ID:", id);
  const response = await axios.put(`${URL}/${id}`, updatedUser);
  return response.data;
};

export const deleteUser = async (id: number) => {
  await axios.delete(`${URL}/${id}`);
};
