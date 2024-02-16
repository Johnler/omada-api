import httpClient from "../helper/httpClient";

class InfoModel {
  info = async () => {
    const reponse = await httpClient.get("/api/info");
    return reponse;
  };

  status = async (payload: any) => {
    const { token, cookie, controllerId } = payload;
    httpClient.defaults.headers.common["CSRF-TOKEN"] = token;
    httpClient.defaults.headers.common["Cookie"] = cookie;
    const response = await httpClient.get(
      `/${controllerId}/api/v2/maintenance/controllerStatus`
    );
    return response;
  };

  infoSite = async (payload: any) => {
    const { token, cookie, controllerId, siteKey } = payload;
    httpClient.defaults.headers.common["CSRF-TOKEN"] = token;
    httpClient.defaults.headers.common["Cookie"] = cookie;
    const response = await httpClient.get(
      `/${controllerId}/api/v2/users/current`
    );
    return response;
  };
}

export default InfoModel;
