import httpClient from "../helper/httpClient";
import https from "https";

class LoginModel {
  login = async (controllerId: string, username: string, password: string) => {
    const payload = {
      username: username,
      password: password,
    };
    const response = await httpClient.post(
      `/${controllerId}/api/v2/login`,
      payload
    );
    return response;
  };
}

export default LoginModel;
