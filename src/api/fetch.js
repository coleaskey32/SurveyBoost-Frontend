import axios from "axios";

export const registerUser = async (userData) => {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/users/register/",
      userData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      });
    return response;
};

export const signInUser = async (userData) => {
    const response = await axios.post("http://127.0.0.1:8000/api/users/signin/", userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
};

