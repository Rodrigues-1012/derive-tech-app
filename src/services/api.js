import axios from "axios";

import getConfig from "next/config";

export const fetchApi = async function (
  endpoint,
  payload,
  headers,
  auth,
  method = "get"
) {
  const { publicRuntimeConfig } = getConfig();
  // if (headers === {}) {
  //   headers["Accept"] = "application/json";
  // } else if (headers === 1) {
  //   headers = {};
  // }

  if (!headers || Object.keys(headers).length === 0) {
    headers = { Accept: "application/json" };
  } else if (headers === 1) {
    headers = {};
  }

  if (auth === true) {
    headers["Apikey"] = "ca1e984376b1648ee77d7f5cefbcdd8171b40aab";
  }
  const axiosConfig = {
    headers,
    method: method.toLowerCase(),
  };
  if (axiosConfig.method === "get") {
    axiosConfig.params = payload;
  } else if (axiosConfig.method === "delete") {
    axiosConfig.params = payload;
  } else {
    axiosConfig.data = payload;
  }

  // var url1 = "https://derivetech-admin.softdemonew.info/api/v1/" + endpoint;
  var url1 = process.env.NEXT_PUBLIC_API_URL + endpoint;

  return axios(url1, axiosConfig);
};

axios.interceptors.request.use(
  function (config) {
    // spinning start to show
    // UPDATE: Add this code to show global loading indicator
    // document.body.classList.add("loading-indicator");

    // const token = window.localStorage.token;
    // if (token) {
    //   config.headers.Authorization = `token ${token}`;
    // }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    // spinning hide
    // UPDATE: Add this code to hide global loading indicator
    // document.body.classList.remove("loading-indicator");

    return response;
  },
  function (error) {
    if (error.response.status == 500) {
      document.getElementById("errorPopUp").style.display = "flex";
    }
    return Promise.reject(error);
  }
);
