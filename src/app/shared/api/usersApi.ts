import axios from "axios";
import { AxiosResponse } from "axios";
import { TUserResponse } from "../types/user.type";

const url = "https://jsonplaceholder.typicode.com/users";

export const fetchUsers = async (limit: number): Promise<TUserResponse[]> => {
  try {
    const response: AxiosResponse = await axios.get(url, {
      headers: {
        Accept: "application/json",
      },
      method: "GET",
      params: {
        _limit: limit,
      },
    });

    return response.data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export const updateUserRequest = async (id: number, user: unknown) => {
  try {
    const response: AxiosResponse = await axios.put(`${url}/${id}`, user);
    return response.status;
  } catch (error) {
    console.log(error);
  }
};
