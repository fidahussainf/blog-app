import axiosClient from "..";

class AuthAPI {
  static signIn(data) {
    return axiosClient.post("/api/auth/login", data);
  }
  static signUp(data) {
    return axiosClient.post('/api/auth/register', data);
  }
  static logout(data) {
    return axiosClient.post('/api/auth/logout', data);
  }
}
export default AuthAPI;
