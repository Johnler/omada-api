import httpClient from "../helper/httpClient";

class HotspotInterfaceModel {
  listOfVouchers = async (payload: any) => {
    const {
      cookie,
      token,
      controllerId,
      siteKey,
      startPage = 1,
      endPage = 10,
      status = "All",
    } = payload;
    httpClient.defaults.headers.common["CSRF-TOKEN"] = token;
    httpClient.defaults.headers.common["Cookie"] = cookie;
    const response = await httpClient.get(
      `/${controllerId}/api/v2/hotspot/sites/${siteKey}/vouchers?currentPage=${startPage}&currentPageSize=${endPage}&status=${status}`
    );
    return response;
  };
}

export default HotspotInterfaceModel;
