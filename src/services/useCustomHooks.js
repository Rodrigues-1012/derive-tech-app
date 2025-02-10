import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchApi = axios.create({
  // baseURL: "https://derivetech-admin.softdemonew.info/api/v1/",
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    Apikey: "ca1e984376b1648ee77d7f5cefbcdd8171b40aab",
    Accept: "application/json",
  },
});

export const useQueryHooks = (key) => {
  return useQuery([key], async () => {
    try {
      const response = await fetchApi.get(key);
      // console.log("response", response);

      if (response.data.message === "Not found") {
        throw new Error(response.data.message);
      }
      return response.data.data;
    } catch (err) {
      // console.log('err', err)
      throw new Error(err);
    }
  });
};
