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

  createVoucher = async (payload: any) => {
    const { cookie, token, controllerId, siteKey, minutes } = payload;
    const data = {
      codeLength: 6,
      amount: 1,
      type: 0,
      durationType: 1,
      duration: minutes, // Duration in minutes
      note: null,
      maxUsers: 1,
      portals: [`${siteKey}`],
      // downLimitEnable: true,
      // downLimit: 51200,
      // downLimitUnit: 1,
      // upLimitEnable: true,
      // upLimit: 51200,
      // upLimitUnit: 1,
      // trafficLimitEnable: false,
      // trafficLimit: null,
    };
    httpClient.defaults.headers.common["CSRF-TOKEN"] = token;
    httpClient.defaults.headers.common["Cookie"] = cookie;
    const response = await httpClient.post(
      `/${controllerId}/api/v2/hotspot/sites/${siteKey}/vouchers`,
      data
    );
    
    return response;
  };
}

export default HotspotInterfaceModel;
