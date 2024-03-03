import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL;

console.log("><><><>", baseUrl)

export const login = async(payload) => {
      try {
            const res = await axios.post(`${baseUrl}/login`, payload);
            localStorage.setItem('authToken', res.data)
            return res.data
      } catch (error) {
            console.log("Login failed", error.message)
      };
}

export const signup = async(payload) => {
      try {
            const res = await axios.post(`${baseUrl}/register`, payload);
            return res.data
      } catch (error) {
            console.log("Register failed", error.message)
      }
}