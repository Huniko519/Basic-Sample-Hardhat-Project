import axios from "axios";
import jwt_decode from "jwt-decode";

import setAuthToken from "../utils/setAuthToken";

class AuthServce {
  register(userdata) {
    return axios
      .post("/api/auth", userdata)
      .then((res) => {
        if (res.data.success) {
          return { error: false, data: res.data };
        } else {
          return { error: true, data: res.data.msg };
        }
      })
      .catch((err) => {
        return { error: true, data: err.data };
      });
  }

  login(authdata) {
    return axios.post("/api/auth", authdata).then((res) => {
      if (res.data.success) {
        // Set token to localStorage
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        return { error: false, data: res.data };
      } else {
        return { error: true, data: res.data.msg };
      }
    });
  }

  logout() {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
  }
}

export default new AuthServce();
